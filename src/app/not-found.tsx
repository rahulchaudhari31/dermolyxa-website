import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-gold-radial"
      />
      <Container className="py-16 text-center">
        <span className="eyebrow justify-center">
          <span className="h-px w-6 bg-gold/60" aria-hidden />
          Error 404
        </span>
        <h1 className="mt-6 font-serif text-7xl font-light tracking-tight sm:text-8xl">
          <span className="gold-text">404</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ivory/60">
          This page appears to have been refined out of existence. Let&apos;s get
          you back to something beautiful.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/" size="lg" className="w-full sm:w-auto">
            Back to Home
          </Button>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Book Consultation
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-ivory/50">
          <Link href="/treatments" className="underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold">
            Treatments
          </Link>
          <Link href="/results" className="underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold">
            Results
          </Link>
          <Link href="/blog" className="underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold">
            Journal
          </Link>
        </div>
      </Container>
    </section>
  );
}