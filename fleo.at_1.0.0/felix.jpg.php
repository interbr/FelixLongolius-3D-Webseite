<?php
session_write_close();
ignore_user_abort(true);
header('Content-Type: multipart/x-mixed-replace;boundary=--fleoats');
header('Cache-Control: private, no-cache, no-store, max-age=0');
header('Connection: close');
require('../fleo.at_1.0.0-config/connection.php');
$sql = $fleo_pdo->prepare("SELECT defleos, defleosA FROM thefleos WHERE `fleoNum`='3519696d32'");

$results_old = 0;

$countBasic = 0;

while (1) {
	$sql->execute();
	$results = $sql->fetchAll(PDO::FETCH_OBJ);
	if ($results !== $results_old) {
	foreach ($results as $result) {
	echo "--fleoats\r\n";
	echo "Content-Type: image/jpeg \r\n";
	echo "\r\n";
	echo imagejpeg(imagecreatefromstring(base64_decode($result->defleos)));
	echo "\r\n";
	}
	$results_old = $results;
	}
	while (ob_get_level() > 0) {
	ob_end_flush();
	}
	flush();

  if (connection_aborted()) {
		break;
		}
		
  usleep(125000);
}