<?php
$apiKey = 'AIzaSyAPZ9b-5YZKR1FUcAEq-NIZMrmuBGUwY7U';
$location = '52.369358,4.889258';
$radius = 500;
$type = 'restaurant';
$maxResults = 5;
$language = 'en-US';
$region = 'us';

$url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' . $location . '&radius=' . $radius . '&type=' . $type . '&language=' . $language . '&region=' . $region . '&key=' . $apiKey;

// Initialize cURL session
$curl = curl_init();

// Set the URL and other options
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

// Execute the request and get the response
$response = curl_exec($curl);

// Close the cURL session
curl_close($curl);

// Decode the JSON response
$data = json_decode($response, true);

// Process the results
if ($data['status'] == 'OK') {
    $places = array_slice($data['results'], 0, $maxResults);
    foreach ($places as $place) {
        echo 'Name: ' . $place['name'] . '<br>';
        echo 'Location: ' . $place['geometry']['location']['lat'] . ', ' . $place['geometry']['location']['lng'] . '<br>';
        echo 'Business Status: ' . $place['business_status'] . '<br>';
        echo '<br>';
    }
} else {
    echo 'Error: ' . $data['status'];
}
?>