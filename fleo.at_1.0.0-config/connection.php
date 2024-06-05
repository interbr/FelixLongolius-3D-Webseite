<?php
require_once('configuration.php');
$fleo_pdo = new PDO("mysql:host=127.0.0.1;dbname=" . $db, $dbuser, $dbpw);