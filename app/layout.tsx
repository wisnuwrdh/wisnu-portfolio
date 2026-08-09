import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/components/providers/language-provider";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wisnu Wardhana — Konten Skincare Organik · Edukasi Jerawat",
  description:
    "Konten pendek skincare & kecantikan yang jujur untuk TikTok — edukasi jerawat, hook, edit dan hasil yang bisa ditunjukkan tanpa iklan berbayar.",
  authors: [{ name: "Wisnu Wardhana" }],
  keywords: [
    "content marketing",
    "organik",
    "skincare",
    "kecantikan",
    "TikTok",
    "Instagram",
    "edukasi jerawat",
    "Wisnu Wardhana",
  ],
  openGraph: {
    title: "Wisnu Wardhana — Konten Skincare Organik",
    description:
      "Konten pendek skincare & kecantikan untuk TikTok. Dibuat dan diperbaiki dari data — tanpa iklan berbayar.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${archivo.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <ThemeProvider>
          <LanguageProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-foreground"
            >
              Skip to content
            </a>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}