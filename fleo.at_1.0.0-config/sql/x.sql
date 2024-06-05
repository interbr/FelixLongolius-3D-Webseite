--
-- Datenbank: `x`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `present`
--

CREATE TABLE `present` (
  `id` int(255) NOT NULL,
  `number` varchar(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `room` varchar(200) DEFAULT 'home',
  `tabula` int(1) NOT NULL DEFAULT 0,
  `color` varchar(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `active` int(2) DEFAULT NULL,
  `online` int(1) DEFAULT 4,
  `uW` int(20) DEFAULT NULL,
  `uH` int(20) DEFAULT NULL,
  `uD` int(20) DEFAULT NULL,
  `turn` int(3) DEFAULT NULL,
  `turnX` float DEFAULT 0,
  `turnZ` float DEFAULT 0,
  `duration` int(10) DEFAULT NULL,
  `TA` varchar(1) DEFAULT NULL,
  `conn` int(1) DEFAULT NULL,
  `extra` text DEFAULT NULL,
  `extraContent` text DEFAULT NULL,
  `shout` mediumtext DEFAULT NULL,
  `othDistance` mediumtext DEFAULT NULL,
  `videoSize` int(1) NOT NULL DEFAULT 1,
  `audioSes` varchar(16) DEFAULT NULL,
  `endpoint` text DEFAULT NULL,
  `publicKey` text DEFAULT NULL,
  `authToken` text DEFAULT NULL,
  `contentEncoding` text DEFAULT NULL,
  `isAdmin` int(1) DEFAULT NULL,
  `kindOfGuy` text NOT NULL DEFAULT 'guy',
  `timestamp` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `ip` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `presentSensors`
--

CREATE TABLE `presentSensors` (
  `id` int(255) NOT NULL,
  `fleoNum` varchar(10) NOT NULL,
  `geoLat` varchar(30) DEFAULT NULL,
  `geoLon` varchar(30) DEFAULT NULL,
  `geoHeading` varchar(30) DEFAULT NULL,
  `orientationAlpha` varchar(30) DEFAULT NULL,
  `orientationBeta` varchar(30) DEFAULT NULL,
  `orientationGamma` varchar(30) DEFAULT NULL,
  `orientationCompass` varchar(5) DEFAULT NULL,
  `webkitCompass` varchar(30) DEFAULT NULL,
  `webkitCompassAccuracy` varchar(30) DEFAULT NULL,
  `accX` varchar(30) DEFAULT NULL,
  `accY` varchar(30) DEFAULT NULL,
  `accZ` varchar(30) DEFAULT NULL,
  `ambL` varchar(30) DEFAULT NULL,
  `graX` varchar(30) DEFAULT NULL,
  `graY` varchar(30) DEFAULT NULL,
  `graZ` varchar(30) DEFAULT NULL,
  `gyrX` varchar(30) DEFAULT NULL,
  `gyrY` varchar(30) DEFAULT NULL,
  `gyrZ` varchar(30) DEFAULT NULL,
  `accLX` varchar(30) DEFAULT NULL,
  `accLY` varchar(30) DEFAULT NULL,
  `accLZ` varchar(30) DEFAULT NULL,
  `magX` varchar(30) DEFAULT NULL,
  `magY` varchar(30) DEFAULT NULL,
  `magZ` varchar(30) DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `present_history`
--

CREATE TABLE `present_history` (
  `id` int(255) NOT NULL,
  `number` varchar(10) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `room` varchar(200) DEFAULT NULL,
  `tabula` int(1) DEFAULT NULL,
  `color` varchar(11) DEFAULT NULL,
  `active` int(2) DEFAULT NULL,
  `uW` int(20) DEFAULT NULL,
  `uH` int(20) DEFAULT NULL,
  `uD` int(20) DEFAULT NULL,
  `TA` varchar(1) DEFAULT NULL,
  `conn` int(1) DEFAULT NULL,
  `audioSes` varchar(16) DEFAULT NULL,
  `timestamp` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `ip` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `room-home`
--

CREATE TABLE `room-home` (
  `id` int(11) NOT NULL,
  `whatIsThis` varchar(255) NOT NULL,
  `onOff` tinyint(4) DEFAULT NULL,
  `color` varchar(30) DEFAULT NULL,
  `coordsW` int(20) DEFAULT NULL,
  `coordsH` int(20) DEFAULT NULL,
  `coordsD` int(20) DEFAULT NULL,
  `thisID` varchar(255) DEFAULT NULL,
  `object` longtext DEFAULT NULL,
  `name` longtext DEFAULT NULL,
  `width` int(9) DEFAULT NULL,
  `script` mediumtext DEFAULT NULL,
  `scriptOn` tinyint(1) DEFAULT NULL,
  `author` varchar(11) DEFAULT NULL,
  `audioStationText` longtext DEFAULT '\'This is audio\'',
  `audioImage` longtext DEFAULT NULL,
  `play` int(1) DEFAULT NULL,
  `seek` varchar(20) DEFAULT NULL,
  `lettercoins` mediumtext DEFAULT ',',
  `heikel` int(11) DEFAULT NULL,
  `isRobot` int(1) DEFAULT NULL,
  `robotwork` int(2) DEFAULT NULL,
  `robotData` mediumtext DEFAULT NULL,
  `program` int(7) DEFAULT NULL,
  `tick` int(20) DEFAULT 1,
  `tick2` int(20) DEFAULT 1,
  `go` int(1) DEFAULT NULL,
  `minusPlusW` int(1) DEFAULT 0,
  `mpChange` int(11) DEFAULT 0,
  `floor` varchar(5) DEFAULT NULL,
  `ip` longtext DEFAULT NULL,
  `isOnline` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `room-home`
--

INSERT INTO `room-home` (`id`, `whatIsThis`, `onOff`, `color`, `coordsW`, `coordsH`, `coordsD`, `thisID`, `object`, `name`, `width`, `script`, `scriptOn`, `author`, `audioStationText`, `audioImage`, `play`, `seek`, `lettercoins`, `heikel`, `isRobot`, `robotwork`, `robotData`, `program`, `tick`, `tick2`, `go`, `minusPlusW`, `mpChange`, `floor`, `ip`, `isOnline`) VALUES
(1696, '1714873525streetpn5c92aa6667d320a71cbabbf5546d9392.png.webp', 1, '', 7000, 0, 5400, '', 'class=\"tree floor\" style=\"', '&lt;img src=&quot;/fleo.at-medien/userImages/1714873525streetpn5c92aa6667d320a71cbabbf5546d9392.png.webp&quot; alt=&quot;deepmonitor.image undescribed&quot; /&gt;', 2400, '', 1, '4266146c64', 'This is audio', NULL, NULL, NULL, '', 1, 0, NULL, NULL, NULL, 3, 5, NULL, 0, 0, 'on', '149.224.145.25, 149.224.145.25, 149.224.145.25', 1),
(1697, '1714873615streetpnd464c23fc9b4edaafccae7a94a9fb9e8.png.webp', 1, '', 6965, 0, 6700, '', 'class=\"tree floor\" style=\"', '&lt;img src=&quot;/fleo.at-medien/userImages/1714873525streetpn5c92aa6667d320a71cbabbf5546d9392.png.webp&quot; alt=&quot;deepmonitor.image undescribed&quot; /&gt;', 2400, '', 1, '4266146c64', 'This is audio', NULL, NULL, NULL, '', 1, 0, NULL, NULL, NULL, 17, 18, NULL, 0, 0, 'on', '149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25', 1),
(1698, '1714873812streetpn14ed5e4f185eb21739ff25caf3dea75e.png.webp', 1, '', 6998, 0, 4100, '', 'class=\"tree floor\" style=\"', '&lt;img src=&quot;/fleo.at-medien/userImages/1714873525streetpn5c92aa6667d320a71cbabbf5546d9392.png.webp&quot; alt=&quot;deepmonitor.image undescribed&quot; /&gt;', 2400, '', 1, '4266146c64', 'This is audio', NULL, NULL, NULL, '', 1, 0, NULL, NULL, NULL, 10, 11, NULL, 0, 0, 'on', '149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25', 1),
(1699, '1714874019streetpn05f481850005c31bc3b61269cb07a2c3.png.webp', 1, '', 6978, 0, 2700, '', 'class=\"tree floor\" style=\"', '&lt;img src=&quot;/fleo.at-medien/userImages/1714873525streetpn5c92aa6667d320a71cbabbf5546d9392.png.webp&quot; alt=&quot;deepmonitor.image undescribed&quot; /&gt;', 2400, '', 1, '4266146c64', 'This is audio', NULL, NULL, NULL, '', 1, 0, NULL, NULL, NULL, 6, 7, NULL, 0, 0, 'on', '149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25', 1),
(1704, '1714875297streetpnbd8ab8fb7bb7f0a1a26c7e1ec0884f16.png.webp', 1, '', 6999, 0, 1300, '', 'class=\"tree floor\" style=\"', '&lt;img src=&quot;/fleo.at-medien/userImages/1714873525streetpn5c92aa6667d320a71cbabbf5546d9392.png.webp&quot; alt=&quot;deepmonitor.image undescribed&quot; /&gt;', 2400, '', 1, '4266146c64', 'This is audio', NULL, NULL, NULL, '', 1, 0, NULL, NULL, NULL, 19, 20, NULL, 0, 0, 'on', '149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25', 1),
(1707, '1714876451imagepngfa90e63886ad53b019cbd03a2a63ac50.png.webp', 1, NULL, 9502, 0, 3742, '', 'class=\"tree fleoAt \" style=\"', '&lt;img src=&quot;/fleo.at-medien/userImages/1714876451imagepngfa90e63886ad53b019cbd03a2a63ac50.png.webp&quot; alt=&quot;deepmonitor.image undescribed&quot; /&gt;', 600, NULL, 1, '4266146c64', 'This is audio', NULL, NULL, NULL, '', 1, 0, NULL, NULL, NULL, 5, 6, NULL, 0, 0, '0', '149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25', 1),
(1708, '1714876488imagepng34402b6baf2536e3e1cb736cbb3eba05.png.webp', 1, NULL, 9202, 0, 2342, '', 'class=\"tree fleoAt \" style=\"', '&lt;img src=&quot;/fleo.at-medien/userImages/1714876488imagepng34402b6baf2536e3e1cb736cbb3eba05.png.webp&quot; alt=&quot;deepmonitor.image undescribed&quot; /&gt;', 600, NULL, 1, '4266146c64', 'This is audio', NULL, NULL, NULL, '', 1, 0, NULL, NULL, NULL, 1, 3, NULL, 0, 0, '0', '149.224.145.25', 1),
(1709, '1714876493imagepngebda3024bcfacdb29757fa9c01f2f9d5.png.webp', 1, '', 9302, 0, 342, '', 'class=\"tree \" style=\"', '&lt;img id=&quot;lanternGo&quot; src=&quot;/fleo.at-medien/userImages/1714876493imagepngebda3024bcfacdb29757fa9c01f2f9d5.png.webp&quot; alt=&quot;deepmonitor.image undescribed&quot; style=&quot;cursor:pointer;&quot; /&gt;', 317, '$(&quot;#lanternGo&quot;).click(function(){\r\n  move(-7200,-1000,3500,400); setTimeout(function(){ move(-7200,-2000,3500,400); },3500); });', 1, '4266146c64', 'This is audio', NULL, NULL, NULL, '', 1, 0, NULL, NULL, NULL, 9, 10, NULL, 0, 0, '0', '149.224.145.25, 149.224.145.25, 84.46.10.106, 84.46.10.106, 84.46.10.106, 84.46.10.106, 84.46.10.106, 84.46.10.106, 84.46.10.106', 1),
(1712, '1714876525imagepnge713b258483239965556f747530899de.png.webp', 1, NULL, 6102, 0, 6342, '', 'class=\"tree fleoAt \" style=\"', '&lt;img src=&quot;/fleo.at-medien/userImages/1714876525imagepnge713b258483239965556f747530899de.png.webp&quot; alt=&quot;deepmonitor.image undescribed&quot; /&gt;', 274, NULL, 1, '4266146c64', 'This is audio', NULL, NULL, NULL, '', 1, 0, NULL, NULL, NULL, 8, 9, NULL, 0, 0, '0', '149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25', 1),
(1713, '1714876529imagepng68ac13948f2c1d7d771496a142128e12.png.webp', 1, NULL, 5302, 0, 2842, '', 'class=\"tree fleoAt \" style=\"', '&lt;img src=&quot;/fleo.at-medien/userImages/1714876529imagepng68ac13948f2c1d7d771496a142128e12.png.webp&quot; alt=&quot;deepmonitor.image undescribed&quot; /&gt;', 600, NULL, 1, '4266146c64', 'This is audio', NULL, NULL, NULL, '', 1, 0, NULL, NULL, NULL, 1, 3, NULL, 0, 0, '0', '149.224.145.25', 1),
(1714, '1714876532imagepng073c828ed28ee3bbb79bc009f85a9546.png.webp', 1, NULL, 6202, 0, 242, '', 'class=\"tree fleoAt \" style=\"', '&lt;img src=&quot;/fleo.at-medien/userImages/1714876532imagepng073c828ed28ee3bbb79bc009f85a9546.png.webp&quot; alt=&quot;deepmonitor.image undescribed&quot; /&gt;', 241, NULL, 1, '4266146c64', 'This is audio', NULL, NULL, NULL, '', 1, 0, NULL, NULL, NULL, 8, 9, NULL, 0, 0, '0', '149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 84.46.10.106, 84.46.10.106, 84.46.10.106, 84.46.10.106', 1),
(1715, '1714876534imagepngc37a410dd3a6a28ab8d4c0962ecb0a0b.png.webp', 1, NULL, 5802, 0, 1442, '', 'class=\"tree fleoAt \" style=\"', '&lt;img src=&quot;/fleo.at-medien/userImages/1714876534imagepngc37a410dd3a6a28ab8d4c0962ecb0a0b.png.webp&quot; alt=&quot;deepmonitor.image undescribed&quot; /&gt;', 324, NULL, 1, '4266146c64', 'This is audio', NULL, NULL, NULL, '', 1, 0, NULL, NULL, NULL, 9, 10, NULL, 0, 0, '0', '149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25', 1),
(1716, '1714876599imagepngfaf56e6588499367ec2601872c7f43c9.png.webp', 1, NULL, 9802, 0, 5042, '', 'class=\"tree fleoAt \" style=\"', '&lt;img src=&quot;/fleo.at-medien/userImages/1714876599imagepngfaf56e6588499367ec2601872c7f43c9.png.webp&quot; alt=&quot;deepmonitor.image undescribed&quot; /&gt;', 600, NULL, 1, '4266146c64', 'This is audio', NULL, NULL, NULL, '', 1, 0, NULL, NULL, NULL, 8, 9, NULL, 0, 0, '0', '149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25', 1),
(1717, '1714876670imagepng22b614ad087e3277e84b242ee5306eea.png.webp', 1, NULL, 5502, 0, 4342, '', 'class=\"tree fleoAt \" style=\"', '&lt;img src=&quot;/fleo.at-medien/userImages/1714876670imagepng22b614ad087e3277e84b242ee5306eea.png.webp&quot; alt=&quot;deepmonitor.image undescribed&quot; /&gt;', 332, NULL, 1, '4266146c64', 'This is audio', NULL, NULL, NULL, '', 1, 0, NULL, NULL, NULL, 9, 10, NULL, 0, 0, '0', '149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25, 149.224.145.25', 1),
(1726, '1715209254imagepngf3c8c9e8bb68f171960dc68fb9cac4bc.png.webp', 1, '', 5063, 2438, 794, '', 'class=\"tree \" style=\"', '&lt;img id=&quot;circleStart&quot; src=&quot;/fleo.at-medien/userImages/1715209254imagepngf3c8c9e8bb68f171960dc68fb9cac4bc.png.webp&quot; alt=&quot;deepmonitor.image undescribed&quot; style=&quot;cursor:pointer;&quot; /&gt;', 600, 'var jumpedAtStart = 0;\r\nif (jumpedAtStart == 0) { \r\n  setTimeout(function(){\r\n    move(-7200,900,2000,400); jumpedAtStart = 1;\r\n  }, 3500);\r\n};\r\n             \r\n$(&quot;#circleStart&quot;).click(function(){ move(-7200,900,2000,400); });\r\n', 1, '4266146c64', 'This is audio', NULL, NULL, NULL, '', 1, 0, NULL, NULL, NULL, 17, 19, NULL, 0, 0, '0', '84.46.10.106, 84.46.10.106, 84.46.10.106, 84.46.10.106, 84.46.10.106, 84.46.10.106, 84.46.10.106, 84.46.10.106, 84.46.10.106, 84.46.10.106, 84.46.10.106, 84.46.10.106, 84.46.10.106, 84.46.10.106, 149.233.147.168, 149.233.147.168, 149.233.147.168', 1),
(1748, '1716151111imagepng2b31547b59f7939550cfafe4b0e17257.png.webp', 1, '', 5690, 0, 4300, '', 'class=\"tree \" style=\"', '&lt;img onClick=&quot;blueManWalk();&quot; id=&quot;blueMan&quot; src=&quot;/fleo.at-medien/userImages/1716151111imagepng2b31547b59f7939550cfafe4b0e17257.png.webp&quot; alt=&quot;deepmonitor.image undescribed&quot; style=&quot;cursor:pointer;transform:scaleX(-1);&quot; /&gt;', 600, 'function blueManWalk(){\r\n$.post(&quot;/fleo.at-php/fragiles/streetMen2.php&quot;, { doing: 0, fragile: &quot;1716151111imagepng2b31547b59f7939550cfafe4b0e17257.png.webp&quot;, room: myRoom });\r\n}', 1, '128413b935', 'This is audio', NULL, 1, '0.01', '', 1, 7, NULL, NULL, 1020026, 13958, 114, 1, 1, 0, '0', '194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17', 1),
(1749, '1716151190imagepng0a927f7fbd5bee2d1a91b772bcff4bed.png.webp', 1, '', 6070, 0, 2800, '', 'class=\"tree \" style=\"', '&lt;img onClick=&quot;yellowManWalk();&quot; id=&quot;yellowMan&quot; src=&quot;/fleo.at-medien/userImages/1716151190imagepng0a927f7fbd5bee2d1a91b772bcff4bed.png.webp&quot; alt=&quot;deepmonitor.image undescribed&quot; style=&quot;cursor:pointer;transform:scaleX(-1);position:absolute;bottom:0;left:0;&quot; /&gt;', 600, 'function yellowManWalk(){\r\n    $.post(&quot;/fleo.at-php/fragiles/streetMen.php&quot;, { doing: 0, fragile: &quot;1716151190imagepng0a927f7fbd5bee2d1a91b772bcff4bed.png.webp&quot;, room: myRoom });\r\n    }', 1, '128413b935', 'This is audio', NULL, 1, '0.01', '', 1, 7, NULL, NULL, 1787450, 26556, 26558, 0, 0, 0, '0', '194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17, 194.180.176.17', 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `rooms`
--

CREATE TABLE `rooms` (
  `id` int(5) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `sitemapOn` int(1) DEFAULT NULL,
  `sitemapPrio` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `thefleos`
--

CREATE TABLE `thefleos` (
  `bingoingy` int(255) NOT NULL,
  `fleoNum` varchar(10) DEFAULT NULL,
  `active` int(1) DEFAULT NULL,
  `online` int(1) DEFAULT NULL,
  `lettersOrVideo` int(1) DEFAULT NULL,
  `defleos` longtext DEFAULT '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRAVFRUVDw8VFRUXFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0OFRAPFysdFR0rKy0rMC0tLSsrKy0rLS0tLSsrLS0rNys3Ky0tNy0tLTcrKystKy0rKysrKysrKystK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAQADAQEBAAAAAAAAAAABAAIDBgcFBAj/xABBEAACAgEBBAYGBwcBCQAAAAAAAQIRAwQFEiExE0FRYXHwBgcigZHRMkJSobHB4SMzU2JygrIUFhc1Q5KTorPS/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAdEQEBAQEBAQADAQAAAAAAAAAAARECMSEDQVES/9oADAMBAAIRAxEAPwDoglQ0ApCkSRoARqiSEAo1RI0kBJFQkBJFQpDQESEgBISEAEqEDLFCVARMiAkTIgJIkIAQgIAQkB+BCkQpAIoSoCFCkMUAUaSIUgIqGiAkNEkIBQkQCDEgIiICGhoAKioiAiImAkBAINiiAzZCQH4kKQiAoUgRpICSGiEBREhSAiEqAho3CFn0dFsjLk+hjnP+jHKf3JAfL3WNHf8AZfoBPLjUt+WOfXDNgnCn/K/rL3GdX6udVG93cn4Tpv3MDoSQ0du/2E1v8B/9eL/6OT/d/rP4S/7kPmB0wj7O1tgZ9O6y4pQvk2uD8JK0/ifIlEAQCQEQhQEIEBERAREQDRBRAfjo0gNJAIgaAhIkgEURMBjGznx6Zs5NjaHNqMqx4MbnLg6r2Uu2b5JeJ7fsDZixY49LptNjyJU5YYp34txTT97GDovoL6I9LLpc8JLFCt2LuPSS7P6Vw/DjxPUMVQSjBKMVySSSROdmbNzlm1tzBMyBrE1yb5b5xkMNZ1mCGaEseWKlGXNP8V3njHpbsCWlzvHxcX7WOX2o9/enwZ7Sj8+u2bgz7vTY45Ny922+F1fBc+XXZm8rK/n+WKjFHtO1/QjS5o/so9DPjTVuLfY4t8vA8q23sjJpsjx5I1Jce5p8pRfWnx49zMNPlkJAQMUAESREBCBWAkVkB+SjSBCgESQoIkaQUQCYySo2kfo2Poun1ODBVrJlxxkv5d65/wDipAez+hGw46PSwjX7XIlkyy696STUPBLhXifespStmWduZ8Z1psmBIqGyCyGBsjIgJWDIDSkda9YOy1n0k5pXkwJzi+txX04/Dj4pHYzOSG9GUXylGUfiq/Mz1NWV/O6lYtGIRpuPY2vg6NnJpUSJkBEAtgRMkQEQkB+ZCgNIqEgZoCIkNgTO2+qjQdJrZZWvZwY2+V+3P2Y/cpv+06izuXq12zkjljpMOON5Zyy5skm21jhHhGKVeHi2IPWWQBZ3ZasrMiUNlYEQNlYE2EaCwsCq0MZUzFhO2mk6lUqdddcH+BmjwHbGDo9VqMa4KGfPFKupZHT8KafvOBHPtTXy1GfJlnGMZycd9Rvd3oxUJSjfJNxbrjz5vmcDOLRsGTIBAQAQsbAB3iIgOBCzJoBFAiARoENhAdt9XOsw6aWXPk45J9Fp8GONPJknklcqXUuEPa5cWdTPo+h9LaGmb/iL74yS+9oo92493udrv4k2YhlU1cWpK5K001cW01fc00as7RNaCwsCprViYsga1ZBZJg0jZgmwa2j8+0dUsWLJllwWOE5v3Kzms+X6T7Leq0uXApuDlG01TtwamovubjT7rJfFeFYZXbfNtt+92crOLAmvPI5WcFSKjI0MNIggGGkmgTEYaaIz55gDXEjRkoso2gsmAGwQEihsHJpqUW01xTTaafamabMyIPXPVhq+k2fBN8cU8uN+57y+6aO1o839T+sS/wBRgb4twyxXbw3JfhD4Ho9nXnxmtWFh+hGmTYmSArGwZANkBWAnDrM6x48mR8FCE5N+EWzms6f60Nq9Fo3hTqeokoLuhGnN+9UveTr5FjyfFJvi+bt/E5GceJcDkUji0kLBAwrRAn5+QAaJlFgEVkFEBxIQ8/oSRVaovPnuCxTAkKZEBpgwTJAfp2JtSWk1OPUR+q6nH7UHwnHxrl30e6aDX48+OOXFNShNJpprm+prqd2q7jwCcTOl1OTT5IZYN+xOM93eaTcXdNcuPKyy4mP6IsrOHTaiOWEMkHcZxjOL7VJWjlZ2jLRGbII0AWDYG2AE8iVylwS4t9iStsK/Nr9p4cEJZMuSMYx4u2rvqSj1t9S6zxP0j21PW6iWaXsxrdxx+zBW1fe3bfefO2lqf9RqMud/8zJKa7lyj8IqK9wxicrda8bQsAMjZSMIUwEkCKuoBRUCIDXEDNvyv0EDgTFIBCtsUzCYgIvz8zMiARTBCAs48is2mCA9D9Vm3t6MtFkftQuWF/ajxcoeKfHwfceg2fzzDNPFOOXHJxnCSlFrqcfyPcPRrbUdZp4Z4qm96M4/ZnH6S8OTXc0deL+mbH1SArOmMGysGAGrOqesrbHQaR44v9pnfRrtUOc5fDh4yO0rz4HiHpftn/Wauc0/2cLhiXVux+t4ydv4GO78a5j5WKFI5bMpCcWmjNimZ8+AGqEPP6GQEufnmSBgaiVGWxTA1YmK7yA4aNIyiTCtUKM2KKGEvPnmKMi2Alfn5GUKAUTIrAzJ8PPI9E9T+V9FqIdSyY5Lstxp/wCKPOcsvPd39x616tNmvDolOaalnm8lNU1BLdhw76k/CSLz6l8drTIyiPQ5tFYWAHDtKMngzKH0uiy7vjuuu9H8/wClXBeCP6IjV8fB+HI8L9INly0mqy4GqUZNwdcJY5cYNe514pnH8k+t8vx2HnwC/PnrIw0RkCGwBef0Ln5+4pABpAiTFsBMgmTYGq72RX3/AIkExwIUAxCtWTYMqA0mAInJIDbCPn5H6dm7N1Gplu6fDkyv+SDcV/VL6Mfe0dx2d6rdTJJ6jNj067K6WfhSaS+PxA6HvH69nbPzaiW7gwzyvk9yNpeL5L3nrWzfQbZ2Di8ctRLtyy9nu9lVH7jsUc+7FQxRjjiuUYRUUvcuRqc9VNjz/wBH/VlutZNfONKmsGOVuXXWSfZ3R+J32c7fUkuCSVJJckjD48yZ054xi3SQWRtDYozZAJ8n0p9GMW0McYyksebH+7y1ap84TXXH8Px+q2Vmeuf9RZceLbb9GtXo76fC93+JD28dLr3ly/uo+Qsln9DY9TKPC7XY+KPi7U9Edn6m3LB0M39fDUPe4pbv3HK89RudR4qyO97T9VmeNy02eGaPNRl+zml2XxT+46btPZWp0zrPgyY/6oPdfcpr2X7mZV+Z/iVmN9GyiaIgA0CYozYG7IyAHEhaMNmrIpYhZyaTS5M2WGHGrnkkoRXe3XHuA/VsXZGfV5ei08N6VXJ8oRV1c5dS/Hqs9Q2J6vtFp6lnb1OXsfDDF90frf3X4I+xsTZWPRYFp8PPg8uT62SfW2+zqXcfrs6c/j37WL251qWo7sFGEVdRhFRS+BxOXa7MEdZzJ4xbpEymVlRoGBFCVgVgNkBX+QGrJMzZWBpkYsbINKVHNHVypxlU4vmpK0+44LBkvMvqy4+Rtb0M2fqbbxvTz+3hdL3wqn8L7zoPpP6B6nRxeWDWfArbnBVKC7ckOzvXDwPVrN4czjy5PmuprsaOd/H/ABqd/wBfz7GV8TVefmdg9PtgR0epXRKsGZOeNdUKdTx13Oq7pLsOupnNsk0S8+e0rAfPIg88yA4SAUzKmzvfql2cnkzatr90lix8OU8iubXeo/5M6HN+fyPWvVlgUdnQa55MuoyS8VPol92JfFmuZtZtyO0P5gn+Rbr7Cpnp+OSsWFMt19gMSJlT7Cpgw2TYUxpgxBY7rDdfYDC2Sf5BusnF9gMQphT7Bp9gEQbvcNAxEFMaYMSYWVMlFgx1r1kaTpNBOfOWCcMi4O6lJQn/AJp+48mi/PnrPddr6Z5NPnxv6+HNHwuDR4NhlwOHc+uvPjlFkmgb/Iw0vcRmn5aIDjKPMiIGZ7N6tP8AhuDx1H/vyCRvj1nrx2b9SREdmAaZEBIEJATBfMSAgZEAMRIA6xYkBmJIiAfP4gRAZl8jREBx6v8Ad5P6Mn+LP50wfRXgiI5d+t8uaA/IiMNAiID/2Q==',
  `defleosA` longtext DEFAULT NULL,
  `fleoip` text DEFAULT NULL,
  `timestampFleo` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `present`
--
ALTER TABLE `present`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `number` (`number`),
  ADD UNIQUE KEY `number_2` (`number`);

--
-- Indizes für die Tabelle `presentSensors`
--
ALTER TABLE `presentSensors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `fleoNum` (`fleoNum`);

--
-- Indizes für die Tabelle `present_history`
--
ALTER TABLE `present_history`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `room-home`
--
ALTER TABLE `room-home`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indizes für die Tabelle `thefleos`
--
ALTER TABLE `thefleos`
  ADD PRIMARY KEY (`bingoingy`),
  ADD UNIQUE KEY `fleoNum` (`fleoNum`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `present`
--
ALTER TABLE `present`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `presentSensors`
--
ALTER TABLE `presentSensors`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `present_history`
--
ALTER TABLE `present_history`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `room-home`
--
ALTER TABLE `room-home`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `thefleos`
--
ALTER TABLE `thefleos`
  MODIFY `bingoingy` int(255) NOT NULL AUTO_INCREMENT;
COMMIT;
