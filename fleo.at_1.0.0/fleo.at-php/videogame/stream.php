<?php
date_default_timezone_set("America/New_York");
header("Cache-Control: no-cache");
header("Content-Type: text/event-stream");
header('X-Accel-Buffering: no');
require_once('connection.php');

$get_game_old = "";

$get_game = $game_pdo->prepare("SELECT * FROM MEESEvsRICHTER ORDER BY `id` DESC LIMIT 1;");

$get_game->execute();
$get_game_datas = $get_game->fetchAll(PDO::FETCH_OBJ);

                foreach ($get_game_datas as $get_game_data) {
                    echo 'id: ' . $get_game_data->id . '', PHP_EOL;
                    echo 'event: MEESEvsRICHTER', PHP_EOL;
                    echo 'data: ' . json_encode($get_game_data), PHP_EOL;
                    echo PHP_EOL;
                    $get_game_old = $get_game_data->id;
                }

$countBasic = 0;

	while (1) {

        if ($countBasic % 500 == 1) {
            echo 'game-Ping (every 5 seconds)', PHP_EOL;
            echo PHP_EOL;
        }
        
        $get_game->execute();
        $get_game_datas = $get_game->fetchAll(PDO::FETCH_OBJ);
        
                        foreach ($get_game_datas as $get_game_data) {
                            if ($get_game_data->id > $get_game_old) {
                            echo 'id: ' . $get_game_data->id . '', PHP_EOL;
                            echo 'event: MEESEvsRICHTER', PHP_EOL;
                            echo 'data: ' . json_encode($get_game_data), PHP_EOL;
                            echo PHP_EOL;
                            $get_game_old = $get_game_data->id;
                        }
                    }
                
		while (ob_get_level() > 0) {
			ob_end_flush();
			}
			flush();

	if (connection_aborted()) break;

	$countBasic++;

	usleep(10000);
}