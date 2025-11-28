import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-aaebf4f8.vercel.app"),
  title: "Intelliwave | Agence de création de chatbots sur mesure",
  description:
    "Intelliwave conçoit des chatbots intelligents et élégants pour les marques ambitieuses.",
  openGraph: {
    title: "Intelliwave",
    description:
      "Agence de création de chatbots sur mesure. Expérience conversationnelle haut de gamme.",
    url: "https://agentic-aaebf4f8.vercel.app",
    siteName: "Intelliwave",
    images: [
      {
        url: "/og-intelliwave.png",
        width: 1200,
        height: 630,
        alt: "Intelliwave chatbot design minimaliste"
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Intelliwave",
    description:
      "Agence de création de chatbots sur mesure. Expérience conversationnelle haut de gamme.",
    images: ["/og-intelliwave.png"]
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
