<?php
if (isset($_GET["client"])) {
    $creator = $_GET["client"];

if (isset($_GET["monster"])) {
    $monster = $_GET["monster"];
	require('../../fleo.at_1.0.0-config/connection.php');
	$getRoom = $fleo_pdo->prepare("SELECT `room` FROM `present` WHERE `number`='$creator'");
	$getRoom->execute();
	$room = "room-" . $getRoom->fetchColumn();
    $get_monster = $fleo_pdo->query("SELECT * FROM `$room` WHERE onOff = '1' AND id = '$monster' ORDER BY id ASC LIMIT 1");
    $get_monster->execute();
    $get_monster_datas = $get_monster->fetchAll(PDO::FETCH_OBJ);
	$get_user = $fleo_pdo->query("SELECT isAdmin FROM `present` WHERE `number` = '$creator' ORDER BY id ASC LIMIT 1");
    $get_user->execute();
    $get_user_datas = $get_user->fetchAll(PDO::FETCH_OBJ);
foreach ($get_monster_datas as $get_monster_data) {
    $monsterName = $get_monster_data->whatIsThis;
    $ame = $get_monster_data->name;
    $isID = $get_monster_data->thisID;
    $ject = $get_monster_data->object;
    $ordsH = $get_monster_data->coordsH;
    $width = $get_monster_data->width;
    $ordsD = $get_monster_data->coordsD;
    $ordsW = $get_monster_data->coordsW;
    $scriptOn = $get_monster_data->scriptOn;
    $author = $get_monster_data->author;
    $script = $get_monster_data->script;
    $floor = $get_monster_data->floor;
	$isOnline = $get_monster_data->isOnline;	
	$isRobot = $get_monster_data->isRobot;
}
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
		var url5 = "/fleo.at-js/edit/admin.js";
		$.getScript(url3, function(){$.getScript(url4a, function(){$.getScript(url4b, function(){$.getScript(url4c, function(){$.getScript(url4d, function(){$.getScript(url5);});});});});}); 
		spacebarText = 1;
</script>
<?php if ($isAdmin > 0) { echo '<span class="h2" id="deleteFragile" style="float:right;cursor:pointer;">Delete</span>'; } ?>
<span class="h1">Edit an object</span>
<br /><br />

<form id="add-formBE" name="add-formBE" class="add-form">

<p>You are changing:</p>

<p><div class=""><label for="buildname" class="form">Name </label><input readonly type="text" class="form-control form" name="buildname" id="buildname" value="<?php echo $monsterName; ?>" style="width: 400px"></div></p>

<p><div>
<input type="checkbox" class="form" name="buildfloor" <?php if ($floor == "on") { echo "checked"; } ?>>
    <label class="form">Is your object supposed to lay on the floor? </label>
</div></p>

<p><div class=""><label for="buildhtml" class="form">html </label><textarea type="textarea" class="form-control form buildcode" name="buildhtml" id="buildhtml">
<?php echo html_entity_decode(htmlspecialchars_decode($ame)); ?>
</textarea></div></p>

<p><div class=""><label for="buildjavascript" class="form">javascript </label><textarea type="textarea" class="form-control form buildcode" name="buildjavascript" id="buildjavascript">
<?php echo html_entity_decode(htmlspecialchars_decode($script)); ?>
</textarea></div></p>

<p><div class=""><label for="buildwidth" class="form">Width? (How much do you need?) </label><input type="text" class="form-control form" name="buildwidth" id="buildwidth" value="<?php echo $width; ?>" style="width: 200px"> (Default width: 400px plus border: 2 x 10px = 420px</div></p>
<p><div class=""><label for="buildheight" class="form">Distance from ground? </label><input type="text" class="form-control form" name="buildheight" id="buildheight" value="<?php echo $ordsH; ?>" style="width: 200px"> (100 is little, 4000 is the sky)</div></p>

<div class="" style="display: none"><input type="text" name="monsterID" value="<?php echo $monster; ?>"></div>
<div class="" style="display: none"><input type="text" name="buildauthor" value="<?php echo $creator; ?>"></div>
<div class="" style="display: none"><input type="text" name="room" value="<?php echo $room; ?>"></div>
<div class="" style="display: none"><input type="text" id="formIsRobot" name="isRobot" value="<?php echo $isRobot; ?>"></div>
<div class="" style=""><input type="text" name="buildcoords" value="<?php echo (intval($ordsW) * -1); ?>"></div>
<div class="" style=""><input type="text" name="builddoords" value="<?php echo (intval($ordsD) * -1); ?>"></div>

<?php  
if ($isAdmin > 0) {
echo '<label for="isOnline">How online is this:</label>', PHP_EOL;
echo PHP_EOL;
echo '<input type="radio" name="isOnline" id="isOnline_3" value="3" ' . ($isOnline == 3 ? 'checked':'') . '><label for="isOnline_3">Offline</label>', PHP_EOL;
echo '<input type="radio" name="isOnline" id="isOnline_2" value="2" ' . ($isOnline == 2 ? 'checked':'') . '><label for="isOnline_2">Online only for user and admin</label>', PHP_EOL;
echo '<input type="radio" name="isOnline" id="isOnline_1" value="1" ' . ($isOnline == 1 ? 'checked':'') . '><label for="isOnline_1">Online</label>', PHP_EOL;
echo '</select>', PHP_EOL;
} else {
echo '<label for="isOnline">How online is this:</label>', PHP_EOL;
echo PHP_EOL;
echo '<input type="radio" name="isOnline" id="isOnline_3" value="3" ' . ($isOnline == 3 ? 'checked':'') . '><label for="isOnline_3">Offline</label>', PHP_EOL;
echo '<input type="radio" name="isOnline" id="isOnline_2" value="2" ' . ($isOnline == 2 ? 'checked':'') . '><label for="isOnline_2">Online only for user and admin</label>', PHP_EOL;
echo '<input type="radio" style="display:none" name="isOnline" id="isOnline_1" value="1" ' . ($isOnline == 1 ? 'checked':'') . '><label style="display:none" for="isOnline_1">Online</label>', PHP_EOL;
echo '</select>', PHP_EOL;
}
?>

<p><div class=""><input id="previewbtn" type="submit" name="action" value="Preview" />&nbsp;<input id="savebtn" class="savebtn" type="submit" name="action" value="Save" style="display:none;" /></div> <span id="saveHint" style="display:none;">(If you grabbed a sign, you see your own buildings instantly. But everything will be reviewed before publishing for others. Please drop me a message if you feel like I forgot something. Don't forget to click "Save".)</span></p>
</form>
<button id="cancelbtn">Cancel</button>
<button id="fullAgain" style="display:none">Full again</button>
<div id="editor-preview">
<div id="preview"></div>
</div></div>



	  
<script type="text/javascript">
$("#previewbtn").click(function(){
			$.ajax({
				cache: false,
				type:'POST',
				url:'/fleo.at-php/fleo.at_buildPreview.php',
				data: $('#add-formBE').serialize(),
				success: function(preview) {
				  toastr.success('Trying to make a preview ...');
				  if ($("#buildpreview").length) { $("#buildpreview").html(preview); } else {
				  $("#wrapper").append('<div id="buildpreview">' + preview + '</div>'); }
				  $("#thisBox").css("height", "100px");
				  $(".savebtn").show();
				  $("#saveHint").show();
				  $("#fullAgain").show();
				  $("#thisBox").scrollTop($("#thisBox")[0].scrollHeight);
				}
			});
return false;
});

$("#deleteFragile").click(function(){
	$("#isOnline_3").prop('checked', true);
	$(".savebtn").click();
});
	
$(".savebtn").click(function(){
$("#buildpreview").remove();
$('#add-formBE').submit(function(e) { 
$("#thisBox").hide();
spacebarText = 0;
e.preventDefault();	
			$.ajax({
				cache: false,
				type:'POST',
				url:'/fleo.at-php/fleo.at_buildSave.php',
				data: $(this).serialize(),
				success: function(data) {
				  toastr.success('Saved ...');
				}
			});
return false;
});
});

$("#cancelbtn").click(function(){	
	$("#thisBox").hide();
	edith = 0;
	spacebarText = 0;
});

$("#fullAgain").click(function(){	
	$("#fullAgain").hide();
	$("#thisBox").css("height", "80%");
});


</script>

<?php }} ?>
