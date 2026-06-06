"use client";

import { useState } from "react";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center h-20">
        <a href="#" className="font-display text-xl font-bold text-on-surface">
          Wisnu Wardhana
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="bg-primary text-on-primary px-6 py-3 rounded-full font-semibold hover:bg-primary-container transition-all active:opacity-80 active:scale-95 hidden md:inline-block"
        >
          Diskusikan Proyek
        </a>

        <button
          className="md:hidden p-2 text-on-surface"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-surface border-b border-outline-variant/30 px-8 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-on-primary px-6 py-3 rounded-full font-semibold text-center hover:bg-primary-container transition-all"
            onClick={() => setOpen(false)}
          >
            Diskusikan Proyek
          </a>
        </div>
      )}
    </nav>
  );
}
