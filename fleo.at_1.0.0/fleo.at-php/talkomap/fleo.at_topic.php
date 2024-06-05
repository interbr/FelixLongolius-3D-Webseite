<?php
require_once('../../../fleo.at_1.0.0-config/connection.php');
if ($_POST["doing"] == 1) {
  if (isset($_POST["room"])) {
  $room = "room-" . $_POST["room"];
  $content=addslashes($_POST["content"]);
  $content=htmlspecialchars($content);
  $fleoip = $_SERVER['REMOTE_ADDR'];
  $fleo_pdo->exec("UPDATE `$room` SET `audioStationText`='$content', `robotData`=1, `tick` = tick+1, `tick2`=tick, `ip`=concat(`ip`, ', $fleoip') WHERE `whatIsThis`='1672878952grafikpn25550316286.png.webp'"); //  OR `whatIsThis`='1672879342grafikpn140054396767.png.webp'
  $fleo_pdo->exec("UPDATE `$room` SET `audioImage`='', `ip`=concat(`ip`, ', $fleoip') WHERE `whatIsThis`='1672879342grafikpn140054396767.png.webp'");
  }
}
  if ($_POST["doing"] == 2) {
    if (isset($_POST["room"])) {
    $room = "room-" . $_POST["room"];
    $content=addslashes($_POST["content"]);
    $content=htmlspecialchars($content);
    $fleoip = $_SERVER['REMOTE_ADDR'];
    $fleo_pdo->exec("UPDATE `$room` SET `audioStationText`='$content', `robotData`=2, `tick` = tick+1, `tick2`=tick, `ip`=concat(`ip`, ', $fleoip') WHERE `whatIsThis`='1672878952grafikpn25550316286.png.webp'"); //  OR `whatIsThis`='1672879342grafikpn140054396767.png.webp'
    $fleo_pdo->exec("UPDATE `$room` SET `audioImage`='', `ip`=concat(`ip`, ', $fleoip') WHERE `whatIsThis`='1672879342grafikpn140054396767.png.webp'");
    }
}
if ($_POST["doing"] == 5) {
  if (isset($_POST["room"])) {
  $room = "room-" . $_POST["room"];
  $fleoip = $_SERVER['REMOTE_ADDR'];
  if ($_POST['am'] == "f") {
    if (isset($_POST['coordsW'])) { $buildcoords = -17000; } else { $buildcoords = -17000; }
    if (isset($_POST['coordsD'])) { $builddoords = 0; } else { $builddoords = 0; } }
    else if ($_POST['am'] == "b") {
    if (isset($_POST['coordsW'])) { $buildcoords = -17000; } else { $buildcoords = -17000; }
    if (isset($_POST['coordsD'])) { $builddoords = 0; } else { $builddoords = 0; }
    }
    if (isset($_POST['fleoNum'])) { $buildauthor = $_POST["fleoNum"]; } else { $buildauthor = 'anonymous'; }

    ////////////////////////////   
    $imageSaveTime = time();
    $imageSaveUnique = random_int(1000,999999).random_int(1000,999999);
    $content=addslashes($_POST["content"]);
    $content=htmlspecialchars($content);
    $buildhtml = '<img src="/fleo.at-medien/userImages/1673026069imagepng7364345768.png.webp" alt="deepmonitor.image undescribed" />';
    $buildhtml=addslashes($buildhtml);
    $buildhtml=htmlspecialchars($buildhtml);

    $imageWidth = 600;
    $buildfloor = 0;
    $audText = "This is audio";
    $idSave = "robot-" . $imageSaveTime.$imageSaveUnique;

    $buildobject = 'class="tree fleoAt ';
    $buildobject .= '" style="';
    
        $fleo_pdo->exec("INSERT INTO `$room` (`whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `thisID`, `object`, `name`, `width`, `scriptOn`, `author`, `heikel`, `floor`, `ip`, `isOnline`, `isRobot`, `tick`, `tick2`, `audioStationText`, `robotwork`, `go`) VALUES ('$idSave',1,'$buildcoords', 0, '$builddoords','','$buildobject','$buildhtml','$imageWidth',1,'$buildauthor',1,'$buildfloor','$fleoip',1,8,1,1,'$audText',1,1) ON DUPLICATE KEY UPDATE `onOff`='1',`color`='',`coordsW`='$buildcoords',`coordsH`=0,`coordsD`='$builddoords',`thisID`='',`object`='$buildobject',`name`='$buildhtml',`width`='$imageWidth',`scriptOn`=1,`author`='$buildauthor',`heikel`=1,`whatIsThis`='$idSave',`floor`='$buildfloor',`ip`=CONCAT(`ip`, ', $fleoip'),`isOnline`=1,`isRobot`=8,`robotwork`=1,`go`=1;");

echo $fleo_pdo->lastInsertId();

  $fleo_pdo->exec("UPDATE `$room` SET `audioStationText`='$content', `robotData`='', `tick` = tick+1, `tick2`=tick, `ip`=concat(`ip`, ', $fleoip') WHERE `whatIsThis`='1672878952grafikpn25550316286.png.webp'"); //  OR `whatIsThis`='1672879342grafikpn140054396767.png.webp'
  $fleo_pdo->exec("UPDATE `$room` SET `audioImage`='', `ip`=concat(`ip`, ', $fleoip') WHERE `whatIsThis`='1672879342grafikpn140054396767.png.webp'");

}}
 