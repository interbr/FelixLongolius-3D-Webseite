<?php
if (isset($_POST["huh"])) {
$huh = $_POST["huh"];
$what = $_POST["what"];
$much = $_POST["much"];
require_once('connection.php');
$get_game = $game_pdo->prepare("SELECT * FROM MEESEvsRICHTER ORDER BY `id` DESC LIMIT 1;");
$get_game->execute();
$get_game_datas = $get_game->fetchAll(PDO::FETCH_OBJ);
foreach ($get_game_datas as $get_game_data) {
if ($huh == "m") {
$meeseScore = $get_game_data->MEESE;
$richterScore = $get_game_data->RICHTER - $much;
}
if ($huh == "r") {
$meeseScore = $get_game_data->MEESE - $much;
$richterScore = $get_game_data->RICHTER;
}
if ($huh == "x") {
$meeseScore = 100;
$richterScore = 100;
}
}
try {
$game_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$game_punch_query = "INSERT INTO `MEESEvsRICHTER` (`action`,`MEESE`,`RICHTER`) VALUES ('$what','$meeseScore','$richterScore');";
$game_pdo->exec($game_punch_query);
} catch (PDOException $e) {
  echo "<br>" . $e->getMessage();
}
}