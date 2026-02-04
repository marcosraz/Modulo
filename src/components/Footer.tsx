import Link from "next/link";
import Image from "next/image";

export default function Footer() {
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
              Offizieller Vertrieb von MODULO Parkplattformen in Österreich.
              Innovative Parklösungen für maximale Flächeneffizienz.
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
                aria-label="Telefon"
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
              Produkte
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Parker-C Serie", href: "/produkte/parker-c" },
                { label: "Parker-S Serie", href: "/produkte/parker-s" },
                { label: "Stacker-P10", href: "/produkte/stacker-p" },
                { label: "LS-System", href: "/produkte/ls-system" },
                { label: "Pallet-System", href: "/produkte/pallet" },
                { label: "Alle Produkte", href: "/produkte" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
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
              Regionen
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
                    href={item.href}
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
              Unternehmen
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Über uns", href: "/ueber-uns" },
                { label: "Referenzen", href: "/referenzen" },
                { label: "Ratgeber", href: "/ratgeber" },
                { label: "Kontakt", href: "/kontakt" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
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
              Kontakt
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="tech-label block mb-1">Telefon</span>
                <a
                  href="tel:+436767263487"
                  className="text-[var(--foreground)] hover:text-[var(--modulo-accent)] transition-colors"
                >
                  +43 676 726 34 87
                </a>
              </li>
              <li>
                <span className="tech-label block mb-1">E-Mail</span>
                <a
                  href="mailto:info@modullo-parking.at"
                  className="text-[var(--foreground)] hover:text-[var(--modulo-accent)] transition-colors"
                >
                  info@modullo-parking.at
                </a>
              </li>
              <li>
                <span className="tech-label block mb-1">Standort</span>
                <span className="text-[var(--foreground)]">Österreich</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--foreground-muted)]">
            &copy; {currentYear} Modullo Parking Austria. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6 text-xs text-[var(--foreground-muted)]">
            <span className="font-mono">Partner von</span>
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
