<?php
if (isset($_POST['doing'])) {
require('../../fleo.at_1.0.0-config/connection.php');
$moveFragileW = 0;
$moveFragileD = 0;
$moveFragileH = 0;
$meIam = random_int(1000000,2000000);
$i = 0;
$goBaby = 1;

$id = $_POST['fragile'];
$view = $_POST['view'];

$get_fragile = $fleo_pdo->prepare("SELECT `whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `isRobot`, `program`, `isOnline` FROM `sketches4piece` WHERE `isRobot` = '1' AND `onOff` = '1' AND `whatIsThis` = '$id';"); 

$get_fragile->execute(); 
$row = $get_fragile->fetch();

if ($row["isRobot"] !== 1) { echo "no robot"; }
if ($row["isOnline"] !== 1 && $row["isOnline"] !== 2) { echo "no online"; }
if ($row["program"] == $meIam) { echo "same program"; }

$FragileW = $row["coordsW"];
$FragileD = $row["coordsD"];
$FragileH = $row["coordsH"];

$field = $_POST['field'];

$field = substr($field, 2, 4);

if ($view == "b") {

if ($field == "0_0") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` - 900, `coordsD` = `coordsD` - 3, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
    } else 
if ($field == "0_1") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` - 700, `coordsD` = `coordsD` - 5, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
    } else 
if ($field == "0_2") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 0, `coordsD` = `coordsD` - 7, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
    } else
if ($field == "0_3") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 700, `coordsD` = `coordsD` - 5, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
    } else 
if ($field == "0_4") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 900, `coordsD` = `coordsD` - 3, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
} else

if ($field == "1_0") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` - 900, `coordsD` = `coordsD` - 2, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
    } else 
if ($field == "1_1") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` - 700, `coordsD` = `coordsD` - 4, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
    } else 
if ($field == "1_2") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 0, `coordsD` = `coordsD` - 5, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
    } else
if ($field == "1_3") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 700, `coordsD` = `coordsD` - 4, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
    } else 
if ($field == "1_4") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 900, `coordsD` = `coordsD` - 2, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
} else
      
if ($field == "2_0") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` - 2000, `coordsD` = `coordsD` + 0, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
    } else
if ($field == "2_1") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` - 1200, `coordsD` = `coordsD` + 0, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
    } else 
if ($field == "2_2") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 0, `coordsD` = `coordsD` + 0, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
    } else
if ($field == "2_3") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 1200, `coordsD` = `coordsD` + 0, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
    } else
if ($field == "2_4") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 2000, `coordsD` = `coordsD` + 0, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
} else

if ($field == "3_0") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` - 900, `coordsD` = `coordsD` + 2, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
    } else 
if ($field == "3_1") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` - 700, `coordsD` = `coordsD` + 4, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
    } else 
if ($field == "3_2") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 0, `coordsD` = `coordsD` + 5, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
    } else
if ($field == "3_3") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 700, `coordsD` = `coordsD` + 4, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
    } else 
if ($field == "3_4") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 900, `coordsD` = `coordsD` + 2, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
} else

if ($field == "4_0") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` - 900, `coordsD` = `coordsD` + 3, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
    } else 
if ($field == "4_1") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` - 700, `coordsD` = `coordsD` + 5, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
    } else
if ($field == "4_2") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 0, `coordsD` = `coordsD` + 7, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
} else
if ($field == "4_3") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 700, `coordsD` = `coordsD` + 5, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
    } else 
if ($field == "4_4") {
    $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 900, `coordsD` = `coordsD` + 3, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
    $fleo_pdo->exec($set_fragile);
}

} else if ($view == "f") {
    if ($field == "0_0") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` - 900, `coordsD` = `coordsD` + 3, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
        } else 
    if ($field == "0_1") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` - 700, `coordsD` = `coordsD` + 5, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
        } else 
    if ($field == "0_2") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 0, `coordsD` = `coordsD` + 7, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
        } else
    if ($field == "0_3") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 700, `coordsD` = `coordsD` + 5, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
        } else 
    if ($field == "0_4") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 900, `coordsD` = `coordsD` + 3, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
    } else
    
    if ($field == "1_0") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` - 900, `coordsD` = `coordsD` + 2, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
        } else 
    if ($field == "1_1") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` - 700, `coordsD` = `coordsD` + 4, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
        } else 
    if ($field == "1_2") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 0, `coordsD` = `coordsD` + 5, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
        } else
    if ($field == "1_3") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 700, `coordsD` = `coordsD` + 4, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
        } else 
    if ($field == "1_4") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 900, `coordsD` = `coordsD` + 2, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
    } else
          
    if ($field == "2_0") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` - 2000, `coordsD` = `coordsD` + 0, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
        } else
    if ($field == "2_1") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` - 1200, `coordsD` = `coordsD` + 0, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
        } else 
    if ($field == "2_2") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 0, `coordsD` = `coordsD` + 0, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
        } else
    if ($field == "2_3") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 1200, `coordsD` = `coordsD` + 0, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
        } else
    if ($field == "2_4") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 2000, `coordsD` = `coordsD` + 0, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
    } else
    
    if ($field == "3_0") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` - 900, `coordsD` = `coordsD` - 2, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
        } else 
    if ($field == "3_1") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` - 700, `coordsD` = `coordsD` - 4, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
        } else 
    if ($field == "3_2") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 0, `coordsD` = `coordsD` - 5, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
        } else
    if ($field == "3_3") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 700, `coordsD` = `coordsD` - 4, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
        } else 
    if ($field == "3_4") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 900, `coordsD` = `coordsD` - 2, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
    } else
    
    if ($field == "4_0") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` - 900, `coordsD` = `coordsD` - 3, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
        } else 
    if ($field == "4_1") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` - 700, `coordsD` = `coordsD` - 5, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
        } else
    if ($field == "4_2") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 0, `coordsD` = `coordsD` - 7, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
    } else
    if ($field == "4_3") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 700, `coordsD` = `coordsD` - 5, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
        } else 
    if ($field == "4_4") {
        $set_fragile = "UPDATE sketches4piece SET `coordsW` = `coordsW` + 900, `coordsD` = `coordsD` - 3, `coordsH` = 0, `tick` = `tick` + 1, `program` = '$meIam' WHERE `whatIsThis` = '$id';";
        $fleo_pdo->exec($set_fragile);
    }

}
}