import Link from "next/link";
import Image from "next/image";

function localePath(path: string, locale: string): string {
  if (locale === "de") return path;
  return `/${locale}${path}`;
}

export default function Footer({ locale, dict }: { locale: string; dict: any }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--background-secondary)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logos/MODULO.svg"
              alt="Modulo"
              width={120}
              height={28}
              className="mb-6 logo-themed"
            />
            <p className="text-sm text-[var(--foreground-muted)] mb-4">
              {dict.common.footer.description}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--modulo-accent)] hover:text-[var(--modulo-accent)] transition-colors rounded-lg"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="tel:+436767263487"
                className="w-10 h-10 flex items-center justify-center border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--modulo-accent)] hover:text-[var(--modulo-accent)] transition-colors rounded-lg"
                aria-label={dict.common.footer.phone}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-4">
              {dict.common.footer.productsTitle}
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Parker-C Serie", href: "/produkte/parker-c" },
                { label: "Parker-S Serie", href: "/produkte/parker-s" },
                { label: "Stacker-P10", href: "/produkte/stacker-p" },
                { label: "LS-System", href: "/produkte/ls-system" },
                { label: "Pallet-System", href: "/produkte/pallet" },
                { label: dict.common.products.viewAllProducts, href: "/produkte" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={localePath(item.href, locale)}
                    className="text-sm text-[var(--foreground-muted)] hover:text-[var(--modulo-accent)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions Column */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-4">
              {dict.common.footer.regionsTitle}
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Wien", href: "/parksysteme/wien" },
                { label: "Niederösterreich", href: "/parksysteme/niederoesterreich" },
                { label: "Oberösterreich", href: "/parksysteme/oberoesterreich" },
                { label: "Steiermark", href: "/parksysteme/steiermark" },
                { label: "Salzburg", href: "/parksysteme/salzburg" },
                { label: "Tirol", href: "/parksysteme/tirol" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={localePath(item.href, locale)}
                    className="text-sm text-[var(--foreground-muted)] hover:text-[var(--modulo-accent)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-4">
              {dict.common.footer.companyTitle}
            </h4>
            <ul className="space-y-3">
              {[
                { label: dict.common.nav.about, href: "/ueber-uns" },
                { label: dict.common.nav.references, href: "/referenzen" },
                { label: dict.common.nav.guides, href: "/ratgeber" },
                { label: dict.common.nav.contact, href: "/kontakt" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={localePath(item.href, locale)}
                    className="text-sm text-[var(--foreground-muted)] hover:text-[var(--modulo-accent)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-4">
              {dict.common.footer.contactTitle}
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="tech-label block mb-1">{dict.common.footer.phone}</span>
                <a
                  href="tel:+436767263487"
                  className="text-[var(--foreground)] hover:text-[var(--modulo-accent)] transition-colors"
                >
                  +43 676 726 34 87
                </a>
              </li>
              <li>
                <span className="tech-label block mb-1">{dict.common.footer.email}</span>
                <a
                  href="mailto:info@modullo-parking.at"
                  className="text-[var(--foreground)] hover:text-[var(--modulo-accent)] transition-colors"
                >
                  info@modullo-parking.at
                </a>
              </li>
              <li>
                <span className="tech-label block mb-1">{dict.common.footer.location}</span>
                <span className="text-[var(--foreground)]">{dict.common.footer.locationValue}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--foreground-muted)]">
            &copy; {currentYear} {dict.common.footer.copyright}
          </p>
          <div className="flex items-center gap-6 text-xs text-[var(--foreground-muted)]">
            <span className="font-mono">{dict.common.footer.partnerOf}</span>
            <a
              href="https://moduloparking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--modulo-accent)] transition-colors"
            >
              MODULO
            </a>
            <span>|</span>
            <a
              href="https://sdil.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--modulo-accent)] transition-colors"
            >
              SDIL
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
