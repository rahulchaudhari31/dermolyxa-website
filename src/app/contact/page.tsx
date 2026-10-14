import type { Metadata } from "next";
import { BookingForm } from "@/components/booking/BookingForm";
import { ContactCards } from "@/components/contact/ContactCards";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Dermolyxa",
  description:
    "Get in touch with Dermolyxa. Book a free consultation, reach us by phone, email, or visit our Madison Avenue clinic in New York.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Dermolyxa",
    description:
      "Book a free consultation or reach our New York clinic by phone, email, or WhatsApp.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pb-16 pt-32 lg:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-gold-radial"
        />
        <Container>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-gold/60" aria-hidden />
              Contact
            </span>
            <h1 className="mt-6 max-w-3xl text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s begin your
              <span className="block gold-text">journey together</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ivory/60 sm:text-lg">
              Reach out by phone, message, or visit us on Madison Avenue. Every
              journey begins with a free, private consultation.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            <Reveal className="flex flex-col gap-5">
              <ContactCards />
              <h2 className="mt-6 text-xs uppercase tracking-luxe text-gold/80">
                Find Us
              </h2>
              <MapEmbed className="aspect-[4/3] w-full" />
            </Reveal>

            <Reveal delay={0.08}>
              <div id="booking" className="scroll-mt-28 rounded-2xl border border-gold/20 bg-surface/60 p-6 backdrop-blur sm:p-10">
                <span className="eyebrow">
                  <span className="h-px w-6 bg-gold/60" aria-hidden />
                  Booking
                </span>
                <h2 className="mt-4 font-serif text-2xl text-ivory sm:text-3xl">
                  Request your free consultation
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ivory/60">
                  Fill in the form and our concierge team will contact you
                  within one business day. Prefer instant answers? Message us on
                  WhatsApp.
                </p>
                <div className="mt-8">
                  <BookingForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}