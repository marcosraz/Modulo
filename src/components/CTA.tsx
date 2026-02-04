"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 bg-[var(--background)] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--modulo-accent)]/10 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--modulo-accent)]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--modulo-accent)]/10 border border-[var(--modulo-accent)]/30 text-[var(--modulo-accent)] text-sm font-mono">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Kostenlose Beratung
        </span>

        {/* Heading */}
        <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Bereit für mehr{" "}
          <span className="text-gradient">Parkkapazität?</span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-[var(--foreground-muted)] max-w-2xl mx-auto">
          Kontaktieren Sie uns für eine unverbindliche Beratung. Wir finden die
          optimale Lösung für Ihre Anforderungen.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/kontakt" className="btn-primary inline-flex items-center justify-center gap-2">
            Jetzt Angebot anfordern
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href="tel:+436767263487"
            className="btn-outline inline-flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +43 676 726 34 87
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-[var(--foreground-muted)]">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--modulo-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Unverbindlich
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--modulo-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Kostenlos
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--modulo-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Persönliche Beratung
          </div>
        </div>
      </div>
    </section>
  );
}
