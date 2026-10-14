import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { ResultsSection } from "@/components/ResultsSection";
import { BookingForm } from "@/components/booking/BookingForm";
import { JsonLd } from "@/components/JsonLd";
import { CONTACT, SOCIALS } from "@/lib/site";
import { faqs } from "@/data/faqs";
import { faqJsonLd } from "@/lib/seo";

const doctors = [
  {
    name: "Dr. Elena Marchetti",
    role: "Medical Director",
    focus: "Regenerative Medicine",
  },
  {
    name: "Dr. Adrian Cole",
    role: "Lead Dermatologist",
    focus: "Laser & Skin Science",
  },
  {
    name: "Dr. Sofia Nakamura",
    role: "Aesthetic Surgeon",
    focus: "Facial Contouring",
  },
];

const pricing = [
  {
    name: "Essential",
    price: "$290",
    tagline: "Signature skin ritual",
    features: [
      "Skin analysis & consultation",
      "Medical-grade facial",
      "LED & hydration therapy",
      "Personalised home care",
    ],
    highlighted: false,
  },
  {
    name: "Regenerative",
    price: "$690",
    tagline: "Most requested",
    features: [
      "Everything in Essential",
      "PRP regeneration therapy",
      "Microneedling protocol",
      "Two-week follow-up review",
    ],
    highlighted: true,
  },
  {
    name: "Signature",
    price: "$1,450",
    tagline: "Full-face renewal",
    features: [
      "Everything in Regenerative",
      "Filler & neuromodulator artistry",
      "Fractional laser session",
      "Priority concierge access",
    ],
    highlighted: false,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      <TreatmentsSection />
      <About />

      <ResultsSection />

      <section id="doctors" className="scroll-mt-24 py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Doctors"
            title="Led by renowned specialists"
            description="A multidisciplinary team of physicians at the forefront of regenerative and aesthetic medicine."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor, index) => (
              <Reveal key={doctor.name} delay={index * 0.08}>
                <Card className="h-full text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-gold/30 bg-gold/5 font-serif text-3xl text-gold">
                    {doctor.name
                      .split(" ")
                      .slice(-2)
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-ivory">
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-sm uppercase tracking-luxe text-gold">
                    {doctor.role}
                  </p>
                  <p className="mt-3 text-sm text-ivory/50">{doctor.focus}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <HowItWorks />

      <section id="pricing" className="scroll-mt-24 py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent, considered investment"
            description="Every plan begins with a consultation and is tailored to you. Prices shown per session."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pricing.map((tier, index) => (
              <Reveal key={tier.name} delay={index * 0.08}>
                <Card
                  className={`flex h-full flex-col ${
                    tier.highlighted
                      ? "border-gold/50 bg-surface shadow-gold"
                      : ""
                  }`}
                >
                  {tier.highlighted ? (
                    <span className="absolute right-6 top-6 rounded-full bg-gold-gradient px-3 py-1 text-[0.6rem] font-medium uppercase tracking-luxe text-bg">
                      Popular
                    </span>
                  ) : null}
                  <h3 className="font-serif text-2xl text-ivory">{tier.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-luxe text-gold/80">
                    {tier.tagline}
                  </p>
                  <p className="mt-6 font-serif text-5xl text-gold">
                    {tier.price}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-ivory/60"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/#contact"
                    variant={tier.highlighted ? "primary" : "secondary"}
                    className="mt-8 w-full"
                  >
                    Book Now
                  </Button>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="faq" className="scroll-mt-24 py-20 lg:py-28">
        <Container>
          <JsonLd data={faqJsonLd(faqs)} />
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered"
            description="Everything you might want to know before your first visit."
          />
          <Reveal>
            <Faq items={faqs} />
          </Reveal>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-24 py-20 lg:py-28">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-gold/20 bg-surface/60">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12">
                <SectionHeading
                  align="left"
                  eyebrow="Contact"
                  title="Book your consultation"
                  description="Share your details and our concierge team will reach out to arrange your private assessment."
                />

                <ul className="mt-10 space-y-5 text-sm">
                  <li>
                    <span className="block text-xs uppercase tracking-luxe text-gold/80">
                      Phone
                    </span>
                    <a
                      href={CONTACT.phoneHref}
                      className="mt-1 inline-block text-ivory/70 transition-colors hover:text-gold"
                    >
                      {CONTACT.phone}
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs uppercase tracking-luxe text-gold/80">
                      Email
                    </span>
                    <a
                      href={CONTACT.emailHref}
                      className="mt-1 inline-block text-ivory/70 transition-colors hover:text-gold"
                    >
                      {CONTACT.email}
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs uppercase tracking-luxe text-gold/80">
                      Clinic
                    </span>
                    <span className="mt-1 inline-block max-w-xs text-ivory/70">
                      {CONTACT.address}
                    </span>
                  </li>
                </ul>

                <div className="mt-8 flex gap-3">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-xs font-medium uppercase text-gold/80 transition-all hover:border-gold hover:bg-gold/10 hover:text-gold-light"
                    >
                      {social.label.slice(0, 2)}
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/5 bg-bg/40 p-8 sm:p-12 lg:border-l lg:border-t-0">
                <BookingForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
