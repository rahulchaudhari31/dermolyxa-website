"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: string;
};

export function Faq({ items }: { items: FaqItem[] }) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-12 max-w-3xl divide-y divide-white/5 overflow-hidden rounded-2xl border border-gold/15 bg-surface/50">
      {items.map((item, index) => {
        const isOpen = active === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setActive(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-white/[0.02] sm:px-8"
            >
              <span
                className={cn(
                  "font-serif text-lg transition-colors sm:text-xl",
                  isOpen ? "text-gold" : "text-ivory/85",
                )}
              >
                {item.question}
              </span>
              <span
                aria-hidden
                className={cn(
                  "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                  isOpen
                    ? "rotate-45 border-gold bg-gold/10 text-gold"
                    : "border-white/15 text-ivory/60",
                )}
              >
                <span className="absolute h-px w-3 bg-current" />
                <span className="absolute h-3 w-px bg-current" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm leading-relaxed text-ivory/55 sm:px-8">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
