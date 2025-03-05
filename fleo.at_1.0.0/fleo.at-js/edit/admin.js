if ($("#buildhtml").length) {
  var myCodeMirror1 = CodeMirror.fromTextArea(document.getElementById("buildhtml"), {
    lineNumbers: true,
    lineWrapping: true,
    mode: "htmlmixed"
  }); 
  myCodeMirror1.getWrapperElement().id = "buildhtmlCM";
}
if ($("#buildjavascript").length) {
var myCodeMirror2 = CodeMirror.fromTextArea(document.getElementById("buildjavascript"), {
    lineNumbers: true,
    lineWrapping: true,
    mode: "javascript"
  }); 
  myCodeMirror2.getWrapperElement().id = "buildjavascriptCM";
}

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