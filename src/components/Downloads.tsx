import Link from "next/link";

function localePath(path: string, locale: string): string {
  if (locale === "de") return path;
  return `/${locale}${path}`;
}

const downloadFiles = [
  { file: "/docs/katalog_modulo.pdf", size: "8.1 MB", type: "PDF", featured: true },
  { file: "/docs/parker-c120-basic-cz.pdf", size: "1.7 MB", type: "PDF", featured: false },
  { file: "/docs/modulo-stacker-p10-cz.pdf", size: "1.8 MB", type: "PDF", featured: false },
  { file: "/docs/modulo-LS1000-cz.pdf", size: "1.3 MB", type: "PDF", featured: false },
  { file: "/docs/pallet-t10-cz.pdf", size: "1.3 MB", type: "PDF", featured: false },
];

export default function Downloads({ locale, dict }: { locale: string; dict: any }) {
  const items = dict.home.downloads.items;

  return (
    <section className="py-24 bg-[var(--background-secondary)]">
      <div className="max-w-7xl 2xl:max-w-[88rem] mx-auto px-6 lg:px-8 2xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="tech-label">{dict.home.downloads.label}</span>
          <h2 className="mt-4 h-section text-[var(--foreground)]">
            {dict.home.downloads.title}{" "}
            <span className="accent-text">{dict.home.downloads.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            {dict.home.downloads.description}
          </p>
        </div>

        {/* Downloads Grid */}
        <div className="stagger grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item: any, index: number) => {
            const fileData = downloadFiles[index] || downloadFiles[0];
            return (
              <a
                key={fileData.file}
                href={fileData.file}
                target="_blank"
                rel="noopener noreferrer"
                className={`card card--interactive p-6 flex flex-col group ${
                  fileData.featured ? "border-[var(--modulo-accent)]/50" : ""
                }`}
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-[var(--modulo-accent)]/10 text-[var(--modulo-accent)] rounded-[var(--radius-base)] mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {fileData.featured && (
                    <span className="badge badge--solid mb-2">
                      {dict.common.products.recommended}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--modulo-accent)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--foreground-muted)]">
                    {item.description}
                  </p>
                </div>

                {/* Meta */}
                <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs">
                  <span className="font-mono text-[var(--foreground-muted)]">{fileData.type}</span>
                  <span className="font-mono text-[var(--modulo-accent)]">{fileData.size}</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-[var(--foreground-muted)] mb-4">
            {dict.home.downloads.needMore}
          </p>
          <Link href={localePath("/kontakt", locale)} className="btn-primary inline-flex items-center gap-2">
            {dict.common.products.contactUs}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
