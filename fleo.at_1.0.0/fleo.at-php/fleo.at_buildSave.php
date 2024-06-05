<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
  
require '../../fleo.at_1.0.0-config/Exception.php';
require '../../fleo.at_1.0.0-config/PHPMailer.php';
require '../../fleo.at_1.0.0-config/SMTP.php';
if (isset($_POST['buildimage'])) { $buildimage = ($_POST["buildimage"]); } else { $buildimage = ''; }
if (isset($_POST['monsterID'])) { $monster = ($_POST["monsterID"]); } else { $monster = 'no name'; }
if (isset($_POST['buildname'])) { $buildname = ($_POST["buildname"]); } else { $buildname = 'no name'; }
if (isset($_POST['buildhtml'])) { $buildhtml = ($_POST["buildhtml"]); } else { $buildhtml = 'no html'; }
if (isset($_POST['buildjavascript'])) { $buildjavascript = $_POST["buildjavascript"]; } else { $buildjavascript = ''; }
if (isset($_POST['buildfloor'])) { $buildfloor = $_POST["buildfloor"]; } else { $buildfloor = '0'; }
if (isset($_POST['buildwidth'])) { $buildwidth = $_POST["buildwidth"]; } else { $buildwidth = '500'; }
if (isset($_POST['buildheight'])) { $buildheight = $_POST["buildheight"]; } else { $buildheight = '0'; }
if (isset($_POST['buildcoords'])) { $buildcoords = intval($_POST["buildcoords"]) * -1; } else { $buildcoords = '-50000'; }
if (isset($_POST['builddoords'])) { $builddoords = intval($_POST["builddoords"]) * -1; } else { $builddoords = '-50'; }
if (isset($_POST['buildauthor'])) { $buildauthor = $_POST["buildauthor"]; } else { $buildauthor = 'anonymous'; }
if (isset($_POST['room'])) { $room = $_POST["room"]; } else { $room = 'room-home'; }
if (isset($_POST['isOnline'])) { $isOnline = $_POST["isOnline"]; } else { $isOnline = '3'; }
if (isset($_POST['isRobot'])) { $isRobot = $_POST["isRobot"]; } else { $isRobot = '0'; }
$fleoip = $_SERVER['REMOTE_ADDR'];

$sendhtml=$buildhtml;
$sendjavascript=$buildjavascript;

$buildhtml=addslashes($buildhtml);
$buildhtml=htmlspecialchars($buildhtml);

$buildjavascript=addslashes($buildjavascript);
$buildjavascript=htmlspecialchars($buildjavascript); 

require('../../fleo.at_1.0.0-config/connection.php');
$get_user = $fleo_pdo->query("SELECT isAdmin FROM `present` WHERE `number` = '$buildauthor' ORDER BY id ASC LIMIT 1");
$get_user->execute();
$get_user_datas = $get_user->fetchAll(PDO::FETCH_OBJ);
foreach ($get_user_datas as $get_user_data) {
  $isAdmin = $get_user_data->isAdmin;
}
    $buildobject = 'class="tree ';
    if ($buildfloor) { $buildobject .= 'floor'; };
    $buildobject .= '" style="';
    

  $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  if ($isOnline == 1 || $isOnline == 2) {
    try {
      if ($isAdmin > 0) {
  $save_build_query = "UPDATE `$room` SET `onOff`='1',`color`='',`coordsW`='$buildcoords',`coordsH`='$buildheight',`coordsD`='$builddoords',`thisID`='',`object`='$buildobject',`name`='$buildhtml',`width`='$buildwidth',`script`='$buildjavascript',`scriptOn`=1,`heikel`=1,`whatIsThis`='$buildname',`floor`='$buildfloor',`ip`=CONCAT(`ip`, ', $fleoip'),`isOnline`='$isOnline',`isRobot`='$isRobot',`tick`=tick+1,`tick2`=tick+2 WHERE id='$monster';"; 
      } else { if ($isOnline == 1) { $isOnline = 2; }
  $save_build_query = "UPDATE `$room` SET `onOff`='1',`color`='',`coordsW`='$buildcoords',`coordsH`='$buildheight',`coordsD`='$builddoords',`thisID`='',`object`='$buildobject',`name`='$buildhtml',`width`='$buildwidth',`script`='$buildjavascript',`scriptOn`=1,`heikel`=1,`whatIsThis`='$buildname',`floor`='$buildfloor',`ip`=CONCAT(`ip`, ', $fleoip'),`isOnline`='$isOnline',`isRobot`='$isRobot',`tick`=tick+1,`tick2`=tick+2 WHERE id='$monster';"; } //
  $fleo_pdo->exec($save_build_query);
  } catch (PDOException $e) {
    echo "<br>" . $e->getMessage();
  }
} else if ($isOnline == 3) {
    try {
    $save_build_query = "UPDATE `$room` SET `tick`=-1 WHERE id='$monster';";
    $fleo_pdo->exec($save_build_query);
     } catch (PDOException $e) {
    echo "<br>" . $e->getMessage();
  }
  sleep(5);
  try {
  $save_build_query = "UPDATE `$room` SET `onOff`='1',`color`='',`coordsW`='$buildcoords',`coordsH`='$buildheight',`coordsD`='$builddoords',`thisID`='',`object`='$buildobject',`name`='$buildhtml',`width`='$buildwidth',`script`='$buildjavascript',`scriptOn`=1,`heikel`=1,`whatIsThis`='$buildname',`floor`='$buildfloor',`ip`=CONCAT(`ip`, ', $fleoip'),`isOnline`='$isOnline',`isRobot`='$isRobot',`tick`=-1 WHERE id='$monster';";
  $fleo_pdo->exec($save_build_query);
   } catch (PDOException $e) {
  echo "<br>" . $e->getMessage();
}
}

  $subject = $sitename . " " . $buildname . " // in " . $room . " saved";			
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
  
  //Send the message, check for errors
  if(!$mail->Send()) {
  } else {
    echo "Saved! To be moderated.";
  }
?>