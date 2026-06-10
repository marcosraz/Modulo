import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/getDictionary";

// not-found.tsx does not receive route params, so we render the primary-market
// (German) chrome as a sensible fallback.
export default async function NotFound() {
  const locale = "de";
  const dict = await getDictionary(locale);

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main id="main" className="pt-20">
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 gradient-radial" />
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center py-24">
            <span className="tech-label">Error 404</span>
            <h1 className="mt-4 h-display text-gradient">404</h1>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-[var(--foreground)]">
              Seite nicht gefunden
            </h2>
            <p className="mt-4 text-lg text-[var(--foreground-muted)]">
              Die angeforderte Seite existiert nicht oder wurde verschoben. Kehren Sie zur
              Startseite zurück oder entdecken Sie unsere Parksysteme.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                Zur Startseite
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/produkte" className="btn-outline inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                {dict.common.nav.products}
              </Link>
              <Link href="/kontakt" className="btn-outline inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                {dict.common.nav.contact}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
