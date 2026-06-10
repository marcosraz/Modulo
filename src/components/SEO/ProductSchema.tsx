import { Product } from "@/data/products";

interface ProductSchemaProps {
  product: Product;
}

export default function ProductSchema({ product }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map(
      (img) => `https://moduloparking.at${img}`
    ),
    brand: {
      "@type": "Brand",
      name: "MODULO",
    },
    manufacturer: {
      "@type": "Organization",
      name: "PROMStahl / MODULO",
      url: "https://moduloparking.com",
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      seller: {
        "@type": "Organization",
        name: "Modulo Parking Austria",
        url: "https://moduloparking.at",
      },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Fahrzeugkapazität",
        value: product.specs.vehicles,
      },
      {
        "@type": "PropertyValue",
        name: "Ebenen",
        value: product.specs.levels,
      },
      {
        "@type": "PropertyValue",
        name: "Tragkraft",
        value: product.specs.capacity,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
