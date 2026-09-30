/**
 * Main Application Module
 * Praktikum Pemrograman Web OBE
 */

// 8. Import fungsi modular dari js/utils.js
import { ringkasInventaris, filterAlatByLokasi, cariAlatById, formatRingkasanAlat } from "./utils.js";

// Dataset Inventaris Alat & Fasilitas Pesisir (dengan properti lokasi)
const inventaris = [
    {
        id: 1,
        nama: "Jaring Insang (Gillnet)",
        kategori: "Alat Tangkap",
        jumlah: 15,
        kondisi: "Baik",
        lokasi: "Dermaga Barat",
    },
    {
        id: 2,
        nama: "GPS Navigasi Laut",
        kategori: "Navigasi",
        jumlah: 5,
        kondisi: "Baik",
        lokasi: "Pos Pengawas",
    },
    {
        id: 3,
        nama: "Mesin Tempel 15 PK",
        kategori: "Mesin Kapal",
        jumlah: 3,
        kondisi: "Perlu Servis",
        lokasi: "Bengkel Sentral",
    },
    {
        id: 4,
        nama: "Coolbox Penyimpanan Ikan 200L",
        kategori: "Penyimpanan",
        jumlah: 20,
        kondisi: "Baik",
        lokasi: "Dermaga Barat",
    },
    {
        id: 5,
        nama: "Rompi Pelampung (Life Jacket)",
        kategori: "Keselamatan",
        jumlah: 30,
        kondisi: "Baik",
        lokasi: "Dermaga Timur",
    },
    {
        id: 6,
        nama: "Fishfinder Sonar",
        kategori: "Navigasi",
        jumlah: 2,
        kondisi: "Rusak",
        lokasi: "Pos Pengawas",
    },
    {
        id: 7,
        nama: "Jangkar Lipat Galvanis",
        kategori: "Alat Tangkap",
        jumlah: 8,
        kondisi: "Baik",
        lokasi: "Dermaga Barat",
    },
    {
        id: 8,
        nama: "Radio Komunikasi VHF Marine",
        kategori: "Navigasi",
        jumlah: 6,
        kondisi: "Baik",
        lokasi: "Pos Pengawas",
    },
    {
        id: 9,
        nama: "Lampu Badai Solar Sel",
        kategori: "Keselamatan",
        jumlah: 18,
        kondisi: "Baik",
        lokasi: "Pos Pengawas",
    },
    {
        id: 10,
        nama: "Timbangan Gantung Ikan 100kg",
        kategori: "Penyimpanan",
        jumlah: 4,
        kondisi: "Perlu Servis",
        lokasi: "Dermaga Timur",
    },
];

console.log("Portal Layanan Pesisir: Data inventaris berhasil dimuat.", inventaris);

// 3. Filter alat dengan kondisi "Baik"
const alatKondisiBaik = inventaris.filter((item) => item.kondisi === "Baik");

console.log("Daftar Alat dengan Kondisi Baik:", alatKondisiBaik);

// 4. Map untuk menghasilkan array nama alat
const daftarNamaAlat = inventaris.map((item) => item.nama);

console.log("Daftar Nama Alat:", daftarNamaAlat);

// 5. Reduce untuk menghitung total jumlah alat
const totalJumlahAlat = inventaris.reduce((total, item) => total + item.jumlah, 0);

console.log(`Total Jumlah Seluruh Alat Inventaris: ${totalJumlahAlat} unit`);

// 8. Memanggil fungsi ringkasInventaris yang diimpor dari utils.js
const statistikInventaris = ringkasInventaris(inventaris);
console.log("Ringkasan Statistik Inventaris (via utils.js):", statistikInventaris);

// Filter alat pada lokasi tertentu (misal: "Dermaga Barat")
const lokasiTarget = "Dermaga Barat";
const alatDiDermagaBarat = filterAlatByLokasi(inventaris, lokasiTarget);
console.log(`Daftar Alat di lokasi '${lokasiTarget}':`, alatDiDermagaBarat);

// Pencarian Alat Berdasarkan ID menggunakan find
const idTarget = 3;
const alatDitemukan = cariAlatById(inventaris, idTarget);
console.log(`Pencarian Alat dengan ID ${idTarget}:`, alatDitemukan);

// Destructuring & Template Literal: Ringkasan setiap alat
console.log("\n--- Ringkasan Format Teks Setiap Alat ---");
const daftarRingkasanTeks = inventaris.map(formatRingkasanAlat);
daftarRingkasanTeks.forEach((ringkasan) => console.log(ringkasan));

/* ==========================================================================
   Latihan Praktikum 1: Pencarian Real-Time & Render Inventaris
   ========================================================================== */
const inventarisList = document.querySelector("#inventaris-list");
const search = document.querySelector("#search");

/**
 * Merender daftar alat inventaris ke dalam elemen DOM
 * @param {Array<Object>} items - Data alat yang akan dirender
 * @param {string} [keyword=""] - Kata kunci pencarian saat ini (opsional)
 */
function renderItems(items, keyword = "") {
    if (!inventarisList) return;

    // Jika tidak ada hasil pencarian, tampilkan pesan yang ramah
    if (items.length === 0) {
        inventarisList.innerHTML = `
            <div class="pesan-kosong" role="status">
                <div class="pesan-kosong-ikon">🔍</div>
                <h3>Alat Tidak Ditemukan</h3>
                <p>Tidak ada alat inventaris yang cocok dengan kata kunci "<strong>${keyword}</strong>".</p>
                <p class="pesan-kosong-saran">Saran: Periksa ejaan kata kunci atau coba cari dengan nama alat lain (misalnya: <em>Jaring</em>, <em>GPS</em>, <em>Mesin</em>).</p>
            </div>
        `;
        return;
    }

    // Render daftar kartu alat inventaris secara dinamis
    inventarisList.innerHTML = items
        .map((item) => {
            let badgeKondisiClass = "badge-kondisi-baik";
            if (item.kondisi === "Perlu Servis") {
                badgeKondisiClass = "badge-kondisi-servis";
            } else if (item.kondisi === "Rusak") {
                badgeKondisiClass = "badge-kondisi-rusak";
            }

            return `
                <article class="inventaris-card" data-id="${item.id}">
                    <div class="inventaris-card-header">
                        <span class="badge-kategori">${item.kategori}</span>
                        <span class="badge-kondisi ${badgeKondisiClass}">${item.kondisi}</span>
                    </div>
                    <h3 class="inventaris-card-title">${item.nama}</h3>
                    <div class="inventaris-card-details">
                        <div class="detail-row">
                            <span class="detail-label">Jumlah Unit:</span>
                            <span class="detail-value"><strong>${item.jumlah}</strong> unit</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Lokasi:</span>
                            <span class="detail-value">${item.lokasi}</span>
                        </div>
                    </div>
                    <button type="button" class="btn-detail" data-detail="${item.id}">Detail</button>
                </article>
            `;
        })
        .join("");
}

/* ==========================================================================
   Latihan Praktikum 3: Simpan Preferensi Jumlah Item (localStorage)
   ========================================================================== */
const limit = document.querySelector("#limit");
const urlParams = new URLSearchParams(window.location.search);
const limitQueryParam = urlParams.get("limit");
if (limitQueryParam) {
    localStorage.setItem("limit", limitQueryParam);
}
if (limit) {
    limit.value = localStorage.getItem("limit") ?? "5";
}

/**
 * Menerapkan filter pencarian dan pembatasan limit tampilan item
 * @param {string} [keywordOverride=null] - Kata kunci pencarian override
 */
function updateInventarisView(keywordOverride = null) {
    const rawKeyword = keywordOverride !== null ? keywordOverride : (search ? search.value : "");
    const keyword = rawKeyword.toLowerCase().trim();
    const currentLimit = limit ? Number(limit.value) : 5;

    const filtered = inventaris.filter((item) =>
        item.nama.toLowerCase().includes(keyword)
    );

    // Potong array sesuai preferensi limit tersimpan di localStorage
    renderItems(filtered.slice(0, currentLimit), rawKeyword);
}

// Render data awal inventaris sesuai preferensi limit tersimpan
updateInventarisView();

// Event listener perubahan preferensi limit
if (limit) {
    limit.addEventListener("change", () => {
        localStorage.setItem("limit", limit.value);
        updateInventarisView();
    });
}

// Event listener pencarian real-time dengan filter case-insensitive
if (search) {
    search.addEventListener("input", (event) => {
        updateInventarisView(event.target.value);
    });

    // Otomatis sinkronisasi jika terdapat parameter ?q= di URL
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get("q");
    if (queryParam) {
        search.value = queryParam;
        updateInventarisView(queryParam);
    }
}

/* ==========================================================================
   Latihan Praktikum 2: Tombol Detail dengan Event Delegation
   ========================================================================== */
const daftar = inventarisList;
const detailModal = document.querySelector("#detail-modal");
const modalContent = document.querySelector("#modal-content");
const btnCloseModal = document.querySelector("#btn-close-modal");
const btnFooterClose = document.querySelector("#btn-footer-close");

/**
 * Menampilkan modal dialog rincian alat inventaris secara interaktif
 * @param {Object} item - Objek data alat inventaris
 */
function tampilkanDetail(item) {
    if (!item || !detailModal || !modalContent) return;

    let badgeKondisiClass = "badge-kondisi-baik";
    let statusOperasional = "Siap Digunakan untuk Aktivitas Pesisir";
    if (item.kondisi === "Perlu Servis") {
        badgeKondisiClass = "badge-kondisi-servis";
        statusOperasional = "Terjadwal untuk Perawatan & Servis Berkala";
    } else if (item.kondisi === "Rusak") {
        badgeKondisiClass = "badge-kondisi-rusak";
        statusOperasional = "Tidak Siap Operasi / Butuh Penggantian Suku Cadang";
    }

    modalContent.innerHTML = `
        <div class="modal-detail-hero">
            <span class="badge-kategori">${item.kategori}</span>
            <h4>${item.nama}</h4>
            <span class="badge-kondisi ${badgeKondisiClass}">${item.kondisi}</span>
        </div>
        <div class="modal-detail-grid">
            <div class="modal-detail-item">
                <span class="modal-label">Kode Inventaris</span>
                <span class="modal-value">#INV-00${item.id}</span>
            </div>
            <div class="modal-detail-item">
                <span class="modal-label">Kategori</span>
                <span class="modal-value">${item.kategori}</span>
            </div>
            <div class="modal-detail-item">
                <span class="modal-label">Stok Unit Tersedia</span>
                <span class="modal-value"><strong>${item.jumlah}</strong> unit</span>
            </div>
            <div class="modal-detail-item">
                <span class="modal-label">Lokasi Sentra</span>
                <span class="modal-value">${item.lokasi}</span>
            </div>
            <div class="modal-detail-item full-width">
                <span class="modal-label">Status Operasional</span>
                <span class="modal-value">${statusOperasional}</span>
            </div>
        </div>
    `;

    if (typeof detailModal.showModal === "function") {
        detailModal.showModal();
    } else {
        detailModal.setAttribute("open", "");
    }
}

// Event delegation pada container daftar inventaris (sesuai instruksi praktikum)
if (daftar) {
    daftar.addEventListener("click", (event) => {
        const button = event.target.closest("[data-detail]");
        if (!button) return;

        const item = inventaris.find(
            (data) => data.id === Number(button.dataset.detail)
        );

        tampilkanDetail(item);
    });
}

// Handler penutupan modal dialog
if (btnCloseModal) {
    btnCloseModal.addEventListener("click", () => detailModal?.close());
}
if (btnFooterClose) {
    btnFooterClose.addEventListener("click", () => detailModal?.close());
}
if (detailModal) {
    detailModal.addEventListener("click", (event) => {
        const rect = detailModal.getBoundingClientRect();
        const isInDialog = (
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width
        );
        if (!isInDialog) {
            detailModal.close();
        }
    });

    // Otomatis buka dialog jika URL memiliki parameter ?detail=
    const detailParam = new URLSearchParams(window.location.search).get("detail");
    if (detailParam) {
        const item = inventaris.find((data) => data.id === Number(detailParam));
        if (item) {
            tampilkanDetail(item);
        }
    }
}

/* ==========================================================================
   Latihan Praktikum A: Accessible Equipment Loan Form Logic
   ========================================================================== */
const formPeminjaman = document.querySelector("#form-peminjaman-alat");
const formAlert = document.querySelector("#form-alert");
const inputTglPinjam = document.querySelector("#form-tgl-pinjam");
const inputTglKembali = document.querySelector("#form-tgl-kembali");
const btnResetPeminjaman = document.querySelector("#btn-reset-peminjaman");

if (formPeminjaman) {
    // 1. Inisialisasi batasan tanggal minimum hari ini
    const today = new Date().toISOString().split("T")[0];
    if (inputTglPinjam) {
        inputTglPinjam.min = today;
        inputTglPinjam.value = today;
        
        // Default tanggal kembali = hari ini + 3 hari
        const defaultKembali = new Date();
        defaultKembali.setDate(defaultKembali.getDate() + 3);
        if (inputTglKembali) {
            inputTglKembali.min = today;
            inputTglKembali.value = defaultKembali.toISOString().split("T")[0];
        }

        // Sinkronisasi otomatis agar tanggal kembali tidak sebelum tanggal mulai
        inputTglPinjam.addEventListener("change", () => {
            if (inputTglKembali) {
                inputTglKembali.min = inputTglPinjam.value;
                if (inputTglKembali.value && inputTglKembali.value < inputTglPinjam.value) {
                    inputTglKembali.value = inputTglPinjam.value;
                }
            }
        });
    }

    // 2. Handler submit dengan validasi aksesibel & pengumuman status
    formPeminjaman.addEventListener("submit", (event) => {
        event.preventDefault();

        // Validasi HTML5 Constraint Validation
        if (!formPeminjaman.checkValidity()) {
            const firstInvalid = formPeminjaman.querySelector(":invalid");
            
            if (formAlert) {
                formAlert.className = "form-alert alert-error";
                formAlert.style.display = "block";
                formAlert.innerHTML = `
                    <div class="alert-title">
                        <span aria-hidden="true">⚠️</span>
                        <span>Formulir Belum Lengkap</span>
                    </div>
                    <p>Mohon periksa kembali kolom yang bertanda bintang merah (*). Pastikan seluruh informasi telah diisi dengan benar sebelum mengirimkan permohonan.</p>
                `;
                formAlert.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }

            if (firstInvalid) {
                firstInvalid.focus();
            }
            return;
        }

        // Ambil data formulir jika valid
        const formData = new FormData(formPeminjaman);
        const data = {
            nama: formData.get("nama") || "-",
            judul: formData.get("judul") || "-",
            email: formData.get("email") || "-",
            telepon: formData.get("telepon") || "-",
            kategori: formData.get("kategori") || "-",
            lokasi: formData.get("lokasi") || "-",
            jumlah: formData.get("jumlah") || "1",
            tglPinjam: formData.get("tgl_pinjam") || "-",
            tglKembali: formData.get("tgl_kembali") || "-",
            deskripsi: formData.get("deskripsi") || "-"
        };

        // Buat nomor registrasi tiket peminjaman acak
        const noTiket = "PINJAM-" + Math.floor(100000 + Math.random() * 900000);

        if (formAlert) {
            formAlert.className = "form-alert alert-success";
            formAlert.style.display = "block";
            formAlert.innerHTML = `
                <div class="alert-title">
                    <span aria-hidden="true">✅</span>
                    <span>Permohonan Peminjaman Berhasil Diajukan!</span>
                </div>
                <p>Terima kasih <strong>${data.nama}</strong>, permohonan peminjaman sarana pesisir Anda telah berhasil didaftarkan dan segera diverifikasi oleh petugas sentra.</p>
                
                <div class="receipt-card">
                    <h4>Bukti Registrasi Peminjaman: <span style="color: var(--color-primary-dark);">${noTiket}</span></h4>
                    <div class="receipt-grid">
                        <div class="receipt-item"><strong>Agenda Melaut:</strong> ${data.judul}</div>
                        <div class="receipt-item"><strong>Kategori Alat:</strong> ${data.kategori}</div>
                        <div class="receipt-item"><strong>Jumlah Unit:</strong> ${data.jumlah} unit</div>
                        <div class="receipt-item"><strong>Pos Pengambilan:</strong> ${data.lokasi}</div>
                        <div class="receipt-item"><strong>Periode:</strong> ${data.tglPinjam} s.d ${data.tglKembali}</div>
                        <div class="receipt-item"><strong>Kontak:</strong> ${data.telepon} (${data.email})</div>
                    </div>
                </div>
            `;
            formAlert.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }

        // Reset nilai formulir setelah sukses
        formPeminjaman.reset();
        if (inputTglPinjam) inputTglPinjam.value = today;
    });

    // 3. Handler reset formulir
    if (btnResetPeminjaman) {
        btnResetPeminjaman.addEventListener("click", () => {
            if (formAlert) {
                formAlert.style.display = "none";
                formAlert.innerHTML = "";
            }
        });
    }

    // 4. Otomatisasi data contoh via URL parameter (?demo_form=1 atau ?submitted=1)
    const formParams = new URLSearchParams(window.location.search);
    if (formParams.get("demo_form") === "1" || formParams.get("submitted") === "1") {
        const inputNama = document.querySelector("#form-nama");
        const inputJudul = document.querySelector("#form-judul");
        const inputEmail = document.querySelector("#form-email");
        const inputTelp = document.querySelector("#form-telepon");
        const selectKategori = document.querySelector("#form-kategori");
        const selectLokasi = document.querySelector("#form-lokasi");
        const inputJumlah = document.querySelector("#form-jumlah");
        const inputDeskripsi = document.querySelector("#form-deskripsi");
        const checkPersetujuan = document.querySelector("#form-persetujuan");

        if (inputNama) inputNama.value = "Muhammad Dzakir Dzakwan";
        if (inputJudul) inputJudul.value = "Operasi Penangkapan Ikan Musim Timur";
        if (inputEmail) inputEmail.value = "dzakir@contoh.id";
        if (inputTelp) inputTelp.value = "081234567890";
        if (selectKategori) selectKategori.value = "Alat Tangkap";
        if (selectLokasi) selectLokasi.value = "Dermaga Barat";
        if (inputJumlah) inputJumlah.value = "2";
        if (inputDeskripsi) inputDeskripsi.value = "Peminjaman 2 unit jaring insang untuk operasi melaut 3 hari nelayan tradisional sentra pesisir.";
        if (checkPersetujuan) checkPersetujuan.checked = true;

        if (formParams.get("submitted") === "1") {
            formPeminjaman.dispatchEvent(new Event("submit", { cancelable: true }));
        }
    }
}


