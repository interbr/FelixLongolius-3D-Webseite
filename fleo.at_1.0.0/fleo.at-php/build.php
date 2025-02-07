<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
  
require '../../fleo.at_1.0.0-config/Exception.php';
require '../../fleo.at_1.0.0-config/PHPMailer.php';
require '../../fleo.at_1.0.0-config/SMTP.php';

date_default_timezone_set('Europe/Berlin');

require_once('../../fleo.at_1.0.0-config/connection.php');

// Pardon, ich musste hier mal eben was speichern. Ich empfand mich als besonders produktiv und empfand keine Schande.

if ($_POST["doing"] == 1) {
  if (isset($_POST["room"])) {
  $room = "room-" . $_POST["room"];
  $fleoip = $_SERVER['REMOTE_ADDR'];
    if ($_POST["save"] == 1) {
        $change = $_POST["offset"];
        $changeW = $_POST["leftRight"];
        $toSave = $_POST["fragile"];
        $fleo_pdo->exec("UPDATE `$room` SET `coordsD` = coordsD+$change, `coordsW` = coordsW+$changeW, `tick` = tick+1, `tick2`=tick+1, `ip`=concat(`ip`, ', $fleoip') WHERE `id` = $toSave");
    }
    if ($_POST["save"] == 2) {
        $change = $_POST["offset"];
        $toSave = $_POST["fragile"];
        $fleo_pdo->exec("UPDATE `$room` SET `coordsH` = GREATEST(0, coordsH+$change), `tick` = tick+1, `tick2`=tick+1, `ip`=concat(`ip`, ', $fleoip') WHERE `id` = $toSave");
    }
    if ($_POST["save"] == 3) {
        $change = $_POST["offset"];
        $toSave = $_POST["fragile"];
        $fleo_pdo->exec("UPDATE `$room` SET `width` = GREATEST(25, width+$change), `tick` = tick+1, `tick2`=tick+1, `ip`=concat(`ip`, ', $fleoip') WHERE `id` = $toSave");
    }
    if ($_POST["save"] == 8) {
      if ($_POST['am'] == "f") {
        if (isset($_POST['coordsW'])) { $buildcoords = (intval($_POST["coordsW"]) * -1) + 500; } else { $buildcoords = '0'; }
        if (isset($_POST['coordsD'])) { $builddoords = (intval($_POST["coordsD"]) * -1) + 900; } else { $builddoords = '0'; } }
        else if ($_POST['am'] == "b") {
        if (isset($_POST['coordsW'])) { $buildcoords = (intval($_POST["coordsW"]) * 1) - 500; } else { $buildcoords = '0'; }
        if (isset($_POST['coordsD'])) { $builddoords = (intval($_POST["coordsD"]) * -1) - 900; } else { $builddoords = '0'; }
        }
        if (isset($_POST['fleoNum'])) { $buildauthor = $_POST["fleoNum"]; } else { $buildauthor = 'anonymous'; }
        if (isset($_POST['whatToBuild'])) {
          if ($_POST['whatToBuild'] == "iframe") {
            $iframURL = $_POST['whatToBuildInfo'];
            $imageSaveTime = time();
            $newFileNameBuild = random_int(1000,1000000).random_int(1000,1000000);
            $outWithoutPath = "iframe-" . $imageSaveTime.$newFileNameBuild;
            $buildhtml = '<iframe id="iframe-' . $imageSaveTime.$newFileNameBuild . '" style="border:5px solid black;background:white;transform-origin:left bottom;transform:scale(4);pointer-events:auto;width:960px;height:600px;overflow:scroll;"></iframe>';
            $sendhtml=$buildhtml;
            $buildjavascript='$("#iframe-' . $imageSaveTime.$newFileNameBuild . '").parent().css({"transform-origin":"center bottom","transform":"rotateX(-3deg) rotateY(1deg)"});$("#iframe-' . $imageSaveTime.$newFileNameBuild . '").attr("src","' . $iframURL . '");';
            $sendjavascript = $buildjavascript;
            $buildhtml=addslashes($buildhtml);
            $buildhtml=htmlspecialchars($buildhtml);
            $buildjavascript=addslashes($buildjavascript);
            $buildjavascript=htmlspecialchars($buildjavascript);
            $imageWidth = 3840;
            $buildfloor = 0;
            $idSave = $outWithoutPath;
            $audText = "This is audio";  
          }
            $buildobject = 'class="tree fleoAt ';
        if ($buildfloor == 1) { $buildobject .= 'treeFloor'; };
        $buildobject .= '" style="';
    
    try {
      $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
if ($_POST["fleoNum"] == "anonymous") {
  $save_build_query = "INSERT INTO `$room` (`whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `thisID`, `object`, `name`, `width`, `scriptOn`, `script`, `author`, `heikel`, `floor`, `ip`, `isOnline`, `isRobot`, `audioStationText`) VALUES ('$idSave',1,'$buildcoords', 0, '$builddoords','','$buildobject','$buildhtml','$imageWidth',1,'$buildjavascript','$buildauthor',1,'$buildfloor','$fleoip',2,0);";
}
else if ($_POST["fleoNum"] == "3082e56c76") {
  $save_build_query = "INSERT INTO `$room` (`whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `thisID`, `object`, `name`, `width`, `scriptOn`, `script`, `author`, `heikel`, `floor`, `ip`, `isOnline`, `isRobot`, `audioStationText`) VALUES ('$idSave',1,'$buildcoords', 0, '$builddoords','','$buildobject','$buildhtml','$imageWidth',1,'$buildjavascript','$buildauthor',1,'$buildfloor','$fleoip',1,0);";
}
else {
  $save_build_query = "INSERT INTO `$room` (`whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `thisID`, `object`, `name`, `width`, `scriptOn`, `script`, `author`, `heikel`, `floor`, `ip`, `isOnline`, `isRobot`, `tick`, `tick2`, `audioStationText`) VALUES ('$idSave',1,'$buildcoords', 0, '$builddoords','','$buildobject','$buildhtml','$imageWidth',1,'$buildjavascript','$buildauthor',1,'$buildfloor','$fleoip',1,0,1,2,'$audText');";
}
$fleo_pdo->exec($save_build_query);
  } catch (PDOException $e) {
    echo "<br>" . $e->getMessage();
  }

  $subject = $sitename . " " . $idSave . " // in " . $room . " added";			
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
>>> 1 <<<

TIME: ' . $msg . '

Felix Longolius
  
For questions or suggestions, please feel free to write to felix@t-cup.space .';
  
  //Send the message, check for errors
  if(!$mail->Send()) {
  } else {
    echo "Saved! To be moderated.";
  }

}}
        ////////////////////////////
        ////////////////////////////
    if ($_POST["save"] == 9) {
      $goGabelstapler = 0;

        if (isset($_POST['coordsW'])) { 
          $buildcoords = (intval($_POST["coordsW"]) * -1) + 500; } else { $buildcoords = '0'; }
        if (intval($_POST["coordsW"]) > 0 && intval($_POST["coordsW"]) < 10000 && intval($_POST["coordsD"]) > -4500 && intval($_POST["coordsD"]) < 4500 && $room == "room-home") {
          $buildcoords = -3950;
        } 


        if (isset($_POST['coordsD'])) { 
          
          $builddoords = (intval($_POST["coordsD"]) * -1) + 3000; } else { $builddoords = '0'; } 
          if (intval($_POST["coordsW"]) > 0 && intval($_POST["coordsW"]) < 10000 && intval($_POST["coordsD"]) > -4500 && intval($_POST["coordsD"]) < 4500 && $room == "room-home") {
            $builddoords = 100;
            $goGabelstapler = 1;
          } 

        if (isset($_POST['fleoNum'])) { $buildauthor = $_POST["fleoNum"]; } else { $buildauthor = 'anonymous'; }

        ////////////////////////////
        ////////////////////////////
        $valid_extensions = array('jpeg', 'jpg', 'png'); // valid extensions
        $video_extensions = array('mp4', 'h264', 'avi', 'mkv', 'mpeg', 'mpg', 'mov', 'm4v', 'flv', '3gp', 'wmv', 'vob');
        $audio_extensions = array('mp3', 'aac', 'ac3', 'wav', 'wma', 'ogg', 'flac');
        $threeDModel = array('glb');
        $path = $fleoPathAbs . '/fleo.at_1.0.0/fleo.at-medien/userImages/'; // output directory
        $savePath = $fleoPathAbs . '/fleo.at_1.0.0-extras/uploadedFilesFleoat/'; // upload directory
        if($_FILES['userImage'])
        {
        
          $fileTmpPath = $_FILES['userImage']['tmp_name'];
          $fileName = $_FILES['userImage']['name'];
        
        $imageSaveTime = time();
        $newFileNameBuild = random_int(1000,1000000).random_int(1000,1000000);
        
        // get uploaded file's extension
        $ext = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
    
        
        $imgFilename = str_replace(".","", preg_replace('/\s+/', '', substr($fileName, 0, 9)));
        $fileSize = $_FILES['userImage']['size'];
        $fileType = $_FILES['userImage']['type'];
        $fileNameCmps = explode(".", $fileName);
        $fileExtension = strtolower(end($fileNameCmps));

        $newFileNameBuild = md5($imageSaveTime . $fileName);
        $newFileName = $newFileNameBuild . '.' . $fileExtension;
        $allowedfileExtensions = array('jpeg', 'jpg', 'png', 'gif', 'mp4', 'h264', 'avi', 'mkv', 'mpeg', 'mpg', 'mov', 'm4v', 'flv', '3gp', 'wmv', 'vob', 'mp3', 'aac', 'ac3', 'wav', 'wma', 'ogg', 'flac', 'pdf','glb');
        if (in_array($fileExtension, $allowedfileExtensions)) {
          $dest_path = $savePath . $newFileName;
          /* if(move_uploaded_file($_FILES['userImage']['tmp_name'], $dest_path))
          {
            $message = 'File is successfully uploaded.';
          }
          else
          {
            $message = 'There was some error moving the file to upload directory.';
          }*/
        }
        if (in_array($ext, $valid_extensions)) {

        $outWithPath = $path.$imageSaveTime.$imgFilename.$newFileNameBuild.'.'.$ext.'.webp';
        $outWithoutPath = $imageSaveTime.$imgFilename.$newFileNameBuild.'.'.$ext.'.webp';
    
        $cwebpResult = exec($fleoPathAbs . '/fleo.at_1.0.0-extras/bin/cwebp -q 75 -alpha_q 10 '.$_FILES['userImage']['tmp_name'].' -o '.$outWithPath.' 2>&1');
          echo $cwebpResult;
        $buildhtml = '<img src="/fleo.at-medien/userImages/'.$outWithoutPath.'" alt="deepmonitor.image undescribed" />';
        $sendhtml=$buildhtml;
        $sendjavascript="";
        $buildhtml=addslashes($buildhtml);
        $buildhtml=htmlspecialchars($buildhtml);
        $imageWidth = imagesx(imagecreatefromwebp($outWithPath));
        if (intval($_POST["coordsW"]) > -10000 && intval($_POST["coordsW"]) < 10000 && intval($_POST["coordsD"]) > -5000 && intval($_POST["coordsD"]) < 5000 || intval($_POST["coordsW"]) > -10000 && intval($_POST["coordsW"]) < 25000 && intval($_POST["coordsD"]) >= 1500 && intval($_POST["coordsD"]) < 18000) {
          $imageWidth = 600;
        }
        $buildfloor = 0;
        $idSave = $outWithoutPath;
        $audText = "This is audio";
        $isRobot = 0;
        } else if (in_array($ext, $video_extensions)) {
          $outWithPath = $path.$imageSaveTime.$imgFilename.$newFileNameBuild.'.'.$ext.'.mp4';
          $outWithoutPath = $imageSaveTime.$imgFilename.$newFileNameBuild.'.'.$ext.'.mp4';
          $outWithName = $imageSaveTime.$imgFilename;

          $outputABC = shell_exec('/usr/bin/ffmpeg -i '.$_FILES['userImage']['tmp_name'].' -vcodec h264 -acodec aac -strict -2 '.$outWithPath); // .' 2>&1'
          // echo $outputABC;
          $buildhtml = '<video class="audioStation" id="audStat-'.$imageSaveTime.$imgFilename.'" src="/fleo.at-medien/userImages/'.$outWithoutPath.'" style="position:absolute;left:230px;bottom:0;width:calc(100% - 230px);height:auto;pointer-events:auto;"></video><div id="audioStationAudioDiv-audStat-'.$imageSaveTime.$imgFilename.'" class="audioStationAudioDiv-audStat-'.$imageSaveTime.$imgFilename.'" style="width:140px;height:140px;border:16px solid #ffffff00;text-align:center;position:absolute;bottom:350px;left:24px;pointer-events:auto;"><div class="audioStationAudioPlay-audStat-'.$imageSaveTime.$imgFilename.'" style="cursor:pointer;"><img src="/fleo.at-js/push2Talk/fleoPlay.webp" style="position:absolute;top:0;left:0;width:100%;height:100%;" alt="fleo.Controls Play" /></div><div class="audioStationAudioStop-audStat-'.$imageSaveTime.$imgFilename.'" style="display:none;cursor:pointer;"><img src="/fleo.at-js/push2Talk/fleoStop.webp" style="position:absolute;top:0;left:0;width:100%;height:100%;" alt="fleo.Controls Stop" /></div></div><div id="audioStationText-audStat-'.$imageSaveTime.$imgFilename.'" style="font-weight:bold;pointer-events:auto;" contenteditable="true"></div><div id="letterCoinMillAudioStationTextLettercoin-1-audStat-'.$imageSaveTime.$imgFilename.'" style="position:absolute;margin:auto;display:flex;align-items:center;justify-content:center;bottom:0;height:56px;left:18px;width:56px;border:2px solid gray;border-radius:30px;overflow:hidden;padding:0px;font-size:56px;text-align:center;font-family:Courier,monospace;color:yellow;"></div><div id="letterCoinMillAudioStationTextLettercoin-2-audStat-'.$imageSaveTime.$imgFilename.'" style="position:absolute;margin:auto;display:flex;align-items:center;justify-content:center;bottom:0;height:56px;left:138px;width:56px;border:2px solid gray;border-radius:30px;overflow:hidden;padding:0px;font-size:56px;text-align:center;font-family:Courier,monospace;color:yellow;"></div><img src="/fleo.at-medien/audioStation_I.webp" style="width:216px;height:704px;pointer-events:none;" alt="audioStation" />';
          $sendhtml=$buildhtml;
          $sendjavascript="";
          $buildhtml=addslashes($buildhtml);
          $buildhtml=htmlspecialchars($buildhtml);
          $imageWidth = 1400;
          if (intval($_POST["coordsW"]) > -10000 && intval($_POST["coordsW"]) < 10000 && intval($_POST["coordsD"]) > -5000 && intval($_POST["coordsD"]) < 5000 || intval($_POST["coordsW"]) > -10000 && intval($_POST["coordsW"]) < 25000 && intval($_POST["coordsD"]) >= 1500 && intval($_POST["coordsD"]) < 18000) {
            $imageWidth = 600;
          }
          $buildfloor = 0;
          $idSave = "audStat-" . $outWithName;
          $audText = "video";
          $isRobot = 2;
        } else if ($ext == "gif") {
          $outWithPath = $path.$imageSaveTime.$imgFilename.$newFileNameBuild.'.'.$ext.'.webp';
          $outWithoutPath = $imageSaveTime.$imgFilename.$newFileNameBuild.'.'.$ext.'.webp';
          exec($fleoPathAbs . '/fleo.at_1.0.0-extras/bin/gif2webp -q 50 '.$_FILES['userImage']['tmp_name'].' -o '.$outWithPath);
          $buildhtml = '<img src="/fleo.at-medien/userImages/'.$outWithoutPath.'" alt="deepmonitor.gif undescribed" />';
          $sendhtml=$buildhtml;
          $sendjavascript="";
          $buildhtml=addslashes($buildhtml);
          $buildhtml=htmlspecialchars($buildhtml);
          exec('convert \''.$outWithPath.'[0]\' '.$outWithPath.'.still.webp');
          $imageWidth = imagesx(imagecreatefromwebp($outWithPath.'.still.webp'));
          if ($imageWidth < 100) { $imageWidth = 100; }
          if (intval($_POST["coordsW"]) > -10000 && intval($_POST["coordsW"]) < 10000 && intval($_POST["coordsD"]) > -5000 && intval($_POST["coordsD"]) < 5000 || intval($_POST["coordsW"]) > -10000 && intval($_POST["coordsW"]) < 25000 && intval($_POST["coordsD"]) >= 1500 && intval($_POST["coordsD"]) < 18000) {
            $imageWidth = 600;
          }
          $buildfloor = 0;
          $idSave = $outWithoutPath;
          $audText = "This is audio";
          $isRobot = 0;
        } else if ($ext == "pdf") {
          $outWithPath = $path.$imageSaveTime.$imgFilename.$newFileNameBuild.'.pdf';
          $outWithoutPath = $imageSaveTime.$imgFilename.$newFileNameBuild.'.pdf';
          exec('gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile='.$outWithPath.' '.$_FILES['userImage']['tmp_name']);
          $buildhtml = '<object width="1400" height="2000" type="application/pdf" data="/fleo.at-medien/userImages/'.$outWithoutPath.'?#zoom=100&scrollbar=1&toolbar=0&navpanes=0"><p>Here we want to display a pdf what seemingly does not work with this browser.</p></object>';
          $sendhtml=$buildhtml;
          $sendjavascript="";
          $buildhtml=addslashes($buildhtml);
          $buildhtml=htmlspecialchars($buildhtml);
          $imageWidth = 1400;
          if (intval($_POST["coordsW"]) > -10000 && intval($_POST["coordsW"]) < 10000 && intval($_POST["coordsD"]) > -5000 && intval($_POST["coordsD"]) < 5000 || intval($_POST["coordsW"]) > -10000 && intval($_POST["coordsW"]) < 25000 && intval($_POST["coordsD"]) >= 1500 && intval($_POST["coordsD"]) < 18000) {
            $imageWidth = 600;
          }
          $buildfloor = 0;
          $idSave = "pdf-" . $outWithoutPath;
          $audText = "This is audio";
          $isRobot = 0;
        } else if (in_array($ext, $audio_extensions)) {
          $outWithPath = $path.$imageSaveTime.$imgFilename.'.'.$ext.'.mp4';
          $outWithoutPath = $imageSaveTime.$imgFilename.'.'.$ext.'.mp4';
          $outWithName = $imageSaveTime.$imgFilename;
          $outputABC = shell_exec('/usr/bin/ffmpeg -i '.$_FILES['userImage']['tmp_name'].' -vcodec h264 -acodec aac -strict -2 '.$outWithPath); // .' 2>&1'
          // echo $outputABC;
          $buildhtml = '<audio class="audioStation" id="audStat-'.$imageSaveTime.$imgFilename.'" src="/fleo.at-medien/userImages/'.$outWithoutPath.'"></audio><div id="audioStationAudioDiv-audStat-'.$imageSaveTime.$imgFilename.'" class="audioStationAudioDiv-audStat-'.$imageSaveTime.$imgFilename.'" style="width:140px;height:140px;border:16px solid #ffffff00;text-align:center;position:absolute;bottom:350px;left:24px;pointer-events:auto;"><div class="audioStationAudioPlay-audStat-'.$imageSaveTime.$imgFilename.'" style="cursor:pointer;"><img src="/fleo.at-js/push2Talk/fleoPlay.webp" style="position:absolute;top:0;left:0;width:100%;height:100%;" alt="fleo.Controls Play" /></div><div class="audioStationAudioStop-audStat-'.$imageSaveTime.$imgFilename.'" style="display:none;cursor:pointer;"><img src="/fleo.at-js/push2Talk/fleoStop.webp" style="position:absolute;top:0;left:0;width:100%;height:100%;" alt="fleo.Controls Stop" /></div></div><div id="audioStationText-audStat-'.$imageSaveTime.$imgFilename.'" style="font-weight:bold;pointer-events:auto;" contenteditable="true"></div><div id="letterCoinMillAudioStationTextLettercoin-1-audStat-'.$imageSaveTime.$imgFilename.'" style="position:absolute;margin:auto;display:flex;align-items:center;justify-content:center;bottom:0;height:56px;left:18px;width:56px;border:2px solid gray;border-radius:30px;overflow:hidden;padding:0px;font-size:56px;text-align:center;font-family:Courier,monospace;color:yellow;"></div><div id="letterCoinMillAudioStationTextLettercoin-2-audStat-'.$imageSaveTime.$imgFilename.'" style="position:absolute;margin:auto;display:flex;align-items:center;justify-content:center;bottom:0;height:56px;left:138px;width:56px;border:2px solid gray;border-radius:30px;overflow:hidden;padding:0px;font-size:56px;text-align:center;font-family:Courier,monospace;color:yellow;"></div><img src="/fleo.at-medien/audioStation_I.webp" style="width:216px;height:704px;pointer-events:none;" alt="audioStation" />';
          $sendhtml=$buildhtml;
          $sendjavascript="";
          $buildhtml=addslashes($buildhtml);
          $buildhtml=htmlspecialchars($buildhtml);
          $imageWidth = 320;
          $buildfloor = 0;
          $idSave = "audStat-" . $outWithName;
          $audText = "audio";
          $isRobot = 2;
        } else if ($ext == "glb") {
          $sendhtml=$buildhtml;
          $sendjavascript="";
          $imageWidth = 1400;
          $outWithPath = $path.'threeDmodels/'.$imageSaveTime.$imgFilename.$newFileNameBuild.'.'.$ext.'.glb';
          $outWithoutPath = $imageSaveTime.$imgFilename.$newFileNameBuild.'.'.$ext.'.glb';
          // file_put_contents($outWithPath, file_get_contents($tmp));
        $buildhtml = $outWithPath;
        $buildhtml=addslashes($buildhtml);
        $buildhtml=htmlspecialchars($buildhtml);
        
        $imageWidth = 5;
        $buildfloor = 0; 
        $idSave = $outWithoutPath;
        $audText = "This is a threeDmodel browser file";
        }
        if (in_array($ext, $valid_extensions) || in_array($ext, $video_extensions) || $ext == "gif" || $ext == "pdf" || in_array($ext, $audio_extensions)) {
        $buildobject = 'class="tree fleoAt ';
        if ($buildfloor == 1) { $buildobject .= 'treeFloor'; };
        $buildobject .= '" style="';
        $lettercoinStart = '';


  $save_build_query = "INSERT INTO `$room` (`whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `thisID`, `object`, `name`, `width`, `scriptOn`, `author`, `heikel`, `floor`, `ip`, `isOnline`, `isRobot`, `tick`, `tick2`, `audioStationText`,`lettercoins`) VALUES ('$idSave',1,'$buildcoords', 0, '$builddoords','','$buildobject','$buildhtml','$imageWidth',1,'$buildauthor',1,'$buildfloor','$fleoip',1,'$isRobot',1,3,'$audText','$lettercoinStart');";

$fleo_pdo->exec($save_build_query);

  $subject = $sitename . " " . $idSave . " // in " . $room . " added";			
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
>>> 1 <<<

TIME: ' . $msg . '

Felix Longolius
  
For questions or suggestions, please feel free to write to felix@t-cup.space .';

  //Send the message, check for errors

 if(!$mail->Send()) {
  } else {
    
    echo "Saved! To be moderated.";
    if ($goGabelstapler == 1 && $room == "room-home") {
      include('fleo.at_dropWorker.php');
     } 
  } 
        } else if  (in_array($ext, $threeDModel)) {

          $save_build_query = "INSERT INTO `$room` (`whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `thisID`, `object`, `name`, `width`, `scriptOn`, `author`, `heikel`, `floor`, `ip`, `isOnline`, `isRobot`, `tick`, `tick2`, `audioStationText`,`lettercoins`) VALUES ('$idSave',1,'$buildcoords', 0, '$builddoords','','$buildobject','$buildhtml','$imageWidth',1,'$buildauthor',1,'$buildfloor','$fleoip',1,5,1,3,'$audText','$lettercoinStart');";

          $fleo_pdo->exec($save_build_query);
          
            $subject = $sitename . " " . $idSave . " // in " . $room . " threeDModel added";			
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
          >>> 1 <<<
          
          TIME: ' . $msg . '
          
          Felix Longolius
            
          For questions or suggestions, please feel free to write to felix@t-cup.space .';
          
            //Send the message, check for errors
          
           if(!$mail->Send()) {
            } else {
              
              echo "Saved! To be moderated.";
            }
        


        }


      }


}



if ($_POST["save"] == 4) { // donate
$toSave = $_POST["fragile"];
$words = $_POST["words"];
$wordsCheck = $words;
$wordsCheck = explode('<div class="">',trim($wordsCheck));
for ($i = 0; $i < count((array)$wordsCheck); $i++) { $wordsCheck[$i] = str_replace("</div>","",$wordsCheck[$i]); }
$firstletters = array_values($wordsCheck);
for ($i = 0; $i < count((array)$firstletters); $i++) { $firstletters[$i] = substr($firstletters[$i], 0, 1); }
$firstletters = json_encode(array_filter($firstletters));
$curl_handle = curl_init();
curl_setopt($curl_handle, CURLOPT_URL, 'https://usa.weltfernsehsender.de/lettercoins/pressLettercoinFromMill.php');
curl_setopt($curl_handle, CURLOPT_POST, 1);
curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl_handle, CURLOPT_POSTFIELDS, "firstletters=" . $firstletters);
$res = curl_exec($curl_handle);
curl_close($curl_handle);
    if ($res) {
    if ($res == "No Lettercoin at this Firstletters.") {
      echo $res;
    }
    if ($res == "1") {
  $words3 = $wordsCheck;
  for ($i = 0; $i < count((array)$words3); $i++) { $words3[$i] = substr($words3[$i], 0, 3); }
  $curl_handle = curl_init();
  curl_setopt($curl_handle, CURLOPT_URL, 'https://usa.weltfernsehsender.de/lettercoins/pressLettercoinFromMill.php');
  curl_setopt($curl_handle, CURLOPT_POST, 1);
  curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($curl_handle, CURLOPT_POSTFIELDS, "firstletters=" . $firstletters . "&words3=" . json_encode(array_values(array_filter($words3))));
  $res2 = curl_exec($curl_handle);
  curl_close($curl_handle); 
   if ($res2) {
  if ($res2 == "No Lettercoin at this words3.") {
    echo $res2;
  } else {
  $res2Parsed = json_decode(htmlspecialchars_decode($res2));
    for ($i = 0; $i < count((array)$wordsCheck); $i++) { $wordsCheck[$i] = substr($wordsCheck[$i], 0, 5); }
    if (array_values(array_filter($res2Parsed)) == array_values(array_filter($wordsCheck))) {
      try {
      $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $fleo_pdo->exec("UPDATE `$room` SET `lettercoins` = CONCAT(COALESCE(`lettercoins`,''), ',', '$words'), `ip`=concat(`ip`, ', $fleoip') WHERE `id` = $toSave");
      echo "2";
  } catch (PDOException $e) {
    echo "<br>" . $e->getMessage();
  }
  } else {
    echo "0";
}}
} else { echo "no result 2."; }
} else { echo "no result 1."; }
} else { echo "no result 0."; }
}
if ($_POST["save"] == 5) { // grab
  $toSave = $_POST["fragile"];
  $words = $_POST["words"];
  $wordsCheck = $words;
  $wordsCheck = explode('<div class="">',trim($wordsCheck));
  for ($i = 0; $i < count((array)$wordsCheck); $i++) { $wordsCheck[$i] = str_replace("</div>","",$wordsCheck[$i]); }
  $firstletters = array_values($wordsCheck);
  for ($i = 0; $i < count((array)$firstletters); $i++) { $firstletters[$i] = substr($firstletters[$i], 0, 1); }
  $firstletters = json_encode(array_filter($firstletters));
  $curl_handle = curl_init();
  curl_setopt($curl_handle, CURLOPT_URL, 'https://usa.weltfernsehsender.de/lettercoins/pressLettercoinFromMill.php');
  curl_setopt($curl_handle, CURLOPT_POST, 1);
  curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($curl_handle, CURLOPT_POSTFIELDS, "firstletters=" . $firstletters);
  $res = curl_exec($curl_handle);
  curl_close($curl_handle);
  if ($res) {
      if ($res == "No Lettercoin at this Firstletters.") {
        echo $res;
      }
      if ($res == "1") {
    $words3 = $wordsCheck;
    for ($i = 0; $i < count((array)$words3); $i++) { $words3[$i] = substr($words3[$i], 0, 3); }
    $curl_handle = curl_init();
    curl_setopt($curl_handle, CURLOPT_URL, 'https://usa.weltfernsehsender.de/lettercoins/pressLettercoinFromMill.php');
    curl_setopt($curl_handle, CURLOPT_POST, 1);
    curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl_handle, CURLOPT_POSTFIELDS, "firstletters=" . $firstletters . "&words3=" . json_encode(array_values(array_filter($words3))));
    $res2 = curl_exec($curl_handle);
    curl_close($curl_handle); 
  if ($res2) {
    if ($res2 == "No Lettercoin at this words3.") {
      echo $res2;
    } else {
    $res2Parsed = json_decode(htmlspecialchars_decode($res2));
      for ($i = 0; $i < count((array)$wordsCheck); $i++) { $wordsCheck[$i] = substr($wordsCheck[$i], 0, 5); }
      if (array_values(array_filter($res2Parsed)) == array_values(array_filter($wordsCheck))) {
        try {
        $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $fleo_pdo->exec("UPDATE `$room` SET `lettercoins` = REPLACE(`lettercoins`,',$words',''), `ip`=concat(`ip`, ', $fleoip') WHERE `id` = $toSave");
        echo $firstletters;
    } catch (PDOException $e) {
      echo "<br>" . $e->getMessage();
    }
    } else {
      echo "0";
  }}
  } else { echo "no result 2."; }
  } else { echo "no result 1."; }
  } else { echo "no result 0."; }
  }

  if ($_POST["save"] == 8) {
    $toCheckHat = $_POST["whereItGoesTo"];
    $getCheck = $fleo_pdo->prepare("SELECT `lettercoins` FROM `$room` WHERE `id`='$toCheckHat'");
    $getCheck->execute();
    $ResultCheck = $getCheck->fetch(PDO::FETCH_OBJ);
    echo substr_count($ResultCheck->lettercoins, ",");
}



  if ($_POST["save"] == 6) { // grab
    $toSave = $_POST["whereItGoesTo"];
    $words = $_POST["words"];
    $wordsCheck = $words;
    $wordsCheck = explode('<div class="">',trim($wordsCheck));
    for ($i = 0; $i < count((array)$wordsCheck); $i++) { $wordsCheck[$i] = str_replace("</div>","",$wordsCheck[$i]); }
    $firstletters = array_values($wordsCheck);
    for ($i = 0; $i < count((array)$firstletters); $i++) { $firstletters[$i] = substr($firstletters[$i], 0, 1); }
    $firstletters = json_encode(array_filter($firstletters));
    $curl_handle = curl_init();
    curl_setopt($curl_handle, CURLOPT_URL, 'https://usa.weltfernsehsender.de/lettercoins/pressLettercoinFromMill.php');
    curl_setopt($curl_handle, CURLOPT_POST, 1);
    curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl_handle, CURLOPT_POSTFIELDS, "firstletters=" . $firstletters);
    $res = curl_exec($curl_handle);
    curl_close($curl_handle);
    if ($res) {
        if ($res == "No Lettercoin at this Firstletters.") {
          echo $res;
        }
        if ($res == "1") {
      $words3 = $wordsCheck;
      for ($i = 0; $i < count((array)$words3); $i++) { $words3[$i] = substr($words3[$i], 0, 3); }
      $curl_handle = curl_init();
      curl_setopt($curl_handle, CURLOPT_URL, 'https://usa.weltfernsehsender.de/lettercoins/pressLettercoinFromMill.php');
      curl_setopt($curl_handle, CURLOPT_POST, 1);
      curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
      curl_setopt($curl_handle, CURLOPT_POSTFIELDS, "firstletters=" . $firstletters . "&words3=" . json_encode(array_values(array_filter($words3))));
      $res2 = curl_exec($curl_handle);
      curl_close($curl_handle); 
    if ($res2) {
      if ($res2 == "No Lettercoin at this words3.") {
        echo $res2;
      } else {
      $res2Parsed = json_decode(htmlspecialchars_decode($res2));
        for ($i = 0; $i < count((array)$wordsCheck); $i++) { $wordsCheck[$i] = substr($wordsCheck[$i], 0, 5); }
        if (array_values(array_filter($res2Parsed)) == array_values(array_filter($wordsCheck))) {
          try {
          $fleo_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          $fleo_pdo->exec("UPDATE `$room` SET `lettercoins` = CONCAT(COALESCE(`lettercoins`,''), ',', '$words'), `ip`=concat(`ip`, ', $fleoip') WHERE `id` = '$toSave'");
          echo $firstletters;
      } catch (PDOException $e) {
        echo "<br>" . $e->getMessage();
      }
      } else {
        echo "0";
    }}
    } else { echo "no result 2."; }
    } else { echo "no result 1."; }
    } else { echo "no result 0."; }
    }

  }

if ($_POST["save"] == 7) { // check
    if (isset($_POST["words"]) && isset($_POST["firstletters"])) {
    $words = $_POST["words"];
    $firstlettersToCheck = $_POST["firstletters"];
    $firstlettersToCheck = str_split($firstlettersToCheck);
    $firstlettersToCheck = json_encode(array_combine(range(1, count($firstlettersToCheck)), $firstlettersToCheck), JSON_FORCE_OBJECT);
    $wordsCheck = urldecode($words);
    $wordsCheck = explode('<div class="">',trim($wordsCheck));
    for ($i = 0; $i < count((array)$wordsCheck); $i++) { $wordsCheck[$i] = str_replace("</div>","",$wordsCheck[$i]); }
    $firstletters = array_values($wordsCheck);
    for ($i = 0; $i < count((array)$firstletters); $i++) { $firstletters[$i] = substr($firstletters[$i], 0, 1); }
    $firstletters = json_encode(array_filter($firstletters));
    if ($firstletters == $firstlettersToCheck) {
      $words5 = array_values($wordsCheck);
      for ($i = 0; $i < count((array)$words5); $i++) { $words5[$i] = substr($words5[$i], 0, 5); }
      $curl_handle = curl_init();
      curl_setopt($curl_handle, CURLOPT_URL, 'https://usa.weltfernsehsender.de/lettercoins/pressLettercoinFromMill.php');
      curl_setopt($curl_handle, CURLOPT_POST, 1);
      curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
      curl_setopt($curl_handle, CURLOPT_POSTFIELDS, "firstletters=" . $firstletters . "&words5=" . json_encode(array_values(array_filter($words5))));
      $res = curl_exec($curl_handle);
      curl_close($curl_handle);
      if ($res) {
        if ($res == "No Lettercoin at this words5.") {
          echo $res;
        } else {
        $resParsed = htmlspecialchars_decode($res);
        $words3 = array_values($wordsCheck);
        for ($i = 0; $i < count((array)$words3); $i++) { $words3[$i] = substr($words5[$i], 0, 3); }
        if ($resParsed == json_encode(array_values(array_filter($words3)))) {
          echo urldecode($words);
        } else {
          echo "No Lettercoins at this words.";
        }
      }} else {
        echo "Communication with server problem.";
      }} else {
        echo "Firstletters do not match words.";
      }
    }
  }}