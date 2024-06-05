<?php
require('../../../fleo.at_1.0.0-extras/worldmap/autoload.php');
use GeoIp2\Database\Reader;
$reader = new Reader("../../../fleo.at_1.0.0-extras/worldmap/GeoLite2-City.mmdb");

if (isset($_GET["doing"])) {
    $ip = $_SERVER['REMOTE_ADDR'];
    $record = $reader->city($ip);
    $latitude = $record->location->latitude;
}

$latitude = number_format(round($latitude, 0), 0);
$latitude = str_replace(".","",$latitude);
$latitude = $latitude * -1;

echo $latitude, PHP_EOL;