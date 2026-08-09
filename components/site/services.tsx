"use client";

import { HeartPulse, LineChart, Megaphone, Video } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/site/section-header";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { Reveal } from "@/components/motion/reveal";

const icons = [Megaphone, Video, HeartPulse, LineChart] as const;

export function Services() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />

        <div className="grid gap-5 sm:grid-cols-2">
          {s.items.map((item, i) => {
            const Icon = icons[i] ?? Megaphone;
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <SpotlightCard className="h-full">
                  <div className="relative flex h-full flex-col justify-between p-7">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute right-6 top-5 font-heading text-6xl font-bold text-foreground/[0.05]"
                    >
                      {`0${i + 1}`}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        {item.tag}
                      </span>
                    </div>
                    <div className="mt-10">
                      <h3 className="font-heading text-xl font-semibold tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}