<?php
require('../../../fleo.at_1.0.0-extras/worldmap/autoload.php');
use GeoIp2\Database\Reader;
$reader = new Reader("../../../fleo.at_1.0.0-extras/worldmap/GeoLite2-City.mmdb");

if (isset($_GET["doing"])) {
    $ip = $_SERVER['REMOTE_ADDR'];
    $record = $reader->city($ip);
    $longitude = $record->location->longitude;
}

$longitude = number_format(round($longitude, 3), 3);
$longitude = str_replace(".","",$longitude);
$longitude = $longitude * -1;

echo $longitude, PHP_EOL;