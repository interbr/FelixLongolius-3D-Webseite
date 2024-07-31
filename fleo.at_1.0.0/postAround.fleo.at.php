<?php
$body = file_get_contents('php://input');
if (!empty($body)) {
    $headers = [
        'Content-Type: application/json', 
    ];
    
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_URL, 'https://d.weltfernsehsender.de/postAround.fleo.at.php');
      curl_setopt($ch, CURLOPT_POST, 1);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
      curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
    
      $response = curl_exec($ch);
      curl_close($ch);
    if ($response) {
        echo $response;
}
}