"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

function localePath(path: string, locale: string): string {
  if (locale === "de") return path;
  return `/${locale}${path}`;
}

interface Props {
  products: Product[];
  categories: string[];
  categoryLabels?: Record<string, string>;
  locale: string;
  dict: any;
}

export default function ProductGrid({ products, categories, categoryLabels = {}, locale, dict }: Props) {
  const [active, setActive] = useState(categories[0]);
  const filtered = active === categories[0] ? products : products.filter((p) => p.category === active);
  const label = (key: string) => categoryLabels[key] ?? key;

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-12" role="group" aria-label={dict.common.nav.products}>
        {categories.map((category) => {
          const isActive = active === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={isActive}
              className={`px-4 py-2 text-sm font-medium rounded-[var(--radius-base)] border transition-colors ${
                isActive
                  ? "bg-[var(--modulo-accent)] border-[var(--modulo-accent)] text-white"
                  : "border-[var(--border-strong)] text-[var(--foreground-muted)] hover:border-[var(--modulo-accent)] hover:text-[var(--modulo-accent)]"
              }`}
            >
              {label(category)}
            </button>
          );
        })}
      </div>

      {/* Products */}
      {filtered.length === 0 ? (
        <p className="text-[var(--foreground-muted)] py-12 text-center">—</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <Link
              key={product.slug}
              href={localePath(`/produkte/${product.slug}`, locale)}
              className="card card--interactive group flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] image-well overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1536px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
                {product.featured && (
                  <div className="absolute top-4 right-4 badge badge--solid">
                    {dict.common.products.popular}
                  </div>
                )}
                <div className="absolute top-4 left-4 text-xs font-mono text-[var(--modulo-accent)] bg-[var(--background)]/70 px-2 py-1 rounded-[var(--radius-sharp)] backdrop-blur-sm">
                  {label(product.category)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="tech-label">{product.tagline}</span>
                <h2 className="mt-2 text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--modulo-accent)] transition-colors">
                  {product.name}
                </h2>
                <p className="mt-2 text-sm text-[var(--foreground-muted)] line-clamp-2">
                  {product.description}
                </p>

                {/* Specs */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                  <div className="p-2 bg-[var(--background)] rounded-[var(--radius-sharp)] text-center min-w-0">
                    <div className="text-[var(--modulo-accent)] font-mono">{product.specs.vehicles}</div>
                    <div className="text-[var(--foreground-muted)]">{dict.common.products.vehicles}</div>
                  </div>
                  <div className="p-2 bg-[var(--background)] rounded-[var(--radius-sharp)] text-center min-w-0">
                    <div className="text-[var(--modulo-accent)] font-mono">{product.specs.levels}</div>
                    <div className="text-[var(--foreground-muted)]">{dict.common.products.levels}</div>
                  </div>
                  <div className="p-2 bg-[var(--background)] rounded-[var(--radius-sharp)] text-center min-w-0">
                    <div className="text-[var(--modulo-accent)] font-mono text-[10px] leading-tight break-words">{product.specs.capacity}</div>
                    <div className="text-[var(--foreground-muted)]">{dict.common.products.loadCapacity}</div>
                  </div>
                </div>

                {/* Action */}
                <div className="mt-6 btn-outline w-full inline-flex items-center justify-center gap-2 text-sm">
                  {dict.common.products.viewDetails}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
