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
        $toSave = $_POST["whereItGoesTo"];
        $words = $_POST["words2"];
        $words=addslashes($words);
        $words=htmlspecialchars($words); 
      try {
      $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $fleo_pdo->exec("UPDATE `$room` SET `audioStationText`='$words', `ip`=concat(`ip`, ', $fleoip') WHERE `id` = $toSave");
      echo "1";
  } catch (PDOException $e) {
    echo "<br>" . $e->getMessage();
}
  }
}