<?php
require('../../fleo.at_1.0.0-config/connection.php');
if (isset($_POST['doing'])) {
if ($_POST['doing'] == 1) { $result = 1; $extraContent = ""; }
if ($_POST['doing'] == 2) { $result = 2; $extraContent = $_POST['extraContent']; }
if ($_POST['doing'] == 3) { $result = 2; $extraContent = ""; }
$fleoNumOwn = $_POST['fleoNumOwn'];
$fleoNumDistant = $_POST['fleoNumDistant'] . "_" . $result;

try {
  $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  if ($result == 1 && $extraContent == "") { $write_extra_query = "UPDATE `present` SET `extra`='$fleoNumDistant' WHERE `number`='$fleoNumOwn'"; }
  if ($result == 2) { $write_extra_query = "UPDATE `present` SET `extra`='$fleoNumDistant', `extraContent`='$extraContent ' WHERE `number`='$fleoNumOwn'"; }
  $fleo_pdo->exec($write_extra_query);
  echo $result;
} catch(PDOException $e) {
  echo "<br>" . $e->getMessage();
}
}