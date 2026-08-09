"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/site/section-header";

export function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  const layoutClasses = ["md:col-span-2", "md:col-span-1"];

  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader index="02" eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

        <div className="grid gap-5 md:grid-cols-3">
          {p.items.map((item, i) => (
            <article
              key={item.title}
              className={`flex h-full flex-col rounded-3xl border border-border bg-card p-7 sm:p-8 ${
                layoutClasses[i] ?? "md:col-span-1"
              }`}
            >
              <p className="text-xs font-medium text-accent">{item.platform}</p>

              <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                {item.description}
              </p>

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
                <div className="mt-auto pt-7">
                  {item.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-foreground"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <a
          href="#contact"
          className="group mt-12 inline-flex items-center gap-2 text-lg font-semibold text-foreground transition-colors hover:text-accent"
        >
          {p.cta}
          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}