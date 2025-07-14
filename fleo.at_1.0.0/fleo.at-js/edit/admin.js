var buildPhpOpen = 0;

if ($("#buildhtml").length) {
  var myCodeMirror1 = CodeMirror.fromTextArea(document.getElementById("buildhtml"), {
    mode: "htmlmixed",
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    indentUnit: 4,
    indentWithTabs: true
  }); 
  myCodeMirror1.getWrapperElement().id = "buildhtmlCM";
}
if ($("#buildjavascript").length) {
var myCodeMirror2 = CodeMirror.fromTextArea(document.getElementById("buildjavascript"), {
    mode: "javascript",
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    indentUnit: 4,
    indentWithTabs: true
  }); 
  myCodeMirror2.getWrapperElement().id = "buildjavascriptCM";
}
$("#getphp2codeEditor").click(function(){
$("#getphp2codeEditor").hide();
$("#getphp2codeEditor").remove();
$("#cancelReceivePhp").slideDown();
if ($("#buildphp").length) {
window.myCodeMirror3 = CodeMirror.fromTextArea(document.getElementById("buildphp"), {
    mode: "application/x-php",
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    indentUnit: 4,
    indentWithTabs: true
  });
  window.myCodeMirror3.getWrapperElement().id = "buildphpCM";
  window.myCodeMirror3.setValue("");
  window.myCodeMirror3.setOption("readOnly", true);
  window.myCodeMirror3.refresh();
  phpSrc = new EventSource('https://' + mainDomain + '/fleo.at-php/fleo.at_buildEdit.php?doing=0&client=' + (myNumber[0] + myNumber[2]).replace("#", "") + '&monster=' + $('input[name="monsterID"]').val() + '&requestEditPhp=1');
  phpSrc.onmessage = function (e) {};
  phpSrc.addEventListener('editphpdrippledone', function (e) {
  phpSrc.close();
  window.myCodeMirror3.refresh();
  window.myCodeMirror3.setOption("readOnly", false);
  $("#cancelReceivePhp").slideUp("fast");
  });
  $("#cancelReceivePhp").click(function(){
  phpSrc.close();
  window.myCodeMirror3.setOption("readOnly", false);
  });
  phpSrc.addEventListener('editphpdripple', function (e) {
  phpData = JSON.parse(e.data);
  window.myCodeMirror3.replaceRange(
    phpData.chunk,
    CodeMirror.Pos(
      window.myCodeMirror3.lastLine(),
      window.myCodeMirror3.getLine(myCodeMirror3.lastLine()).length
    )
  );
  });
  $("#phpBuildFormDiv").slideDown("slow");
  $("#getPhpSnippets").slideDown("slow");
}
});

$("#getHtmlSnippets").click(function(){
  if (buildHtmlOpen == 0) { 
    buildHtmlOpen = 1; 
  $("#getHtmlSnippets").toggleClass("snippetsClosed snippetsOpen");
  $.get("/fleo.at-php/edit-php-scripts/fleo.at_getSnippets.php?getwhat=html", function(data) {
    $("#htmlSnippets").html(data);
  });
  $("#htmlSnippets").show("drop", { direction: "up", easing: "linear", duration: 1000 });
  } else {
    buildHtmlOpen = 0;
    $("#getHtmlSnippets").toggleClass("snippetsClosed snippetsOpen");
    $("#htmlSnippets").hide("fold", { direction: "up", easing: "linear", duration: 1000 });
  }
});

$("#getJavascriptSnippets").click(function(){
  if (buildJavascriptOpen == 0) { 
    buildJavascriptOpen = 1; 
  $("#getJavascriptSnippets").toggleClass("snippetsClosed snippetsOpen");
  $.get("/fleo.at-php/edit-php-scripts/fleo.at_getSnippets.php?getwhat=javascript", function(data) {
    $("#javascriptSnippets").html(data);
  });
  $("#javascriptSnippets").show("drop", { direction: "up", easing: "linear", duration: 1000 });
  } else {
    buildJavascriptOpen = 0;
    $("#getJavascriptSnippets").toggleClass("snippetsClosed snippetsOpen");
    $("#javascriptSnippets").hide("fold", { direction: "up", easing: "linear", duration: 1000 });
  }
});

$("#getPhpSnippets").click(function(){
  if (buildPhpOpen == 0) { 
    buildPhpOpen = 1; 
  $("#getPhpSnippets").toggleClass("snippetsClosed snippetsOpen");
  $.get("/fleo.at-php/edit-php-scripts/fleo.at_getSnippets.php?getwhat=php", function(data) {
    $("#phpSnippets").html(data);
  });
  $("#phpSnippets").show("drop", { direction: "up", easing: "linear", duration: 1000 });
  } else {
    buildPhpOpen = 0;
    $("#getPhpSnippets").toggleClass("snippetsClosed snippetsOpen");
    $("#phpSnippets").hide("fold", { direction: "up", easing: "linear", duration: 1000 });
  }
});