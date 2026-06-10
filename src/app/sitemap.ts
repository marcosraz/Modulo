import { MetadataRoute } from "next";
import { products } from "@/data/products";
import { locales, localeUrl as i18nLocaleUrl, type Locale } from "@/i18n/config";

const regions = [
  "wien",
  "niederoesterreich",
  "oberoesterreich",
  "salzburg",
  "tirol",
  "steiermark",
  "kaernten",
  "burgenland",
  "vorarlberg",
];

const articleSlugs = [
  "welches-parksystem-passt",
  "parksysteme-tiefgarage",
  "doppelparker-vorteile",
  "parkplatz-verdoppeln",
  "parksystem-kosten",
  "wartung-parksysteme",
  "parksysteme-mehrfamilienhaus",
];

function localeUrl(path: string, locale: string): string {
  return i18nLocaleUrl(path || "/", locale as Locale);
}

function alternates(path: string): Record<string, string> {
  return {
    "de-AT": localeUrl(path, "de"),
    en: localeUrl(path, "en"),
    cs: localeUrl(path, "cs"),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Static pages per locale
  const staticPaths: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/produkte", priority: 0.9, changeFrequency: "weekly" },
    { path: "/kontakt", priority: 0.8, changeFrequency: "monthly" },
    { path: "/ueber-uns", priority: 0.7, changeFrequency: "monthly" },
    { path: "/ratgeber", priority: 0.8, changeFrequency: "weekly" },
    { path: "/referenzen", priority: 0.7, changeFrequency: "monthly" },
  ];

  for (const page of staticPaths) {
    for (const locale of locales) {
      entries.push({
        url: localeUrl(page.path || "/", locale),
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: locale === "de" ? page.priority : page.priority * 0.9,
        alternates: {
          languages: alternates(page.path || "/"),
        },
      });
    }
  }

  // Product pages per locale
  for (const product of products) {
    for (const locale of locales) {
      entries.push({
        url: localeUrl(`/produkte/${product.slug}`, locale),
        lastModified: now,
        changeFrequency: "monthly",
        priority: locale === "de" ? 0.8 : 0.7,
        alternates: {
          languages: alternates(`/produkte/${product.slug}`),
        },
      });
    }
  }

  // Regional pages per locale
  for (const region of regions) {
    for (const locale of locales) {
      entries.push({
        url: localeUrl(`/parksysteme/${region}`, locale),
        lastModified: now,
        changeFrequency: "monthly",
        priority: locale === "de" ? 0.8 : 0.7,
        alternates: {
          languages: alternates(`/parksysteme/${region}`),
        },
      });
    }
  }

  // Article pages per locale
  for (const slug of articleSlugs) {
    for (const locale of locales) {
      entries.push({
        url: localeUrl(`/ratgeber/${slug}`, locale),
        lastModified: now,
        changeFrequency: "monthly",
        priority: locale === "de" ? 0.6 : 0.5,
        alternates: {
          languages: alternates(`/ratgeber/${slug}`),
        },
      });
    }
  }

  return entries;
}
