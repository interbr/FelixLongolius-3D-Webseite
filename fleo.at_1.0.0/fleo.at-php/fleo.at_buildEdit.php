<?php
header("Cache-Control: no-cache");
header("Content-Type: text/event-stream");
header("X-Accel-Buffering: no");
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
	if (isset($_GET["requestEditPhp"])) {
			echo "Output php to edit and store in database", PHP_EOL;
			echo PHP_EOL;

			$robotData = $get_monster_data->robotData;
			$robotData = html_entity_decode(htmlspecialchars_decode($robotData));
			$length = strlen($robotData);
			$step = 15;

			for ($i = 0; $i < $length; $i += $step) {
				$chunk = substr($robotData, $i, $step);
				echo 'id: ' . $i . '', PHP_EOL;
                echo 'event: editphpdripple', PHP_EOL;
                echo 'data: ' . json_encode(array("chunk"=>"{$chunk}")), PHP_EOL;
			    echo PHP_EOL;	
				@ob_flush();
				flush();
				usleep(250000);
			}
				echo 'id: ' . $i + 1, PHP_EOL;
                echo 'event: editphpdrippledone', PHP_EOL;
                echo 'data: ' . json_encode(array("steps"=>"$i")), PHP_EOL;
			    echo PHP_EOL;	
				@ob_flush();
				flush();




			exit("data served");
		}




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
<link href="/fleo.at-js/edit/codemirror.css?20250304_20CEWT" rel="stylesheet">
<style>
.CodeMirror {
    resize: vertical;
}
#getHtmlSnippets, #getJavascriptSnippets, #getphp2codeEditor, #getPhpSnippets, #getPhpBuilder, #cancelReceivePhp {
	width: calc(100% - 10px);
	height: 20px;
	border: 1px solid black;
	padding: 4px;
	margin: 0 0 10px 0;
	cursor: pointer;
}
#htmlBuildFormDiv, #javascriptBuildFormDiv, #phpBuildFormDiv {
	width: 100%;
}
#getHtmlSnippets:hover, #getJavascriptSnippets:hover, #getphp2codeEditor:hover, #getPhpSnippets:hover, #getPhpBuilder:hover, #cancelReceivePhp:hover {
	background-color: #ccc;
}
.snippetsOpen {
	background-color: #ccc;
}
.snippetsClosed {
	background-color: none;
}
#htmlSnippets, #javascriptSnippets, #phpSnippets {
	display: none;
	width: calc(100% - 10px);
	min-height: 100px;
	border: 1px solid black;
	padding: 4px;
	margin: 10px 0 10px 0;
}
.htmlSnippetName, .javascriptSnippetName, .phpSnippetName {
	cursor: pointer;
	border: 1px solid black;
	padding: 4px;
	width: auto;
	height: auto;
	margin: 0 8px 8px 0;
	display: inline-block;
}
.htmlSnippetName:hover, .javascriptSnippetName:hover, .phpSnippetName:hover {
	background: #ccc;
  }
.response-block {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 15px;
}

.code-box {
  display: block;
  background: #272822;
  color: #f8f8f2;
  padding: 10px;
  font-family: monospace;
  white-space: pre-wrap;
  overflow-x: auto;
}

.paste-btn {
  margin-top: 8px;
  display: inline-block;
  padding: 6px 12px;
}
#codeOutput {
  padding: 20px;
  background: #f5f5f5;
  border-radius: 12px;
  max-height: 600px;
  overflow-y: auto;
  font-family: 'Segoe UI', sans-serif;
}

.chat-bubble {
  margin: 10px 0;
  padding: 15px;
  border-radius: 15px;
  max-width: 80%;
  word-wrap: break-word;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.user-bubble {
  background: #d1e7dd;
  align-self: flex-end;
  text-align: right;
}

.assistant-bubble {
  background: #fff;
  border-left: 4px solid #0d6efd;
}

.code-box {
  background: #f0f0f0;
  color: black;
  padding: 10px;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  overflow-x: auto;
}

.paste-btn {
  margin-top: 10px;
  padding: 6px 12px;
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.paste-btn:hover {
  background-color: #0b5ed7;
}

</style>
<script>
		var url3 = "/fleo.at-js/edit/codemirror.js";
		var url4a = "/fleo.at-js/edit/xml/xml.js";
		var url4b = "/fleo.at-js/edit/javascript/javascript.js";
		var url4c = "/fleo.at-js/edit/css/css.js";
		var url4d = "/fleo.at-js/edit/htmlmixed/htmlmixed.js";
		var url4e = "/fleo.at-js/edit/php/php.js";
		var url4f = "/fleo.at-js/edit/clike/clike.js";
		var url5 = "/fleo.at-js/edit/admin.js?20250712_04bCEST";
		$.getScript(url3, function(){$.getScript(url4a, function(){$.getScript(url4b, function(){$.getScript(url4c, function(){$.getScript(url4d, function(){$.getScript(url4e, function(){$.getScript(url4f, function(){$.getScript(url5);});});});});});});}); 
		spacebarText = 1;
</script>
<?php if ($isAdmin > 0) { echo '<span class="h2" id="deleteFragile" style="float:right;cursor:pointer;">Delete</span>'; } ?>
<span class="h1">Edit an object</span>
<br /><br />

<form class="add-formBE" name="add-formBE" class="add-form">

<p>You are changing:</p>
<p><div class=""><label for="buildname" class="form">Name </label><input readonly type="text" class="form-control form" name="buildname" id="buildname" value="<?php echo $monsterName; ?>" style="width: 400px"></div></p>

<p><div>
<input type="checkbox" class="form" name="buildfloor" <?php if ($floor == "on") { echo "checked"; } ?>>
    <label class="form">Is your object supposed to lay on the floor? </label>
</div></p>

<p><div style="position:relative;width:100%;height:auto;"><div id="getHtmlSnippets" class="snippetsClosed">get html snippets</div></div><div id="htmlSnippets">html snippets</div><div id="htmlBuildFormDiv" class=""><label for="buildhtml" class="form">html</label><textarea type="textarea" class="form-control form buildcode" name="buildhtml" id="buildhtml">
<?php echo html_entity_decode(htmlspecialchars_decode($ame)); ?>
</textarea></div></div></p>



<p><div style="position:relative;width:100%;height:auto;"><div id="getJavascriptSnippets" class="snippetsClosed">get javascript snippets</div></div><div id="javascriptSnippets">javascript snippets</div><div id="javascriptBuildFormDiv" class=""><label for="buildjavascript" class="form">javascript</label><textarea type="textarea" class="form-control form buildcode" name="buildjavascript" id="buildjavascript">
<?php echo html_entity_decode(htmlspecialchars_decode($script)); ?>
</textarea></div></p>


<div style="position:relative;width:100%;height:auto;"><div id="getphp2codeEditor" class="snippetsClosed">get php-functions server</div><div id="cancelReceivePhp" style="display:none">Cancel receive code</div></div>

<p><div style="position:relative;width:100%;height:auto;"><div id="getPhpSnippets" class="snippetsClosed" style="display:none;">get php snippets</div><div id="getPhpBuilder" class="builderClosed" style="display:none;">get php builder</div></div><div style="display:none;" id="phpSnippets">php snippets</div>

</form>

<div style="display:none;" id="phpBuilder"><div id="chatContainer"><textarea type="textarea" id="chatInput">Type your prompt...</textarea><button id="sendBtn">Send</button></div><div id="codeOutput" style="width:calc(100% - 30px);max-height:300px;background:white;border:1px solid black;overflow-y:scroll;"></div></div>

<form class="add-formBE">

<div id="phpBuildFormDiv" style="display:none;"><label for="buildphp" class="form">php</label><textarea type="textarea" class="form-control form buildcode" name="buildphp" id="buildphp">
php not requested
</textarea></div></p>



<p><div class=""><label for="buildwidth" class="form">Width? (How much do you need?) </label><input type="text" class="form-control form" name="buildwidth" id="buildwidth" value="<?php echo $width; ?>" style="width: 200px"> (Default width: 400px plus border: 2 x 10px = 420px</div></p>
<p><div class=""><label for="buildheight" class="form">Distance from ground? </label><input type="text" class="form-control form" name="buildheight" id="buildheight" value="<?php echo $ordsH; ?>" style="width: 200px"> (100 is little, 4000 is the sky)</div></p>

<div class="" style="display: none"><input type="text" name="monsterID" value="<?php echo $monster; ?>"></div>
<div class="" style="display: none"><input type="text" name="buildauthor" value="<?php echo $creator; ?>"></div>
<div class="" style="display: none"><input type="text" name="room" value="<?php echo $room; ?>"></div>
<div class="" style="display: none"><input type="text" id="formIsRobot" name="isRobot" value="<?php echo $isRobot; ?>"></div>
<div class="" style="">Coords: <input type="text" name="buildcoords" value="<?php echo (intval($ordsW) * -1); ?>"></div>
<div class="" style="">Doords: <input type="text" name="builddoords" value="<?php echo (intval($ordsD) * -1); ?>"></div>

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
$("#previewbtn").click(function(e){
  e.preventDefault();
window.myCodeMirror1.save();
window.myCodeMirror2.save();
window.myCodeMirror3.save();
  let formData = $('.add-formBE').serialize();
			$.ajax({
				cache: false,
				type:'POST',
				url:'/fleo.at-php/fleo.at_buildPreview.php',
				data: formData,
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
	
$(".savebtn").click(function(e){
  e.preventDefault();
$("#buildpreview").remove();
$("#thisBox").hide();
window.myCodeMirror1.save();
window.myCodeMirror2.save();
window.myCodeMirror3.save();
let formData = $('.add-formBE').serialize();
spacebarText = 0;
			$.ajax({
				cache: false,
				type:'POST',
				url:'/fleo.at-php/fleo.at_buildSave.php',
				data: formData,
				success: function(data) {
				  toastr.success('Saved ...');
				}
			});
return false;
});

$("#cancelbtn").click(function(){	
	$("#buildpreview").remove();
	$("#thisBox").hide();
	edith = 0;
	spacebarText = 0;
	buildHtmlOpen = 0;
	buildJavascriptOpen = 0;
	if (typeof phpSrc !== "undefined" && phpSrc instanceof EventSource) {
	phpSrc.close();
	}
});

$("#fullAgain").click(function(){	
	$("#fullAgain").hide();
	$("#thisBox").css("height", "80%");
});

function sendPrompt() {
    const userPrompt = $("#chatInput").val().trim();
    if (!userPrompt) return;

    // Create user message bubble
    const userBubble = $("<div>").addClass("chat-bubble user-bubble").text(userPrompt);
    $("#codeOutput").append(userBubble);

    $.ajax({
      type: "POST",
      url: "https://funny-bunnies.fleo.at/fleo.at-php/fragiles/fleo.at_builder.php",
      data: { prompt: userPrompt },
      success: function (response) {
        console.log(response);
        try {
          const buildPhpData = JSON.parse(response);

          // Create assistant message bubble
          const assistantBubble = $("<div>").addClass("chat-bubble assistant-bubble");

          // Code block
          const codeBox = $("<pre><code>")
            .text(buildPhpData.answer)
            .addClass("code-box");

          // Paste button
          const pasteBtn = $("<button>")
            .text("📋 Paste to CodeMirror")
            .addClass("paste-btn")
            .click(function () {
              const doc = window.myCodeMirror3.getDoc();
              const cursor = doc.getCursor();
              doc.replaceRange(buildPhpData.answer, cursor);
            });

          assistantBubble.append(codeBox, pasteBtn);
          $("#codeOutput").append(assistantBubble);
        } catch (err) {
          console.error("Failed to parse response:", err);
        }
      },
      error: function (xhr, status, error) {
        console.error("Prompt failed:", error);
      }
    });

    $("#chatInput").val(""); // Clear input
  }

  // Button click
  $("#sendBtn").click(sendPrompt);

  // Enter key
$("#chatInput").keypress(function (e) {
  if (e.which === 13 && !e.shiftKey) {
    e.preventDefault(); 
    sendPrompt(); 
  }
});

</script>

<?php }} ?>
