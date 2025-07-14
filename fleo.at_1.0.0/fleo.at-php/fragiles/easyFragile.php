<?php

// Input handling
if (isset($argc) && $argc > 1) {
    if ($argv[1] == "1") {
        $id = $argv[2];
        $room = $argv[3];
    }
} elseif (isset($_POST["doing"])) {
    $id = $_POST["fragile"];
    $room = "room-" . $_POST["room"];
    echo "hello.";
}

require('../../../fleo.at_1.0.0-config/connection.php');
require('../../../fleo.at_1.0.0/fleo.at-php/edit-php-scripts/vendor/autoload.php');

$sandbox = new PHPSandbox\PHPSandbox();
$sandbox->setOption('allow_output', true);
$sandbox->setOption('allow_html_output', true);
$sandbox->setOption('capture_output', true); // not needed for solution 1

$sandbox->whitelistFunc('abs', 'max', 'min', 'round', 'floor', 'ceil', 'pow', 'sqrt', 'intval', 'is_int', 'decbin', 'bindec', 'dechex', 'hexdec', 'range', 'settype', 'json_encode');
$sandbox->whitelistClass('PDO');
$sandbox->whitelistClass('PDOException');
$sandbox->blacklistFunc('eval', 'exec', 'shell_exec', 'system', 'passthru', 'proc_open', 'popen', 'curl_exec', 'curl_multi_exec');

// Initialize robot
$meIam = random_int(1000000, 2000000);
$fleo_pdo->exec("UPDATE `$room` SET `program` = '$meIam', `isRobot`=4, `go`=1, `play`=2, `seek` = 0 WHERE `whatIsThis` = '$id';");

$i = 0;
$goBaby = 1;

// Initial robotData fetch
$get_fragile = $fleo_pdo->prepare("SELECT `robotData`, `go` FROM `$room` WHERE `whatIsThis` = '$id';");
$get_fragile->execute();
$row = $get_fragile->fetch();

$robotDataHot = html_entity_decode(htmlspecialchars_decode($row["robotData"]));
$goBaby = ($row["go"] == 1) ? 1 : 0;

while ($goBaby == 1) {
    $get_fragile = $fleo_pdo->prepare("SELECT `coordsW`, `coordsH`, `coordsD`, `minusPlusW`, `mpChange`, `play`, `width`, `program`, `go` FROM `$room` WHERE `whatIsThis` = '$id';");
    $get_fragile->execute();
    $row = $get_fragile->fetch();

    $FragileW = $row["coordsW"];
    $FragileD = $row["coordsD"];
    $FragileH = $row["coordsH"];
    $FragileWidth = $row["width"];
    $mpMoveW = $row["minusPlusW"];
    $mpChange = $row["mpChange"];
    $play = $row["play"];
    $amIMe = $row["program"];
    $goBaby = ($row["go"] == 1) ? 1 : 0;

    // ✅ 1. Define all relevant sandbox variables
$sandbox->defineVar('FragileW', $FragileW);
$sandbox->defineVar('FragileD', $FragileD);
$sandbox->defineVar('FragileH', $FragileH);
$sandbox->defineVar('FragileWidth', $FragileWidth);

$sandbox->defineVar('moveFragileW', 0);
$sandbox->defineVar('moveFragileD', 0);
$sandbox->defineVar('moveFragileH', 0);

$sandbox->defineVar('mpMoveW', $mpMoveW);
$sandbox->defineVar('mpChange', $mpChange);
$sandbox->defineVar('play', $play);
$sandbox->defineVar('id', $id);

// ✅ 2. Wrap `$robotDataHot` to produce JSON
$robotDataHotWrapped = $robotDataHot . "\n" .
    "echo json_encode([
        'moveFragileW' => \$moveFragileW,
        'moveFragileD' => \$moveFragileD,
        'moveFragileH' => \$moveFragileH,
        'FragileWidth' => \$FragileWidth,
        'mpMoveW' => \$mpMoveW,
        'mpChange' => \$mpChange,
        'play' => \$play,
        'id' => \$id
    ]);";

ob_start(); // Start output buffering
$sandbox->execute($robotDataHot); // This code should echo JSON
$output = ob_get_clean(); // Capture and clean the buffer
$vars = json_decode($output, true); // Parse the output


// ✅ 4. Apply parsed values safely (with fallback defaults)
$moveFragileW = $vars['moveFragileW'] ?? 0;
$moveFragileD = $vars['moveFragileD'] ?? 0;
$moveFragileH = $vars['moveFragileH'] ?? 0;
$FragileWidth = $vars['FragileWidth'] ?? $FragileWidth;
$mpMoveW      = $vars['mpMoveW'] ?? $mpMoveW;
$mpChange     = $vars['mpChange'] ?? $mpChange;
$play         = $vars['play'] ?? $play;
$id           = $vars['id'] ?? $id;

$set_fragile_while = "UPDATE `$room` SET `coordsW` = `coordsW` + :moveFragileW, `coordsD` = `coordsD` + :moveFragileD, `coordsH` = `coordsH` + :moveFragileH, `width` = :FragileWidth, `tick` = `tick` + 1, `minusPlusW` = :mpMoveW, `mpChange` = :mpChange, `play` = :play WHERE `whatIsThis` = :id;"; 
        
$stmt = $fleo_pdo->prepare($set_fragile_while);

// ✅ 5. Bind values to SQL statement
$stmt->bindValue(':moveFragileW', $moveFragileW, PDO::PARAM_INT);
$stmt->bindValue(':moveFragileD', $moveFragileD, PDO::PARAM_INT);
$stmt->bindValue(':moveFragileH', $moveFragileH, PDO::PARAM_INT);
$stmt->bindValue(':FragileWidth', $FragileWidth, PDO::PARAM_INT);
$stmt->bindValue(':mpMoveW', $mpMoveW, PDO::PARAM_INT);
$stmt->bindValue(':mpChange', $mpChange, PDO::PARAM_INT);
$stmt->bindValue(':play', $play, PDO::PARAM_INT);
$stmt->bindValue(':id', $id, PDO::PARAM_STR);

// ✅ 6. Execute the update
$stmt->execute();

    usleep(1000000);
    $i++;

    if ($i > 79 || $amIMe !== $meIam) {
        $fleo_pdo->exec("UPDATE `$room` SET `go`=0 WHERE `whatIsThis` = '$id';");
        // exec('php ' . $fleoPathAbs . '/fleo.at_1.0.0/fleo.at-php/fragiles/easyFragile.php 1 ' . $id . ' ' . $room . ' > /dev/null &');
        $goBaby = 0;
    }

    echo "done?", PHP_EOL;
}

exit("easyFragile.php exit");