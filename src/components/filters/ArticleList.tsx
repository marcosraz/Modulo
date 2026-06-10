"use client";

import { useState } from "react";
import Link from "next/link";
import type { Article } from "@/data/articles";

function localePath(path: string, locale: string): string {
  if (locale === "de") return path;
  return `/${locale}${path}`;
}

interface Props {
  articles: Article[];
  categories: string[];
  categoryLabels?: Record<string, string>;
  locale: string;
  dict: any;
}

export default function ArticleList({ articles, categories, categoryLabels = {}, locale, dict }: Props) {
  const [active, setActive] = useState(categories[0]);
  const filtered = active === categories[0] ? articles : articles.filter((a) => a.category === active);
  const label = (key: string) => categoryLabels[key] ?? key;
  const featured = filtered.filter((a) => a.featured);
  const others = filtered.filter((a) => !a.featured);

  return (
    <>
      {/* Categories */}
      <section className="py-8 bg-[var(--background-secondary)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center" role="group" aria-label={dict.guidesPage.label}>
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
        </div>
      </section>

      {/* Featured Articles */}
      {featured.length > 0 && (
        <section className="py-16 bg-[var(--background-secondary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
              {dict.guidesPage.featuredArticles}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((article) => (
                <Link
                  key={article.slug}
                  href={localePath(`/ratgeber/${article.slug}`, locale)}
                  className="card card--interactive group block"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="badge badge--ghost">{label(article.category)}</span>
                      <span className="text-xs text-[var(--foreground-muted)]">
                        {article.readingTime} {dict.guidesPage.readingTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--modulo-accent)] transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-sm text-[var(--foreground-muted)] line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 text-sm text-[var(--modulo-accent)] flex items-center gap-2 font-medium">
                      {dict.guidesPage.readArticle}
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
            {dict.guidesPage.allArticles}
          </h2>
          {others.length === 0 && featured.length === 0 ? (
            <p className="text-[var(--foreground-muted)]">—</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {others.map((article) => (
                <Link
                  key={article.slug}
                  href={localePath(`/ratgeber/${article.slug}`, locale)}
                  className="flex gap-6 p-6 card card--flat group"
                >
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-[var(--background)] border border-[var(--border)] rounded-[var(--radius-base)] text-[var(--modulo-accent)]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium text-[var(--modulo-accent)]">{label(article.category)}</span>
                      <span className="text-xs text-[var(--foreground-muted)]">
                        {article.readingTime} {dict.guidesPage.readingTime}
                      </span>
                    </div>
                    <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--modulo-accent)] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--foreground-muted)] line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
