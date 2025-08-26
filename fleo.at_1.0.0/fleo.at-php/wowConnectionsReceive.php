<?php
require_once('../../fleo.at_1.0.0-config/connection.php');

if (!isset($_POST["resizeUpdate"])) {

$start = $_POST['start'];
$end = $_POST['end'];

$idStart     = $start['id'];
$xStart      = $start['xPercent'];
$yStart      = $start['yPercent'];
$heightStart = $start['treeHeight'];
$widthStart  = $start['treeWidth'];

$idEnd       = $end['id'];
$xEnd        = $end['xPercent'];
$yEnd        = $end['yPercent'];
$heightEnd   = $end['treeHeight'];
$widthEnd    = $end['treeWidth'];

$stmt = $fleo_pdo->prepare("
    INSERT INTO `room-home-itemConnections` 
    (`id`, `idHeight`, `idWidth`, `active`, `connectionTo`, `connectingToHeight`, `connectingToWidth`, `leftXStart`, `topYStart`, `leftXEnd`, `topYEnd`) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
");

$stmt->execute([
    $idStart,
    $heightStart,
    $widthStart,
    1,
    $idEnd,
    $heightEnd,
    $widthEnd,
    $xStart,
    $yStart,
    $xEnd,
    $yEnd
]);

echo json_encode(['status' => 'success']);
} else {

if ($_POST['resizeUpdate'] == 1) {
    $idToUpdate = $_POST['idToUpdate'];
    $width = $_POST['width'];
    $height = $_POST['height'];
    $room = $_POST["room"];
    $tableName = "room-" . $room . "-itemConnections";

    // Update rows where `id` matches
    $stmt1 = $fleo_pdo->prepare("UPDATE `$tableName` SET idWidth = ?, idHeight = ? WHERE id = ?");
    $stmt1->execute([$width, $height, $idToUpdate]);

    // Update rows where `connectingTo` matches
    $stmt2 = $fleo_pdo->prepare("UPDATE `$tableName` SET connectingToWidth = ?, connectingToHeight = ? WHERE connectionTo = ?");
    $stmt2->execute([$width, $height, $idToUpdate]);

    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "no_update"]);
}
}