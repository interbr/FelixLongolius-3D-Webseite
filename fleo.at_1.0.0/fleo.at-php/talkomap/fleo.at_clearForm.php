<?php
require_once('../../../fleo.at_1.0.0-config/connection.php');
if ($_POST["doing"] == 22) {
  $fleoip = $_SERVER['REMOTE_ADDR'];
  $fleo_pdo->exec("UPDATE `room-home` SET `audioStationText`='', `robotData`='', `audioImage`='', `tick` = tick+1, `tick2`=tick+1, `ip`=concat(`ip`, ', $fleoip') WHERE `id`='768' OR `id`='769';");
  echo "cleared";
    }
