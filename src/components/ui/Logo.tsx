import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  href?: string;
  height?: number;
  priority?: boolean;
};

export function Logo({
  className,
  href = "/",
  height = 44,
  priority = false,
}: LogoProps) {
  const width = Math.round(height * 1.5);

  return (
    <Link
      href={href}
      aria-label="Dermolyxa home"
      className={cn(
        "inline-flex items-center transition-opacity hover:opacity-90",
        className,
      )}
    >
      <Image
        src={images.brand.logo}
        alt="Dermolyxa"
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-auto object-contain"
      />
    </Link>
  );
}
