"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/site/section-header";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { Reveal } from "@/components/motion/reveal";

export function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  const layoutClasses = [
    "md:col-span-2",
    "md:col-span-1",
    "md:col-span-3",
  ];

  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

        <div className="grid gap-5 md:grid-cols-3">
          {p.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.08}
              className={layoutClasses[i] ?? "md:col-span-1"}
            >
              <SpotlightCard className="h-full">
                <article className="relative flex h-full flex-col overflow-hidden p-7 sm:p-9">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-4 -top-8 select-none font-heading text-[9rem] font-bold leading-none text-foreground/[0.04]"
                  >
                    {item.index}
                  </div>

                  <div
                    aria-hidden="true"
                    className="absolute right-8 top-8 h-28 w-28 rounded-3xl bg-gradient-to-br from-accent/40 to-transparent blur-2xl"
                  />

                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                    {item.platform}
                  </p>

                  <div className="mt-5 flex flex-1 flex-col">
                    <h3 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {item.links.length > 0 && (
                    <div className="mt-7 flex flex-wrap gap-3">
                      {item.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition-all hover:border-accent hover:text-accent"
                        >
                          {link.label}
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex items-center justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-accent/40 px-6 py-3 text-sm font-semibold text-accent transition-all hover:bg-accent/10"
            >
              {p.cta}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}