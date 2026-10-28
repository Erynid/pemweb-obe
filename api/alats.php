<?php

$pdo = require_once __DIR__ . '/../config/database.php';
// Header CORS dan JSON Response
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Hubungkan dan jalankan middleware Content-Type
require_once __DIR__ . '/middleware.php';
enforceJsonHeader();

$method = $_SERVER['REQUEST_METHOD'];

// ==========================================
// 1. HANDLER GET (Mengembalikan Array Alat)
// ==========================================
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Cek apakah ada query parameter 'kategori' di URL (?kategori=...)
    $kategori = $_GET['kategori'] ?? null;

    if ($kategori) {
        // Query menggunakan prepared statement jika ada filter kategori
        $stmt = $pdo->prepare("SELECT * FROM alats WHERE kategori = :kategori");
        $stmt->execute([':kategori' => $kategori]);
    } else {
        // Query tanpa filter (ambil semua data)
        $stmt = $pdo->prepare("SELECT * FROM alats");
        $stmt->execute();
    }

    $alats = $stmt->fetchAll();

    http_response_code(200);
    echo json_encode([
        'status' => 'success',
        'data' => $alats
    ]);
    exit;
}

// ==========================================
// 2. HANDLER POST (Tambah Data dengan Validasi)
// ==========================================
if ($method === 'POST') {
    // Ambil raw body JSON dari request
    $rawInput = file_get_contents("php://input");
    $data = json_decode($rawInput, true);

    // [Pengujian 2]: JSON Rusak / Format Sintaks Salah (HTTP 400 Bad Request)
    if (json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode([
            "status" => "error",
            "message" => "Format JSON tidak valid / rusak (Bad Request)"
        ]);
        exit;
    }

    $errors = [];

    // [Pengujian 3]: Validasi Aturan Bisnis (HTTP 422 Unprocessable Entity)
    // - nama: wajib, minimal 3 karakter, & maksimal 100 karakter
    $namaTrimmed = isset($data['nama']) ? trim($data['nama']) : '';
    if (empty($namaTrimmed) || strlen($namaTrimmed) < 3 || strlen($namaTrimmed) > 100) {
        $errors['nama'] = "Nama alat wajib diisi, minimal 3 karakter, dan maksimal 100 karakter.";
    }

    // - kategori: wajib
    if (empty($data['kategori'])) {
        $errors['kategori'] = "Kategori alat wajib diisi.";
    }

    // - jumlah: wajib angka & minimal 1
    if (!isset($data['jumlah']) || !is_numeric($data['jumlah']) || (int) $data['jumlah'] < 1) {
        $errors['jumlah'] = "Jumlah harus berupa angka dan minimal 1.";
    }

    // - kondisi: wajib 'Baik', 'Perlu Servis', atau 'Rusak'
    $kondisiAllowed = ['Baik', 'Perlu Servis', 'Rusak'];
    if (empty($data['kondisi']) || !in_array($data['kondisi'], $kondisiAllowed)) {
        $errors['kondisi'] = "Kondisi alat harus bernilai 'Baik', 'Perlu Servis', atau 'Rusak'.";
    }

    // - lokasi: wajib
    if (empty($data['lokasi'])) {
        $errors['lokasi'] = "Lokasi alat wajib diisi.";
    }

    // Jika ada aturan bisnis yang terlanggar
    if (!empty($errors)) {
        http_response_code(422);
        echo json_encode([
            "status" => "fail",
            "message" => "Validasi gagal. Data tidak memenuhi aturan bisnis.",
            "errors" => $errors
        ]);
        exit;
    }

    // [Pengujian 1]: JSON Valid & Memenuhi Aturan (HTTP 201 Created)
    $newItem = [
        "id" => rand(100, 999),
        "nama" => $namaTrimmed,
        "kategori" => trim($data['kategori']),
        "jumlah" => (int) $data['jumlah'],
        "kondisi" => trim($data['kondisi']),
        "lokasi" => trim($data['lokasi'])
    ];

    http_response_code(201);
    echo json_encode([
        "status" => "success",
        "message" => "Data alat berhasil ditambahkan.",
        "data" => $newItem
    ]);
    exit;
}

// Method selain GET/POST tidak diizinkan (HTTP 405)
http_response_code(405);
echo json_encode([
    "status" => "error",
    "message" => "Method not allowed"
]);