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
- [x] **Pengolahan Data Inventaris (JavaScript ES Module)**:
  - Dataset array of objects dengan properti lengkap (`id`, `nama`, `kategori`, `jumlah`, `kondisi`, `lokasi`).
  - Pemfilteran data berdasarkan kondisi dan lokasi spesifik menggunakan method `filter`.
  - Pencarian item spesifik berdasarkan ID menggunakan method `find`.
  - Pengambilan daftar nama alat dengan `map` dan perhitungan akumulasi unit dengan `reduce`.
  - Perhitungan statistik ringkasan inventaris secara modular pada `js/utils.js`.
  - Pemanfaatan *object destructuring* dan *template literals* untuk menyusun string ringkasan data alat secara dinamis.
- [x] **Pencarian Real-Time Data Inventaris (Latihan Praktikum 1)**:
  - Input field pencarian `#search` terhubung dengan event listener `input` untuk respon seketika tanpa perlu reload.
  - Pemfilteran dinamis bersifat *case-insensitive* (mendukung huruf besar dan kecil) menggunakan method `filter` dan `includes`.
  - Komponen kartu inventaris dinamis (`renderItems`) dilengkapi badge kategori dan indikator status kondisi alat.
  - Penanganan *empty state* dengan pesan informatif dan ramah ketika hasil pencarian tidak ditemukan.
- [x] **Tombol Detail dengan Event Delegation (Latihan Praktikum 2)**:
  - Tombol aksi `Detail` pada setiap kartu inventaris dengan atribut dataset `data-detail="${item.id}"`.
  - Penerapan pola arsitektur **Event Delegation** pada kontainer induk `#inventaris-list` memanfaatkan `event.target.closest('[data-detail]')` demi efisiensi memori dan keandalan elemen dinamis.
  - Dialog modal semantik HTML5 `<dialog id="detail-modal">` dengan backdrop blur, penutupan via tombol dan klik backdrop, serta pencegahan scrolling latar.
  - Penyajian rincian atribut alat secara lengkap (ID Registrasi, Kategori, Stok Tersedia, Lokasi Sentra, dan Catatan Operasional).
- [x] **Simpan Preferensi Jumlah Item (Latihan Praktikum 3)**:
  - Dropdown interaktif `<select id="limit">` dengan opsi 5, 10, dan 20 item per halaman.
  - Penyimpanan preferensi pengguna secara persisten menggunakan **Web Storage API (`localStorage`)**.
  - Sinkronisasi otomatis saat reload halaman: preferensi yang tersimpan langsung dimuat kembali tanpa reset ke default.
  - Integrasi terpadu antara pembatasan jumlah item dan pencarian real-time.
- [x] **Formulir Proyek Nyata & Aksesibel (Latihan Praktikum A)**:
  - Implementasi formulir permohonan peminjaman alat sentra pesisir terpadu berbasis kebutuhan riil nelayan/warga.
  - Kelengkapan field standar: Nama/Judul, Email/Kontak, Kategori/Pilihan, Angka/Tanggal, Deskripsi/Catatan, dan Checkbox Persetujuan.
  - Aksesibilitas tingkat tinggi (WCAG 2.1): fieldset/legend, label eksplisit, aria-describedby, aria-required, aria-live status alert, autofokus error pertama, serta keyboard focus ring (:focus-visible).
- [x] **Membaca & Menganalisis Endpoint API (Pertemuan 7 — Latihan 1)**:
  - Penyediaan endpoint data JSON lokal `data/inventaris.json` melalui server web Apache Laragon.
  - Dokumentasi struktur HTTP (Method `GET`, URL, Status Code `200 OK`, `Content-Type: application/json`).
  - Pemetaan skema data response JSON dan identifikasi field yang dirender ke antarmuka kartu & dialog modal.
  - Prosedur inspeksi jaringan melalui browser Developer Tools (Tab Network & Response).

---

## Latihan Praktikum A: Formulir Proyek Nyata & Aksesibilitas Web

### 1. Tujuan Formulir
Formulir **Permohonan Peminjaman Alat Sentra Pesisir** dirancang sebagai antarmuka nyata (bukan form kosong/dummy) yang menghubungkan nelayan tradisional dan kelompok usaha pesisir dengan pengelola sentra maritim. 

Melalui formulir ini, masyarakat pesisir dapat:
1. Mengajukan peminjaman peralatan inventaris laut (alat tangkap, navigasi GPS, radio komunikasi, mesin perahu, coolbox, hingga life jacket).
2. Menentukan kuota unit, tanggal peminjaman, serta estimasi tanggal pengembalian secara terstruktur.
3. Mencatatkan identitas kontak, rencana wilayah tangkap, serta memberikan komitmen pemeliharaan aset inventaris sentra secara transparan.

---

### 2. Rincian Minimal Field Formulir

| No | Kategori Persyaratan | Nama Field pada Form | Elemen / Tipe Input | Atribut & Batasan Validasi | Fungsi & Tujuan |
|---|---|---|---|---|---|
| 1 | **Nama / Judul** | `form-nama` | `<input type="text">` | `required`, `aria-required="true"`, `autocomplete="name"` | Mengidentifikasi nama lengkap pemohon peminjaman alat. |
| 2 | **Nama / Judul** | `form-judul` | `<input type="text">` | `required`, `aria-required="true"` | Menjelaskan agenda kegiatan/operasi melaut (misal: "Operasi Penangkapan Ikan Musim Timur"). |
| 3 | **Email / Kontak** | `form-email` | `<input type="email">` | `required`, `aria-required="true"`, `autocomplete="email"` | Alamat surel aktif untuk pengiriman bukti tiket dan verifikasi. |
| 4 | **Email / Kontak** | `form-telepon` | `<input type="tel">` | `required`, `aria-required="true"`, `autocomplete="tel"`, `aria-describedby` | Nomor WhatsApp/telepon untuk koordinasi pengambilan unit di sentra. |
| 5 | **Kategori / Pilihan** | `form-kategori` | `<select>` | `required`, `aria-required="true"` | Memilih kelompok sarana (Alat Tangkap, Navigasi, Mesin, Penyimpanan, Keselamatan). |
| 6 | **Kategori / Pilihan** | `form-lokasi` | `<select>` | `required`, `aria-required="true"` | Memilih pos dermaga sentra terdekat (Dermaga Barat, Timur, Pos Pengawas, Bengkel). |
| 7 | **Angka / Tanggal** | `form-jumlah` | `<input type="number">` | `min="1"`, `max="10"`, `required`, `aria-describedby` | Membatasi jumlah unit pinjaman wajar per armada (maksimal 10 unit). |
| 8 | **Angka / Tanggal** | `form-tgl-pinjam` | `<input type="date">` | `required`, `min="[hari-ini]"` | Menentukan tanggal awal peminjaman (dinamis minimal hari ini). |
| 9 | **Angka / Tanggal** | `form-tgl-kembali` | `<input type="date">` | `required`, `min="[tgl-pinjam]"`, `aria-describedby` | Menentukan estimasi waktu pengembalian alat (maksimal 7 hari). |
| 10 | **Deskripsi / Catatan** | `form-deskripsi` | `<textarea>` | `rows="4"`, `required`, `aria-describedby` | Catatan estimasi wilayah melaut, jumlah ABK kapal, serta kebutuhan teknis khusus. |
| 11 | **Checkbox Persetujuan** | `form-persetujuan` | `<input type="checkbox">` | `required`, `aria-required="true"` | Pernyataan komitmen mematuhi SOP pemeliharaan alat dan jadwal pengembalian. |

---

### 3. Catatan Aksesibilitas (Web Content Accessibility Guidelines - WCAG)

Penerapan aksesibilitas formulir ini mengikuti prinsip WCAG 2.1 Level AA:

1. **Pengelompokan Logis dengan Semantik `<fieldset>` dan `<legend>`**:
   - Seluruh kontrol input dikelompokkan ke dalam 3 unit bidang semantik:
     - Fieldset 1: *Identitas & Kontak Pemohon*
     - Fieldset 2: *Rincian Peralatan & Jadwal Operasional*
     - Fieldset 3: *Catatan Keperluan & Pernyataan Persetujuan*
   - Memberikan konteks struktural lengkap bagi pengguna screen reader saat berpindah grup input.

2. **Asosiasi Eksplisit Label & Kontrol Input (`for` dan `id`)**:
   - Seluruh elemen `<label>` memiliki atribut `for` yang secara tepat merujuk ke atribut `id` pada field input terkait.
   - Mengklik label otomatis memfokuskan atau mencentang kontrol input, memperbesar area klik/sentuh secara signifikan (*touch-friendly*).

3. **Petunjuk Tambahan Terhubung via `aria-describedby`**:
   - Elemen teks panduan (misal: `#telepon-hint`, `#jumlah-hint`, `#tgl-hint`, `#deskripsi-hint`) dihubungkan langsung ke input melalui atribut `aria-describedby`.
   - Screen reader secara otomatis membacakan petunjuk ini sesaat setelah label utama diumumkan.

4. **Penanda Input Wajib Aksesibel**:
   - Setiap kolom wajib menyematkan atribut HTML `required` sekaligus `aria-required="true"`.
   - Indikator visual tanda bintang merah (`*`) dibungkus dengan `aria-hidden="true"` guna mencegah screen reader membaca kata "bintang" atau "asterisk" secara repetitif.

5. **Umpan Balik Live Status untuk Pembaca Layar (`aria-live="polite"`)**:
   - Komponen `#form-alert` dilengkapi atribut `role="status"` dan `aria-live="polite"`.
   - Saat formulir dikirim (baik terjadi kesalahan validasi maupun berhasil submit), pembaruan isi pesan langsung diumumkan secara lisan oleh teknologi asistif tanpa memuat ulang (*reload*) halaman.

6. **Penanganan Error Interaktif & Auto-Focus**:
   - Jika terdapat kolom yang belum terisi saat pengiriman, skrip mendeteksi elemen invalid pertama (`:invalid`), memindahkan fokus kursor langsung ke field tersebut (`firstInvalid.focus()`), serta menampilkan banner peringatan yang jelas.

7. **Indikator Fokus Keyboard Kontras Tinggi (`:focus-visible`)**:
   - Seluruh elemen input, tombol submit, dan tombol reset memiliki indikator ring fokus tegas (`outline: none` digantikan dengan `border-color: var(--color-primary)` dan `box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.25)`).
   - Rasio kontras indikator fokus memenuhi standar WCAG (rasio kontras lebih dari 3:1 terhadap warna latar belakang).

8. **Optimasi Kemudahan Pengisian (`autocomplete`)**:
   - Kolom nama (`autocomplete="name"`), email (`autocomplete="email"`), dan telepon (`autocomplete="tel"`) mendukung fitur pengisian otomatis browser untuk mempercepat aksesibilitas bagi pengguna dengan keterbatasan mobilitas motorik.

---

## Pertemuan 7 — Latihan 1: Membaca Endpoint API

### 1. Tujuan Praktikum
Memahami struktur, method HTTP, format URL, kode status, dan skema respons dari endpoint API/JSON sebelum menuliskan kode JavaScript asinkron (`fetch`), guna memastikan pemetaan field yang tepat pada komponen antarmuka yang akan dirender.

### 2. Catatan Analisis Endpoint (Sesuai Format Latihan)

```text
Method   : GET
URL      : http://localhost/pemweb-obe/data/inventaris.json
Status   : 200 OK
Data     : id, nama, kategori, jumlah, kondisi, lokasi
Dipakai  : nama + kategori + kondisi untuk card; id + jumlah + lokasi untuk modal detail
```

| Komponen Analisis | Keterangan / Nilai |
|---|---|
| **Method** | `GET` |
| **URL** | `http://localhost/pemweb-obe/data/inventaris.json` *(atau path relatif `data/inventaris.json`)* |
| **Status Code** | `200 OK` (HTTP/1.1 200 OK) |
| **Content-Type** | `application/json` |
| **Bentuk Response** | JSON Array of Objects (`[ { ... }, { ... } ]`) |
| **Daftar Field Data** | `id`, `nama`, `kategori`, `jumlah`, `kondisi`, `lokasi` |
| **Field yang Dirender (Dipakai)** | **Kartu Inventaris**: `nama`, `kategori`, `kondisi` (badge status), `jumlah`, `lokasi`<br>**Modal Detail**: `id` (#INV-00X), `nama`, `kategori`, `jumlah`, `kondisi`, `lokasi` |

### 3. Struktur Field & Contoh Data Respons

```json
[
  {
    "id": 1,
    "nama": "Jaring Insang (Gillnet)",
    "kategori": "Alat Tangkap",
    "jumlah": 15,
    "kondisi": "Baik",
    "lokasi": "Dermaga Barat"
  }
]
```

- `id` (*Number*): Nomor identitas unik unit inventaris.
- `nama` (*String*): Nama sarana maritim/alat pesisir (dipakai sebagai judul kartu inventaris).
- `kategori` (*String*): Kelompok sarana kerja pesisir (Alat Tangkap, Navigasi, Mesin Kapal, Penyimpanan, Keselamatan).
- `jumlah` (*Number*): Jumlah ketersediaan unit fisik di pos sentra.
- `kondisi` (*String*): Status kelaikan operasional alat (*Baik*, *Perlu Servis*, *Rusak*) — dipakai untuk badge penanda kondisi.
- `lokasi` (*String*): Pos sentra penempatan unit (Dermaga Barat, Dermaga Timur, Pos Pengawas, Bengkel Sentral).

### 4. Panduan Inspeksi DevTools & Uji Coba Jaringan

1. **Pengujian melalui Browser & Developer Tools (Tab Network)**:
   - Akses URL: `http://localhost/pemweb-obe/data/inventaris.json` di browser.
   - Buka **DevTools** (`F12` atau klik kanan &rarr; *Inspect* &rarr; pilih tab **Network**).
   - Muat ulang halaman (`F5` / `Ctrl + R`).
   - Klik request `inventaris.json`:
     - **Headers**: Periksa *Request Method: GET*, *Status Code: 200 OK*, dan *Content-Type: application/json*.
     - **Response / Preview**: Periksa payload array objek JSON yang terformat rapi.
   - Ambil screenshot pada tab **Network** dan tab **Response** sesuai instruksi slide.
2. **Pengujian melalui cURL / REST Client**:
   ```bash
   curl -i http://localhost/pemweb-obe/data/inventaris.json
   ```

---

## Struktur Direktori Proyek
```text
pemweb-obe/
│
├── data/
│   └── inventaris.json                     # Endpoint data JSON lokal (Pertemuan 7 Latihan 1)
│
├── images/
│   ├── ilustrasi-notif.png                 # Aset gambar notifikasi
│   ├── imagsdes.jpg                        # Aset media pendukung pesisir
│   ├── screenshot-sebelum-pencarian.png    # Dokumentasi praktikum 1
│   ├── screenshot-sesudah-pencarian.png    # Dokumentasi praktikum 1
│   ├── screenshot-tidak-ada-hasil.png      # Dokumentasi praktikum 1
│   ├── screenshot-tombol-detail.png        # Dokumentasi praktikum 2
│   ├── screenshot-hasil-detail.png         # Dokumentasi praktikum 2
│   ├── screenshot-limit-5-item.png         # Dokumentasi praktikum 3
│   ├── screenshot-limit-10-item-reload.png # Dokumentasi praktikum 3
│   └── screenshot-accessible-form.png      # Dokumentasi praktikum A (Formulir Aksesibel)
│
├── js/
│   ├── app.js                              # Logika utama, modular filter, & validasi form
│   └── utils.js                            # Helper statistik & pemformat data inventaris
│
├── AI_USAGE_LOG.md                         # Catatan transparansi pemanfaatan AI
├── README.md                               # Dokumentasi arsitektur, tujuan, & aksesibilitas
├── index.html                              # Dokumen semantik HTML5 utama
└── styles.css                              # Tata letak responsif, token desain, & form styling
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
   - Akses URL direktori lokal: [http://localhost/pemweb-obe/](http://localhost/pemweb-obe/)

---

## Catatan
- File entri utama proyek adalah [index.html](file:///c:/laragon/www/pemweb-obe/index.html) yang terhubung langsung dengan [styles.css](file:///c:/laragon/www/pemweb-obe/styles.css) dan [js/app.js](file:///c:/laragon/www/pemweb-obe/js/app.js).