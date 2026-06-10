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
  const baseUrl = locale === "cs" ? "https://modulparking.cz" : "https://moduloparking.at";
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
            {/*
              TODO (vom Betreiber zu prüfen/ergänzen): [PLATZHALTER] ausfüllen und
              den Text rechtlich (DSGVO / DSG) prüfen lassen. Dieser Entwurf deckt
              die aktuell auf der Website eingesetzten Verarbeitungen ab
              (Kontaktformular, Hosting bei Vercel, Vercel Analytics, Google
              Analytics). Werden Tools entfernt/hinzugefügt, bitte anpassen.
            */}
            <div className="article-body">
              <p>
                Wir nehmen den Schutz Ihrer personenbezogenen Daten ernst und
                behandeln diese vertraulich und entsprechend der
                Datenschutz-Grundverordnung (DSGVO) sowie dem österreichischen
                Datenschutzgesetz (DSG).
              </p>

              <h2>1. Verantwortlicher</h2>
              <p>
                Modulo Parking Austria
                <br />
                [PLATZHALTER: Anschrift]
                <br />
                E-Mail: <a href="mailto:info@moduloparking.at">info@moduloparking.at</a>
                <br />
                Telefon: <a href="tel:+436767263487">+43 676 726 34 87</a>
              </p>

              <h2>2. Kontaktaufnahme &amp; Kontaktformular</h2>
              <p>
                Wenn Sie uns über das Kontaktformular oder per E-Mail
                kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten
                (Name, E-Mail-Adresse, ggf. Telefonnummer, Unternehmen, Betreff
                und Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
                Maßnahmen) bzw. lit. f DSGVO (berechtigtes Interesse an der
                Beantwortung Ihrer Anfrage). Die Daten werden gelöscht, sobald sie
                für die Erreichung des Zwecks nicht mehr erforderlich sind, bzw.
                nach Ablauf gesetzlicher Aufbewahrungsfristen.
              </p>

              <h2>3. Hosting</h2>
              <p>
                Diese Website wird bei <strong>Vercel Inc.</strong> (340 S Lemon
                Ave #4133, Walnut, CA 91789, USA) gehostet. Beim Aufruf der
                Website werden technisch notwendige Daten (z.&nbsp;B. IP-Adresse,
                Datum/Uhrzeit, abgerufene Ressource) verarbeitet. Mit Vercel
                besteht ein Auftragsverarbeitungsvertrag; die Übermittlung in die
                USA ist durch Standardvertragsklauseln abgesichert.
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
              </p>

              <h2>4. Webanalyse</h2>
              <p>
                <strong>Vercel Web Analytics:</strong> Wir verwenden eine
                cookielose, datenschutzfreundliche Reichweitenmessung von Vercel,
                die keine personenbezogenen Profile bildet.
              </p>
              <p>
                <strong>Google Analytics:</strong> [PLATZHALTER: Nur beibehalten,
                wenn Google Analytics tatsächlich aktiv ist.] Sofern aktiv, erfolgt
                der Einsatz erst nach Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
                DSGVO) über ein Consent-Banner. Anbieter: Google Ireland Ltd. Es
                werden Cookies gesetzt und Nutzungsdaten (inkl. gekürzter
                IP-Adresse) verarbeitet. Sie können Ihre Einwilligung jederzeit mit
                Wirkung für die Zukunft widerrufen.
              </p>

              <h2>5. Cookies</h2>
              <p>
                Technisch notwendige Cookies/Local-Storage (z.&nbsp;B. die
                Speicherung Ihrer Theme-Einstellung) werden auf Grundlage unseres
                berechtigten Interesses gesetzt. Einwilligungspflichtige Cookies
                (z.&nbsp;B. für Google Analytics) werden erst nach Ihrer
                Zustimmung gesetzt.
              </p>

              <h2>6. Ihre Rechte</h2>
              <p>
                Sie haben jederzeit das Recht auf Auskunft (Art. 15), Berichtigung
                (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung
                (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch
                (Art. 21 DSGVO). Wenden Sie sich dazu an die oben genannten
                Kontaktdaten.
              </p>

              <h2>7. Beschwerderecht</h2>
              <p>
                Ihnen steht ein Beschwerderecht bei der österreichischen
                Datenschutzbehörde zu: Österreichische Datenschutzbehörde,
                Barichgasse 40–42, 1030 Wien,{" "}
                <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">
                  www.dsb.gv.at
                </a>
                .
              </p>

              <p className="text-sm">
                Stand: [PLATZHALTER: Datum der letzten Aktualisierung]
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
