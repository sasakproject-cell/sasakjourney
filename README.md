# Sasak Journey

Website travel agent Lombok: Sasak Journey. Dibangun dengan Next.js 16, MUI, dan next-intl (bilingual Indonesia/Inggris).

Fitur utama:

- Pencarian paket wisata (kategori, destinasi, durasi)
- Halaman destinasi, detail destinasi, transportasi, dan kontak
- Menu **Konsultasi** di beranda: form konsultasi yang mengirim pesan otomatis ke WhatsApp +62 895-6340-60842
- Tombol WhatsApp mengambang di semua halaman

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3002

## Deploy

Project ini di-deploy di Vercel dari repository ini. Setiap push ke branch `main` akan men-deploy ulang secara otomatis.

## Catatan aset

Repository ini tidak menyimpan file gambar biner. Foto hero beranda diambil dari deployment Sasak Journey yang lama (`sasak-journey.vercel.app`), dan logo ditampilkan sebagai teks. Jika deployment lama dihapus, ganti `HERO_IMAGE_URL` di `src/components/HeroSection.tsx` dengan URL foto lain.
