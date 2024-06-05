if ($("#buildhtml").length) {
  var myCodeMirror1 = CodeMirror.fromTextArea(document.getElementById("buildhtml"), {
    lineNumbers: true,
    lineWrapping: true,
    mode: "htmlmixed"
  }); }
if ($("#buildjavascript").length) {
var myCodeMirror2 = CodeMirror.fromTextArea(document.getElementById("buildjavascript"), {
    lineNumbers: true,
    lineWrapping: true,
    mode: "javascript"
  }); }