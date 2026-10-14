"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

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

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 lg:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gold-radial"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[32rem] w-[32rem] rounded-full bg-gold/5 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-gold/5 blur-[120px]"
      />

      <Container className="relative">
        <div className="grid min-h-svh items-center gap-14 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div className="order-1 text-center lg:order-none lg:text-left">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="eyebrow justify-center lg:justify-start"
            >
              <span className="h-px w-6 bg-gold/60" aria-hidden />
              Skin &bull; Hair &bull; Aesthetic
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mt-6 text-balance font-serif text-[2.6rem] font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]"
            >
              Restore Your Hair.
              <span className="block gold-text">Reclaim Your Confidence.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-ivory/60 sm:text-lg lg:mx-0"
            >
              Dermolyxa pairs advanced regenerative medicine with refined
              aesthetic artistry to deliver natural, lasting hair and skin
              restoration &mdash; guided by world-class specialists.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
            >
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
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="mt-9 flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-gold/20 bg-surface/60 px-4 py-2 backdrop-blur">
                <Stars />
                <span className="text-xs font-medium tracking-wide text-ivory/70 sm:text-sm">
                  <span className="text-gold">4.8</span> from 400+ reviews
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="relative order-2 mx-auto w-full max-w-md lg:order-none lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold/20 bg-surface shadow-soft">
              <Image
                src="/hero-clinic.png"
                alt="Hair transplant clinic"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent"
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass-panel absolute -left-3 top-6 rounded-2xl px-4 py-3 shadow-gold sm:-left-6 sm:px-5 sm:py-4"
            >
              <p className="font-serif text-2xl text-gold sm:text-3xl">98%</p>
              <p className="mt-0.5 text-[0.6rem] uppercase tracking-luxe text-ivory/60 sm:text-[0.65rem]">
                Success Rate
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
              className="glass-panel absolute -right-3 bottom-8 rounded-2xl px-4 py-3 shadow-gold sm:-right-6 sm:px-5 sm:py-4"
            >
              <p className="font-serif text-2xl text-gold sm:text-3xl">10+</p>
              <p className="mt-0.5 text-[0.6rem] uppercase tracking-luxe text-ivory/60 sm:text-[0.65rem]">
                Years Experience
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
