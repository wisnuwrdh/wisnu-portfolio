# Kritik & daftar peningkatan portofolio

Ditinjau dari kode di repo ini dan hasil live `https://wisnuwrdh.my.id/` (18 Nov 2026).

## Penilaian singkat

Yang sudah kuat: positioning jelas (konten organik untuk skincare & SaaS), dua proyek sendiri dipakai sebagai bukti, copy ID/EN sudah terpisah rapi, tipografi dan layout bersih, tidak ada klaim palsu.

Yang menahan portofolio ini: **belum ada satu angka hasil pun** (semua `[ISI]`), **studi kasus tidak punya URL sendiri** sehingga tidak bisa diindeks/dibagikan, dan **tidak ada bukti pihak ketiga** (klien, testimoni, atau tautan ke karya asli). Untuk calon klien, tiga hal itu yang menentukan percaya atau tidak.

---

## P0 — kerjakan dulu (murah, dampak langsung)

- **I-01 Isi semua placeholder `[ISI]`.** 9 metrik + 2 proof + nomor WhatsApp. Tanpa angka, halaman studi kasus hanya bercerita. Daftar lengkap: `TODO-ISI.md`.
- **I-02 Tautkan karya aslinya.** Post 126,1K dan dua post lain belum bisa dibuka dari situs. Tambahkan link ke postingan Instagram di halaman PedeTanpaJerawat, dan link produk/demo Narehat di halaman Narehat. Bukti yang bisa diklik mengalahkan screenshot.
- **I-03 Samakan identitas sosial.** `js/config.js` memakai Instagram `@pedetanpajerawat`, JSON-LD di `index.html:41` memakai `instagram.com/wisnuwrdh_`. Pilih satu akun utama (atau masukkan keduanya dengan peran jelas: personal vs proyek).
- **I-04 Perbaiki meta yang tertinggal.** `index.html:21-23` masih memakai judul/deskripsi Twitter lama ("Content Marketing & Organic Growth", "Digital marketer…"). Samakan dengan title baru, dan tambahkan `og:image` 1200×630 (sekarang tidak ada, jadi link yang dibagikan tampil polos).
- **I-05 Hapus baris kontak duplikat dan hardcoded.** `index.html:456` ("WhatsApp: [ISI] · Email: … · Instagram: …") tidak ikut translate dan mengulang isi tombol. Cukup satu blok kontak yang mengambil data dari `config.js`.
- **I-06 Perbaiki `apple-touch-icon`.** File `assets/apple-touch-icon.png` tidak ada; yang dikirim malah HTML halaman. Tambahkan file 180×180 atau hapus tag-nya.

## P1 — SEO & keterbacaan AI (butuh restrukturisasi kecil)

- **I-07 Beri setiap studi kasus URL nyata.** Sekarang semua halaman ada di `/` dengan hash (`#/work/narehat`). Akibatnya: semua route berbagi satu `canonical`, satu meta description, dan Google tidak punya alamat untuk diindeks. Pecah jadi `/, /work/narehat/, /work/pedetanpajerawat/, /notes/, /now/` dengan HTML statis masing-masing (bisa tetap satu CSS/JS).
- **I-08 Buat `robots.txt`, `sitemap.xml`, dan `llms.txt` sungguhan.** Saat ini ketiganya membalas 200 berisi HTML halaman utama (soft 200). Isi minimal: sitemap berisi 5 URL, `llms.txt` berisi ringkasan siapa Anda dan tautan halaman penting.
- **I-09 Beri 404 yang benar.** Semua path asing (contoh `/zzz-nope`) membalas 200 HTML. Ini membuang crawl budget dan membingungkan pengunjung. Butuh fallback 404 di hosting.
- **I-10 Sediakan versi EN dan ID dengan URL terpisah.** Toggle bahasa sekarang hanya mengubah teks di browser; Google dan AI crawler hanya melihat versi Inggris. Kalau versi ID penting, buat `/id/` atau `?lang=id` dengan `hreflang` dua arah.
- **I-11 Tambah structured data per halaman.** Sekarang hanya `Person` di beranda. Tambahkan `ProfilePage`/`Service` untuk layanan, `Article` untuk notes, dan `CreativeWork` untuk dua studi kasus.
- **I-12 Ubah notes jadi artikel sungguhan.** Empat kartu di `#/notes` semuanya menaut ke `#/notes` (melingkar) dan isinya hanya satu kalimat. Satu artikel 600–900 kata per judul akan mendatangkan pencarian dan jadi contoh kerja Anda sendiri.

## P2 — konversi & kredibilitas (dampak besar, usaha sedang)

- **I-13 Ceritakan hasil, bukan aktivitas.** Tiap studi kasus perlu format: kondisi awal → yang Anda lakukan → hasil (angka) → keputusan berikutnya. Sekarang Narehat masih "in progress" dan PTJ berhenti di jumlah views.
- **I-14 Tambah satu bukti pihak ketiga.** Paling mudah: tangkapan layar komentar/DM audiens (dengan izin dan nama disensor), kutipan dari wawancara riset, atau testimoni singkat dari kolaborator. Tanpa ini, portofolio hanya berbicara tentang diri sendiri.
- **I-15 Jelaskan cara kerja dalam 3 langkah.** Sebelum formulir kontak: panggilan 30 menit → proposal lingkup → kerja. Mengurangi rasa "berapa lama dan bagaimana mulainya".
- **I-16 Beri sinyal harga atau batas minimum.** "No pricing on this page" jujur, tapi calon klien butuh filter. Cukup satu baris: kisaran mulai, atau "cocok untuk proyek 1–3 bulan".
- **I-17 Pasang analytics ringan.** Tidak ada analytics sama sekali, padahal Anda menjual pengukuran. Plausible/Umami/Cloudflare Web Analytics cukup; jangan lupa catat sumber traffic di laporan bulanan.
- **I-18 Perkuat CTA di akhir tiap studi kasus.** Saat ini akhir halaman hanya navigasi ke kasus lain. Tambahkan "Punya masalah serupa? Bahas 30 menit" yang langsung ke kontak.
- **I-19 Siapkan form kontak sederhana (opsional).** Email + WhatsApp sudah ada, tapi form menurunkan friksi untuk orang yang tidak ingin membuka aplikasi. Kalau ditambah, wajib ada proteksi spam dan pernyataan privasi singkat.

## P3 — teknis & aksesibilitas (cepat, jaga kualitas)

- **I-20 Naikkan kontras `--muted`.** `#76777C` di atas putih = 4,47:1, di bawah ambang AA 4,5:1 (`css/main.css:60`).
- **I-21 Optimalkan gambar studi kasus.** `narehat-dashboard.webp` 326 KB dan belum ada `srcset`; tambahkan ukuran 800w/1600w dan `sizes` supaya mobile tidak mengunduh versi penuh.
- **I-22 Perbaiki cache aset di domain utama.** Cloudflare mengirim `max-age=14400` untuk JS/CSS, jadi perubahan copy bisa terlihat campur sampai 4 jam (yang terjadi kemarin). Set `max-age=0, must-revalidate` lewat aturan hosting, bukan hanya query `?v=`.
- **I-23 Audit heading dan landmark.** Setiap halaman tersembunyi tetap punya `<h1>` di HTML; pastikan hanya halaman aktif yang diekspos (mis. render per URL di I-07), dan beri `aria-current` pada nav.
- **I-24 Tambah `og:image` + `twitter:image` dari potret/logo.** Sekali bikin, dipakai semua halaman.

---

## Urutan eksekusi yang saya sarankan

1. Minggu ini: I-01, I-02, I-03, I-04, I-05, I-06 (semua < 1 hari, langsung menaikkan kepercayaan).
2. Berikutnya: I-07, I-08, I-09, I-12 (fondasi SEO; tanpa ini artikel dan studi kasus tidak akan pernah ditemukan).
3. Setelah ada data: I-13, I-14, I-15, I-16, I-18.
4. Terakhir: I-10, I-11, I-17, I-19 dan seluruh P3.

Catatan: I-07 mengubah struktur file (bukan sekadar copy), jadi kerjakan terpisah dari perubahan teks supaya mudah di-review.
