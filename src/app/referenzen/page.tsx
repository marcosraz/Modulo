import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { references, referenceCategories } from "@/data/references";
import { BreadcrumbSchema } from "@/components/SEO";

export const metadata: Metadata = {
  title: "Referenzen | Realisierte Parksysteme in Österreich",
  description:
    "Referenzprojekte von MODULO Parksystemen in Österreich: Wohnanlagen, Hotels, Gewerbe und öffentliche Einrichtungen. Sehen Sie unsere erfolgreich umgesetzten Projekte.",
  keywords: [
    "MODULO Referenzen",
    "Parksystem Projekte",
    "Parkplattformen Österreich",
    "Realisierte Parksysteme",
  ],
  alternates: {
    canonical: "https://moduloparking.at/referenzen",
  },
  openGraph: {
    title: "Referenzen | Modullo Parking Austria",
    description:
      "Erfolgreich umgesetzte Parksystem-Projekte in ganz Österreich.",
    url: "https://moduloparking.at/referenzen",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Referenzen", href: "/referenzen" },
];

function getCategoryLabel(category: string): string {
  const cat = referenceCategories.find((c) => c.value === category);
  return cat ? cat.label : category;
}

function getCategoryIcon(category: string) {
  switch (category) {
    case "residential":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    case "commercial":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "hotel":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 3v18m6-18v18" />
        </svg>
      );
    case "public":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ReferenzenPage() {
  const featuredRefs = references.filter((r) => r.featured);
  const otherRefs = references.filter((r) => !r.featured);

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
              <span className="tech-label">Referenzen</span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
                Erfolgreich <span className="text-gradient">realisiert</span>
              </h1>
              <p className="mt-6 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
                Entdecken Sie unsere erfolgreich umgesetzten Parksystem-Projekte
                in ganz Österreich – von privaten Wohnanlagen bis zu öffentlichen
                Parkeinrichtungen.
              </p>
            </div>

          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-[var(--background-secondary)] border-b border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {referenceCategories.map((category, index) => (
                <button
                  key={category.value}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    index === 0
                      ? "bg-[var(--modulo-accent)] text-white"
                      : "border border-[var(--border)] text-[var(--foreground-muted)] hover:border-[var(--modulo-accent)] hover:text-[var(--modulo-accent)]"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 bg-[var(--background-secondary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
              Highlight-Projekte
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredRefs.map((ref) => (
                <div
                  key={ref.id}
                  className="card overflow-hidden"
                >
                  {/* Header */}
                  <div className="p-6 bg-[var(--background)] border-b border-[var(--border)]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-[var(--modulo-accent)]/10 text-[var(--modulo-accent)]">
                        {getCategoryIcon(ref.category)}
                      </div>
                      <span className="text-xs font-medium text-[var(--modulo-accent)] uppercase">
                        {getCategoryLabel(ref.category)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--foreground)]">
                      {ref.name}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                      {ref.location.city}, {ref.location.country}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-[var(--foreground-muted)]">
                      {ref.description}
                    </p>

                    {/* Products */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {ref.products.map((product) => (
                        <span
                          key={product}
                          className="px-2 py-1 text-xs border border-[var(--border)] text-[var(--foreground)]"
                        >
                          {product}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="mt-4 grid grid-cols-2 gap-4 pt-4 border-t border-[var(--border)]">
                      <div>
                        <div className="text-xl font-mono font-bold text-[var(--modulo-accent)]">
                          {ref.parkingSpaces}
                        </div>
                        <div className="text-xs text-[var(--foreground-muted)]">
                          Stellplätze
                        </div>
                      </div>
                      <div>
                        <div className="text-xl font-mono font-bold text-[var(--modulo-accent)]">
                          {ref.year}
                        </div>
                        <div className="text-xs text-[var(--foreground-muted)]">
                          Fertigstellung
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
              Weitere Projekte
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherRefs.map((ref) => (
                <div
                  key={ref.id}
                  className="flex gap-6 p-6 bg-[var(--background-secondary)] border border-[var(--border)]"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[var(--background)] border border-[var(--border)] text-[var(--modulo-accent)]">
                    {getCategoryIcon(ref.category)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-[var(--foreground)]">
                        {ref.name}
                      </h3>
                      <span className="text-xs text-[var(--foreground-muted)]">
                        ({ref.year})
                      </span>
                    </div>
                    <p className="text-sm text-[var(--foreground-muted)]">
                      {ref.location.city} · {ref.parkingSpaces} Stellplätze
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {ref.products.map((product) => (
                        <span
                          key={product}
                          className="text-xs text-[var(--modulo-accent)]"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[var(--modulo-accent)]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ihr Projekt als nächstes?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Werden Sie Teil unserer Erfolgsprojekte. Kontaktieren Sie uns für
              eine unverbindliche Beratung zu Ihrem Parkprojekt.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[var(--modulo-accent)] font-semibold hover:bg-gray-100 transition-colors"
              >
                Projekt anfragen
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
              <Link
                href="/produkte"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Produkte ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
