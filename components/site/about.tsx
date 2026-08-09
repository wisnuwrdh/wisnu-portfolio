"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/site/section-header";
import { Reveal } from "@/components/motion/reveal";

export function About() {
  const { t } = useLanguage();
  const a = t.about;
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader index="03" eyebrow={a.eyebrow} title={a.title} />

        <div className="grid items-start gap-12 md:grid-cols-[0.85fr_1.15fr]">
          {/* Visual */}
          <div className="md:sticky md:top-28">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8">
                <div
                  aria-hidden="true"
                  className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-500/15 blur-3xl"
                />
                <motion.div
                  aria-hidden="true"
                  initial={{ rotate: reduce ? 0 : 18 }}
                  animate={{ rotate: reduce ? 0 : 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-accent to-blue-600 font-heading text-5xl font-bold text-accent-foreground shadow-xl shadow-accent/30"
                >
                  WW
                </motion.div>
                <div className="relative mt-8 text-center">
                  <p className="font-heading text-xl font-semibold">
                    Wisnu Wardhana
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t.hero.badge}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Text */}
          <div>
            {a.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="mb-5 text-lg leading-relaxed text-muted-foreground first:mt-0">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.16}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {a.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
                {a.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </dt>
                    <dd className="mt-1 font-heading text-sm font-semibold">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}