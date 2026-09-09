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
- **HTML5**: Struktur semantik (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<footer>`) dan atribut aksesibilitas (`aria-label`, `tabindex`, `alt`).
- **CSS3 Modern**: 
  - CSS Reset ringan & `box-sizing: border-box`.
  - CSS Custom Properties / Design Tokens pada `:root` (`--brand`, `--space-*`, `--radius`, `--surface`, `--text`).
  - **Flexbox**: Tata letak navigasi responsif yang membungkus rapi (*wrap*) tanpa *horizontal scroll*.
  - **CSS Grid**: Tata letak papan Kanban adaptif (1 kolom pada mobile, 3 kolom pada desktop).
  - **Aksesibilitas Focus State**: Indikator fokus `:focus-visible` kontras tinggi serta *Skip to content link*.
- **Web Server**: Apache (via Laragon 5)
- **PHP Engine**: PHP 8.4
- **Version Control**: Git & GitHub

---

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