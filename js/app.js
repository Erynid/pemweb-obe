/**
 * Main Application Script
 * Mengimpor fungsi dari utils.js dan mendemonstrasikan pengolahan data array of objects.
 */

import {
  ringkasInventaris,
  filterAlatByKondisi,
  filterAlatByLokasi,
  cariAlatById,
  ambilDaftarNama,
  hitungTotalUnit,
  formatRingkasanAlat,
  buatDaftarRingkasan
} from './utils.js';

// 1. Array Objek Inventaris dengan properti lokasi (Alat Pemantauan & Operasional Maritim/Pesisir)
const inventaris = [
  { id: 1, nama: 'GPS Garmin Maritim', kategori: 'Navigasi', jumlah: 5, kondisi: 'Baik', lokasi: 'Dermaga Barat' },
  { id: 2, nama: 'Fish Finder Sonar', kategori: 'Navigasi', jumlah: 3, kondisi: 'Baik', lokasi: 'Kapal Patroli 01' },
  { id: 3, nama: 'Radio Komunikasi VHF', kategori: 'Komunikasi', jumlah: 8, kondisi: 'Perlu Cek', lokasi: 'Pos Pengawas' },
  { id: 4, nama: 'Life Jacket Standar SOLAS', kategori: 'Keselamatan', jumlah: 25, kondisi: 'Baik', lokasi: 'Dermaga Barat' },
  { id: 5, nama: 'Termometer Digital Suhu Air', kategori: 'Instrumen', jumlah: 4, kondisi: 'Perlu Cek', lokasi: 'Laboratorium Pesisir' },
  { id: 6, nama: 'Refraktometer Salinitas', kategori: 'Instrumen', jumlah: 6, kondisi: 'Baik', lokasi: 'Laboratorium Pesisir' }
];

// 2. Pengolahan Data Menggunakan Array Methods
// A. Filter alat dengan kondisi 'Baik'
const alatBaik = inventaris.filter(item => item.kondisi === 'Baik');

// B. Map untuk mengambil nama alat
const namaAlat = inventaris.map(({ nama }) => nama);

// C. Reduce untuk menghitung total unit
const totalUnit = inventaris.reduce((total, item) => total + item.jumlah, 0);

// D. Ringkasan statistik menggunakan fungsi modular dari utils.js
const statistikInventaris = ringkasInventaris(inventaris);

// E. [Tugas 1] Filter semua alat pada lokasi tertentu (misal: 'Dermaga Barat')
const lokasiTarget = 'Dermaga Barat';
const alatDiLokasi = filterAlatByLokasi(inventaris, lokasiTarget);

// F. [Tugas 2] Mencari alat berdasarkan ID menggunakan fungsi dengan method find
const idDicari = 3;
const alatDitemukan = cariAlatById(inventaris, idDicari);

// G. [Tugas 3] Destructuring dan template literal untuk menghasilkan string ringkasan setiap alat
// Implementasi langsung dengan destructuring pada callback parameter & template literal
const ringkasanSemuaAlat = inventaris.map(({ id, nama, kategori, jumlah, kondisi, lokasi }) => {
  return `[ID: ${id}] ${nama} (${kategori}) | Jumlah: ${jumlah} unit | Kondisi: ${kondisi} | Lokasi: ${lokasi}`;
});

// 3. Menampilkan Hasil Pengolahan Data ke Developer Console
console.group('=== 📊 PENGOLAHAN DATA INVENTARIS (ES MODULE) ===');

console.log('📌 Dataset Inventaris Lengkap (dengan properti lokasi):');
console.table(inventaris);

console.log('✅ 1. Alat dengan Kondisi "Baik" (filter):');
console.table(alatBaik);

console.log('📝 2. Daftar Nama Alat (map):');
console.log(namaAlat);

console.log(`🔢 3. Total Jumlah Unit (reduce): ${totalUnit} unit`);

console.log('📈 4. Ringkasan Statistik Inventaris (ringkasInventaris):');
console.log(statistikInventaris);

console.log(`📍 5. Semua Alat di Lokasi "${lokasiTarget}" (filter):`);
console.table(alatDiLokasi);

console.log(`🔍 6. Pencarian Alat Berdasarkan ID (${idDicari}) menggunakan find:`);
if (alatDitemukan) {
  console.log('Data ditemukan:', alatDitemukan);
  // Destructuring objek alat yang ditemukan
  const { nama, kategori, lokasi, kondisi } = alatDitemukan;
  console.log(`Detail: ${nama} (${kategori}) berada di ${lokasi} dengan kondisi [${kondisi}].`);
} else {
  console.log(`Alat dengan ID ${idDicari} tidak ditemukan.`);
}

console.log('📄 7. String Ringkasan Setiap Alat (Destructuring & Template Literal):');
ringkasanSemuaAlat.forEach((ringkasan, index) => {
  console.log(`${index + 1}. ${ringkasan}`);
});

console.groupEnd();

