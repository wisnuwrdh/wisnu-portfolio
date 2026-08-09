"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { TikTokIcon } from "@/components/site/icons";

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 24, filter: reduce ? "blur(0px)" : "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
    },
  };

  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden pb-24 pt-28">
      {/* background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black_60%,transparent_100%)]"
      />
      <div aria-hidden="true" className="absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 animate-blob rounded-full bg-accent/15 blur-[120px]" />
      <div aria-hidden="true" className="absolute right-[-120px] top-1/4 h-72 w-72 animate-blob rounded-full bg-blue-500/10 blur-[100px]" />
      <div aria-hidden="true" className="absolute bottom-0 left-[-80px] h-64 w-64 animate-blob rounded-full bg-fuchsia-500/[0.07] blur-[100px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl px-5"
      >
        <motion.div variants={item} className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t.hero.badge}
          </span>
        </motion.div>

        <motion.p
          variants={item}
          className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground"
        >
          {t.hero.role} · {t.hero.niche}
        </motion.p>

        <h1 className="font-heading text-[clamp(2.75rem,9vw,6.5rem)] font-bold leading-[0.95] tracking-tight">
          <StaggerText
            text={t.hero.titleA}
            className="block text-foreground"
            delay={0.1}
          />
          <StaggerText
            text={t.hero.titleAccent}
            className="block text-transparent"
            accentClassName="text-transparent bg-clip-text bg-[linear-gradient(100deg,var(--accent),#60a5fa)]"
            delay={0.28}
          />
          <StaggerText
            text={t.hero.titleB}
            className="block text-foreground"
            delay={0.46}
          />
        </h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 active:translate-y-0"
          >
            {t.hero.ctaPrimary}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={`mailto:${t.contact.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-card"
          >
            <Sparkles className="h-4 w-4 text-accent" />
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-12 flex items-center gap-3">
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

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-[10px] uppercase tracking-[0.3em]">{t.hero.scroll}</span>
          <span className="block h-10 w-px animate-pulse-slow bg-gradient-to-b from-accent to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

function StaggerText({
  text,
  className,
  accentClassName,
  delay,
}: {
  text: string;
  className?: string;
  accentClassName?: string;
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
            className={`inline-block ${accentClassName ?? ""}`}
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