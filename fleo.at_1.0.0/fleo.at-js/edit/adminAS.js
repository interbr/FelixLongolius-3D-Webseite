if ($("#buildhtmlAS").length) {
  var myCodeMirror3 = CodeMirror.fromTextArea(document.getElementById("buildhtmlAS"), {
    lineNumbers: true,
    lineWrapping: true,
    mode: "htmlmixed"
  }); }
  if ($("#buildjavascriptAS").length) {
var myCodeMirror4 = CodeMirror.fromTextArea(document.getElementById("buildjavascriptAS"), {
    lineNumbers: true,
    lineWrapping: true,
    mode: "javascript"
  }); }