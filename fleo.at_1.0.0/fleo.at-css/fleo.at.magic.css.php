<?php
echo ".move, .cage, .cage2 {
    position: absolute;
    min-width: 1800px;
    transform-style: preserve-3d;
}
[class*=\"scale\"] {
    display: none;
    bottom: 0px;
    z-index: 100;
    overflow: visible;
    left: 0;
    opacity: 1;
    perspective: 1200px;
    display: block;
}";

for ($i=0; $i < 1000; $i++) {
echo ".scale".$i." { bottom: ".((51.66666 / 1000) * $i)."px; opacity: ".((1 / 1000) * $i)."; transform: 
    scale(".(2.4 - ((((51.66666 / 1000) * $i) / 620) * (2.39)))."); z-index: ".(45510 - $i)."; } ";
}
for ($i=0; $i < 11000; $i++) {
echo ".scale".($i + 1000)." { bottom: ".(((568.33333 / 11000) * $i) + 51.66666)."px; transform: scale(".(2.4 - (((((568.33333 / 11000) * $i) + 51.66666) / 620) * (2.39)))."); z-index: ".(44510 - $i)."; } ";  
}

echo "[class*=\"scale\"].person { perspective: 10000px; }

[class^=\"scale-\"] { display: none !important; }

[class*=\"scale-\"] .floor { display: none !important; }";

