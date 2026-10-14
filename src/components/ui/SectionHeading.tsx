import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="eyebrow">
          <span className="h-px w-6 bg-gold/60" aria-hidden />
          {eyebrow}
        </span>
      ) : null}

      <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight tracking-tight text-ivory sm:text-4xl md:text-5xl">
        {title}
      </h2>

      <span
        className={cn(
          "mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent",
          !centered && "bg-gradient-to-r from-gold to-transparent",
        )}
        aria-hidden
      />

      {description ? (
        <p
          className={cn(
            "mt-6 max-w-2xl text-base leading-relaxed text-ivory/60",
            centered && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
