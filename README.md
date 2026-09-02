# Praktikum Pemrograman Web (OBE)

## Identitas Mata Kuliah
- **Mata Kuliah**: Praktikum Pemrograman Web
- **Semester**: 5
- **Nama Mahasiswa**: Muhammad Dzakir Dzakwan
- **NPM**: 2440304015

## Deskripsi Singkat Halaman
Portal Komunitas Pesisir adalah web page statis yang dirancang sebagai pusat informasi digital dan layanan UMKM di kawasan pesisir. Halaman ini menyajikan profil wilayah, program pemberdayaan ekonomi dan layanan usaha lokal, integrasi media visual sentra maritim, serta formulir interaktif untuk pengaduan dan kontak masyarakat.

## Teknologi yang Digunakan
- **HTML5** (Struktur Semantik & Aksesibilitas)
- **Web Server**: Apache (via Laragon 5)
- **PHP**: PHP 8.4
- **Version Control**: Git & GitHub

## Fitur yang Sudah Selesai
- [x] **Struktur HTML5 Semantik**: Penggunaan tag semantik modern (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`).
- [x] **Fitur Aksesibilitas Web**: Penerapan skip link (`#main-content`), atribut `aria-label`, atribut `alt` deskriptif pada gambar, serta label formulir yang terhubung dengan ID elemen.
- [x] **Profil Kawasan Pesisir**: Penyajian informasi integrasi ekonomi masyarakat kawasan pesisir.
- [x] **Integrasi Media Visual**: Penggunaan elemen `<figure>` dan `<figcaption>` untuk menampilkan aset gambar lokal (`images/imagsdes.jpg`).
- [x] **Informasi Layanan & UMKM**: Artikel digitalisasi nelayan tradisional dan pemberdayaan produk olahan pesisir.
- [x] **Formulir Kontak & Pengaduan**: Input formulir nama, email, pesan, dan tombol kirim dengan validasi HTML `required`.
- [x] **Log Penggunaan AI**: Dokumentasi riwayat penggunaan AI dan verifikasi mandiri pada `AI_USAGE_LOG.md`.

## Cara Menjalankan Melalui Laragon 5
1. **Jalankan Service Laragon 5**:
   - Buka aplikasi **Laragon 5**.
   - Klik tombol **Start All** untuk mengaktifkan web server Apache.
2. **Lokasi Folder Proyek**:
   - Pastikan direktori proyek tersimpan di dalam folder `www` Laragon:
     `C:\laragon\www\pemweb-obe`
3. **Akses via Web Browser**:
   - Buka web browser (Chrome, Firefox, Edge, dll.).
   - Akses salah satu alamat URL berikut:
     - **URL Port/Folder**: [http://localhost/pemweb-obe/](http://localhost/pemweb-obe/)
     - **URL VirtualHost Laragon**: [http://pemweb-obe.test](http://pemweb-obe.test)

## Catatan
- File entri utama proyek adalah [index.html](file:///c:/laragon/www/pemweb-obe/index.html).
- Pastikan file gambar `imagsdes.jpg` berada di dalam direktori `images/` agar media pada halaman profil dapat dirender dengan baik.