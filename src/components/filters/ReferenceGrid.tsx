"use client";

import { useState } from "react";
import type { Reference } from "@/data/references";

interface CategoryButton {
  value: string;
  label: string;
}

interface Props {
  references: Reference[];
  categoryButtons: CategoryButton[];
  categoryLabels: Record<string, string>;
  locale: string;
  dict: any;
}

function getCategoryIcon(category: string) {
  switch (category) {
    case "residential":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    case "commercial":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "hotel":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 3v18m6-18v18" />
        </svg>
      );
    case "public":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ReferenceGrid({ references, categoryButtons, categoryLabels, dict }: Props) {
  const [active, setActive] = useState(categoryButtons[0]?.value ?? "all");
  const filtered = active === "all" ? references : references.filter((r) => r.category === active);
  const featured = filtered.filter((r) => r.featured);
  const others = filtered.filter((r) => !r.featured);

  return (
    <>
      {/* Category Filter */}
      <section className="py-8 bg-[var(--background-secondary)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center" role="group" aria-label={dict.references.label}>
            {categoryButtons.map((category) => {
              const isActive = active === category.value;
              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setActive(category.value)}
                  aria-pressed={isActive}
                  className={`px-4 py-2 text-sm font-medium rounded-[var(--radius-base)] border transition-colors ${
                    isActive
                      ? "bg-[var(--modulo-accent)] border-[var(--modulo-accent)] text-white"
                      : "border-[var(--border-strong)] text-[var(--foreground-muted)] hover:border-[var(--modulo-accent)] hover:text-[var(--modulo-accent)]"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featured.length > 0 && (
        <section className="py-16 bg-[var(--background-secondary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
              {dict.references.highlightProjects}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featured.map((ref) => (
                <div key={ref.id} className="card overflow-hidden">
                  <div className="p-6 bg-[var(--background)] border-b border-[var(--border)]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-[var(--modulo-accent)]/10 rounded-[var(--radius-base)] text-[var(--modulo-accent)]">
                        {getCategoryIcon(ref.category)}
                      </div>
                      <span className="text-xs font-medium text-[var(--modulo-accent)] uppercase tracking-wide">
                        {categoryLabels[ref.category] || ref.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--foreground)]">{ref.name}</h3>
                    <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                      {ref.location.city}, {ref.location.country}
                    </p>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[var(--foreground-muted)]">{ref.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {ref.products.map((product) => (
                        <span key={product} className="chip">{product}</span>
                      ))}
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4 pt-4 border-t border-[var(--border)]">
                      <div>
                        <div className="text-xl font-mono font-bold text-[var(--modulo-accent)] tabular-nums">
                          {ref.parkingSpaces}
                        </div>
                        <div className="text-xs text-[var(--foreground-muted)]">
                          {dict.common.products.parkingSpaces}
                        </div>
                      </div>
                      <div>
                        <div className="text-xl font-mono font-bold text-[var(--modulo-accent)] tabular-nums">
                          {ref.year}
                        </div>
                        <div className="text-xs text-[var(--foreground-muted)]">
                          {dict.common.products.completion}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Projects */}
      {others.length > 0 && (
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
              {dict.references.moreProjects}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {others.map((ref) => (
                <div key={ref.id} className="flex gap-6 p-6 card card--flat">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[var(--background)] border border-[var(--border)] rounded-[var(--radius-base)] text-[var(--modulo-accent)]">
                    {getCategoryIcon(ref.category)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-[var(--foreground)]">{ref.name}</h3>
                      <span className="text-xs text-[var(--foreground-muted)]">({ref.year})</span>
                    </div>
                    <p className="text-sm text-[var(--foreground-muted)]">
                      {ref.location.city} · {ref.parkingSpaces} {dict.common.products.parkingSpaces}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {ref.products.map((product) => (
                        <span key={product} className="text-xs text-[var(--modulo-accent)]">{product}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
