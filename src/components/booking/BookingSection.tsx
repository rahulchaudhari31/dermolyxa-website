import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookingForm } from "@/components/booking/BookingForm";
import { cn } from "@/lib/utils";

type BookingSectionProps = {
  id?: string;
  className?: string;
};

export function BookingSection({ id = "booking", className }: BookingSectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 lg:py-28", className)}>
      <Container>
        <SectionHeading
          eyebrow="Booking"
          title="Book your free consultation"
          description="Tell us about your goals and we'll arrange a private, no-obligation assessment with a senior specialist."
        />

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-2xl border border-gold/20 bg-surface/60 p-6 backdrop-blur sm:p-10">
            <BookingForm />
          </div>
        </div>
      </Container>
    </section>
  );
}