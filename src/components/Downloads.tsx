"use client";

import Link from "next/link";

const downloads = [
  {
    title: "MODULO Produktkatalog",
    description: "Kompletter Katalog aller MODULO Parkplattformen mit technischen Details, Zeichnungen und Anwendungsbeispielen.",
    file: "/docs/katalog_modulo.pdf",
    size: "8.1 MB",
    type: "PDF",
    featured: true,
  },
  {
    title: "Parker-C120 Basic Datenblatt",
    description: "Technische Spezifikationen der dreistöckigen Parker-C120 Basic Plattform.",
    file: "/docs/parker-c120-basic-cz.pdf",
    size: "1.7 MB",
    type: "PDF",
    featured: false,
  },
  {
    title: "Stacker-P10 Datenblatt",
    description: "Technische Details zur kompakten Stacker-P10 Lösung.",
    file: "/docs/modulo-stacker-p10-cz.pdf",
    size: "1.8 MB",
    type: "PDF",
    featured: false,
  },
  {
    title: "LS1000 Datenblatt",
    description: "Mehrstöckiges System LS1000 - technische Dokumentation.",
    file: "/docs/modulo-LS1000-cz.pdf",
    size: "1.3 MB",
    type: "PDF",
    featured: false,
  },
  {
    title: "Pallet-T10 Datenblatt",
    description: "Automatisches Paletten-Parksystem T10 - Spezifikationen.",
    file: "/docs/pallet-t10-cz.pdf",
    size: "1.3 MB",
    type: "PDF",
    featured: false,
  },
];

export default function Downloads() {
  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="tech-label">Downloads</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--foreground)]">
            Technische{" "}
            <span className="text-gradient">Dokumentation</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Laden Sie detaillierte Produktinformationen, technische Zeichnungen
            und den vollständigen MODULO Katalog herunter.
          </p>
        </div>

        {/* Downloads Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloads.map((item) => (
            <a
              key={item.file}
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className={`card p-6 flex flex-col group ${
                item.featured ? "md:col-span-2 lg:col-span-1 border-[var(--modulo-accent)]/50" : ""
              }`}
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-[var(--modulo-accent)]/10 text-[var(--modulo-accent)] rounded-lg mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                {item.featured && (
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-[var(--modulo-accent)] text-white rounded mb-2">
                    Empfohlen
                  </span>
                )}
                <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--modulo-accent)] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--foreground-muted)]">
                  {item.description}
                </p>
              </div>

              {/* Meta */}
              <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs">
                <span className="font-mono text-[var(--foreground-muted)]">{item.type}</span>
                <span className="font-mono text-[var(--modulo-accent)]">{item.size}</span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-[var(--foreground-muted)] mb-4">
            Benötigen Sie weitere Unterlagen oder individuelle Angebote?
          </p>
          <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
            Kontakt aufnehmen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
