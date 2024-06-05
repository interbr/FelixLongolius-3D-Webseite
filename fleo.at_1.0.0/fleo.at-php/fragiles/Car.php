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
$i = 0;
$goBaby = 1;

$get_fragile = $fleo_pdo->prepare("SELECT `whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `isRobot`, `go`, `program`, `isOnline` FROM `$room` WHERE `whatIsThis` = '$id';"); 

$get_fragile->execute(); 
$row = $get_fragile->fetch();

// if ($row["isRobot"] !== 1) { echo "no robot"; }
if ($row["go"] == 1) { $goBaby = 1; } else { $goBaby = 0; }
if ($row["program"] == $meIam) { echo "same program"; } else {


$correcture = 0;

$mpChange = 0;

$FragileW = $row["coordsW"];
$FragileD = $row["coordsD"];
$FragileH = $row["coordsH"]; 

$set_fragile = "UPDATE `$room` SET `program` = '$meIam' WHERE `whatIsThis` = '$id';";
$fleo_pdo->exec($set_fragile);


while ($goBaby == 1) {

$get_fragile = $fleo_pdo->prepare("SELECT `whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `isRobot`, `program`, `isOnline`, `minusPlusW` FROM `$room` WHERE `whatIsThis` = '$id';"); 
$get_fragile->execute(); 
$row = $get_fragile->fetch();

$mpMoveW = $row["minusPlusW"];

$i++;

if ($mpMoveW == 0) { $moveFragileW = random_int(100,300) * -1; } else { $moveFragileW = random_int(100,300); }
if ($row["coordsW"] > 1000) { $mpMoveW = 0; $moveFragileW = -20; $mpChange = 1; } else if ($row["coordsW"] < 800) { $mpMoveW = 1; $moveFragileW = 20; $mpChange = 1; } else { $moveFragileW = random_int(-20,20); $mpChange = 0; }

if ($row["coordsD"] < -3000) { $moveFragileD = 500; }
else if ($row["coordsD"] > 17000) { $moveFragileD = -500; }
else { 
$moveFragileDPlusMinus = random_int(0,9);

if ($moveFragileDPlusMinus == 0) { $moveFragileD += 100; }
else if ($moveFragileDPlusMinus == 1) { $moveFragileD += 200; }
else if ($moveFragileDPlusMinus == 2) { $moveFragileD += 300; }
else if ($moveFragileDPlusMinus == 3) { $moveFragileD += 400; }
else if ($moveFragileDPlusMinus == 4) { $moveFragileD += 500; }
else if ($moveFragileDPlusMinus == 5) { $moveFragileD -= 100; }
else if ($moveFragileDPlusMinus == 6) { $moveFragileD -= 200; }
else if ($moveFragileDPlusMinus == 7) { $moveFragileD -= 300; }
else if ($moveFragileDPlusMinus == 8) { $moveFragileD -= 400; }
else if ($moveFragileDPlusMinus == 9) { $moveFragileD -= 500; }   

if ($moveFragileD > 800) { $moveFragileD -= 200; }
if ($moveFragileD < -800) { $moveFragileD += 200; }
 }

/* if ($moveFragileHPlusMinus == 1) { $moveFragileH += 60; } else { $moveFragileH -= 60; }
if ($moveFragileH > 200) { $moveFragileH -= 200; }
if ($moveFragileH < -200) { $moveFragileH += 200; }
if ($row["coordsH"] < 0) { $moveFragileH = $row["coordsH"] * -1; }
if ($row["coordsH"] > 6000) { $moveFragileH = -300; } */

$set_fragile_while = "UPDATE `$room` SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = `coordsD` + '$moveFragileD', `coordsH` = `coordsH` + '$moveFragileH', `isRobot` = 1, `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = '$mpChange' WHERE `whatIsThis` = '$id' AND `program` = '$meIam';"; 

/*    if ($FragileH > 20000 || $FragileH < -20000) { 
        $set_fragile_while = "UPDATE $room SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = `coordsD` + '$moveFragileD', `coordsH` = 10000, `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = 0 WHERE `whatIsThis` = '$id' AND `program` = '$meIam';"; }
    if ($FragileD > 60 || $FragileD < -60) {
        $set_fragile_while = "UPDATE $room SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = 0, `coordsH` = `coordsH` + '$moveFragileH', `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = 0 WHERE `whatIsThis` = '$id' AND `program` = '$meIam';"; }
*/
if (!$fleo_pdo->exec($set_fragile_while)) { echo "database error 1";  }

usleep(1000000);

if ($i > 29) { 
    exec('php ' . $fleoPathAbs . '/fleo.at_1.0.0/fleo.at-php/fragiles/Car.php 1 '.$id.' '.$room.' > /dev/null &');
    $goBaby = 0;
}
}
echo "done?", PHP_EOL;
}
die();