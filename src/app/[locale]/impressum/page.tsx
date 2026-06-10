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
  const isCz = locale === "cs";

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
            {isCz ? (
              /* ---------- Czech market ---------- */
              <div className="article-body">
                <h2>Provozovatel</h2>
                <p>
                  <strong>Sdil Building Automotive s.r.o.</strong>
                  <br />
                  Štefánikova 605/46b, Ponava
                  <br />
                  612 00 Brno
                  <br />
                  Česká republika
                </p>

                <h3>Identifikační údaje</h3>
                <p>
                  IČO: 09873236
                  <br />
                  DIČ: CZ09873236 (plátce DPH)
                  <br />
                  Základní kapitál: 100 000 Kč
                  <br />
                  Datová schránka: 9su4hja
                  <br />
                  Společnost zapsaná v obchodním rejstříku vedeném Krajským soudem
                  v Brně, oddíl C, vložka 121388
                  <br />
                  Jednatel: Pavel Trkan
                </p>

                <h3>Kontakt</h3>
                <p>
                  Telefon: <a href="tel:+420770103103">+420 770 103 103</a>
                  <br />
                  E-mail: <a href="mailto:sdil@sdil.cz">sdil@sdil.cz</a>
                  <br />
                  Provozní doba: Po–Pá 9:00–17:00
                </p>

                <h3>Mimosoudní řešení spotřebitelských sporů</h3>
                <p>
                  K mimosoudnímu řešení spotřebitelských sporů je příslušná Česká
                  obchodní inspekce (
                  <a href="https://www.coi.cz" target="_blank" rel="noopener noreferrer">
                    www.coi.cz
                  </a>
                  ). Evropská platforma pro řešení sporů online:{" "}
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                    ec.europa.eu/consumers/odr
                  </a>
                  .
                </p>

                <h3>Autorská práva</h3>
                <p>
                  „Modulo Parking" je obchodní značka provozovatele. Obsah těchto
                  stránek podléhá autorskému právu. Označení „MODULO" a zobrazené
                  produkty jsou majetkem výrobce (PROMStahl Sp. z o.o.) a jsou
                  používány se souhlasem.
                </p>
              </div>
            ) : (
              /* ---------- Austrian market (same operating company) ---------- */
              <div className="article-body">
                <h2>Medieninhaber &amp; Betreiber (§ 5 ECG, § 25 MedienG)</h2>
                <p>
                  <strong>Sdil Building Automotive s.r.o.</strong>
                  <br />
                  Marke / Vertrieb: Modulo Parking Austria
                  <br />
                  Štefánikova 605/46b, Ponava
                  <br />
                  612 00 Brno, Tschechische Republik
                </p>

                <h3>Unternehmensdaten</h3>
                <p>
                  Unternehmensgegenstand: Vertrieb von MODULO Parksystemen
                  <br />
                  IČO (Firmenbuchnummer): 09873236
                  <br />
                  UID-Nummer: CZ09873236
                  <br />
                  Stammkapital: 100 000 CZK
                  <br />
                  Eingetragen im Handelsregister des Landgerichts Brünn (Krajský
                  soud v Brně), Abteilung C, Einlage 121388
                  <br />
                  Geschäftsführer: Pavel Trkan
                </p>

                <h3>Kontakt</h3>
                <p>
                  Telefon: <a href={dict.common.contactInfo.phoneHref}>{dict.common.contactInfo.phone}</a>
                  <br />
                  E-Mail: <a href={`mailto:${dict.common.contactInfo.email}`}>{dict.common.contactInfo.email}</a>
                </p>

                <h3>Online-Streitbeilegung</h3>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:{" "}
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  . Wir sind nicht verpflichtet und nicht bereit, an einem
                  Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                  teilzunehmen.
                </p>

                <h3>Haftung &amp; Urheberrecht</h3>
                <p>
                  Die Inhalte dieser Seiten wurden mit größtmöglicher Sorgfalt
                  erstellt. Für externe Links ist stets der jeweilige Anbieter
                  verantwortlich. „MODULO" sowie die gezeigten Produktbezeichnungen
                  und Abbildungen sind Eigentum des Herstellers (PROMStahl Sp. z
                  o.o.) und werden mit Genehmigung verwendet.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
