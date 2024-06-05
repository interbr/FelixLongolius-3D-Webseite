<?php

if (isset($_POST["doing"])) {
    if ($_POST["doing"] == 2) {
        exec('php ' . $fleoPathAbs . '/fleo.at_1.0.0/fleo.at-php/fragiles/Elephant.php 1 '.escapeshellarg($_POST["fragile"]).' > /dev/null &');
    } else if ($_POST["doing"] == 3) {
        exec('php ' . $fleoPathAbs . '/fleo.at_1.0.0/fleo.at-php/fragiles/Jet.php 1 '.escapeshellarg($_POST["fragile"]).' > /dev/null &');
    } else {
        exec('php ' . $fleoPathAbs . '/fleo.at_1.0.0/fleo.at-php/fragiles/Zeppelin.php 1 '.escapeshellarg($_POST["fragile"]) .' '. escapeshellarg($_POST["room"]).' > /dev/null &');
    }
echo "done.", PHP_EOL;
}