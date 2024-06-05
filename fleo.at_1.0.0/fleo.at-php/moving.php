<?php
require('../../fleo.at_1.0.0-config/connection.php');
$fleoip = $_SERVER['REMOTE_ADDR'];
if (isset($_POST['doing'])) {
  if ($_POST['doing'] == 5) {
    $result = 1;

  $hiCo = htmlspecialchars($_POST['hiCo'], ENT_QUOTES);
  $sMMs = htmlspecialchars($_POST['sMMs'], ENT_QUOTES);
  $level = htmlspecialchars($_POST['level'], ENT_QUOTES);
  $who = htmlspecialchars($_POST['whoC'], ENT_QUOTES);
  if (isset($_POST['colorC'])) {
  $colorC = htmlspecialchars($_POST['colorC'], ENT_QUOTES); 

  $colorCalc = preg_replace("/[^0-9,]/", "", $colorC);
  $rgbarr = explode(",", $colorCalc, 3);
  $color = sprintf("#%02x%02x%02x", $rgbarr[0], $rgbarr[1], $rgbarr[2]); } else { $color = "#ffffff"; }

  try {
    $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $write_moving_query = "UPDATE `present` SET `uW`='$hiCo',`uH`='$level',`uD`='$sMMs', `ip`='$fleoip', `active`='1' WHERE `number` = '$who' AND `color` = '$color';";
    $write_moving_h_query = "INSERT INTO `present_history` (`number`, `name`, `color`, `active`, `uW`, `uH`, `uD`, `ip`) VALUES ('$who','empty','$color','1','$hiCo','$level','$sMMs','$fleoip');";
    $fleo_pdo->exec($write_moving_h_query);
    $fleo_pdo->exec($write_moving_query);
    echo $result;
  } catch (PDOException $e) {
    echo "<br>" . $e->getMessage();
  }
}
if ($_POST['doing'] == 9) {
  $result = 1;

$hiCo = htmlspecialchars($_POST['hiCo'], ENT_QUOTES);
$sMMs = htmlspecialchars($_POST['sMMs'], ENT_QUOTES);
$level = htmlspecialchars($_POST['level'], ENT_QUOTES);
$who = htmlspecialchars($_POST['whoC'], ENT_QUOTES);
$color = "#ffffff";

try {
  $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $write_moving_query = "UPDATE `present` SET `uW`='$hiCo',`uH`='$level',`uD`='$sMMs', `ip`='$fleoip', `active`='1' WHERE `number` = '$who';";
  $write_moving_h_query = "INSERT INTO `present_history` (`number`, `name`, `color`, `active`, `uW`, `uH`, `uD`, `ip`) VALUES ('$who','empty','$color','1','$hiCo','$level','$sMMs','$fleoip');";
  $fleo_pdo->exec($write_moving_h_query);
  $fleo_pdo->exec($write_moving_query);
  echo $result;
} catch (PDOException $e) {
  echo "<br>" . $e->getMessage();
}
}
}
