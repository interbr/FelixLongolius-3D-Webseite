<?php
require('../../fleo.at_1.0.0-config/connection.php');
$data = 'data:image/png;base64,AAAFBfj42Pj4';
if (isset($_POST['boingy'])) {
$fleoNum = $_POST['fleoNum'];
$fleoip = $_SERVER['REMOTE_ADDR'];
$data = $_POST['boingy'];
$lettersOrVideo = 0;
  try {
  $fleo_pdo->exec("INSERT INTO thefleos (active, `online`, defleos, fleoNum, lettersOrVideo, fleoip) VALUES (1, 1, '$data', '$fleoNum', '$lettersOrVideo', '$fleoip') ON DUPLICATE KEY UPDATE active=1, `online`=1, defleos='$data', lettersOrVideo='$lettersOrVideo', fleoip='$fleoip'");
  echo "1";
} catch(PDOException $e) {
  echo "<br>" . $e->getMessage();
}
}