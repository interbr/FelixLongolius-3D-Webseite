const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8098 })
var mysql = require('mysql')
const { nodeDb_host, nodeDb_user, nodeDb_password, nodeDb_database } = require('./configuration.js')
var con = mysql.createConnection({
    host: nodeDb_host,
    user: nodeDb_user,
    password: nodeDb_password,
    database: nodeDb_database
  })
  var fleoNum = "emtpy";
  var fleoName = "";
  var thingsCanStart = 0;
  var thingsGoing = 0;
  var socketSetPersonOld = 0;
  var socketSetActiveOld = 0;
  var setPerson, setActiveFleo;
  personDataTimestamp = [];
  personDataActiveTimestamp = [];
  var clientID = [];
  
  wss.on('connection', (ws, req) => {
  clientID[ws] = "empty";
  ws.onmessage = function(e) {
  // console.log(e.data);
  sen = JSON.parse(e.data);
  if (sen.type !== "ping") {
  
    if (sen.type == "video") {
      con.query("INSERT INTO `thefleos` (active, `online`, `defleos`, fleoNum) VALUES (1, 1, '" + sen.boingy + "', '" + sen.fleoNum + "') ON DUPLICATE KEY UPDATE active=1, `online`=1, `defleos`='" + sen.boingy + "'");
    } 
    else if (sen.type == "distance") {
      con.query("UPDATE `thefleos` SET `defleosA`='" + sen.othDistance + "' WHERE `fleoNum`='" + sen.whoC + "'");
    } 
    else if (sen.type == "present") {
      wss.clients.forEach(client => { if (client == ws && client.readyState === WebSocket.OPEN) { clientID[ws] = sen.fleoNum; } } );
      // console.log(clientID[ws]);
      if (thingsGoing == 0) {
      
      con.query("INSERT INTO `thefleos` (`active`, `online`, `fleoNum`, `lettersOrVideo`, `fleoip`) VALUES (1, 0, '" + clientID[ws] + "', 0, '" + req.socket.remoteAddress + "') ON DUPLICATE KEY UPDATE `active`=1, `online`=0,`lettersOrVideo`=0, `fleoip`='" + req.socket.remoteAddress + "'");
      con.query("UPDATE `present` SET `online`=1 WHERE `number`='" + clientID[ws] + "';");
  
      thingsCanStart= 1;
      }
  if (thingsCanStart == 1 && thingsGoing == 0) { startInterval(); }
  
    } 
  
  else if (sen.doing == 9) { 
    
    if (sen.QuatX === undefined || sen.QuatY === undefined || sen.QuatZ === undefined || sen.QuatW === undefined) {
      con.query("UPDATE `present` SET `online`=1, `uW`='" + sen.hiCo + "', `uH`='" + sen.level + "', `uD`='" + sen.sMMs + "', `turn`='" + sen.turn + "', `turnX`='" + sen.turnX + "', `turnZ`='" + sen.turnZ + "', `QuatX`='0', `QuatY`='0', `QuatZ`='0', `QuatW`='0', `duration`='" + sen.duration + "' WHERE `number`='" + sen.whoC + "'"); } else {    
    con.query("UPDATE `present` SET `online`=1, `uW`='" + sen.hiCo + "', `uH`='" + sen.level + "', `uD`='" + sen.sMMs + "', `turn`='" + sen.turn + "', `turnX`='" + sen.turnX + "', `turnZ`='" + sen.turnZ + "', `QuatX`='" + sen.QuatX + "', `QuatY`='" + sen.QuatY + "', `QuatZ`='" + sen.QuatZ + "', `QuatW`='" + sen.QuatW + "', `duration`='" + sen.duration + "' WHERE `number`='" + sen.whoC + "'"); } }
  else if (sen.type.includes("geo")) { con.query("UPDATE `presentSensors` SET `" + sen.type + "`='" + sen.value + "' WHERE `fleoNum`='" + sen.fleoNum + "'"); } 
  
  }
  }
  
  function startInterval(){
  
    setPerson = "SELECT `number`, `name`, `color`, `room`, `uW`, `uH`, `uD`, `turn`, `duration`, `conn`, `extra`, `extraContent`, `videoSize`, `audioSes`, `timestamp`, `TA`, `online`, `isAdmin`, `kindOfGuy` FROM `present` WHERE `active` = '1' AND (`online`=1 OR `online`=2) ORDER BY id ASC;";

con.query(setPerson, function(err, results){
if (err) throw err;

for (i = 0; i < results.length; i++) {
wss.clients.forEach(function(client) {
client.send(JSON.stringify({type:"person_moves", data: results[i]}));
});
}
});

  setInterval(() => {
  
  con.query(setPerson, function(err, results){
    if (err) throw err;
  
  for (i = 0; i < results.length; i++) {
    if (typeof personDataTimestamp[results[i].number] === "undefined") { personDataTimestamp[results[i].number] = 0; }
  if (results[i].timestamp > personDataTimestamp[results[i].number]) {
    wss.clients.forEach(function(client) {
      client.send(JSON.stringify({type:"person_moves", data: results[i]}));
   });
  
    personDataTimestamp[results[i].number] = results[i].timestamp;
  }
  }
  });
  
  
  con.query("SELECT `fleoNum`, `timestampFleo` FROM `thefleos` WHERE `active` = 1;", function(err, results){
    if (err) throw err;
    for (i = 0; i < results.length; i++) {
    if (typeof personDataActiveTimestamp[results[i].fleoNum] === "undefined") { personDataActiveTimestamp[results[i].fleoNum] = results[i].fleoNum; }
    if (results[i].fleoNum > personDataActiveTimestamp[results[i].fleoNum]) {
      wss.clients.forEach(function(client) {
    client.send(JSON.stringify({type:"newVideo", data: results[i]}));
      });
    personDataActiveTimestamp[results[i].fleoNum] = results[i].fleoNum;
    }
  }
  });
  
  }, 250);
  }
  
let defaultProfile = "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";

  ws.onclose = function(e) {
  con.query("UPDATE `present` SET `online`=2, `conn`=0 WHERE `number`='" + clientID[ws] + "';");
  setTimeout(function(){ 
    con.query("UPDATE `present` SET `online`=3 WHERE `number`='" + clientID[ws] + "';");
    con.query("UPDATE `thefleos` SET `online`=0,`defleos`='" + defaultProfile + "' WHERE fleoNum='" + clientID[ws] + "' AND `online`=1;");
  }, 3500)
  };

  ws.onerror = function(e) {    
    con.query("UPDATE `present` SET `online`=2, `conn`=0 WHERE `number`='" + clientID[ws] + "';");
    setTimeout(function(){ 
      con.query("UPDATE `present` SET `online`=3 WHERE `number`='" + clientID[ws] + "';");
      con.query("UPDATE `thefleos` SET `online`=0,`defleos`='" + defaultProfile + "' WHERE fleoNum='" + clientID[ws] + "' AND `online`=1;");
    }, 3500)
    };
  });