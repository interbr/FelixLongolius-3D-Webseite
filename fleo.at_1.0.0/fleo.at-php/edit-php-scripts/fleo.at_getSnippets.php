<?php
$whatSnippets = htmlspecialchars(strip_tags($_GET["getwhat"]));
// Set the directory containing .txt files
$directory = "../../fleo.at-js/edit/snippets/" . $whatSnippets;

// Initialize an empty string to hold the concatenated content
$concatenatedContent = "";

// Open the directory
if (is_dir($directory)) {
    if ($handle = opendir($directory)) {
        // Loop through all files in the directory
        while (($file = readdir($handle)) !== false) {
            // Check if the file has a .txt extension
            if (pathinfo($file, PATHINFO_EXTENSION) === "txt") {
                // Get the filename without the extension
                $filename = pathinfo($file, PATHINFO_FILENAME);
                // Get the file content
                $fileContent = file_get_contents($directory . "/" . $file);
                // Enclose the filename and content in separate <div> tags and append them
                $concatenatedContent .= '<div class="'.$whatSnippets.'SnippetDiv">';
                $concatenatedContent .= '<div class="'.$whatSnippets.'SnippetName">' . htmlspecialchars($filename) . '</div>';
                $concatenatedContent .= '<div class="'.$whatSnippets.'Snippet" style="display:none;">' . htmlspecialchars($fileContent) . '</div>';
                $concatenatedContent .= '</div>';
            }
        }
        closedir($handle);
    }
}

if ($whatSnippets == "html") { $codeMirrorNumber = 1; } else if ($whatSnippets == "javascript") { $codeMirrorNumber = 2;} else if ($whatSnippets == "php") { $codeMirrorNumber = 3;}

// Output the concatenated content
$concatenatedContent .= '<script>$(".'.$whatSnippets.'SnippetName").click(function() { console.log($(this).siblings(".'.$whatSnippets.'Snippet").html()); window.myCodeMirror'.$codeMirrorNumber.'.replaceSelection($(this).siblings(".'.$whatSnippets.'Snippet").html()); });</script>';
echo $concatenatedContent;
?>
