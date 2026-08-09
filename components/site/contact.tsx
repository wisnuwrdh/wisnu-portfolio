"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/site/section-header";
import { TikTokIcon } from "@/components/site/icons";

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-20 text-center sm:px-12 sm:py-28">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-72 w-[560px] -translate-x-1/2 rounded-full bg-accent/15 blur-[110px]"
          />
          <div
            aria-hidden="true"
            className="absolute -left-20 bottom-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"
          />
          <div className="relative">
            <SectionHeader index="04" eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${c.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/35"
              >
                <Mail className="h-4 w-4" />
                {c.emailLabel}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
              {c.socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-border bg-background/50 px-5 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-accent/50"
                >
                  <span className="flex items-center gap-3">
                    {social.label === "TikTok" ? (
                      <TikTokIcon className="h-5 w-5 text-accent" />
                    ) : (
                      <InstagramGlyph className="h-5 w-5 text-accent" />
                    )}
                    <span>
                      <span className="block text-sm font-semibold">
                        {social.label}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {social.handle}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect width="18" height="18" x="3" y="3" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}