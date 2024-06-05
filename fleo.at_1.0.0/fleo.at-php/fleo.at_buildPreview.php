<?php
if (isset($_POST['buildimage'])) { $buildimage = ($_POST["buildimage"]); } else { $buildimage = ''; }
if (isset($_POST['buildname'])) { $buildname = ($_POST["buildname"]); } else { $buildname = 'no name'; }
if (isset($_POST['buildhtml'])) { $buildhtml = ($_POST["buildhtml"]); } else { $buildhtml = 'no html'; }
if (isset($_POST['buildjavascript'])) { $buildjavascript = ($_POST["buildjavascript"]); } else { $buildjavascript = ''; }
if (isset($_POST['buildfloor'])) { $buildfloor = $_POST["buildfloor"]; } else { $buildfloor = '0'; }
if (isset($_POST['buildwidth'])) { $buildwidth = $_POST["buildwidth"]; } else { $buildwidth = '500'; }




$reloadTrick = "ffff" . random_int(0,99999999);
echo '<div class="move nattin scale2" data-attr="1000-1000">', PHP_EOL;
echo '<div class="tree ';
if ($buildfloor) { echo 'floor'; };
echo '" style="width: ' . $buildwidth. 'px; background: none; bottom: 0px; left: 500px;">', PHP_EOL;
echo $buildhtml, PHP_EOL;
echo '</div></div>', PHP_EOL;
echo '<script>', PHP_EOL;
echo 'function ' . $reloadTrick . '() { ' . $buildjavascript . ' }; ' . $reloadTrick . '();', PHP_EOL;
echo '</script>', PHP_EOL;
?>