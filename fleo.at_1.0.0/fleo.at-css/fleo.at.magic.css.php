<?php
function perspective_scale($distance, $max_distance) {
    $near = 3; // Scale at the near clipping plane (adjustable)
    $far = 0.01; // Scale at the far clipping plane (adjustable)
    $factor = 10; // Adjust this factor to control the stronger compression
    $normalized_distance = pow($distance / $max_distance, 1 / $factor); // Stronger compression
    return $near - (($near - $far) * $normalized_distance);
}

function perspective_bottom($distance, $max_distance) {
    $horizon = 1220; // Maximum bottom value
    $factor = 10; // Adjust this factor to control the smoother increase
    $normalized_distance = pow($distance / $max_distance, 1 / $factor); // Smoother increase
    return round($horizon * $normalized_distance);
}

echo ".move, .cage, .cage2 {
    position: absolute;
    min-width: 1800px;
    transform-style: preserve-3d;
}
[class*='scale'] {
    display: none;
    bottom: 0px;
    z-index: 100;
    overflow: visible;
    left: 0;
    opacity: 1;
    perspective: 2500px;
}";

// Calculate levels from scale0 -> scale8999
$max_distance = 9000;
for ($i = 0; $i < $max_distance; $i++) {
    $scale = perspective_scale($i, $max_distance);
    $bottom = perspective_bottom($i, $max_distance) - 600;
    echo ".scale".$i." { bottom: ".$bottom."px; transform: scale(".$scale."); z-index: ".(45510 - $i)."; display: block; } ";
}

// Calculate levels from scale9000 -> scale12000
for ($i = 9000; $i <= 12000; $i++) {
    $bottom = 620 - (620 * (($i - 9000) / 3000));
    echo ".scale".$i." { bottom: ".$bottom."px; transform: scale(0.01); z-index: ".(36510 - $i)."; display: block; } ";
}

// Calculate opacity levels from scale0 -> scale999 separately
for ($i = 0; $i < 300; $i++) {
    echo ".scale".$i." { opacity: ".((0.9 / 300) * $i + 0.1)."; } ";
}

// Calculate levels from scale9000 -> scale12000
for ($i = 0; $i <= 12000; $i++) {
    echo ".scale".$i." .floor { z-index: ".(40010 - $i)."; display: block; } ";
}

echo "[class*='scale'].person { perspective: 10000px; }

[class*='scale-'] { display: none !important; }

[class*='scale'] .floor {transform: rotateX(75deg); }

[class*='scale-'] .floor { display: none !important; }
";
?>
