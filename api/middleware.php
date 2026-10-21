<?php
/**
 * Middleware untuk memastikan Request Header memuat Content-Type: application/json
 * pada metode yang membawa body payload (seperti POST, PUT, PATCH).
 */
function enforceJsonHeader()
{
    $method = $_SERVER['REQUEST_METHOD'];

    // Hanya periksa header jika metode berupa POST, PUT, atau PATCH
    if (in_array($method, ['POST', 'PUT', 'PATCH'])) {
        $contentType = $_SERVER['CONTENT_TYPE'] ?? $_SERVER['HTTP_CONTENT_TYPE'] ?? '';

        // Jika Content-Type bukan application/json, hentikan eksekusi
        if (strpos($contentType, 'application/json') === false) {
            http_response_code(415); // 415 Unsupported Media Type
            echo json_encode([
                "status" => "error",
                "message" => "Request header harus menyertakan 'Content-Type: application/json'."
            ]);
            exit; // Hentikan alur sebelum masuk ke logika utama API
        }
    }
}