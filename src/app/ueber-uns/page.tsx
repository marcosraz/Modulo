import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/SEO";

export const metadata: Metadata = {
  title: "Über uns - MODULO Vertriebspartner Österreich",
  description:
    "Ihr lokaler Partner für MODULO Parksysteme in Österreich. Teil eines europaweiten Netzwerks mit über 100 Jahren Industrieerfahrung. Beratung, Planung und Service aus einer Hand.",
  keywords: [
    "MODULO Österreich",
    "Parksysteme Vertrieb",
    "PROMStahl",
    "Parkplattformen Partner",
  ],
  alternates: {
    canonical: "https://modullo-parking.at/ueber-uns",
  },
  openGraph: {
    title: "Über uns | Modullo Parking Austria",
    description:
      "Offizieller MODULO Vertriebspartner in Österreich. Über 100 Jahre Industrieerfahrung im Konzern.",
    url: "https://modullo-parking.at/ueber-uns",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Über uns", href: "/ueber-uns" },
];

export default function UeberUnsPage() {
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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="tech-label">Über uns</span>
                <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
                  Ihr Partner für{" "}
                  <span className="text-gradient">intelligentes Parken</span>
                </h1>
                <p className="mt-6 text-lg text-[var(--foreground-muted)]">
                  Als offizieller Vertriebspartner von MODULO in Österreich
                  bringen wir über 100 Jahre europäische Industrieerfahrung in
                  Ihr Projekt.
                </p>
              </div>
              <div className="relative">
                <div className="tech-frame">
                  <div className="aspect-square bg-[var(--background-secondary)] flex items-center justify-center">
                    <Image
                      src="/images/logos/MODULO.svg"
                      alt="Modulo Logo"
                      width={200}
                      height={60}
                      className="brightness-0 invert"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Modulo */}
        <section className="py-24 bg-[var(--background-secondary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <span className="tech-label">Der Hersteller</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--foreground)]">
                  MODULO / PROMStahl
                </h2>
                <p className="mt-6 text-[var(--foreground-muted)]">
                  MODULO ist eine Marke der PROMStahl Sp. z o.o., Teil der PJP
                  Makrum Gruppe mit über 100 Jahren Industrieerfahrung. Seit
                  2016 entwickelt und fertigt MODULO innovative Parkplattformen
                  am Standort Koronowo bei Bydgoszcz, Polen.
                </p>
                <p className="mt-4 text-[var(--foreground-muted)]">
                  Alle Produkte werden von eigenen Ingenieuren entwickelt und in
                  der firmeneigenen Fabrik mit höchsten Qualitätsstandards
                  gefertigt. Die vollverzinkte Stahlkonstruktion garantiert
                  maximale Langlebigkeit und Korrosionsbeständigkeit.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="p-4 border border-[var(--border)]">
                    <div className="text-3xl font-mono font-bold text-[var(--modulo-accent)]">
                      2016
                    </div>
                    <div className="text-sm text-[var(--foreground-muted)]">
                      Gründungsjahr
                    </div>
                  </div>
                  <div className="p-4 border border-[var(--border)]">
                    <div className="text-3xl font-mono font-bold text-[var(--modulo-accent)]">
                      100+
                    </div>
                    <div className="text-sm text-[var(--foreground-muted)]">
                      Jahre Erfahrung (Konzern)
                    </div>
                  </div>
                  <div className="p-4 border border-[var(--border)]">
                    <div className="text-3xl font-mono font-bold text-[var(--modulo-accent)]">
                      10+
                    </div>
                    <div className="text-sm text-[var(--foreground-muted)]">
                      Produktvarianten
                    </div>
                  </div>
                  <div className="p-4 border border-[var(--border)]">
                    <div className="text-3xl font-mono font-bold text-[var(--modulo-accent)]">
                      24/7
                    </div>
                    <div className="text-sm text-[var(--foreground-muted)]">
                      Technischer Support
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span className="tech-label">Das Netzwerk</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--foreground)]">
                  Europaweite Präsenz
                </h2>
                <p className="mt-6 text-[var(--foreground-muted)]">
                  MODULO verfügt über ein europaweites Netzwerk von
                  Vertriebspartnern und Service-Zentren. In Österreich sind wir
                  Ihr lokaler Ansprechpartner für Beratung, Planung und Service.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    {
                      country: "Polen",
                      role: "Hauptsitz & Produktion",
                      city: "Bydgoszcz / Koronowo",
                    },
                    {
                      country: "Deutschland",
                      role: "Vertrieb DACH",
                      city: "Gehrden bei Hannover",
                    },
                    {
                      country: "Tschechien",
                      role: "Vertrieb CZ",
                      city: "Brno",
                    },
                    {
                      country: "Österreich",
                      role: "Vertrieb AT",
                      city: "Bundesweit",
                    },
                  ].map((location) => (
                    <div
                      key={location.country}
                      className="flex items-center gap-4 p-4 bg-[var(--background)] border border-[var(--border)]"
                    >
                      <div className="w-3 h-3 bg-[var(--modulo-accent)]" />
                      <div className="flex-1">
                        <div className="font-semibold text-[var(--foreground)]">
                          {location.country}
                        </div>
                        <div className="text-sm text-[var(--foreground-muted)]">
                          {location.role} · {location.city}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-24 bg-[var(--background)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="tech-label">Warum wir?</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--foreground)]">
                Ihre Vorteile mit uns
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Lokaler Ansprechpartner",
                  description:
                    "Persönliche Beratung in Deutsch, schnelle Reaktionszeiten und Verständnis für lokale Gegebenheiten.",
                  icon: (
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Komplettservice",
                  description:
                    "Von der ersten Beratung über die Planung bis zur Installation und Wartung – alles aus einer Hand.",
                  icon: (
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Erfahrung & Know-how",
                  description:
                    "Teil eines Netzwerks mit jahrelanger Erfahrung in der Vermarktung und Installation von MODULO Systemen.",
                  icon: (
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-8 border border-[var(--border)] hover:border-[var(--modulo-accent)] transition-colors"
                >
                  <div className="w-14 h-14 flex items-center justify-center border border-[var(--modulo-accent)]/30 text-[var(--modulo-accent)] mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[var(--foreground-muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Logos */}
        <section className="py-16 bg-[var(--background-secondary)] border-t border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-12">
              <a
                href="https://moduloparking.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-50 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/images/logos/MODULO.svg"
                  alt="Modulo"
                  width={120}
                  height={30}
                  className="brightness-0 invert"
                />
              </a>
              <a
                href="https://sdil.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-50 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/images/logos/sdil-logo.png"
                  alt="SDIL"
                  width={100}
                  height={40}
                  className="brightness-0 invert"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
