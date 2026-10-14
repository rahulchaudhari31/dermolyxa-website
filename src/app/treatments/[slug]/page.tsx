import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import {
  getAllTreatmentSlugs,
  getTreatment,
  treatments,
} from "@/data/treatments";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllTreatmentSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const treatment = getTreatment(params.slug);
  if (!treatment) return { title: "Treatment not found" };

  return {
    title: treatment.title,
    description: treatment.tagline,
    openGraph: {
      title: `${treatment.title} | Dermolyxa`,
      description: treatment.tagline,
      images: [treatment.image],
    },
  };
}

function GoldCheck() {
  return (
    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5 12.5l4.5 4.5L19 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function TreatmentPage({ params }: PageProps) {
  const treatment = getTreatment(params.slug);

  if (!treatment) notFound();

  const others = treatments.filter((t) => t.slug !== treatment.slug).slice(0, 3);

  const facts = [
    { label: "Category", value: treatment.category },
    { label: "Session time", value: treatment.duration },
    { label: "Course", value: treatment.sessions },
  ];

  return (
    <article className="relative pb-24 pt-32 lg:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-gold-radial"
      />

      <Container>
        <nav aria-label="Breadcrumb" className="text-xs text-ivory/40">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-gold">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href="/#treatments"
                className="transition-colors hover:text-gold"
              >
                Treatments
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-gold">{treatment.title}</li>
          </ol>
        </nav>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">
              <span className="h-px w-6 bg-gold/60" aria-hidden />
              {treatment.category}
            </span>
            <h1 className="mt-5 text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {treatment.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/60">
              {treatment.tagline}
            </p>

            <dl className="mt-9 grid grid-cols-1 gap-4 border-t border-white/5 pt-8 sm:grid-cols-3">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[0.65rem] uppercase tracking-luxe text-gold/80">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 font-serif text-lg text-ivory">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/#contact" size="lg" className="w-full sm:w-auto">
                Book Free Consultation
              </Button>
              <Button
                href="/#treatments"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                All Treatments
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold/20 bg-surface shadow-soft">
            <Image
              src={treatment.image}
              alt={treatment.title}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent"
            />
          </div>
        </div>
      </Container>

      <Container className="mt-24">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Overview"
            title="What to expect"
            description={treatment.overview}
          />
        </Reveal>
      </Container>

      <Container className="mt-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="rounded-2xl border border-gold/15 bg-surface/60 p-8">
              <h2 className="font-serif text-2xl text-ivory">Who it&apos;s for</h2>
              <span className="mt-4 block h-px w-16 bg-gradient-to-r from-gold to-transparent" />
              <ul className="mt-6 space-y-4">
                {treatment.whoFor.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ivory/70">
                    <GoldCheck />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-gold/15 bg-surface/60 p-8">
              <h2 className="font-serif text-2xl text-ivory">
                The procedure
              </h2>
              <span className="mt-4 block h-px w-16 bg-gradient-to-r from-gold to-transparent" />
              <ol className="mt-6 space-y-6">
                {treatment.steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 font-serif text-sm text-gold">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg text-ivory">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ivory/55">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Container>

      <Container className="mt-24">
        <Reveal>
          <SectionHeading
            eyebrow="Recovery Timeline"
            title="Your recovery, step by step"
            description="Every journey is individual. Here is a typical timeline so you know exactly what to expect."
          />
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl">
          <ol className="relative space-y-10 border-l border-gold/20 pl-8">
            {treatment.recovery.map((phase, index) => (
              <Reveal as="li" key={phase.phase} delay={index * 0.08} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[2.6rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-gold bg-bg"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                <span className="text-[0.65rem] uppercase tracking-luxe text-gold">
                  {phase.phase}
                </span>
                <h3 className="mt-2 font-serif text-xl text-ivory">
                  {phase.timeframe}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/55">
                  {phase.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>

      <Container className="mt-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-gold/25 bg-surface/60 px-8 py-12 text-center sm:px-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gold-radial opacity-70"
            />
            <div className="relative">
              <span className="eyebrow justify-center">
                <span className="h-px w-6 bg-gold/60" aria-hidden />
                Ready when you are
              </span>
              <h2 className="mx-auto mt-4 max-w-2xl text-balance font-serif text-3xl font-light text-ivory sm:text-4xl">
                Begin your {treatment.title} journey
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ivory/60">
                Book a free consultation and receive a personalised assessment
                from our specialists. No obligation, entirely private.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button href="/#contact" size="lg" className="w-full sm:w-auto">
                  Book Free Consultation
                </Button>
                <Button
                  href="/#contact"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Send Photos for Free Assessment
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>

      <Container className="mt-24">
        <h2 className="text-center font-serif text-2xl text-ivory sm:text-3xl">
          Explore more treatments
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {others.map((other) => (
            <Link
              key={other.slug}
              href={`/treatments/${other.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-surface/60 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={other.image}
                  alt={other.title}
                  fill
                  sizes="(max-width: 640px) 90vw, 30vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                />
                <h3 className="absolute bottom-4 left-4 right-4 font-serif text-lg text-ivory group-hover:text-gold">
                  {other.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </article>
  );
}
