<?php
// Header agar browser tahu respons berupa JSON dan mengizinkan CORS
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Contoh data respons API
$response = [
    "status" => "success",
    "message" => "API Pemweb OBE Berhasil Diakses!",
    "timestamp" => date("Y-m-d H:i:s")
];

// Tampilkan data dalam format JSON
echo json_encode($response);