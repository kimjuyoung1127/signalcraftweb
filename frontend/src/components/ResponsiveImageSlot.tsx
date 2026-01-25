"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ResponsiveImageSlotProps {
  src?: string;
  alt: string;
  className?: string;
  aspectRatio?: string; // e.g., "aspect-[4/5]"
  priority?: boolean;
}

export function ResponsiveImageSlot({
  src,
  alt,
  className,
  aspectRatio = "aspect-[4/5]",
  priority = false,
}: ResponsiveImageSlotProps) {
  const [error, setError] = useState(false);
  const isValidSrc = src && !src.includes("[Img:") && !error;

  return (
    <div className={cn("relative overflow-hidden bg-muted rounded-2xl", aspectRatio, className)}>
      {isValidSrc ? (
        <Image
          src={src as string}
          alt={alt}
          fill
          property={priority ? "true" : undefined}
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 text-muted-foreground p-4 text-center">
            <span className="text-sm font-medium">{alt || "Image Placeholder"}</span>
        </div>
      )}
    </div>
  );
}
