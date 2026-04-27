import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://freshflow.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "FreshFlow — Moins de gaspillage. Plus d'économies.",
    template: "%s · FreshFlow",
  },
  description:
    "FreshFlow t'aide à suivre ce que tu as déjà chez toi, à éviter les achats en doublon et à cuisiner avant que tes aliments ne périment.",
  keywords: [
    "gaspillage alimentaire",
    "budget courses",
    "frigo connecté",
    "anti-gaspi",
    "liste de courses",
    "recettes anti-gaspi",
    "économies courses",
  ],
  authors: [{ name: "FreshFlow" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "FreshFlow",
    title: "FreshFlow — Moins de gaspillage. Plus d'économies.",
    description:
      "L'app qui réduit ton budget courses : suivi du frigo, alertes péremption, recettes et économies mesurées.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreshFlow — Moins de gaspillage. Plus d'économies.",
    description:
      "L'app qui réduit ton budget courses, sans y penser.",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#2E7D32",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
