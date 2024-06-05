<?php
if (isset($_POST['audioStationUrl'])) { $audioStationUrl = ($_POST["audioStationUrl"]); } else { $audioStationUrl = 'no audioStationUrl'; }
if (isset($_POST['room'])) { $room = $_POST["room"]; } else { $room = 'room-home'; }
if (isset($_POST['isOnline'])) { $isOnline = $_POST["isOnline"]; } else { $isOnline = '3'; }
if (isset($_POST['isRobot'])) { $isRobot = $_POST["isRobot"]; } else { $isRobot = '0'; }
$fleoip = $_SERVER['REMOTE_ADDR'];

$headers = [
    'Content-Type: application/json', 
];
if ($audioStationUrl !== "no audioStationUrl") {
  $message = json_encode(array("audioStationUrl" => "https://kitchen.fleo.at" . $audioStationUrl));

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, 'https://gb.weltfernsehsender.de/audio-receive/uploadSimpleRemote.php');
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $message);

  $response = curl_exec($ch);
  curl_close($ch);
if ($response) {
    require_once('../../../fleo.at_1.0.0-config/connection.php');
    $OPENAI_API_KEY = $openAiKey;
  $headers = [
    'Content-Type: application/json', 
    'Authorization: Bearer ' . $OPENAI_API_KEY
];
  $message = json_encode(array("model" => "gpt-3.5-turbo-16k", "prompt" => $response, "temperature" => 0.9, "max_tokens" => 3500));

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
}
}
}