import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    step: "Step 1",
    title: "Free Consultation",
    description:
      "Book a complimentary, no-obligation consultation. We assess your hair and skin, discuss your goals, and answer every question.",
    icon: (
      <path
        d="M8 10h8M8 14h5M21 12a9 9 0 11-3.2-6.9L21 4v4h-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    step: "Step 2",
    title: "Personalised Plan & Procedure",
    description:
      "Your specialist designs a bespoke treatment roadmap and performs your procedure with medical-grade precision and care.",
    icon: (
      <path
        d="M9 3h6l1 3h3v15H5V6h3l1-3zM9 11l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    step: "Step 3",
    title: "Recovery & Visible Growth",
    description:
      "Follow a clear aftercare plan with reviews at every stage as your natural results appear and strengthen over time.",
    icon: (
      <path
        d="M4 16c4 0 6-2 8-6 2 4 4 6 8 6M12 4v3M6.5 7.5L8 9M17.5 7.5L16 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="process" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Three simple steps to results"
          description="From first conversation to visible growth, a clear and considered journey designed around you."
        />

        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-11 hidden h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent md:block"
          />

          {steps.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <div className="group relative h-full rounded-2xl border border-gold/15 bg-surface/70 p-7 text-center transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold sm:p-8">
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-bg text-gold transition-colors group-hover:border-gold/60 group-hover:bg-gold/10">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
                    {item.icon}
                  </svg>
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gold-gradient font-serif text-sm text-bg">
                    {index + 1}
                  </span>
                </div>

                <span className="mt-6 block text-[0.65rem] uppercase tracking-luxe text-gold/80">
                  {item.step}
                </span>
                <h3 className="mt-2 font-serif text-2xl text-ivory">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/55">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
