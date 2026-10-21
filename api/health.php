<?php
// Header CORS dan JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");

// Response status kesehatan API
$response = [
    "status" => "ok",
    "message" => "API service is running smoothly",
    "timestamp" => date("c")
];

// Mengembalikan status HTTP 200 OK
http_response_code(200);
echo json_encode($response);