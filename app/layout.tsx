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
  title: "Wisnu Wardhana — Organic Content Marketing · Skincare & Beauty",
  description:
    "Content marketing specialist for the skincare & beauty niche. Organic growth on TikTok, Instagram and the web — built on storytelling and trust.",
  authors: [{ name: "Wisnu Wardhana" }],
  keywords: [
    "content marketing",
    "organik",
    "skincare",
    "beauty",
    "TikTok",
    "Instagram",
    "Wisnu Wardhana",
  ],
  openGraph: {
    title: "Wisnu Wardhana — Organic Content Marketing",
    description:
      "Organic-first marketing for skincare & beauty brands. Short-form video, storytelling and TikTok/Instagram strategy.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
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