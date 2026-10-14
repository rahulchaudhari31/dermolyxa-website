"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { treatments } from "@/data/treatments";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

function ArrowButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous treatments" : "Next treatments"}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300",
        disabled
          ? "border-white/10 text-ivory/25"
          : "border-gold/40 text-gold hover:border-gold hover:bg-gold/10 hover:text-gold-light",
      )}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d={direction === "prev" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export function TreatmentsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByCard = useCallback((direction: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? el.clientWidth * 0.8) + 20;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }, []);

  return (
    <section id="treatments" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Treatments & Solutions"
            title="Treatment, tailored to you"
            description="A curated suite of regenerative and aesthetic solutions, each delivered with medical precision and an artist's eye."
            className="max-w-2xl"
          />
          <div className="hidden shrink-0 gap-3 md:flex">
            <ArrowButton
              direction="prev"
              disabled={!canPrev}
              onClick={() => scrollByCard(-1)}
            />
            <ArrowButton
              direction="next"
              disabled={!canNext}
              onClick={() => scrollByCard(1)}
            />
          </div>
        </div>
      </Container>

      <div
        ref={trackRef}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scroll-padding-inline:1.25rem]"
      >
        <div aria-hidden className="w-1 flex-none sm:w-2 lg:w-[max(1.25rem,calc((100vw-72rem)/2))]" />
        {treatments.map((treatment) => (
          <Link
            key={treatment.slug}
            href={`/treatments/${treatment.slug}`}
            data-card
            className="group relative w-[82%] shrink-0 snap-start rounded-2xl border border-gold/15 bg-surface/60 p-3 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-surface hover:shadow-gold sm:w-[46%] lg:w-[31%] xl:w-[23.5%]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src={treatment.image}
                alt={treatment.title}
                fill
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 46vw, 24vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
              />
              <span className="absolute left-4 top-4 rounded-full border border-gold/30 bg-black/50 px-3 py-1 text-[0.6rem] uppercase tracking-luxe text-gold backdrop-blur">
                {treatment.category}
              </span>
            </div>

            <div className="px-2 pb-2 pt-5">
              <h3 className="font-serif text-xl text-ivory transition-colors group-hover:text-gold sm:text-2xl">
                {treatment.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/55">
                {treatment.tagline}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-luxe text-gold">
                Learn More
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
        <div aria-hidden className="w-1 flex-none sm:w-2 lg:w-[max(1.25rem,calc((100vw-72rem)/2))]" />
      </div>

      <Container className="mt-8 flex justify-center gap-3 md:hidden">
        <ArrowButton
          direction="prev"
          disabled={!canPrev}
          onClick={() => scrollByCard(-1)}
        />
        <ArrowButton
          direction="next"
          disabled={!canNext}
          onClick={() => scrollByCard(1)}
        />
      </Container>
    </section>
  );
}
