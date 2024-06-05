<?php
if ($_POST["what"] == "remove") { 
setcookie($_POST["firstletters"], "",array(
    'expires' => time()-3600,
    'path' => '/r',
    'domain' => 'kitchen.fleo.at',
    'secure' => true,
    'httponly' => false,
    'samesite' => 'none'
));
}
if ($_POST["what"] == "set") { 
setcookie($_POST["firstletters"],$_POST["words"],array(
    'expires' => time()+60*60*24*365,
    'path' => '/r',
    'domain' => 'kitchen.fleo.at',
    'secure' => true,
    'httponly' => false,
    'samesite' => 'none'
));
}