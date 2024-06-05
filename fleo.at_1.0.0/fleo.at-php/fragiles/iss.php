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

$FragileW = $row["coordsW"];
$FragileD = $row["coordsD"];
$FragileH = $row["coordsH"]; 




while ($goBaby == 1) {

    $url = 'http://api.open-notify.org/iss-now.json';
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_HTTPGET, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response_json = curl_exec($ch);
    curl_close($ch);
    $response=json_decode($response_json, true);

$get_fragile = $fleo_pdo->prepare("SELECT `whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `isRobot`, `program`, `isOnline`, `minusPlusW` FROM `$room` WHERE `whatIsThis` = '$id';"); 
$get_fragile->execute(); 
$row = $get_fragile->fetch();
$mpMoveW = $row["minusPlusW"];

$i++;

$moveFragileD = intval($response["iss_position"]["latitude"] * 100);
$moveFragileW = intval($response["iss_position"]["longitude"] * 1000);

if ($row["program"] == $meIam) {

    if ($i == 1) {
    $set_fragile_while = "UPDATE `$room` SET `coordsW` = '$moveFragileW', `coordsD` = '$moveFragileD', `coordsH` = 5600, `tick` = `tick` + 1, `play` = 1, `seek` = '0.01', `minusPlusW` = '$mpMoveW', `mpChange` = '$mpChange' WHERE `whatIsThis` = '$id';"; 
    } else {
        $set_fragile_while = "UPDATE `$room` SET `coordsW` = '$moveFragileW', `coordsD` = '$moveFragileD', `coordsH` = 5600, `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = '$mpChange' WHERE `whatIsThis` = '$id';"; 
    }
    }
    /*    if ($FragileH > 20000 || $FragileH < -20000) { 
            $set_fragile_while = "UPDATE $room SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = `coordsD` + '$moveFragileD', `coordsH` = 10000, `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = 0 WHERE `whatIsThis` = '$id' AND `program` = '$meIam';"; }
        if ($FragileD > 60 || $FragileD < -60) {
            $set_fragile_while = "UPDATE $room SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = 0, `coordsH` = `coordsH` + '$moveFragileH', `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = 0 WHERE `whatIsThis` = '$id' AND `program` = '$meIam';"; }
    */
    if (!$fleo_pdo->exec($set_fragile_while)) { echo "database error 1";  }
    
    usleep(5000000);
    
    if ($i > 79) { 
        exec('php /var/www/deepmonitor/fleo.at_1.0.0/fleo.at-php/fragiles/iss.php 1 '.$id.' '.$room.' > /dev/null &');
        $goBaby = 0;
    }
    if ($row["program"] !== $meIam) {
        $goBaby = 0;
    }
    
    echo "done?", PHP_EOL;
    }
    die();