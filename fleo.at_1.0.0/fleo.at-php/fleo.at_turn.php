<?php
require('../../fleo.at_1.0.0-config/connection.php');
if (isset($_POST['doing'])) {
$turn = $_POST['turn'];
$fleoNum = $_POST['fleoNum'];

try {
  $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $write_turn_query = "UPDATE `present` SET `turn`='$turn' WHERE `number`='$fleoNum';";
  $fleo_pdo->exec($write_turn_query);
} catch(PDOException $e) {
  echo "<br>" . $e->getMessage();
}
}