<?php
require('../../fleo.at_1.0.0-config/connection.php');
if (isset($_POST['doing'])) {
if ($_POST['doing'] == 1) { $result = 1; } else { $result = 0; };
$will = $_POST['will'];
$fleoNum = $_POST['fleoNum'];

try {
  $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $write_turnAround_query2 = "UPDATE `present` SET `TA`='$will' WHERE `number`='$fleoNum';";
  $fleo_pdo->exec($write_turnAround_query2);
  header('X-Content-Type-Options: nosniff');
  echo $result;
} catch(PDOException $e) {
  echo "<br>" . $e->getMessage();
}
}