"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, type Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";

type TrustItem = {
  label: string;
  value: number;
  suffix?: string;
};

const items: TrustItem[] = [
  { label: "Patients Treated", value: 12000, suffix: "+" },
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Success Rate", value: 98, suffix: "%" },
  { label: "Expert Doctors", value: 15, suffix: "+" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {Math.round(display).toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export function TrustBar() {
  return (
    <section className="relative border-y border-gold/10 bg-surface/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gold-radial opacity-60"
      />
      <Container className="relative">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:grid-cols-4 md:py-14">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={i}
              className="text-center"
            >
              <dt className="font-serif text-4xl text-gold sm:text-5xl">
                <Counter value={item.value} suffix={item.suffix} />
              </dt>
              <dd className="mt-2 text-[0.65rem] uppercase tracking-luxe text-ivory/50 sm:text-xs">
                {item.label}
              </dd>
            </motion.div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
