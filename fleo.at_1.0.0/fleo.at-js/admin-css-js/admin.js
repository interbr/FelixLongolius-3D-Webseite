tinymce.init({
    selector: "#topmedia",theme: "modern",width: 680,height: 50,
	document_base_url: window.location.protocol + '//' + window.location.host+'/',
	relative_urls: false,
    remove_script_host: true,
    plugins: [
         "responsivefilemanager code"
   ],
   external_plugins: { "filemanager" : "/felix/admin-css-js/filemanager/plugin.min.js"},
   toolbar1: "undo redo | responsivefilemanager | image media | code ",
   menubar: false,
   image_advtab: true,
   forced_root_block : false,
   
  external_filemanager_path: "/felix/admin-css-js/filemanager/",
  filemanager_title: "Responsive Filemanager",
  filemanager_subfolder:"felix/admin-css-js/",
  filemanager_access_key: "abcdefg"
 });
tinymce.init({
    selector: "#introtext",theme: "modern",width: 680,height: 200,
	document_base_url: window.location.protocol + '//' + window.location.host+'/',
	relative_urls: false,
    remove_script_host: true,
    plugins: [
         "autolink link charmap hr wordcount insertdatetime nonbreaking emoticons paste textcolor code"
   ],
   toolbar1: "undo redo | bold italic underline | link unlink | forecolor backcolor | code",
   menubar: false,
 });
tinymce.init({
    selector: "#fulltext",theme: "modern",width: 680,height: 300,
	document_base_url: window.location.protocol + '//' + window.location.host+'/',
	relative_urls: false,
    remove_script_host: true,
    plugins: [
         "advlist autolink link image lists charmap print preview hr anchor",
         "searchreplace wordcount visualblocks visualchars insertdatetime media nonbreaking",
         "table contextmenu directionality emoticons paste textcolor responsivefilemanager code"
   ],
   external_plugins: { "filemanager" : "/felix/admin-css-js/filemanager/plugin.min.js"},
   toolbar1: "undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | styleselect",
   toolbar2: "| responsivefilemanager | link unlink anchor | image media | forecolor backcolor  | print preview code ",
   image_advtab: true ,
   
  external_filemanager_path: "/felix/admin-css-js/filemanager/",
  filemanager_title: "Responsive Filemanager",
  filemanager_subfolder:"felix/admin-css-js/",
  filemanager_access_key: "abcdefg"
 });
 
function open_popup(url)
{
        var w = 880;
        var h = 570;
        var l = Math.floor((screen.width-w)/2);
        var t = Math.floor((screen.height-h)/2);
        var win = window.open(url, 'ResponsiveFilemanager', "scrollbars=1,width=" + w + ",height=" + h + ",top=" + t + ",left=" + l);
}