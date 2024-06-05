<?php
require_once('../../../fleo.at_1.0.0-config/connection.php');
if ($_POST["doing"] == 1) {
  if (isset($_POST["room"])) {
  $room = "room-" . $_POST["room"];
  $content = $_POST["content"];
  $fleoip = $_SERVER['REMOTE_ADDR'];
  $OPENAI_API_KEY = $openAiKey;
  $headers = [
    'Content-Type: application/json', 
    'Authorization: Bearer ' . $OPENAI_API_KEY
];
  $message = json_encode(array("model" => "text-davinci-003", "prompt" => $content, "temperature" => 0.9, "max_tokens" => 3500));

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, 'https://api.openai.com/v1/completions');
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $message);

  $response = curl_exec($ch);
  curl_close($ch);
if ($response) {
    echo $response;
    /* $woo = addslashes($response);
    $woo = htmlspecialchars($woo);
    $fleo_pdo->exec("UPDATE `$room` SET `audioStationText`='$woo', `tick` = tick+1, `tick2`=tick+1, `ip`=concat(`ip`, ', $fleoip') WHERE `whatIsThis`='1672879342grafikpn140054396767.png.webp'"); //  OR `whatIsThis`='1672878952grafikpn25550316286.png.webp' */
    // $fleo_pdo->exec("UPDATE `$room` SET `audioImage`='keins', `tick` = tick+1, `tick2`=tick+1, `ip`=concat(`ip`, ', $fleoip') WHERE `whatIsThis`='1672879342grafikpn140054396767.png.webp'");
}
}
}
else if ($_POST["doing"] == 2) {
  if (isset($_POST["room"])) {
  $room = "room-" . $_POST["room"];
  $content = $_POST["content"];
  $fleoip = $_SERVER['REMOTE_ADDR'];
  $OPENAI_API_KEY = $openAiKey;
  $headers = [
    'Content-Type: application/json', 
    'Authorization: Bearer ' . $OPENAI_API_KEY
];
  $message = json_encode(array("prompt" => $content, "n" => 1, "size" => "512x512", "response_format" => "b64_json", "user" => $_POST["fleoNum"]));

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, 'https://api.openai.com/v1/images/generations');
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $message);

  $response = curl_exec($ch);
  curl_close($ch);
if ($response) {
    echo $response;
    /* $woo = addslashes($response);
    $woo = htmlspecialchars($woo); */
    $fleo_pdo->exec("UPDATE `$room` SET `robotData`=2, `tick` = tick+1, `tick2`=tick+1, `ip`=concat(`ip`, ', $fleoip') WHERE `whatIsThis`='1672879342grafikpn140054396767.png.webp'"); //  OR `whatIsThis`='1672878952grafikpn25550316286.png.webp' */
}
}
} else if ($_POST["doing"] == 5) {
  if (isset($_POST["room"])) {
  $room = "room-" . $_POST["room"];
  $content = $_POST["content"];
  $fleoip = $_SERVER['REMOTE_ADDR'];
  $OPENAI_API_KEY = $openAiKey;
  $headers = [
    'Content-Type: application/json', 
    'Authorization: Bearer ' . $OPENAI_API_KEY
];
  $message = json_encode(array("model" => "text-davinci-003", "prompt" => $content, "temperature" => 0.9, "max_tokens" => 60));

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, 'https://api.openai.com/v1/completions');
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $message);

  $response = curl_exec($ch);
  curl_close($ch);
if ($response) {
    echo $response;
    /* $woo = addslashes($response);
    $woo = htmlspecialchars($woo);
    $fleo_pdo->exec("UPDATE `$room` SET `audioStationText`='$woo', `tick` = tick+1, `tick2`=tick+1, `ip`=concat(`ip`, ', $fleoip') WHERE `whatIsThis`='1672879342grafikpn140054396767.png.webp'"); //  OR `whatIsThis`='1672878952grafikpn25550316286.png.webp' */
    // $fleo_pdo->exec("UPDATE `$room` SET `audioImage`='keins', `tick` = tick+1, `tick2`=tick+1, `ip`=concat(`ip`, ', $fleoip') WHERE `whatIsThis`='1672879342grafikpn140054396767.png.webp'");
}
}
}else if ($_POST["doing"] == 8) {
  if (isset($_POST["room"])) {
  $room = "room-" . $_POST["room"];
  $content = $_POST["content"];
  $fleoip = $_SERVER['REMOTE_ADDR'];
  $OPENAI_API_KEY = $openAiKey;
  $headers = [
    'Content-Type: application/json', 
    'Authorization: Bearer ' . $OPENAI_API_KEY
];

  $message = json_encode(array("model" => "text-davinci-003", "prompt" => $content, "temperature" => 0.9, "max_tokens" => 600));

  // $message = json_encode(array("model" => "code-davinci-002", "prompt" => $content, "temperature" => 0.09, "max_tokens" => 1800));

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, 'https://api.openai.com/v1/completions');
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $message);

  $response = curl_exec($ch);
  curl_close($ch);
if ($response) {
    echo $response;
    /* $woo = addslashes($response);
    $woo = htmlspecialchars($woo);
    $fleo_pdo->exec("UPDATE `$room` SET `audioStationText`='$woo', `tick` = tick+1, `tick2`=tick+1, `ip`=concat(`ip`, ', $fleoip') WHERE `whatIsThis`='1672879342grafikpn140054396767.png.webp'"); //  OR `whatIsThis`='1672878952grafikpn25550316286.png.webp' */
    // $fleo_pdo->exec("UPDATE `$room` SET `audioImage`='keins', `tick` = tick+1, `tick2`=tick+1, `ip`=concat(`ip`, ', $fleoip') WHERE `whatIsThis`='1672879342grafikpn140054396767.png.webp'");
}
}
}