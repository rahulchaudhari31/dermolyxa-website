import { CONTACT, HOURS, SOCIALS } from "@/lib/site";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dermolyxa.com";

export const siteName = "Dermolyxa";
export const siteTagline = "Advanced Regenerative & Aesthetic Science";

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export function medicalBusinessJsonLd(): Record<string, JsonValue> {
  const openingHoursSpecification = HOURS.filter((h) => h.opens).map(
    (h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.schemaDays as unknown as string[],
      opens: h.opens,
      closes: h.closes,
    }),
  ) as unknown as JsonValue[];

  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    slogan: siteTagline,
    url: siteUrl,
    image: `${siteUrl}/logo.png`,
    logo: `${siteUrl}/logo.png`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.addressLine1,
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10016",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7484,
      longitude: -73.9857,
    },
    openingHoursSpecification,
    sameAs: SOCIALS.map((s) => s.href) as JsonValue[],
    medicalSpecialty: ["Dermatology", "PlasticSurgery", "RegenerativeMedicine"],
  };
}

export function localBusinessJsonLd(): Record<string, JsonValue> {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    telephone: CONTACT.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.addressLine1,
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10016",
      addressCountry: "US",
    },
    hasMap: `${siteUrl}/contact`,
  };
}

export function faqJsonLd(
  items: { question: string; answer: string }[],
): Record<string, JsonValue> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })) as JsonValue[],
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  url: string;
  image: string;
  author: string;
  date: string;
  section?: string;
}): Record<string, JsonValue> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    url: article.url,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
    ...(article.section ? { articleSection: article.section } : {}),
  };
}

export function breadcrumbJsonLd(items: {
  name: string;
  url: string;
}[]): Record<string, JsonValue> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })) as JsonValue[],
  };
}