export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Modulo Parking Austria",
    alternateName: "MODULO Österreich",
    url: "https://moduloparking.at",
    logo: "https://moduloparking.at/images/logos/MODULO.svg",
    description:
      "Offizieller Vertrieb von MODULO Parkplattformen in Österreich. Automatische Parksysteme, Parklifte und Stapelparker für maximale Flächeneffizienz.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+43-676-726-34-87",
      contactType: "sales",
      areaServed: "AT",
      availableLanguage: ["German", "English"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "AT",
    },
    sameAs: ["https://moduloparking.com", "https://sdil.cz/modulo"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
