<?php
date_default_timezone_set('Europe/Berlin');
require_once('../../fleo.at_1.0.0-config/connection.php');
if ($_POST["doing"] == 1) {
  if (isset($_POST["room"])) {
  $room = "room-" . $_POST["room"];
  $fleoip = $_SERVER['REMOTE_ADDR'];
  $vote = $_POST["vote"];
  $fleoNum = $_POST["fleoNum"];
  $fleo_pdo->exec("UPDATE `$room` SET `coordsD` = coordsD+$change, `coordsW` = coordsW+$changeW, `tick` = tick+1, `tick2`=tick+1, `ip`=concat(`ip`, ', $fleoip') WHERE `id` = $toSave");
  }
}

