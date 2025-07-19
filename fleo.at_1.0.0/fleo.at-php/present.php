<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once '/var/www/funny-bunnies.fleo.at/FelixLongolius-3D-Webseite/fleo.at_1.0.0-config/PHPMailer.php';
require_once '/var/www/funny-bunnies.fleo.at/FelixLongolius-3D-Webseite/fleo.at_1.0.0-config/SMTP.php';
require_once '/var/www/funny-bunnies.fleo.at/FelixLongolius-3D-Webseite/fleo.at_1.0.0-config/SMTP.php';
require_once('/var/www/funny-bunnies.fleo.at/FelixLongolius-3D-Webseite/fleo.at_1.0.0-config/connection.php');

function sendNotificationMail($subject, $body) {
    $mail = new PHPMailer(true);
$mail->SMTPDebug = 2;
$mail->Debugoutput = 'error_log';
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // change to your SMTP host
        $mail->SMTPAuth = true;
        $mail->Username = $mailusername; 
        $mail->Password = $mailpassword;
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('email-store@interlectual.org', 'fleo.at');
        $mail->addAddress('felix@longolius.net');

        $mail->Subject = $subject;
        $mail->Body    = $body;
        $mail->isHTML(false);

        $mail->send();
        error_log('Mail sent successfully: ' . $subject);
    } catch (Exception $e) {
        error_log('Mailer Error: ' . $mail->ErrorInfo);
    }
}


date_default_timezone_set('Europe/Berlin');

$fleoip = $_SERVER['REMOTE_ADDR'];
$domain = $_SERVER['HTTP_REFERER'];

require('../../fleo.at_1.0.0-extras/worldmap/vendor/autoload.php');
use GeoIp2\Database\Reader;
$reader = new Reader("../../fleo.at_1.0.0-extras/worldmap/GeoLite2-City.mmdb");

// if (isset($_GET['mobile'])) { $presenceRate = 250000; } else { $presenceRate = 125000; }

$ip = $fleoip;
if(isset($_SERVER['HTTP_REFERER'])) { $entryPoint = $_SERVER['HTTP_REFERER']; } else { $entryPoint = "direct (no referrer)"; }
$record = $reader->city($ip);
$country = $record->country->name;
$state = $record->mostSpecificSubdivision->name;
$city = $record->city->name;
$la = $record->location->latitude;
$lo = $record->location->longitude;
$hostname = gethostbyaddr($ip);


function hexToRgb($hex, $alpha = false)
  {
    $hex      = str_replace('#', '', $hex);
    $length   = strlen($hex);
    $rgb['r'] = hexdec($length == 6 ? substr($hex, 0, 2) : ($length == 3 ? str_repeat(substr($hex, 0, 1), 2) : 0));
    $rgb['g'] = hexdec($length == 6 ? substr($hex, 2, 2) : ($length == 3 ? str_repeat(substr($hex, 1, 1), 2) : 0));
    $rgb['b'] = hexdec($length == 6 ? substr($hex, 4, 2) : ($length == 3 ? str_repeat(substr($hex, 2, 1), 2) : 0));
    if ($alpha) {
      $rgb['a'] = $alpha;
    }
    return implode(array_keys($rgb)) . '(' . implode(', ', $rgb) . ')';
  }

if (isset($_POST['doing'])) {

  $img = "/medien/persons/maenniken_II.webp";
 
  $number = htmlspecialchars($_POST['number'], ENT_QUOTES);
  $name = htmlspecialchars($_POST['name'], ENT_QUOTES);
  if ($name == "") { $name = "_"; }


  if ($_POST['doing'] == 5) {
    $startColor = htmlspecialchars($_POST['color'], ENT_QUOTES);
    $rgbstartColor = hexToRgb($startColor);
    $startD = htmlspecialchars($_POST['cD'], ENT_QUOTES);
    $startH = htmlspecialchars($_POST['cH'], ENT_QUOTES);
    $startW = htmlspecialchars($_POST['cW'], ENT_QUOTES);
    $TAWill = htmlspecialchars($_POST['will'], ENT_QUOTES);
    $startRoom = htmlspecialchars($_POST['room'], ENT_QUOTES);
  try {
    $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $write_present_query = "INSERT INTO `present` (`number`, `name`, `room`, `color`, `img`, `uW`, `uH`, `uD`, `turn`, `TA`, `ip`, `active`) VALUES ('$number','$name','$startRoom','$startColor','$img','$startW','$startH','$startD',0,'$TAWill','$fleoip', '1')";
    $write_present_h_query = "INSERT INTO `present_history` (`number`, `name`, `room`, `color`, `uW`, `uH`, `uD`, `TA`, `ip`, `active`) VALUES ('$number','$name','$startRoom','$startColor','$startW','$startH','$startD','$TAWill','$fleoip', '1')";
    $fleo_pdo->exec($write_present_query);
    $fleo_pdo->exec($write_present_h_query);
//    setcookie("spacenumber", $number, [ 'expires' => strtotime( '+730 days' ), 'path' => '/', 'samesite' => 'None', 'secure' => true,]);
//    setcookie("spacename", $name, [ 'expires' => strtotime( '+730 days' ), 'path' => '/', 'samesite' => 'None', 'secure' => true,]);
//    setcookie("spacecolor", $rgbstartColor, [ 'expires' => strtotime( '+730 days' ), 'path' => '/', 'samesite' => 'None', 'secure' => true,]);
//    echo $rgbstartColor;
  } catch (PDOException $e) {
    echo "<br>" . $e->getMessage();
  }

        // send mail
// if ($number !== "5943") {

        $subject = $sitename . " " . $number . " // Login on " .$domain;			
        $msg = date('Y/m/d H:i:s', time());
      
        /* $mail = new PHPMailer();
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
        $mail->IsHTML(false); */
$mailBody = '
NAME: ' .  $name . ' with NUMBER: ' . $number . '
Coords: ' . $startW . ' || Doords: ' . $startD / 3 . '
Domain: ' . $domain . ' || IP: ' . $fleoip . ' (' . gethostbyaddr($fleoip) . ') 
Browser: ' . $_SERVER['HTTP_USER_AGENT'] . '
Country etc.: '.$country.' | '.$state.' | '.$city.' | '.$la.' | '.$lo.' | '.$entryPoint.' | '.date('l jS \of F Y H:i:s') . '
went LOGIN

TIME: ' . $msg . '

Felix Longolius
  
For questions regarding this system or suggestions, please feel free to write to felix@nachbarschaftsdemokratiebildschirm.de .';
        
// mail('felix@longolius.net', $subject, $mailBody, 'From: f@fleo.at');
//      }
}
if ($_POST['doing'] == 6) {
  $startColor = htmlspecialchars($_POST['color'], ENT_QUOTES);
  $rgbstartColor = hexToRgb($startColor);
  // $colorCalc = preg_replace("/[^0-9,]/", "", $startColor);
  // $rgbarr = explode(",", $colorCalc, 3);
  // $color = sprintf("#%02x%02x%02x", $rgbarr[0], $rgbarr[1], $rgbarr[2]);
  $startD = htmlspecialchars($_POST['cD'], ENT_QUOTES);
  $startH = htmlspecialchars($_POST['cH'], ENT_QUOTES);
  $startW = htmlspecialchars($_POST['cW'], ENT_QUOTES);
  $TAWill = htmlspecialchars($_POST['will'], ENT_QUOTES);
  try {
    $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $write_changeName_query = "UPDATE `present` SET `name` = '$name' WHERE `number` = '$number'"; // , `isAdmin` = 1
    $write_changeName_h_query = "INSERT INTO `present_history` (`number`, `name`, `color`, `uW`, `uH`, `uD`, `ip`, `active`) VALUES ('$number','$name','$startColor','$startW','$startH','$startD','$fleoip', 1)";
    $fleo_pdo->exec($write_changeName_query);
    $fleo_pdo->exec($write_changeName_h_query);
//    setcookie("spacenumber", $number, [ 'expires' => strtotime( '+730 days' ), 'path' => '/', 'samesite' => 'None', 'secure' => true,]);
//    setcookie("spacename", $name, [ 'expires' => strtotime( '+730 days' ), 'path' => '/', 'samesite' => 'None', 'secure' => true,]);
//    setcookie("spacecolor", $color, [ 'expires' => strtotime( '+730 days' ), 'path' => '/', 'samesite' => 'None', 'secure' => true,]);
  } catch (PDOException $e) {
    echo "<br>" . $e->getMessage();
  }

          // send mail
//          if ($number !== "5943") {

  $subject = $sitename . " " . $name . " // Name change on " .$domain;		
  $msg = date('Y/m/d H:i:s', time());

  /* $mail = new PHPMailer();
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
  $mail->IsHTML(false); */
  
$mailBody = '
NAME: ' .  $name . ' with NUMBER: ' . $number . '
Coords: ' . $startW . ' || Doords: ' . $startD / 3 . '
Domain: ' . $domain . ' || IP: ' . $fleoip . ' (' . gethostbyaddr($fleoip) . ') 
Browser: ' . $_SERVER['HTTP_USER_AGENT'] . '
Country etc.: '.$country.' | '.$state.' | '.$city.' | '.$la.' | '.$lo.' | '.$entryPoint.' | '.date('l jS \of F Y H:i:s') . '
changed NAME

TIME: ' . $msg . '

Felix Longolius

For questions regarding this system or suggestions, please feel free to write to felix@nachbarschaftsdemokratiebildschirm.de .';
  
// mail('felix@longolius.net', $subject, $mailBody, 'From: f@fleo.at');

//        }
}
if ($_POST['doing'] == 7) {

  try {
//    $get_user_color = $fleo_pdo->prepare("SELECT color FROM `present` WHERE `number` = '$number' AND `name` = '$name' ORDER BY id DESC LIMIT 1;");
//    $get_user_color->execute();
//	  $get_user_color_data = $get_user_color->fetchColumn();
//    if (!$get_user_color_data) {
//      $get_user_color_data = "#cccccc";
//    }
//    $startColor = $get_user_color_data;
    $startColor = htmlspecialchars($_POST['color'], ENT_QUOTES);
    $rgbstartColor = hexToRgb($startColor);
    $startD = htmlspecialchars($_POST['cD'], ENT_QUOTES);
    $startH = htmlspecialchars($_POST['cH'], ENT_QUOTES);
    $startW = htmlspecialchars($_POST['cW'], ENT_QUOTES);
    $TAWill = htmlspecialchars($_POST['will'], ENT_QUOTES);
    $startRoom = htmlspecialchars($_POST['room'], ENT_QUOTES);
//    echo $startRoom;
    $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $write_present_query = "INSERT INTO `present` (`number`, `name`, `room`, `color`, `img`, `uW`, `uH`, `uD`, `turn`, `TA`, `ip`, `active`) VALUES ('$number','$name','$startRoom','$startColor', '$img', '$startW','$startH','$startD',0,'$TAWill','$fleoip', 1) ON DUPLICATE KEY UPDATE `name` = '$name', `room` = '$startRoom', `uW` = '$startW', `uH` = '$startH', `uD` = '$startD', `turn` = 0, `TA` = '$TAWill', `ip` = '$fleoip', `active` = 1";
    $write_present_h_query = "INSERT INTO `present_history` (`number`, `name`, `room`, `color`, `uW`, `uH`, `uD`, `TA`, `ip`, `active`) VALUES ('$number','$name','$startRoom','$startColor', '$startW','$startH','$startD','$TAWill','$fleoip', 1)";
    $fleo_pdo->exec($write_present_query);
    $fleo_pdo->exec($write_present_h_query);
//    setcookie("spacenumber", $number, [ 'expires' => strtotime( '+730 days' ), 'path' => '/', 'samesite' => 'None', 'secure' => true,]);
//    setcookie("spacename", $name, [ 'expires' => strtotime( '+730 days' ), 'path' => '/', 'samesite' => 'None', 'secure' => true,]);
//    setcookie("spacecolor", $rgbstartColor, [ 'expires' => strtotime( '+730 days' ), 'path' => '/', 'samesite' => 'None', 'secure' => true,]);
//    echo $rgbstartColor;
  } catch (PDOException $e) {
    echo "<br>" . $e->getMessage();
  }

            // send mail
//            if ($number !== "5943") {

            $subject = $sitename . " " . $name . " // Revoir on " .$domain;		
            $msg = date('Y/m/d H:i:s', time());
          
$mailBody  = '
NAME: ' .  $name . ' with NUMBER: ' . $number . '
Coords: ' . $startW . ' || Doords: ' . $startD / 3 . '
Domain: ' . $domain . ' || IP: ' . $fleoip . ' (' . gethostbyaddr($fleoip) . ') 
Browser: ' . $_SERVER['HTTP_USER_AGENT'] . '
Country etc.: '.$country.' | '.$state.' | '.$city.' | '.$la.' | '.$lo.' | '.$entryPoint.' | '.date('l jS \of F Y H:i:s') . '
went REVOIR

TIME: ' . $msg . '

Felix Longolius
  
For questions regarding this system or suggestions, please feel free to write to felix@nachbarschaftsdemokratiebildschirm.de .';
// sendNotificationMail($subject, $mailBody);

$headers  = "From: Felix Longolius <f@fleo.at>\r\n";
$headers .= "Reply-To: f@fleo.at\r\n";
$headers .= "Return-Path: f@fleo.at\r\n"; // For bounce handling
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

mail("felix@longolius.net", $subject, $mailBody, $headers);
//          }
}
/* if ($_POST['doing'] == 8) {

  try {
    $get_user_color = $fleo_pdo->prepare("SELECT color FROM `present` WHERE `number` = '$number' AND `name` = '$name' ORDER BY id DESC LIMIT 1;");
    $get_user_color->execute();
	  $get_user_color_data = $get_user_color->fetchColumn();
    if (!$get_user_color_data) {
      $get_user_color_data = "#cccccc";
    }
    $startColor = $get_user_color_data;
    $rgbstartColor = hexToRgb($startColor);
    $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $write_present_query = "INSERT INTO `present` (`number`, `name`, `color`, `img`, `uW`, `uH`, `uD`, `ip`, `active`, `online`) VALUES ('$number','$name','$startColor', '$img', '$startW','$startH','$startD','$fleoip', 1, 1) ON DUPLICATE KEY UPDATE `name` = '$name', `uW` = '$startW', `uH` = '$startH', `uD` = '$startD', `ip` = '$fleoip', `active` = '1', `online` = 1";
    $write_present_h_query = "INSERT INTO `present_history` (`number`, `name`, `color`, `uW`, `uH`, `uD`, `ip`, `active`, `online`) VALUES ('$number','$name','$startColor', '$startW','$startH','$startD','$fleoip', 1, 1)";
    $fleo_pdo->exec($write_present_query);
    $fleo_pdo->exec($write_present_h_query);
//    setcookie("spacenumber", $number, [ 'expires' => strtotime( '+730 days' ), 'path' => '/', 'samesite' => 'None', 'secure' => true,]);
//    setcookie("spacename", $name, [ 'expires' => strtotime( '+730 days' ), 'path' => '/', 'samesite' => 'None', 'secure' => true,]);
//    setcookie("spacecolor", $rgbstartColor, [ 'expires' => strtotime( '+730 days' ), 'path' => '/', 'samesite' => 'None', 'secure' => true,]);
//    echo $rgbstartColor;
  } catch (PDOException $e) {
    echo "<br>" . $e->getMessage();
  }
} */

if ($_POST['doing'] == 9) {
  $startColor = htmlspecialchars($_POST['color'], ENT_QUOTES);
  $rgbstartColor = hexToRgb($startColor);
  try {
    $audioSession = htmlspecialchars($_POST['audioSession'], ENT_QUOTES);
    $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $write_present_query = "INSERT INTO `present` (`number`, `name`, `color`, `conn`, `audioSes`, `ip`, `active`) VALUES ('$number','$name','$startColor',1,'$audioSession','$fleoip', 1) ON DUPLICATE KEY UPDATE `conn`=1, `audioSes`='$audioSession'";
    $write_present_h_query = "INSERT INTO `present_history` (`number`, `name`, `color`, `conn`, `audioSes`, `ip`, `active`) VALUES ('$number','$name','$startColor',1,'$audioSession','$fleoip', 1)";
    $fleo_pdo->exec($write_present_query);
    $fleo_pdo->exec($write_present_h_query);
//    setcookie("spacenumber", $number, [ 'expires' => strtotime( '+730 days' ), 'path' => '/', 'samesite' => 'None', 'secure' => true,]);
//    setcookie("spacename", $name, [ 'expires' => strtotime( '+730 days' ), 'path' => '/', 'samesite' => 'None', 'secure' => true,]);
//    setcookie("spacecolor", $rgbstartColor, [ 'expires' => strtotime( '+730 days' ), 'path' => '/', 'samesite' => 'None', 'secure' => true,]);
//    echo $rgbstartColor;
  } catch (PDOException $e) {
    echo "<br>" . $e->getMessage();
  }
}


}
