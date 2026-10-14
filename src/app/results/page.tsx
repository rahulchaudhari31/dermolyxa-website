import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ResultsGallery } from "@/components/results/ResultsGallery";

export const metadata: Metadata = {
  title: "Results",
  description:
    "Browse before and after results across hair transplant, PRP, skin, and aesthetic treatments at Dermolyxa.",
};

export default function ResultsPage() {
  return (
    <section className="relative pb-24 pt-32 lg:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-gold-radial"
      />

      <Container>
        <header className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-6 bg-gold/60" aria-hidden />
            Our Results
          </span>
          <h1 className="mt-5 text-balance font-serif text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Transformations that
            <span className="block gold-text">speak for themselves</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory/60">
            Explore a selection of real patient journeys across hair, skin, and
            aesthetic care. Drag any slider to compare before and after, and tap
            to enlarge.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/#contact" size="lg">
              Book Free Consultation
            </Button>
          </div>
        </header>

        <div className="mt-16">
          <ResultsGallery />
        </div>
      </Container>
    </section>
  );
}
