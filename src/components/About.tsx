import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";

const benefits = [
  {
    title: "Advanced regenerative science",
    description:
      "Evidence-led protocols using growth factors and medical-grade technology to treat causes, not just symptoms.",
  },
  {
    title: "Natural and lasting results",
    description:
      "Refinement over transformation — results that respect your features and stand the test of time.",
  },
  {
    title: "Personalised treatment plans",
    description:
      "Every plan is designed around your anatomy, goals, and lifestyle by a team of senior specialists.",
  },
];

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

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold/20 bg-surface shadow-soft">
              <Image
                src="/about-clinic.png"
                alt="Inside the Dermolyxa clinic"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent"
              />
            </div>

            <div className="glass-panel absolute -right-3 bottom-8 rounded-2xl px-5 py-4 shadow-gold sm:-right-6">
              <p className="font-serif text-3xl text-gold">4.8★</p>
              <p className="mt-0.5 text-[0.65rem] uppercase tracking-luxe text-ivory/60">
                400+ reviews
              </p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-none">
            <SectionHeading
              align="left"
              eyebrow="About Dermolyxa"
              title="Where science meets artistry"
              description="Dermolyxa is a specialist clinic devoted to regenerative and aesthetic medicine. We pair advanced clinical science with a refined eye for natural beauty, so every result looks effortlessly like you."
            />

            <ul className="mt-10 space-y-6">
              {benefits.map((benefit) => (
                <li key={benefit.title} className="flex gap-4">
                  <GoldCheck />
                  <div>
                    <h3 className="font-serif text-lg text-ivory sm:text-xl">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ivory/55">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Button href="/#doctors" size="lg" className="mt-10 w-full sm:w-auto">
              Meet Our Doctors
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
