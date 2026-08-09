"use client";

import { Reveal } from "@/components/motion/reveal";

type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeader({ index, eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12 max-w-2xl sm:mb-16">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-accent">{index}</span>
          <span className="text-sm font-medium text-muted-foreground">{eyebrow}</span>
          <span className="h-px flex-1 bg-border" />
        </div>
      </Reveal>
      <Reveal delay={0.07}>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.14}>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
