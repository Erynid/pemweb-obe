-- Skema Basis Data: pemweb_obe
-- Modul 10: Integrasi Basis Data, Data Modeling, Query Aman/ORM, PDO, ERD, dan Prepared Statements

CREATE DATABASE IF NOT EXISTS `pemweb_obe` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `pemweb_obe`;

-- Hapus tabel lama bila ada (urutan dari tabel relasi / foreign key terluar)
DROP TABLE IF EXISTS `peminjamans`;
DROP TABLE IF EXISTS `alats`;
DROP TABLE IF EXISTS `users`;

-- ========================================================
-- 1. Tabel Users
-- ========================================================
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ========================================================
-- 2. Tabel Alats
-- ========================================================
CREATE TABLE `alats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kategori` varchar(50) NOT NULL,
  `jumlah` int(11) NOT NULL DEFAULT 1,
  `kondisi` enum('Baik','Perlu Servis','Rusak') NOT NULL DEFAULT 'Baik',
  `lokasi` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_alats_kategori` (`kategori`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ========================================================
-- 3. Tabel Peminjamans (Relasi Many-to-One ke Users & Alats)
-- ========================================================
CREATE TABLE `peminjamans` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `alat_id` int(11) NOT NULL,
  `jumlah_pinjam` int(11) NOT NULL DEFAULT 1,
  `tanggal_pinjam` date NOT NULL,
  `tanggal_kembali` date DEFAULT NULL,
  `status` enum('Dipinjam','Dikembalikan','Ditolak') NOT NULL DEFAULT 'Dipinjam',
  `catatan` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_peminjamans_user` (`user_id`),
  KEY `fk_peminjamans_alat` (`alat_id`),
  CONSTRAINT `fk_peminjamans_alat` FOREIGN KEY (`alat_id`) REFERENCES `alats` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_peminjamans_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ========================================================
-- Seed Data Awal untuk Praktikum & Pengujian
-- ========================================================
INSERT INTO `users` (`id`, `nama`, `email`, `role`) VALUES
(1, 'Administrator Sentra', 'admin@sentrapesisir.id', 'admin'),
(2, 'Pak Nelayan Bahari', 'bahari@nelayan.org', 'user');

INSERT INTO `alats` (`id`, `nama`, `kategori`, `jumlah`, `kondisi`, `lokasi`) VALUES
(1, 'Jaring Insang (Gillnet)', 'Alat Tangkap', 15, 'Baik', 'Dermaga Barat'),
(2, 'GPS Navigasi Laut', 'Navigasi', 5, 'Baik', 'Pos Pengawas'),
(3, 'Mesin Tempel 15 PK', 'Mesin Kapal', 3, 'Perlu Servis', 'Bengkel Sentral'),
(4, 'Coolbox Penyimpanan Ikan 200L', 'Penyimpanan', 20, 'Baik', 'Dermaga Barat'),
(5, 'Rompi Pelampung (Life Jacket)', 'Keselamatan', 30, 'Baik', 'Dermaga Timur'),
(6, 'Fishfinder Sonar', 'Navigasi', 2, 'Rusak', 'Pos Pengawas'),
(7, 'Jangkar Lipat Galvanis', 'Alat Tangkap', 8, 'Baik', 'Dermaga Barat'),
(8, 'Radio Komunikasi VHF Marine', 'Navigasi', 6, 'Baik', 'Pos Pengawas'),
(9, 'Lampu Badai Solar Sel', 'Keselamatan', 18, 'Baik', 'Pos Pengawas'),
(10, 'Timbangan Gantung Ikan 100kg', 'Penyimpanan', 4, 'Perlu Servis', 'Dermaga Timur');

INSERT INTO `peminjamans` (`id`, `user_id`, `alat_id`, `jumlah_pinjam`, `tanggal_pinjam`, `tanggal_kembali`, `status`, `catatan`) VALUES
(1, 2, 2, 1, '2026-10-25', '2026-10-28', 'Dipinjam', 'Operasi tangkap ikan malam');
