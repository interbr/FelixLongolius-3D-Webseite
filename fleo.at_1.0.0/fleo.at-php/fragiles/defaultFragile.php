<?php
if (isset($argc) && $argc > 1) {

if ($argv[1] == "1") { $id = $argv[2]; $room = $argv[3]; }

} else {

if (isset($_POST["doing"])) {
$id = $_POST["fragile"];
$room = "room-" . $_POST["room"];
$Xcoords = $_POST["Xcoords"];
$Xdoords = $_POST["Xdoords"];
$will = $_POST["will"];
echo "hello.";

if ($Xcoords < 500) { $addW = -500; }
else if ($Xcoords > 500) { $addW = 500; }
    else { $addW = 0; }
if ($will == "b") { $addD = -1000; } else { $addD = 1000; }


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

$moveFragileDPlusMinus = random_int(0,1);
$moveFragileHPlusMinus = random_int(0,1);

if ($moveFragileDPlusMinus == 1) { 
    $moveFragileD += 50 + $addD; $addD = 0; } else { 
    $moveFragileD -= 50 + $addD; $addD = 0; }

if ($moveFragileD > 100) { $moveFragileD -= 50; }
if ($moveFragileD < -100) { $moveFragileD += 50; }
if ($row["coordsD"] < -10000) { $moveFragileD = 50; }
if ($row["coordsD"] > 10000) { $moveFragileD = -50; }

if ($mpMoveW == 0) { ($moveFragileW = random_int(200,400) * -1) - $addW; $addW = 0; } else { $moveFragileW = random_int(200,400) - $addW; $addW = 0; }
if ($row["coordsW"] > 15000) { $mpMoveW = 0; $moveFragileW = (15000 - $row["coordsW"]) - 1400; $mpChange = 1; } else if ($row["coordsW"] < -15000) { $mpMoveW = 1; $moveFragileW = (-15000 - $row["coordsW"]) + 1400; $mpChange = 1; } else { $mpChange = 0; }

/*
if ($moveFragileHPlusMinus == 1) { $moveFragileH += 60; } else { $moveFragileH -= 60; }
if ($moveFragileH > 200) { $moveFragileH -= 200; }
if ($moveFragileH < -200) { $moveFragileH += 200; }
if ($row["coordsH"] < 0) { $moveFragileH = $row["coordsH"] * -1; }
if ($row["coordsH"] > 6000) { $moveFragileH = -300; } */

$set_fragile_while = "UPDATE `$room` SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = `coordsD` + '$moveFragileD', `coordsH` = `coordsH` + '$moveFragileH', `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = '$mpChange' WHERE `whatIsThis` = '$id' AND `program` = '$meIam';"; 

if (!$fleo_pdo->exec($set_fragile_while)) { echo "database error 1";  }

usleep(500000);

if ($i > 29) { 
    // exec('php ' . $fleoPathAbs . '/fleo.at_1.0.0/fleo.at-php/fragiles/defaultFragile.php 1 '.$id.' '.$room.' > /dev/null &');
    $goBaby = 0;
}
}
echo "done?", PHP_EOL;
}
die();