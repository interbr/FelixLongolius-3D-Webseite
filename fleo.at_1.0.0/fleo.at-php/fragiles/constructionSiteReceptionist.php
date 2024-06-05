<?php
if (isset($argc) && $argc > 1) {

if ($argv[1] == "1") { $id = $argv[2]; $room = $argv[3]; }

} else {

if (isset($_POST["doing"])) {
$id = $_POST["who"];
$room = "room-" . $_POST["room"];
echo "hello.";
}
}


require('../../../fleo.at_1.0.0-config/connection.php');
$moveFragileW = $_POST["coordsW"] * -1 - 550;
$moveFragileD = $_POST["coordsD"] * -1 + 2200;
$moveFragileH = $_POST["coordsH"];
$meIam = random_int(1000000,2000000);
$set_fragile = "UPDATE `$room` SET `program` = '$meIam', `isRobot` = 20, `seek` = '$id' WHERE `whatIsThis` = '1678666308imagepng416842183436.png.webp';";
$fleo_pdo->exec($set_fragile);


$i = 0;
$goBaby = 1;

$get_fragile = $fleo_pdo->prepare("SELECT `whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `isRobot`, `go`, `program`, `isOnline` FROM `$room` WHERE `whatIsThis` = '1678666308imagepng416842183436.png.webp';"); 

$get_fragile->execute(); 
$row = $get_fragile->fetch();

// if ($row["isRobot"] !== 1) { echo "no robot"; }
if ($row["go"] == 1) { $goBaby = 1; } else { $goBaby = 0; }



$correcture = 0;

$mpChange = 0;






while ($goBaby == 1) {

$get_fragile = $fleo_pdo->prepare("SELECT `whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `isRobot`, `program`, `isOnline`, `minusPlusW` FROM `$room` WHERE `whatIsThis` = '1678666308imagepng416842183436.png.webp';"); 
$get_fragile->execute(); 
$row = $get_fragile->fetch();
$mpMoveW = $row["minusPlusW"];

$FragileW = $row["coordsW"];
$FragileD = $row["coordsD"];
$FragileH = $row["coordsH"]; 

$i++;

    if ($FragileW < $moveFragileW) { $FragileW += 1200; if ($FragileW > $moveFragileW) {  $FragileW = $moveFragileW; }}
    if ($FragileW > $moveFragileW) { $FragileW -= 1200; if ($FragileW < $moveFragileW) {  $FragileW = $moveFragileW; }}
    if ($FragileD < $moveFragileD) { $FragileD += 600; if ($FragileD > $moveFragileD) {  $FragileD = $moveFragileD; }}
    if ($FragileD > $moveFragileD) { $FragileD -= 600; if ($FragileD < $moveFragileD) {  $FragileD = $moveFragileD; }}

    if ($FragileW == $moveFragileW && $FragileD == $moveFragileD) { $mpMoveW = 0; $mpChange = 1; $goBaby = 0; } else { $mpChange = 0; }



if ($row["program"] == $meIam) {

    if ($i == 1) {
    $set_fragile_while = "UPDATE `$room` SET `coordsW` = '$FragileW', `coordsD` = '$FragileD', `coordsH` = 0, `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = '$mpChange' WHERE `whatIsThis` = '1678666308imagepng416842183436.png.webp';"; 
    } else {
        $set_fragile_while = "UPDATE `$room` SET `coordsW` = '$FragileW', `coordsD` = '$FragileD', `coordsH` = 0, `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = '$mpChange' WHERE `whatIsThis` = '1678666308imagepng416842183436.png.webp';"; 
    }
    }
    /*    if ($FragileH > 20000 || $FragileH < -20000) { 
            $set_fragile_while = "UPDATE $room SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = `coordsD` + '$moveFragileD', `coordsH` = 10000, `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = 0 WHERE `whatIsThis` = '$id' AND `program` = '$meIam';"; }
        if ($FragileD > 60 || $FragileD < -60) {
            $set_fragile_while = "UPDATE $room SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = 0, `coordsH` = `coordsH` + '$moveFragileH', `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = 0 WHERE `whatIsThis` = '$id' AND `program` = '$meIam';"; }
    */
    if (!$fleo_pdo->exec($set_fragile_while)) { echo "database error 1";  }
    
    usleep(1000000);

    if ($row["program"] !== $meIam) {
        $goBaby = 0;
    }
    
    echo "done?", PHP_EOL;
    }
    die();