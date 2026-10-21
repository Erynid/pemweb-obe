<?php
// Header CORS dan JSON Response
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$method = $_SERVER['REQUEST_METHOD'];

// ==========================================
// 1. HANDLER GET (Mengembalikan Array Alat)
// ==========================================
if ($method === 'GET') {
    $dataAlat = [
        [
            "id" => 1,
            "nama" => "Jaring Insang (Gillnet)",
            "kategori" => "Alat Tangkap",
            "jumlah" => 15,
            "kondisi" => "Baik",
            "lokasi" => "Dermaga Barat"
        ],
        [
            "id" => 2,
            "nama" => "GPS Navigasi Laut",
            "kategori" => "Navigasi",
            "jumlah" => 5,
            "kondisi" => "Baik",
            "lokasi" => "Pos Pengawas"
        ],
        [
            "id" => 3,
            "nama" => "Mesin Tempel 15 PK",
            "kategori" => "Mesin Kapal",
            "jumlah" => 3,
            "kondisi" => "Perlu Servis",
            "lokasi" => "Bengkel Sentral"
        ]
    ];

    http_response_code(200);
    echo json_encode([
        "status" => "success",
        "data" => $dataAlat
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
    // - nama: wajib & minimal 3 karakter
    if (empty($data['nama']) || strlen(trim($data['nama'])) < 3) {
        $errors['nama'] = "Nama alat wajib diisi dan minimal 3 karakter.";
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
        "nama" => trim($data['nama']),
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