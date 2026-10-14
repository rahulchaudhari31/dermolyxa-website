import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { images } from "@/data/images";

function Stars() {
  return (
    <span className="flex items-center gap-0.5 text-gold" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5l2.9 6.06 6.6.86-4.83 4.6 1.2 6.58L12 17.9 6.13 20.6l1.2-6.58L2.5 9.42l6.6-.86L12 2.5z" />
        </svg>
      ))}
    </span>
  );
}

const featured = {
  quote:
    "Dermolyxa gave me back something I had quietly given up on. The team was meticulous, honest, and the results look completely natural.",
  name: "Michael Reyes",
  detail: "FUE Hair Transplant",
  image: images.testimonials.featured,
};

const testimonials = [
  {
    quote:
      "From consultation to aftercare, every detail was considered. I felt genuinely cared for.",
    name: "Sarah Whitfield",
    detail: "Skin Rejuvenation",
    image: images.testimonials.patients[0],
  },
  {
    quote:
      "The PRP therapy exceeded my expectations. Subtle, natural, and exactly what I asked for.",
    name: "Daniel Okafor",
    detail: "PRP Therapy",
    image: images.testimonials.patients[1],
  },
  {
    quote:
      "A calm, private clinic with world-class specialists. I could not recommend them more.",
    name: "Priya Anand",
    detail: "Facial Aesthetics",
    image: images.testimonials.patients[2],
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by our patients"
          description="Real experiences from people who trusted Dermolyxa with their hair and skin."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="flex h-full flex-col">
              <div className="relative aspect-[16/11] overflow-hidden rounded-xl border border-gold/15">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent"
                />
              </div>
              <div className="mt-6">
                <Stars />
              </div>
              <p className="mt-5 font-serif text-xl font-light italic leading-snug text-ivory/90 sm:text-2xl">
                &ldquo;{featured.quote}&rdquo;
              </p>
              <div className="mt-auto pt-6">
                <p className="font-serif text-lg text-ivory">{featured.name}</p>
                <p className="mt-1 text-xs uppercase tracking-luxe text-gold/80">
                  {featured.detail}
                </p>
              </div>
            </Card>
          </Reveal>

          <div className="flex flex-col gap-6">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08}>
                <Card className="h-full">
                  <Stars />
                  <p className="mt-4 text-sm italic leading-relaxed text-ivory/70">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-gold/30">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-serif text-base text-ivory">
                        {item.name}
                      </p>
                      <p className="text-xs uppercase tracking-luxe text-gold/80">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
