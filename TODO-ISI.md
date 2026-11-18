# Data yang harus diisi

Semua nilai di bawah ada di dua tempat: fallback di `index.html` dan kamus di `js/i18n.js` (paket `en` lalu `id`). Isi keduanya, lalu hapus penanda `[ISI...]`. Kalau sebuah metrik tidak ada datanya, hapus blok `<dt>/<dd>`-nya sekalian (atau ganti labelnya), jangan biarkan `[ISI]` tampil di situs live.

## 1. Halaman utama — bukti di kartu proyek

| Item | Contoh isi | index.html | i18n.js (en / id) |
|---|---|---|---|
| Jumlah daftar tunggu Narehat | `1.240 orang` | baris 250 (`p1.proof`) | 45 / 255 |
| Jumlah pengikut PedeTanpaJerawat | `8,7 rb` | baris 284 (`p2.proof`) | 51 / 261 |

## 2. Halaman Narehat — metrik

| Metrik | Contoh isi | index.html | i18n.js (en / id) |
|---|---|---|---|
| Daftar tunggu | `1.240` | 558 | 100 / 310 |
| Pengguna aktif | `86 / minggu` | 562 | 102 / 312 |
| Wawancara riset | `12` | 566 | 104 / 314 |
| Temuan utama | `5 dari 12 menyebut…` (1 kalimat) | 570 | 106 / 316 |

## 3. Halaman PedeTanpaJerawat — metrik

| Metrik | Contoh isi | index.html | i18n.js (en / id) |
|---|---|---|---|
| Pengikut | `8,7 rb` | 712 | 133 / 343 |
| Retensi | `38%` | 716 | 135 / 345 |
| Disimpan | `2.100` | 720 | 137 / 347 |
| Balasan | `340` | 724 | 139 / 349 |
| Klik tautan | `610` | 728 | 141 / 351 |

Tayangan postingan teratas (`126.1K` / `126,1 rb`) sudah terisi.

## 4. Nomor WhatsApp

- Isi `whatsapp` di `js/config.js:9` dengan format internasional tanpa `+` dan tanpa spasi, contoh `6281234567890`.
- Ganti juga teks fallback di `index.html:456` (`WhatsApp: [ISI]`).
- Selama `whatsapp` kosong, tombol "Chat on WhatsApp" tetap tersembunyi; tombol email tetap jalan.

## 5. Opsional (belum wajib)

- Gambar `og:image` 1200×630 untuk preview saat link dibagikan; belum ada file maupun tag-nya.
- Kontras `--muted` `#76777C` di atas putih = 4.47:1, sedikit di bawah AA 4.5:1 (`css/main.css`).
- Nomor/angka di atas harus konsisten dengan yang muncul di screenshot aset (`assets/ptj-*.webp`).

Setelah diisi: jalankan `node --check js/i18n.js` dan buka tiap route (`#/ , #/work/narehat, #/work/pedetanpajerawat, #/notes, #/now`) dalam dua bahasa.
