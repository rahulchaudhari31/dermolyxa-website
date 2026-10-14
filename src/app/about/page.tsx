import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Dermolyxa",
  description:
    "Dermolyxa is a New York clinic devoted to advanced regenerative and aesthetic science — where precision medicine meets refined artistry.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Dermolyxa",
    description:
      "Advanced regenerative and aesthetic science, delivered with precision and care.",
    url: "/about",
    type: "profile",
  },
};

const gallery = [
  { src: "/gallery/lobby.png", alt: "Dermolyxa reception lounge", aspect: "aspect-[4/5]" },
  { src: "/gallery/consultation.png", alt: "Private consultation suite", aspect: "aspect-square" },
  { src: "/gallery/procedure.png", alt: "Procedure room at Dermolyxa", aspect: "aspect-[4/5]" },
  { src: "/gallery/technology.png", alt: "Advanced clinic technology", aspect: "aspect-square" },
  { src: "/gallery/recovery.png", alt: "Recovery lounge", aspect: "aspect-[4/5]" },
  { src: "/gallery/exterior.png", alt: "Exterior of the Dermolyxa clinic", aspect: "aspect-square" },
];

const principles = [
  {
    title: "Regenerative-first",
    text: "We treat causes, not just symptoms — using growth factors and biology to restore your hair and skin.",
  },
  {
    title: "Refinement over transformation",
    text: "Our goal is to enhance your natural features, never to change who you are.",
  },
  {
    title: "Evidence-led care",
    text: "Every protocol is grounded in clinical science and delivered by senior specialists.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(
        [{ name: "Home", url: "/" }, { name: "About", url: "/about" }],
      )} />

      <section className="relative pb-20 pt-32 lg:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30rem] bg-gold-radial"
        />
        <Container>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-gold/60" aria-hidden />
              About Dermolyxa
            </span>
            <h1 className="mt-6 max-w-4xl text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl">
              Where regenerative science
              <span className="block gold-text">meets refined artistry.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ivory/60">
              Dermolyxa began with a simple belief: the best results in hair and
              aesthetic medicine come from treating the biology beneath the
              surface — not just the appearance on it.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-surface shadow-soft">
                <Image
                  src="/about-clinic.png"
                  alt="Inside the Dermolyxa clinic"
                  width={1000}
                  height={1250}
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="aspect-[4/5] h-auto w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <SectionHeading
                align="left"
                eyebrow="Our Story"
                title="Built on biology, guided by artistry"
                description=""
              />
              <div className="mt-6 space-y-5 text-sm leading-relaxed text-ivory/65 sm:text-base">
                <p>
                  Our founders — physicians, scientists, and artists — built
                  Dermolyxa around one conviction: that regenerative medicine
                  could deliver results far beyond traditional aesthetics when
                  practised with surgical precision and an eye for natural
                  beauty.
                </p>
                <p>
                  Every treatment plan begins with a deep understanding of your
                  anatomy and biology. We then combine the most advanced
                  regenerative and aesthetic techniques — from FUE hair
                  restoration to PRP therapy and skin rejuvenation — under one
                  roof, delivered personally by senior specialists.
                </p>
                <p>
                  The result is care that is as considered as it is effective,
                  and outcomes that look effortlessly like you.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Our Mission"
            title="Restore. Reclaim. Refine."
            description="Three principles shape every decision we make, from consultation to aftercare."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.08}>
                <div className="h-full rounded-2xl border border-gold/15 bg-surface/70 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold">
                  <span className="font-serif text-3xl text-gold/40">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-ivory">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/55">
                    {principle.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Technology"
                title="Regenerative science, clinical grade"
                description=""
              />
              <ul className="mt-6 space-y-5">
                {[
                  "Advanced FUE and DHI systems for hair restoration",
                  "PRP and growth-factor protocols for regeneration",
                  "Medical-grade laser and resurfacing technology",
                  "Digital scalp and skin imaging for objective assessment",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ivory/70 sm:text-base">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-ivory/55 sm:text-base">
                Our investment in technology is always in service of one thing:
                safer procedures, faster recovery, and results that last.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-surface shadow-soft">
                <Image
                  src="/gallery/technology.png"
                  alt="Regenerative and aesthetic technology at Dermolyxa"
                  width={1000}
                  height={1250}
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="aspect-[4/5] h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="The Clinic"
            title="Designed for calm and privacy"
            description="A space engineered to put you at ease — from the moment you arrive to the moment you leave."
          />
          <div className="mt-12 columns-2 gap-5 md:columns-3 [&>*]:mb-5">
            {gallery.map((image) => (
              <Reveal key={image.src}>
                <div className="break-inside-avoid overflow-hidden rounded-2xl border border-gold/15 bg-surface">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1000}
                    height={1250}
                    loading="lazy"
                    sizes="(max-width: 768px) 45vw, 30vw"
                    className={`w-full object-cover transition-transform duration-700 hover:scale-105 ${image.aspect}`}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 pt-6">
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-gold/25 bg-surface/60 px-8 py-14 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gold-radial opacity-70"
            />
            <div className="relative">
              <h2 className="font-serif text-3xl font-light text-ivory sm:text-4xl">
                Come and see for yourself
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ivory/60">
                Book a complimentary consultation and meet the team behind
                Dermolyxa.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button href="/contact" size="lg" className="w-full sm:w-auto">
                  Book a Visit
                </Button>
                <Button
                  href="/blog"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Read Our Journal
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}