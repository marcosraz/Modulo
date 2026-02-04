import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { products, categories } from "@/data/products";
import { BreadcrumbSchema } from "@/components/SEO";

export const metadata: Metadata = {
  title: "Parksysteme & Parkplattformen",
  description:
    "Entdecken Sie das MODULO Produktportfolio: Parklifte, Doppelparker, Stapelparker und mehrstöckige Parksysteme. Über 7 verschiedene Systemserien für jeden Anwendungsfall. Jetzt Produkte vergleichen.",
  keywords: [
    "Parkplattformen kaufen",
    "Parklift Preise",
    "Doppelparker",
    "Stapelparker",
    "MODULO Parker",
    "Parksystem Vergleich",
  ],
  alternates: {
    canonical: "https://modullo-parking.at/produkte",
  },
  openGraph: {
    title: "MODULO Parksysteme & Parkplattformen | Produktübersicht",
    description:
      "Über 7 verschiedene Parksystem-Serien für Garagen, Tiefgaragen und Parkhäuser. Parklifte, Doppelparker und automatische Systeme.",
    url: "https://modullo-parking.at/produkte",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Produkte", href: "/produkte" },
];

export default function ProduktePage() {
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
              <span className="tech-label">Produktportfolio</span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
                {products.length}+ Systeme für jeden{" "}
                <span className="text-gradient">Anwendungsfall</span>
              </h1>
              <p className="mt-6 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
                Von der privaten Doppelgarage bis zum mehrstöckigen Parkhaus –
                MODULO bietet die passende Lösung für Ihre Anforderungen.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { value: `${products.length}+`, label: "Systeme" },
                { value: "6x", label: "mehr Kapazität" },
                { value: "100%", label: "verzinkt" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-mono font-bold text-[var(--modulo-accent)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--foreground-muted)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 bg-[var(--background-secondary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Category Filter (static for now) */}
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category, index) => (
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

            {/* Products */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/produkte/${product.slug}`}
                  className="card group block"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-[var(--background)] overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.featured && (
                      <div className="absolute top-4 right-4 bg-[var(--modulo-accent)] text-white px-3 py-1 text-xs font-semibold uppercase">
                        Beliebt
                      </div>
                    )}
                    <div className="absolute top-4 left-4 text-xs font-mono text-[var(--modulo-accent)]">
                      {product.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="tech-label">{product.tagline}</span>
                    <h2 className="mt-2 text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--modulo-accent)] transition-colors">
                      {product.name}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--foreground-muted)] line-clamp-2">
                      {product.description}
                    </p>

                    {/* Specs */}
                    <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                      <div className="p-2 bg-[var(--background)] text-center">
                        <div className="text-[var(--modulo-accent)] font-mono">
                          {product.specs.vehicles}
                        </div>
                        <div className="text-[var(--foreground-muted)]">
                          Fahrzeuge
                        </div>
                      </div>
                      <div className="p-2 bg-[var(--background)] text-center">
                        <div className="text-[var(--modulo-accent)] font-mono">
                          {product.specs.levels}
                        </div>
                        <div className="text-[var(--foreground-muted)]">
                          Ebenen
                        </div>
                      </div>
                      <div className="p-2 bg-[var(--background)] text-center">
                        <div className="text-[var(--modulo-accent)] font-mono text-[10px]">
                          {product.specs.capacity}
                        </div>
                        <div className="text-[var(--foreground-muted)]">
                          Tragkraft
                        </div>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="mt-6 btn-outline w-full inline-flex items-center justify-center gap-2 text-sm">
                      Details ansehen
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

        {/* Downloads Section */}
        <section className="py-24 bg-[var(--background)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="tech-label">Downloads</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--foreground)]">
              Technische Datenblätter
            </h2>
            <p className="mt-4 text-[var(--foreground-muted)] max-w-xl mx-auto">
              Laden Sie detaillierte Produktinformationen und technische
              Spezifikationen herunter.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {/* Catalog */}
              <a
                href="/docs/katalog_modulo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-[var(--modulo-accent)] bg-[var(--modulo-accent)]/10 hover:bg-[var(--modulo-accent)]/20 text-[var(--foreground)] transition-colors"
              >
                <svg
                  className="w-8 h-8 text-[var(--modulo-accent)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <div className="text-left">
                  <div className="font-semibold text-[var(--modulo-accent)]">
                    MODULO Katalog
                  </div>
                  <div className="text-xs text-[var(--foreground-muted)]">
                    Komplettes Produktportfolio
                  </div>
                </div>
              </a>

              {/* Product PDFs */}
              {products.slice(0, 5).flatMap((product) =>
                product.pdfs.slice(0, 1).map((pdf) => (
                  <a
                    key={pdf.file}
                    href={pdf.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-[var(--border)] hover:border-[var(--modulo-accent)] text-[var(--foreground)] hover:text-[var(--modulo-accent)] transition-colors"
                  >
                    <svg
                      className="w-6 h-6 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <div className="text-left">
                      <div className="font-medium text-sm">{product.name}</div>
                      <div className="text-xs text-[var(--foreground-muted)]">
                        {pdf.size}
                      </div>
                    </div>
                  </a>
                ))
              )}
            </div>

            <Link
              href="/kontakt"
              className="mt-8 btn-primary inline-flex items-center gap-2"
            >
              Alle Datenblätter anfordern
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
