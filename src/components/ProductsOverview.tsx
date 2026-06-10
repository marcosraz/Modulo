import Image from "next/image";
import Link from "next/link";

function localePath(path: string, locale: string): string {
  if (locale === "de") return path;
  return `/${locale}${path}`;
}

const productImages: Record<string, { image: string; featured: boolean }> = {
  "parker-c": { image: "/images/products/parker-c100-basic.png", featured: true },
  "parker-s": { image: "/images/products/parker-s100.jpg", featured: false },
  "parker-o": { image: "/images/products/parker-o-header.webp", featured: false },
  "stacker-p": { image: "/images/products/stacker-p10.webp", featured: false },
  "stacker-v": { image: "/images/products/stacker-v-header.webp", featured: false },
  "ls-system": { image: "/images/products/ls-header.webp", featured: true },
  "lsm-system": { image: "/images/products/lsm-header.webp", featured: false },
  pallet: { image: "/images/products/pallet-system.webp", featured: false },
};

export default function ProductsOverview({ locale, dict }: { locale: string; dict: any }) {
  const items = dict.home.products.items;

  return (
    <section className="py-24 bg-[var(--background-secondary)]">
      <div className="max-w-7xl 2xl:max-w-[88rem] mx-auto px-6 lg:px-8 2xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="tech-label">{dict.home.products.label}</span>
          <h2 className="mt-4 h-section">
            {dict.home.products.title}{" "}
            <span className="accent-text">{dict.home.products.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            {dict.home.products.description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {items.map((product: any) => {
            const imageData = productImages[product.id] || productImages["parker-c"];
            return (
              <Link
                key={product.id}
                href={localePath(`/produkte/${product.id}`, locale)}
                className="card card--interactive group flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] image-well overflow-hidden">
                  <Image
                    src={imageData.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                  {imageData.featured && (
                    <div className="absolute top-4 right-4 badge badge--solid">
                      {dict.common.products.popular}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="tech-label">{product.tagline}</span>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--modulo-accent)] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--foreground-muted)]">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="chip">{product.capacity}</span>
                    <span className="chip">{product.levels}</span>
                  </div>

                  {/* Arrow */}
                  <div className="mt-6 pt-4 flex items-center gap-2 text-sm text-[var(--modulo-accent)] font-medium">
                    <span>{dict.common.products.viewDetails}</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
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
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href={localePath("/produkte", locale)} className="btn-outline inline-flex items-center gap-2">
            {dict.common.products.viewAllProducts}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
