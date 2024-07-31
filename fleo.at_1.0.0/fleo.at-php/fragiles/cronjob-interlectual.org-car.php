<?php
$moveFragileW = 0;
$moveFragileD = 0;
$moveFragileH = 0;
$meIam = random_int(1000000,2000000);
$i = 0;
$goBaby = 1;
$oldNewSameCar = 0;

$carAt0 = "https://kitchen.fleo.at";
$carAt1 = "https://places.fleo.at";
$carAt2 = "https://in.fleo.at";
$carAt3 = "https://popular.gb.fleo.at";
$carAt4 = "https://fleo.at";

$whichCar = random_int(0,3);

// Die Kommentare sind für mit der Materie Beschäftigte möglicherweise fröhlich stimmend, interessant und orientierend. 
$carNewCoordsW = random_int(-200000,200000); // Diese Programmierung ändere ich gleich, der Wert der Koordinaten wird um das zehnfache von mir erhöht, so könnte aber ich bin mir nicht sicher, die gesamte Landkarte erfasst sein und wenn Sie bereits einen Nutzen haben, können Sie leicht umrechnen (durch Teilen durch zehn ist gemeint). wird also: $carNewCoordsW = random_int(-200000,200000);
$carNewCoordsD = random_int(-200000,200000); // wird $carNewCoordsD = random_int(-200000,200000); , wenn mir nichts dazwischen kommt, nehme ich die Arbeit in ca. 10 Minuten um 15:40 (15:50, weil ich so viel geschrieben habe) CEST vor.
// Dieses Angebot meines wie uach immer "Hilfe"-Fahrzeugs in der online-Welt gibt es seit ca. zehn Stunden +/- (wann habe ich das gemacht? Gestern tagsüber, also eher ca. 20 Stunden.)
// zur Zeit fährt die online-Figur "interlectual.org-car" nur ungefähr vor der Westküste Afrikas hin und her in den online-Welten wie oben ersichtlich, zur Zeit ohne die "Hauptadresse" "fleo.at", also aber unter den subdomains wie ersichtlich. Wenn ich die möglichen Koordinaten erweitere, wird die Karre nach ungefährer Betrachtung die gesamte irdische Weltkarte in der online-Welt erreichen können.
// So merke ich an, dass die "coords" im Gegensatz zu den "doords" (die "doords" sind bei staandard-Perspektive in der Richtung hinten/vorne, die coords also links/rechts), dass die coords teilweise in der Programmierung mit dem Faktor 3 oder 300 zu mulitlizieren bzw dividieren sind, um longituden und latituden zu entsprechen.
// Ich freue mich wenn ich Ihnen eine Idee gebe, dass Sie weltweit geplatzte Autoreifen darstellen um dem Handel mit gefälschten Autoreifen Einhalt zu gebieten. :) Jedenfalls wechselt das "interlectual.org-car" jede Minute seinen Ort und das noch auf vier Webseiten verteilt (immer nur in einer Welt aktiv zur Zeit) (auf Grund der Programmierung ist es aber zeitweise in zwei der "Welten" noch zu sehen, weil das entfernen länger dauert, als das "Erscheinen") (nicht so wichtig, es ist grob betrachtet an einem Ort den man als "Coordinaten" erkennen würde, und das jeweils in einer von vier Webseiten.)
// Im Grunde will aber einem Nutzen als Unterstützung für User, falls es diese gibt, nicht konterkariert werden duch jedwede Form der Überfrachtung. Dann übersteigert das ganze meine Vorstellungskräfte und Analyse als möglicherweise komplett unterdrückte Erfinderperson, möglicherweise Inhaber der größten 3D-Welt dieser Tage, das kann ich nicht wissen.
// Es wäre so, dass der einfache Besucher durch ein einfaches Rechtesystem gestützt, die Webseite besuchen würde, und mit einfachen Mitteln "drauf los" bauen kann. Die einfache Rechteverwaltung bedeutet, dass man beliebig für sich selbst "bauen" kann (html und javascript, sowie Bild, Video und Audiodateien durch "hineinwerfen", ferner das erstellen von Audioaufnahmen in der online-Welt), beliebig für sich selbst bauen kann, erst wenn eine Programmierung freigegeben wird, wäre diese dann allgemein verfügbar. Der Programmcode muss bei der Browser-PRgrammiersprache "javascript" oder auch "ecma-javascript" wohl eher weitgehend intakt sein, der analytische Blick auf verschiedenen Programmiersprachen muss mir aber abhanden sein.

$whichCarOld = file_get_contents("/var/www/kitchen.fleo.at/fleo.at_1.0.0/fleo.at-php/fragiles/interlectual.org-car-location.txt");
file_put_contents("/var/www/kitchen.fleo.at/fleo.at_1.0.0/fleo.at-php/fragiles/interlectual.org-car-location.txt", $whichCar);

if ($whichCarOld == $whichCar) { $oldNewSameCar = 1; }


if ($oldNewSameCar !== 1) {

    if ($whichCarOld == 0) {
        $doCar2 = $carAt0;
    } else if ($whichCarOld == 1) {
        $doCar2 = $carAt1;
    } else if ($whichCarOld == 2) {
        $doCar2 = $carAt2;
    } else if ($whichCarOld == 3) {
        $doCar2 = $carAt3;
    } else if ($whichCarOld == 4) {
        $doCar2 = $carAt4;
    }

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $doCar2 . "/fleo.at-php/fragiles/interlectual.org-car.php");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, false); 
    curl_exec($ch);
    curl_close($ch);

}

if ($whichCar == 0) {
    $doCar = $carAt0;
} else if ($whichCar == 1) {
    $doCar = $carAt1;
} else if ($whichCar == 2) {
    $doCar = $carAt2;
} else if ($whichCar == 3) {
    $doCar = $carAt3;
} else if ($whichCar == 4) {
    $doCar = $carAt4;
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $doCar . "/fleo.at-php/fragiles/interlectual.org-car.php?carNewCoordsW=" . $carNewCoordsW . "&carNewCoordsD=" . $carNewCoordsD);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, false); 
curl_exec($ch);
curl_close($ch);



