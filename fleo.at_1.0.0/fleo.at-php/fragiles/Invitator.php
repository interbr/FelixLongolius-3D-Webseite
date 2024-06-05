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
if ($row["go"] == 1) { $goBaby = 0; } else { $goBaby = 1; }



$correcture = 0;

$mpChange = 0;

$FragileW = $row["coordsW"];
$FragileD = $row["coordsD"];
$FragileH = $row["coordsH"]; 




while ($goBaby == 1) {

$get_fragile = $fleo_pdo->prepare("SELECT `whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `isRobot`, `program`, `isOnline`, `minusPlusW` FROM `$room` WHERE `whatIsThis` = '$id';"); 
$get_fragile->execute(); 
$row = $get_fragile->fetch();
$mpMoveW = $row["minusPlusW"];

$i++;

$moveFragileDPlusMinus = random_int(0,5);
$moveFragileWPlusMinus = random_int(0,5);
$moveFragileHPlusMinus = random_int(0,5);

if ($moveFragileDPlusMinus == 1) { $moveFragileD += 50; }
else if ($moveFragileDPlusMinus == 2) { $moveFragileD += 100; }
else if ($moveFragileDPlusMinus == 3) { $moveFragileD += 150; }
else if ($moveFragileDPlusMinus == 4) { $moveFragileD -= 50; }
else if ($moveFragileDPlusMinus == 5) { $moveFragileD -= 100; }
else if ($moveFragileDPlusMinus == 0) { $moveFragileD -= 150; }

if ($moveFragileD > 400) { $moveFragileD -= 200; }
if ($moveFragileD < -400) { $moveFragileD += 200; }
if ($row["coordsD"] < 2000) { $moveFragileD = 50; }
if ($row["coordsD"] > 5000) { $moveFragileD = -50; }

if ($moveFragileWPlusMinus == 1) { if ($mpMoveW == 0) { $moveFragileW -= 10; } else { $moveFragileW += 10; } }
else if ($moveFragileWPlusMinus == 2) { if ($mpMoveW == 0) { $moveFragileW -= 25; } else { $moveFragileW += 25; } }
else if ($moveFragileWPlusMinus == 3) { if ($mpMoveW == 0) { $moveFragileW -= 35; } else { $moveFragileW += 35; } }
else if ($moveFragileWPlusMinus == 4) { if ($mpMoveW == 0) { $moveFragileW -= 50; } else { $moveFragileW += 50; } }
else if ($moveFragileWPlusMinus == 5) { if ($mpMoveW == 0) { $moveFragileW -= 75; } else { $moveFragileW += 75; } }
else if ($moveFragileWPlusMinus == 0) { if ($mpMoveW == 0) { $moveFragileW -= 100; } else { $moveFragileW += 100; } }

if ($moveFragileW > 400) { $moveFragileW -= 100; }
if ($moveFragileW < -400) { $moveFragileW += 100; }

if ($row["coordsW"] > 2800) { $mpMoveW = 0; $moveFragileW = -100; $mpChange = 1; } else if ($row["coordsW"] < -4800) { $mpMoveW = 1; $moveFragileW = 100; $mpChange = 1; } else { $mpChange = 0; }

if ($moveFragileHPlusMinus > 2) { $moveFragileH += 200; } else { $moveFragileH -= 200; }
if ($moveFragileH > 500) { $moveFragileH = 400; }
if ($moveFragileH < -500) { $moveFragileH = -400; }
if ($row["coordsH"] < 300) { $moveFragileH = 150; }
if ($row["coordsH"] > 600) { $moveFragileH = -150; }
$moveFragileH = 0;
if ($row["program"] == $meIam) {

if ($i == 1) {
$set_fragile_while = "UPDATE `$room` SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = `coordsD` + '$moveFragileD', `coordsH` = `coordsH` + '$moveFragileH', `tick` = `tick` + 1, `play` = 1, `seek` = '0.01', `minusPlusW` = '$mpMoveW', `mpChange` = '$mpChange' WHERE `whatIsThis` = '$id';"; 
} else {
    $set_fragile_while = "UPDATE `$room` SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = `coordsD` + '$moveFragileD', `coordsH` = `coordsH` + '$moveFragileH', `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = '$mpChange' WHERE `whatIsThis` = '$id';"; 
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
    exec('php ' . $fleoPathAbs . '/fleo.at_1.0.0/fleo.at-php/fragiles/Invitator.php 1 '.$id.' '.$room.' > /dev/null &');
    $goBaby = 0;
}
if ($row["program"] !== $meIam) {
    $goBaby = 0;
}

echo "done?", PHP_EOL;
}
die();