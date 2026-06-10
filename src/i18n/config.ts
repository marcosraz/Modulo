export const locales = ["de", "en", "cs"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  cs: "Česky",
};

export const localeFlags: Record<Locale, string> = {
  de: "AT",
  en: "GB",
  cs: "CZ",
};

export const localePrefixes: Record<Locale, string> = {
  de: "",
  en: "/en",
  cs: "/cs",
};

// German lives on the Austrian domain, Czech on the Czech domain (both with
// clean URLs); English is served under /en on the Austrian domain.
export function localeUrl(path: string, locale: Locale): string {
  const p = path === "/" ? "" : path;
  if (locale === "cs") return `https://moduloparking.cz${p}`;
  return `https://moduloparking.at${localePrefixes[locale]}${p}`;
}

export function hreflangAlternates(path: string): Record<string, string> {
  return {
    "de-AT": localeUrl(path, "de"),
    en: localeUrl(path, "en"),
    cs: localeUrl(path, "cs"),
    "x-default": localeUrl(path, "de"),
  };
}
