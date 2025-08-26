<?php
require_once('../../../fleo.at_1.0.0-config/connection.php');
if ($_POST["doing"] == 22) {
  if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
  // Split the header value by commas and take the first IP address
  $ipAddresses = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
  $fleoip = trim($ipAddresses[0]);
} else {
  // Fallback to the remote IP address if no X-Forwarded-For header is found
  $fleoip = $_SERVER['REMOTE_ADDR'];
}
  $fleo_pdo->exec("UPDATE `room-home` SET `audioStationText`='', `robotData`='', `audioImage`='', `tick` = tick+1, `tick2`=tick+1, `ip`=concat(`ip`, ', $fleoip') WHERE `id`='768' OR `id`='769';");
  echo "cleared";
    }
