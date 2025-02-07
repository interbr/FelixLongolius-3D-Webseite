<?php
require('../../../fleo.at_1.0.0-extras/worldmap/autoload.php');
use GeoIp2\Database\Reader;
$reader = new Reader("../../../fleo.at_1.0.0-extras/worldmap/GeoLite2-City.mmdb");

if (isset($_POST["doing"])) {
    $ip = $_SERVER['REMOTE_ADDR'];
    $record = $reader->city($ip);
    $country = $record->country->name;
    $state = $record->mostSpecificSubdivision->name;
    $city = $record->city->name;
    $latitude = $record->location->latitude;
    $longitude = $record->location->longitude;
    $hostname = gethostbyaddr($ip); 
}

date_default_timezone_set('Europe/Berlin');
require_once ('../../../fleo.at_1.0.0-config/mailer.php');
$mail = new PHPMailer();
$mail->IsSendmail();
$mail->SetFrom('felix@popular.gb.fleo.at','Felix K Longolius');
$mail->AddAddress('f@fleo.at');
$mail->Subject = 'popular.gb.fleo.at ' . $country;
$mail->IsHTML(false);
$mail->CharSet = 'UTF-8';
$mail->Body = $ip.' | '.$hostname.' | '.$country.' | '.$state.' | '.$city.' | '.$latitude.' | '.$longitude.' | '.date('l jS \of F Y H:i:s');
$mail->Send();

echo $latitude, PHP_EOL;
echo $longitude, PHP_EOL;