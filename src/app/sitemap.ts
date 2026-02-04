import { MetadataRoute } from "next";
import { products } from "@/data/products";

const BASE_URL = "https://modullo-parking.at";

// Alle Bundesländer für regionale Seiten
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

// Artikel-Slugs (werden später aus articles.ts importiert)
const articleSlugs = [
  "welches-parksystem-passt",
  "parksysteme-tiefgarage",
  "doppelparker-vorteile",
  "parkplatz-verdoppeln",
  "parksystem-kosten",
  "wartung-parksysteme",
  "parksysteme-mehrfamilienhaus",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Statische Seiten
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/produkte`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/kontakt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ueber-uns`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/ratgeber`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/referenzen`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Produktseiten
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/produkte/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Regionale Landing Pages
  const regionalPages: MetadataRoute.Sitemap = regions.map((region) => ({
    url: `${BASE_URL}/parksysteme/${region}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Blog/Ratgeber Artikel
  const articlePages: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${BASE_URL}/ratgeber/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...productPages, ...regionalPages, ...articlePages];
}
