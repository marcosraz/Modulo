import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt & Beratung",
  description:
    "Kontaktieren Sie uns für eine unverbindliche Beratung zu MODULO Parksystemen. Telefon: +43 676 726 34 87. Wir beraten Sie bundesweit zu Parkplattformen, Parkliften und Doppelparkern.",
  keywords: [
    "Parksystem Beratung",
    "Parkplattform Angebot",
    "MODULO Kontakt",
    "Parklift Österreich",
  ],
  alternates: {
    canonical: "https://modullo-parking.at/kontakt",
  },
  openGraph: {
    title: "Kontakt | Modullo Parking Austria",
    description:
      "Unverbindliche Beratung zu MODULO Parksystemen. Bundesweiter Service in Österreich.",
    url: "https://modullo-parking.at/kontakt",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
