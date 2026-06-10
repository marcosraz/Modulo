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
  const { toggleTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const regionsButtonRef = useRef<HTMLButtonElement>(null);
  const langButtonRef = useRef<HTMLButtonElement>(null);
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

  // Active-route detection (locale-prefix aware)
  const regionsRoot = localePath("/parksysteme", locale);
  const homePath = localePath("/", locale);
  function isActive(href: string): boolean {
    if (href === regionsRoot + "/wien") {
      return pathname.startsWith(regionsRoot);
    }
    if (href === homePath) {
      return pathname === homePath;
    }
    return pathname === href || pathname.startsWith(href + "/");
  }

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
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (openDropdown) {
          setOpenDropdown(null);
          regionsButtonRef.current?.focus();
        }
        if (langDropdownOpen) {
          setLangDropdownOpen(false);
          langButtonRef.current?.focus();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openDropdown, langDropdownOpen]);

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
    const czHosts = ["modulparking.cz", "www.modulparking.cz"];
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
          ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)] shadow-[var(--shadow-sm)]"
          : "bg-transparent"
      }`}
    >
      <a href="#main" className="skip-link">
        {dict.common.nav.skipToContent}
      </a>
      <div className="max-w-7xl 2xl:max-w-[88rem] mx-auto px-6 lg:px-8 2xl:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={localePath("/", locale)} className="flex items-center gap-3 group">
            <Image
              src="/images/logos/MODULO.svg"
              alt={dict.common.meta.siteName}
              width={140}
              height={32}
              style={{ height: "auto" }}
              className="logo-themed transition-all duration-300"
              priority
            />
            <span className="hidden sm:block text-xs font-mono text-[var(--foreground-muted)] tracking-wider">
              {dict.common.nav.austria}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" ref={dropdownRef} aria-label="Hauptnavigation">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={item.dropdown ? () => setOpenDropdown(item.label) : undefined}
                  onMouseLeave={item.dropdown ? () => setOpenDropdown(null) : undefined}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        ref={regionsButtonRef}
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.label ? null : item.label)
                        }
                        aria-haspopup="true"
                        aria-expanded={openDropdown === item.label}
                        aria-controls="regions-menu"
                        className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                          active ? "text-[var(--modulo-accent)]" : "text-[var(--foreground)] hover:text-[var(--modulo-accent)]"
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
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
                        <div
                          id="regions-menu"
                          className="absolute top-full left-0 pt-2 w-56"
                        >
                          <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-[var(--radius-base)] shadow-[var(--shadow-lg)] overflow-hidden py-1">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={() => setOpenDropdown(null)}
                                aria-current={pathname === subItem.href ? "page" : undefined}
                                className={`block px-4 py-2.5 text-sm transition-colors ${
                                  pathname === subItem.href
                                    ? "text-[var(--modulo-accent)] bg-[var(--surface-3)]"
                                    : "text-[var(--foreground)] hover:bg-[var(--surface-3)] hover:text-[var(--modulo-accent)]"
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`text-sm font-medium transition-colors relative group ${
                        active ? "text-[var(--modulo-accent)]" : "text-[var(--foreground)] hover:text-[var(--modulo-accent)]"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--modulo-accent)] transition-all duration-300 ${
                          active ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA Button, Theme Toggle & Language Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={dict.common.nav.toggleTheme}
            >
              <svg className="theme-icon-sun w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg className="theme-icon-moon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            {/* Language Switcher - Desktop */}
            <div className="relative" ref={langDropdownRef}>
              <button
                ref={langButtonRef}
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                aria-haspopup="true"
                aria-expanded={langDropdownOpen}
                aria-controls="lang-menu"
                aria-label={`${dict.common.nav.selectLanguage}, ${localeNames[locale as Locale]}`}
                className="flex items-center gap-1 px-2 py-1.5 text-sm font-mono font-medium text-[var(--foreground)] hover:text-[var(--modulo-accent)] transition-colors border border-[var(--border-strong)] rounded-[var(--radius-base)]"
              >
                {localeCodes[locale as Locale]}
                <svg
                  className={`w-3 h-3 transition-transform ${langDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langDropdownOpen && (
                <div id="lang-menu" className="absolute top-full right-0 mt-2 w-40 bg-[var(--surface-2)] border border-[var(--border)] rounded-[var(--radius-base)] shadow-[var(--shadow-lg)] overflow-hidden py-1">
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => switchLanguage(loc)}
                      aria-current={loc === locale ? "true" : undefined}
                      className={`flex items-center justify-between w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        loc === locale
                          ? "text-[var(--modulo-accent)] bg-[var(--surface-3)] font-medium"
                          : "text-[var(--foreground)] hover:bg-[var(--surface-3)] hover:text-[var(--modulo-accent)]"
                      }`}
                    >
                      <span>{localeCodes[loc]} — {localeNames[loc]}</span>
                      {loc === locale && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
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
                aria-hidden="true"
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
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
        <div id="mobile-menu" className="lg:hidden bg-[var(--background-secondary)] border-t border-[var(--border)]">
          <nav className="flex flex-col p-6 gap-4" aria-label="Mobile-Navigation">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <div key={item.href}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.label ? null : item.label)
                        }
                        aria-haspopup="true"
                        aria-expanded={openDropdown === item.label}
                        className={`flex items-center justify-between w-full text-lg font-medium transition-colors py-2 ${
                          active ? "text-[var(--modulo-accent)]" : "text-[var(--foreground)] hover:text-[var(--modulo-accent)]"
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`w-5 h-5 transition-transform ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
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
                        <div className="ml-4 mt-2 space-y-2 border-l border-[var(--border)] pl-4">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setOpenDropdown(null);
                              }}
                              aria-current={pathname === subItem.href ? "page" : undefined}
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
                      aria-current={active ? "page" : undefined}
                      className={`text-lg font-medium transition-colors py-2 block ${
                        active ? "text-[var(--modulo-accent)]" : "text-[var(--foreground)] hover:text-[var(--modulo-accent)]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--border)]">
              <span className="text-sm text-[var(--foreground-muted)]">{dict.common.nav.theme}</span>
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label={dict.common.nav.toggleTheme}
              >
                <svg className="theme-icon-sun w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <svg className="theme-icon-moon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </button>
            </div>

            {/* Language Switcher - Mobile */}
            <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
              <span className="text-sm text-[var(--foreground-muted)]">{dict.common.nav.language}</span>
              <div className="flex items-center gap-2">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => switchLanguage(loc)}
                    aria-current={loc === locale ? "true" : undefined}
                    className={`px-2.5 py-1 text-sm font-mono font-medium rounded-[var(--radius-base)] transition-colors ${
                      loc === locale
                        ? "bg-[var(--modulo-accent)] text-white"
                        : "text-[var(--foreground)] border border-[var(--border-strong)] hover:text-[var(--modulo-accent)]"
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
