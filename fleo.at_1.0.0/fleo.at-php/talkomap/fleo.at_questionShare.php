<?php
require_once('../../../fleo.at_1.0.0-config/connection.php');
if ($_POST["doing"] == 1) {
  if (isset($_POST["room"])) {
  $room = "room-" . $_POST["room"];
  $content=addslashes($_POST["content"]);
  $content=htmlspecialchars($content);
  $fleoip = $_SERVER['REMOTE_ADDR'];
  $fleo_pdo->exec("UPDATE `$room` SET `audioStationText`='$content', `robotData`='', `tick` = tick+1, `tick2`=tick+1, `ip`=concat(`ip`, ', $fleoip') WHERE `whatIsThis`='1672879342grafikpn140054396767.png.webp'");
      }
    }
    if ($_POST["doing"] == 2) {
      if (isset($_POST["room"])) {
      $room = "room-" . $_POST["room"];
      $content=addslashes($_POST["content"]);
      $content=htmlspecialchars($content);
      $fleoip = $_SERVER['REMOTE_ADDR'];
      $fleo_pdo->exec("UPDATE `$room` SET `audioStationText`='$content', `robotData`=2, `tick` = tick+1, `tick2`=tick+1, `ip`=concat(`ip`, ', $fleoip') WHERE `whatIsThis`='1672879342grafikpn140054396767.png.webp'");
          }
        }