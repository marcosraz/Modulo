"use client";

const targetGroups = [
  {
    id: "private",
    title: "Privatkunden",
    description: "Für Eigenheimbesitzer mit kleinen Grundstücken oder mehreren Fahrzeugen.",
    features: [
      "Doppelgarage optimieren",
      "Oldtimer sicher lagern",
      "Wertsteigerung der Immobilie",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: "developer",
    title: "Immobilienentwickler",
    description: "Maximieren Sie die Stellplatzzahl bei Neubauprojekten und erfüllen Sie Stellplatzverordnungen effizient.",
    features: [
      "Stellplatzverordnung erfüllen",
      "Baukosten reduzieren",
      "Attraktives Verkaufsargument",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "commercial",
    title: "Gewerblich",
    description: "Hotels, Bürogebäude und Autohäuser profitieren von platzsparenden Parklösungen.",
    features: [
      "Hotels & Gastronomie",
      "Büro- & Geschäftsgebäude",
      "Autohäuser & Werkstätten",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "public",
    title: "Öffentliche Hand",
    description: "Städte, Kommunen und öffentliche Einrichtungen optimieren ihre Parkflächen.",
    features: [
      "Öffentliche Parkplätze",
      "Krankenhäuser",
      "Bildungseinrichtungen",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
];

export default function TargetGroups() {
  return (
    <section className="py-24 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="tech-label">Zielgruppen</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Für wen ist <span className="text-gradient">MODULO?</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Von der privaten Garage bis zum öffentlichen Parkhaus – unsere Systeme
            passen sich Ihren Anforderungen an.
          </p>
        </div>

        {/* Target Groups Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {targetGroups.map((group) => (
            <div
              key={group.id}
              className="group p-8 bg-[var(--background)] border border-[var(--border)] hover:border-[var(--modulo-accent)] transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center border border-[var(--modulo-accent)]/30 text-[var(--modulo-accent)] group-hover:bg-[var(--modulo-accent)] group-hover:text-[var(--modulo-black)] transition-all duration-300">
                  {group.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[var(--foreground)] group-hover:text-[var(--modulo-accent)] transition-colors">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-[var(--foreground-muted)]">
                    {group.description}
                  </p>

                  {/* Features list */}
                  <ul className="mt-4 space-y-2">
                    {group.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-[var(--foreground)]"
                      >
                        <svg
                          className="w-4 h-4 text-[var(--modulo-accent)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
