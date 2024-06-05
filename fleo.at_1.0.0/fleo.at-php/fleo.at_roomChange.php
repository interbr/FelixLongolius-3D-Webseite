<?php
require('../../fleo.at_1.0.0-config/connection.php');
if (isset($_POST['doing'])) {
    $number = htmlspecialchars($_POST['number'], ENT_QUOTES);
    if ($_POST['doing'] == 1) {
        $fleo_pdo->prepare("UPDATE present SET tabula=1 WHERE `number`='$number'")->execute();
    }
    if ($_POST['doing'] == 2) {
        $newRoom = htmlspecialchars($_POST['room'], ENT_QUOTES);
        $roomCreate = "room-" . $newRoom;
        if($fleo_pdo->query("SHOW TABLES LIKE '$roomCreate'")->rowCount() == 0) {
            $checkAdmin = $fleo_pdo->prepare("SELECT `isAdmin` FROM `present` WHERE `number`='$number'");
            $checkAdmin->execute();
            $checkAdminResult = $checkAdmin->fetchColumn();
            if ($checkAdminResult > 0) {
            $fleo_pdo->prepare("CREATE TABLE `$roomCreate` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `whatIsThis` varchar(255) NOT NULL,
 `onOff` tinyint(4) DEFAULT NULL,
 `color` varchar(30) DEFAULT NULL,
 `coordsW` int(20) DEFAULT NULL,
 `coordsH` int(20) DEFAULT NULL,
 `coordsD` int(20) DEFAULT NULL,
 `thisID` varchar(255) DEFAULT NULL,
 `object` longtext DEFAULT NULL,
 `name` longtext DEFAULT NULL,
 `width` int(9) DEFAULT NULL,
 `script` mediumtext DEFAULT NULL,
 `scriptOn` tinyint(1) DEFAULT NULL,
 `author` varchar(11) DEFAULT NULL,
 `audioStationText` longtext DEFAULT '\'This is audio\'',
 `audioImage` longtext DEFAULT NULL,
 `play` int(1) DEFAULT NULL,
 `seek` varchar(20) DEFAULT NULL,
 `lettercoins` mediumtext DEFAULT ' ',
 `heikel` int(11) DEFAULT NULL,
 `isRobot` int(1) DEFAULT NULL,
 `robotwork` int(2) DEFAULT NULL,
 `robotData` mediumtext DEFAULT NULL,
 `program` int(7) DEFAULT NULL,
 `tick` int(20) DEFAULT 1,
 `tick2` int(20) DEFAULT 1,
 `go` int(1) DEFAULT NULL,
 `minusPlusW` int(1) DEFAULT 0,
 `mpChange` int(11) DEFAULT 0,
 `floor` varchar(5) DEFAULT NULL,
 `ip` longtext DEFAULT NULL,
 `isOnline` int(1) DEFAULT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1645 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci")->execute();
        }
        sleep(3);
        $fleo_pdo->prepare("UPDATE present SET tabula=2, room='$newRoom' WHERE `number`='$number'")->execute();
    } else {
        $fleo_pdo->prepare("UPDATE present SET tabula=2, room='$newRoom' WHERE `number`='$number'")->execute();
    }
}
}