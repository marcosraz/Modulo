"use client";

import Image from "next/image";
import Link from "next/link";

function localePath(path: string, locale: string): string {
  if (locale === "de") return path;
  return `/${locale}${path}`;
}

const productImages = [
  { id: "parker-c", image: "/images/products/parker-c100-basic.png", featured: true },
  { id: "parker-s", image: "/images/products/parker-s100.jpg", featured: false },
  { id: "stacker-p", image: "/images/products/stacker-p10.webp", featured: false },
  { id: "stacker-v", image: "/images/products/stacker-p10.webp", featured: false },
  { id: "ls-system", image: "/images/products/parker-c120.png", featured: true },
  { id: "pallet", image: "/images/products/pallet-system.webp", featured: false },
];

export default function ProductsOverview({ locale, dict }: { locale: string; dict: any }) {
  const items = dict.home.products.items;

  return (
    <section className="py-24 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="tech-label">{dict.home.products.label}</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            {dict.home.products.title}{" "}
            <span className="text-gradient">{dict.home.products.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            {dict.home.products.description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((product: any, index: number) => {
            const imageData = productImages[index] || productImages[0];
            return (
              <Link
                key={imageData.id}
                href={localePath("/produkte", locale)}
                className={`card group ${
                  imageData.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-[var(--background)] overflow-hidden">
                  <Image
                    src={imageData.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                  {imageData.featured && (
                    <div className="absolute top-4 right-4 bg-[var(--modulo-accent)] text-[var(--modulo-black)] px-3 py-1 text-xs font-semibold uppercase">
                      {dict.common.products.popular}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="tech-label">{product.tagline}</span>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--modulo-accent)] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--foreground-muted)]">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="mt-4 flex gap-4 text-xs font-mono">
                    <span className="px-2 py-1 bg-[var(--border)]/50 text-[var(--foreground)]">
                      {product.capacity}
                    </span>
                    <span className="px-2 py-1 bg-[var(--border)]/50 text-[var(--foreground)]">
                      {product.levels}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-sm text-[var(--modulo-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>{dict.common.products.viewDetails}</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href={localePath("/produkte", locale)} className="btn-outline inline-flex items-center gap-2">
            {dict.common.products.viewAllProducts}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
