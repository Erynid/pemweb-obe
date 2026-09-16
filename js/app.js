/**
 * Main Application Script
 * Mengimpor fungsi dari utils.js dan mendemonstrasikan pengolahan data array of objects.
 */

import {
  ringkasInventaris,
  filterAlatByKondisi,
  ambilDaftarNama,
  hitungTotalUnit
} from './utils.js';

// 1. Array Objek Inventaris (Alat Pemantauan & Operasional Maritim/Pesisir)
const inventaris = [
  { id: 1, nama: 'GPS Garmin Maritim', kategori: 'Navigasi', jumlah: 5, kondisi: 'Baik' },
  { id: 2, nama: 'Fish Finder Sonar', kategori: 'Navigasi', jumlah: 3, kondisi: 'Baik' },
  { id: 3, nama: 'Radio Komunikasi VHF', kategori: 'Komunikasi', jumlah: 8, kondisi: 'Perlu Cek' },
  { id: 4, nama: 'Life Jacket Standar SOLAS', kategori: 'Keselamatan', jumlah: 25, kondisi: 'Baik' },
  { id: 5, nama: 'Termometer Digital Suhu Air', kategori: 'Instrumen', jumlah: 4, kondisi: 'Perlu Cek' },
  { id: 6, nama: 'Refraktometer Salinitas', kategori: 'Instrumen', jumlah: 6, kondisi: 'Baik' }
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

// 3. Menampilkan Hasil Pengolahan Data ke Developer Console
console.group('=== 📊 PENGOLAHAN DATA INVENTARIS (ES MODULE) ===');

console.log('📌 Dataset Inventaris Lengkap:');
console.table(inventaris);

console.log('✅ 1. Alat dengan Kondisi "Baik" (filter):');
console.table(alatBaik);

console.log('📝 2. Daftar Nama Alat (map):');
console.log(namaAlat);

console.log(`🔢 3. Total Jumlah Unit (reduce): ${totalUnit} unit`);

console.log('📈 4. Ringkasan Statistik Inventaris (ringkasInventaris):');
console.log(statistikInventaris);

console.groupEnd();
