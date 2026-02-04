import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, articleCategories } from "@/data/articles";
import { BreadcrumbSchema } from "@/components/SEO";

export const metadata: Metadata = {
  title: "Ratgeber Parksysteme | Wissen & Tipps",
  description:
    "Ratgeber rund um Parksysteme: Kaufberatung, Vergleiche, Kosten und Wartung. Alles was Sie über Parkplattformen, Parklifte und Doppelparker wissen müssen.",
  keywords: [
    "Parksystem Ratgeber",
    "Parkplattform Kaufberatung",
    "Parklift Vergleich",
    "Doppelparker Tipps",
  ],
  alternates: {
    canonical: "https://modullo-parking.at/ratgeber",
  },
  openGraph: {
    title: "Ratgeber Parksysteme | Modullo Parking Austria",
    description:
      "Wissen und Tipps rund um Parksysteme. Kaufberatung, Vergleiche und Pflegetipps.",
    url: "https://modullo-parking.at/ratgeber",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Ratgeber", href: "/ratgeber" },
];

export default function RatgeberPage() {
  const featuredArticles = articles.filter((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-[var(--background)] relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 gradient-radial" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <span className="tech-label">Ratgeber</span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
                Wissen rund um{" "}
                <span className="text-gradient">Parksysteme</span>
              </h1>
              <p className="mt-6 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
                Kaufberatung, Vergleiche und Tipps – alles was Sie über
                Parkplattformen, Parklifte und Doppelparker wissen müssen.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-[var(--background-secondary)] border-b border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {articleCategories.map((category, index) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    index === 0
                      ? "bg-[var(--modulo-accent)] text-white"
                      : "border border-[var(--border)] text-[var(--foreground-muted)] hover:border-[var(--modulo-accent)] hover:text-[var(--modulo-accent)]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="py-16 bg-[var(--background-secondary)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
                Beliebte Artikel
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/ratgeber/${article.slug}`}
                    className="card group block"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 text-xs font-medium bg-[var(--modulo-accent)]/10 text-[var(--modulo-accent)]">
                          {article.category}
                        </span>
                        <span className="text-xs text-[var(--foreground-muted)]">
                          {article.readingTime} Min. Lesezeit
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--modulo-accent)] transition-colors">
                        {article.title}
                      </h3>
                      <p className="mt-3 text-sm text-[var(--foreground-muted)] line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="mt-4 text-sm text-[var(--modulo-accent)] flex items-center gap-2">
                        Artikel lesen
                        <svg
                          className="w-4 h-4"
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
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Articles */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
              Alle Artikel
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/ratgeber/${article.slug}`}
                  className="flex gap-6 p-6 bg-[var(--background-secondary)] border border-[var(--border)] hover:border-[var(--modulo-accent)] transition-colors group"
                >
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-[var(--background)] border border-[var(--border)] text-[var(--modulo-accent)]">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium text-[var(--modulo-accent)]">
                        {article.category}
                      </span>
                      <span className="text-xs text-[var(--foreground-muted)]">
                        {article.readingTime} Min.
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[var(--background-secondary)]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <span className="tech-label">Fragen?</span>
            <h2 className="mt-4 text-3xl font-bold text-[var(--foreground)]">
              Persönliche Beratung gewünscht?
            </h2>
            <p className="mt-4 text-[var(--foreground-muted)]">
              Unsere Experten beraten Sie gerne zu allen Fragen rund um
              Parksysteme. Kontaktieren Sie uns für ein unverbindliches
              Gespräch.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Beratung anfordern
                <svg
                  className="w-4 h-4"
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
              </Link>
              <a
                href="tel:+436767263487"
                className="btn-outline inline-flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Jetzt anrufen
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
