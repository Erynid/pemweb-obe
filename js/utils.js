/**
 * Utility Functions Module
 * Praktikum Pemrograman Web OBE
 */

/**
 * Meringkas data inventaris menjadi objek statistik
 * @param {Array<Object>} data - Array data inventaris
 * @returns {Object} Objek ringkasan statistik
 */
export function ringkasInventaris(data) {
    const totalJenisAlat = data.length;
    const totalUnit = data.reduce((acc, item) => acc + item.jumlah, 0);
    const totalKondisiBaik = data.filter((item) => item.kondisi === "Baik").length;
    const totalKondisiPerluServis = data.filter((item) => item.kondisi === "Perlu Servis").length;
    const totalKondisiRusak = data.filter((item) => item.kondisi === "Rusak").length;
    const daftarKategori = [...new Set(data.map((item) => item.kategori))];

    return {
        totalJenisAlat,
        totalUnit,
        kondisi: {
            baik: totalKondisiBaik,
            perluServis: totalKondisiPerluServis,
            rusak: totalKondisiRusak,
        },
        daftarKategori,
    };
}

/**
 * Memfilter alat berdasarkan lokasi penyimpanan/operasional tertentu
 * @param {Array<Object>} data - Array data inventaris
 * @param {string} lokasi - Nama lokasi yang dicari
 * @returns {Array<Object>} Array alat pada lokasi yang dipilih
 */
export function filterAlatByLokasi(data, lokasi) {
    return data.filter((item) => item.lokasi.toLowerCase() === lokasi.toLowerCase());
}
