# FelixLongolius-3D-Webseite
Deepmonitor is bringing depth to the html

Instructions will follow en details.

But first you would upload the files to a directory like /var/www/domain

than you would configure template.configuration.php and remove the template --> to have configuration.php

you would initialize a database as set with the sql that can be found in fleo.at_1.0.0-extras/sql

than you would configure "fleo.at-js/socketdata/index.js copy" database-settings and correct the name in removing " copy"

than you would start index.js with "node index.js" and attempt to install it as a system service as can be found in fleo.at_1.0.0-extras/init

certainly at some point you would configure the webserver as can be found in fleo.at_1.0.0-extras/server for the webserver nginx, for which you would create ssl-certificates, first

you would configure the file fleo.at_1.0.0/fleo.at-audio/open-easyrtc/server_example/server.js and try it with "node server.js", maybe you would install something that is called turnserver as in coturn. Domains that are allowed to connect to the webrtc are to be adjusted.

the same with the init-script like for "socketdata". You have to adjust the init-scripts and point them to you script. Then you would install it on debian with "update-rc.d -f easyrtc defaults" after "chmod +x easyrtc" in "/etc/init.d" (you would have to put the two init-scripts into that directory)

the "php-fpm"-version needs to be adjusted in the webserver-script. Maybe you have php8.1 or php8.3?

at least two directoried need write permission. I would need "chmod 775 fleo.at-medien/audioStations fleo.at-medien/userImages" at least.

[kitchen.fleo.at]
