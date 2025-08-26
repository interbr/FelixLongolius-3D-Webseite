<?php
require_once('../../fleo.at_1.0.0-config/connection.php');
if ($_POST["doing"] == 1) {
  if (isset($_POST["room"])) {
  $room = "room-" . $_POST["room"];
  if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
  // Split the header value by commas and take the first IP address
  $ipAddresses = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
  $fleoip = trim($ipAddresses[0]);
} else {
  // Fallback to the remote IP address if no X-Forwarded-For header is found
  $fleoip = $_SERVER['REMOTE_ADDR'];
}
  if ($_POST["save"] == 1) {
    $action = $_POST["action"];
    $action = json_decode($action, true);
    $fragile = $action["robotName"];




    $getActionState = $fleo_pdo->prepare("SELECT `robotData` FROM `$room` WHERE `whatIsThis`='$fragile'");
    $getActionState->execute();
    $actionState = $getActionState->fetch(PDO::FETCH_OBJ);
    if ($actionState->robotData) {
        echo $actionState->robotData;
    }
}
  }
}