<?php
if (isset($_GET["client"])) {
    $creator = $_GET["client"];
    $room = "room-" . $_GET["room"];
	$individual = "audStat" . random_int(0,99999999);
    require('../../fleo.at_1.0.0-config/connection.php');
    $get_user = $fleo_pdo->query("SELECT isAdmin FROM `present` WHERE `number` = '$creator' ORDER BY id ASC LIMIT 1");
    $get_user->execute();
    $get_user_datas = $get_user->fetchAll(PDO::FETCH_OBJ);
	foreach ($get_user_datas as $get_user_data) {
		$isAdmin = $get_user_data->isAdmin;
	  }    
?>
<link href="/fleo.at-js/edit/codemirror.css" rel="stylesheet">
<style>
.CodeMirror {
      resize: vertical;
}
</style>
<script>
		var url3 = "/fleo.at-js/edit/codemirror.js";
		var url4a = "/fleo.at-js/edit/xml/xml.js";
		var url4b = "/fleo.at-js/edit/javascript/javascript.js";
		var url4c = "/fleo.at-js/edit/css/css.js";
		var url4d = "/fleo.at-js/edit/htmlmixed/htmlmixed.js";
		var url5 = "/fleo.at-js/edit/adminAS.js";
		$.getScript(url3, function(){$.getScript(url4a, function(){$.getScript(url4b, function(){$.getScript(url4c, function(){$.getScript(url4d, function(){$.getScript(url5);});});});});});
</script>
<form id="add-formAS" name="add-formAS" class="add-formAS">

<div style="float:left;display:none;">
<div style="position:relative;width:216px;height:539px;"><div id="audioStationTextContainer" style="position:absolute;top:70px;left:6px;width:193px;height:135px;color:black;"><div id="audioStationBuildText" contenteditable="true"></div></div><img src="/fleo.at-medien/audioStation_Ib.webp" /></div>
</div>

<div style="float:left;width:100%;height:140px;max-width:500px;padding:4px;background:#ffffff6f;font-size:30px;" id="audioStationDemandContainer"></div>

<div style="float:left;width:100%;max-width:500px;padding:4px;background:#ffffff6f;display:none;">
<div>
<div id="push2TalkRec" class="audioStationBuildControls" style="width:180px;height:30px;color:red;float:left;margin-right:10px;">Rec &#9673;</div>
<div id="push2TalkRecUpload" class="audioStationBuildControls" style="width:180px;height:30px;color:white;text-shadow:none;background:red;float:left;margin-right:10px;display:none;">Stop & Upload</div>
<!--<div id="push2Talk5s" class="audioStationBuildControls" style="width:50px;height:30px;color:black;float:left;margin-right:10px;">5s</div>
<div id="push2Talk10s" class="audioStationBuildControls" style="width:50px;height:30px;color:black;float:left;margin-right:10px;">10s</div>-->
<div id="push2TalkOwnMute" class="audioStationBuildControls" style="width:75px;height:30px;color:black;float:left;display:none;">mute</div>
<div id="push2TalkOwnUnmute" class="audioStationBuildControls" style="width:75px;height:30px;display:none;text-decoration:line-through;float:left;">mute</div>
<div id="push2TalkReplayRec" class="audioStationBuildControls" style="width:160px;height:30px;background:white;color:black;float:left;display:none;">Replay & Rec</div>
</div>
</div>

<div style="float:left;width:500px;padding:4px;background:#47ccf06f;">
<div id="audioRecTracks" style="float:left;">
<div id="audioRecOthers" style="width:500px;"></div>
</div>
</div>

<div style="float:left;padding:4px;max-width:400px;min-width:200px;display:none;">
<p>Does your audioStation have a name?</p>
<p><div class=""><label for="buildnameAS" class="form">Name </label><input type="text" class="form-control form" name="buildnameAS" id="buildnameAS" value="" style="max-width: 400px" readonly="readonly"></div></p>
</div>

<div style="float:left;min-width:292px;padding:4px;display:none;">
<p><div><label for="buildhtmlAS" class="form">html </label>
<textarea type="textarea" class="form-control form buildcode" name="buildhtml" id="buildhtmlAS"></textarea></div></p>
</div>

<div style="float:left;min-width:892px;padding:4px;display:none;">
<p><div><label for="buildjavascriptAS" class="form">javascript </label>
<textarea type="textarea" class="form-control form buildcode" name="buildjavascript" id="buildjavascriptAS"></textarea></div></p>
</div>

<div style="float:left;padding:4px;display:none;">
<p><div><label for="buildwidth" class="form">Width? (How much do you need?) </label><input type="text" class="form-control form" name="buildwidth" id="buildwidth" value="216" style="width: 200px"> (Default width: 400px plus border: 2 x 10px = 420px)</div></p>
<p><div><label for="buildheight" class="form">Distance from ground? </label><input type="text" class="form-control form" name="buildheight" id="buildheight" value="0" style="width: 200px"> (100 is little, 4000 is the sky)</div></p>
</div>

<div style="float:left;padding:4px;display:none;">
<div class="" style="display: none"><input type="text" id="audioStationUrl" name="audioStationUrl" value=""></div>
<div class="" style="display: none"><input type="text" id="monsterID" name="monsterID" value="<?php echo $individual ?>"></div>
<div class="" style="display: none"><input type="text" name="room" value="<?php echo $room; ?>"></div>
<div class="" style="display: none"><input type="text" name="buildauthor" value="<?php echo $creator; ?>"></div>
<div class="" style="display: none"><input type="text" id="formIsRobot" name="isRobot" value="0"></div>
<p><div class="" style=""><label for="buildcoords" class="form">Coords: </label><input type="text" name="buildcoords" id="buildcoords" value="<?php echo $_GET["buildcoords"]; ?>"></div></p>
<p><div class="" style=""><label for="builddoords" class="form">Doords: </label><input type="text" name="builddoords" id="builddoords" value="<?php echo $_GET["builddoords"]; ?>"></div></p>
</div>

<div style="float:left;width:100%;max-width:500px;padding:4px;background:#ffffff6f;display:none;">
<?php 
if ($isAdmin > 0) {
echo '<label for="isOnline">How online is this:</label><br />', PHP_EOL;
echo PHP_EOL;
echo '<input type="radio" name="isOnline" id="isOnline_3" value="3"><label for="isOnline_3">Offline</label><br />', PHP_EOL;
echo '<input type="radio" name="isOnline" id="isOnline_2" value="2"><label for="isOnline_2">Online only for user and admin</label><br />', PHP_EOL;
echo '<input type="radio" name="isOnline" id="isOnline_1" value="1" checked><label for="isOnline_1">Online</label>', PHP_EOL;
} else {
echo '<label for="isOnline" style="display:none">How online is this:</label><br style="display:none" />', PHP_EOL;
echo PHP_EOL;
echo '<input type="radio" name="isOnline" id="isOnline_3" value="3" style="display:none"><label style="display:none" for="isOnline_3">Offline</label><br />', PHP_EOL;
echo '<input type="radio" name="isOnline" id="isOnline_2" value="2" style="display:none"><label style="display:none" for="isOnline_2">Online only for user and admin</label>', PHP_EOL;
echo '<input type="radio" name="isOnline" id="isOnline_1" value="1" style="display:none" checked><label style="display:none" for="isOnline_1">Online</label>', PHP_EOL;
}
?>
</div>

<div style="float:left;width:100%;max-width:500px;min-width:200px;padding:4px;background:#ffffff6f;">
<span id="saveHint">Legend:
<p><div style="width:30px;height:30px;background:red;display:inline-block;text-align:center;line-height:30px;">G</div><div style="width:30px;height:30px;background:gray;display:inline-block;text-align:center;line-height:30px;">G</div> = Gain on or off (recording silence)</p>
<p><div style="width:30px;height:30px;background:gray;display:inline-block;text-align:center;line-height:30px;">V</div><div style="width:30px;height:30px;background:blue;display:inline-block;text-align:center;line-height:30px;">V</div> = Change volume with gain</p>
</span>
<button style="display:none;" id="savebtnAudioStation" class="savebtnAudioStation addButtonAudioStation" type="submit" name="action">Save</button><button style="display:none;" id="cancelbtn" class="cancelButton">Cancel</button>
</div>
<div style="float:left;width:100%;max-width:500px;padding:4px;background:#47ccf06f;font-size:30px;">Hit the red button to send your recording.</div>
<div style="float:left;width:100%;max-width:500px;padding:4px;background:#ffffff6f;font-size:30px;"><button id="newbtn" class="newButton" style="font-size:30px;">New</button></div>
</div>
</form>

<script type="text/javascript">
$("#newbtn").click(function(){
audioSystemJustLoaded = 1;
$("#push2TalkUserUpload").click();
$("#savebtnAudioStation").click();
recordingReset = 1; 
setTimeout(function(){ document.getElementById("callerAudio-ReplaySound").pause(); $("#push2TalkUserWants").click(); }, 2000);
})
doTheAudioStationStuff();
</script>

<?php } ?>