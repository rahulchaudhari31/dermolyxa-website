import type { Metadata, Viewport } from "next";
import { cormorant, inter } from "@/lib/fonts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { CookieNotice } from "@/components/CookieNotice";
import { JsonLd } from "@/components/JsonLd";
import {
  localBusinessJsonLd,
  medicalBusinessJsonLd,
  siteUrl,
} from "@/lib/seo";
import "./globals.css";

const description =
  "Dermolyxa is a luxury clinic blending advanced regenerative medicine and aesthetic science for timeless, natural results.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dermolyxa | Advanced Regenerative & Aesthetic Science",
    template: "%s | Dermolyxa",
  },
  description,
  applicationName: "Dermolyxa",
  authors: [{ name: "Dermolyxa" }],
  keywords: [
    "Dermolyxa",
    "aesthetic clinic",
    "regenerative medicine",
    "skin treatments",
    "cosmetic dermatology",
    "hair transplant",
    "PRP therapy",
    "luxury skincare",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Dermolyxa",
    title: "Dermolyxa | Advanced Regenerative & Aesthetic Science",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dermolyxa | Advanced Regenerative & Aesthetic Science",
    description,
    creator: "@dermolyxa",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-bg text-ivory">
        <JsonLd data={medicalBusinessJsonLd()} />
        <JsonLd data={localBusinessJsonLd()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <div className="h-16 md:hidden" aria-hidden />
        <FloatingActions />
        <CookieNotice />
      </body>
    </html>
  );
}
