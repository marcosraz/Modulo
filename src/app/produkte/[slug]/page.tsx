import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import { ProductSchema, BreadcrumbSchema } from "@/components/SEO";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produkt nicht gefunden",
    };
  }

  return {
    title: `${product.name} - ${product.tagline}`,
    description: `${product.description} Kapazität: ${product.specs.vehicles} Fahrzeuge, ${product.specs.levels}, Tragkraft: ${product.specs.capacity}. Jetzt Angebot anfordern.`,
    keywords: [
      product.name,
      product.series,
      product.category,
      "Parksystem",
      "Parkplattform",
      "MODULO",
      "Österreich",
    ],
    alternates: {
      canonical: `https://modullo-parking.at/produkte/${slug}`,
    },
    openGraph: {
      title: `${product.name} | MODULO Parksysteme`,
      description: product.description,
      url: `https://modullo-parking.at/produkte/${slug}`,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Produkte", href: "/produkte" },
    { name: product.name, href: `/produkte/${slug}` },
  ];

  return (
    <>
      <ProductSchema product={product} />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-[var(--background)] relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 gradient-radial" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-[var(--foreground-muted)]">
                <li>
                  <Link href="/" className="hover:text-[var(--modulo-accent)]">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href="/produkte"
                    className="hover:text-[var(--modulo-accent)]"
                  >
                    Produkte
                  </Link>
                </li>
                <li>/</li>
                <li className="text-[var(--foreground)]">{product.name}</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="relative">
                <div className="tech-frame">
                  <div className="relative aspect-[4/3] bg-[var(--background-secondary)] rounded-lg overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain p-8"
                      priority
                    />
                  </div>
                </div>
                {product.images.length > 1 && (
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {product.images.slice(1).map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[4/3] bg-[var(--background-secondary)] rounded-lg overflow-hidden border border-[var(--border)]"
                      >
                        <Image
                          src={img}
                          alt={`${product.name} ${idx + 2}`}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                <span className="tech-label">{product.category}</span>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                  {product.name}
                </h1>
                <p className="mt-2 text-xl text-[var(--modulo-accent)]">
                  {product.tagline}
                </p>
                <p className="mt-6 text-lg text-[var(--foreground-muted)]">
                  {product.description}
                </p>

                {/* Specs */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="p-4 bg-[var(--background-secondary)] rounded-lg border border-[var(--border)] text-center">
                    <div className="text-2xl font-mono font-bold text-[var(--modulo-accent)]">
                      {product.specs.vehicles}
                    </div>
                    <div className="text-sm text-[var(--foreground-muted)]">
                      Fahrzeuge
                    </div>
                  </div>
                  <div className="p-4 bg-[var(--background-secondary)] rounded-lg border border-[var(--border)] text-center">
                    <div className="text-2xl font-mono font-bold text-[var(--modulo-accent)]">
                      {product.specs.levels}
                    </div>
                    <div className="text-sm text-[var(--foreground-muted)]">
                      Ebenen
                    </div>
                  </div>
                  <div className="p-4 bg-[var(--background-secondary)] rounded-lg border border-[var(--border)] text-center">
                    <div className="text-lg font-mono font-bold text-[var(--modulo-accent)]">
                      {product.specs.capacity}
                    </div>
                    <div className="text-sm text-[var(--foreground-muted)]">
                      Tragkraft
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/kontakt"
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    Angebot anfordern
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
                    Beratung anrufen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description & Features */}
        <section className="py-16 bg-[var(--background-secondary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Long Description */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
                  Beschreibung
                </h2>
                <div className="prose prose-invert max-w-none">
                  {product.longDescription.split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className="text-[var(--foreground-muted)] mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
                  Vorteile & Features
                </h2>
                <ul className="space-y-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-[var(--modulo-accent)] flex-shrink-0 mt-0.5"
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
                      <span className="text-[var(--foreground)]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Variants */}
        {product.variants && product.variants.length > 0 && (
          <section className="py-16 bg-[var(--background)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
                Verfügbare Varianten
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.variants.map((variant, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-[var(--background-secondary)] rounded-lg border border-[var(--border)] hover:border-[var(--modulo-accent)] transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-[var(--modulo-accent)]">
                      {variant.name}
                    </h3>
                    {variant.description && (
                      <p className="mt-2 text-sm text-[var(--foreground-muted)]">
                        {variant.description}
                      </p>
                    )}
                    <div className="mt-4 space-y-2 text-sm">
                      {variant.capacity && (
                        <div className="flex justify-between">
                          <span className="text-[var(--foreground-muted)]">
                            Kapazität:
                          </span>
                          <span className="text-[var(--foreground)] font-mono">
                            {variant.capacity}
                          </span>
                        </div>
                      )}
                      {variant.loadCapacity && (
                        <div className="flex justify-between">
                          <span className="text-[var(--foreground-muted)]">
                            Tragkraft:
                          </span>
                          <span className="text-[var(--foreground)] font-mono">
                            {variant.loadCapacity}
                          </span>
                        </div>
                      )}
                      {variant.pitDepth && (
                        <div className="flex justify-between">
                          <span className="text-[var(--foreground-muted)]">
                            Grubentiefe:
                          </span>
                          <span className="text-[var(--foreground)] font-mono">
                            {variant.pitDepth}
                          </span>
                        </div>
                      )}
                      {variant.ceilingHeight && (
                        <div className="flex justify-between">
                          <span className="text-[var(--foreground-muted)]">
                            Deckenhöhe:
                          </span>
                          <span className="text-[var(--foreground)] font-mono">
                            {variant.ceilingHeight}
                          </span>
                        </div>
                      )}
                      {variant.deckType && (
                        <div className="flex justify-between">
                          <span className="text-[var(--foreground-muted)]">
                            Deck-Typ:
                          </span>
                          <span className="text-[var(--foreground)] font-mono text-xs">
                            {variant.deckType}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Downloads */}
        {product.pdfs && product.pdfs.length > 0 && (
          <section className="py-16 bg-[var(--background-secondary)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
                Downloads
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.pdfs.map((pdf, idx) => (
                  <a
                    key={idx}
                    href={pdf.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[var(--background)] rounded-lg border border-[var(--border)] hover:border-[var(--modulo-accent)] transition-colors group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-[var(--modulo-accent)]/10 text-[var(--modulo-accent)] rounded-lg">
                      <svg
                        className="w-6 h-6"
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
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-[var(--foreground)] group-hover:text-[var(--modulo-accent)] transition-colors">
                        {pdf.name}
                      </div>
                      <div className="text-xs text-[var(--foreground-muted)] font-mono">
                        {pdf.size}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Products CTA */}
        <section className="py-16 bg-[var(--background)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
              Andere Produkte entdecken
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8 max-w-xl mx-auto">
              Finden Sie die perfekte Parklösung für Ihre Anforderungen in
              unserem vollständigen Produktportfolio.
            </p>
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
        </section>
      </main>
      <Footer />
    </>
  );
}
