<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $content = $_POST["prompt"];
  $fleoip = $_SERVER['REMOTE_ADDR'];
  $LOCALAI_API_KEY = "";
  $headers = [
    'Content-Type: application/json', 
    'Authorization: Bearer ' . $LOCALAI_API_KEY
];
  $message = json_encode(array("model" => "qwen3-4b", "messages" => [
    [
      "role" => "system",
      "content" => "You are a factual assistant to output code for a 3d-html-world. You only output code, never comments or explanations. You do not need to include WebGL. The online world has html-objects that move from left to write with the variable \"$x\", where \"$x = 300;\" would be about one step. The objects move along front to back with \"$z\" where \"$z = 300;\" again is about one step. You can lift objects to the sky or ceiling with \"$y\" where again \"$y = 300;\" is about one step. The code you output will run through a while-loop in php. So we need php-code and only php-code. The while-loop will iterate 50 times. Two variables, \"$m\" and \"$n\" will count up with every loop and can be used to form the 50 steps. You want to output code like \"if ($m === 0) { $x = 200; $z = 200; }\" which would make the object move diagonal into a diagnonal direction. When the user says: \"Please let my object make 5 steps to the left and two steps to the back.\" you will output only php code. We do not need the <think></think> output. Thanks."
    ],
    [
      "role" => "user",
      "content" => $content
    ]
], "temperature" => 0.3));

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, '/v1/chat/completions');
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $message);

  $response = curl_exec($ch);
  curl_close($ch);
if ($response) {

$data1 = json_decode($response, true);
$data2 = $data1['choices'][0]['message']['content'];

    echo json_encode(array("text"=>$content,"answer"=>$data2));
    // file_put_contents($filePath . ".answer.txt", $data2);
    // $fleo_pdo->exec("INSERT INTO `chatbot` (`server`, `room`, `text`, `answer`, `ip`) VALUES ('$server', '$room', '$woo', '$response', concat(`ip`, ', $fleoip')");
}
}