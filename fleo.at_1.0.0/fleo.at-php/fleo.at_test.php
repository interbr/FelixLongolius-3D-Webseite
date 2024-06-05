<?php
header("Cache-Control: no-cache");
header("Content-Type: text/event-stream");
header('X-Accel-Buffering: no');
require('../../fleo.at_1.0.0-config/connection.php');
if (isset($_GET['video'])) {
$RfleoNum = $_GET['video'];
$viewer = $_GET['viewer'];
// $sql = $fleo_pdo->prepare("SELECT lettersOrVideo, defleos, defleosA FROM (SELECT * FROM thefleos WHERE `fleoNum`='$RfleoNum' ORDER BY bingoingy DESC LIMIT 1) sub ORDER BY bingoingy ASC");
$sql = $fleo_pdo->prepare("SELECT defleos, defleosA FROM thefleos WHERE `fleoNum`='$RfleoNum'");
$sql->execute();
$results = $sql->fetchAll(PDO::FETCH_OBJ);
foreach ($results as $result) { $audience = json_decode($result->defleosA); $rate = $audience->$viewer; echo $rate; }

$results_old = 0;

$countBasic = 0;

while (1) {
	$sql->execute();
	$results = $sql->fetchAll(PDO::FETCH_OBJ);
	if ($results !== $results_old) {
	foreach ($results as $result) {
/*	echo "--fleoats\r\n";
	echo "Content-Type: image/jpeg \r\n";
	echo "\r\n";
	echo imagejpeg(imagecreatefromstring(base64_decode($result->defleos)));
	echo "\r\n"; */
	$audience = json_decode($result->defleosA);
	$rate = $audience->$viewer;
	if ($rate == 0) { $playRate = 10000000; }
	if ($rate == 1) { $playRate = 1000000; }
	if ($rate == 2) { $playRate = 250000; }
	if ($rate == 3) { $playRate = 125000; }
	if ($rate == 4) { $playRate = 67000; }
	echo $rate;
	}
	$results_old = $results;
	}
	while (ob_get_level() > 0) {
	ob_end_flush();
	}
	flush();

  if (connection_aborted()) {
		/* try {
			$dbhandle_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$write_setOnline_query = "UPDATE `thefleos` SET `online`=2 WHERE `number`='$self';";
			$dbhandle_pdo->exec($write_setOnline_query);
				//$dbhandle_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				//$fleoboyngINSquery = "DELETE FROM `thefleos` WHERE fleoNum='$self';";
				//$dbhandle_pdo->exec($fleoboyngINSquery);
			header('X-Content-Type-Options: nosniff');
		  } catch(PDOException $e) {
			echo "<br>" . $e->getMessage();
		  } */
		break;
		}
  
  usleep(3000000);
}
}