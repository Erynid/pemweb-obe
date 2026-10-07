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
   Latihan Praktikum A: Accessible Equipment Loan Form Logic & Validation
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
            validateSingleField("form-tgl-pinjam");
            validateSingleField("form-tgl-kembali");
        });

        if (inputTglKembali) {
            inputTglKembali.addEventListener("change", () => {
                validateSingleField("form-tgl-kembali");
            });
        }
    }

    /**
     * Helper untuk menampilkan pesan error dekat field (inline)
     */
    function setFieldError(fieldId, errorId, message) {
        const fieldEl = document.getElementById(fieldId);
        const errorEl = document.getElementById(errorId);
        if (!errorEl) return;

        errorEl.innerHTML = `<span class="field-error-icon" aria-hidden="true">⚠️</span><span>${message}</span>`;
        errorEl.style.display = "flex";

        if (fieldEl) {
            if (fieldEl.type === "checkbox") {
                const groupEl = document.getElementById("group-persetujuan");
                if (groupEl) groupEl.classList.add("is-invalid");
            } else {
                fieldEl.classList.add("is-invalid");
            }
            fieldEl.setAttribute("aria-invalid", "true");
        }
    }

    /**
     * Helper untuk membersihkan pesan error inline pada field tertentu
     */
    function clearFieldError(fieldId, errorId) {
        const fieldEl = document.getElementById(fieldId);
        const errorEl = document.getElementById(errorId);
        if (errorEl) {
            errorEl.style.display = "none";
            errorEl.innerHTML = "";
        }
        if (fieldEl) {
            if (fieldEl.type === "checkbox") {
                const groupEl = document.getElementById("group-persetujuan");
                if (groupEl) groupEl.classList.remove("is-invalid");
            } else {
                fieldEl.classList.remove("is-invalid");
            }
            fieldEl.setAttribute("aria-invalid", "false");
        }
    }

    /**
     * Membersihkan seluruh pesan error dan styling invalid dari formulir
     */
    function clearAllErrors() {
        const errorElements = formPeminjaman.querySelectorAll(".field-error");
        errorElements.forEach((el) => {
            el.style.display = "none";
            el.innerHTML = "";
        });

        const invalidInputs = formPeminjaman.querySelectorAll(".is-invalid");
        invalidInputs.forEach((el) => el.classList.remove("is-invalid"));

        const allInputs = formPeminjaman.querySelectorAll("input, select, textarea");
        allInputs.forEach((el) => el.setAttribute("aria-invalid", "false"));

        if (formAlert) {
            formAlert.style.display = "none";
            formAlert.innerHTML = "";
            formAlert.className = "form-alert";
        }
    }

    /**
     * Evaluasi aturan validasi untuk satu field secara spesifik
     * @param {string} fieldId
     * @returns {string|null} Pesan error jika tidak valid, atau null jika lolos
     */
    function checkFieldRule(fieldId) {
        const el = document.getElementById(fieldId);
        if (!el) return null;

        const val = el.value ? el.value.trim() : "";

        switch (fieldId) {
            // Aturan 1: Nama Lengkap minimal 3 karakter huruf
            case "form-nama":
                if (!val) return "Nama lengkap pemohon wajib diisi.";
                if (val.length < 3) return "Nama lengkap minimal terdiri dari 3 karakter.";
                if (!/^[a-zA-Z\s'.]+$/.test(val)) return "Nama lengkap hanya boleh mengandung huruf, spasi, dan tanda kutip.";
                return null;

            // Aturan 2: Judul agenda melaut minimal 5 karakter
            case "form-judul":
                if (!val) return "Judul atau nama agenda melaut wajib diisi.";
                if (val.length < 5) return "Judul agenda melaut minimal terdiri dari 5 karakter.";
                return null;

            // Aturan 3: Format email valid
            case "form-email":
                if (!val) return "Alamat email aktif wajib diisi.";
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return "Format alamat email tidak valid (contoh: nelayan@sentrapesisir.id).";
                return null;

            // Aturan 4: Nomor telepon / WhatsApp valid (format Indonesia)
            case "form-telepon":
                if (!val) return "Nomor telepon / WhatsApp wajib diisi.";
                // Menolak jika kurang dari 10 digit atau tidak diawali 08 / 62
                const sanitizedPhone = val.replace(/[\s-]/g, "");
                if (!/^(?:\+62|62|0)8[1-9][0-9]{7,11}$/.test(sanitizedPhone)) {
                    return "Nomor telepon tidak valid (minimal 10 digit angka, diawali 08 atau 62).";
                }
                return null;

            // Aturan 5: Pilihan Kategori Peralatan wajib dipilih
            case "form-kategori":
                if (!val) return "Silakan pilih salah satu kategori peralatan yang dibutuhkan.";
                return null;

            // Aturan 5b: Pilihan Pos Dermaga Pengambilan wajib dipilih
            case "form-lokasi":
                if (!val) return "Silakan pilih pos dermaga sentra pengambilan alat.";
                return null;

            // Aturan 6: Jumlah Unit harus angka antara 1 sampai 10
            case "form-jumlah":
                const num = Number(val);
                if (!val || isNaN(num)) return "Jumlah unit wajib diisi dengan angka.";
                if (num < 1 || num > 10) return "Jumlah unit permohonan dibatasi antara 1 hingga 10 unit.";
                return null;

            // Aturan 7a: Tanggal pinjam minimal hari ini
            case "form-tgl-pinjam":
                if (!val) return "Tanggal mulai peminjaman wajib diisi.";
                const tglMulai = new Date(val);
                const tglSekarang = new Date();
                tglSekarang.setHours(0, 0, 0, 0);
                if (tglMulai < tglSekarang) return "Tanggal mulai peminjaman tidak boleh di masa lalu.";
                return null;

            // Aturan 7b: Tanggal kembali tidak boleh sebelum tanggal pinjam & maks 7 hari
            case "form-tgl-kembali":
                if (!val) return "Rencana tanggal kembali wajib diisi.";
                const inputMulai = document.getElementById("form-tgl-pinjam");
                if (inputMulai && inputMulai.value) {
                    const start = new Date(inputMulai.value);
                    const end = new Date(val);
                    if (end < start) return "Tanggal kembali tidak boleh sebelum tanggal mulai peminjaman.";
                    const selisihHari = Math.round((end - start) / (1000 * 60 * 60 * 24));
                    if (selisihHari > 7) return `Maksimal durasi peminjaman adalah 7 hari kerja (durasi dipilih: ${selisihHari} hari).`;
                }
                return null;

            // Aturan 8: Deskripsi Keperluan minimal 15 karakter
            case "form-deskripsi":
                if (!val) return "Deskripsi keperluan dan wilayah tangkap wajib diisi.";
                if (val.length < 15) return `Deskripsi minimal 15 karakter untuk kejelasan logistik (saat ini: ${val.length} karakter).`;
                return null;

            // Aturan 9: Checkbox persetujuan wajib dicentang
            case "form-persetujuan":
                if (!el.checked) return "Anda harus menyetujui pernyataan komitmen pemeliharaan alat.";
                return null;

            default:
                return null;
        }
    }

    /**
     * Memvalidasi satu field secara real-time dan memperbarui tampilan inline error
     */
    function validateSingleField(fieldId) {
        const errorMap = {
            "form-nama": { errorId: "error-nama", label: "Nama Lengkap Pemohon" },
            "form-judul": { errorId: "error-judul", label: "Judul Agenda Melaut" },
            "form-email": { errorId: "error-email", label: "Alamat Email" },
            "form-telepon": { errorId: "error-telepon", label: "Nomor Telepon / WA" },
            "form-kategori": { errorId: "error-kategori", label: "Kategori Peralatan" },
            "form-lokasi": { errorId: "error-lokasi", label: "Pos Sentra Pengambilan" },
            "form-jumlah": { errorId: "error-jumlah", label: "Jumlah Unit" },
            "form-tgl-pinjam": { errorId: "error-tgl-pinjam", label: "Tanggal Mulai" },
            "form-tgl-kembali": { errorId: "error-tgl-kembali", label: "Rencana Tanggal Kembali" },
            "form-deskripsi": { errorId: "error-deskripsi", label: "Deskripsi Keperluan" },
            "form-persetujuan": { errorId: "error-persetujuan", label: "Pernyataan Persetujuan" }
        };

        const config = errorMap[fieldId];
        if (!config) return true;

        const errorMsg = checkFieldRule(fieldId);
        if (errorMsg) {
            setFieldError(fieldId, config.errorId, errorMsg);
            return false;
        } else {
            clearFieldError(fieldId, config.errorId);
            return true;
        }
    }

    // Registrasi real-time feedback (input / change) untuk multi-channel feedback
    const fieldsToWatch = [
        "form-nama",
        "form-judul",
        "form-email",
        "form-telepon",
        "form-kategori",
        "form-lokasi",
        "form-jumlah",
        "form-tgl-pinjam",
        "form-tgl-kembali",
        "form-deskripsi",
        "form-persetujuan"
    ];

    fieldsToWatch.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const eventType = el.tagName === "SELECT" || el.type === "checkbox" || el.type === "date" ? "change" : "input";
        el.addEventListener(eventType, () => {
            validateSingleField(id);
        });
    });

    /**
     * Memvalidasi seluruh formulir dan mengembalikan daftar kesalahan
     */
    function validateCompleteForm() {
        const errorDefs = [
            { fieldId: "form-nama", errorId: "error-nama", label: "Nama Lengkap Pemohon" },
            { fieldId: "form-judul", errorId: "error-judul", label: "Judul Agenda Melaut" },
            { fieldId: "form-email", errorId: "error-email", label: "Alamat Email" },
            { fieldId: "form-telepon", errorId: "error-telepon", label: "Nomor Telepon / WhatsApp" },
            { fieldId: "form-kategori", errorId: "error-kategori", label: "Kategori Peralatan" },
            { fieldId: "form-lokasi", errorId: "error-lokasi", label: "Pos Sentra Pengambilan" },
            { fieldId: "form-jumlah", errorId: "error-jumlah", label: "Jumlah Unit" },
            { fieldId: "form-tgl-pinjam", errorId: "error-tgl-pinjam", label: "Tanggal Mulai Peminjaman" },
            { fieldId: "form-tgl-kembali", errorId: "error-tgl-kembali", label: "Rencana Tanggal Kembali" },
            { fieldId: "form-deskripsi", errorId: "error-deskripsi", label: "Deskripsi Keperluan" },
            { fieldId: "form-persetujuan", errorId: "error-persetujuan", label: "Pernyataan Persetujuan" }
        ];

        const errors = [];

        errorDefs.forEach(({ fieldId, errorId, label }) => {
            const errorMsg = checkFieldRule(fieldId);
            if (errorMsg) {
                setFieldError(fieldId, errorId, errorMsg);
                errors.push({ fieldId, errorId, label, message: errorMsg });
            } else {
                clearFieldError(fieldId, errorId);
            }
        });

        return errors;
    }

    /**
     * Tampilkan Error Summary di atas form dengan link navigasi ke masing-masing field
     */
    function renderErrorSummary(errors) {
        if (!formAlert) return;

        formAlert.className = "form-alert alert-error";
        formAlert.style.display = "block";
        formAlert.setAttribute("tabindex", "-1");

        formAlert.innerHTML = `
            <div class="alert-title">
                <span aria-hidden="true">⚠️</span>
                <span>Terdapat ${errors.length} Kesalahan Pengisian Formulir</span>
            </div>
            <p class="error-summary-lead">Silakan periksa dan perbaiki kolom-kolom berikut sebelum mengajukan permohonan:</p>
            <ol class="error-summary-list">
                ${errors
                    .map(
                        (err) => `
                    <li>
                        <a href="#${err.fieldId}" data-error-target="${err.fieldId}">
                            <strong>${err.label}</strong>: ${err.message}
                        </a>
                    </li>
                `
                    )
                    .join("")}
            </ol>
        `;
    }

    // Event listener navigasi klik dari link error summary langsung ke field bersangkutan
    if (formAlert) {
        formAlert.addEventListener("click", (event) => {
            const link = event.target.closest("a[data-error-target]");
            if (link) {
                event.preventDefault();
                const targetId = link.dataset.errorTarget;
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.focus();
                    targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }
        });
    }

    // 2. Handler submit dengan validasi komprehensif (Error Summary, Inline Error, & Focus Pertama)
    formPeminjaman.addEventListener("submit", (event) => {
        event.preventDefault();

        // Validasi seluruh aturan
        const errors = validateCompleteForm();

        // Jika terdapat kesalahan validasi
        if (errors.length > 0) {
            // A. Tampilkan Error Summary di atas form
            renderErrorSummary(errors);

            // B. Fokuskan kursor ke error pertama (WCAG Guideline)
            const firstError = errors[0];
            const firstInvalidElement = document.getElementById(firstError.fieldId);
            if (firstInvalidElement) {
                firstInvalidElement.focus();
                firstInvalidElement.scrollIntoView({ behavior: "smooth", block: "center" });
            }
            return;
        }

        // Jika seluruh validasi lolos, ambil data formulir
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
        clearAllErrors();
        if (inputTglPinjam) inputTglPinjam.value = today;
    });

    // 3. Handler reset formulir
    if (btnResetPeminjaman) {
        btnResetPeminjaman.addEventListener("click", () => {
            clearAllErrors();
            if (inputTglPinjam) inputTglPinjam.value = today;
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



