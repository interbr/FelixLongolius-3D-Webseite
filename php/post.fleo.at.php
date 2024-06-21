<?php
if ($_POST["doing"] == 1) {
// echo "doing 1";
$slotFound = 0;
$occupied = 1;
$imageReturn = "[{";
$curTime = time();
$fleoAudioOld = "";
$data = 'data:image/png;base64,AAAFBfj42Pj4';
$fleoip = $_SERVER['REMOTE_ADDR'];
    // require('connection.php');
    if ($_POST['inputConvolutNumber'] == 999) {

        // $get_icn = $cam_pdo->query("SELECT `inputConvolutNumber` FROM `camFleoAts` WHERE `active` = 1 ORDER BY id ASC"); //  LIMIT 1
        while ($slotFound == 0 && $occupied == 1) {
        $inputConvolutNumber = random_int(1000,9999);
        if (file_exists("../videoaudio/" . $inputConvolutNumber . ".txt")) { $occupied = 1; } else { $occupied = 0; }
        // $get_icn->execute();
        // $get_icn_datas = $get_icn->fetchAll(PDO::FETCH_OBJ);
        // foreach ($get_icn_datas as $get_icn_data) {
        // if ($get_icn_data->inputConvolutNumber !== $inputConvolutNumber) { $occupied = 0; } else { $occupied = 1; }
        }
        if ($occupied == 0) { 
            $slotFound = 1;
            $data = $_POST['boingy'];
            if (isset($_POST['fleoAudio']) && $_POST['fleoAudio'] !== "empty") { 
            $fleoAudio = $_POST['fleoAudio'];
            file_put_contents("../videoaudio/" . $inputConvolutNumber . ".txt", 
            '"inputConvolutNumber":"' . $inputConvolutNumber . '","boingy":"' . $data . '","fleoAudio":"' . $fleoAudio . '"},{'
            );
            // $dataWrite = "INSERT INTO `camFleoAts` (`inputConvolutNumber`, `active`, `useTimestamp`, `boingy`, `fleoAudio`, `fleoip`) VALUES ('$inputConvolutNumber', 1, '$curTime', '$data', '$fleoAudio', '$fleoip')";
        } else {
            file_put_contents("../videoaudio/" . $inputConvolutNumber . ".txt", 
            '"inputConvolutNumber":"' . $inputConvolutNumber . '","boingy":"' . $data . '"},{'
            );
            // $dataWrite = "INSERT INTO `camFleoAts` (`inputConvolutNumber`, `active`, `useTimestamp`, `boingy`, `fleoip`) VALUES ('$inputConvolutNumber', 1, '$curTime', '$data', '$fleoip')";

            }
        }
} else {
    $inputConvolutNumber = intval($_POST['inputConvolutNumber']);
    $slotFound = 1;
    $data = $_POST['boingy'];
    if (isset($_POST['fleoAudio']) && $_POST['fleoAudio'] !== "empty") { 
        $fleoAudio = $_POST['fleoAudio'];
        file_put_contents("../videoaudio/" . $inputConvolutNumber . ".txt", 
            '"inputConvolutNumber":"' . $inputConvolutNumber . '","boingy":"' . $data . '","fleoAudio":"' . $fleoAudio . '"},{'
            );
        // $dataWrite = "INSERT INTO `camFleoAts` (`inputConvolutNumber`, `active`, `useTimestamp`, `boingy`, `fleoAudio`, `fleoip`) VALUES ('$inputConvolutNumber', 1, '$curTime', '$data', '$fleoAudio', '$fleoip') ON DUPLICATE KEY UPDATE `active`=1, `useTimestamp`='$curTime', `boingy`='$data', `fleoAudio`='$fleoAudio', fleoip='$fleoip'"; 
    } else {
        file_put_contents("../videoaudio/" . $inputConvolutNumber . ".txt", 
        '"inputConvolutNumber":"' . $inputConvolutNumber . '","boingy":"' . $data . '"},{'
        );
        // $dataWrite = "INSERT INTO `camFleoAts` (`inputConvolutNumber`, `active`, `useTimestamp`, `boingy`, `fleoip`) VALUES ('$inputConvolutNumber', 1, '$curTime', '$data', '$fleoip') ON DUPLICATE KEY UPDATE `active`=1, `useTimestamp`='$curTime', `boingy`='$data', fleoip='$fleoip'";

        }
    
}

// $composite = new Imagick();
// try {
//     $cam_pdo->exec($dataWrite);
$imageNum = 0;
if (is_dir("../videoaudio")) {
    if ($dh = opendir("../videoaudio")) {
        while (($file = readdir($dh)) !== false) {
            if ($file == '.' or $file == '..') continue;

            $filepath = "../videoaudio/" . $file;
            $last_modified_time = filemtime($filepath);
            $current_time = time();

            // Check if the last modification was made within the last 10 seconds
            if (($current_time - $last_modified_time) <= 10) {
                $contents = file_get_contents("../videoaudio/" . $file, true);
                $imageReturn .= $contents;
                $imageNum++;
            } else {
                rename($filepath,"../oldvideoaudio/" . $file);
            }
        }
        closedir($dh);
        $imageReturn .= '"inputConvolutNumberSelf":"' . $inputConvolutNumber . '","imageAmount":"' . $imageNum . '"}]';
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($imageReturn), PHP_EOL;
    }
} 
}
    // $get_mosaic = $cam_pdo->query("SELECT `inputConvolutNumber`, `boingy`, `fleoAudio`, `useTimestamp` FROM `camFleoAts` WHERE `active` = 1 AND camTimestamp > TIME(DATE_SUB(NOW(), INTERVAL 10 SECOND)) ORDER BY id ASC LIMIT 6");
    // $get_mosaic->execute();
    // $get_mosaic_datas = $get_mosaic->fetchAll(PDO::FETCH_OBJ);
    // $mosaicTile = [];



    
    // foreach ($get_mosaic_datas as $get_mosaic_data) {


//if ($_POST['fleoAudio'] !== "empty") {
        // ${'mosaicTile' . $imageNum} = new Imagick();
        // ${'mosaicTile' . $imageNum}->readImageBlob(base64_decode($get_mosaic_data->boingy));
        // $composite->addImage(${'mosaicTile' . $imageNum});
        /* $imageReturn .= '"inputConvolutNumber":"' . $get_mosaic_data->inputConvolutNumber . '","boingy":"' . $get_mosaic_data->boingy . '","fleoAudio":"' . $get_mosaic_data->fleoAudio . '"},{'; 
        $imageNum++;
} else {
    $imageReturn .= '"inputConvolutNumber":"' . $get_mosaic_data->inputConvolutNumber . '","boingy":"' . $get_mosaic_data->boingy . '"},{'; 

        $imageNum++;
}
    }
    // $montage = $composite->montageImage( new imagickdraw(), "3x2+0+0", "320x240+4+3>", imagick::MONTAGEMODE_UNFRAME, "0x0+3+3" );
    // $composite->destroy();
    // $montage->setImageFormat("jpeg");
    // $montage = "data:image/jpeg;base64," . base64_encode($montage);
    // $sendArray = '' . $imageReturn . '"inputConvolutNumber"=>"' . $inputConvolutNumber . '"';
    
    $imageReturn .= '"inputConvolutNumber":"' . $inputConvolutNumber . '","imageAmount":"' . $imageNum . '"}]';
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($imageReturn), PHP_EOL;
    // $montage->destroy();
  } catch(PDOException $e) {
    echo "<br>" . $e->getMessage();
  }
}*/