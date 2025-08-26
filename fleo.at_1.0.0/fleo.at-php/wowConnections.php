<?php
header("Cache-Control: no-cache");
header("Content-Type: text/event-stream");
header('X-Accel-Buffering: no');
require_once('../../fleo.at_1.0.0-config/connection.php');

$room = "room-" . $_GET["room"];
$roomIC = $room . "-itemConnections";
$previousHashes = [];


function calculateEdgeIntersection(
    float $coordsW,
    float $coordsH,
    float $coordsD,
    float $width,
    float $height,
    float $leftPercent,
    float $topPercent
): array {
    // Rectangle boundaries
    $rectLeft   = $coordsW;
    $rectRight  = $coordsW + $width;
    $rectBottom = $coordsH;
    $rectTop    = $coordsH + $height;

    // Center of rectangle
    $centerX = $coordsW + $width / 2;
    $centerY = $coordsH + $height / 2;
    $centerZ = $coordsD;

    // Target point inside rectangle (based on percentages)
    $targetX = $coordsW + ($width * $leftPercent / 100);
    $targetY = $coordsH + ($height * $topPercent / 100);

    // Direction vector from center to target
    $dirX = $targetX - $centerX;
    $dirY = $targetY - $centerY;

    // Find intersection with rectangle edge
    $tValues = [];

    if ($dirX != 0) {
        $tLeft  = ($rectLeft - $centerX) / $dirX;
        $tRight = ($rectRight - $centerX) / $dirX;
        $tValues[] = $tLeft;
        $tValues[] = $tRight;
    }

    if ($dirY != 0) {
        $tBottom = ($rectBottom - $centerY) / $dirY;
        $tTop    = ($rectTop - $centerY) / $dirY;
        $tValues[] = $tBottom;
        $tValues[] = $tTop;
    }

    // Filter positive t-values (forward direction only)
    $tValues = array_filter($tValues, fn($t) => $t > 0);

    // Find the closest intersection
    $tMin = min($tValues);

    // Final intersection point on the edge
    $intersectX = $centerX + $dirX * $tMin;
    $intersectY = $centerY + $dirY * $tMin;
    $intersectZ = $centerZ;

    return [
        'x' => $intersectX,
        'y' => $intersectY,
        'z' => $intersectZ
    ];
}

function calculateWorldDistance(float $x1, float $z1, float $x2, float $z2): float {
    $earthRadius = 6371e3;
    $lat1 = $x1 / 300;
    $lon1 = $z1 / 1000;
    $lat2 = $x2 / 300;
    $lon2 = $z2 / 1000;

    $lat1Rad = deg2rad($lat1);
    $lon1Rad = deg2rad($lon1);
    $lat2Rad = deg2rad($lat2);
    $lon2Rad = deg2rad($lon2);

    $deltaLat = $lat2Rad - $lat1Rad;
    $deltaLon = $lon2Rad - $lon1Rad;

    $a = sin($deltaLat / 2) ** 2 +
         cos($lat1Rad) * cos($lat2Rad) *
         sin($deltaLon / 2) ** 2;

    $c = 2 * atan2(sqrt($a), sqrt(1 - $a));
    return $earthRadius * $c;
}

$countBasic = 0;

while(1) {

    if ($countBasic % 10 == 0) {
            echo 'itemConnections-Ping', PHP_EOL;
            echo PHP_EOL;
        }

$sql = "
    SELECT 
        tic.*,
        at.tick,
        at.width, 
        at.coordsW, 
        at.coordsH, 
        at.coordsD
    FROM `$roomIC` tic
    INNER JOIN `$room` at ON tic.id = at.id
    WHERE tic.active IN (1, -1) AND at.isOnline = 1 AND at.onOff = 1
";

$stmt = $fleo_pdo->prepare($sql);
$stmt->execute();

$connectionsData = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($connectionsData as $connection) {

    $startId = $connection['id'];
    $endId = $connection['connectionTo'];
    $stmt = $fleo_pdo->prepare("SELECT width, coordsW, coordsH, coordsD FROM `$room` WHERE id = :id");
    $stmt->execute([':id' => $endId]);
    $data = $stmt->fetch(PDO::FETCH_ASSOC);
    $startWidthOrig = $connection['width'];
    $startCoordsW = $connection['coordsW'];
    $startCoordsH = $connection['coordsH'];
    $startCoordsD = $connection['coordsD'];
    $startHeight = $connection['idHeight'];
    $startWidth = $connection['idWidth'];
    $leftXStart = $connection['leftXStart'];
    $topYStart = $connection['topYStart'];
    $endWidthOrig = $data['width'];
    $endCoordsW = $data['coordsW'];
    $endCoordsH = $data['coordsH'];
    $endCoordsD = $data['coordsD'];  
    $endHeight = $connection['connectingToHeight'];
    $endWidth = $connection['connectingToWidth'];
    $leftXEnd = $connection['leftXEnd'];
    $topYEnd = $connection['topYEnd'];
    $active = $connection['active'];

$structuralHashInput = [
    'startId' => $startId,
    'endId' => $endId,
    'active' => $active
];
$structuralHash = hash('sha256', json_encode($structuralHashInput));
$connectionKey = "{$startId}_{$endId}_" . substr($structuralHash, 0, 12);

$positionHashInput = [
    'startCoordsW' => $startCoordsW,
    'startCoordsH' => $startCoordsH,
    'startCoordsD' => $startCoordsD,
    'startHeightOrig' => $startWidthOrig,
    'startHeight' => $startHeight,
    'endCoordsW' => $endCoordsW,
    'endCoordsH' => $endCoordsH,
    'endCoordsD' => $endCoordsD,
    'endWidthOrig' => $endWidthOrig,
    'endHeight' => $endHeight,
    'leftXStart' => $leftXStart,
    'topYStart' => $topYStart,
    'leftXEnd' => $leftXEnd,
    'topYEnd' => $topYEnd
];

    $positionHash = hash('sha256', json_encode($positionHashInput));
if (!isset($previousHashes[$connectionKey])) {
    $previousHashes[$connectionKey] = $positionHash;
}

if ($active == -1) {
    /* echo "id: " . time() . "\n";
    echo "event: dotsRemove\n";
    echo "data: " . json_encode(['removeDots' => "dots-" . $connectionKey]) . "\n\n"; */
}
// Compare with previous hash
if (!isset($connectionKey) || $previousHashes[$connectionKey] !== $positionHash) {
    if (isset($previousHashes[$connectionKey]) && $previousHashes[$connectionKey] !== $positionHash) {
        	if (connection_aborted()) break;

        /* $fleo_pdo->exec("UPDATE `$roomIC` SET `active` = -1 WHERE `id` = '$startId' AND `connectionTo` = '$endId' AND `active` = 1;");
        sleep(5);   
        $fleo_pdo->exec("UPDATE `$roomIC` SET `active` = 2 WHERE `id` = '$startId' AND `connectionTo` = '$endId' AND `active` = -1;"); */
    /* echo "id: " . time() . "\n";
    echo "event: dotsRemove\n";
    echo "data: " . json_encode(['removeDots' => "dots-" . $connectionKey]) . "\n\n"; */
    }
// Update stored hash
$previousHashes[$connectionKey] = $positionHash;

$heightStart = ($startWidthOrig * ($startHeight) / $startWidth);
$heightEnd = ($endWidthOrig * ($endHeight / $endWidth));


$startPoint = calculateEdgeIntersection(
    $connection['coordsW'],
    $connection['coordsH'],
    $connection['coordsD'],
    $connection['width'],
    $heightStart,
    $connection['leftXStart'],
    $connection['topYStart']
);

$endPoint = calculateEdgeIntersection(
    $data['coordsW'],
    $data['coordsH'],
    $data['coordsD'],
    $data['width'],
    $heightEnd,
    $connection['leftXEnd'],
    $connection['topYEnd']
);

    // Your existing dot calculation logic
    
// Convert percent-from-top to pixels-from-bottom
$startX = $startPoint['x'];
$startY = $connection['coordsH'] * 2 + $heightStart - $startPoint['y'];
$startZ = $startPoint['z'];

$endX = $endPoint['x'];
$endY = $data['coordsH'] * 2 + $heightEnd - $endPoint['y'];
$endZ = $endPoint['z'];


// Step 1: Calculate horizontal (geo) distance
$horizontalDistance = calculateWorldDistance($startX, $startZ, $endX, $endZ);

// Step 2: Calculate vertical difference and true 3D distance
$verticalDelta = $endY - $startY;
$trueDistance = sqrt($horizontalDistance ** 2 + $verticalDelta ** 2);


// Step 3: Determine number of dots based on spacing
// $numDots = max(1, floor($trueDistance / 50000));

// Step 3: Determine number of dots based on exponential scaling
$baseDistance = 500000;
$baseSpacing = 50000;

// Calculate how many times the distance has multiplied by 10 from the base
$scaleFactor = max(0, floor(log10($trueDistance / $baseDistance)));

// Apply halving for each scale factor
$adjustedSpacing = $baseSpacing * pow(2, $scaleFactor);

// Calculate number of dots
$numDots = max(1, floor($trueDistance / $adjustedSpacing));

$dots = [];

for ($i = 0; $i <= $numDots; $i++) {
    $t = $i / $numDots;

    // Interpolated 3D position
    $dotX = $startX + ($endX - $startX) * $t;
    $dotY = $startY + ($endY - $startY) * $t;
    $dotZ = $startZ + ($endZ - $startZ) * $t;
// error_log("idHeight: {$connection['idHeight']}, percentY: {$startPoint['y']}, startY: $startY, dotY: $dotY");
    $dots[] = [
        'conkey' => $connectionKey,
        'lat'    => round($dotZ, 0),
        'lon'    => round($dotX, 0),
        'height' => round($dotY, 0),
        'numDots'=> $numDots,
        'index'  => $i
    ];
}


// Output as JSON
echo "id: " . time() . "\n";
echo "event: dotsUpdate\n";
echo "data: " . json_encode(['dots' => $dots]) . "\n\n";

}

}

while (ob_get_level() > 0) {
			ob_end_flush();
			}
			flush();

	if (connection_aborted()) break;

	$countBasic++;

	sleep(1);
}