"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { resultCases } from "@/data/results";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function ResultsSection() {
  const [index, setIndex] = useState(0);
  const active = resultCases[index];

  return (
    <section
      id="results"
      className="relative scroll-mt-24 border-y border-gold/10 bg-[#070707] py-20 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gold-radial opacity-50"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Our Results"
          title="Real people. Real transformation."
          description="Drag the handle to reveal each before and after. Every case below reflects our regenerative-first approach."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <BeforeAfterSlider
                before={active.before}
                after={active.after}
                alt={`${active.title} before and after`}
                className="aspect-[4/3]"
              />

              <div className="mt-5 flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
                <div>
                  <h3 className="font-serif text-xl text-ivory">
                    {active.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-luxe text-gold">
                    {active.treatment} &middot; {active.sessions}
                  </p>
                </div>
                <span className="text-xs text-ivory/50">
                  Results in {active.timeframe}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2.5" role="tablist" aria-label="Result cases">
            {resultCases.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Case ${i + 1}: ${item.title}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  i === index
                    ? "w-7 bg-gold"
                    : "w-2.5 bg-white/20 hover:bg-white/40",
                )}
              />
            ))}
          </div>

          <p className="mt-6 text-center text-xs italic text-ivory/40">
            Individual results may vary.
          </p>

          <div className="mt-8 flex justify-center">
            <Button href="/results" variant="secondary" size="lg">
              View All Results
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
