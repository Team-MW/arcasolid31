import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.arcasolid31.fr"),
  title: "ARCASOLID31 | Sols Époxy Décoratifs, Béton Ciré & Moquette de Pierre à Toulouse",
  description: "Artisan d'excellence à Toulouse et Haute-Garonne : Revêtements en résine époxy décorative (130€/m²), sols de garage haute performance (70€/m²), béton ciré contemporain (130€/m²), moquette de pierre et surfaçage technique de dalles.",
  keywords: [
    "ArcaSolid31",
    "Sol époxy Toulouse",
    "Béton ciré Toulouse",
    "Résine sol garage 31",
    "Moquette de pierre Haute-Garonne",
    "Rénovation dalles béton",
    "Table époxy artisanale",
    "Devis sol résine Occitanie"
  ],
  authors: [{ name: "ARCASOLID31" }],
  creator: "ARCASOLID31",
  openGraph: {
    title: "ARCASOLID31 | Revêtements de Sols d'Exception à Toulouse",
    description: "Sols époxy décoratifs, béton ciré et résine haute résistance. Devis rapide sous 30 min.",
    url: "https://www.arcasolid31.fr",
    siteName: "ARCASOLID31",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "ARCASOLID31 - Revêtements de Sols Époxy et Béton Ciré"
      }
    ]
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.png"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A4140"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
