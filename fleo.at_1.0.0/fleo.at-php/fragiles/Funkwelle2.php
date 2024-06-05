<?php
if (isset($argc) && $argc > 1) {

if ($argv[1] == "1") { $id = $argv[2]; $room = $argv[3]; }

} else {

if (isset($_POST["doing"])) {
$id = $_POST["fragile"];
$room = "room-" . $_POST["room"];
echo "hello.";
}
}


require('../../../fleo.at_1.0.0-config/connection.php');
$moveFragileW = 0;
$moveFragileD = 0;
$moveFragileH = 0;
$meIam = random_int(1000000,2000000);
$set_fragile = "UPDATE `$room` SET `program` = '$meIam', `isRobot`= 7 WHERE `whatIsThis` = '$id';";
$fleo_pdo->exec($set_fragile);


$i = 0;
$goBaby = 1;

$get_fragile = $fleo_pdo->prepare("SELECT `whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `isRobot`, `go`, `program`, `isOnline` FROM `$room` WHERE `whatIsThis` = '$id';"); 

$get_fragile->execute(); 
$row = $get_fragile->fetch();

// if ($row["isRobot"] !== 1) { echo "no robot"; }
if ($row["go"] == 1) { $goBaby = 1; } else { $goBaby = 0; }



$correcture = 0;

$mpChange = 0;






while ($goBaby == 1) {

$get_fragile = $fleo_pdo->prepare("SELECT `whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `isRobot`, `program`, `isOnline`, `minusPlusW` FROM `$room` WHERE `whatIsThis` = '$id';"); 
$get_fragile->execute(); 
$row = $get_fragile->fetch();
$mpMoveW = $row["minusPlusW"];

$FragileW = $row["coordsW"];
$FragileD = $row["coordsD"];
$FragileH = $row["coordsH"]; 

$i++;

if ($mpMoveW == 1) {

    if ($FragileW < -26677) { $FragileW += 300; if ($FragileW > -26677) {  $FragileW = -26677; }}
    if ($FragileW > -26677) { $FragileW -= 300; if ($FragileW < -26677) {  $FragileW = -26677; }}
    if ($FragileD < 39529) { $FragileD += 300; if ($FragileD > 39529) {  $FragileD = 39529; }}
    if ($FragileD > 39529) { $FragileD -= 300; if ($FragileD < 39529) {  $FragileD = 39529; }}

    if ($FragileW == -26677 && $FragileD == 39529) { $FragileW = -26677; $FragileD = 39529; $mpMoveW = 0; $mpChange = 1; } else { $mpChange = 0; }

} else {

    if ($FragileW < -25500) { $FragileW += 300; if ($FragileW > -25500) {  $FragileW = -25500; }}
    if ($FragileW > -25500) { $FragileW -= 300; if ($FragileW < -25500) {  $FragileW = -25500; }}
    if ($FragileD < -1000) { $FragileD += 300; if ($FragileD > -1000) {  $FragileD = -1000; }}
    if ($FragileD > -1000) { $FragileD -= 300; if ($FragileD < -1000) {  $FragileD = -1000; }}

    if ($FragileW == -25500 && $FragileD == -1000) { $FragileW = -25500; $FragileD = -1000; $mpMoveW = 1; $mpChange = 1; } else { $mpChange = 0; }
}


if ($row["program"] == $meIam) {

    if ($i == 1) {
    $set_fragile_while = "UPDATE `$room` SET `coordsW` = '$FragileW', `coordsD` = '$FragileD', `coordsH` = 500, `tick` = `tick` + 1, `play` = 1, `seek` = '0.01', `minusPlusW` = '$mpMoveW', `mpChange` = '$mpChange' WHERE `whatIsThis` = '$id';"; 
    } else {
        $set_fragile_while = "UPDATE `$room` SET `coordsW` = '$FragileW', `coordsD` = '$FragileD', `coordsH` = 500, `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = '$mpChange' WHERE `whatIsThis` = '$id';"; 
    }
    }
    /*    if ($FragileH > 20000 || $FragileH < -20000) { 
            $set_fragile_while = "UPDATE $room SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = `coordsD` + '$moveFragileD', `coordsH` = 10000, `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = 0 WHERE `whatIsThis` = '$id' AND `program` = '$meIam';"; }
        if ($FragileD > 60 || $FragileD < -60) {
            $set_fragile_while = "UPDATE $room SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = 0, `coordsH` = `coordsH` + '$moveFragileH', `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = 0 WHERE `whatIsThis` = '$id' AND `program` = '$meIam';"; }
    */
    if (!$fleo_pdo->exec($set_fragile_while)) { echo "database error 1";  }
    
    usleep(1000000);
    
    if ($i > 79) { 
        exec('php ' . $fleoPathAbs . '/fleo.at_1.0.0/fleo.at-php/fragiles/Funkwelle2.php 1 '.$id.' '.$room.' > /dev/null &');
        $goBaby = 0;
    }
    if ($row["program"] !== $meIam) {
        $goBaby = 0;
    }
    
    echo "done?", PHP_EOL;
    }
    die();