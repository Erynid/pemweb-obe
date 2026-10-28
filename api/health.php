<?php
// Header CORS dan Tipe Konten JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");

// Set HTTP Status Code 200 OK
http_response_code(200);

// Mengembalikan JSON { "status": "ok" }
echo json_encode([
    "status" => "ok"
]);