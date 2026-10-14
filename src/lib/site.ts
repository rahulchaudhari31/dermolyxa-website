export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/#treatments" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const CONTACT = {
  phone: "+1 (212) 555-0147",
  phoneHref: "tel:+12125550147",
  email: "hello@dermolyxa.com",
  emailHref: "mailto:hello@dermolyxa.com",
  address: "12 Madison Avenue, Suite 800, New York, NY 10016",
  addressLine1: "12 Madison Avenue, Suite 800",
  addressLine2: "New York, NY 10016",
} as const;

export const WHATSAPP = {
  number: "12125550147",
  message: "Hi Dermolyxa, I'd like to book a free consultation.",
} as const;

export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(
  WHATSAPP.message,
)}`;

export const HOURS = [
  {
    day: "Monday – Friday",
    time: "9:00 – 19:00",
    schemaDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "19:00",
  },
  {
    day: "Saturday",
    time: "10:00 – 16:00",
    schemaDays: ["Saturday"],
    opens: "10:00",
    closes: "16:00",
  },
  {
    day: "Sunday",
    time: "Closed",
    schemaDays: ["Sunday"],
    opens: "",
    closes: "",
  },
] as const;

export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
] as const;

export const FOOTER_LINKS = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Treatments", href: "/#treatments" },
      { label: "Results", href: "/results" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Clinic",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Medical Disclaimer", href: "/medical-disclaimer" },
    ],
  },
] as const;
