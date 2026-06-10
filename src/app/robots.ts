import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: [
      "https://moduloparking.at/sitemap.xml",
      "https://modulparking.cz/sitemap.xml",
    ],
  };
}
