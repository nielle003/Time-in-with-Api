<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Get current time
$date = new DateTime("now", new DateTimeZone("GMT+8")); // You can change "UTC" to your timezone, e.g., "Asia/Kuala_Lumpur"

$response = [
    "datetime" => $date->format("H:i:s"),
    "timestamp" => $date->getTimestamp()
];

// Return JSON response
echo json_encode($response);
