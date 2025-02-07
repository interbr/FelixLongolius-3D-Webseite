<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
  
require '../../fleo.at_1.0.0-config/Exception.php';
require '../../fleo.at_1.0.0-config/PHPMailer.php';
require '../../fleo.at_1.0.0-config/SMTP.php';

date_default_timezone_set('Europe/Berlin');

session_write_close();
ignore_user_abort(true);
ini_set('output_buffering', 'Off');

ini_set('zlib.output_compression', 'Off');
header("Cache-Control: no-store, no-cache");
header("Content-Type: text/event-stream");
header('X-Accel-Buffering: no');

header('Content-Encoding: none');
require('../../fleo.at_1.0.0-config/connection.php');

require('../../fleo.at_1.0.0-extras/worldmap/autoload.php');
use GeoIp2\Database\Reader;
$reader = new Reader("../../fleo.at_1.0.0-extras/worldmap/GeoLite2-City.mmdb");

if (isset($_GET['mobile'])) { $presenceRate = 250000; } else { $presenceRate = 125000; }

$ip = $_SERVER['REMOTE_ADDR'];
if(isset($_SERVER['HTTP_REFERER'])) { $entryPoint = $_SERVER['HTTP_REFERER']; } else { $entryPoint = "direct (no referrer)"; }
$record = $reader->city($ip);
$country = $record->country->name;
$state = $record->mostSpecificSubdivision->name;
$city = $record->city->name;
$la = $record->location->latitude;
$lo = $record->location->longitude;
$hostname = gethostbyaddr($ip);

$set_active_fleo_data_old = 0;
$person_latest_info_old = 0;
$kindOfGuy_old = 0;

if (isset($_GET['client'])) { $self = $_GET['client']; } else { $self = "abc"; };

$fleo_pdo->exec("INSERT INTO thefleos (active, `online`, fleoNum, lettersOrVideo, fleoip) VALUES (1, 0, '$self', 0, '$ip') ON DUPLICATE KEY UPDATE active=1, `online`=0,lettersOrVideo=0, fleoip='$ip'");

$set_person = $fleo_pdo->prepare("SELECT `number`, `name`, `color`, `room`, `uW`, `uH`, `uD`, `turn`, `turnX`, `turnZ`, `conn`, `extra`, `extraContent`, `videoSize`, `audioSes`, `timestamp`, `TA`, `online`, `isAdmin`, `kindOfGuy` FROM `present` WHERE `active` = '1' AND `number` != '$self' AND (`online`=1 OR `online`=2) ORDER BY id ASC;");
$set_person_info = $fleo_pdo->prepare("SELECT `number`, `name`, `color`, `room`, `uW`, `uH`, `uD`, `turn`, `turnX`, `turnZ`, `conn`, `extra`, `extraContent`, `videoSize`, `audioSes`, `timestamp`, `TA`, `online`, `isAdmin`, `kindOfGuy` FROM `present` WHERE `active` = '1' AND `number` = '$self' AND (`online`=1 OR `online`=2) ORDER BY id ASC;");
$set_active_fleo = $fleo_pdo->prepare("SELECT DISTINCT fleoNum FROM thefleos WHERE `online`=1");

echo "github.popular.gb.fleo.at presenceSystem", PHP_EOL;
echo PHP_EOL;

$person_latest_old = 0;
$messageID = 1;
$countBasic = 0;

try {
	$fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$write_setOnline_query = "UPDATE `present` SET `online`=1 WHERE `number`='$self';";
	$fleo_pdo->exec($write_setOnline_query);
  } catch(PDOException $e) {
	echo "<br>" . $e->getMessage();
  }

$get_name = $fleo_pdo->prepare("SELECT `name` FROM `present` WHERE `number`='$self'");
$get_name->execute();
$get_name_data = $get_name->fetch(PDO::FETCH_ASSOC);

$subject = $sitename . ' connect ('.date('H:i:s').') | '.$get_name_data["name"].' | '.$country.' | '.$city.' | '.$entryPoint;

$mail = new PHPMailer();
$mail->SMTPDebug = 0; 
$mail->isSMTP(); 
$mail->Host = $mailhost; 
$mail->SMTPAuth = true; 
$mail->Username = $mailusername; 
$mail->Password = $mailpassword;
$mail->SMTPSecure = 'ssl';
$mail->Port = 465; 
$mail->SetFrom($mailfromline);
$mail->AddAddress($mailrecipient);
$mail->Subject = $subject;
$mail->IsHTML(false);
$mail->CharSet = 'UTF-8';
$mail->Body = $ip.' | '.$hostname.' | '.$get_name_data["name"].' | '.$country.' | '.$state.' | '.$city.' | '.$la.' | '.$lo.' | '.$entryPoint.' | '.$_SERVER['HTTP_USER_AGENT'].' | '.date('l jS \of F Y H:i:s');
$mail->Send(); 

$set_person_info->execute();
					$set_person_info_datas = $set_person_info->fetchAll(PDO::FETCH_OBJ);

					if ($set_person_info_datas !== $person_latest_info_old) {
						foreach ($set_person_info_datas as $set_person_info_data) {
							if ($set_person_info_data->kindOfGuy !== $kindOfGuy_old) {
							if (!isset(${'timestamp' . $set_person_info_data->number})) { ${'timestamp' . $set_person_info_data->number} = 0; }
							if ($set_person_info_data !== "null") {
							if (${'timestamp' . $set_person_info_data->number} < $set_person_info_data->timestamp) {
							${'timestamp' . $set_person_info_data->number} = $set_person_info_data->timestamp;
							$messageChange = $set_person_info_data;
							echo 'id: ' . $messageID . '', PHP_EOL;
							echo 'event: person_moves', PHP_EOL;
							echo 'data: [' . json_encode($messageChange) . ']', PHP_EOL;
							echo PHP_EOL;
							$messageID++;
							}
							}
							$kindOfGuy_old = $set_person_info_data->kindOfGuy;
						}
						}
						$person_latest_info_old = $set_person_info_datas;
					
					}

sleep(6);

while (1) {

	if ($countBasic % 250 == 0) {
		echo 't-cup presenceSystem-Ping (every 50 seconds)', PHP_EOL;
		echo PHP_EOL;
	}

	$set_person_info->execute();
	$set_person_info_datas = $set_person_info->fetchAll(PDO::FETCH_OBJ);

	if ($set_person_info_datas !== $person_latest_info_old) {
		foreach ($set_person_info_datas as $set_person_info_data) {
			if ($set_person_info_data->kindOfGuy !== $kindOfGuy_old) {
			if (!isset(${'timestamp' . $set_person_info_data->number})) { ${'timestamp' . $set_person_info_data->number} = 0; }
			if ($set_person_info_data !== "null") {
			if (${'timestamp' . $set_person_info_data->number} < $set_person_info_data->timestamp) {
			${'timestamp' . $set_person_info_data->number} = $set_person_info_data->timestamp;
			$messageChange = $set_person_info_data;
			echo 'id: ' . $messageID . '', PHP_EOL;
			echo 'event: person_moves', PHP_EOL;
			echo 'data: [' . json_encode($messageChange) . ']', PHP_EOL;
			echo PHP_EOL;
			$messageID++;
			}
			}
			$kindOfGuy_old = $set_person_info_data->kindOfGuy;
		}
		}
		$person_latest_info_old = $set_person_info_datas;
	
	}


	$set_person->execute();
	$set_person_datas = $set_person->fetchAll(PDO::FETCH_OBJ);

		if ($set_person_datas !== $person_latest_old) {

                foreach ($set_person_datas as $set_person_data) {
					if (!isset(${'timestamp' . $set_person_data->number})) { ${'timestamp' . $set_person_data->number} = 0; }
                    if ($set_person_data !== "null") {
                    if (${'timestamp' . $set_person_data->number} < $set_person_data->timestamp) {
                    ${'timestamp' . $set_person_data->number} = $set_person_data->timestamp;
                    $messageChange = $set_person_data;
                    echo 'id: ' . $messageID . '', PHP_EOL;
                    echo 'event: person_moves', PHP_EOL;
                    echo 'data: [' . json_encode($messageChange) . ']', PHP_EOL;
                    echo PHP_EOL;
					$messageID++;
                    }
                    }
                }
                $person_latest_old = 2;
                }

                    $set_active_fleo->execute();
                    $set_active_fleo_data = $set_active_fleo->fetchAll(PDO::FETCH_ASSOC);
            
                    if ($set_active_fleo_data !== $set_active_fleo_data_old) {
                        echo 'id: ' . $messageID . '', PHP_EOL;
                        echo 'event: newVideo', PHP_EOL;
                        echo 'data: ' . json_encode($set_active_fleo_data), PHP_EOL;
                        echo PHP_EOL;
                        $set_active_fleo_data_old = $set_active_fleo_data;
						$messageID++;
                    }

					

while (ob_get_level() > 0) {
    ob_end_flush();
	}
	flush();

	if(connection_status() != CONNECTION_NORMAL) {
		break;
		}

	$countBasic++;

	usleep($presenceRate);
}


	$defaultProfile = "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";
	
	
			try {
				$fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				$write_setOnline_query = "UPDATE `present` SET `online`=2, `conn`=0 WHERE `number`='$self';";
				$fleo_pdo->exec($write_setOnline_query);
				sleep(2);
				$write_setOnline_query2 = "UPDATE `present` SET `online`=3 WHERE `number`='$self';";
				$fleo_pdo->exec($write_setOnline_query2);
				$fleoboyngINSquery = "UPDATE `thefleos` SET `online`=0,`defleos`='$defaultProfile' WHERE fleoNum='$self' AND `online`=1;";
				$fleo_pdo->exec($fleoboyngINSquery);
	
				$get_name->execute();
				$get_name_data = $get_name->fetch(PDO::FETCH_ASSOC);
	
				$subject = $sitename . ' disconnect ('.date('H:i:s').') | '.$get_name_data["name"].' | ('.$countBasic.' dits) | '.$country.' | '.$city.' | '.$entryPoint;
	
				$mail = new PHPMailer();
				$mail->SMTPDebug = 0; 
				$mail->isSMTP(); 
				$mail->Host = $mailhost; 
				$mail->SMTPAuth = true; 
				$mail->Username = $mailusername; 
				$mail->Password = $mailpassword;
				$mail->SMTPSecure = 'ssl';
				$mail->Port = 465; 
				$mail->SetFrom($mailfromline);
				$mail->AddAddress($mailrecipient);
				$mail->Subject = $subject;
				$mail->IsHTML(false);
					$mail->CharSet = 'UTF-8';
					$mail->Body = $ip.' | '.$hostname.' | '.$get_name_data["name"].' | '.$country.' | '.$state.' | '.$city.' | '.$la.' | '.$lo.' | '.$entryPoint.' | '.$_SERVER['HTTP_USER_AGENT'].' | '.date('l jS \of F Y H:i:s');
					$mail->Send(); 
			  } catch(PDOException $e) {
				echo "<br>" . $e->getMessage();
			  }
			