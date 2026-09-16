/**
 * Modul Utility Pengolahan Data Inventaris
 * Menyediakan fungsi-fungsi modular untuk manipulasi data inventaris (ES Module).
 */

/**
 * Menghitung ringkasan statistik dari dataset inventaris.
 * @param {Array<Object>} data - Array objek inventaris.
 * @returns {{ jenisAlat: number, totalUnit: number, perluCek: number }} Objek ringkasan statistik.
 * @throws {TypeError} Jika parameter data bukan merupakan array.
 */
export function ringkasInventaris(data) {
  if (!Array.isArray(data)) {
    throw new TypeError('Data harus berupa array');
  }

  return {
    jenisAlat: data.length,
    totalUnit: data.reduce((sum, item) => sum + (Number(item.jumlah) || 0), 0),
    perluCek: data.filter(item => item.kondisi !== 'Baik').length
  };
}

/**
 * Mengambil daftar item inventaris berdasarkan kondisi tertentu.
 * @param {Array<Object>} data - Array objek inventaris.
 * @param {string} kondisi - Kondisi yang dicari (default: 'Baik').
 * @returns {Array<Object>} Array item yang cocok dengan kondisi.
 */
export function filterAlatByKondisi(data, kondisi = 'Baik') {
  if (!Array.isArray(data)) {
    throw new TypeError('Data harus berupa array');
  }
  return data.filter(item => item.kondisi === kondisi);
}

/**
 * Mengekstrak seluruh nama alat dari dataset inventaris.
 * @param {Array<Object>} data - Array objek inventaris.
 * @returns {Array<string>} Array berisi daftar nama alat.
 */
export function ambilDaftarNama(data) {
  if (!Array.isArray(data)) {
    throw new TypeError('Data harus berupa array');
  }
  return data.map(({ nama }) => nama);
}

/**
 * Menghitung total kuantitas unit alat dari dataset inventaris.
 * @param {Array<Object>} data - Array objek inventaris.
 * @returns {number} Jumlah total seluruh unit alat.
 */
export function hitungTotalUnit(data) {
  if (!Array.isArray(data)) {
    throw new TypeError('Data harus berupa array');
  }
  return data.reduce((total, item) => total + (Number(item.jumlah) || 0), 0);
}
