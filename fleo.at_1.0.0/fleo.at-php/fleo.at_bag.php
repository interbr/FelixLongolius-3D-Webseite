<?php
require('../../fleo.at_1.0.0-config/connection.php');
if (isset($_POST['doing'])) {
if ($_POST['doing'] == 1) {

$iam = $_POST['iam'];
$them = $_POST['them'];

$sql = $fleo_pdo->prepare("SELECT `kindOfGuy` FROM `present` WHERE `number`='$them'");
$sql->execute();
$results = $sql->fetchAll(PDO::FETCH_OBJ);
foreach ($results as $result) {
  echo $result->kindOfGuy;
}
}
if ($_POST['doing'] == 2) {

$iam = $_POST['iam'];

$sql = $fleo_pdo->prepare("SELECT `kindOfGuy` FROM `present` WHERE `number`='$iam';");
$sql->execute();
$results = $sql->fetchAll(PDO::FETCH_OBJ);
foreach ($results as $result) {
if (!str_contains($result->kindOfGuy, '1')) {
$changedMedals = $result->kindOfGuy . "1";
$fleo_pdo->exec("UPDATE `present` SET `kindOfGuy`='$changedMedals' WHERE `number`='$iam';");
}
}
}
if ($_POST['doing'] == 4) {

$iam = $_POST['iam'];

$sql = $fleo_pdo->prepare("SELECT `kindOfGuy` FROM `present` WHERE `number`='$iam';");
$sql->execute();
$results = $sql->fetchAll(PDO::FETCH_OBJ);
foreach ($results as $result) {
if (!str_contains($result->kindOfGuy, '2')) {
$changedMedals = $result->kindOfGuy . "2";
$fleo_pdo->exec("UPDATE `present` SET `kindOfGuy`='$changedMedals' WHERE `number`='$iam';");
}
}
}

if ($_POST['doing'] == 9) {
    if (intval($_POST['result']) == 15) {

    $iam = $_POST['iam'];
    
    $sql = $fleo_pdo->prepare("SELECT `kindOfGuy` FROM `present` WHERE `number`='$iam';");
    $sql->execute();
    $results = $sql->fetchAll(PDO::FETCH_OBJ);
    foreach ($results as $result) {
    if (!str_contains($result->kindOfGuy, '3')) {
    $changedMedals = $result->kindOfGuy . "3";
    $fleo_pdo->exec("UPDATE `present` SET `kindOfGuy`='$changedMedals' WHERE `number`='$iam';");
    }
    echo "Made Chef!";
    }
    } else {
        echo "Wrong result!";
    }

    }


if ($_POST['doing'] == 3) {

$iam = $_POST['iam'];
$them = $_POST['them'];
$newKindOfGuy = $_POST['newKindOfGuy'];
$makeAdmin = $_POST['makeAdmin'];
$sqlUpper = $fleo_pdo->prepare("SELECT `kindOfGuy`, `isAdmin` FROM `present` WHERE `number`='$iam';");
$sqlUpper->execute();
$resultsUpper = $sqlUpper->fetchAll(PDO::FETCH_OBJ);
$sqlTarget = $fleo_pdo->prepare("SELECT `kindOfGuy`, `isAdmin` FROM `present` WHERE `number`='$them';");
$sqlTarget->execute();
$resultsTarget = $sqlTarget->fetchAll(PDO::FETCH_OBJ);

foreach ($resultsUpper as $resultUpper) {
foreach($resultsTarget as $resultTarget) {
if ($resultUpper->isAdmin == 0) {
        $resultUpper = str_replace("guy","",$resultUpper->kindOfGuy);
        $myMedals = str_split($resultUpper);

        $newKindOfGuy = str_replace("guy","",$newKindOfGuy);
        $themMedals = str_split($newKindOfGuy);

        $oldKindOfGuy = str_replace("guy","",$resultTarget->kindOfGuy);
        $themOldMedals = str_split($oldKindOfGuy);

        if (!array_diff($themMedals, $myMedals)) {

            if (in_array("2", $themMedals) && in_array("3", $myMedals)) {
                if (($key = array_search("2", $themMedals)) !== false) {
                    unset($themMedals[$key]);
                }
            }
            if (in_array("3", $themMedals) && $isAdmin == 0) {
                if (($key = array_search("3", $themMedals)) !== false) {
                    unset($themMedals[$key]);
                }
            }
            if (!in_array("2", $themMedals) && in_array("2", $themOldMedals) && (!in_array("3", $myMedals) || (!in_array("3", $myMedals) && $resultUpper->isAdmin == 0))) {
            array_push($themMedals, "2");
            }
            if (!in_array("3", $themMedals) && in_array("3", $themOldMedals) && $resultUpper->isAdmin == 0) {
            array_push($themMedals, "3");
            }

        $possible = "guy" . implode("",$themMedals);
        
        $fleo_pdo->exec("UPDATE `present` SET `kindOfGuy`='$possible' WHERE `number`='$them';");

        }
    } else {
        $resultUpper = str_replace("guy","",$resultUpper->kindOfGuy);
        $myMedals = str_split($resultUpper);

        $newKindOfGuy = str_replace("guy","",$newKindOfGuy);
        $themMedals = str_split($newKindOfGuy);

        $oldKindOfGuy = str_replace("guy","",$resultTarget->kindOfGuy);
        $themOldMedals = str_split($oldKindOfGuy);

        if (!array_diff($themMedals, $myMedals)) {

            if ($resultTarget->isAdmin == 2) {
                $makeAdmin = $resultTarget->isAdmin;
            }
            if ($makeAdmin == 0 && $resultTarget->isAdmin == 1) {
                $makeAdmin = 0;
            }

        $possible = "guy" . implode("",$themMedals);
        $fleo_pdo->exec("UPDATE `present` SET `kindOfGuy`='$possible', `isAdmin`='$makeAdmin' WHERE `number`='$them';"); 
        }
    }
        echo implode("",$myMedals), PHP_EOL;
        echo implode("",$themMedals), PHP_EOL;
        echo $possible;
    }
}
}
}