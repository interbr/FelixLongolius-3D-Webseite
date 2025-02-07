<?php
header("Cache-Control: no-cache");
header("Content-Type: text/event-stream");
header('X-Accel-Buffering: no');
require_once('../../fleo.at_1.0.0-config/connection.php');
$showAdmin = 0;
$isAdmin = 0;
$postIs = 0;
if (isset($_GET['doing'])) {
    if ($_GET['doing'] == 0) {
    $postnumber = $_GET['spacenumber'];
    if (strlen($postnumber) == 10) {
        $postIs = 1;
        $comparePost = $postnumber;
    }
    if ($postnumber == "3082e56c76" || $postnumber == "tower7qkr3jvxk") {
        $postIs = 1;
        $showAdmin = 1; 
    }
}
if (isset($_GET['mobile'])) { $worldRate = 250000; } else { $worldRate = 250000; }
}
$getRoom = $fleo_pdo->prepare("SELECT `room` FROM `present` WHERE `number`='$postnumber'");
$getRoom->execute();
$room = $getRoom->fetchColumn();
$roomToQuery = "room-" . $room;
if ($roomToQuery == "room-") { $roomToQuery = "room-home"; }
$get_user = $fleo_pdo->query("SELECT isAdmin FROM `present` WHERE `number` = '$comparePost' ORDER BY id ASC LIMIT 1");
$get_user->execute();
$get_user_datas = $get_user->fetchAll(PDO::FETCH_OBJ);
foreach ($get_user_datas as $get_user_data) {
  $isAdmin = $get_user_data->isAdmin;
}
$set_world2 = $fleo_pdo->prepare("SELECT `id`, `whatIsThis`, `onOff`, `color`, `coordsW`, `coordsH`, `coordsD`, `thisID`, `object`, `name`, `width`, `script`, `scriptOn`, `author`, `heikel`, `isRobot`, `robotwork`, `robotData`, `program`, `tick`, `tick2`, `go`, `minusPlusW`, `mpChange`, `floor`, `isOnline`, `audioStationText`, `audioImage`, `play`, `seek`, `lettercoins` FROM `$roomToQuery` WHERE (onOff = '1' AND isOnline = '1') OR (onOff = '1' AND isOnline = '2' AND author = '$comparePost') ORDER BY id ASC");
if ($isAdmin > 0) {
$set_world2 = $fleo_pdo->prepare("SELECT `id`, `whatIsThis`, `onOff`, `color`, `coordsW`, `coordsH`, `coordsD`, `thisID`, `object`, `name`, `width`, `script`, `scriptOn`, `author`, `heikel`, `isRobot`, `robotwork`, `robotData`, `program`, `tick`, `tick2`, `go`, `minusPlusW`, `mpChange`, `floor`, `isOnline`, `audioStationText`, `audioImage`, `play`, `seek`, `lettercoins` FROM `$roomToQuery` WHERE (onOff = '1' AND isOnline = '1') OR (onOff = '1' AND isOnline = '2') ORDER BY id ASC");
}
$serverTime = time();

$messageID = 1;

echo "us.in.fleo.at world", PHP_EOL;
echo PHP_EOL;

$allFragiles = array();

$set_world2->execute();
		$get_fragiles_datas = $set_world2->fetchAll(PDO::FETCH_OBJ);
        if ($get_fragiles_datas !== "null") {
                foreach ($get_fragiles_datas as $get_fragiles_data) {
                    if ($get_fragiles_data !== "null") {
                        ${'tick' . $get_fragiles_data->whatIsThis} = 0;
                        array_push($allFragiles,$get_fragiles_data->whatIsThis);
                    if (${'tick' . $get_fragiles_data->whatIsThis} < $get_fragiles_data->tick) {
                    ${'tick' . $get_fragiles_data->whatIsThis} = $get_fragiles_data->tick;
                    echo 'id: ' . $messageID . '', PHP_EOL;
                    echo 'event: genesis', PHP_EOL;
                    echo 'data: ' . json_encode($get_fragiles_data), PHP_EOL;
                    echo PHP_EOL;

                    ${'lettercoin' . $get_fragiles_data->id} = ",";
                    ${'topic' . $get_fragiles_data->id} = "start";
                    
                    echo PHP_EOL;
                    $messageID++;

                    }

                    }
                }
            }

            echo 'id: ' . $messageID . '', PHP_EOL;
            echo 'event: genesis-complete', PHP_EOL;
            echo 'data: go!', PHP_EOL;
            echo PHP_EOL;
            $messageID++;


            foreach ($get_fragiles_datas as $get_fragiles_data) {
                if ($get_fragiles_data !== "null") {
            if ($get_fragiles_data->isRobot == 5 || $get_fragiles_data->isRobot == 8 || $get_fragiles_data->isRobot == 2) {
                if ($get_fragiles_data->audioStationText !== ${'topic' . $get_fragiles_data->id}) {
                echo 'id: ' . $messageID . '', PHP_EOL;
                echo 'event: topic', PHP_EOL;
                echo 'data: ' . json_encode(array("id"=>"$get_fragiles_data->id","whatIsThis"=>"$get_fragiles_data->whatIsThis","go"=>"$get_fragiles_data->go","audioStationText"=>"$get_fragiles_data->audioStationText","robotData"=>"$get_fragiles_data->robotData","audioImage"=>"$get_fragiles_data->audioImage","robotwork"=>"$get_fragiles_data->robotwork")), PHP_EOL;
                echo PHP_EOL;
                $messageID++;
                ${'topic' . $get_fragiles_data->id} = $get_fragiles_data->audioStationText;
                }
            }
        }}



$countBasic = 0;

sleep(2);

while (1) {

        if ($countBasic % 80 == 0) {
            echo 't-cup world-Ping', PHP_EOL;
            echo PHP_EOL;
        }
        $serverTime = time();
        
        $getRoom = $fleo_pdo->prepare("SELECT `room` FROM `present` WHERE `number`='$postnumber' AND `tabula`=2");
        $getRoom->execute();
        $room = $getRoom->fetchColumn();
        if ($room) {
            $roomToQuery = "room-" . $room;
            $set_world2 = $fleo_pdo->prepare("SELECT `id`, `whatIsThis`, `onOff`, `color`, `coordsW`, `coordsH`, `coordsD`, `thisID`, `object`, `name`, `width`, `script`, `scriptOn`, `author`, `heikel`, `isRobot`, `robotwork`, `robotData`, `program`, `tick`, `tick2`, `go`, `minusPlusW`, `mpChange`, `floor`, `isOnline`, `audioStationText`, `audioImage`, `play`, `seek`, `lettercoins` FROM `$roomToQuery` WHERE (onOff = '1' AND isOnline = '1') OR (onOff = '1' AND isOnline = '2' AND author = '$comparePost') ORDER BY id ASC");
            if ($isAdmin > 0) {
                $set_world2 = $fleo_pdo->prepare("SELECT `id`, `whatIsThis`, `onOff`, `color`, `coordsW`, `coordsH`, `coordsD`, `thisID`, `object`, `name`, `width`, `script`, `scriptOn`, `author`, `heikel`, `isRobot`, `robotwork`, `robotData`, `program`, `tick`, `tick2`, `go`, `minusPlusW`, `mpChange`, `floor`, `isOnline`, `audioStationText`, `audioImage`, `play`, `seek`, `lettercoins` FROM `$roomToQuery` WHERE (onOff = '1' AND isOnline = '1') OR (onOff = '1' AND isOnline = '2') ORDER BY id ASC");
            }
            $allFragiles = array();

            $set_world2->execute();
            $get_fragiles_datas = $set_world2->fetchAll(PDO::FETCH_OBJ);
            if ($get_fragiles_datas !== "null") {
                    foreach ($get_fragiles_datas as $get_fragiles_data) {
                        if ($get_fragiles_data !== "null") {
                            ${'tick' . $get_fragiles_data->whatIsThis} = 0;
                            array_push($allFragiles,$get_fragiles_data->whatIsThis);
                        if (${'tick' . $get_fragiles_data->whatIsThis} < $get_fragiles_data->tick) {
                        ${'tick' . $get_fragiles_data->whatIsThis} = $get_fragiles_data->tick;
                        echo 'id: ' . $messageID . '', PHP_EOL;
                        echo 'event: genesis', PHP_EOL;
                        echo 'data: ' . json_encode($get_fragiles_data), PHP_EOL;
                        echo PHP_EOL;

                        ${'lettercoin' . $get_fragiles_data->id} = "start";
                        ${'topic' . $get_fragiles_data->id} = "start";
                        $messageID++;
                        }
                        
                        }
                        
                    }
                }
    
                echo 'id: ' . $messageID . '', PHP_EOL;
                echo 'event: genesis-complete', PHP_EOL;
                echo 'data: go!', PHP_EOL;
                echo PHP_EOL;
                $messageID++;

                $fleo_pdo->prepare("UPDATE present SET tabula=0 WHERE `number`='$postnumber'")->execute();

                foreach ($get_fragiles_datas as $get_fragiles_data) {
                    if ($get_fragiles_data !== "null") {
                if ($get_fragiles_data->isRobot == 5 || $get_fragiles_data->isRobot == 8 || $get_fragiles_data->isRobot == 2) {
                    if ($get_fragiles_data->audioStationText !== ${'topic' . $get_fragiles_data->id}) {
                    echo 'id: ' . $messageID . '', PHP_EOL;
                    echo 'event: topic', PHP_EOL;
                    echo 'data: ' . json_encode(array("id"=>"$get_fragiles_data->id","whatIsThis"=>"$get_fragiles_data->whatIsThis","go"=>"$get_fragiles_data->go","audioStationText"=>"$get_fragiles_data->audioStationText","robotData"=>"$get_fragiles_data->robotData","audioImage"=>"$get_fragiles_data->audioImage","robotwork"=>"$get_fragiles_data->robotwork")), PHP_EOL;
                    echo PHP_EOL;
                    $messageID++;
                    ${'topic' . $get_fragiles_data->id} = $get_fragiles_data->audioStationText;
                    }
                }
            }}
        }

		$set_world2->execute();
		$get_fragiles_datas = $set_world2->fetchAll(PDO::FETCH_OBJ);
        if ($get_fragiles_datas !== "null") {

                foreach ($get_fragiles_datas as $get_fragiles_data) {
                    if ($get_fragiles_data !== "null") {
                        if (!in_array($get_fragiles_data->whatIsThis,$allFragiles)) {
                            ${'tick' . $get_fragiles_data->whatIsThis} = 0;
                            array_push($allFragiles,$get_fragiles_data->whatIsThis);
                        }
                    if ($get_fragiles_data->tick !== -1) {
                    if (intval($get_fragiles_data->tick2) - intval($get_fragiles_data->tick) == 2 && ${'tick' . $get_fragiles_data->whatIsThis} < $get_fragiles_data->tick) {                      
                    ${'tick' . $get_fragiles_data->whatIsThis} = $get_fragiles_data->tick;

                    if ($get_fragiles_data->isRobot == 0 || $get_fragiles_data->isRobot == 8 || $get_fragiles_data->isRobot == 2 || $get_fragiles_data->isRobot == 7) {
                    $messageChange = $get_fragiles_data;
                    echo 'id: ' . $messageID . '', PHP_EOL;
                    echo 'event: change', PHP_EOL;
                    echo 'data: ' . json_encode($messageChange), PHP_EOL;
                    echo PHP_EOL;
                    $messageID++;
                    }
                    }
                    if (${'tick' . $get_fragiles_data->whatIsThis} < $get_fragiles_data->tick) {                      
                    ${'tick' . $get_fragiles_data->whatIsThis} = $get_fragiles_data->tick;
                    // if ($get_fragiles_data->isRobot == 1 || $get_fragiles_data->isRobot == 2 || $get_fragiles_data->isRobot == 3 || $get_fragiles_data->isRobot == 4 || $get_fragiles_data->isRobot == 6 || $get_fragiles_data->isRobot == 7) {
                        echo 'id: ' . $messageID . '', PHP_EOL;
                        echo 'event: move', PHP_EOL;
                        echo 'data: ' . json_encode(array("id"=>"$get_fragiles_data->id","whatIsThis"=>"$get_fragiles_data->whatIsThis","coordsW"=>"$get_fragiles_data->coordsW","coordsH"=>"$get_fragiles_data->coordsH","coordsD"=>"$get_fragiles_data->coordsD","width"=>"$get_fragiles_data->width","go"=>"$get_fragiles_data->go","minusPlusW"=>"$get_fragiles_data->minusPlusW","mpChange"=>"$get_fragiles_data->mpChange","play"=>"$get_fragiles_data->play","seek"=>"$get_fragiles_data->seek")), PHP_EOL;
                        echo PHP_EOL;
                        $messageID++;
                        // $fleo_pdo->prepare("UPDATE `$roomToQuery` SET `isRobot`=0 WHERE `id`='$get_fragiles_data->id'")->execute();
                    // }
                    
                }
                if (strpos($get_fragiles_data->robotData, "lowerOpacity") !== false) {

                    $messageChange = $get_fragiles_data;
                    echo 'id: ' . $messageID . '', PHP_EOL;
                    echo 'event: change', PHP_EOL;
                    echo 'data: ' . json_encode($messageChange), PHP_EOL;
                    echo PHP_EOL;
                    $messageID++;  

                }
                }
                    else if ($get_fragiles_data->tick === -1) {
                        $messageChange = $get_fragiles_data;
                        echo 'id: ' . $messageID . '', PHP_EOL;
                        echo 'event: remove', PHP_EOL;
                        echo 'data: ' . json_encode($messageChange), PHP_EOL;
                        echo PHP_EOL; 
                        $messageID++;
                    }
                    
                    
                        if ($get_fragiles_data->audioStationText !== "This is audio" && $get_fragiles_data->isRobot !== 5 && $get_fragiles_data->isRobot !== 6 && $get_fragiles_data->isRobot !== 7) {
                            if (!isset(${'lettercoin' . $get_fragiles_data->id})) {
                                ${'lettercoin' . $get_fragiles_data->id} = "start"; 
                            }



                        if (${'lettercoin' . $get_fragiles_data->id} !== $get_fragiles_data->lettercoins) {
                            if ($get_fragiles_data->play !== 1) {
                                echo 'id: ' . $messageID . '', PHP_EOL;
                                echo 'event: lettercoins', PHP_EOL;
                                echo 'data: ' . json_encode(array("id"=>"$get_fragiles_data->id","whatIsThis"=>"$get_fragiles_data->whatIsThis","lettercoins"=>"$get_fragiles_data->lettercoins","audioStationText"=>"$get_fragiles_data->audioStationText")), PHP_EOL;
                                ${'lettercoin' . $get_fragiles_data->id} = $get_fragiles_data->lettercoins;
                                echo PHP_EOL;
                                $messageID++;
                                ${'lettercoin' . $get_fragiles_data->id} = $get_fragiles_data->lettercoins;
                            }
                            }                  
                        }
                        if ($get_fragiles_data->isRobot == 5 || $get_fragiles_data->isRobot == 8 || $get_fragiles_data->isRobot == 2) {
                            if ($get_fragiles_data->audioStationText !== ${'topic' . $get_fragiles_data->id}) {
                            echo 'id: ' . $messageID . '', PHP_EOL;
                            echo 'event: topic', PHP_EOL;
                            echo 'data: ' . json_encode(array("id"=>"$get_fragiles_data->id","whatIsThis"=>"$get_fragiles_data->whatIsThis","go"=>"$get_fragiles_data->go","audioStationText"=>"$get_fragiles_data->audioStationText","robotData"=>"$get_fragiles_data->robotData","audioImage"=>"$get_fragiles_data->audioImage")), PHP_EOL;
                            echo PHP_EOL;
                            ${'topic' . $get_fragiles_data->id} = $get_fragiles_data->audioStationText;
                            $messageID++;
                            // $fleo_pdo->prepare("UPDATE `$roomToQuery` SET `audioStationText`='This is audio' WHERE `id`='$get_fragiles_data->id'")->execute();
                            }
                        }
                    
                    }
                }
            }
                
		while (ob_get_level() > 0) {
			ob_end_flush();
			}
			flush();

	if (connection_aborted()) break;

	$countBasic++;

	usleep($worldRate);
}