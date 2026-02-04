"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "parker-c",
    name: "PARKER-C Serie",
    tagline: "Unabhängige Plattformen",
    description:
      "Bis zu 4 Fahrzeuge mit unabhängigem Zugang. Ideal für Mehrfamilienhäuser und gewerbliche Nutzung.",
    capacity: "2-4 Fahrzeuge",
    levels: "2 Ebenen",
    image: "/images/products/parker-c100-basic.png",
    featured: true,
  },
  {
    id: "parker-s",
    name: "PARKER-S Serie",
    tagline: "Für niedrige Decken",
    description:
      "Geneigte Plattformen für Garagen mit begrenzter Deckenhöhe. Maximale Flexibilität bei minimalem Platzbedarf.",
    capacity: "2-6 Fahrzeuge",
    levels: "2-3 Ebenen",
    image: "/images/products/parker-s100.jpg",
    featured: false,
  },
  {
    id: "stacker-p",
    name: "STACKER-P10",
    tagline: "Kompakt & effizient",
    description:
      "Kompakte Lösung für kleine Unternehmen, Hotels und private Garagen. Nur 2,5m Breite erforderlich.",
    capacity: "2 Fahrzeuge",
    levels: "2 Ebenen",
    image: "/images/products/stacker-p10.webp",
    featured: false,
  },
  {
    id: "stacker-v",
    name: "STACKER-V10",
    tagline: "Leichteste Variante",
    description:
      "Optimiert für Standorte mit begrenzter Höhe. Die leichteste aller MODULO Parkplattformen.",
    capacity: "2 Fahrzeuge",
    levels: "2 Ebenen",
    image: "/images/products/stacker-p10.webp",
    featured: false,
  },
  {
    id: "ls-system",
    name: "LS-System",
    tagline: "Mehrstöckig & flexibel",
    description:
      "Bis zu 3 Ebenen mit vollautomatischem Betrieb möglich. Unterirdisch, Erdgeschoss und oberirdisch kombinierbar.",
    capacity: "bis 6 Fahrzeuge",
    levels: "2-3 Ebenen",
    image: "/images/products/parker-c120.png",
    featured: true,
  },
  {
    id: "pallet",
    name: "PALLET-System",
    tagline: "Automatisches Schieben",
    description:
      "Automatisiertes System auf Basis verschiebbarer Paletten. Eliminiert Fehlparken und Kollisionen.",
    capacity: "flexibel",
    levels: "1 Ebene",
    image: "/images/products/pallet-system.webp",
    featured: false,
  },
];

export default function ProductsOverview() {
  return (
    <section className="py-24 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="tech-label">Produktportfolio</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            10 Systeme für jeden{" "}
            <span className="text-gradient">Anwendungsfall</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Von der privaten Doppelgarage bis zum mehrstöckigen Parkhaus –
            MODULO bietet die passende Lösung.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Link
              key={product.id}
              href="/produkte"
              className={`card group ${
                product.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] bg-[var(--background)] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
                {product.featured && (
                  <div className="absolute top-4 right-4 bg-[var(--modulo-accent)] text-[var(--modulo-black)] px-3 py-1 text-xs font-semibold uppercase">
                    Beliebt
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
                  <span>Details ansehen</span>
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
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/produkte" className="btn-outline inline-flex items-center gap-2">
            Alle Produkte ansehen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
