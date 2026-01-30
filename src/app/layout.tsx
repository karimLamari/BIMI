import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bimi.quxly.fr"),
  title: {
    default: "BIMI - Logiciel de gestion restaurant tout-en-un",
    template: "%s | BIMI",
  },
  description:
    "BIMI est la solution complète pour gérer votre restaurant : commandes en ligne, réservations, planning employés, pointage, HACCP, analytics. 33 modules en un seul système.",
  keywords: [
    "logiciel restaurant",
    "gestion restaurant",
    "caisse restaurant",
    "commande en ligne restaurant",
    "réservation restaurant",
    "planning restaurant",
    "pointage employés",
    "HACCP restaurant",
    "logiciel restauration",
    "POS restaurant",
    "gestion commandes",
    "fidélité restaurant",
    "analytics restaurant",
    "gestion équipe restaurant",
    "logiciel click and collect",
    "système commande restaurant",
  ],
  authors: [{ name: "Karim Lamari", url: "https://karimlamari.quxly.fr" }],
  creator: "Karim Lamari",
  publisher: "BIMI",
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://bimi.quxly.fr",
    siteName: "BIMI",
    title: "BIMI - Logiciel de gestion restaurant tout-en-un",
    description:
      "Commandes, réservations, planning, pointage, HACCP, analytics. 33 modules pour piloter votre restaurant. Zéro papier.",
    images: [
      {
        url: "/screenshots/13-analytics-full.png",
        width: 1920,
        height: 1080,
        alt: "Dashboard BIMI - Logiciel de gestion restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BIMI - Logiciel de gestion restaurant tout-en-un",
    description:
      "33 modules pour piloter votre restaurant : commandes, réservations, planning, HACCP, analytics. Demandez une démo.",
    images: ["/screenshots/13-analytics-full.png"],
    creator: "@karimlamari",
  },
  alternates: {
    canonical: "https://bimi.quxly.fr",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BIMI",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Solution complète de gestion pour restaurants : commandes en ligne, réservations, planning employés, pointage, conformité HACCP, analytics et fidélité client.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Sur devis - Démo gratuite disponible",
    },
    author: {
      "@type": "Person",
      name: "Karim Lamari",
      url: "https://karimlamari.quxly.fr",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "Commandes en ligne temps réel",
      "Réservations avec plan de salle",
      "Planning employés",
      "Pointage par PIN",
      "Conformité HACCP",
      "Analytics et KPIs",
      "Programme fidélité",
      "Codes promo",
      "Notifications broadcast",
      "Impression tickets",
    ],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BIMI",
    url: "https://bimi.quxly.fr",
    logo: "https://bimi.quxly.fr/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      email: "Mirakiramal@gmail.com",
      contactType: "sales",
      availableLanguage: ["French"],
    },
    founder: {
      "@type": "Person",
      name: "Karim Lamari",
    },
  };

  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0a0a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
