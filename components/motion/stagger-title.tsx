"use client";

import { motion, useReducedMotion } from "framer-motion";

type StaggerTitleProps = {
  text: string;
  className?: string;
  accentClassName?: string;
  accentWords?: string[];
};

export function StaggerTitle({
  text,
  className,
  accentClassName = "text-accent",
  accentWords = [],
}: StaggerTitleProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => {
        const isAccent = accentWords.includes(word);
        return (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
            <motion.span
              className={`inline-block will-change-transform ${isAccent ? accentClassName : ""}`}
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 0.65,
                delay: 0.08 + i * 0.06,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 ? <span>&nbsp;</span> : null}
          </span>
        );
      })}
    </span>
  );
}