<?php
session_write_close();
ignore_user_abort(true);

header('Content-Type: multipart/x-mixed-replace;boundary=--fleoats');
header('Cache-Control: private, no-cache, no-store, max-age=0');
header('Connection: close');

require('../../fleo.at_1.0.0-config/connection.php');

$rate = 1;
$playRate = 250000;
$results_old_hash = '';
$emptyCount = 0;

if (isset($_GET['video'])) {
    $RfleoNum = $_GET['video'];
    $viewer = $_GET['viewer'] ?? 'notSet';
    $rateGet = $_GET['rate'] ?? 'notSet';

    $rateMap = ['rate0' => 0, 'rate1' => 1, 'rate2' => 2, 'rate3' => 3, 'rate4' => 4];
    $useDynamicRate = !array_key_exists($rateGet, $rateMap);

    $sql = $fleo_pdo->prepare("SELECT defleos, defleosA FROM thefleos WHERE `fleoNum` = :fleoNum");
    $sql->bindParam(':fleoNum', $RfleoNum, PDO::PARAM_STR);

    while (true) {
        $sql->execute();
        $results = $sql->fetchAll(PDO::FETCH_OBJ);

        if (!$results) {
            $emptyCount++;
            if ($emptyCount > 20) break; // Optional: exit after 20 empty pulls
        } else {
            $emptyCount = 0;
        }

        // Serialize to detect meaningful changes
        $results_hash = md5(json_encode($results));

        if ($results_hash !== $results_old_hash) {
            foreach ($results as $result) {
                echo "--fleoats\r\n";
                echo "Content-Type: image/jpeg\r\n\r\n";
                imagejpeg(imagecreatefromstring(base64_decode($result->defleos)), null, 92);
                echo "\r\n";

                // Unabhängig von Änderungen neu berechnen
                if ($useDynamicRate && !empty($result->defleosA)) {
                    $audience = json_decode($result->defleosA);
                    if (json_last_error() === JSON_ERROR_NONE && isset($audience->$viewer)) {
                        $rate = $audience->$viewer;
                    } else {
                        $rate = 2;
                    }
                } elseif (isset($rateMap[$rateGet])) {
                    $rate = $rateMap[$rateGet];
                } else {
                    $rate = 2;
                }

                switch ($rate) {
                    case 0: $playRate = 1000000; break;
                    case 1: $playRate = 500000; break;
                    case 2: $playRate = 250000; break;
                    case 3: $playRate = 125000; break;
                    case 4: $playRate = 62500; break;
                    default: $playRate = 250000;
                }

            }

            $results_old_hash = $results_hash;
        }

        while (ob_get_level() > 0) ob_end_flush();
        flush();

        if (connection_aborted()) break;

        usleep($playRate);
    }
}