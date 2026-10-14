// Replace Unsplash placeholders with real clinic photos. Before/after photos must be real patient cases with written consent.

export const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD84P7Z9/1ooooA/9k=";

/**
 * The intended free-licensed Unsplash sources for each slot.
 *
 * These are kept here so you can switch a slot to a remote photo by copying the
 * matching URL into `images` below (and keeping `images.unsplash.com` in
 * `next.config.mjs` → `images.remotePatterns`). They are not used by default
 * because the local branded placeholders are guaranteed to load offline.
 */
export const unsplashSources = {
  hero: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&h=1080&q=80",
  about: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1000&h=1200&q=80",
  contact: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&h=900&q=80",
} as const;

/**
 * Single source of truth for every image shown on the site.
 * Components must import from this file — never hardcode image paths/URLs.
 */
export const images = {
  hero: "/images/hero/hero-main.jpg",

  treatments: {
    "fue-hair-transplant": "/images/treatments/fue-hair-transplant.jpg",
    "prp-therapy": "/images/treatments/prp-therapy.jpg",
    "non-surgical-hair-regrowth":
      "/images/treatments/non-surgical-hair-regrowth.jpg",
    "hair-replacement": "/images/treatments/hair-replacement.jpg",
    "skin-rejuvenation": "/images/treatments/skin-rejuvenation.jpg",
    "aesthetic-treatments": "/images/treatments/aesthetic-treatments.jpg",
  },

  about: {
    main: "/images/about/about-clinic.jpg",
  },

  process: {
    step1: "/images/process/step-1.jpg",
    step2: "/images/process/step-2.jpg",
    step3: "/images/process/step-3.jpg",
  },

  results: {
    "fue-hairline": {
      before: "/images/results/fue-hairline-before.jpg",
      after: "/images/results/fue-hairline-after.jpg",
    },
    "crown-density": {
      before: "/images/results/crown-density-before.jpg",
      after: "/images/results/crown-density-after.jpg",
    },
    "prp-hair": {
      before: "/images/results/prp-hair-before.jpg",
      after: "/images/results/prp-hair-after.jpg",
    },
    "prp-beard": {
      before: "/images/results/prp-beard-before.jpg",
      after: "/images/results/prp-beard-after.jpg",
    },
    "skin-rejuvenation": {
      before: "/images/results/skin-rejuvenation-before.jpg",
      after: "/images/results/skin-rejuvenation-after.jpg",
    },
    "facial-aesthetics": {
      before: "/images/results/facial-aesthetics-before.jpg",
      after: "/images/results/facial-aesthetics-after.jpg",
    },
  },

  doctors: {
    doctor1: "/images/doctors/doctor-1.jpg",
    doctor2: "/images/doctors/doctor-2.jpg",
    doctor3: "/images/doctors/doctor-3.jpg",
  },

  testimonials: {
    featured: "/images/patients/featured.jpg",
    patients: [
      "/images/patients/patient-1.jpg",
      "/images/patients/patient-2.jpg",
      "/images/patients/patient-3.jpg",
      "/images/patients/patient-4.jpg",
    ],
  },

  pricing: {
    essential: "/images/treatments/skin-rejuvenation.jpg",
    regenerative: "/images/treatments/prp-therapy.jpg",
    signature: "/images/treatments/aesthetic-treatments.jpg",
  },

  contact: {
    main: "/images/gallery/clinic-exterior.jpg",
  },

  gallery: {
    exterior: "/images/gallery/clinic-exterior.jpg",
    interior1: "/images/gallery/interior-1.jpg",
    interior2: "/images/gallery/interior-2.jpg",
    interior3: "/images/gallery/interior-3.jpg",
  },

  og: "/images/brand/og-image.jpg",

  brand: {
    logo: "/images/brand/logo.png",
    logoSvg: "/images/brand/logo.svg",
    ogImage: "/images/brand/og-image.jpg",
  },
} as const;

export type TreatmentSlug = keyof typeof images.treatments;
export type ResultId = keyof typeof images.results;
