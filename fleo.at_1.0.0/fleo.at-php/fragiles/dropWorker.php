<?php

$room = "room-home";


require($fleoPathAbs . '/fleo.at_1.0.0-config/connection.php');
$moveFragileW = 0;
$moveFragileD = 0;
$moveFragileH = 0;
$meIam = random_int(1000000,2000000);

sleep(5);

$i = 0;
$goBaby = 1;

$get_fragile = $fleo_pdo->prepare("SELECT `whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `isRobot`, `go`, `program` FROM `$room` WHERE `id` = 1436;"); 

$get_fragile->execute(); 
$row = $get_fragile->fetch();

if ($row["program"] == -1) {

    $fleo_pdo->exec("UPDATE `$room` SET `program` = '$meIam', `isRobot` = 6 WHERE `id` = 1436;");

$FragileW = $row["coordsW"];
$FragileD = $row["coordsD"];
$FragileH = $row["coordsH"]; 
$fleo_pdo->exec("UPDATE `$room` SET `tick` = `tick` + 1, `play` = 1, `seek` = '0.01'  WHERE `id` = 1436;");
while ($FragileW !== -4300 || $FragileD !== 100 ) { 
    if ($FragileW < -4300) { $FragileW += 300; if ($FragileW > -4300) {  $FragileW = -4300; }}
    if ($FragileW > -4300) { $FragileW -= 300; if ($FragileW < -4300) {  $FragileW = -4300; }}
    if ($FragileD < 100) { $FragileD += 300; if ($FragileD > 100) {  $FragileD = 100; }}
    if ($FragileD > 100) { $FragileD -= 300; if ($FragileD < 100) {  $FragileD = 100; }}
    $fleo_pdo->exec("UPDATE `$room` SET `coordsW` = '$FragileW', `coordsD` = '$FragileD', `coordsH` = 0, `tick` = `tick` + 1 WHERE `id` = 1436;"); 

     sleep(1); 
}
    $get_fragile2Move = $fleo_pdo->prepare("SELECT `id`, `whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `isRobot`, `program`, `isOnline`, `minusPlusW` FROM `$room` WHERE `coordsW` > -4000 AND `coordsW` < -3800 AND `coordsD` > 0 AND `coordsD` < 200 AND `id` != 1411 AND `isOnline` = 1 LIMIT 1;"); 
    $get_fragile2Move->execute(); 
    $row2Move = $get_fragile2Move->fetch();   
    echo "here3";
    if ($row2Move > 0) { 
    $fleo_pdo->exec("UPDATE `$room` SET `tick` = `tick` + 1, `play` = 1, `seek` = '0.01'  WHERE `id` = 1436;");
    $row2MoveId = $row2Move["id"];
    echo $row2MoveId;
    echo "here4";
    $liftRow2Move = 0;
    while ($liftRow2Move < 6) {
        $fleo_pdo->exec("UPDATE `$room` SET `coordsW` = `coordsW`, `coordsD` = `coordsD`, `coordsH` = `coordsH` + 20, `tick` = `tick` + 1 WHERE `id` = '$row2MoveId';"); 
        $liftRow2Move++;
        sleep(1);
        echo "here5";
    }
    echo "here6";
    $bringW = random_int(-35000,-3000);
    $bringD = random_int(-6000,12000);
    $get2Bring = 1;
    while ($FragileW < $bringW - 450 || $FragileW > $bringW + 450 || $FragileD < $bringD - 450 || $FragileD > $bringD + 450  ) {
        echo "here7";
        $get_fragile = $fleo_pdo->prepare("SELECT `whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `isRobot`, `program`, `isOnline`, `minusPlusW` FROM `$room` WHERE `id` = 1436;"); 
        $get_fragile->execute(); 
        $row = $get_fragile->fetch();
        $FragileW = $row["coordsW"];
        $FragileD = $row["coordsD"];
        $FragileH = $row["coordsH"]; 
    
            if ($FragileW < $bringW) { $FragileW += 400; }
            if ($FragileW > $bringW) { $FragileW -= 400; }
            if ($FragileD < $bringD) { $FragileD += 400; }
            if ($FragileD > $bringD) { $FragileD -= 400; }

        $fleo_pdo->exec("UPDATE `$room` SET `coordsW` = '$FragileW', `coordsD` = '$FragileD', `coordsH` = 0, `tick` = `tick` + 1 WHERE `id` = 1436;");
        $setMove2MoveCW = $FragileW + 300;
        $fleo_pdo->exec("UPDATE `$room` SET `coordsW` = '$setMove2MoveCW', `coordsD` = '$FragileD', `coordsH` = `coordsH`, `tick` = `tick` + 1 WHERE `id` = '$row2MoveId';");
        sleep(1);
        echo "here8";

}

$fleo_pdo->exec("UPDATE `$room` SET `tick` = `tick` + 1, `play` = 1, `seek` = '0.01'  WHERE `id` = 1436;");

    while ($liftRow2Move > -1) {
        echo "here9";
        $fleo_pdo->exec("UPDATE `$room` SET `coordsW` = `coordsW`, `coordsD` = `coordsD`, `coordsH` = `coordsH` - 20, `tick` = `tick` + 1 WHERE `id` = '$row2MoveId';"); 
        $liftRow2Move--;
        sleep(1);
    }
    $fleo_pdo->exec("UPDATE `$room` SET `tick` = `tick` + 1, `play` = 1, `seek` = '0.01'  WHERE `id` = '$row2MoveId';");
    $fleo_pdo->exec("UPDATE `$room` SET `program` = -1 WHERE `id` = 1436;");

    
    echo "the end";
    sleep(1);
    exec('php ' . $fleoPathAbs . '/fleo.at_1.0.0/fleo.at-php/fragiles/dropWorker.php 1 > /dev/null &');

} else {
        
    while ($FragileW !== -4350 || $FragileD !== 1000 ) { 
    $get_fragile = $fleo_pdo->prepare("SELECT `whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `isRobot`, `go`, `program` FROM `$room` WHERE `id` = 1436;"); 

    $get_fragile->execute(); 
    $row = $get_fragile->fetch();
    $FragileW = $row["coordsW"];
    $FragileD = $row["coordsD"];
    $FragileH = $row["coordsH"]; 
    if ($FragileW < -4350) { $FragileW += 300; if ($FragileW > -4350) {  $FragileW = -4350; }}
    if ($FragileW > -4350) { $FragileW -= 300; if ($FragileW < -4350) {  $FragileW = -4350; }}
    if ($FragileD < 1000) { $FragileD += 300; if ($FragileD > 1000) {  $FragileD = 1000; }}
    if ($FragileD > 1000) { $FragileD -= 300; if ($FragileD < 1000) {  $FragileD = 1000; }}
    $fleo_pdo->exec("UPDATE `$room` SET `coordsW` = '$FragileW', `coordsD` = '$FragileD', `coordsH` = 0, `tick` = `tick` + 1 WHERE `id` = 1436;"); 

    echo "the end";
    sleep(1);
    echo "here";
    $fleo_pdo->exec("UPDATE `$room` SET `program` = -1 WHERE `id` = 1436;");
}
}

}
die();