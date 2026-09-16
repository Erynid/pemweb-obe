# Praktikum Pemrograman Web (OBE)

## Identitas Mahasiswa
- **Mata Kuliah**: Praktikum Pemrograman Web
- **Semester**: 5
- **Nama Mahasiswa**: Muhammad Dzakir Dzakwan
- **NPM**: 2440304015
- **Program Studi**: S1 Teknik Komputer
- **Institusi**: Universitas Borneo Tarakan

---

## Deskripsi Singkat Halaman
**TaskTrack** adalah halaman web statis manajemen tugas dan pelacak tenggat waktu (*deadline*) kuliah berbasis visualisasi papan Kanban. Halaman ini dirancang menggunakan HTML5 semantik, CSS modern (Flexbox & CSS Grid), CSS Custom Properties, serta mengedepankan prinsip aksesibilitas web (WCAG) dan navigasi ramah keyboard.

---

## Teknologi yang Digunakan
- **HTML5** (Struktur Semantik & Aksesibilitas)
- **CSS3** (Custom Properties, Flexbox, CSS Grid, Responsive Design)
- **Web Server**: Apache (via Laragon 5)
- **PHP Engine**: PHP 8.4
- **Version Control**: Git & GitHub

## Fitur yang Sudah Selesai
- [x] **Struktur HTML5 Semantik**: Penggunaan tag semantik modern (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`).
- [x] **Fitur Aksesibilitas Web**: Penerapan skip link (`#main-content`), atribut `aria-label`, atribut `alt` deskriptif pada gambar, label formulir terhubung dengan ID, serta focus state (`:focus-visible`) yang jelas dan tidak hilang.
- [x] **Desain Responsif & Tata Letak CSS Modern**:
  - CSS Reset ringan dan `box-sizing: border-box`.
  - CSS Custom Properties (`:root`) untuk manajemen palet warna, spacing scale, dan border radius.
  - Layout navigasi dinamis berbasis **Flexbox**.
  - Layout kartu layanan & UMKM berbasis **CSS Grid**.
  - Media queries berbasis kebutuhan konten (*content-driven breakpoints*).
- [x] **Profil Kawasan Pesisir**: Penyajian informasi integrasi ekonomi masyarakat kawasan pesisir.
- [x] **Integrasi Media Visual**: Penggunaan elemen `<figure>` dan `<figcaption>` untuk menampilkan aset gambar lokal (`images/imagsdes.jpg`).
- [x] **Informasi Layanan & UMKM**: Artikel digitalisasi nelayan tradisional dan pemberdayaan produk olahan pesisir dalam format card grid.
- [x] **Formulir Kontak & Pengaduan**: Input formulir nama, email, pesan, dan tombol kirim dengan validasi HTML `required` dan penataan form grid yang responsif.
- [x] **Log Penggunaan AI**: Dokumentasi riwayat penggunaan AI dan verifikasi mandiri pada `AI_USAGE_LOG.md`.

## Fitur yang Sudah Selesai
- [x] **Struktur HTML5 Semantik**: Penggunaan elemen semantik terstruktur dan valid.
- [x] **CSS Reset & Box Sizing Universal**: Menghilangkan margin/padding bawaan browser dan menetapkan `box-sizing: border-box`.
- [x] **Design Tokens (:root)**: Variabel CSS modular untuk warna, jarak (*spacing*), sudut (*radius*), dan permukaan latar.
- [x] **Navigasi Responsif Flexbox**: Navigasi utama yang otomatis membungkus (*wrap*) pada layar sempit tanpa memicu *overflow horizontal*.
- [x] **Papan Kanban CSS Grid**: Tampilan kartu tugas 1 kolom pada layar *mobile* dan bertransisi menjadi 3 kolom sejajar pada layar lebar (`@media (min-width: 48rem)`).
- [x] **Aksesibilitas Keyboard & Focus States**:
  - *Skip Link* (`#main-content`) tersembunyi yang muncul saat ditekan tombol `Tab`.
  - Indikator ring fokus jelas (`:focus-visible`) dengan outline 3px pada link, tombol, input formulir, dan kartu tugas (`tabindex="0"`).
- [x] **Formulir Manajemen Tugas**: Input data judul tugas, mata kuliah, dan *datetime-local* deadline dengan validasi HTML.
- [x] **Pengaturan Notifikasi Web Push**: Bagian informasi perizinan Web Push API lengkap dengan ilustrasi dan tombol aksi.
- [x] **Log Penggunaan AI**: Dokumentasi riwayat penggunaan AI dan verifikasi mandiri pada [AI_USAGE_LOG.md](file:///c:/laragon/www/pemweb-obe/AI_USAGE_LOG.md).

---

## Struktur Direktori Proyek
```text
pemweb-obe/
│
├── images/
│   ├── ilustrasi-notif.png   # Aset gambar ilustrasi notifikasi browser
│   └── imagsdes.jpg          # Aset media pendukung
│
├── AI_USAGE_LOG.md           # Dokumentasi riwayat penggunaan AI
├── README.md                 # Dokumentasi utama proyek
├── index.html                # Dokumen HTML utama (TaskTrack)
└── styles.css                # Lembar gaya CSS responsif & token desain
```

---

## Cara Menjalankan Melalui Laragon
1. **Jalankan Service Laragon**:
   - Buka aplikasi **Laragon 5**.
   - Klik tombol **Start All** untuk mengaktifkan Apache server.
2. **Lokasi Folder Proyek**:
   - Pastikan direktori proyek tersimpan di dalam folder `www` Laragon:
     `C:\laragon\www\pemweb-obe`
3. **Akses via Web Browser**:
   - Buka browser (Chrome, Firefox, Edge, dll.).
   - Akses salah satu URL berikut:
     - **URL Direktori Lokal**: [http://localhost/pemweb-obe/](http://localhost/pemweb-obe/)
     - **URL VirtualHost Laragon**: [http://pemweb-obe.test](http://pemweb-obe.test)

---

## Catatan
- File entri utama proyek adalah [index.html](file:///c:/laragon/www/pemweb-obe/index.html) yang terhubung langsung dengan [styles.css](file:///c:/laragon/www/pemweb-obe/styles.css).
- Pastikan folder `images/` berisi file `ilustrasi-notif.png` agar elemen visual prompt izin notifikasi ter-render sempurna.