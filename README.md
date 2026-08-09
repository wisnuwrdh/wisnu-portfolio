# Wisnu Wardhana — Portfolio

Portfolio pribadi Wisnu Wardhana — Content Marketing Specialist di niche skincare & kecantikan.

## Fitur

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui
- Animasi dengan Motion (Framer Motion): hero animation, reveal scroll, spotlight card, marquee
- Bilingual **EN / ID** (toggle di navbar, tersimpan di localStorage)
- Dark / light mode via `next-themes`
- Fully static, siap deploy di Vercel

## Menjalankan lokal

> Catatan Termux/Android: pakai webpack karena Turbopack tidak tersedia untuk platform Android.

```bash
npm install
npm run dev    # = next dev --webpack
npm run build  # = next build --webpack
```

## Struktur

- `app/` — layout & halaman utama
- `components/site/` — section halaman (Hero, Services, Projects, About, Contact, dll)
- `components/motion/` — komponen animasi reusable (Reveal, SpotlightCard, dll)
- `components/providers/` — ThemeProvider (next-themes) & LanguageProvider (i18n)
- `lib/i18n.ts` — semua teks EN/ID di satu file

## Konten

Konten & data portfolio dikelola di `lib/i18n.ts`.