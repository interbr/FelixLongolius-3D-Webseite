<?php
require('../../fleo.at_1.0.0-config/connection.php');
$fleoip = $_SERVER['REMOTE_ADDR'];
$host = gethostbyaddr($fleoip);
if (isset($_POST['doing'])) {
if ($_POST['doing'] == 1) { $result = 1; } else { $result = 0; };
$cD = $_POST['cD'];
$cH = $_POST['cH'];
$cW = $_POST['cW'];
$will = $_POST['will'];
$am = $_POST['am'];

try {
  $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $write_turnAround_query = "INSERT INTO `someoneTurnsAround`(`ip`, `host`, `cD`, `cH`, `cW`, `will`, `am`) VALUES ('$fleoip','$host','$cD','$cH','$cW', '$will', '$am');";
  $fleo_pdo->exec($write_turnAround_query);
  echo $result;
} catch(PDOException $e) {
  echo "<br>" . $e->getMessage();
}
}
 