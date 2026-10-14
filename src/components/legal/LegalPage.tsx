import { Container } from "@/components/ui/Container";

type LegalPageProps = {
  title: string;
  updated: string;
  children: React.ReactNode;
};

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <section className="relative pb-24 pt-32 lg:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-gold-radial"
      />
      <Container size="narrow">
        <span className="eyebrow">
          <span className="h-px w-6 bg-gold/60" aria-hidden />
          Legal
        </span>
        <h1 className="mt-5 text-balance font-serif text-4xl font-light tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-xs uppercase tracking-luxe text-ivory/40">
          Last updated: {updated}
        </p>
        <div className="prose-lux mt-10 text-sm leading-relaxed text-ivory/70">
          {children}
        </div>
      </Container>
    </section>
  );
}