<?php
header("Cache-Control: no-cache");
header("Content-Type: text/event-stream");
header('X-Accel-Buffering: no');
if (isset($argc) && $argc > 1) {

if ($argv[1] == "1") { $id = $argv[2]; $room = $argv[3]; }

} else {

// if (isset($_POST["doing"])) {
$id = "1741301450imagepng8a490d2efce9b17d65dd843ace5ec224.png.webp"; // $_POST["fragile"];
$room = "room-home"; // . $_POST["room"];
echo "hello.";
// }
}


require('../../../fleo.at_1.0.0-config/connection.php');
$moveFragileW = 0;
$moveFragileD = 0;
$moveFragileH = 0;
$wSpeed = -10;
$hSpeed = 50;
$hSpeedLanding = -50;
$airplaneAir = 0;
$stepCounter = 0;
$runway = 0;
$airplaneStarted = 0;
$meIam = random_int(1000000,2000000);
$set_fragile = "UPDATE `$room` SET `program` = '$meIam', `isRobot`= 7, `go`= 1 WHERE `whatIsThis` = '$id';";
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

$FragileW = $row["coordsW"];
$FragileD = $row["coordsD"];
$FragileH = $row["coordsH"]; 




function airplaneLiftoff($lifting){
    global $lifting, $moveFragileH, $hSpeed, $moveFragileW, $airplaneAir, $stepsbackward, $stepcounter;
    if ($lifting < 400){
    $moveFragileH = $hSpeed;
    echo "lifting below 400";
    } else {
    $moveFragileH = 0;
    $airplaneAir = 1;
    $stepsbackward = $stepCounter * 2;
    $moveFragileW = $moveFragileW * -1;
    $mpChange = 1;
    echo "lifting 400 and more";
    }
}

function airplaneStart(){
    global $moveFragileW, $wSpeed;
    $moveFragileW -= $wSpeed;
    $wSpeed -= 10;
    echo "Airplane start";
}

while ($goBaby == 1) {

$get_fragile = $fleo_pdo->prepare("SELECT `whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `isRobot`, `program`, `isOnline`, `minusPlusW`, `go` FROM `$room` WHERE `whatIsThis` = '$id';"); 
$get_fragile->execute(); 
$row = $get_fragile->fetch();
$mpMoveW = $row["minusPlusW"];

$i++;



if ($row["program"] == $meIam && $row["go"] == 1) {

    if ($airplaneStarted == 0) {
    if ($moveFragileW <= 100) {
        airplaneStart();
        $stepCounter++;
        $runway++;
        echo "Airplane start programming";
    } else {
        $airplaneStarted = 1;
        $lifting = $row["coordsH"];
        airplaneLiftoff($lifting);
        $stepCounter++;
        echo "Airplane started programming";
    }
}
    if ($airplaneAir == 1) {
        echo "Airplane air";
        if ($stepsbackward >= 1){
            $stepsbackward--;
            echo "Airplane stepsbackward more than 0";
        } else {
            $airplaneAir = 2;
            echo "Airplane air 2";

        }
    } else if ($airplaneAir == 2) {
        $moveFragileH = $hSpeedLanding;
        if ($row["coordsH"] <= 0){
            $moveFragileW += $wSpeed;
            $wSpeed += 10;
            $runway--;
            if ($runway <= 0) {
                $goBaby = 0;
                $wSpeed = -10;
                $hSpeed = 50;
                $hSpeedLanding = 50;
                $airplaneAir = 0;
                $stepCounter = 0;
                $runway = 0;
            }  
        }
    }
        $set_fragile_while = "UPDATE `$room` SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = `coordsD` + '$moveFragileD', `coordsH` = `coordsH` + '$moveFragileH', `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = '$mpChange' WHERE `whatIsThis` = '$id';"; 

    /*    if ($FragileH > 20000 || $FragileH < -20000) { 
            $set_fragile_while = "UPDATE $room SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = `coordsD` + '$moveFragileD', `coordsH` = 10000, `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = 0 WHERE `whatIsThis` = '$id' AND `program` = '$meIam';"; }
        if ($FragileD > 60 || $FragileD < -60) {
            $set_fragile_while = "UPDATE $room SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = 0, `coordsH` = `coordsH` + '$moveFragileH', `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = 0 WHERE `whatIsThis` = '$id' AND `program` = '$meIam';"; }
    */
    if (!$fleo_pdo->exec($set_fragile_while)) { echo "database error 1";  }
    

    
    if ($row["program"] !== $meIam) {
        $goBaby = 0;
    }
    
    echo "done?", PHP_EOL;


        } else {
            $goBaby = 0;
        }
        
    while (ob_get_level() > 0) {
        ob_end_flush();
        }
        flush();

if (connection_aborted()) break;

$countBasic++;

usleep(1000000);
}