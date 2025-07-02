<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
  
require '../../../fleo.at_1.0.0-config/Exception.php';
require '../../../fleo.at_1.0.0-config/PHPMailer.php';
require '../../../fleo.at_1.0.0-config/SMTP.php';

if ($_POST['whatToBuild'] === "api") {

if (isset($_POST['buildimage'])) { $buildimage = ($_POST["buildimage"]); } else { $buildimage = ''; }
if (isset($_POST['seashellName'])) { $monster = substr($_POST["seashellName"],0,4); } else { $monster = 'no name'; }
$apiInfo = substr($_POST["seashellName"],0,4);
if (isset($_POST['buildnameAS'])) { $buildname = ($_POST["buildnameAS"]); } else { $buildname = 'no name'; }
$imageSaveTime = time();
$newFileNameBuild = random_int(1000,1000000).random_int(1000,1000000);
$outWithoutPath = "apiAddedBox-" . $apiInfo.$imageSaveTime.$newFileNameBuild;
if (isset($_POST['buildhtml'])) { $buildhtml = '<div id="apiAddedBox-' . $apiInfo.$imageSaveTime.$newFileNameBuild . '" style="border:50px solid black;background:#006994;color:white;font-size:70px;text-shadow:2px 2px 0px black,-2px 2px 0px black,2px -2px 0px black,-2px -2px 0px black;width:100%;height:auto;padding:50px;word-wrap: break-word; white-space: pre-line; overflow-wrap: break-word;">'.$_POST['buildhtml'].'</div>'; } else { $buildhtml = 'Empty text.'; }
if (isset($_POST['buildjavascript'])) { $buildjavascript = $_POST["buildjavascript"]; } else { $buildscript = ''; }
if (isset($_POST['buildfloor'])) { $buildfloor = $_POST["buildfloor"]; } else { $buildfloor = '0'; }
if (isset($_POST['buildwidth'])) { $buildwidth = $_POST["buildwidth"]; } else { $buildwidth = '2000'; }
if (isset($_POST['buildheight'])) { $buildheight = $_POST["buildheight"]; } else { $buildheight = '0'; }
if (isset($_POST['coordsW'])) { $buildcoords = intval($_POST["coordsW"]) * -1; } else { $buildcoords = '-50000'; }
if (isset($_POST['coordsD'])) { $builddoords = intval($_POST["coordsD"]) * -1; } else { $builddoords = '-50'; }
if (isset($_POST['fleoNum'])) { $buildauthor = $_POST["fleoNum"]; } else { $buildauthor = 'anonymous'; }
if (isset($_POST['room'])) { $room = "room-" . $_POST["room"]; } else { $room = 'room-home'; }
if (isset($_POST['isOnline'])) { $isOnline = $_POST["isOnline"]; } else { $isOnline = '3'; }
if (isset($_POST['isRobot'])) { $isRobot = $_POST["isRobot"]; } else { $isRobot = '0'; }
$fleoip = $_SERVER['REMOTE_ADDR'];

$sendhtml=$buildhtml;
$sendjavascript=$buildjavascript;

$buildhtml=addslashes($buildhtml);
$buildhtml=htmlspecialchars($buildhtml);

$buildjavascript=addslashes($buildjavascript);
$buildjavascript=htmlspecialchars($buildjavascript); 

$isOnline = 1;

require('../../../fleo.at_1.0.0-config/connection.php');
    $buildobject = 'class="tree ';
    if ($buildfloor) { $buildobject .= 'floor'; };
    $buildobject .= '" style="';
    

  $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    try {

        $save_build_query = "INSERT INTO `$room` (`whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `thisID`, `object`, `name`, `width`, `scriptOn`, `script`, `author`, `heikel`, `floor`, `ip`, `isOnline`, `isRobot`, `audioStationText`, `tick`, `tick2`) VALUES ('$monster',1,'$buildcoords', 0, '$builddoords','','$buildobject','$buildhtml','$buildwidth',1,'$buildjavascript','$buildauthor',1,'$buildfloor','$fleoip','$isOnline',2,'$buildname',1,3) ON DUPLICATE KEY UPDATE `onOff`='1',`color`='',`coordsW`='$buildcoords',`coordsH`=0,`coordsD`='$builddoords',`thisID`='',`object`='$buildobject',`name`='$buildhtml',`width`='$buildwidth',`scriptOn`=1,`script`='$buildjavascript',`author`='$buildauthor',`heikel`=1,`whatIsThis`='$monster',`floor`='$buildfloor',`ip`=CONCAT(`ip`, ', $fleoip'),`isOnline`=$isOnline,`isRobot`=2,`audioStationText`='buildname';";
      
  $fleo_pdo->exec($save_build_query);
  } catch (PDOException $e) {
    echo "<br>" . $e->getMessage();
  }
}

$subject = $sitename . " " . $buildname . " // api-Object saved in " . $room . " saved";			
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

For questions or suggestions, please feel free to write to felix@popular.gb.fleo.at .';

//Send the message, check for errors
if(!$mail->Send()) {
} else {
  echo "Saved! To be moderated.";
}

?>