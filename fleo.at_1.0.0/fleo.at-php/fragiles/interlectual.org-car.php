<?php
require('../../../fleo.at_1.0.0-config/connection.php');
$moveFragileW = 0;
$moveFragileD = 0;
$moveFragileH = 0;
$meIam = random_int(1000000,2000000);
$i = 0;
$goBaby = 1;

$get_fragile = $fleo_pdo->prepare("SELECT `whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `isRobot`, `go`, `program`, `isOnline` FROM `room-home` WHERE `whatIsThis` = '1721482274imagepng038fd5aeb362075ee5a6bdc8b304beb9.png.webp';"); 

$get_fragile->execute(); 
$row = $get_fragile->fetch();

if ($row["isOnline"] == 1) {
    $fleo_pdo->exec("UPDATE `room-home` SET `isOnline` = 3, `program` = '$meIam' WHERE `whatIsThis` = '1721482274imagepng038fd5aeb362075ee5a6bdc8b304beb9.png.webp';");
}

sleep(5);

if (isset($_GET["carNewCoordsW"]) && isset($_GET["carNewCoordsD"])) {
    $carNewCoordsW = intval($_GET["carNewCoordsW"]);
    $carNewCoordsD = intval($_GET["carNewCoordsD"]);
    $fleo_pdo->exec("UPDATE `room-home` SET `isOnline` = 1, `program` = '$meIam', `coordsW` = '$carNewCoordsW', `coordsD` =  '$carNewCoordsD' WHERE `whatIsThis` = '1721482274imagepng038fd5aeb362075ee5a6bdc8b304beb9.png.webp';");



    $correcture = 0;

    $mpChange = 0;
    
    $FragileW = $carNewCoordsW;
    $FragileD = $carNewCoordsD;
    $FragileH = 0; 
    
    
    
    
    while ($goBaby == 1) {
    
    $get_fragile = $fleo_pdo->prepare("SELECT `whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `isRobot`, `program`, `isOnline`, `minusPlusW` FROM `room-home` WHERE `whatIsThis` = '1721482274imagepng038fd5aeb362075ee5a6bdc8b304beb9.png.webp';"); 
    $get_fragile->execute(); 
    $row = $get_fragile->fetch();
    $mpMoveW = $row["minusPlusW"];
    
    $i++;
    
    $moveFragileDPlusMinus = random_int(0,5);
    $moveFragileWPlusMinus = random_int(0,5);
    $moveFragileHPlusMinus = 0;
    
    if ($moveFragileDPlusMinus == 1) { $moveFragileD += 40; }
    else if ($moveFragileDPlusMinus == 2) { $moveFragileD += 80; }
    else if ($moveFragileDPlusMinus == 3) { $moveFragileD += 100; }
    else if ($moveFragileDPlusMinus == 4) { $moveFragileD -= 40; }
    else if ($moveFragileDPlusMinus == 5) { $moveFragileD -= 80; }
    else if ($moveFragileDPlusMinus == 0) { $moveFragileD -= 100; }
    
    if ($moveFragileD > 400) { $moveFragileD -= 200; }
    if ($moveFragileD < -400) { $moveFragileD += 200; }
    if ($row["coordsD"] < -200000) { $moveFragileD = 50; }
    if ($row["coordsD"] > 200000) { $moveFragileD = -50; }
    
    if ($moveFragileWPlusMinus == 1) { if ($mpMoveW == 0) { $moveFragileW -= 20; } else { $moveFragileW += 20; } }
    else if ($moveFragileWPlusMinus == 2) { if ($mpMoveW == 0) { $moveFragileW -= 50; } else { $moveFragileW += 50; } }
    else if ($moveFragileWPlusMinus == 3) { if ($mpMoveW == 0) { $moveFragileW -= 70; } else { $moveFragileW += 70; } }
    else if ($moveFragileWPlusMinus == 4) { if ($mpMoveW == 0) { $moveFragileW -= 100; } else { $moveFragileW += 100; } }
    else if ($moveFragileWPlusMinus == 5) { if ($mpMoveW == 0) { $moveFragileW -= 150; } else { $moveFragileW += 150; } }
    else if ($moveFragileWPlusMinus == 0) { if ($mpMoveW == 0) { $moveFragileW -= 200; } else { $moveFragileW += 200; } }
    
    if ($moveFragileW > 400) { $moveFragileW -= 200; }
    if ($moveFragileW < -400) { $moveFragileW += 200; }
    
    if ($row["coordsW"] > 20000) { $mpMoveW = 0; $moveFragileW = -1000; $mpChange = 1; } else if ($row["coordsW"] < -20000) { $mpMoveW = 1; $moveFragileW = 1000; $mpChange = 1; } else { $mpChange = 0; }
    
    $moveFragileH = 0;
    
    if ($row["program"] == $meIam) {

        $set_fragile_while = "UPDATE `room-home` SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = `coordsD` + '$moveFragileD', `coordsH` = 0, `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = '$mpChange' WHERE `whatIsThis` = '1721482274imagepng038fd5aeb362075ee5a6bdc8b304beb9.png.webp';"; 
     
        }
        /*    if ($FragileH > 20000 || $FragileH < -20000) { 
                $set_fragile_while = "UPDATE $room SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = `coordsD` + '$moveFragileD', `coordsH` = 10000, `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = 0 WHERE `whatIsThis` = '1721482274imagepng038fd5aeb362075ee5a6bdc8b304beb9.png.webp' AND `program` = '$meIam';"; }
            if ($FragileD > 60 || $FragileD < -60) {
                $set_fragile_while = "UPDATE $room SET `coordsW` = `coordsW` + '$moveFragileW', `coordsD` = 0, `coordsH` = `coordsH` + '$moveFragileH', `tick` = `tick` + 1, `minusPlusW` = '$mpMoveW', `mpChange` = 0 WHERE `whatIsThis` = '1721482274imagepng038fd5aeb362075ee5a6bdc8b304beb9.png.webp' AND `program` = '$meIam';"; }
        */
        if (!$fleo_pdo->exec($set_fragile_while)) { echo "database error 1";  }
        
        usleep(1000000);
        
        if ($row["program"] !== $meIam) {
            $goBaby = 0;
        }
        }
        die();
} 