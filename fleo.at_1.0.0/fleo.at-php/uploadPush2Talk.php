<?php
require_once('../../fleo.at_1.0.0-config/connection.php');
$filename = $_POST['fname'];
if (isset($_POST["streamsNum"])) { $streamsNum = $_POST['streamsNum']; } else { $streamsNum = 1; }
$inputText = "";
for ($i = 0; $i < $streamsNum; $i++) {
    $music = substr($_POST['data'.$i], strpos($_POST['data'.$i], ",") + 1);
    $decodedData = base64_decode($music);
    $fp = fopen($fleoPathAbs . '/fleo.at_1.0.0/fleo.at-medien/audioStations/concat-'.$i.'-'.$filename, 'wb');
    fwrite($fp, $decodedData);
    fclose($fp);
    $output = shell_exec('/usr/bin/ffmpeg -i ' . $fleoPathAbs . '/fleo.at_1.0.0/fleo.at-medien/audioStations/concat-'.$i.'-'.$filename.' -vn -ar 48000 -ac 2 -b:a 192k ' . $fleoPathAbs . '/fleo.at_1.0.0/fleo.at-medien/audioStations/concat-'.$i.'-'.$filename.'.mp3'); //    2>&1
    // echo $output;
    $inputText .= '-i ' . $fleoPathAbs . '/fleo.at_1.0.0/fleo.at-medien/audioStations/concat-'.$i.'-'.$filename.'.mp3 ';
    // echo $inputText;
    }
    $weights = "1";
    for ($i = 0; $i < ($streamsNum); $i++) { $weights .= " 1"; }
    $output2 = shell_exec('/usr/bin/ffmpeg '.$inputText.' -filter_complex amix=inputs='.$streamsNum.':duration=longest:dropout_transition=0:weights="'.$weights.'" -vn -ar 48000 -ac 2 -b:a 192k ' . $fleoPathAbs . '/fleo.at_1.0.0/fleo.at-medien/audioStations/'.$filename.'.mp3');  //   2>&1
    // echo $output2;
    $lastAudio = '/fleo.at-medien/audioStations/'.$filename.'.mp3';
    echo $lastAudio;
