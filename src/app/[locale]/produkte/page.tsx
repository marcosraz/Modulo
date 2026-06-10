import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { products, categories } from "@/data/products";
import { BreadcrumbSchema } from "@/components/SEO";
import { getDictionary } from "@/i18n/getDictionary";
import { type Locale, hreflangAlternates } from "@/i18n/config";

function localePath(path: string, locale: string): string {
  if (locale === "de") return path;
  return `/${locale}${path}`;
}

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
    title: dict.productsPage.meta.title,
    description: dict.productsPage.meta.description,
    keywords: [
      "Parkplattformen kaufen",
      "Parklift Preise",
      "Doppelparker",
      "Stapelparker",
      "MODULO Parker",
      "Parksystem Vergleich",
    ],
    alternates: {
      canonical: `${baseUrl}${lp}/produkte`,
      languages: hreflangAlternates(`/produkte`),
    },
    openGraph: {
      title: dict.productsPage.meta.title,
      description: dict.productsPage.meta.description,
      url: `${baseUrl}${lp}/produkte`,
    },
  };
}

export default async function ProduktePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const breadcrumbs = [
    { name: "Home", href: localePath("/", locale) },
    { name: dict.common.nav.products, href: localePath("/produkte", locale) },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <Header locale={locale} dict={dict} />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-[var(--background)] relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 gradient-radial" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <span className="tech-label">{dict.productsPage.label}</span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
                {products.length}+ {dict.productsPage.titleSuffix}{" "}
                <span className="text-gradient">{dict.productsPage.titleHighlight}</span>
              </h1>
              <p className="mt-6 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
                {dict.productsPage.description}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { value: `${products.length}+`, label: dict.productsPage.systems },
                { value: "6x", label: dict.productsPage.moreCapacity },
                { value: "100%", label: dict.productsPage.galvanized },
                { value: "24/7", label: dict.productsPage.support },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-mono font-bold text-[var(--modulo-accent)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--foreground-muted)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 bg-[var(--background-secondary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Category Filter (static for now) */}
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    index === 0
                      ? "bg-[var(--modulo-accent)] text-white"
                      : "border border-[var(--border)] text-[var(--foreground-muted)] hover:border-[var(--modulo-accent)] hover:text-[var(--modulo-accent)]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Products */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={localePath(`/produkte/${product.slug}`, locale)}
                  className="card group block"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-[var(--background)] overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.featured && (
                      <div className="absolute top-4 right-4 bg-[var(--modulo-accent)] text-white px-3 py-1 text-xs font-semibold uppercase">
                        {dict.common.products.popular}
                      </div>
                    )}
                    <div className="absolute top-4 left-4 text-xs font-mono text-[var(--modulo-accent)]">
                      {product.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="tech-label">{product.tagline}</span>
                    <h2 className="mt-2 text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--modulo-accent)] transition-colors">
                      {product.name}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--foreground-muted)] line-clamp-2">
                      {product.description}
                    </p>

                    {/* Specs */}
                    <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                      <div className="p-2 bg-[var(--background)] text-center">
                        <div className="text-[var(--modulo-accent)] font-mono">
                          {product.specs.vehicles}
                        </div>
                        <div className="text-[var(--foreground-muted)]">
                          {dict.common.products.vehicles}
                        </div>
                      </div>
                      <div className="p-2 bg-[var(--background)] text-center">
                        <div className="text-[var(--modulo-accent)] font-mono">
                          {product.specs.levels}
                        </div>
                        <div className="text-[var(--foreground-muted)]">
                          {dict.common.products.levels}
                        </div>
                      </div>
                      <div className="p-2 bg-[var(--background)] text-center">
                        <div className="text-[var(--modulo-accent)] font-mono text-[10px]">
                          {product.specs.capacity}
                        </div>
                        <div className="text-[var(--foreground-muted)]">
                          {dict.common.products.loadCapacity}
                        </div>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="mt-6 btn-outline w-full inline-flex items-center justify-center gap-2 text-sm">
                      {dict.common.products.viewDetails}
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
          </div>
        </section>

        {/* Downloads Section */}
        <section className="py-24 bg-[var(--background)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="tech-label">{dict.productsPage.downloads.label}</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--foreground)]">
              {dict.productsPage.downloads.title}
            </h2>
            <p className="mt-4 text-[var(--foreground-muted)] max-w-xl mx-auto">
              {dict.productsPage.downloads.description}
            </p>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {/* Catalog */}
              <a
                href="/docs/katalog_modulo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-[var(--modulo-accent)] bg-[var(--modulo-accent)]/10 hover:bg-[var(--modulo-accent)]/20 text-[var(--foreground)] transition-colors"
              >
                <svg
                  className="w-8 h-8 text-[var(--modulo-accent)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <div className="text-left">
                  <div className="font-semibold text-[var(--modulo-accent)]">
                    {dict.productsPage.downloads.catalog}
                  </div>
                  <div className="text-xs text-[var(--foreground-muted)]">
                    {dict.productsPage.downloads.catalogSub}
                  </div>
                </div>
              </a>

              {/* Product PDFs */}
              {products.slice(0, 5).flatMap((product) =>
                product.pdfs.slice(0, 1).map((pdf) => (
                  <a
                    key={pdf.file}
                    href={pdf.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-[var(--border)] hover:border-[var(--modulo-accent)] text-[var(--foreground)] hover:text-[var(--modulo-accent)] transition-colors"
                  >
                    <svg
                      className="w-6 h-6 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <div className="text-left">
                      <div className="font-medium text-sm">{product.name}</div>
                      <div className="text-xs text-[var(--foreground-muted)]">
                        {pdf.size}
                      </div>
                    </div>
                  </a>
                ))
              )}
            </div>

            <Link
              href={localePath("/kontakt", locale)}
              className="mt-8 btn-primary inline-flex items-center gap-2"
            >
              {dict.productsPage.downloads.requestAll}
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
        </section>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
