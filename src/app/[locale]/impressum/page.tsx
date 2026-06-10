import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/getDictionary";
import { type Locale, hreflangAlternates } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const baseUrl = locale === "cs" ? "https://moduloparking.cz" : "https://moduloparking.at";
  const lp = locale === "de" || locale === "cs" ? "" : `/${locale}`;
  return {
    title: dict.common.footer.imprint,
    description: dict.common.footer.imprint,
    alternates: {
      canonical: `${baseUrl}${lp}/impressum`,
      languages: hreflangAlternates(`/impressum`),
    },
  };
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main id="main" className="pt-20">
        <section className="py-16 bg-[var(--background)] relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
            <span className="tech-label">Legal</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-[var(--foreground)]">
              {dict.common.footer.imprint}
            </h1>
          </div>
        </section>

        <section className="py-12 bg-[var(--background-secondary)]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            {/*
              TODO (vom Betreiber auszufüllen): Bitte die [PLATZHALTER] durch die
              echten Firmen-/Rechtsdaten ersetzen. Pflichtangaben nach § 5 ECG
              und § 25 MedienG (Österreich).
            */}
            <div className="article-body">
              <h2>Angaben gemäß § 5 ECG &amp; § 25 MedienG</h2>
              <p>
                <strong>Modulo Parking Austria</strong>
                <br />
                [PLATZHALTER: vollständiger Firmenwortlaut / Medieninhaber]
                <br />
                [PLATZHALTER: Straße und Hausnummer]
                <br />
                [PLATZHALTER: PLZ Ort], Österreich
              </p>

              <h3>Kontakt</h3>
              <p>
                Telefon:{" "}
                <a href="tel:+436767263487">+43 676 726 34 87</a>
                <br />
                E-Mail:{" "}
                <a href="mailto:info@moduloparking.at">info@moduloparking.at</a>
              </p>

              <h3>Unternehmensdaten</h3>
              <p>
                Unternehmensgegenstand: Vertrieb von MODULO Parksystemen
                <br />
                UID-Nummer: [PLATZHALTER: ATU………]
                <br />
                Firmenbuchnummer: [PLATZHALTER: FN ……… ]
                <br />
                Firmenbuchgericht: [PLATZHALTER: zuständiges Landesgericht]
                <br />
                Gewerbebehörde: [PLATZHALTER: zuständige Bezirkshauptmannschaft / Magistrat]
                <br />
                Mitglied der WKO: [PLATZHALTER: ja/nein – Sparte]
              </p>

              <h3>Vertretungsbefugnis</h3>
              <p>[PLATZHALTER: Geschäftsführer / vertretungsbefugte Person(en)]</p>

              <h3>Online-Streitbeilegung</h3>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben. Wir sind nicht
                verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren
                vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h3>Haftung für Inhalte &amp; Links</h3>
              <p>
                Die Inhalte dieser Seiten wurden mit größtmöglicher Sorgfalt
                erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
                Inhalte können wir jedoch keine Gewähr übernehmen. Unser Angebot
                enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                keinen Einfluss haben; für diese fremden Inhalte ist stets der
                jeweilige Anbieter verantwortlich.
              </p>

              <h3>Urheberrecht</h3>
              <p>
                Die durch den Betreiber erstellten Inhalte und Werke auf diesen
                Seiten unterliegen dem Urheberrecht. „MODULO" sowie die gezeigten
                Produktbezeichnungen und Abbildungen sind Eigentum des Herstellers
                (PROMStahl Sp. z o.o.) und werden mit Genehmigung verwendet.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
