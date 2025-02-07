<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
  
require '../../fleo.at_1.0.0-config/Exception.php';
require '../../fleo.at_1.0.0-config/PHPMailer.php';
require '../../fleo.at_1.0.0-config/SMTP.php';
if (isset($_POST['popularUrl'])) { $popularUrl = ($_POST["popularUrl"]); } else { $popularUrl= "no url"; }
if (isset($_POST['clerkText'])) { $clerkText = ($_POST["clerkText"]); } else { $clerkText= "..."; }
$clerkText=addslashes($clerkText);
$clerkText=htmlspecialchars($clerkText); 
if (isset($_POST['whatIsThis'])) { $whatIsThis = ($_POST["whatIsThis"]); } else { $whatIsThis = "audStat" . random_int(0,99999999); }
if (isset($_POST['buildhtml'])) { $buildhtml = ($_POST["buildhtml"]); } else { $buildhtml = '<audio class="audioStation" id="' . $whatIsThis . '" src="https://popular.gb.fleo.at/outputclerk/' . $popularUrl . '"></audio><div id="audioStationAudioDiv-' . $whatIsThis . '" class="audioStationAudioDiv-' . $whatIsThis . '" style="width:140px;height:140px;border:16px solid #ffffff00;text-align:center;position:absolute;bottom:350px;left:24px;pointer-events:auto;overflow:visible;"><div class="audioStationAudioPlay-' . $whatIsThis . '" style="cursor:pointer;"><img src="/fleo.at-js/push2Talk/fleoPlay.webp" style="position:absolute;top:0;left:0;width:100%;height:100%;" alt="fleo.Controls Play" /></div><div class="audioStationAudioStop-' . $whatIsThis . '" style="display:none;cursor:pointer;"><img src="/fleo.at-js/push2Talk/fleoStop.webp" style="position:absolute;top:0;left:0;width:100%;height:100%;" alt="fleo.Controls Stop" /></div></div><div id="audioStationText-' . $whatIsThis . '" style="font-weight:bold;pointer-events:auto;width:400px;left:-100px;background:white;border:4px solid black;height:auto;min-height:140px;overflow:visible;" contenteditable="true">' . $clerkText . '</div><div id="letterCoinMillAudioStationTextLettercoin-1-' . $whatIsThis . '" style="position:absolute;margin:auto;display:flex;align-items:center;justify-content:center;bottom:0;height:56px;left:18px;width:56px;border:2px solid gray;border-radius:30px;overflow:hidden;padding:0px;font-size:56px;text-align:center;font-family:Courier,monospace;color:yellow;"></div><div id="letterCoinMillAudioStationTextLettercoin-2-' . $whatIsThis . '" style="position:absolute;margin:auto;display:flex;align-items:center;justify-content:center;bottom:0;height:56px;left:138px;width:56px;border:2px solid gray;border-radius:30px;overflow:hidden;padding:0px;font-size:56px;text-align:center;font-family:Courier,monospace;color:yellow;"></div>' . '<img src="/fleo.at-medien/audioStation_I.webp" style="width:216px;height:704px;pointer-events:none;" class="audioStationImg" alt="audioStation" />'; }
if (isset($_POST['buildjavascript'])) { $buildjavascript = $_POST["buildjavascript"]; } else { $buildjavascript = ''; }
if (isset($_POST['buildfloor'])) { $buildfloor = $_POST["buildfloor"]; } else { $buildfloor = '0'; }
if (isset($_POST['buildwidth'])) { $buildwidth = $_POST["buildwidth"]; } else { $buildwidth = '500'; }
if (isset($_POST['buildheight'])) { $buildheight = $_POST["buildheight"]; } else { $buildheight = '0'; }
if (isset($_POST['will'])) { $will = ($_POST["will"]); } else { $will= "b"; }
if ($will == "b") {
if (isset($_POST['buildcoords'])) { $buildcoords = (intval($_POST["buildcoords"]) * -1) + 700; } else { $buildcoords = '-50000'; }
if (isset($_POST['builddoords'])) { $builddoords = (intval($_POST["builddoords"]) * -1) + 1400; } else { $builddoords = '-50'; }
} else {
if (isset($_POST['buildcoords'])) { $buildcoords = (intval($_POST["buildcoords"]) * -1) + 1400; } else { $buildcoords = '-50000'; }
if (isset($_POST['builddoords'])) { $builddoords = (intval($_POST["builddoords"]) * -1) - 1400; } else { $builddoords = '-50'; }    
}
if (isset($_POST['author'])) { $buildauthor = $_POST["author"]; } else { $buildauthor = 'anonymous'; }
if (isset($_POST['room'])) { $room = $_POST["room"]; } else { $room = 'room-home'; }
if (isset($_POST['isOnline'])) { $isOnline = $_POST["isOnline"]; } else { $isOnline = 1; }
if (isset($_POST['isRobot'])) { $isRobot = $_POST["isRobot"]; } else { $isRobot = '0'; }
$fleoip = $_SERVER['REMOTE_ADDR'];

$sendhtml=$buildhtml;
$sendjavascript=$buildjavascript;

$buildhtml=addslashes($buildhtml);
$buildhtml=htmlspecialchars($buildhtml);

$buildjavascript=addslashes($buildjavascript);
$buildjavascript=htmlspecialchars($buildjavascript); 

require('../../fleo.at_1.0.0-config/connection.php');

    $buildobject = 'class="tree drop ';
    $buildobject .= '" style="';
    
    $lettercoinsStart = ',<div class="">1 1 1</div>,<div class="">2 2 2</div>';

  $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


        $save_build_query = "INSERT INTO `$room` (`whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `thisID`, `object`, `name`, `width`, `scriptOn`, `script`, `author`, `heikel`, `floor`, `ip`, `isOnline`, `isRobot`, `audioStationText`, `tick`, `tick2`, `lettercoins`) VALUES ('$whatIsThis',1,'$buildcoords', 0, '$builddoords','','$buildobject','$buildhtml','$buildwidth',1,'$buildjavascript','$buildauthor',1,'$buildfloor','$fleoip',1,2,'$clerkText',1,3,'$lettercoinsStart') ON DUPLICATE KEY UPDATE `onOff`='1',`color`='',`coordsW`='$buildcoords',`coordsH`=0,`coordsD`='$builddoords',`thisID`='',`object`='$buildobject',`name`='$buildhtml',`width`='$buildwidth',`scriptOn`=1,`script`='$buildjavascript',`author`='$buildauthor',`heikel`=1,`whatIsThis`='$whatIsThis',`floor`='$buildfloor',`ip`=CONCAT(`ip`, ', $fleoip'),`isOnline`=1,`isRobot`=2,`audioStationText`='$clerkText',`lettercoins`='$lettercoinsStart';";
      
  $fleo_pdo->exec($save_build_query);
  
$subject = $sitename . " " . $whatIsThis . " // in " . $room . " saved (Audiostation)";			
$msg = date('Y/m/d H:i:s', time());

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
$mail->Body = 'HTML

' . $sendhtml . '

JAVASCRIPT

' . $sendjavascript . '

WHERE
Coords: ' . $buildcoords . ' || Doords: ' . $builddoords . '

ONLINE
>>> ' . $isOnline . ' <<<

TIME: ' . $msg . '

Felix Longolius

For questions or suggestions, please feel free to write to felix@kitchen.fleo.at .';



$letSound = 1;



while ($letSound === 1) {

sleep(60);

$get_lettercoins = $fleo_pdo->query("SELECT lettercoins FROM `$room` WHERE `whatIsThis` = '$whatIsThis' ORDER BY id ASC LIMIT 1");
$get_lettercoins->execute();
$get_lettercoins_datas = $get_lettercoins->fetchAll(PDO::FETCH_OBJ);
foreach ($get_lettercoins_datas as $get_lettercoins_data) {
  $lettercoins = $get_lettercoins_data->lettercoins;
}

$lastCommaPos = strrpos($lettercoins, ',');
if ($lastCommaPos !== false) {
    $newLettercoins = substr($lettercoins, 0, $lastCommaPos);
}
$write_newLettercoins_query = "UPDATE `$room` SET `lettercoins`='$newLettercoins' WHERE `whatIsThis`='$whatIsThis';";
$fleo_pdo->exec($write_newLettercoins_query);

$get_lettercoins->execute();
$get_lettercoins_datas = $get_lettercoins->fetchAll(PDO::FETCH_OBJ);
foreach ($get_lettercoins_datas as $get_lettercoins_data) {
  $lettercoins = $get_lettercoins_data->lettercoins;
}

if (substr_count($lettercoins, ",") < 1) { $letSound = 0; }

}



  $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $robotData = "lowerOpacity"; 

  $fleoboyngINSquery = "UPDATE `$room` SET `robotData`= '$robotData', `tick` = tick+1, `tick2`=tick WHERE whatIsThis='$whatIsThis';";
  $fleo_pdo->exec($fleoboyngINSquery);

  sleep(20);
  try {
    $save_build_query = "UPDATE `$room` SET `tick`=-1 WHERE whatIsThis='$whatIsThis';";
    $fleo_pdo->exec($save_build_query);
     } catch (PDOException $e) {
    echo "<br>" . $e->getMessage();
  }
  sleep(5);
  try {
  $save_build_query = "UPDATE `$room` SET `ip`=CONCAT(`ip`, ', $fleoip'),`isOnline`=3,`tick`=-1 WHERE whatIsThis='$whatIsThis';";
  $fleo_pdo->exec($save_build_query);
   } catch (PDOException $e) {
  echo "<br>" . $e->getMessage();
}

//Send the message, check for errors
if(!$mail->Send()) {
} else {
  echo "Saved! To be moderated.";
}
?>