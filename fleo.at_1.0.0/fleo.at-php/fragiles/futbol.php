<?php
if (isset($argc) && $argc > 1) {

if ($argv[1] == "1") { $field = $argv[2]; $intensity = $argv[3]; $view = $argv[4]; }
$room = "room-home";
$meIam = random_int(1000000,2000000);
} else {

if (isset($_POST["doing"])) {
$room = "room-home";
$field = $_POST["value"];
$intensity = $_POST["intensity"] * 2;
$view = $_POST["view"];
$meIam = random_int(1000000,2000000);
}
}

$fieldH = intval(substr($field, 0));
$fieldW = intval(substr($field, -1) - 2);



require('../../../fleo.at_1.0.0-config/connection.php');
$moveFragileW = 0;
$moveFragileD = 0;
$moveFragileH = 0;

$get_fragile = $fleo_pdo->prepare("SELECT `program` FROM `$room` WHERE `id` = '1238';");

$get_fragile->execute(); 
$row = $get_fragile->fetch();

if ($row["program"] == $meIam) { echo "same program"; } else {

$set_fragile = "UPDATE `$room` SET `program` = '$meIam' WHERE `id` = '1238';";
$fleo_pdo->exec($set_fragile);

$i = $intensity * 2; // intensity = 5 // i = 10
$iH = $intensity; // iH = 10
while ($i > 0) {

$strength = ((1 / 10 * $intensity) * 20) / ($intensity * 2 / $i);


if ($view == "b") {

$moveFragileW = intval($strength * $fieldW * -5);
$moveFragileD = intval($strength * 6);
$moveFragileH = intval($iH * $fieldH * 20);

} else {

$moveFragileW = intval($strength * $fieldW * -5);
$moveFragileD = intval($strength * -6);
$moveFragileH = intval($iH * $fieldH * 20);

}




   $i -= 2; 
   $iH -= 3;



    $set_fragile_while = "UPDATE `room-home` SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = `coordsD` + '$moveFragileD', `coordsH` = GREATEST(0, coordsH + $moveFragileH), `tick` = `tick` + 1 WHERE `id` = '1238' AND `program` = '$meIam';";

    if (!$fleo_pdo->exec($set_fragile_while)) { echo "database error 1";  }

    usleep(250000);
    
    if ($i == 0) { 
        $sendIntensity = $intensity / 2;
        // usleep(125000);
        exec('php ' . $fleoPathAbs . '/fleo.at_1.0.0/fleo.at-php/fragiles/futbol.php 1 '.$field.' '.$sendIntensity.' '.$view.' > /dev/null &');
    }
    }
    echo "done?", PHP_EOL;
    }
    die();