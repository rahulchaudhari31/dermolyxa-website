"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  RESULT_CATEGORIES,
  resultCases,
  type ResultCategory,
} from "@/data/results";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { cn } from "@/lib/utils";

const GRID_ASPECT = "aspect-[4/3]";
const LIGHTBOX_ASPECT = "aspect-[4/3] md:aspect-[16/10]";

export function ResultsGallery() {
  const [filter, setFilter] = useState<ResultCategory>("All");
  const [activeId, setActiveId] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? resultCases
        : resultCases.filter((item) => item.category === filter),
    [filter],
  );

  const activeIndex = filtered.findIndex((item) => item.id === activeId);
  const active = activeIndex >= 0 ? filtered[activeIndex] : null;

  const go = useCallback(
    (direction: number) => {
      if (activeIndex < 0) return;
      const next =
        (activeIndex + direction + filtered.length) % filtered.length;
      setActiveId(filtered[next].id);
    },
    [activeIndex, filtered],
  );

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, go]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3" role="tablist" aria-label="Filter results by category">
        {RESULT_CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={filter === category}
            onClick={() => setFilter(category)}
            className={cn(
              "rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-luxe transition-all duration-300",
              filter === category
                ? "border-gold bg-gold/10 text-gold"
                : "border-white/10 text-ivory/60 hover:border-gold/40 hover:text-gold",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group rounded-2xl border border-gold/15 bg-surface/60 p-3 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold"
          >
            <div className="relative">
              <BeforeAfterSlider
                before={item.before}
                after={item.after}
                alt={`${item.title} before and after`}
                className={GRID_ASPECT}
              />
              <button
                type="button"
                onClick={() => setActiveId(item.id)}
                onPointerDown={(e) => e.stopPropagation()}
                aria-label={`Enlarge ${item.title}`}
                className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-bg/70 text-gold backdrop-blur transition-colors hover:bg-gold/15"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M4 9V4h5M20 15v5h-5M20 9V4h-5M4 15v5h5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-start justify-between gap-3 px-2 pb-1 pt-4">
              <div>
                <h3 className="font-serif text-lg text-ivory">{item.title}</h3>
                <p className="mt-1 text-[0.65rem] uppercase tracking-luxe text-gold/80">
                  {item.treatment}
                </p>
              </div>
              <span className="shrink-0 text-[0.65rem] text-ivory/40">
                {item.timeframe}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-xs italic text-ivory/40">
        Individual results may vary. Images are illustrative placeholders.
      </p>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} before and after`}
          >
            <div
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              onClick={() => setActiveId(null)}
              aria-hidden
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-3xl rounded-2xl border border-gold/25 bg-surface p-4 shadow-soft sm:p-6"
            >
              <button
                type="button"
                onClick={() => setActiveId(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-bg/70 text-gold transition-colors hover:bg-gold/15"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <BeforeAfterSlider
                before={active.before}
                after={active.after}
                alt={`${active.title} before and after`}
                className={LIGHTBOX_ASPECT}
              />

              <div className="mt-5 flex flex-col gap-4 px-1 pb-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-serif text-xl text-ivory">
                    {active.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-luxe text-gold">
                    {active.category} &middot; {active.treatment}
                  </p>
                  <p className="mt-1 text-xs text-ivory/50">
                    {active.sessions} &middot; results in {active.timeframe}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous case"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold/10"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next case"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold/10"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
