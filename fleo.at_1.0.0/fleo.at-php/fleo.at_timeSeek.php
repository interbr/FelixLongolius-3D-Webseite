<?php
require('../../fleo.at_1.0.0-config/connection.php');
if (isset($_POST['doing'])) {
if ($_POST['doing'] == 1) {
$room = "room-" . $_POST['room'];
$audioStation = $_POST['audioStation'];
$seek = $_POST['seek'];

try {
    $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $write_seek_query = "UPDATE `$room` SET `play`=1, `seek`='$seek', `tick` = `tick` + 1 WHERE `whatIsThis`='$audioStation';";
    $fleo_pdo->exec($write_seek_query);
} catch(PDOException $e) {
    echo "<br>" . $e->getMessage();
}
}
if ($_POST['doing'] == 2) {
$room = "room-" . $_POST['room'];
$audioStation = $_POST['audioStation'];
$seek = $_POST['seek'];

try {
    $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $write_seek_query = "UPDATE `$room` SET `play`=2, `seek`='$seek', `tick` = `tick` + 1 WHERE `whatIsThis`='$audioStation';";
    $fleo_pdo->exec($write_seek_query);
} catch(PDOException $e) {
    echo "<br>" . $e->getMessage();
}
}
if ($_POST['doing'] == 3) {
$room = "room-" . $_POST['room'];
$audioStation = $_POST['audioStation'];
$seek = $_POST['seek'];

try {
  $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $write_seek_query = "UPDATE `$room` SET `seek`='$seek', `tick` = `tick` + 1 WHERE `whatIsThis`='$audioStation';";
  $fleo_pdo->exec($write_seek_query);
} catch(PDOException $e) {
  echo "<br>" . $e->getMessage();
}
}
if ($_POST['doing'] == 4) {
  $room = "room-" . $_POST['room'];
  $audioStation = $_POST['audioStation'];
  $sql = $fleo_pdo->prepare("SELECT `seek` FROM `$room` WHERE `whatIsThis`='$audioStation'");
  $sql->execute();
  $results = $sql->fetchAll(PDO::FETCH_OBJ);
  foreach ($results as $result) {
    echo $result->seek;
  }
}
if ($_POST['doing'] == 5) {
  $room = "room-" . $_POST['room'];
  $audioStation = $_POST['audioStation'];
  
  try {
      $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $write_seek_query = "UPDATE `$room` SET `play`=2, `tick` = `tick` + 1 WHERE `whatIsThis`='$audioStation';";
      $fleo_pdo->exec($write_seek_query);
  } catch(PDOException $e) {
      echo "<br>" . $e->getMessage();
  }
}
}