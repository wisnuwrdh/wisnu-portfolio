"use client";

import { Reveal } from "@/components/motion/reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12 max-w-2xl sm:mb-16">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.07}>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.14}>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}