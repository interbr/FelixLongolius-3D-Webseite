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
    // echo "hello.", PHP_EOL;
}

// 🔗 Load dependencies
require('../../../fleo.at_1.0.0-config/connection.php');
require('../../../fleo.at_1.0.0/fleo.at-php/edit-php-scripts/vendor/autoload.php');

// 🧪 Set up the sandbox environment
$sandbox = new PHPSandbox\PHPSandbox([
    'allow_output' => true,
    'allow_html_output' => true,
    'capture_output' => true
]);

$sandbox->whitelistFunc([
    'abs', 'max', 'min', 'round', 'floor', 'ceil', 'pow', 'sqrt',
    'intval', 'is_int', 'decbin', 'bindec', 'dechex', 'hexdec', 'rand',
    'range', 'round', 'settype', 'json_encode', 'echo'
]);

// $sandbox->whitelistClass('PDO');
// $sandbox->whitelistClass('PDOException');

$sandbox->blacklistFunc([
    'eval', 'exec', 'shell_exec', 'system', 'passthru',
    'proc_open', 'popen', 'curl_exec', 'curl_multi_exec'
]);

// 🤖 Initialize robot
$meIam = random_int(1000000, 2000000);
$fleo_pdo->exec("UPDATE `$room` SET `program` = '$meIam', `isRobot` = 4, `go` = 1, `play` = 2, `seek` = 0 WHERE `whatIsThis` = '$id';");

// 🔄 Loop setup
$iteration = 0;
$goBaby = 1;

// ⏬ Initial robotData fetch
$query = $fleo_pdo->prepare("SELECT `robotData`, `go` FROM `$room` WHERE `whatIsThis` = :id");
$query->execute(['id' => $id]);
$row = $query->fetch();

$robotCode = html_entity_decode(htmlspecialchars_decode($row["robotData"]));
$goBaby = ($row["go"] === 1) ? 1 : 0;

// 🚀 Execution loop
while ($goBaby) {
    $stmt = $fleo_pdo->prepare("
        SELECT `coordsW`, `coordsH`, `coordsD`, `minusPlusW`, `mpChange`, `play`, `width`, `program`, `go`
        FROM `$room` WHERE `whatIsThis` = :id
    ");
    $stmt->execute(['id' => $id]);
    $data = $stmt->fetch();

    $sandboxVars = [
        'FragileW'      => $data["coordsW"],
        'FragileD'      => $data["coordsD"],
        'FragileH'      => $data["coordsH"],
        'FragileWidth'  => $data["width"],
        'moveFragileW'  => 0,
        'moveFragileD'  => 0,
        'moveFragileH'  => 0,
        'mpMoveW'       => $data["minusPlusW"],
        'mpChange'      => $data["mpChange"],
        'play'          => $data["play"],
        'id'            => $id
    ];

    // 🔐 Inject into sandbox
    foreach ($sandboxVars as $var => $val) {
        $sandbox->defineVar($var, $val);
    }

    // 🧾 Execute sandbox code
    ob_start();
    $sandboxOutput = $sandbox->execute($robotCode);
    // $sandboxOutput = ob_get_clean();

    echo $sandboxOutput;
    // 🔍 Extract variable assignments
    preg_match_all('/\$(\w+)\s*=\s*([\-0-9\.]+)/', $sandboxOutput, $matches);
    foreach ($matches[1] as $i => $name) {
        if (array_key_exists($name, $sandboxVars) && is_numeric($matches[2][$i])) {
            $sandboxVars[$name] = (float) $matches[2][$i];
        }
    }

    // 🧱 Update room database
    $update = $fleo_pdo->prepare("
        UPDATE `$room` SET
            `coordsW` = `coordsW` + :moveFragileW,
            `coordsD` = `coordsD` + :moveFragileD,
            `coordsH` = `coordsH` + :moveFragileH,
            `width` = :FragileWidth,
            `tick` = `tick` + 1,
            `minusPlusW` = :mpMoveW,
            `mpChange` = :mpChange,
            `play` = :play
        WHERE `whatIsThis` = :id
    ");

    $update->execute([
        ':moveFragileW' => (int) $sandboxVars['moveFragileW'],
        ':moveFragileD' => (int) $sandboxVars['moveFragileD'],
        ':moveFragileH' => (int) $sandboxVars['moveFragileH'],
        ':FragileWidth' => (int) $sandboxVars['FragileWidth'],
        ':mpMoveW'      => (int) $sandboxVars['mpMoveW'],
        ':mpChange'     => (int) $sandboxVars['mpChange'],
        ':play'         => (int) $sandboxVars['play'],
        ':id'           => $id
    ]);

    usleep(1000000);
    $iteration++;

    if ($iteration > 49 || $data["program"] !== $meIam) {
        $fleo_pdo->exec("UPDATE `$room` SET `go` = 0 WHERE `whatIsThis` = '$id';");
        exec('php ' . $fleoPathAbs . '/fleo.at_1.0.0/fleo.at-php/fragiles/easyFragile.php 1 ' . $id . ' ' . $room . ' > /dev/null &');
        $goBaby = 0;
    }

    // echo "done.", PHP_EOL;
}

exit();
