"use client";

import type { CSSProperties } from "react";
import { useLanguage } from "@/components/providers/language-provider";

export function Marquee() {
  const { t } = useLanguage();
  const items = t.marquee;

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-border/60 py-5"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div
        className="flex w-max animate-marquee gap-10"
        style={
          {
            "--marquee-gap": "2.5rem",
            "--marquee-duration": "38s",
          } as CSSProperties
        }
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-10 whitespace-nowrap font-heading text-lg font-semibold uppercase tracking-wide text-muted-foreground"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
          </span>
        ))}
      </div>
    </div>
  );
}