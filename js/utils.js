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

/**
 * Mengambil daftar item inventaris pada lokasi tertentu menggunakan filter.
 * @param {Array<Object>} data - Array objek inventaris.
 * @param {string} lokasi - Nama lokasi yang dicari.
 * @returns {Array<Object>} Array item yang berada pada lokasi tersebut.
 */
export function filterAlatByLokasi(data, lokasi) {
  if (!Array.isArray(data)) {
    throw new TypeError('Data harus berupa array');
  }
  return data.filter(item => item.lokasi === lokasi);
}

/**
 * Mencari item inventaris berdasarkan id menggunakan method find.
 * @param {Array<Object>} data - Array objek inventaris.
 * @param {number|string} id - ID alat yang dicari.
 * @returns {Object|undefined} Objek alat jika ditemukan, atau undefined jika tidak ditemukan.
 */
export function cariAlatById(data, id) {
  if (!Array.isArray(data)) {
    throw new TypeError('Data harus berupa array');
  }
  return data.find(item => item.id === Number(id));
}

/**
 * Menghasilkan string ringkasan alat menggunakan destructuring dan template literal.
 * @param {Object} alat - Objek inventaris alat.
 * @returns {string} String ringkasan informasi alat.
 */
export function formatRingkasanAlat({ id, nama, kategori, jumlah, kondisi, lokasi } = {}) {
  return `[ID: ${id}] ${nama} (${kategori}) | Jumlah: ${jumlah} unit | Kondisi: ${kondisi} | Lokasi: ${lokasi}`;
}

/**
 * Menghasilkan kumpulan string ringkasan untuk setiap alat dalam dataset inventaris.
 * @param {Array<Object>} data - Array objek inventaris.
 * @returns {Array<string>} Array berisi string ringkasan seluruh alat.
 */
export function buatDaftarRingkasan(data) {
  if (!Array.isArray(data)) {
    throw new TypeError('Data harus berupa array');
  }
  return data.map(item => formatRingkasanAlat(item));
}

