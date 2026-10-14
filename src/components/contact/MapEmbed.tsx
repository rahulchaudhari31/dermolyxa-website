import { CONTACT } from "@/lib/site";
import { cn } from "@/lib/utils";

const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  CONTACT.address,
)}&output=embed`;

export function MapEmbed({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-gold/15 bg-surface/60",
        className,
      )}
    >
      <iframe
        title="Dermolyxa clinic location on Google Maps"
        src={MAPS_EMBED_URL}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[320px] w-full border-0 grayscale-[35%] contrast-[1.05]"
      />
    </div>
  );
}