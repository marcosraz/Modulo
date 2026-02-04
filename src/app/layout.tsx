import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { OrganizationSchema, LocalBusinessSchema } from "@/components/SEO";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://modullo-parking.at"),
  title: {
    default: "Modullo Parking Austria | Automatische Parksysteme & Parklifte",
    template: "%s | Modullo Parking Austria",
  },
  description:
    "Offizieller MODULO Vertriebspartner in Österreich. Parkplattformen, Parklifte, Doppelparker und Stapelparker für Tiefgaragen, Mehrfamilienhäuser und Gewerbe. Beratung & Montage bundesweit.",
  keywords: [
    "Parksysteme Österreich",
    "Parkplattformen",
    "Parklift",
    "Doppelparker",
    "Stapelparker",
    "automatisches Parken",
    "MODULO",
    "Parkplattform kaufen",
    "Parksysteme Tiefgarage",
    "Parkplatz verdoppeln",
    "Parksysteme Wien",
    "Parklift Österreich",
  ],
  authors: [{ name: "Modullo Parking Austria" }],
  creator: "Modullo Parking Austria",
  publisher: "Modullo Parking Austria",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://modullo-parking.at",
    siteName: "Modullo Parking Austria",
    title: "Modullo Parking Austria | Automatische Parksysteme",
    description:
      "Offizieller MODULO Vertriebspartner in Österreich. Parkplattformen, Parklifte, Doppelparker und automatische Parksysteme. Beratung & Montage bundesweit.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Modullo Parking Austria - Automatische Parksysteme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modullo Parking Austria | Automatische Parksysteme",
    description:
      "Parkplattformen, Parklifte und Doppelparker für Österreich. Verdoppeln Sie Ihre Parkkapazität.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://modullo-parking.at",
  },
  verification: {
    // google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
