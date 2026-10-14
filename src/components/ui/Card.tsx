import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  interactive?: boolean;
};

export function Card({
  children,
  className,
  as: Tag = "div",
  interactive = true,
}: CardProps) {
  return (
    <Tag
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-gold/15 bg-surface/70 p-6 backdrop-blur-sm transition-all duration-500 sm:p-8",
        interactive &&
          "hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold hover:bg-surface",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative">{children}</div>
    </Tag>
  );
}
