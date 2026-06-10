"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { regions } from "@/data/regions";
import { locales, localeNames, type Locale } from "@/i18n/config";

interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

function localePath(path: string, locale: string): string {
  if (locale === "de") return path;
  return `/${locale}${path}`;
}

const localeCodes: Record<Locale, string> = {
  de: "DE",
  en: "EN",
  cs: "CS",
};

export default function Header({ locale, dict }: { locale: string; dict: any }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const navItems: NavItem[] = [
    { label: dict.common.nav.products, href: localePath("/produkte", locale) },
    {
      label: dict.common.nav.regions,
      href: localePath("/parksysteme/wien", locale),
      dropdown: regions.map((r) => ({ label: r.name, href: localePath(`/parksysteme/${r.slug}`, locale) })),
    },
    { label: dict.common.nav.guides, href: localePath("/ratgeber", locale) },
    { label: dict.common.nav.references, href: localePath("/referenzen", locale) },
    { label: dict.common.nav.about, href: localePath("/ueber-uns", locale) },
    { label: dict.common.nav.contact, href: localePath("/kontakt", locale) },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLanguage(newLocale: Locale) {
    // Strip any locale prefix from pathname to get the base path
    let basePath = pathname;
    const firstSegment = pathname.split("/")[1];
    if (locales.includes(firstSegment as Locale)) {
      basePath = pathname.slice(firstSegment.length + 1) || "/";
    }
    setLangDropdownOpen(false);
    setMobileMenuOpen(false);

    // On the Czech domain, Czech uses clean URLs and German lives on the
    // Austrian domain (clean URLs there). English works via /en on both.
    const czHosts = ["moduloparking.cz", "www.moduloparking.cz"];
    const onCzDomain =
      typeof window !== "undefined" && czHosts.includes(window.location.hostname);

    if (onCzDomain && newLocale === "de") {
      window.location.href = `https://moduloparking.at${basePath === "/" ? "" : basePath}`;
      return;
    }

    const hostDefault: Locale = onCzDomain ? "cs" : "de";
    const newPath = newLocale === hostDefault ? basePath : `/${newLocale}${basePath}`;
    router.push(newPath);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={localePath("/", locale)} className="flex items-center gap-3 group">
            <Image
              src="/images/logos/MODULO.svg"
              alt="Modulo"
              width={140}
              height={32}
              className="logo-themed transition-all duration-300"
            />
            <span className="hidden sm:block text-xs font-mono text-[var(--foreground-muted)] tracking-wider">
              {dict.common.nav.austria}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      className="flex items-center gap-1 text-sm font-medium text-[var(--foreground)] hover:text-[var(--modulo-accent)] transition-colors"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-[var(--background)] border border-[var(--border)] shadow-lg">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-3 text-sm text-[var(--foreground)] hover:bg-[var(--background-secondary)] hover:text-[var(--modulo-accent)] transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--modulo-accent)] transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--modulo-accent)] transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button, Theme Toggle & Language Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={dict.common.nav.toggleTheme}
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Language Switcher - Desktop */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 px-2 py-1.5 text-sm font-mono font-medium text-[var(--foreground)] hover:text-[var(--modulo-accent)] transition-colors border border-[var(--border)] rounded"
              >
                {localeCodes[locale as Locale]}
                <svg
                  className={`w-3 h-3 transition-transform ${langDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-[var(--background)] border border-[var(--border)] shadow-lg">
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => switchLanguage(loc)}
                      className={`block w-full text-left px-4 py-3 text-sm transition-colors ${
                        loc === locale
                          ? "text-[var(--modulo-accent)] bg-[var(--background-secondary)]"
                          : "text-[var(--foreground)] hover:bg-[var(--background-secondary)] hover:text-[var(--modulo-accent)]"
                      }`}
                    >
                      {localeCodes[loc]} - {localeNames[loc]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={localePath("/kontakt", locale)}
              className="btn-primary inline-flex items-center gap-2"
            >
              {dict.common.nav.requestQuote}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[var(--foreground)]"
            aria-label={dict.common.nav.menu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--background-secondary)] border-t border-[var(--border)]">
          <nav className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      className="flex items-center justify-between w-full text-lg font-medium text-[var(--foreground)] hover:text-[var(--modulo-accent)] transition-colors py-2"
                    >
                      {item.label}
                      <svg
                        className={`w-5 h-5 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                            className="block py-2 text-[var(--foreground-muted)] hover:text-[var(--modulo-accent)] transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-[var(--foreground)] hover:text-[var(--modulo-accent)] transition-colors py-2 block"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--border)]">
              <span className="text-sm text-[var(--foreground-muted)]">Theme</span>
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label={dict.common.nav.toggleTheme}
              >
                {theme === "dark" ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Language Switcher - Mobile */}
            <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
              <span className="text-sm text-[var(--foreground-muted)]">Language</span>
              <div className="flex items-center gap-2">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => switchLanguage(loc)}
                    className={`px-2.5 py-1 text-sm font-mono font-medium rounded transition-colors ${
                      loc === locale
                        ? "bg-[var(--modulo-accent)] text-white"
                        : "text-[var(--foreground)] border border-[var(--border)] hover:text-[var(--modulo-accent)]"
                    }`}
                  >
                    {localeCodes[loc]}
                  </button>
                ))}
              </div>
            </div>

            <Link
              href={localePath("/kontakt", locale)}
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary inline-flex items-center justify-center gap-2 mt-4"
            >
              {dict.common.nav.requestQuote}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
