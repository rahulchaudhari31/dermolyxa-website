"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { blurDataURL } from "@/data/images";
import { cn } from "@/lib/utils";

type ImageWithFallbackProps = Omit<
  ImageProps,
  "onError" | "placeholder" | "blurDataURL"
> & {
  /** Class applied to the fallback box (rounded corners, aspect, etc.). */
  fallbackClassName?: string;
};

/**
 * next/image wrapper that swaps to the branded fallback (dark → dark-gold
 * gradient with a faded "D") if the image fails to load. Use everywhere an
 * image is rendered so remote/broken sources never look broken.
 */
export function ImageWithFallback({
  className,
  fallbackClassName,
  alt,
  fill,
  ...props
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "overflow-hidden bg-gradient-to-br from-black via-[#161313] to-[#3a2f10]",
          fill ? "absolute inset-0" : undefined,
          fallbackClassName,
        )}
      >
        <div className="relative flex h-full w-full items-center justify-center">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.28),transparent_65%)]"
          />
          <span className="pointer-events-none select-none font-serif text-6xl text-gold/20">
            D
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      {...props}
      fill={fill}
      alt={alt}
      placeholder="blur"
      blurDataURL={blurDataURL}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
