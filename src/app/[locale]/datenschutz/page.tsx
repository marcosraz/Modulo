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
    title: dict.common.footer.privacy,
    description: dict.common.footer.privacy,
    alternates: {
      canonical: `${baseUrl}${lp}/datenschutz`,
      languages: hreflangAlternates(`/datenschutz`),
    },
  };
}

export default async function DatenschutzPage({
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
              {dict.common.footer.privacy}
            </h1>
          </div>
        </section>

        <section className="py-12 bg-[var(--background-secondary)]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            {isCz ? (
              /* ---------- Czech GDPR (Czech market) ---------- */
              <div className="article-body">
                {/* TODO (provozovatel): doplnit [DOPLNIT] a nechat text právně zkontrolovat. */}
                <p>
                  Ochranu vašich osobních údajů bereme vážně a zpracováváme je v
                  souladu s nařízením (EU) 2016/679 (GDPR) a zákonem č. 110/2019
                  Sb., o zpracování osobních údajů.
                </p>

                <h2>1. Správce</h2>
                <p>
                  Sdil Building Automotive s.r.o., Štefánikova 605/46b, Ponava,
                  612 00 Brno, Česká republika
                  <br />
                  IČO: 09873236
                  <br />
                  E-mail: <a href="mailto:sdil@sdil.cz">sdil@sdil.cz</a>
                  <br />
                  Telefon: <a href="tel:+420770103103">+420 770 103 103</a>
                </p>

                <h2>2. Kontaktní formulář</h2>
                <p>
                  Pokud nás kontaktujete prostřednictvím formuláře nebo e-mailem,
                  zpracováváme vámi uvedené údaje (jméno, e-mail, případně telefon,
                  firmu, předmět a zprávu) výhradně za účelem vyřízení vašeho
                  dotazu. Právním základem je čl. 6 odst. 1 písm. b) GDPR (opatření
                  před uzavřením smlouvy), resp. písm. f) GDPR (oprávněný zájem na
                  zodpovězení dotazu). Údaje vymažeme, jakmile již nejsou potřebné.
                </p>

                <h2>3. Hosting</h2>
                <p>
                  Web je provozován u společnosti <strong>Vercel Inc.</strong> (USA).
                  Při návštěvě webu se zpracovávají technicky nezbytné údaje (např.
                  IP adresa, datum a čas, vyžádaný zdroj). Předání do USA je
                  zajištěno standardními smluvními doložkami. Právní základ: čl. 6
                  odst. 1 písm. f) GDPR.
                </p>

                <h2>4. Webová analytika</h2>
                <p>
                  <strong>Vercel Web Analytics:</strong> používáme měření
                  návštěvnosti bez cookies, které nevytváří osobní profily.
                </p>
                <p>
                  <strong>Google Analytics:</strong> [DOPLNIT – ponechat pouze
                  pokud je Google Analytics skutečně aktivní.] Pokud je aktivní,
                  nasazuje se až po vašem souhlasu (čl. 6 odst. 1 písm. a) GDPR).
                </p>

                <h2>5. Cookies</h2>
                <p>
                  Technicky nezbytné cookies / local-storage (např. uložení vašeho
                  nastavení motivu) používáme na základě oprávněného zájmu. Cookies
                  vyžadující souhlas se nastavují až po vašem souhlasu.
                </p>

                <h2>6. Vaše práva</h2>
                <p>
                  Máte právo na přístup (čl. 15), opravu (čl. 16), výmaz (čl. 17),
                  omezení zpracování (čl. 18), přenositelnost (čl. 20) a vznesení
                  námitky (čl. 21 GDPR). Obraťte se na výše uvedené kontakty.
                </p>

                <h2>7. Právo podat stížnost</h2>
                <p>
                  Máte právo podat stížnost u Úřadu pro ochranu osobních údajů,
                  Pplk. Sochora 27, 170 00 Praha 7,{" "}
                  <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">
                    www.uoou.cz
                  </a>
                  .
                </p>

                <p className="text-sm">Aktualizováno: [DOPLNIT datum]</p>
              </div>
            ) : (
              /* ---------- Austrian (de/en market) ---------- */
              <div className="article-body">
                <p>
                  Wir nehmen den Schutz Ihrer personenbezogenen Daten ernst und
                  behandeln diese entsprechend der DSGVO und dem österreichischen
                  Datenschutzgesetz (DSG).
                </p>

                <h2>1. Verantwortlicher</h2>
                <p>
                  Sdil Building Automotive s.r.o. (Marke: Modulo Parking Austria)
                  <br />
                  Štefánikova 605/46b, Ponava, 612 00 Brno, Tschechische Republik
                  <br />
                  IČO: 09873236
                  <br />
                  E-Mail: <a href={`mailto:${dict.common.contactInfo.email}`}>{dict.common.contactInfo.email}</a>
                  <br />
                  Telefon: <a href={dict.common.contactInfo.phoneHref}>{dict.common.contactInfo.phone}</a>
                </p>

                <h2>2. Kontaktformular</h2>
                <p>
                  Bei einer Kontaktaufnahme verarbeiten wir die angegebenen Daten
                  (Name, E-Mail, ggf. Telefon, Unternehmen, Betreff, Nachricht)
                  ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage:
                  Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO. Die Daten werden gelöscht,
                  sobald sie nicht mehr erforderlich sind.
                </p>

                <h2>3. Hosting</h2>
                <p>
                  Diese Website wird bei <strong>Vercel Inc.</strong> (USA)
                  gehostet; die Übermittlung in die USA ist durch
                  Standardvertragsklauseln abgesichert. Rechtsgrundlage: Art. 6
                  Abs. 1 lit. f DSGVO.
                </p>

                <h2>4. Webanalyse</h2>
                <p>
                  <strong>Vercel Web Analytics</strong> (cookielos, keine
                  personenbezogenen Profile). <strong>Google Analytics</strong>{" "}
                  [PLATZHALTER: nur falls aktiv] erfolgt erst nach Ihrer Einwilligung
                  (Art. 6 Abs. 1 lit. a DSGVO).
                </p>

                <h2>5. Cookies</h2>
                <p>
                  Technisch notwendige Cookies/Local-Storage (z.&nbsp;B.
                  Theme-Einstellung) auf Basis berechtigten Interesses;
                  einwilligungspflichtige Cookies erst nach Zustimmung.
                </p>

                <h2>6. Ihre Rechte</h2>
                <p>
                  Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17),
                  Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20),
                  Widerspruch (Art. 21 DSGVO).
                </p>

                <h2>7. Beschwerderecht</h2>
                <p>
                  Österreichische Datenschutzbehörde, Barichgasse 40–42, 1030 Wien,{" "}
                  <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">
                    www.dsb.gv.at
                  </a>
                  .
                </p>

                <p className="text-sm">Stand: [PLATZHALTER: Datum]</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
