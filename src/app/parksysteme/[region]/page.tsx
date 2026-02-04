import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { regions, getRegionBySlug } from "@/data/regions";
import { products } from "@/data/products";
import { BreadcrumbSchema, FAQSchema } from "@/components/SEO";

export function generateStaticParams() {
  return regions.map((region) => ({
    region: region.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string }>;
}): Promise<Metadata> {
  const { region: regionSlug } = await params;
  const region = getRegionBySlug(regionSlug);

  if (!region) {
    return { title: "Region nicht gefunden" };
  }

  return {
    title: region.metaTitle,
    description: region.metaDescription,
    keywords: region.keywords,
    alternates: {
      canonical: `https://modullo-parking.at/parksysteme/${regionSlug}`,
    },
    openGraph: {
      title: region.metaTitle,
      description: region.metaDescription,
      url: `https://modullo-parking.at/parksysteme/${regionSlug}`,
    },
  };
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region: regionSlug } = await params;
  const region = getRegionBySlug(regionSlug);

  if (!region) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Regionen", href: "/parksysteme/wien" },
    { name: region.name, href: `/parksysteme/${regionSlug}` },
  ];

  const featuredProducts = products.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={region.faqs} />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-[var(--background)] relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 gradient-radial" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="tech-label">
                Parksysteme {region.shortName}
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)]">
                Parksysteme für{" "}
                <span className="text-gradient">{region.name}</span>
              </h1>
              <p className="mt-6 text-xl text-[var(--foreground-muted)]">
                {region.heroText}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  Beratung anfordern
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <a
                  href="tel:+436767263487"
                  className="btn-outline inline-flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +43 676 726 34 87
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Region */}
        <section className="py-16 bg-[var(--background-secondary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <span className="tech-label">Die Situation</span>
                <h2 className="mt-4 text-3xl font-bold text-[var(--foreground)]">
                  Parkherausforderungen in {region.name}
                </h2>
                <p className="mt-6 text-[var(--foreground-muted)]">
                  {region.description}
                </p>
                <ul className="mt-8 space-y-4">
                  {region.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[var(--modulo-accent)] flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                      <span className="text-[var(--foreground)]">
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="tech-label">Unsere Lösungen</span>
                <h2 className="mt-4 text-3xl font-bold text-[var(--foreground)]">
                  MODULO für {region.shortName}
                </h2>
                <p className="mt-6 text-[var(--foreground-muted)]">
                  Mit MODULO Parksystemen meistern Sie die spezifischen
                  Herausforderungen in {region.name}. Unsere Lösungen sind
                  flexibel, platzsparend und auf lokale Anforderungen
                  abgestimmt.
                </p>
                <ul className="mt-8 space-y-4">
                  {region.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[var(--modulo-accent)] flex-shrink-0 mt-1"
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
                      <span className="text-[var(--foreground)]">
                        {solution}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="tech-label">Empfohlene Produkte</span>
              <h2 className="mt-4 text-3xl font-bold text-[var(--foreground)]">
                Beliebte Systeme für {region.name}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/produkte/${product.slug}`}
                  className="card group block"
                >
                  <div className="relative aspect-[4/3] bg-[var(--background-secondary)] overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="tech-label">{product.tagline}</span>
                    <h3 className="mt-2 text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--modulo-accent)] transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--foreground-muted)] line-clamp-2">
                      {product.description}
                    </p>
                    <div className="mt-4 text-sm text-[var(--modulo-accent)] flex items-center gap-2">
                      Mehr erfahren
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/produkte"
                className="btn-outline inline-flex items-center gap-2"
              >
                Alle Produkte ansehen
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-[var(--background-secondary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="tech-label">Servicegebiet</span>
              <h2 className="mt-4 text-3xl font-bold text-[var(--foreground)]">
                Wir sind in ganz {region.name} für Sie da
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {region.majorCities.map((city, idx) => (
                <div
                  key={idx}
                  className="px-6 py-3 bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)]"
                >
                  {city}
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-[var(--foreground-muted)]">
              Beratung, Installation und Service in allen Bezirken von{" "}
              {region.name}.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="tech-label">FAQ</span>
              <h2 className="mt-4 text-3xl font-bold text-[var(--foreground)]">
                Häufige Fragen zu Parksystemen in {region.name}
              </h2>
            </div>

            <div className="space-y-6">
              {region.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[var(--background-secondary)] border border-[var(--border)]"
                >
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-[var(--foreground-muted)]">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[var(--modulo-accent)]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Bereit für mehr Parkplätze in {region.name}?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Kontaktieren Sie uns für eine unverbindliche Beratung. Wir
              analysieren Ihre Situation und finden die optimale Lösung.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[var(--modulo-accent)] font-semibold hover:bg-gray-100 transition-colors"
              >
                Beratung anfordern
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <a
                href="tel:+436767263487"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Jetzt anrufen
              </a>
            </div>
          </div>
        </section>

        {/* Other Regions */}
        <section className="py-16 bg-[var(--background-secondary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="tech-label">Weitere Regionen</span>
              <h2 className="mt-4 text-2xl font-bold text-[var(--foreground)]">
                Parksysteme in ganz Österreich
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {regions
                .filter((r) => r.slug !== regionSlug)
                .map((r) => (
                  <Link
                    key={r.slug}
                    href={`/parksysteme/${r.slug}`}
                    className="px-4 py-2 border border-[var(--border)] text-[var(--foreground-muted)] hover:border-[var(--modulo-accent)] hover:text-[var(--modulo-accent)] transition-colors"
                  >
                    {r.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
