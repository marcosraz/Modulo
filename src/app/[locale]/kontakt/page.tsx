import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/i18n/getDictionary";
import { type Locale } from "@/i18n/config";

function localePath(path: string, locale: string): string {
  if (locale === "de") return path;
  return `/${locale}${path}`;
}

export default async function KontaktPage({
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
        {/* Hero Section */}
        <section className="py-24 bg-[var(--background)] relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 gradient-radial" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <span className="tech-label">{dict.contact.label}</span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
                {dict.contact.title}{" "}
                <span className="text-gradient">
                  {dict.contact.titleHighlight}
                </span>
              </h1>
              <p className="mt-6 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
                {dict.contact.description}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactForm locale={locale} dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
