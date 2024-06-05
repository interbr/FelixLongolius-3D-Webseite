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

$moveFragileDPlusMinus = random_int(0,5);
$moveFragileWPlusMinus = random_int(0,5);
$moveFragileHPlusMinus = random_int(0,5);

if ($moveFragileDPlusMinus == 1) { $moveFragileD += 5; }
else if ($moveFragileDPlusMinus == 2) { $moveFragileD += 10; }
else if ($moveFragileDPlusMinus == 3) { $moveFragileD += 15; }
else if ($moveFragileDPlusMinus == 4) { $moveFragileD -= 5; }
else if ($moveFragileDPlusMinus == 5) { $moveFragileD -= 10; }
else if ($moveFragileDPlusMinus == 0) { $moveFragileD -= 15; }

if ($moveFragileD > 40) { $moveFragileD -= 20; }
if ($moveFragileD < -40) { $moveFragileD += 20; }
if ($row["coordsD"] < -10000) { $moveFragileD = 50; }
if ($row["coordsD"] > 10000) { $moveFragileD = -50; }

if ($moveFragileWPlusMinus == 1) { if ($mpMoveW == 0) { $moveFragileW -= 2; } else { $moveFragileW += 2; } }
else if ($moveFragileWPlusMinus == 2) { if ($mpMoveW == 0) { $moveFragileW -= 5; } else { $moveFragileW += 5; } }
else if ($moveFragileWPlusMinus == 3) { if ($mpMoveW == 0) { $moveFragileW -= 7; } else { $moveFragileW += 7; } }
else if ($moveFragileWPlusMinus == 4) { if ($mpMoveW == 0) { $moveFragileW -= 10; } else { $moveFragileW += 10; } }
else if ($moveFragileWPlusMinus == 5) { if ($mpMoveW == 0) { $moveFragileW -= 15; } else { $moveFragileW += 15; } }
else if ($moveFragileWPlusMinus == 0) { if ($mpMoveW == 0) { $moveFragileW -= 20; } else { $moveFragileW += 20; } }

if ($moveFragileW > 40) { $moveFragileW -= 20; }
if ($moveFragileW < -40) { $moveFragileW += 20; }

if ($row["coordsW"] > 15000) { $mpMoveW = 0; $moveFragileW = -100; $mpChange = 1; } else if ($row["coordsW"] < -15000) { $mpMoveW = 1; $moveFragileW = 100; $mpChange = 1; } else { $mpChange = 0; $mpMoveW = random_int(0,1); }

if ($moveFragileHPlusMinus > 2) { $moveFragileH += 20; } else { $moveFragileH -= 20; }
if ($moveFragileH > 50) { $moveFragileH = 40; }
if ($moveFragileH < -50) { $moveFragileH = -40; }
if ($row["coordsH"] < 0) { $moveFragileH = $moveFragileH + $row["coordsH"] * -1; }
if ($row["coordsH"] > 6000) { $moveFragileH = -150; }

$set_fragile_while = "UPDATE `$room` SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = `coordsD` + '$moveFragileD', `coordsH` = 0, `isRobot` = 1, `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = '$mpChange' WHERE `whatIsThis` = '$id' AND `program` = '$meIam';"; 

/*    if ($FragileH > 20000 || $FragileH < -20000) { 
        $set_fragile_while = "UPDATE $room SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = `coordsD` + '$moveFragileD', `coordsH` = 10000, `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = 0 WHERE `whatIsThis` = '$id' AND `program` = '$meIam';"; }
    if ($FragileD > 60 || $FragileD < -60) {
        $set_fragile_while = "UPDATE $room SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = 0, `coordsH` = `coordsH` + '$moveFragileH', `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = 0 WHERE `whatIsThis` = '$id' AND `program` = '$meIam';"; }
*/
if (!$fleo_pdo->exec($set_fragile_while)) { echo "database error 1";  }

usleep(125000);

if ($i > 99) { 
    exec('php ' . $fleoPathAbs . '/fleo.at_1.0.0/fleo.at-php/fragiles/Femme.php 1 '.$id.' '.$room.' > /dev/null &');
    $goBaby = 0;
}
}
echo "done?", PHP_EOL;
}
die();