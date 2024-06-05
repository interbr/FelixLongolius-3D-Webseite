<?php
require('../../../fleo.at_1.0.0-extras/worldmap/autoload.php');
use GeoIp2\Database\Reader;
$reader = new Reader("../../../fleo.at_1.0.0-extras/worldmap/GeoLite2-City.mmdb");

if (isset($_GET["doing"])) {
    $ip = $_SERVER['REMOTE_ADDR'];
    $record = $reader->city($ip);
    $country = $record->country->name;
    $state = $record->mostSpecificSubdivision->name;
    $city = $record->city->name;
}

echo "Country: " . $country . "<br />Nearer: " . $state . "<br />City: " . $city . "<br />IP: " . $ip, PHP_EOL;