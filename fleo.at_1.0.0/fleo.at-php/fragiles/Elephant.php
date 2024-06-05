<?php
if ($argc > 1) {
require('../../fleo.at_1.0.0-config/connection.php');
$moveFragileW = 0;
$moveFragileD = 0;
$moveFragileH = 0;
$meIam = random_int(1000000,2000000);
$i = 0;
$goBaby = 1;

if ($argv[1] == "1") { $id = $argv[2]; }

$get_fragile = $fleo_pdo->prepare("SELECT `whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `isRobot`, `program`, `isOnline` FROM `sketches4piece` WHERE `isRobot` = '1' AND `onOff` = '1' AND `whatIsThis` = '$id';"); 

$get_fragile->execute(); 
$row = $get_fragile->fetch();

if ($row["isRobot"] !== 1) { echo "no robot"; }
if ($row["isOnline"] !== 1) { echo "no online";; }
if ($row["program"] == $meIam) { echo "same program"; } else {

$correcture = 0;

$mpChange = 0;

$FragileW = $row["coordsW"];
$FragileD = $row["coordsD"];
$FragileH = $row["coordsH"]; 

$set_fragile = "UPDATE sketches4piece SET `program` = '$meIam', `go` = 1 WHERE `whatIsThis` = '$id';";
$fleo_pdo->exec($set_fragile);


while ($goBaby == 1) {

$get_fragile = $fleo_pdo->prepare("SELECT `whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `isRobot`, `program`, `isOnline`, `minusPlusW` FROM `sketches4piece` WHERE `isRobot` = '1' AND `onOff` = '1' AND `whatIsThis` = '$id';"); 
$get_fragile->execute(); 
$row = $get_fragile->fetch();

$mpMoveW = $row["minusPlusW"];

$i++;

$moveFragileDPlusMinus = random_int(0,1);
$moveFragileHPlusMinus = random_int(0,1);

if ($moveFragileDPlusMinus == 1) { 
    $moveFragileD += 1; } else { 
    $moveFragileD -= 1; }

if ($moveFragileD > 1) { $moveFragileD -= 1; }
if ($moveFragileD < -1) { $moveFragileD += 1; }

if ($mpMoveW == 0) { $moveFragileW = random_int(400,600) * -1; } else { $moveFragileW = random_int(400,600); }
if ($row["coordsW"] > 15000) { $mpMoveW = 0; $moveFragileW = (15000 - $row["coordsW"]) - 1400; $mpChange = 1; } else if ($row["coordsW"] < -15000) { $mpMoveW = 1; $moveFragileW = (-15000 - $row["coordsW"]) + 1400; $mpChange = 1; } else { $mpChange = 0; }

$set_fragile_while = "UPDATE sketches4piece SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = `coordsD` + '$moveFragileD', `coordsH` = `coordsH` + '$moveFragileH', `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = '$mpChange' WHERE `whatIsThis` = '$id' AND `program` = '$meIam';"; 

    if ($FragileH > 20000 || $FragileH < -20000) { 
        $set_fragile_while = "UPDATE sketches4piece SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = `coordsD` + '$moveFragileD', `coordsH` = 10000, `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = 0 WHERE `whatIsThis` = '$id' AND `program` = '$meIam';"; }
    if ($FragileD > 60 || $FragileD < -60) {
        $set_fragile_while = "UPDATE sketches4piece SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = 0, `coordsH` = `coordsH` + '$moveFragileH', `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = 0 WHERE `whatIsThis` = '$id' AND `program` = '$meIam';"; }

if (!$fleo_pdo->exec($set_fragile_while)) { echo "database error 1";  }

sleep(1);

if ($i > 29) { 
    $goBaby = 0;
    exec('php /var/www/fleo2t-cup/fragiles/Elephant.php 1 '.$id.' > /dev/null &');
}
}
echo "done?", PHP_EOL;
}
die();
}