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