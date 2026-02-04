interface ArticleSchemaProps {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
}

export default function ArticleSchema({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
  author = "Modullo Parking Austria",
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: "https://modullo-parking.at/images/logos/MODULO.svg",
    author: {
      "@type": "Organization",
      name: author,
      url: "https://modullo-parking.at",
    },
    publisher: {
      "@type": "Organization",
      name: "Modullo Parking Austria",
      logo: {
        "@type": "ImageObject",
        url: "https://modullo-parking.at/images/logos/MODULO.svg",
      },
    },
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://modullo-parking.at/ratgeber/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
