<?php
date_default_timezone_set("America/New_York");
header("Cache-Control: no-cache");
header("Content-Type: text/event-stream");
header('X-Accel-Buffering: no');
require_once('/var/www/fleo/php/connection.php');
$serverTime = time();

$get_fragiles_old = "";

$get_fragiles = $build_pdo->prepare("SELECT `whatIsThis`, `onOff`, `coordsW`, `coordsH`, `coordsD`, `tick`, `go`, `minusPlusW`, `mpChange` FROM sketches4piece WHERE isRobot=1 AND onOff=1");

$get_fragiles->execute();
$get_fragiles_datas = $get_fragiles->fetchAll(PDO::FETCH_OBJ);

                foreach ($get_fragiles_datas as $get_fragiles_data) {
                    ${'tick' . $get_fragiles_data->whatIsThis} = 0;
                }

sleep(5);

$countBasic = 0;

	while (1) {

        if ($countBasic % 200 == 199) {
            echo 't-cup fragile-Ping (every 50 seconds)', PHP_EOL;
            echo PHP_EOL;
        }
        $serverTime = time();
        
		$get_fragiles->execute();
		$get_fragiles_datas = $get_fragiles->fetchAll(PDO::FETCH_OBJ);
        if ($get_fragiles_datas !== "null") {
		if ($get_fragiles_datas !== $get_fragiles_old) {

                foreach ($get_fragiles_datas as $get_fragiles_data) {
                    if ($get_fragiles_data !== "null") {
                    if (${'tick' . $get_fragiles_data->whatIsThis} < $get_fragiles_data->tick) {
                    ${'tick' . $get_fragiles_data->whatIsThis} = $get_fragiles_data->tick;
                    $messageChange = $get_fragiles_data;
                    echo 'id: ' . $serverTime . '', PHP_EOL;
                    echo 'event: fragiles', PHP_EOL;
                    echo 'data: ' . json_encode($messageChange), PHP_EOL;
                    echo PHP_EOL;
                    }
                    }
                }
                $get_fragiles_old = 2;
                }
            }
                
		while (ob_get_level() > 0) {
			ob_end_flush();
			}
			flush();

	if (connection_aborted()) break;

	$countBasic++;

	usleep(250000);
}