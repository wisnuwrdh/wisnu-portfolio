"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { TikTokIcon } from "@/components/site/icons";

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const },
    },
  };

  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden pb-16 pt-28">
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* Copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2 rounded-full bg-accent" />
              {t.hero.badge}
            </span>
          </motion.div>

          <h1 className="font-heading text-[clamp(2.6rem,8.5vw,5.5rem)] font-bold leading-[0.98] tracking-tight">
            <StaggerText text={t.hero.titleA} className="block text-foreground" delay={0.1} />
            <StaggerText text={t.hero.titleB} className="block text-foreground" delay={0.28} />
            <StaggerText
              text={t.hero.titleAccent}
              className="block text-accent"
              delay={0.46}
            />
          </h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 active:translate-y-0"
            >
              {t.hero.ctaPrimary}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`mailto:${t.contact.email}`}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              {t.hero.ctaSecondary}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex items-center gap-3">
            <span className="text-xs font-medium text-muted-foreground">Find me on</span>
            <a
              href="https://www.tiktok.com/@pedetanpajerawat"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/wisnuwrdh_"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground"
            >
              <InstagramGlyph className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Visual — mock TikTok video */}
        <motion.div variants={item} className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[300px]">
            <div aria-hidden="true" className="absolute -inset-8 rounded-[3rem] bg-accent/10 blur-2xl" />
            <motion.div
              initial={{ rotate: reduce ? 0 : -3 }}
              animate={{ rotate: reduce ? 0 : 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="absolute -left-10 top-10 z-10 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold shadow-lg"
            >
              {t.hero.tiktok.viewsChip}
            </motion.div>

            <div className="relative overflow-hidden rounded-[1.6rem] border border-border bg-card shadow-2xl shadow-black/10 dark:shadow-black/50">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-heading text-sm font-bold text-accent-foreground">
                    WP
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold">Wisnu Wardhana</p>
                    <p className="text-xs text-muted-foreground">
                      {t.hero.tiktok.handle} · {t.hero.tiktok.title}
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                  Video
                </span>
              </div>

              <div className="relative aspect-[9/13] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/10 to-transparent" />
                <div aria-hidden="true" className="absolute right-8 top-8 h-16 w-16 rounded-full border border-white/40" />
                <div aria-hidden="true" className="absolute right-16 top-16 h-8 w-8 rounded-full border border-white/30" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-4 pb-4 pt-16">
                  <p className="font-heading text-lg font-bold leading-snug text-white">
                    {t.hero.tiktok.caption}
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 border-t border-border px-4 py-3">
                <p className="text-[11px] font-medium text-muted-foreground">
                  {t.hero.tiktok.current} / {t.hero.tiktok.length}
                </p>
                <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[78%] rounded-full bg-accent" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StaggerText({
  text,
  className,
  delay,
}: {
  text: string;
  className?: string;
  delay: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.7, delay: delay + i * 0.07, ease: [0.19, 1, 0.22, 1] }}
          >
            {word}
            {i < words.length - 1 ? <span>&nbsp;</span> : null}
          </motion.span>
        </span>
      ))}
    </span>
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
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <rect width="18" height="18" x="3" y="3" rx="5" ry="5" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}