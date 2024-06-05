<?php
require('../../fleo.at_1.0.0-config/connection.php');
if (isset($_POST['doing'])) {
if ($_POST['doing'] == 1) { $result = 1; } else { $result = 0; };
$newSize = $_POST['videoSize'];
$fleoNum = $_POST['fleoNum'];

try {
  $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $write_videoSize_query = "UPDATE `present` SET `videoSize`='$newSize' WHERE `number`='$fleoNum';";
  $fleo_pdo->exec($write_videoSize_query);
  echo $result;
} catch(PDOException $e) {
  echo "<br>" . $e->getMessage();
}
}