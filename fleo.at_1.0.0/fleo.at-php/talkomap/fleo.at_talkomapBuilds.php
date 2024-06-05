<?php
require_once('../../../fleo.at_1.0.0-config/connection.php');
if ($_POST["doing"] == 8) {
  if (isset($_POST["room"])) {
  $room = "room-" . $_POST["room"];
  $currentRobot = $_POST["currentRobot"];
  $content=addslashes($_POST["content"]);
  $content=htmlspecialchars($content);
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
    $imageSaveUnique = random_int(1000,1000000).random_int(1000,1000000);

    $buildhtml=$content;
    $imageWidth = 600;
    $buildfloor = 0;
    $audText = "This is audio";
    $idSave = "robot-" . $imageSaveTime.$imageSaveUnique;

    $buildobject = 'class="tree fleoAt ';
    $buildobject .= '" style="';
    try {
    $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $save_build_query = "UPDATE `$room` SET `onOff`='1',`color`='',`coordsW`='$buildcoords',`coordsH`=0,`coordsD`='$builddoords',`thisID`='',`object`='$buildobject',`name`='$buildhtml',`width`='$imageWidth',`scriptOn`=1,`author`='$buildauthor',`heikel`=1,`whatIsThis`='$idSave',`floor`='$buildfloor',`ip`=CONCAT(`ip`, ', $fleoip'),`isOnline`=1,`isRobot`=8,`robotwork`=1, `tick` = tick+1, `tick2`=tick WHERE `id`='$currentRobot';";
    $fleo_pdo->exec($save_build_query);
    } catch (PDOException $e) {
    echo "<br>" . $e->getMessage();
    }
    echo $fleo_pdo->lastInsertId();
}}