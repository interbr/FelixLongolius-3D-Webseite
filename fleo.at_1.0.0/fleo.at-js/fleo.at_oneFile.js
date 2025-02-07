///// fleo.at_variables.js

var turn = 0;

var spacebarText = 0; 
var wsOk = 0;
var ws = new ReconnectingWebSocket("wss://" + mainDomain + "/socketdata");

// if (Device_Type() !== "Mobile" && Device_Type() !== "Tablet") { $("#bgbgsterneVideo").attr("src","/fleo.at-medien/repertoire/space_front_320_PIxEL.mp4"); }
$("body").append('<audio id="maeaek" src="/fleo.at-js/push2Talk/recordings/2910_audio_recording_1651946993329.mp3"></audio>');

var am = "f";
var will = "b";
var willX = 0;
var tcDX = 0;
var tcHX = 0;
var tcWX = 0;
var tamq = 0;
var have = [];
have[0] = 0;
have[1] = "x";
var doCheckT = 0;
var haveve = 0;
var haveveX = 0;
var haveveGo = 1;
var level = 0;
var radiostatus = 0;
var radiosource = 0;
var fleoNumDistant;

var myNumber = [];
myNumber[0] = "0000";
myNumber[1] = "_";
myNumber[2] = "#ffffff";

var lastCloseID = 0;
var lastOpen = 0;
var thisCloseID = 0;
var thisOpen = 0;
var lastWidth = 0;
var lastWidthR = 0;
var width = 0;
var widthR = 0;
var openBtnID = 0;
var rememberOffset = 0;
var scaleM = "scale0";
var historyPush = 0;
var turnOld = [];
var turnToChange = [];
var TAold = [];

var audioTrack = [];
var sourceA = [];
var sourceB = [];
var analyser = [];
var bufferLength = [];
var dataArray = [];
var canvasCtx = [];
var stream2Rec = [];
var fleoAlreadyConnected = [];
var trackMediaStream = [];
var visualizerV = [];
var visualizerX = [];
var visualizerY = [];
var sliceWidth = [];
var goAhead = [];
var mediaRecorder = [];
var blobToRec = [];
var recData = [];
var recReader = [];
var recReaderResult = [];
var mediaRecorderId = 0;
var fleoDestination = [];
var fleoNodeSource = [];
var fleoNodeSourceMeter = [];
var startAudio = [];
var chunks = [];
var fleoMediaStream = [];
var audioCtxVolume = [];
var audioCtxMeter = [];
var recordingStream = [];
var gainNode = [];
var gainNodeMeter = [];
var volumeMeterNode = [];
var volumeMeterGrayNode = [];
var listener = [];
var panner = [];
var listenerData = [];
var meterElement = [];
var ledsVol = [];
var ledsGrayVol = [];
var gainOld = [];
var volumeOld = [];
var volumeBypassIsOnOff = [];
var audioAutoAccept = "off";
var audioAutoReject = "off";
var currrentReplayRecording = "";
var gotFirstFileDataFromMediarecorders = 0;
var streamsNum = 0;
var audioConferenceConnected = 0;
var startUpJeak = 0;

var othPersonDistanceSelf = [];
var othPersonDistanceSelfOld = [];
var othPersonDistanceSelfId = [];
var otherVolume = [];
var otherVolumeNumber = [];
var othAudioSes = [];
var waitForAudio = []; 

var kindOfGuyOld = [];
var kindfOfGuyFunctionBuilt = [];
var meIsAdmin = 0;

var medals = [];

var whoAllowedUpload = 2;

var draggingVideoSize = 0;
var ytplayer;

var audioSystemJustLoaded = 0;
var recordingReset = 0;

var recordingIntervalStartLoop = 0;
var relationToBackground = 0;
var levelScroll = 0;
var legacyMovement = 1;

var typeTimeout;

medals[0] = '<div class="medal medal0 medalAdmin" medalcode="0" style="width:26px;height:26px;border:2px solid black;border-radius:15px;background:white;font-size:30px;line-height:30px;text-align:center;color:orange;font-weight:bold;" title="Administrator">A</div>';
medals[1] = '<div class="medal medal1 medalVisitor" medalcode="1" style="width:30px;height:30px;border-radius:15px;background:blue;font-size:30px;line-height:32px;text-align:center;" title="Visitor">V</div>';
medals[2] = '<div class="medal medal2 medalWorker" medalcode="2" style="width:30px;height:30px;border-radius:15px;background:red;font-size:30px;line-height:32px;text-align:center;color:yellow;" title="Bauarbeiter">B</div>';
medals[3] = '<div class="medal medal3 medalChef" medalcode="3" style="width:30px;height:30px;border-radius:15px;background:beige;font-size:30px;line-height:32px;text-align:center;color:blue;" title="Chef">C</div>';

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-left",
    "preventDuplicates": true,
    "showDuration": "300",
    "hideDuration": "3000",
    "timeOut": "10000",
    "extendedTimeOut": "3000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

///// fleo.at_audioConference.js

$("body").append('<div id="container" style="display:none;position:fixed;width:400px;height:400px;top:50px;left:0;z-index:20000;"><div id="demoContainer">' +
'<div id="connectControls"><button id="connectButton">Connect</button><button id="hangupButton">Hangup</button><div id="iam">Not yet connected...</div>' +
'<strong>Connected users:</strong><div id="otherClients"></div></div><div id="videos">' +
'<div id="acceptCallBox"><div id="acceptCallLabel"></div><button id="callAcceptButton">Accept</button><button id="callRejectButton">Reject</button></div></div></div></div>');

function connect() {
    console.log("Initializing ...");
    toastr.info("Connecting to the communication-system.");
    $.getScript("/fleo.at-audio/files/socket.io.slim.js", function(){
    $.getScript("/fleo.at-audio/files/api/easyrtc.js", function(){
    audioStarted();
    
})})};

$("#connectButton").click(function(){ connect(); });

function audioStarted(){

function showMesg(errmesg) {
    $("#clicksChatCont").append('<p><span style="width:300px;margin-left:100px;">' + errmesg + '</span></p>');
}

$("body").append('<audio id="ringring" src="/fleo.at-medien/audioSystem/37281f8a38_audio_recording_1661279175085.mp3"></audio>');
$("body").append('<audio id="tock" src="/fleo.at-medien/layout/tock.mp3"></audio>');

var ringring = document.getElementById("ringring");
var tock = document.getElementById("tock");
tock.volume = 1;
ringring.volume = 0.4;

easyrtc._presetMediaConstraints = {
    audio: {
      sampleSize: 16,
      sampleRate: 48000, 
      echoCancellation: false, 
      noiseSuppression: false,
      autoGainControl: false 
   }
  }

  const ledColor = [
    "#064dac",
    "#064dac",
    "#064dac",
    "#06ac5b",
    "#15ac06",
    "#4bac06",
    "#80ac06",
    "#acaa06",
    "#ac8b06",
    "#ac5506",
]
const ledColorGray = [
    "#064dac3f",
    "#064dac3f",
    "#064dac3f",
    "#06ac5b3f",
    "#15ac063f",
    "#4bac063f",
    "#80ac063f",
    "#acaa063f",
    "#ac8b063f",
    "#ac55063f",
]

Push.config({ serviceWorker: '/fleo.at-js/jquery-ui/serviceWorker.min.js' });

function loginSuccess(easyrtcid) {
    easyrtc.joinRoom((myNumber[0] + myNumber[2]).replace("#", "")/*, null, function(personRoomSuc){ toastr.info("Joined room " + personRoomSuc); }, function(code, message, personRoomErr){ toastr.error("Join error: " + code + " - " + message + " in room " + personRoomErr); } */);
    console.log("Connected to the audio-/chat-system.");
    $.ajax({
        beforeSend: function () {
            $("#flash").addClass("f");   
        },
        type: "POST",
        url: "/fleo.at-php/present.php",
        dataType: "html",
        data: {
            doing: 9,
            number: (myNumber[0] + myNumber[2]).replace("#", ""),
            name: myNumber[1],
            color: myNumber[2],
            audioSession: easyrtcid
        }
    }).done(function (response) {
        toastr.success("Connected to the communication-system.");
        $("#flash").removeClass("f");
        audioConferenceConnected = 1;
        $("body").append('<audio class="videoWallManAudio" crossOrigin="anonymous" id="callerAudio-Own" src="" playsinline="playsinline" style="display:none;" data-audiosesplayer="' + easyrtcid + '"  data-audiosessionname="' + encodeURI(myNumber[1]) + ' (me)"></audio>');
        $("body").append('<audio id="callerAudio-ReplaySound" crossOrigin="anonymous" src="" playsinline="playsinline" style="display:none;"></audio>');
        $("body").append('<audio id="callerAudio-ReplayPlaySound" crossOrigin="anonymous" src="" playsinline="playsinline" style="display:none;"></audio>');
        
        if(!audioCtxVolume["callerAudio-Own"]) {
            audioCtxVolume["callerAudio-Own"] = new AudioContext();
          }

          function ledsOwn(vol) {
              ledsVol["callerAudio-Own"] = [...$('.led-callerAudio-Own')];
              let range = ledsVol["callerAudio-Own"].slice(0, Math.round(vol));
          
              for (var i = 0; i < ledsVol["callerAudio-Own"].length; i++) {
                 ledsVol["callerAudio-Own"][i].style.background = "#a7a7a700";
              };
          
              for (var i = 0; i < range.length; i++) {
                  range[i].style.background = `${ledColor[i]}`;
              };
          }
          function ledsOwnGray(vol) {
            ledsGrayVol["callerAudio-Own"] = [...$('.ledGray-callerAudio-Own')];
            let range = ledsGrayVol["callerAudio-Own"].slice(0, Math.round(vol));

            for (var i = 0; i < ledsGrayVol["callerAudio-Own"].length; i++) {
                ledsGrayVol["callerAudio-Own"][i].style.background = "#a7a7a73d";
              };

            for (var i = 0; i < range.length; i++) {
                range[i].style.background = `${ledColorGray[i]}`;
            };
        }

          async function doTheVolumeMeterOwn(stream) { 
          await audioCtxVolume["callerAudio-Own"].audioWorklet.addModule('/fleo.at-js/fleo.at_volumeMeterProcessor.js');
          fleoNodeSource["callerAudio-Own"] = audioCtxVolume["callerAudio-Own"].createMediaStreamSource(stream);
          volumeMeterNode["callerAudio-Own"] = new AudioWorkletNode(audioCtxVolume["callerAudio-Own"], 'vumeter');
          volumeMeterGrayNode["callerAudio-Own"] = new AudioWorkletNode(audioCtxVolume["callerAudio-Own"], 'vumeter');
          volumeMeterNode["callerAudio-Own"].port.onmessage = event => {
              let _volume = 0
              let _sensibility = 1
              if (event.data.volume) { _volume = event.data.volume; ledsOwn((_volume * 100) / _sensibility) } }
        volumeMeterGrayNode["callerAudio-Own"].port.onmessage = event => {
        let _volume = 0
        let _sensibility = 1
        if (event.data.volume) { _volume = event.data.volume; ledsOwnGray((_volume * 100) / _sensibility) } }
            gainNode["callerAudio-Own"] = audioCtxVolume["callerAudio-Own"].createGain();
            fleoDestination["callerAudio-Own"] = audioCtxVolume["callerAudio-Own"].createMediaStreamDestination();
            fleoNodeSource["callerAudio-Own"].connect(volumeMeterGrayNode["callerAudio-Own"]);
            fleoNodeSource["callerAudio-Own"].connect(gainNode["callerAudio-Own"]);
            
            fleoMediaStream["callerAudio-Own"] = gainNode["callerAudio-Own"].connect(fleoDestination["callerAudio-Own"]);

            gainNode["callerAudio-Own"].connect(volumeMeterNode["callerAudio-Own"]);
          }
          doTheVolumeMeterOwn(easyrtc.getLocalStream());

        $(document).on("click", ".volumeClickcallerAudio-Own", function (e) { 
            let VoffsetY = $(".volumeClickcallerAudio-Own").offset();
            let VspotY = ((e.pageY - VoffsetY.top) - 120) * - 2;
            gainNode["callerAudio-Own"].gain.setValueAtTime(parseFloat(VspotY / 120), audioCtxVolume["callerAudio-Own"].currentTime + 0.005);
            $("#callerAudio-Own")[0].volume = (1 / 240) * VspotY;
            $(".volumecallerAudio-Own").css("height", ((10 / 24) * VspotY) + "%");
            $(".volumeReccallerAudio-Own").css("width", ((1 / 4) * (VspotY * 5)) + "px");
        });
        
    });
}

function loginFailure(errorCode, message) {
    showMesg(message);
}

easyrtc.setStreamAcceptor( function(easyrtcid, stream) {
    if (!$("#callerAudio-" + easyrtcid).length) {
        document.querySelector("[data-audioses='" + easyrtcid + "']").innerHTML += '<audio crossOrigin="anonymous" class="videoWallManAudio" id="callerAudio-' + easyrtcid + '" src="" autoplay="true" playsinline="playsinline" style="display:none;" data-audiosesplayer="' + easyrtcid + '" data-audiosessionnumber="' + encodeURI(easyrtc.idToName(easyrtcid)) + '" data-audiosessionname="' + encodeURI($("#maennikenTextWall-" + easyrtc.idToName(easyrtcid)).html()) + '"></audio>';                 
        }
        
        if(!audioCtxVolume["callerAudio-" + easyrtcid]) {
            audioCtxVolume["callerAudio-" + easyrtcid] = new AudioContext();
          }

          function ledsRec(vol) {
            ledsVol["callerAudio-" + easyrtcid] = [...$('.led-callerAudio-' + easyrtcid)];
            let range = ledsVol["callerAudio-" + easyrtcid].slice(0, Math.round(vol));
        
            for (var i = 0; i < ledsVol["callerAudio-" + easyrtcid].length; i++) {
              ledsVol["callerAudio-" + easyrtcid][i].style.background = "#a7a7a700";
            };
        
            for (var i = 0; i < range.length; i++) {
                range[i].style.background = `${ledColor[i]}`;
            };
        }
        function ledsRecGray(vol) {
          ledsGrayVol["callerAudio-" + easyrtcid] = [...$('.ledGray-callerAudio-' + easyrtcid)];
          let range = ledsGrayVol["callerAudio-" + easyrtcid].slice(0, Math.round(vol));

          for (var i = 0; i < ledsGrayVol["callerAudio-" + easyrtcid].length; i++) {
              ledsGrayVol["callerAudio-" + easyrtcid][i].style.background = "#a7a7a700";
            };

          for (var i = 0; i < range.length; i++) {
              range[i].style.background = `${ledColorGray[i]}`;
          };
      }

        async function doTheVolumeMeterOthers(streamMod) { 
        await audioCtxVolume["callerAudio-" + easyrtcid].audioWorklet.addModule('/fleo.at-js/fleo.at_volumeMeterProcessor.js');
        fleoNodeSource["callerAudio-" + easyrtcid] = audioCtxVolume["callerAudio-" + easyrtcid].createMediaStreamSource(streamMod);
       volumeMeterNode["callerAudio-" + easyrtcid] = new AudioWorkletNode(audioCtxVolume["callerAudio-" + easyrtcid], 'vumeter');
       volumeMeterGrayNode["callerAudio-" + easyrtcid] = new AudioWorkletNode(audioCtxVolume["callerAudio-" + easyrtcid], 'vumeter');
       volumeMeterNode["callerAudio-" + easyrtcid].port.onmessage = event => {
          let _volume = 0
            let _sensibility = 1
            if (event.data.volume) { _volume = event.data.volume; ledsRec((_volume * 100) / _sensibility) } }
      volumeMeterGrayNode["callerAudio-" + easyrtcid].port.onmessage = event => {
      let _volume = 0
      let _sensibility = 1 
      if (event.data.volume) { _volume = event.data.volume; ledsRecGray((_volume * 100) / _sensibility) } }
        gainNode["callerAudio-" + easyrtcid] = audioCtxVolume["callerAudio-" + easyrtcid].createGain();
        fleoDestination["callerAudio-" + easyrtcid] = audioCtxVolume["callerAudio-" + easyrtcid].createMediaStreamDestination();
         fleoNodeSource["callerAudio-" + easyrtcid].connect(volumeMeterGrayNode["callerAudio-" + easyrtcid]);
         fleoNodeSource["callerAudio-" + easyrtcid].connect(gainNode["callerAudio-" + easyrtcid]);
          
          fleoMediaStream["callerAudio-" + easyrtcid] = gainNode["callerAudio-" + easyrtcid].connect(fleoDestination["callerAudio-" + easyrtcid]);

          easyrtc.setVideoObjectSrc(document.getElementById('callerAudio-' + easyrtcid), stream);
          gainNode["callerAudio-" + easyrtcid].connect(volumeMeterNode["callerAudio-" + easyrtcid]);
          var calleeActive6 = easyrtc.idToName(easyrtcid);
          changeVolumeMeMoving(calleeActive6);
        }
        doTheVolumeMeterOthers(stream);

        $(document).on("click", ".volumeClickcallerAudio-" + easyrtcid, function (e) { 
            let Voffset = $(".volumeClickcallerAudio-" + easyrtcid).offset();
            let VspotY = ((e.pageY - Voffset.top) - 84 * thisAllScale) * - 2;
            if (VspotY > 110) {
            gainNode["callerAudio-" + easyrtcid].gain.setValueAtTime(2.4, audioCtxVolume["callerAudio-" + easyrtcid].currentTime + 0.005);
            $("#callerAudio-" + easyrtcid)[0].volume = 1;
            $(".volumecallerAudio-" + easyrtcid).css("height", "100%");
            $(".volumeReccallerAudio-" + easyrtcid).css("width", "300px");}
            else if (VspotY < 20) {
            gainNode["callerAudio-" + easyrtcid].gain.setValueAtTime(0, audioCtxVolume["callerAudio-" + easyrtcid].currentTime + 0.005);
            $("#callerAudio-" + easyrtcid)[0].volume = 0;
            $(".volumecallerAudio-" + easyrtcid).css("height", "0%");
            $(".volumeReccallerAudio-" + easyrtcid).css("width", "0px");
            }
            else {
            gainNode["callerAudio-" + easyrtcid].gain.setValueAtTime(parseFloat(VspotY / 84 * thisAllScale) * 2, audioCtxVolume["callerAudio-" + easyrtcid].currentTime + 0.005);
            $("#callerAudio-" + easyrtcid)[0].volume = (1 / (168 * thisAllScale)) * VspotY;
            $(".volumecallerAudio-" + easyrtcid).css("height", ((100 / (168 * thisAllScale)) * VspotY) + "%");
            $(".volumeReccallerAudio-" + easyrtcid).css("width", (0.5 * (VspotY * (300 / (84 * thisAllScale)))) + "px");
            }
        });
});

easyrtc.setOnStreamClosed( function (easyrtcid) {
    var calleeActive3 = easyrtc.idToName(easyrtcid);
    $(".maennikenConferenceHangup-" + calleeActive3).hide(); $(".maennikenConferenceVolume-" + calleeActive3).hide();
    $(".maennikenConferenceCall-" + calleeActive3).show();
    showMesg("Call with " + $("#maennikenTextWall-" + calleeActive3).html() + " ended");
    toastr.warning("Call with " + $("#maennikenTextWall-" + calleeActive3).html() + " ended");
    $("#hangup-" + easyrtcid).remove();
    setTimeout(function(){ if (!$(".endCallHangUp:visible").length) { $("#hangUpButton2").hide(); } }, 1500);
}); 

var ringringTimes;
easyrtc.setAcceptChecker(function(easyrtcid, callback) {
    var whoCalls = $("#maennikenTextWall-" + (easyrtc.idToName(easyrtcid))).html();
    showMesg("You are called by " + whoCalls);
    
    $("#bgbg").addClass("flashBGBG");
    if (!window.focus()) { Push.create("Incoming Call!", { body: "You are called by " + whoCalls, icon: '/icon.png', requireInteraction: true, tag: "incomingCall", onClick: function () { window.focus(); this.close(); } }); } else {  }
    ringringTimes = 0;
    ringring.volume = 0.2;
    var ringringTimOut = setTimeout(function(){ ringring.play(); }, 2500);
    var ringringIntVal = setInterval(function(){ if (ringringTimes < 8) { ringring.play(); ringringTimes++; } else { clearInterval(ringringIntVal); } },7000);
    $("#menuBottom").append('<div id="accept-'+ easyrtcid +'" class="menuItem acceptButton" whocalls="'+ easyrtcid +'">' + whoCalls + ' annehmen</div>');
    $("#menuBottom").append('<div id="reject-'+ easyrtcid +'" class="menuItem rejectButton" whocalls="'+ easyrtcid +'">' + whoCalls + ' ablehnen</div>');
    var acceptTheCall = function(wasAccepted) {
    Push.close("incomingCall");
    var calleeActive4 = easyrtc.idToName(easyrtcid);
        if (wasAccepted) {
        $("#accept-" + easyrtcid).remove(); $("#reject-" + easyrtcid).remove();
        showMesg("You are in a call with: " + $("#maennikenTextWall-" + calleeActive4).html()); 
        toastr.accepted("You are in a call with: " + $("#maennikenTextWall-" + calleeActive4).html()); 
        $("#bgbg").removeClass("flashBGBG");
        } else {
            $("#accept-" + easyrtcid).remove(); $("#reject-" + easyrtcid).remove();
            showMesg("You rejected a call by " + $("#maennikenTextWall-" + calleeActive4).html()); 
            toastr.warning("You rejected a call by " + $("#maennikenTextWall-" + calleeActive4).html()); 
            $("#bgbg").removeClass("flashBGBG");
        }
        callback(wasAccepted);
    };
    document.getElementById("accept-" + easyrtcid).onclick = function() {
        ringring.volume = 0;
        clearTimeout(ringringTimOut);
        clearInterval(ringringIntVal);
        acceptTheCall(true);
        var calleeActive2 = easyrtc.idToName(easyrtcid);
        $(".maennikenConferenceCall-" + calleeActive2).hide();
        $(".maennikenConferenceHangup-" + calleeActive2).show(); $(".maennikenConferenceVolume-" + calleeActive2).show();
        $("#hangUpButton2").show();
        if (!$("#hangup-" + easyrtcid).length) { 
        $("#menuBottom").append('<div id="hangup-'+ easyrtcid +'" class="menuItem hangupButton" whocalls="'+ easyrtcid +'">' + whoCalls + ' auflegen</div>');
        document.getElementById("hangup-" + easyrtcid).onclick = function() {
            easyrtc.hangup(easyrtcid);
            // $("#hangup-" + easyrtcid).remove();
        };
        }
    };
    document.getElementById("reject-" + easyrtcid).onclick = function() {
        ringring.volume = 0;
        clearTimeout(ringringTimOut);
        clearInterval(ringringIntVal);
        acceptTheCall(false);
    };
    toastr.info("You are called by " + whoCalls, mainDomain, {onclick: function(){ $("#accept-" + easyrtcid).click(); }});
    if (audioAutoAccept == "on") {
        $("#accept-" + easyrtcid).click();
    }
    if (audioAutoReject == "on") {
        $("#reject-" + easyrtcid).click();
    }
} );

callRoom = function(personRoom) {
    easyrtc.joinRoom(personRoom/*, null, function(personRoomSuc){ toastr.info("Joined room " + personRoomSuc); }, function(code, message, personRoomErr){ toastr.error("Join error: " + code + " - " + message + " in room " + personRoomErr); }*/);
        setTimeout(function(){
        var occupants = easyrtc.getRoomOccupantsAsArray(personRoom);
        for(let i = 0; i < occupants.length; i++) {
            var calleeActive = easyrtc.idToName(occupants[i]);
            if (calleeActive !== (myNumber[0] + myNumber[2]).replace("#", "")) {
            showMesg("You are calling " + $("#maennikenTextWall-" + calleeActive).html());
            easyrtc.call(
                occupants[i],
                function success(otherCaller) {
                    calleeActive = easyrtc.idToName(otherCaller);
                    let whoCalls2 = $("#maennikenTextWall-" + calleeActive).html();
                    $(".maennikenConferenceCall-" + calleeActive).hide(); 
                    $(".maennikenConferenceHangup-" + calleeActive).show(); $(".maennikenConferenceVolume-" + calleeActive).show();
                    $("#hangUpButton2").show();
                    if (!$("#hangup-" + otherCaller).length) { 
                    $("#menuBottom").append('<div id="hangup-'+ otherCaller +'" class="menuItem hangupButton" whocalls="'+ otherCaller +'">' + whoCalls2 + ' auflegen</div>');
                    document.getElementById("hangup-" + otherCaller).onclick = function() {
                        easyrtc.hangup(otherCaller);
                        // $("#hangup-" + otherCaller).remove();
                    };
                    }
                },
                function failure(errorCode, errorMessage) {
                    toastr.info("Info: " + errorMessage);
                },
                function(wasAccepted, calleeActive5){
                    calleeActive5 = easyrtc.idToName(calleeActive5);
                    if( wasAccepted ){
                        toastr.accepted("Call accepted by " + $("#maennikenTextWall-" + calleeActive5).html() + ".");
                        showMesg("Call established with " + $("#maennikenTextWall-" + calleeActive5).html() + ".");
                    }
                    else{
                        toastr.warning("Call rejected by " + $("#maennikenTextWall-" + calleeActive5).html() + ".");
                        showMesg("Call rejected by " + $("#maennikenTextWall-" + calleeActive5).html() + ".");
                    }
                    }
            );
            }
        }
    }, 1200);
}

callSingle = function(personRoom) {
    easyrtc.joinRoom(personRoom/*, null, function(personRoomSuc){ toastr.info("Joined room " + personRoomSuc); }, function(code, message, personRoomErr){ toastr.error("Join error: " + code + " - " + message + " in room " + personRoomErr); }*/);
        setTimeout(function(){
        var occupants = easyrtc.getRoomOccupantsAsArray(personRoom);
        for(let i = 0; i < occupants.length; i++) {
            var calleeActive = easyrtc.idToName(occupants[i]);
            if (personRoom == easyrtc.idToName(occupants[i])) {
            showMesg("You are calling Felix central call");
            easyrtc.call(
                occupants[i],
                function success(otherCaller) {
                    calleeActive = easyrtc.idToName(otherCaller);
                    let whoCalls2 = $("#maennikenTextWall-" + calleeActive).html();
                    $(".maennikenConferenceCall-" + calleeActive).hide(); 
                    $(".maennikenConferenceHangup-" + calleeActive).show(); $(".maennikenConferenceVolume-" + calleeActive).show();
                    $("#hangUpButton2").show();
                    if (!$("#hangup-" + otherCaller).length) { 
                    $("#menuBottom").append('<div id="hangup-'+ otherCaller +'" style="width:auto;height:auto;" class="menuItem hangupButton" whocalls="'+ otherCaller +'">Felix central call auflegen</div>');
                    document.getElementById("hangup-" + otherCaller).onclick = function() {
                        easyrtc.hangup(otherCaller);
                        // $("#hangup-" + otherCaller).remove();
                    };
                    }
                },
                function failure(errorCode, errorMessage) {
                    toastr.info("Info: " + errorMessage);
                },
                function(wasAccepted, calleeActive5){
                    calleeActive5 = easyrtc.idToName(calleeActive5);
                    if( wasAccepted ){
                        toastr.accepted("Call accepted by Felix central call.");
                        showMesg("Call established with Felix central call.");
                    }
                    else{
                        toastr.warning("Call rejected by Felix central call.");
                        showMesg("Call rejected by Felix central call.");
                    }
                    }
            );
            }
        }
    }, 200);
}

//////////////////// Chat ////////////////////

openChat = function(receiver) {
    spacebarText = 1; 
    chatKeysOn = 1;
    var chatPartner = easyrtc.idToName(receiver);
    $("#writeChat").attr("receiver", receiver);
    $("#writeChat").find("h2").html("Write message to:<br />" + $("#maennikenTextWall-" + chatPartner).html());
    $("#writeChat").show();
}

function addToConversation(who, msgType, content) {
    var chatPartner = easyrtc.idToName(who);
    content = content.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    content = content.replace(/\n/g, '<br />');
    showMesg($("#maennikenTextWall-" + chatPartner).html() + ":<br />" + content + " <span style='text-decoration:underline;pointer-events:auto;cursor:pointer;' onClick='openChat(\"" + who + "\");'>reply</span>");
    if (!window.focus()) { Push.create("Chat!", { body: $("#maennikenTextWall-" + chatPartner).html() + ": " + content, requireInteraction: true, icon: '/icon.png', tag: "incomingChat", onClick: function () { window.focus(); this.close(); } }); }
    tock.play();
}
sendStuffWS = function(otherEasyrtcid) {
    var chatPartner = easyrtc.idToName(otherEasyrtcid);
    var text = document.getElementById('sendMessageText').value;
    if(text.replace(/\s/g, "").length === 0) {
        return;
    }
    if (typeof $("#maennikenTextWall-" + chatPartner).html() == "undefined") { text = "Konnte nicht senden. Empfänger scheint fort."; }
    easyrtc.sendDataWS(otherEasyrtcid, "message",  text);
    text = text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    text = text.replace(/\n/g, '<br />');
    showMesg("Me to " + $("#maennikenTextWall-" + chatPartner).html() + ":<br />" + text);
    document.getElementById('sendMessageText').value = "";
    spacebarText = 0; 
    chatKeysOn = 0;
    $("#writeChat").hide();
}

    easyrtc.enableVideo(false);
    easyrtc.enableVideoReceive(false);
    easyrtc.setPeerListener(addToConversation);
    easyrtc.initMediaSource(
        function(){
            easyrtc.setUsername((myNumber[0] + myNumber[2]).replace("#", ""));
            easyrtc.setSocketUrl(easyrtcWebsocketUrl);
            easyrtc.connect("tCupSpace", loginSuccess, loginFailure);
        },
        function(errorCode, errmesg){
            showMesg(errmesg + " and " + errorCode);
        }  
        );

}

///// fleo.at.js

			// Moving around with arrows and mouseclick
	
			// START

			var placeToOpen = 0;
			var placeToOpenOnlyNumbers = 0;
			var iii = document.getElementsByClassName("move");
			var ppp = document.getElementsByClassName("person");
			var historyCoords;
			var sMMssM;
			var yeahStartup = 0;
			var worldHeight = 0;
	
			function eee(fff, ggg, scaleNow, item) {
				$(item).toggleClass("scale" + scaleNow).toggleClass("scale" + fff);
                $(item).attr("distance",fff);
			}
			queryCoordsGet = window.location.search;
			urlForCoordsGet = new URLSearchParams(queryCoordsGet);
			var article = urlForCoordsGet.get('open');
			if (urlForCoordsGet.has('yeah')) { yeahStartup = 1; }
			if ((urlForCoordsGet.has('coords')) && (urlForCoordsGet.has('doords')))	{
				var placeToOpenW = urlForCoordsGet.get('coords');
				var placeToOpenD = urlForCoordsGet.get('doords') * 3; } else {
					var placeToOpenW = 0;
					var placeToOpenD = 0;
				}
			var placeToOpenWN = parseInt(placeToOpenW);
			var placeToOpenDN = parseInt(placeToOpenD);
			
			var niceAddress = 0;
			var readyWorlds = 0;
			var readyPersons = 1;
			if ((!((urlForCoordsGet.has('coords')) && (urlForCoordsGet.has('doords')))) && $.cookie('spacecoords') && $.cookie('spacedoords')) {
				placeToOpenWN = parseInt($.cookie('spacecoords'));
				placeToOpenDN = parseInt($.cookie('spacedoords')) * 3;
			}
			historyCoords = placeToOpenWN;
			sMMssM = placeToOpenDN;

			function startupJavascriptVSPHP() {

							niceAddress = 1;
							placeToOpenWN = historyCoords;
							placeToOpenDN = sMMssM;
				
			if (niceAddress == "1") {
				function waitForWorlds() {
					if (readyWorlds == 1) {
						for (var aaa = 0; aaa < iii.length; aaa++) {
							that1 = iii.item(aaa);
							scaleNow = parseInt($(that1).attr("distance"));
                            scaleNowNumber = scaleNow;
							scaleNowNumber += placeToOpenDN;
							eee(scaleNowNumber, aaa, scaleNow, that1);
							$(that1).find(".tree").animate({
								"left": "+=" + placeToOpenWN
							}, 800);
						}
						historyCoords = placeToOpenWN;
						sMMssM = placeToOpenDN;
						ready = 1;
                        // console.log("ready called");
					} else {
						setTimeout(waitForWorlds, 250);
					}
				}
				waitForWorlds();
			} else {
			console.log("Something missing (niceAddress).");
		}}
			startupJavascriptVSPHP();

			// get height of everything
			var w = $(window).width();
			var h = $(window).height();
            var thisAllScale = w / 1800;
            var pointZero;
	
            function getThingsStraight(){
                if (yeahStartup !== 1) {
                $("html").animate({scrollTop:$("body").css("height")},0,(function(){w=$(window).width(),h=$(window).height(),thisAllScale=w/1800,$("#wrapperContainer").transition({scale:thisAllScale,duration:0},(function(){pointZero=$(window).scrollTop()-parseInt($("body").css("height")),relationToBackground=$(window).scrollTop()-parseInt($("body").css("height"))-pointZero+35,$("html").animate({scrollTop:$("body").css("height")},0,(function(){$("#wrapper").animate({height:"5000px"},0,(function(){$("html").animate({scrollTop:$("body").css("height")},0,(function(){$("body").animate({height:parseInt($("#wrapper").css("height"))*thisAllScale},0,(function(){$("#waldf").animate({bottom:Math.round(relationToBackground/5)*thisAllScale+"px"},0,(function(){$("#haeuserf").animate({bottom:Math.round(relationToBackground/8)*thisAllScale+"px"},0,(function(){$("html").animate({scrollTop:$("body").css("height")},0,(function(){w=$(window).width(),h=$(window).height(),thisAllScale=w/1800,$("#wrapperContainer").transition({scale:thisAllScale,duration:0},(function(){pointZero=$(window).scrollTop()-parseInt($("body").css("height")),relationToBackground=$(window).scrollTop()-parseInt($("body").css("height"))-pointZero+35,$("html").animate({scrollTop:$("body").css("height")},0,(function(){$("#wrapper").animate({height:"5000px"},0,(function(){$("#bgbgsterne").animate({left:($(window).width()-$("#bgbgsterne").width())/2+"px"},0,(function(){$("html").animate({scrollTop:$("body").css("height")},0,(function(){$("body").animate({height:parseInt($("#wrapper").css("height"))*thisAllScale},0,(function(){$("#waldf").animate({bottom:Math.round(relationToBackground/5)*thisAllScale+"px"},0,(function(){$("#haeuserf").animate({bottom:Math.round(relationToBackground/8)*thisAllScale+"px"},0,(function(){"b"==will?$("#mapForLocator").css({"transform-origin":mySpotterMapLocationX+"px "+mySpotterMapLocationY+"px",bottom:mySpotterMapLocationY-200+"px",left:w/2-mySpotterMapLocationX-16+"px"}).transition({perspective:"100px",rotate:turn/9e3*90+"deg"},{duration:0}):$("#mapForLocator").css({"transform-origin":mySpotterMapLocationX+"px "+mySpotterMapLocationY+"px",bottom:mySpotterMapLocationY-200+"px",left:w/2-mySpotterMapLocationX-16+"px"}).transition({perspective:"100px",rotate:turn/9e3*-90+180+"deg"},{duration:0}),will,$("#menuBottom")[0].offsetWidth<450?($(".menuItem").css({"font-size":"14px","line-height":"18px",height:"22px"}),$("#maennikenBag-"+(myNumber[0]+myNumber[2]).replace("#","")).css({top:"55px"})):($(".menuItem").css({"font-size":"18px","line-height":"25px",height:"28px"}),$("#maennikenBag-"+(myNumber[0]+myNumber[2]).replace("#","")).css({top:"68px"}))}))}))}))}))}))}))}))}))}))}))}))}))}))}))}))}))}));
                }}
            
                        $("#wrapperContainer").css({"transform": "scale(" + thisAllScale + ")"});
                        $("#wrapper").css("height", (5000));
                        $("body").css("height", parseInt($("#wrapper").css("height")) * thisAllScale);
                        $("html").animate({
                            scrollTop: $("body").css("height")
                        }, 0);
                        pointZero = $(window).scrollTop() - parseInt($("body").css("height"));
                        relationToBackground = 0;
                        $(window).resize(function(){
                            if (draggingVideoSize == 0) {
                            getThingsStraight();
                            }
                            
                        });
                        var scrollSub = 0;
                        $("#wrapper").bind('mousewheel DOMMouseScroll', function(e) {
                                
                            var scrollTo = null;
                            if (e.type == 'mousewheel') {
                                scrollTo = (e.originalEvent.wheelDelta * -1);
                            } else if (e.type == 'DOMMouseScroll') {
                                scrollTo = 1000 * e.originalEvent.detail;
                            }
                            if (scrollTo) {
                                e.preventDefault();
                                scrollSub += scrollTo;
                            // $(this).scrollTop(scrollTo + $(this).scrollTop()); 
                            if (scrollSub > 50 || scrollSub < -50) { relationToBackground = $(window).scrollTop() + scrollSub - parseInt($("body").css("height")) + $(window).height(); scrollSub = 0; 
                            moveWithTrain(historyCoords,sMMssM,0,relationToBackground,turn); // relationToBackground = heightStepOld;
                         }
                            
                                /* let someValue = parseInt(relationToBackground - heightStepOld);
                                if (someValue < 0) { someValue *=-1; }
                                // if (heightStep !== heightStepOld) { 
                                    // if (levelScroll !== heightStepOld) {
                                if (someValue > 50) {    
                                    
                                }*/
                                    /* relationToBackground2 = parseInt($(window).scrollTop() - parseInt($("body").css("height")) + $(window).height());
                                    if (relationToBackground2 >= 0) { console.log("here"); $("html").scrollTop(parseInt($("body").css("height")) - h); } */

                                // console.log(relationToBackground);


                                
                            }
                        });


                       /*  $(window).on("scroll", function(e) {
                                e.preventDefault();
                                e.preventPropagation();
                        
                                // return false;
                                // if ($(window).scrollTop() > (parseInt($("body").css("height")) - h - 35)) {
                                // 	$("html").scrollTop(parseInt($("body").css("height")) - h - 35);
                                //	}

                                relationToBackground = parseInt($(window).scrollTop() - parseInt($("body").css("height")) + $(window).height());
                                
                                
                                // if (heightStep !== heightStepOld) { 
                                    // if (levelScroll !== heightStepOld) {
                                if (levelScroll !== heightStepOld) {    
                                    moveWithTrain(historyCoords,sMMssM,250,relationToBackground); levelScroll = heightStepOld; }
                                


                                // console.log(relationToBackground);
                                $("#waldf").css("bottom", Math.round(relationToBackground / 5) * thisAllScale + "px");
                                $("#haeuserf").css("bottom", Math.round(relationToBackground / 8) * thisAllScale + "px");
                                // if (relationToBackground >= 0) { console.log("here"); $("html").scrollTop(parseInt($("body").css("height")) - h); }
                            }); */

setTimeout(function(){ getThingsStraight(); }, 2000);
///// fleo.at_whereAmI.js

var mySpotterMapLatitude, mySpotterMapLongitude, mySpotterMapLocationX, mySpotterMapLocationY, mapIsWorld = 0;
var hp = 0;

function changeVolumeMeMoving(otherPersonCode){
        if ($(".maennikenConferenceHangup-" + otherPersonCode).is(":visible")) {
            if (Math.abs(parseInt($("#personCode-" + otherPersonCode).find(".tree").css("left")) - 800) > Math.abs(parseInt($("#personCode-" + otherPersonCode).attr("distance")))) {
                othPersonDistanceSelf[otherPersonCode] = Math.abs(parseInt($("#personCode-" + otherPersonCode).find(".tree").css("left")) - 800);
            } else {
                othPersonDistanceSelf[otherPersonCode] = Math.abs(parseInt($("#personCode-" + otherPersonCode).attr("distance")));
            }
        
        if (othPersonDistanceSelf[otherPersonCode] > 15000) { othPersonDistanceSelfId[otherPersonCode] = 0; } else {
            othPersonDistanceSelfId[otherPersonCode] = Math.round(90 + (othPersonDistanceSelf[otherPersonCode] / 13500) * - 96);
            if (hearLikeOwl == 1) { othPersonDistanceSelfId[otherPersonCode] = 84 }
            if (othPersonDistanceSelfId[otherPersonCode] < 0) { othPersonDistanceSelfId[otherPersonCode] = 0; }
            if (othPersonDistanceSelfId[otherPersonCode] > 84) { othPersonDistanceSelfId[otherPersonCode] = 84; }
        // console.log( othPersonDistanceSelfId[otherPersonCode]);
        if (othPersonDistanceSelfId[otherPersonCode] !== othPersonDistanceSelfOld[otherPersonCode]) {
            otherVolume[otherPersonCode] = othPersonDistanceSelfId[otherPersonCode]; }
            gainNode["callerAudio-" + $("#videoWallMan-" + otherPersonCode).attr("data-audioses")].gain.setValueAtTime(parseFloat(otherVolume[otherPersonCode] / 84) * 2, audioCtxVolume["callerAudio-" + $("#videoWallMan-" + otherPersonCode).attr("data-audioses")].currentTime + 0.005);
            othAudioSes[otherPersonCode] = $("#videoWallMan-" + otherPersonCode).attr("data-audioses");
            $("#callerAudio-" + othAudioSes[otherPersonCode])[0].volume = (1 / (84)) * otherVolume[otherPersonCode];
            $(".volumecallerAudio-" + othAudioSes[otherPersonCode]).css("height", ((100 / (84)) * otherVolume[otherPersonCode]) + "%");
            $(".volumeSoundReccallerAudio-" + othAudioSes[otherPersonCode]).css("width", (1 * (otherVolume[otherPersonCode] * (300 / (84)))) + "px");
            $(".volumeReccallerAudio-" + othAudioSes[otherPersonCode]).css("width", (0.5 * (otherVolume[otherPersonCode] * (300 / (84)))) + "px");
            othPersonDistanceSelfOld[otherPersonCode] = othPersonDistanceSelf[otherPersonCode];
        }}
        }

function isInt(value) {
return !isNaN(value) && 
parseInt(Number(value)) == value && 
!isNaN(parseInt(value, 10));
}

function whereAmI(hiCo, sMMs, level, duration, turn, whoC, colorC) {

if (ws.readyState === WebSocket.OPEN) {
    $("#flash").addClass("ffff");
    moveWithSocket(hiCo, sMMs, duration, level, turn);
    if (!isInt(turn)) { turn = 0; }
    ws.send(JSON.stringify({doing:9,hiCo:hiCo,sMMs:sMMs,level:level,duration:duration,turn:parseInt(turn),turnX:0,turnZ:0,whoC:whoC}));
 //   if (hp%1==0) { history.replaceState("", "", "?doords="+(parseInt(sMMssM / 3))+"&coords="+(parseInt(historyCoords))); }; hp++;
 //   Cookies.set('spacecoords', historyCoords, { secure: true, sameSite: 'none', expires: 730 });
 //   Cookies.set('spacedoords', (parseInt(sMMssM / 3)), { secure: true, sameSite: 'none', expires: 730 });
    // setTimeout(function(){ $("#flash").removeClass("ffff"); }, 50);

} else {
    moveWithSocket(hiCo, sMMs, duration, level, turn);
    $.ajax({
        beforeSend: function () {
            $("#flash").addClass("ffff");
        },
        type: "POST",
        url: "/fleo.at-php/moving.php",
        dataType: "json",
        data: {
            doing: 9,
            hiCo: hiCo,
            sMMs: sMMs,
            duration: duration,
            level: level,
            turn: turn,
            whoC: whoC,
            colorC: colorC
        }
    }).always(function () {
    //     var kbjae2Xowl = Math.floor(Math.random() * 50);
    //     if (kbjae2Xowl == 0) {
          //  owl.play();
    //    }
        // }
        $("#flash").removeClass("ffff");
    //     hp++;
    //     if (hp%1==0) { history.replaceState("", "", "?doords="+(parseInt(sMMssM / 3))+"&coords="+(parseInt(historyCoords))); }; hp++;
    //     Cookies.set('spacecoords', historyCoords, { secure: true, sameSite: 'none', expires: 730 });
    //     Cookies.set('spacedoords', (parseInt(sMMssM / 3)), { secure: true, sameSite: 'none', expires: 730 });
    });
} 








$(".person").each(function(){
    changeVolumeMeMoving($(this).attr("id").replace("personCode-",""));
});

$(".audioStation").each(function(){            
    sideVolume[$(this)] = ((1) - Math.abs((parseInt($(this).parent(".tree").css("left"))) * (1 / 7500))).toFixed(2);
    doordsVolume[$(this)] = ((1) - Math.abs((parseInt($(this).parent(".tree").parent(".move").attr("distance"))) * (1 / 7500))).toFixed(2);                   
    if (sideVolume[$(this)] < doordsVolume[$(this)]) { setVolume[$(this)] = sideVolume[$(this)]; } else { setVolume[$(this)] = doordsVolume[$(this)]; }                 
    if (setVolume[$(this)] < 0) { setVolume[$(this)] = 0; }    
    if ($(this).attr("id") == "ytplayer") {
      ytplayer.setVolume(setVolume[$(this)] * 100);
    } else {         
    $(this)[0].volume = setVolume[$(this)];           
    }
});

mySpotterMapLatitude = Math.trunc(parseInt(historyCoords) / 1000) * -1;
mySpotterMapLongitude = (parseInt(sMMssM) * -1) / 300;
mySpotterMapLocationX = ((mySpotterMapLatitude / 360) + 0.5) * 720;
mySpotterMapLocationY = (1 - ((mySpotterMapLongitude / 180) + 0.5)) * 360;

if (will == "b") { 
    $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px", "bottom": mySpotterMapLocationY - 200 + "px", "left": w / 2 - mySpotterMapLocationX + "px"}).transition({perspective: '100px', rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0}); 
} else {
    $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px", "bottom": mySpotterMapLocationY - 200 + "px", "left": w / 2 - mySpotterMapLocationX + "px"}).transition({perspective: '100px', rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0}); 
}
$("#maennikenSpotter-Own").css({"top": mySpotterMapLocationY - 5 + "px", "left": mySpotterMapLocationX - 5 + "px"});

if (will == "b") { 
    // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px", "bottom": mySpotterMapLocationY - 340 + "px", "left": w / 2 - mySpotterMapLocationX + 7 + "px"}).transition({perspective: '100px', rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0}); 
} else {
    // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px", "bottom": mySpotterMapLocationY - 340 + "px", "left": w / 2 - mySpotterMapLocationX + 7 + "px"}).transition({perspective: '100px', rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0}); 
}
// $("#maennikenSpotterEurope-Own").css({"top": mySpotterMapLocationY - 7 + "px", "left": mySpotterMapLocationX - 9 + "px"});

if (historyCoords > 15000 || historyCoords < -32000 || sMMssM < -21000 || sMMssM > -11000 || 1 == 1) { if (mapIsWorld == 0) { mapIsWorld = 1; //$("#mapForLocatorEurope").hide(); 
$("#mapForLocator").show(); if (Device_Type() !== "Mobile" && Device_Type() !== "Tablet") { 
    $("#mapBody2").css("transform","rotateX(34deg) scale(1)"); $("#mapBody").css({"transform":"scale(1);"}); } else { 
        $("#mapBody2").css("transform","rotateX(34deg) scale(1)"); $("#mapBody").css({"transform":"scale(1);"}); }}} else { if (mapIsWorld == 1) { mapIsWorld = 0; 
    $("#mapForLocator").hide(); // $("#mapForLocatorEurope").show(); 
    if (Device_Type() !== "Mobile" && Device_Type() !== "Tablet") { 
        $("#mapBody2").css("transform","rotateX(34deg) scale(1)"); $("#mapBody").css({"transform":"scale(1);"}); } else {
        $("#mapBody2").css("transform","rotateX(34deg) scale(1)"); $("#mapBody").css({"transform":"scale(1);"});
    }}
}

}

///// fleo.at_cockpit.js

function Device_Type() 
{
    var Return_Device; 
    if(/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|phone|android|iemobile|w3c|acs\-|alav|alca|amoi|audi|avan|benq|bird|blac|blaz|brew|cell|cldc|cmd\-|dang|doco|eric|hipt|inno|ipaq|java|jigs|kddi|keji|leno|lg\-c|lg\-d|lg\-g|lge\-|maui|maxo|midp|mits|mmef|mobi|mot\-|moto|mwbp|nec\-|newt|noki|palm|pana|pant|phil|play|port|prox|qwap|sage|sams|sany|sch\-|sec\-|send|seri|sgh\-|shar|sie\-|siem|smal|smar|sony|sph\-|symb|t\-mo|teli|tim\-|tosh|tsm\-|upg1|upsi|vk\-v|voda|wap\-|wapa|wapi|wapp|wapr|webc|winw|winw|xda|xda\-) /i.test(navigator.userAgent))
    {
        if(/(tablet|ipad|playbook)|(android(?!.*(mobi|opera mini)))/i.test(navigator.userAgent)) 
        {
            Return_Device = "Tablet";
        }
        else
        {
            Return_Device = "Mobile";
        }
    }
    else if(/(tablet|ipad|playbook)|(android(?!.*(mobi|opera mini)))/i.test(navigator.userAgent)) 
    {
        Return_Device = "Tablet";
    }
    else
    {
        Return_Device = "Desktop";
    }

    return Return_Device;
}

$("body").append('<div class="nineedge" class="cockpit" style="color:red;text-shadow:0 0 10px green;font-weight:bold;cursor:pointer;width:182px;height:182px;position:fixed;top:0;right:0;z-index:14000;pointer-events:none;"><div style="width:80px;"><div class="chtop" style="pointer-events:auto;font-weight:bold;cursor:pointer;width:40px;height:80px;z-index:14000;border-left:1px solid black;border-bottom:1px solid black;">&uarr;</div><div class="chbottom" style="pointer-events:auto;font-weight:bold;cursor:pointer;width:40px;height:80px;z-index:14000;border-left:1px solid black;border-bottom:1px solid black;">&darr;</div></div><div class="chcentercenter" style="position:relative;pointer-events:auto;font-weight:bold;cursor:pointer;width:100px;height:99px;z-index:14000;border-left:1px solid black;border-bottom:1px solid black;"><div style="pointer-events:none;"><span style="text-align:center;">Turn<br />(scroll here)</span></div></div><div style="width:80px;float:right;"><div class="chleft" style="float:right;pointer-events:auto;font-weight:bold;cursor:pointer;width:39px;height:80px;z-index:14000;border-left:1px solid black;border-bottom:1px solid black;">&larr;</div><div class="chright" style="float:right;pointer-events:auto;font-weight:bold;cursor:pointer;width:39px;height:80px;z-index:14000;border-left:1px solid black;border-bottom:1px solid black;">&rarr;</div></div><div id="superSteeringWheelContainer" style="position:fixed;z-index:15000;top:80px;right:80px;width:32px;height:32px;background:white;border:4px solid white;border-radius:100%;"><div id="superSteeringWheel" style="position:absolute;width:12px;height:12px;border:14px solid #d6d6c3;background:red;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%;cursor:grab;pointer-events:auto;z-index:2;"></div></div></div><div id="square"><svg style="width:100%;height:100%;" viewBox="0 0 100 100" preserveAspectRatio="none"><polygon points="33,33 50,50 33,67" id="navLef" /><polygon points="18,0 33,0 33,67 18,82" id="navLefStrong" /><polygon points="9,0 18,0 18,82 9,91" id="navLefStrongVery" class="stepL chleft" /><polygon points="0,0 9,0 9,91 0,100" id="navLookLef" class="lookL chtopleft" /><polygon points="0,100 18,82 50,82 50,100" id="navBacStrongVery" class="straightB chbottom" /><text class="explanation" x="0" y="90" fill="white"><tspan x="9" dy="1.2em">Step Backwards</tspan></text><polygon points="50,100 50,82 82,82 100,100" id="navForStrongVery" class="straightF chtop" /><text class="explanation" x="0" y="90" fill="white"><tspan x="69" dy="1.2em">Step Forward</tspan></text><polygon points="50,50 67,33 67,67" id="navRig" /><polygon points="67,33 82,18 82,82 67,67" id="navRigStrong" /><polygon points="82,0 91,0 91,91 82,82" id="navRigStrongVery" class="stepR chright" /><polygon points="91,0 100,0 100,100 91,91" id="navLookRig" class="lookR chtopright" /><text class="explanation" x="0" y="74" fill="white"><tspan x="42" dy="1.2em">and scroll</tspan><tspan x="42" dy="1.2em">the colors</tspan></text><text class="explanation" x="0" y="94" fill="white"><tspan x="46" dy="1.2em">Map</tspan></text><text id="hideExplanation" class="explanation" x="0" y="74" fill="white"><tspan x="65" dy="1.2em">X hide (ok)</tspan></text><text class="explanation" x="0" y="30" fill="white"><tspan x="1" dy="1.2em">Look</tspan><tspan x="1" dy="1.2em">Left</tspan></text><text class="explanation" x="10" y="30" fill="white"><tspan x="10" dy="1.2em">Step</tspan><tspan x="10" dy="1.2em">Left</tspan></text></svg></div><style>#superSteeringWheel:before { content: \'\';position: absolute;top: -20px;left: -20px;right: -20px;bottom: -20px; border: 2px solid white;border-radius:100%;z-index: -1;}</style>');

$("body").append('<div id="hideExplanationDiv" style="cursor:pointer;position:fixed;top:72%;left:63%;width:22%;height:10%;z-index:50000;"></div>')

$("#hideExplanationDiv").click(function(){ $(".explanation").remove(); $("#hideExplanationDiv").remove(); 
$("polygon.lookR").removeClass("filllookR");
$("polygon.stepR").removeClass("fillstepR");
$("polygon.stepL").removeClass("fillstepL");
$("polygon.lookL").removeClass("filllookL");
$("polygon.wheelF").removeClass("fillwheelF");
$("polygon.straightF").removeClass("fillstraightF");
$("polygon.straightB").removeClass("fillstraightB");
$("polygon.wheelB").removeClass("fillwheelB");
});

$("body").append('<div id="thisBox" style="display:none;width:calc(80% - 160px);height:calc(80% - 160px); position: fixed; z-index: 7160; top: 8%; left: 8%; background: #cccccc9f; border: 1% solid green; color: black; font-size: 20px; padding: 80px; overflow-y: scroll;"></div>');

// $("body").append('<div id="infoU" class="cockpit" style="position:fixed;bottom:0;right:0;z-index:7001;width:auto;font-size:20px;height:30px;border-top: 1px solid black;border-left:1px solid black;padding: 5px 5px 0 5px;background:rgb(214, 214, 195);"><div class="info2U" style="position:relative;height:30px;background:rgb(214, 214, 195);"><div id="nameNumber" style="z-index:120;white-space:nowrap;width:auto;background:rgb(214, 214, 195);"></div><div id="changeNameFormDiv" style="position:absolute;bottom:30px;right:60px;display:none;padding:5px;z-index:100;background:rgb(214, 214, 195);"><form id="changeNameForm"><input type="text" id="chnNam" maxlength="76"></input><button type="submit" style="display: inline-block; cursor:pointer; margin-left: 20px;">Submit</button></form></div></div></div>');

// $("body").append('<div id="nameBox" style="position:fixed;top:180px;right:0;z-index:7001;border-top:1px solid black;max-width:180px;overflow:visible;"><div class="menuItem" onclick="changeName();" style="clear:both;">Namen ändern</div>');

$("body").append('<div id="nameNumberContainer" style="position:fixed;top:180px;right:0;z-index:7001;"><div id="nameNumber" style="position:absolute;top:0;right:0;z-index:100;border:1px solid black;border-right:none;white-space:nowrap;width:auto;background:rgb(214, 214, 195);" class="menuItem"></div><form style="position:absolute;top:0;right:0;z-index:101;border:1px solid black;border-right:none;display:none;width:260px;" id="changeNameForm" class="menuItem" ><input type="text" id="chnNam" maxlength="76"></input><button type="submit" style="display: inline-block; cursor:pointer; margin-left: 20px;">Submit</button></form></div>')

$("body").append('<div id="clicksChat" class=""><div id="clicksChatCont"></div></div>');

// $("body").append('<div id="radar" class="cockpit" style="position:fixed;transform-origin:center center; transform:rotate(0deg);width:300px;height:300px;bottom:-150px;left:calc(50% - 150px);pointer-events:none;overflow:visible;"><div style="position:absolute;background:#0000000f;border:1px solid green;border-radius:150px;width:298px;height:298px;"></div><div style="position:absolute;left:75px;top:75px;background:#0000000f;border:1px solid green;border-radius:75px;width:148px;height:148px;"></div></div>');

$("body").append('<div id="mapBody"><div id="mapBody2"></div></div><div id="handleOpenMap" style="position:fixed;bottom:-4px;left:calc(50% - 45px);width:90px;height:24px;font-size:18px;color:blue;background:#ffffff;opacity:0.7;text-align:center;display:none;z-index:70050;cursor:pointer;line-height:22px;">Map</div><div class="handleCloseMap" style="position:fixed;bottom:-4px;left:calc(50% + 120px);width:110px;height:24px;font-size:18px;color:blue;background:#ffffff;opacity:0.7;text-align:center;z-index:70050;cursor:pointer;line-height:22px;">Close Map</div>');

// Start Timeout

setTimeout(function(){
    // $(".handleCloseMap").click();
    $("#menuOnOff").click();
    $("#switchControl").click();
}, 2500);

$("#mapBody2").append('<div id="mapForLocator" style="width:720px;height:360px;overflow:visible;position:fixed;z-index:7050;pointer-events:none;display:none;"><div id="mapForLocatorClickDivs" class="locClickHover" style="width:720px;height:360px;position:absolute;z-index:0;pointer-events:auto;"></div><img src="/fleo.at-medien/layout/cockpit/mapForLocator.png" style="position:absolute;opacity:.35;pointer-evnts:none;z-index:-1;" alt="deepmonitor.image locator.Map" /></div>');

// <div class="handleCloseMap" style="position:absolute;top:-8px;left:calc(50% - 10px);height:10px;width:20px;background:#ffffff;color:gray;opacity:0.7;pointer-events:auto;z-index:2;cursor:pointer;line-height:12px;text-align:center;">vv</div><div class="handleCloseMap" style="position:absolute;top:358px;left:calc(50% - 10px);height:10px;width:20px;background:#ffffff;color:gray;opacity:0.7;pointer-events:auto;z-index:2;cursor:pointer;line-height:12px;text-align:center;transform:scaleY(-1);">vv</div>

// $("#mapBody2").append('<div id="mapForLocatorEurope" style="width:720px;height:360px;overflow:visible;position:fixed;z-index:7050;pointer-events:none;display:none;"><div id="mapForLocatorClickDivsEurope" class="locClickEuropeHover" style="left:315px;top:45px;width:120px;height:60px;position:absolute;z-index:0;pointer-events:auto;"></div><img src="/fleo.at-medien/layout/cockpit/euromap_better.webp" style="position:absolute;opacity:.35;pointer-events:none;z-index:-1;left:312px;top:43px;width:120px;height:60px;pointer-events:none;" alt="deepmonitor.image locator.Map" /><div class="handleCloseMapEurope" style="position:absolute;top:38px;left:calc(50% + 5px);height:8px;width:20px;background:#ffffff;color:gray;opacity:0.7;pointer-events:auto;z-index:2;cursor:pointer;text-align:center;line-height:8px;font-size:8px;">vv</div><div class="handleCloseMapEurope" style="position:absolute;top:102px;left:calc(50% + 5px);height:8px;width:20px;background:#ffffff;color:gray;opacity:0.7;pointer-events:auto;z-index:2;cursor:pointer;text-align:center;line-height:8px;font-size:8px;transform:scaleY(-1);">vv</div></div>');

for (let i=1;i<23;i++) {for (let j=1;j<46;j++) { $("#mapForLocatorClickDivs").append('<div clickcoords="'+j+'" clickdoords="'+i+'" class="locClick"></div>'); }}

// for (let i=0;i<30;i++) {for (let j=0;j<60;j++) { $("#mapForLocatorClickDivsEurope").append('<div clickcoords="'+j+'" clickdoords="'+i+'" class="locClickEurope"></div>'); }}

$(".locClick").click(function(){
    var mapForTrainXL = $(this).attr("clickcoords") * 16;
    var mapForTrainYL = $(this).attr("clickdoords") * 16;
    mapForTrainXL = (mapForTrainXL / 2) - 180;
    mapForTrainXL = (mapForTrainXL.toFixed(3)) * -1000;
    mapForTrainYL = (mapForTrainYL / 2) - 90;
    mapForTrainYL = (90 / 100) * mapForTrainYL;
    mapForTrainYL = mapForTrainYL / 100;
    mapForTrainYL = (mapForTrainYL * 2) * (180 / Math.PI);
    mapForTrainYL = mapForTrainYL.toFixed(0);
    mapForTrainXL = parseInt(mapForTrainXL + 4000);
    mapForTrainYL = parseInt(mapForTrainYL - 4);
    move(mapForTrainXL,mapForTrainYL * 100,500,0);
});

/* $(".locClickEurope").click(function(){
    var mapForTrainXLEurope = $(this).attr("clickcoords") * 2 + 325;
    var mapForTrainYLEurope = $(this).attr("clickdoords") * 2 + 57;
    mapForTrainXLEurope = (mapForTrainXLEurope / 2) - 180;
    mapForTrainXLEurope = (mapForTrainXLEurope.toFixed(3)) * -1000;
    mapForTrainYLEurope = (mapForTrainYLEurope / 2) - 90;
    mapForTrainYLEurope = (90 / 100) * mapForTrainYLEurope;
    mapForTrainYLEurope = mapForTrainYLEurope / 100;
    mapForTrainYLEurope = (mapForTrainYLEurope * 2) * (180 / Math.PI);
    mapForTrainYLEurope = mapForTrainYLEurope.toFixed(0);
    mapForTrainXLEurope = parseInt(mapForTrainXLEurope + 1);
    mapForTrainYLEurope = parseInt(mapForTrainYLEurope - 1);
    move(mapForTrainXLEurope,mapForTrainYLEurope * 100,500,0);
}); */

$(".handleCloseMap").click(function(){ $("#mapBody2").animate({"bottom":"-100%"}, 600); $(".handleCloseMap").hide(); $("#handleOpenMap").show(); });
// $(".handleCloseMapEurope").click(function(){ $("#mapBody2").animate({"bottom":"-100%"}, 600); $("#handleOpenMap").show(); });

$("#handleOpenMap").click(function(){ $("#mapBody2").animate({"bottom":"0"}, 600); $("#handleOpenMap").hide(); $(".handleCloseMap").show(); });

if (Device_Type() !== "Mobile" && Device_Type() !== "Tablet") {
// $("#mapForLocator").mouseenter(function(){ $("#mapBody").css({"transform":"scale(1.5)","bottom":"-140px"}); });
// $("#mapForLocator").mouseleave(function(){ setTimeout(function() { $("#mapBody").css({"transform":"scale(0.5)","bottom":"0"}); }, 100); });

// $("#mapForLocatorEurope").mouseenter(function(){ $("#mapBody").css({"transform":"scale(2.2)","bottom":"-20px"}); });
// $("#mapForLocatorEurope").mouseleave(function(){ setTimeout(function() { $("#mapBody").css({"transform":"scale(1)","bottom":"0"}); }, 100); });

} else if (Device_Type() == "Mobile" || Device_Type() == "Tablet"){
    $("#mapBody").css({"transform":"scale(1)","bottom":"0"});
    $("#mapForLocatorClickDivs").removeClass("locClickHover"); // $("#mapForLocatorClickDivsEurope").removeClass("locClickEuropeHover");
    // $(".handleCloseMap").css({"top":"-15px","left":"calc(50% - 30px)","height":"30px","width":"60px","line-height":"30px","font-size":"26px"});
}

// if (historyCoords > 15000 || historyCoords < -32000 || sMMssM < -21000 || sMMssM > -11000 || 1 == 1) { setTimeout(function(){ $("#mapBody").css({"transform":"scale(0.5)","bottom":"0"}); }, 2000); } else { setTimeout(function(){ $("#mapBody").css({"transform":"scale(1)","bottom":"0"}); }, 2000); }

$("body").append('<div id="writeChat" style="position:fixed;width:40%;height:100%;left:26%;top:0;padding:20px;background:rgb(214, 214, 195);border-left:2vw solid black;border-right:2vw solid black;font-size:20px;color:black;font-weight:bold;z-index:999999;display:none;">' +
'<h2>Write message</h2>' +
'<p><textarea id="sendMessageText" rows="4" cols="50" title="Chat" placeholder="Send message"></textarea><p>' +
'<p><button id="sendMessageButton">Send</button> <button id="sendMessageCancel">Cancel</button></p>' +
'</div>');

$("body").append('<div id="writeAnythingTo" style="position:fixed;width:40%;height:100%;left:26%;top:0;padding:20px;background:rgb(214, 214, 195);border-left:2vw solid black;border-right:2vw solid black;font-size:20px;color:black;font-weight:bold;z-index:999999;display:none;">' +
'<h2>Write anything</h2>' +
'<p><textarea id="sendAnythingText" rows="4" cols="50" title="Chat" placeholder="Send anything"></textarea><p>' +
'<p><button id="sendAnythingButton">Send</button> <button id="sendAnythingCancel">Cancel</button></p>' +
'</div>');

$("#mapForLocator").css({"bottom":"0","left":"calc(50% - 360px)"});
// $("#mapForLocatorEurope").css({"bottom":"0","left":"calc(50% - 360px)"});

$("#sendMessageButton").click(function(){ 
        sendStuffWS($("#writeChat").attr("receiver")); $("#writeChat").hide();
    });
$("#sendMessageCancel").click(function(){ spacebarText = 0;  chatKeysOn = 0; $("#writeChat").hide(); });

var navIsSmall = 0;

/* $("#square").dblclick(function (event) {
    $(".chcentercenter").click();
}); */

/* $(".nineedge").dblclick(function (event) {
    $(".chcentercenter").click();
}); */

$(".chcentercenter").click(function(){
    /* if (navIsSmall == 0) {
        $("#square").fadeOut("slow");
        $(".nineedge").fadeIn("slow");
        navIsSmall = 1;
    }
    else if (navIsSmall == 1) {
        $("#square").fadeIn("slow");
        $(".nineedge").fadeOut("slow");
        navIsSmall = 0;
    } */
    $("#infot").click();
});

$("body").append('<div id="menuBottom" style="position:fixed;width:100%;max-width:calc(100% - 231px);height:auto;right:181px;top:0;z-index:20000;pointer-events:none;"><div id="menuOnOff" class="menuItem">Menu</div></div>');
$("#menuBottom").append('<div id="manual" class="menuItem">Anleitung</div>');
$("#menuBottom").append('<div id="goBuild" class="menuItem">Etwas bauen</div>');
$("#menuBottom").append('<div id="leave" class="cockpit menuItem">Verabschieden</div>');
$("#menuBottom").append('<div id="imprintButton" class="cockpit menuItem">Impressum</div>');
$("#menuBottom").append('<div id="infot" class="cockpit menuItem" style="display:none;">Umdrehen</div>');
$("#menuBottom").append('<div id="fixedLocationOpen" class="cockpit menuItem">Globus (G)</div>');
// $("#menuBottom").append('<div id="fleoDrawGet" class="cockpit menuItem">Draw</div>');
$("#menuBottom").append('<div id="push2TalkUserWants" class="cockpit menuItem">Tonstudio</div>');
$("#menuBottom").append('<div id="walkAroundWithVideo" class="cockpit menuItem">Audio/Video/Chat starten</div>');
$("#menuBottom").append('<div id="walkAroundWithVideoAudioAutoReject" class="cockpit menuItem" data-audioautoreject="off" style="text-decoration:line-through;display:none;">Anrufe ablehnen</div>');
$("#menuBottom").append('<div id="walkAroundWithVideoAudioAutoAccept" class="cockpit menuItem" data-audioautoaccept="off" style="text-decoration:line-through;display:none;">Anrufe automatisch annehmen</div>');
$("#menuBottom").append('<div id="hearLikeOwl" active="0" class="menuItem" style="text-decoration:line-through;display:none;">Eule</div>');
$("#menuBottom").append('<div id="niceWindowToggle" class="cockpit menuItem" style="display:none">Nice Window</div>');
$("#menuBottom").append('<div id="fullscreenToggle" class="cockpit fullscreenToggle menuItem">Vollbild</div>');
$("#menuBottom").append('<div id="fullscreenExitToggle" class="cockpit fullscreenToggle menuItem" style="display:none;background:orange;">Exit Vollb.</div>');
$("#menuBottom").append('<div id="speedPlus" class="cockpit menuItem">+</div>');
$("#menuBottom").append('<div id="speedMinus" class="cockpit menuItem">-</div>');
$("#menuBottom").append('<div id="drive" class="cockpit menuItem">Drive</div>');
// $("#menuBottom").append('<div id="sendPresent" class="cockpit menuItem">Send Present</div>');
$("#menuBottom").append('<div id="unbindLocation" class="cockpit menuItem" style="display:none;background:lightgreen;">Von echtem Ort entkoppeln</div>');
$("#menuBottom").append('<div id="bindLocation" class="cockpit menuItem">An echten Ort ankoppeln</div>');
$("#menuBottom").append('<div id="startSensors" class="cockpit menuItem">Sensoren starten</div>');
// $("#menuBottom").append('<div id="translateFleoat" style="max-height:30px;" class="cockpit menuItem">Translate</div>');
$("#menuBottom").append('<div id="reset" class="cockpit menuItem">Reset</div>');
// $("#menuBottom").append('<div id="shout" class="cockpit menuItem">Shout</div>');
$("#menuBottom").append('<div id="switchControl" class="cockpit menuItem rainbow" style="display:none;">Steuerung</div>');
$("#menuBottom").append('<div id="callRejectButton2" class="hideElementCall menuItem">Ablehnen</div>');
$("#menuBottom").append('<div id="callAcceptButton2" class="hideElementCall menuItem">Anruf annehmen</div>');
$("#menuBottom").append('<div id="hangUpButton2" class="hideElementCall menuItem">Auflegen (alle)</div>');
$("#menuBottom").append('<div id="treasure" class="" style="position:absolute;top:0;left:-50px;z-index:14990;width:30px;overflow:visible;transform-origin:top left;transform:scale(0.5);pointer-events:auto;"></div>');

if ($("#menuBottom")[0].offsetWidth < 450) {
    $(".menuItem").css({"font-size":"14px","line-height":"18px","height":"22px"}); } else {
    $(".menuItem").css({"font-size":"18px","line-height":"25px","height":"28px"});
}

/* $("#translateFleoat").click(function(){
    function initTranslateFleoat (){ new google.translate.TranslateElement({pageLanguage: "de", includedLanguages: 'en,fr',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, "googleTranslateElement"); }
    $("#translateFleoat").html('<div id="googleTranslateElement"></div>');
    $.getScript("https://translate.google.com/translate_a/element.js", function(){
        setTimeout(function(){ cb = initTranslateFleoat(); }, 1000);
    });
})*/

$("#switchControl").click(function(){ 
    // $(".chcentercenter").click(); 
    $("#square").fadeToggle("slow");
    $("#switchControl").toggleClass("rainbow");
});

$("#hangUpButton2").click(function(){ $(".endCallHangUp").click(); $("#hangUpButton2").hide(); });
var menuOnOff = 1;
$("#menuOnOff").click(function(){ 
    if (menuOnOff == 1) { 
    $(".cockpit").addClass("hideElement"); 
    menuOnOff = 0; 
} else {  
    $(".cockpit").removeClass("hideElement"); 
    menuOnOff = 1;
    } 
} );

var hearLikeOwl = 0;

$("#hearLikeOwl").click(function(){
    if ($(this).attr("active") == 0) {
        hearLikeOwl = 1;
        $(".person").each(function(){
            changeVolumeMeMoving($(this).attr("id").replace("personCode-",""));
        });
        $(this).css("text-decoration","none");
        $(this).attr("active", 1);
} else {
    hearLikeOwl = 0;
    $(".person").each(function(){
        changeVolumeMeMoving($(this).attr("id").replace("personCode-",""));
    });
    $(this).css("text-decoration","line-through");
    $(this).attr("active", 0); 
}
})
var manualBuilt = 0;
$("#manual").click(function(){ 
    if (manualBuilt == 0) {
    manualBuilt = 1;
    $("body").append('<div id="manualAnleitung" style="color:black;"><h1 style="background:#ffffff8f;">Anleitung</h1><h2 style="background:#ffffff8f;">Es ist eigentlich alles ganz einfach.</h2><p style="background:#ffffff8f;">Sie sind Visitor und Bauarbeiter.<br />Mit fünf plus zehn sind Sie Chef. <input id="mathQuestion" minlength="1" maxlength="2" size="2"> <span id="mathQuestionResult"><button id="sendMathQuestion">Senden</button></span></p><p style="background:#ffffff8f;">Ziehen Sie Bilder, Videos und Audio einfach in die Welt.<p><p style="background:#ffffff8f;">Sie können auch die Größe verändern.</p><p style="background:#ffffff8f;">Die Audioverbindungen finden direkt zwischen Ihnen und Ihren Gesprächspartnern statt. Ihre Webcamvideos werden vom Server verbreitet.</p><p style="background:#ffffff8f;">Es gibt Abkürzungen für die Tastatur:<ul><li>D is to drive.</li><li>T for turnaround.</li><li>Build audio-station is A.</li><li>Start your video image with i.</li><li>Spacebar for the rainbow-control</li><li>Open the menu with M.</li></ul></p>');
    $("#sendMathQuestion").click(function(){
        $.post("/fleo.at-php/fleo.at_bag.php", { doing: 9, iam: (myNumber[0] + myNumber[2]).replace("#", ""), result: $("#mathQuestion").val() }).done(function(result){ if (result == "Wrong result!") {
            $("#sendMathQuestion").html(result);
        } else {
            $("#mathQuestionResult").html(result);
        }
    });
    })
    $("#manualAnleitung").dialog({
        title: "Anleitung",
        autoOpen: false,
        minWidth: 600,
        modal: true,
        buttons: {
        "Schließen": function() {
            $(this).dialog("close");      
        }
      } 
    });
}
if ($("#manualAnleitung").dialog("isOpen")) {
    $("#manualAnleitung").dialog("close");
} else {
    $("#manualAnleitung").dialog("open");
}

});

$("#goBuild").click(function(){
    // console.log("medal");
    $.post("/fleo.at-php/fleo.at_bag.php", { doing: 4, iam: (myNumber[0] + myNumber[2]).replace("#", "")}).done(function(bagresponse){
        $.post("https://" + mainDomain + "/fleo.at-php/fragiles/constructionSiteReceptionist.php", { doing: 1, who: (myNumber[0] + myNumber[2]).replace("#", ""), coordsW: historyCoords, coordsD: sMMssM, coordsH: 0, room: myRoom });
    });
    // $("#manual").click();
    $("#goBuild").hide();
})

// $("#shout").click(function(){ shout(); });

// setTimeout(function(){ $("#imprintButton").click(); }, 2000);

if (window.name == "tCupSpaceOpenInOtherWindow") { if (!window.toolbar.visible || !window.menu.visible) { $("#niceWindowToggle").hide(); } }
$("#quiet").click(function(){ if ($("#quiet").html() == "Quiet") { quiet = 1; $("#quiet").html("Loud"); } else { quiet = 0; $("#quiet").html("Quiet"); } }); // not implemented
$("#reset").click(function(){ roomChange("home"); turn = 0; });
$("#leave").click(function(){ window.location.href = "/left.html"; });

var drawBuilt = 0;
var drawOn = 0;

$("#fleoDrawGet").click(function(){ if (drawBuilt == 0) {
    drawBuilt = 1;
    $("body").append('<div id="drawMenu" style="width:240px;height:500px;position:fixed;top:0;left:0;z-index:100000;background:#ffffff3f;border-bottom-right-radius:60px;"></div>');
    $("#drawMenu").load("/fleo.at-php/fleo.at_drawMenu.php");
    $("#fleoDrawGet").css("background","lightgreen"); 
    $(".move").attr("nopointer2", 1);
    $.get("/fleo.at-php/fleo.at_drawCage.php", function(data){ $("#wrapper").append(data); });
    drawOn = 1;
} else {
    if (drawOn == 0) {
        drawOn = 1;
        $("#fleoDrawGet").css("background","lightgreen");
        $("#drawMenu").show();
        $(".move").attr("nopointer2", 1);
        $.get("/fleo.at-php/fleo.at_drawCage.php", function(data){ $("#wrapper").append(data); });
    }
    else {
        drawOn = 0;
        $("#fleoDrawGet").css("background","#d6d6c3");
        $("#drawMenu").hide();
        $(".move").attr("nopointer2", 0);
        $(".cage").remove();
        $(".cage2").remove();
    }
} });

$("#speedPlus").click(function(){ speed++; });
$("#speedMinus").click(function(){ speed--; });

$("body").append('<div id="imprint" style="color:black;"><h1 style="background:#ffffff8f;">Imprint</h1><h2 style="background:#ffffff8f;">Felix Longolius</h2><p style="background:#ffffff8f;">Brahmsallee 41, 20144 Hamburg<p><p style="background:#ffffff8f;">00494035775757, deepmonitor@t-online.de</p><p style="background:#ffffff8f;"><a href="/datenschutz.html" target="_blank">Datenschutz (privacy)</a></p><p style="background:#ffffff8f;">If you feel like presenting the state of your browser to Google <span id="turnOnAnalytics" style="color:blue;text-decoration:underline;background:white;cursor:pointer;">"Google Analytics"</span> or Microsoft <span id="turnOnClarity" style="color:blue;text-decoration:underline;background:white;cursor:pointer;">"Microsoft-Clarity"-recordings</span>, you can inject their code by clicking the links above.</p>'); // + // <p>This Website would like to monetize with <br /><span id="turnOnAdsByGoogle" style="color:blue;text-decoration:underline;background:white;cursor:pointer;">"Google adsbygoogle"</span> if properly possible.</p>
// '<p>You are welcome to turn on <span id="turnOnAnalytics" style="color:blue;text-decoration:underline;background:white;cursor:pointer;">"Google Analytics"</span>. (Turn on <span id="turnOnClarity" style="color:blue;text-decoration:underline;background:white;cursor:pointer;">"Microsoft-Clarity"-recordings</span>, too, if you like).</p>');

// $("#turnOnAdsByGoogle").click(function(){ $.getScript("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3949661379670569"); $("#turnOnAdsByGoogle").css("background","lightgreen"); });

if (gTagId !== "empty") {

    $("#turnOnAnalytics").click(function(){
        $.getScript("https://www.googletagmanager.com/gtag/js?id=" + gTagId, function(){
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', gTagId);
            $("#turnOnAnalytics").css("background","lightgreen");
            function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': gTagWhatever,
                    'event_callback': callback
                });
                return false;
              }
              gtag_report_conversion();
        })
    });
    }
    
    if (clarityTag !== "empty") {
    
    $("#turnOnClarity").click(function(){
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", clarityTag);
        $("#turnOnClarity").css("background","lightgreen");
    }); 
    
    }

$("#imprint").dialog({
    title: "Imprint",
    autoOpen: false,
    minWidth: 400,
    modal: true,
    buttons: {
    "Schließen": function() {
        $(this).dialog("close");      
    }
  } 
});

$("#imprintButton").click(function(){ $("#imprint").dialog("open"); });

$("body").append('<div id="startUp" style="padding:8px;"><h1>Start-up</h1><h2>Möchten Sie gern audio/video vorbereiten?</h2><p>Dann können Sie auch chatten.</p>');

$("#startUp").dialog({
    title: "Start-up",
    autoOpen: false,
    minWidth: 400,
    modal: true,
    position: { my: "right top", at: "right top" },
    buttons: {
    "Nein": function() {
        $(this).dialog("close");   
    },
    "Ja, audio/video vorbereiten": function() {
        $("#walkAroundWithVideo").click();
        $(this).dialog("close");
    }
  } 
});

$("#sendPresent").click(function(){ 
    spacebarText = 1; 
    $("#writeAnythingTo").attr("receiver", fleoNumDistant);
    $("#writeAnythingTo").find("h2").html("Write anything to:<br />" + $("#maennikenTextWall-" + fleoNumDistant).html());
    $("#writeAnythingTo").show();
    
$("#sendAnythingButton").click(function(){ 
    spacebarText = 0; 
    $.post("/fleo.at-php/fleo.at_setOfflineOnline.php", { doing: 2, fleoNumOwn: (myNumber[0] + myNumber[2]).replace("#", ""), fleoNumDistant: fleoNumDistant, extraContent: document.getElementById('sendAnythingText').value }).done(function(result){
        toastr.success("Trying to give it to: " + $("#maennikenTextWall-" + fleoNumDistant).html());
        });
$("#writeAnythingTo").hide();
    });
$("#sendAnythingCancel").click(function(){ spacebarText = 0;  $("#writeAnythingTo").hide(); });
    

    });
$("#waldf").append('<div id="waldff"><div style="position:absolute;left:-8746px;bottom:550px;z-index:-1;width:3473px;height:auto;"><img src="https://' + mainDomain + '/fleo.at-medien/layout/background_long_kara_3473x400.webp" style="width:100%;height:auto;" /></div><div style="position:absolute;left:-5273px;bottom:200px;z-index:-1;width:1800px;height:auto;"><img src="https://' + mainDomain + '/fleo.at-medien/repertoire/b_sterne.webp" style="width:100%;height:auto;" /></div><div style="position:absolute;left:-3473px;bottom:550px;z-index:-1;width:3473px;height:auto;"><img src="https://' + mainDomain + '/fleo.at-medien/layout/background_long_kara_3473x400.webp" style="width:100%;height:auto;" /></div><div style="position:absolute;left:0;bottom:200px;z-index:-1;width:1800px;height:auto;"><img src="https://' + mainDomain + '/fleo.at-medien/repertoire/b_sterne.webp" style="width:100%;height:auto;" /></div><div style="position:absolute;left:1800px;bottom:550px;z-index:-1;width:3473px;height:auto;"><img src="https://' + mainDomain + '/fleo.at-medien/layout/background_long_kara_3473x400.webp" style="width:100%;height:auto;" /></div><div style="position:absolute;left:5273px;bottom:200px;z-index:-1;width:1800px;height:auto;"><img src="https://' + mainDomain + '/fleo.at-medien/repertoire/b_sterne.webp" style="width:100%;height:auto;" /></div><div style="position:absolute;left:7073px;bottom:550px;z-index:-1;width:3473px;height:auto;"><img src="https://' + mainDomain + '/fleo.at-medien/layout/background_long_kara_3473x400.webp" style="width:100%;height:auto;" /></div></div><div id="waldfb" style="display:none;"><div style="position:absolute;left:-8746px;bottom:550px;z-index:-1;width:3473px;height:auto;"><img src="https://' + mainDomain + '/fleo.at-medien/layout/background_long_kara_3473x400.webp" style="width:100%;height:auto;" /></div><div style="position:absolute;left:-5273px;bottom:200px;z-index:-1;width:1800px;height:auto;"><img src="https://' + mainDomain + '/fleo.at-medien/repertoire/b_sterne.webp" style="width:100%;height:auto;" /></div><div style="position:absolute;left:-3473px;bottom:550px;z-index:-1;width:3473px;height:auto;"><img src="https://' + mainDomain + '/fleo.at-medien/layout/background_long_kara_3473x400.webp" style="width:100%;height:auto;" /></div><div style="position:absolute;left:0;bottom:500px;z-index:-1;width:1800px;height:auto;"><img src="/fleo.at-medien/userImages/1678485250imagepng13451778227.png.webp" style="width:100%;height:auto;" /></div><div style="position:absolute;left:1800px;bottom:550px;z-index:-1;width:3473px;height:auto;"><img src="https://' + mainDomain + '/fleo.at-medien/layout/background_long_kara_3473x400.webp" style="width:100%;height:auto;" /></div><div style="position:absolute;left:5273px;bottom:200px;z-index:-1;width:1800px;height:auto;"><img src="https://' + mainDomain + '/fleo.at-medien/repertoire/b_sterne.webp" style="width:100%;height:auto;" /></div><div style="position:absolute;left:7073px;bottom:550px;z-index:-1;width:3473px;height:auto;"><img src="https://' + mainDomain + '/fleo.at-medien/layout/background_long_kara_3473x400.webp" style="width:100%;height:auto;" /></div></div>');
$("#haeuserf").append('<div style="position:absolute;left:0;bottom:60px;z-index:0;width:1800px;height:auto;"><img src="https://' + mainDomain + '/fleo.at-medien/repertoire/haeuserf.webp" style="width:100%;height:auto;" /></div>'); // <div style="position:absolute;left:0px;bottom:60px;z-index:-3;opacity:0.8;width:2000px;height:auto;"><img src="/fleo.at-medien/repertoire/1673042494imagepng939741428082.png" style="width:100%;height:auto;" /></div>

let windowObjectReference = null;
var userWantsOtherWindow = 0;

$("#niceWindowToggle").click(function(){ 

    var userWantsOtherWindow = 1;
    windowObjectReference = window.open('', 'tCupSpaceOpenInOtherWindow','toolbar=no, menubar=no, resizable=yes');
    $("body").html('<video autoplay muted loop id="bgbgsterne" poster="/fleo.at-medien/repertoire/sternenhimmel.jpg"><source src="/fleo.at-medien/repertoire/space_front_320_PIxEL.mp4" type="video/mp4" id="bgbgsterneVideo"></video><div id="otherWindowOpenedContent" style="position:fixed;top:20px;left:20px;margin-right:20px;background:white;font-size:30px;z-index:100000;padding:8px;"></div>');    
          
        if (windowObjectReference === null && userWantsOtherWindow == 1) { 
            windowObjectReference = window.open('', 'tCupSpaceOpenInOtherWindow','toolbar=no, menubar=no, resizable=yes');
            windowObjectReference.focus(); 
            $("#otherWindowOpenedContent").html('If ' + mainDomain + ' is not open in other window, <span style="color:blue;" id="clickNew">click here</span> to open it.');
            $("#clickNew").click(function(){ 
                windowObjectReference = window.open('', mainDomain,'toolbar=no, menubar=no, resizable=yes');
                $("#otherWindowOpenedContent").html('You should see ' + mainDomain + ' in other window as you clicked a link to open it. Otherwise <a href="">open ' + mainDomain + '</a> here.');
                self.focus();
            });
        }
        if (windowObjectReference === null && windowObjectReference.closed) {
            location.href = "";
        }
        if (windowObjectReference !== null && userWantsOtherWindow == 1){
            $("#otherWindowOpenedContent").html('You should see ' + mainDomain + ' in other window as you clicked a link to open it. Otherwise <a href="">open ' + mainDomain + '</a> here.');
            self.focus();
        }

        setInterval(function(){
            if (windowObjectReference.closed) {
                $("#otherWindowOpenedContent").html('Bye, hope to see you back soon! If you like to, <a href="">open ' + mainDomain + '</a> again.');
                self.focus();
            }
        }, 500);
    });

///// fleo.at_turnAround.js

var firstView = 1;
var viewLR = 1;
var went = 0;
var wentZ = 0;
var twowent = 0;
var twowentZ = 0;
var threewent = 0;
var threewentZ = 0;
var wentX = 0;
var twowentX = 0;
var threewentX = 0;

function turnAround(will) {
    if (will == "b") {
        for (var aaa = 0; aaa < iii.length; aaa++) {
            that1 = iii.item(aaa);
            scaleNow = parseInt($(that1).attr("distance"));
            scaleNowNumber = scaleNow;
            scaleNowNumber = scaleNowNumber * -1;
            eee(scaleNowNumber, aaa, scaleNow, that1);
        }
        $("#wrapper").css("transform","scaleX(-1)");
        $("#maennikenWall").css("transform","scaleX(-1)");
        $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: '+=180deg'}, {duration: 0});
        // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: '+=180deg'}, {duration: 0});
        $("#waldff").hide();
        $("#waldfb").show();
        $("#infot").css("background","skyblue");
    }
    if (will == "f") {
        for (var aaa = 0; aaa < iii.length; aaa++) {
            that1 = iii.item(aaa);
            scaleNow = parseInt($(that1).attr("distance"));
            scaleNowNumber = scaleNow;
            scaleNowNumber = scaleNowNumber * -1;
            eee(scaleNowNumber, aaa, scaleNow, that1);
        }
        $("#wrapper").css("transform","scaleX(1)");
        $("#maennikenWall").css("transform","scaleX(1)");
        $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: '-=180deg'}, {duration: 0});
        // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: '+=180deg'}, {duration: 0});
        $("#waldfb").hide();
        $("#waldff").show();
        $("#infot").css("background","rgb(214, 214, 195)");
    }
    $.ajax({
        beforeSend: function () { $("#flash").addClass("f");},
        type: "POST",
        url: "/fleo.at-php/person_TA.php",
        dataType: "html",
        data: {
            doing: 1,
            will: will,
            fleoNum: (myNumber[0] + myNumber[2]).replace("#", "")
        }
    }).always(function (response) {
        $("#flash").removeClass("f");
    });
}

$("#infot").click(function () {
    if (will == "f") {
        // if (Device_Type() !== "Mobile" && Device_Type() !== "Tablet") { $("#bgbgsterneVideo").attr("src","/fleo.at-medien/repertoire/space_front_320_PIxEL.mp4"); } // 
        // $("#bgbgsterneVideo").attr("src","/fleo.at-medien/repertoire/1676326393part1bmp.mp4.mp4");
        $("#bgbgsterne")[0].load();
        $("#haeuserf").show();
        went = 0;
        twowentX = twowent;
        threewentX = threewent;
        threewent = 0;
        $("#wrapper").removeClass("bw").addClass("fw");
        turnAround(will, sMMssM, 0, historyCoords, am);
        am = "f";
        will = "b";
    } else if (will == "b") {
        // if (Device_Type() !== "Mobile" && Device_Type() !== "Tablet") { $("#bgbgsterneVideo").attr("src","/fleo.at-medien/repertoire/space_back_320_PIxEL.mp4"); }
        // $("#bgbgsterneVideo").attr("src","/fleo.at-medien/userImages/16773502112COMPO.mp4.mp4");
        $("#bgbgsterne")[0].load();
        $("#haeuserf").hide();
        if (firstView == 1) {
            went = 0;
            wentZ = 0;
            twowentZ = 0;
            twowent = 0;
            threewentZ = 0;
            threewent = 0;
        }
        went = 0;
        twowent = twowent + twowentX;
        threewent = threewent + threewentX;
        $("#wrapper").removeClass("fw").addClass("bw");
        turnAround(will, sMMssM, 0, historyCoords, am);
        firstView = 0;
        am = "b";
        will = "f";
    }
    $(".person").each(function(){
        $("#maennikenBag-" + $(this).find(".tree").attr("id").replace("personTree-","")).css({"left": 82 - parseInt(($("#maennikenBag-" + $(this).find(".tree").attr("id").replace("personTree-","")).width() / 2)) + "px","bottom": 90 - parseInt(($("#maennikenBag-" + $(this).find(".tree").attr("id").replace("personTree-","")).height() / 2)) + "px"});
    });
});

///// fleo.at_moveWithTrain.js

var setVolume = [];
var sideVolume = [];
var doordsVolume = [];
var heightStep = 0;
var heightStepOld = 0;

$("body").append('<div id="startBlockAllTaxi" style="position:fixed;top:0;left:0;z-index:13000;height:100vh;width:100vw;background:none;opacity:0;display:none;"></div>');

var moveMeTrainsMMssM, that1, scaleNow, scaleNowNumber, aaa;
var scaleCentral, hCCentral;
function moveWithTrain(coordsTr,doordsTr,duration,height,turn) {
    // var durationSec = duration / 1000;
    // $("#startBlockAllTaxi").show();
    // setTimeout(function(){ $("#startBlockAllTaxi").hide(); }, duration);
 // $("#wrapper").addClass("navigating-md");

    /*      if (am == "f") {
                went += (doordsTr - sMMssM);
                moveMeTrainsMMssM = (doordsTr - sMMssM);
          };
          if (am == "b") {
              wentZ -= (doordsTr - sMMssM); 
                moveMeTrainsMMssM = (doordsTr - sMMssM) * -1;
          } */
   /*         $(".move").css("transition","bottom "+durationSec+"s linear 0s, transform "+durationSec+"s linear 0s, margin-bottom "+durationSec+"s linear 0s");
          for (aaa = 0; aaa < iii.length; aaa++) {
              that1 = iii.item(aaa);
              scaleNow = parseInt($(that1).attr("distance"));
              scaleNowNumber = scaleNow;
              scaleNowNumber += moveMeTrainsMMssM;                	
              eee(scaleNowNumber, aaa, scaleNow, that1);	
          }

          if (height) {
              $("html").animate({
                  scrollTop: (parseInt($("body").css("height")) - h - ((height - 50) * (w / 1800)))
              }, duration); 
              worldHeight = height - 50;

          }
          $(".move > .tree").animate({
              "left": "-=" + parseInt(historyCoords - coordsTr)
          }, {
              queue: true,
              duration: duration,
              // easing: "linear",
              complete: function () {

              }
          }); 

$(".move").css("transition","bottom 0.0s linear 0s, transform 0.0s linear 0s, margin-bottom 0.0s linear 0s"); */
// sMMssM = doordsTr;
// historyCoords = coordsTr;
whereAmI(coordsTr, doordsTr, height, duration, turn, (myNumber[0] + myNumber[2]).replace("#", ""), myNumber[2]);
/* $(".maennikenLocator").each(function(){
let locatorToMove = $(this).attr("id"); 
let locatorToMoveSnip = locatorToMove.replace("maennikenLocator-","");                       
locateHorizontal = parseInt(($("#personCode-" + locatorToMoveSnip).find(".tree").css("left")));
locateHorizontal = 150 + (locateHorizontal / 300);
let oldD = parseInt($("#personCode-" + locatorToMoveSnip).attr("distance"));

locateVertical = 150 + (oldD / 300);

bottomLocate = locateVertical - 2.5 + "px";
leftLocate = locateHorizontal - 2.5 + "px";

if (locateVertical < 150) { $("#" + locatorToMove).css("background","red"); bottomLocate = 150 + (150 - Math.abs(locateVertical)) + "px"; } else {
  $("#" + locatorToMove).css("background","white"); 
}

$("#" + locatorToMove).css({
  "left": leftLocate,
  "bottom": bottomLocate
});
});

$("#wrapper").removeClass("navigating-md"); */
};

function move(coordsTr,doordsTr,duration,height) {
    doordsTr *= 3;
    var durationSec = duration / 1000;
    // $("#startBlockAllTaxi").show();
    // setTimeout(function(){ $("#startBlockAllTaxi").hide(); }, duration);
  $("#wrapper").addClass("navigating-md");

          if (am == "f") {
                went += (doordsTr - sMMssM);
                moveMeTrainsMMssM = (doordsTr - sMMssM);
          };
          if (am == "b") {
              wentZ -= (doordsTr - sMMssM); 
                moveMeTrainsMMssM = (doordsTr - sMMssM) * -1;
          }
            $(".move").css("transition","bottom "+durationSec+"s linear 0s, transform "+durationSec+"s linear 0s, margin-bottom "+durationSec+"s linear 0s");
          for (aaa = 0; aaa < iii.length; aaa++) {
              that1 = iii.item(aaa);
              scaleNow = parseInt($(that1).attr("distance"));
              scaleNowNumber = scaleNow;
              scaleNowNumber += moveMeTrainsMMssM;                	
              eee(scaleNowNumber, aaa, scaleNow, that1);	
          }

          if (height) {
              $("html").animate({
                  scrollTop: (parseInt($("body").css("height")) - h - ((height - 50) * (w / 1800)))
              }, duration); 
              worldHeight = height - 50;

          }
          $(".move > .tree").animate({
              "left": "-=" + parseInt(historyCoords - coordsTr)
          }, {
              queue: true,
              duration: duration,
              // easing: "linear",
              complete: function () {

                }
          }); 

$(".move").css("transition","bottom 0.0s linear 0s, transform 0.0s linear 0s, margin-bottom 0.0s linear 0s");
sMMssM = doordsTr;
historyCoords = coordsTr;



whereAmI(coordsTr, doordsTr, 0, 250, turn, (myNumber[0] + myNumber[2]).replace("#", ""), myNumber[2]);
$(".maennikenLocator").each(function(){
let locatorToMove = $(this).attr("id"); 
let locatorToMoveSnip = locatorToMove.replace("maennikenLocator-","");                       
locateHorizontal = parseInt(($("#personCode-" + locatorToMoveSnip).find(".tree").css("left")));
locateHorizontal = 150 + (locateHorizontal / 300);
let oldD = parseInt($("#personCode-" + locatorToMoveSnip).attr("distance"));

locateVertical = 150 + (oldD / 300);

bottomLocate = locateVertical - 2.5 + "px";
leftLocate = locateHorizontal - 2.5 + "px";

if (locateVertical < 150) { $("#" + locatorToMove).css("background","red"); bottomLocate = 150 + (150 - Math.abs(locateVertical)) + "px"; } else {
  $("#" + locatorToMove).css("background","white"); 
}

$("#" + locatorToMove).css({
  "left": leftLocate,
  "bottom": bottomLocate
});
});

$("#wrapper").removeClass("navigating-md");
};

var durationSec, oldTurn;

function moveWithSocket(coordsTr,doordsTr,duration,height,turn) {
    // coordsTr; doordsTr *=-1;
    durationSec = duration / 1000;
    // $("#startBlockAllTaxi").show();
    // setTimeout(function(){ $("#startBlockAllTaxi").hide(); }, duration);
  $("#wrapper").addClass("navigating-md");

          if (am == "f") {
                went += (doordsTr - sMMssM);
                moveMeTrainsMMssM = (doordsTr - sMMssM);
          };
          if (am == "b") {
              wentZ -= (doordsTr - sMMssM); 
                moveMeTrainsMMssM = (doordsTr - sMMssM) * -1;
          }
            // $(".move").css("transition","bottom "+durationSec+"s linear 0s, transform "+durationSec+"s linear 0s, margin-bottom "+durationSec+"s linear 0s");
          for (aaa = 0; aaa < iii.length; aaa++) {
              that1 = iii.item(aaa);
              scaleNow = parseInt($(that1).attr("distance"));
              scaleNowNumber = scaleNow;
              scaleNowNumber += moveMeTrainsMMssM;                	
              eee(scaleNowNumber, aaa, scaleNow, that1);	
          }

          if (height) {
              $("html").animate({
                  scrollTop: (parseInt($("body").css("height")) - h + ((height)))
              }, duration)
              
              // heightStepOld = height;
              //levelScroll = parseInt($(window).scrollTop() - parseInt($("body").css("height")) + $(window).height());

              worldHeight = height;


              $("#waldf").css("bottom", Math.round(height / -8) * thisAllScale - 140 + "px");
              $("#haeuserf").css("bottom", Math.round(height / -8) * thisAllScale - 140 + "px");


          }
          $(".move > .tree").animate({
              "left": "-=" + parseInt(historyCoords - coordsTr)
          }, {
              queue: false,
              duration: duration,
              // easing: "linear",
              complete: function () {

              }
          }); 

            if (will == "b") { if (turn < 7800 && turn > -7400) {
                $("[class*='scale']").css({"left": turn + "px"});
                $("#haeuserf, #waldf").css({"left": turn + "px"});
                $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
                $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0}); } 
                else if (turn >= 7400 || turn <= -7800) {
                    $("#infot").click();
                    $("[class*='scale']").css({"left": turn + "px"});
                    $("#haeuserf, #waldf").css({"left": turn + "px"});
                    $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
                    $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});    
                }
            } else {
                    if (turn < 7400 && turn > -7800) {
                        $("[class*='scale']").css({"left": turn + "px"});
                        $("#haeuserf, #waldf").css({"left": turn + "px"});
                        $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
                        $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px', rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0}); }
                        else if (turn >= 7800 || turn <= -7400) { 
                            $("#infot").click();
                            $("[class*='scale']").css({"left": turn + "px"});
                            $("#haeuserf, #waldf").css({"left": turn + "px"});
                            $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
                            $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                        }
                    }

// $(".move").css("transition","bottom 0.0s linear 0s, transform 0.0s linear 0s, margin-bottom 0.0s linear 0s");
sMMssM = doordsTr;
historyCoords = coordsTr;
// whereAmIFromSocket(coordsTr, doordsTr, 0, (myNumber[0] + myNumber[2]).replace("#", ""), myNumber[2]);
if (hp%1==0) { history.replaceState("", "", "?doords="+(parseInt(sMMssM / 3))+"&coords="+(parseInt(historyCoords))); }; hp++;
Cookies.set('spacecoords', historyCoords, { secure: true, sameSite: 'none', expires: 730 });
Cookies.set('spacedoords', (parseInt(sMMssM / 3)), { secure: true, sameSite: 'none', expires: 730 });
$(".maennikenLocator").each(function(){
let locatorToMove = $(this).attr("id"); 
let locatorToMoveSnip = locatorToMove.replace("maennikenLocator-","");                       
locateHorizontal = parseInt(($("#personCode-" + locatorToMoveSnip).find(".tree").css("left")));
locateHorizontal = 150 + (locateHorizontal / 300);
let oldD = parseInt($("#personCode-" + locatorToMoveSnip).attr("distance"));

locateVertical = 150 + (oldD / 300);

bottomLocate = locateVertical - 2.5 + "px";
leftLocate = locateHorizontal - 2.5 + "px";

if (locateVertical < 150) { $("#" + locatorToMove).css("background","red"); bottomLocate = 150 + (150 - Math.abs(locateVertical)) + "px"; } else {
  $("#" + locatorToMove).css("background","white"); 
}

$("#" + locatorToMove).css({
  "left": leftLocate,
  "bottom": bottomLocate
});
}); 

$("#wrapper").removeClass("navigating-md");
};













///// fleo.at_roomChange.js
var haltEverything = 1;
function roomChange(newRoom) {
    // set tabula "1" (nothing new)
    haltEverything = 1;
    $.ajax({ beforeSend: function () { $("#flash").addClass("f"); },
        type: "POST", url: "/fleo.at-php/fleo.at_roomChange.php", dataType: "html",
        data: { doing: 1, number: (myNumber[0] + myNumber[2]).replace("#", ""), }}).done(function (response) {
            
    $(".thing").remove();
    $(".floor").remove();
    moveWithTrain(0,0,0,0,0);
    if (am == "b") { $("#infot").click(); }
    
    $("#flash").removeClass("f");
        // set new Room + set tabula "2" (get room genesis) --> world.php sets tabula back to "0"
        genesisDone = 0; //reallow genesis
        $(".maennikenLocator").hide();
        setTimeout(function(){ $.ajax({ beforeSend: function () { $("#flash").addClass("fff"); },
        type: "POST", url: "/fleo.at-php/fleo.at_roomChange.php", dataType: "html",
        data: { doing: 2, number: (myNumber[0] + myNumber[2]).replace("#", ""), room: newRoom }}).done(function (response) {
        window.history.pushState("", "", "/r/" + newRoom + "?coords=" + (parseInt(historyCoords)) + "&doords=" + (parseInt(sMMssM / 3)));
        myRoom = newRoom;
        $("#h1title").html("This is " + mainDomain + ", room: " + myRoom);
        $("title").html(mainDomain + ": " + myRoom + " // open-world with content-trees");
        for (var p = 0; p < ppp.length; p++) { if ($(ppp.item(p)).attr("room") == myRoom) { $(ppp.item(p)).removeClass("otherroom"); } else { $(ppp.item(p)).addClass("otherroom"); } }
        $("#haeuserf").css({"left": 0 });
        $("#bgbgbsterne").css({"left": 0 }); 
        // $("#radar").transition({rotate: "0deg"}, {duration: 0});
        $("#mapForLocator").transition({rotate: "0deg"}, {duration: 0});
        // $("#mapForLocatorEurope").transition({rotate: "0deg"}, {duration: 0});
        $("#flash").removeClass("fff"); 
        });
    }, 100);
    });
}

///// fleo.at_key-navigation.js

var keys = 1;
var chatKeysOn = 0;
editTrick = 0;
$(document).keydown(function (event) {
	
    if (spacebarText == 0) {
        
        if (event.which == 38) { // forward
            event.preventDefault();
            if (keys == 1) {
                if (will == "b") { moveWithTrain(historyCoords + (turn / 2), Math.round(sMMssM - ((1 - (Math.abs(turn) / 9000)) * 300)), 0, relationToBackground, turn); }
                else { moveWithTrain(historyCoords + (turn / 2), Math.round(sMMssM + ((1 - (Math.abs(turn) / 9000)) * 300)), 0, relationToBackground, turn); }
            }
        }
        if (event.which == 40) { // backward
            event.preventDefault();
            if (keys == 1) {
                if (will == "b") { moveWithTrain(historyCoords - (turn / 2), Math.round(sMMssM + ((1 - (Math.abs(turn) / 9000)) * 300)), 0, relationToBackground, turn); }
                else { moveWithTrain(historyCoords - (turn / 2), Math.round(sMMssM - ((1 - (Math.abs(turn) / 9000)) * 300)), 0, relationToBackground, turn); }
            };
        }
        if (event.which == 37) { // left
            event.preventDefault();
            if (keys == 1) {
                if (will == "b") { $(".chtopleft").click(); }
                else { $(".chtopleft").click(); }
            }
        }
        if (event.which == 39) { // right
            event.preventDefault();
            if (keys == 1) {
                if (will == "b") { $(".chtopright").click(); }
                else { $(".chtopright").click(); }
            }
        }
        if (event.which == 32) { // Spacebar
            event.preventDefault();
            // $(".chcentercenter").click();
            // $("#switchControl").click();
        }
        if (event.which == 77) { // M
            event.preventDefault();
            $("#menuOnOff").click();
            // $("#menuOnOff").hide();
        }
        if (event.which == 73) { // i for image
            event.preventDefault();
            if (audioConferenceConnected !== 1) { $("#walkAroundWithVideo").click(); }
        }
        if (event.which == 84) { // T
            event.preventDefault();
            $("#infot").click();
        }
        if (event.which == 71) { // G
            event.preventDefault();
            $("#fixedLocationOpen").click();
        }
        if (event.which == 65) { // A
            event.preventDefault();
            $("#push2TalkUserWants").click();
        }  
        if (event.which == 68) { // D
            event.preventDefault();
            $("#drive").click();
        }      
        
        if (event.which == 69) { // E + click
            event.preventDefault();
            editTrick = 1;
        }
        $(".tree").mouseover(function(){
            if (editTrick == 1) { editTrick = 0; $(this).dblclick(); }
        })
    }
    if (chatKeysOn == 1) {
        if (event.which == 13 && !event.shiftKey) {
            $("#sendMessageButton").click();
        }
    }
    if (wantTaxi == 1) {
        if (event.which == 13) {
            $("#taxi-send").click();
            wantTaxi = 0;
        }
    }
});

///// fleo.at_click-navigation.js

/* $(".chtopleft").click(function (event) {
    event.preventDefault();
    if (will == "b") { moveWithTrain(historyCoords + 300, sMMssM - 300, 0); }
    else { moveWithTrain(historyCoords - 300, sMMssM + 300, 0); }
}); */
$(".chtop").click(function (event) {
    event.preventDefault();
    if (will == "b") { moveWithTrain(historyCoords, sMMssM - 300, 0, relationToBackground, turn); }
    else { moveWithTrain(historyCoords, sMMssM + 300, 0, relationToBackground, turn); }
});
/* $(".chtopright").click(function (event) {
    event.preventDefault();
    if (will == "b") { moveWithTrain(historyCoords - 300, sMMssM - 300, 0); }
    else { moveWithTrain(historyCoords + 300, sMMssM + 300, 0); }
}); */ 
$(".chleft").click(function (event) {
    event.preventDefault();
    if (will == "b") { moveWithTrain(historyCoords + 300, sMMssM, 0, relationToBackground, turn); }
    else { moveWithTrain(historyCoords - 300, sMMssM, 0, relationToBackground, turn); }
});
$(".chcentercenter").click(function (event) {
    event.preventDefault();			
});
$(".chright").click(function (event) {
    event.preventDefault();
    if (will == "b") { moveWithTrain(historyCoords - 300, sMMssM, 0, relationToBackground, turn); }
    else { moveWithTrain(historyCoords + 300, sMMssM, 0, relationToBackground, turn); }
});

/* $(".chbottomleft").click(function (event) {
    event.preventDefault();
    if (will == "b") { moveWithTrain(historyCoords + 300, sMMssM + 300, 0); }
    else { moveWithTrain(historyCoords - 300, sMMssM - 300, 0); }
}); */
$(".chbottom").click(function (event) {
    event.preventDefault();
    if (will == "b") { moveWithTrain(historyCoords , sMMssM + 300, 0, relationToBackground, turn); }
    else { moveWithTrain(historyCoords, sMMssM - 300, 0, relationToBackground, turn); }
});
/* $(".chbottomright").click(function (event) {
    event.preventDefault();
    if (will == "b") { moveWithTrain(historyCoords - 300, sMMssM + 300, 0); }
    else { moveWithTrain(historyCoords + 300, sMMssM - 300, 0); }
}); */

$("#navFor").click(function () {
    if (will == "b") { moveWithTrain(historyCoords + (turn / 2) * 1, Math.round(sMMssM - ((1 - (Math.abs(turn) / 9000 / 1)) * 300)), 0, relationToBackground, turn); }
    else { moveWithTrain(historyCoords + (turn / 2) * 1, Math.round(sMMssM + (1 - (Math.abs(turn) / 9000))), 0, relationToBackground, turn); }
});
$("#navForStrong").click(function () {
    if (will == "b") { moveWithTrain(historyCoords + (turn / 2) * 3, Math.round(sMMssM - ((3 - (Math.abs(turn) / 9000 / 3)) * 300)), 0, relationToBackground, turn); }
    else { moveWithTrain(historyCoords + (turn / 2) * 3, Math.round(sMMssM + (3 - (Math.abs(turn) / (9000 / 3)))), 0, relationToBackground, turn); }
});
$("#navForWheel").click(function () {
    if (will == "b") { moveWithTrain(historyCoords + (turn / 2) * 7, Math.round(sMMssM - ((7 - (Math.abs(turn) / 9000 / 7)) * 300)), 0, relationToBackground, turn); }
    else { moveWithTrain(historyCoords + (turn / 2) * 7, Math.round(sMMssM + (7 - (Math.abs(turn) / (9000 / 7)))), 0, relationToBackground, turn); }
});
$("#navBacWheel").click(function () {
    if (will == "b") { moveWithTrain(historyCoords - (turn / 2) * 7, Math.round(sMMssM + ((7 - (Math.abs(turn) / 9000 / 7)) * 300)), 0, relationToBackground, turn); }
    else { moveWithTrain(historyCoords - (turn / 2) * 7, Math.round(sMMssM - (7 - (Math.abs(turn) / (9000 / 7)))), 0, relationToBackground, turn); }
});
$("#navBac").click(function () {
    if (will == "b") { moveWithTrain(historyCoords - (turn / 2) * 1, Math.round(sMMssM + ((3 - (Math.abs(turn) / 9000 / 1)) * 300)), 0, relationToBackground, turn); }
    else { moveWithTrain(historyCoords + (turn / 2) * -1, Math.round(sMMssM - (1 - (Math.abs(turn) / 9000))), 0, relationToBackground, turn); }
});
$("#navBacStrong").click(function () {
    if (will == "b") { moveWithTrain(historyCoords - (turn / 2) * 3, Math.round(sMMssM + ((3 - (Math.abs(turn) / 9000 / 3)) * 300)), 0, relationToBackground, turn); }
    else { moveWithTrain(historyCoords - (turn / 2) * 3, Math.round(sMMssM - (3 - (Math.abs(turn) / (9000 / 3)))), 0, relationToBackground, turn); }
});

$("#navLef").click(function () {
    if (will == "b") { moveWithTrain(historyCoords + 300, sMMssM, 250, relationToBackground, turn); }
    else { moveWithTrain(historyCoords - 300, sMMssM, 250, relationToBackground, turn); }
});
$("#navLefStrong").click(function () {
    if (will == "b") { moveWithTrain(historyCoords + 700, sMMssM, 250, relationToBackground, turn); }
    else { moveWithTrain(historyCoords - 700, sMMssM, 250, relationToBackground, turn); }
});

$("#navRig").click(function () {
    if (will == "b") { moveWithTrain(historyCoords - 300, sMMssM, 250, relationToBackground, turn); }
    else { moveWithTrain(historyCoords + 300, sMMssM, 250, relationToBackground, turn); }
});
$("#navRigStrong").click(function () {
    if (will == "b") { moveWithTrain(historyCoords - 700, sMMssM, 250, relationToBackground, turn); }
    else { moveWithTrain(historyCoords + 700, sMMssM, 250, relationToBackground, turn); }
});

$(".chtopleft").click(function(){
    if (will == "b") { 
    if (turn + 200 < 9000 && turn + 200 > -9000) {
    turn += 200;
    $("[class*='scale']").animate({"left": turn + "px"},0);
    $("#haeuserf, #waldf").animate({"left": turn + "px"},0);
    $("#bgbgbsterne").animate({"left": turn * 1.2 + "px"},0);
    $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});
    // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});
    moveWithTrain(historyCoords, sMMssM, 250, relationToBackground, turn);
    $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); }
    else if (turn + 200 >= 9000) {
        $("#infot").click();
        $("[class*='scale']").animate({"left": turn + "px"},0);
        $("#haeuserf, #waldf").animate({"left": turn * 1.2 + "px"},0);
        $("#bgbgbsterne").animate({"left": turn * 1.2 + "px"},0);  
        $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0}); 
        // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0}); 
    }
} else {
        if (turn - 200 < 9000 && turn - 200 > -9000) {
        turn -= 200;
        $("[class*='scale']").animate({"left": turn + "px"},0);
        $("#haeuserf, #waldf").animate({"left": turn + "px"},0);
        $("#bgbgbsterne").animate({"left": turn * 1.2 + "px"},0);
        $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
        // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
        $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); }
        else if (turn - 200 <= -9000) {
            $("#infot").click();
            $("[class*='scale']").animate({"left": turn + "px"},0);
            $("#haeuserf, #waldf").animate({"left": turn + "px"},0);
            $("#bgbgbsterne").animate({"left": turn * 1.2 + "px"},0);    
            $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
            // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
        }
    }
});
$(".chbottomleft").click(function(){
    $(".chtopleft").click();
});
$(".chtopright").click(function(){
    if (will == "b") { 
        if (turn - 200 < 9000 && turn - 200 > -9000) {
        turn -= 200;
        $("[class*='scale']").animate({"left": turn + "px"},0);
        $("#haeuserf, #waldf").animate({"left": turn + "px"},0);
        $("#bgbgbsterne").animate({"left": turn * 1.2 + "px"},0);
        $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});
        // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});
        $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); }
        else if (turn - 200 <= -9000) {
            $("#infot").click();
            $("[class*='scale']").animate({"left": turn + "px"},0);
            $("#haeuserf, #waldf").animate({"left": turn * 1.2 + "px"},0);
            $("#bgbgbsterne").animate({"left": turn * 1.2 + "px"},0);  
            $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0}); 
            // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0}); 
        }
    } else {
            if (turn + 200 < 9000 && turn + 200 > -9000) {
            turn += 200;
            $("[class*='scale']").animate({"left": turn + "px"},0);
            $("#haeuserf, #waldf").animate({"left": turn + "px"},0);
            $("#bgbgbsterne").animate({"left": turn * 1.2 + "px"},0);
            $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
            // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
            $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); }
            else if (turn + 200 <= 9000) {
                $("#infot").click();
                $("[class*='scale']").animate({"left": turn + "px"},0);
                $("#haeuserf, #waldf").animate({"left": turn + "px"},0);
                $("#bgbgbsterne").animate({"left": turn * 1.2 + "px"},0);    
                $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
            }
        }
});
$(".chbottomright").click(function(){
    $(".chtopright").click();
});
$(".chleft").on('mousewheel', function(event) {
    event.preventDefault();
    if (will == "b") { moveWithTrain(parseInt(historyCoords + ((1 - (Math.abs(turn) / 9000)) * event.deltaFactor * event.deltaY * 3)),
        parseInt(sMMssM + (((turn / 12) * event.deltaFactor * event.deltaY) / 100)),
        0, relationToBackground, turn); }
    else { moveWithTrain(parseInt(historyCoords + ((1 - (Math.abs(turn) / 9000)) * event.deltaFactor * event.deltaY * -3)),
        parseInt(sMMssM + (((turn / 12) * event.deltaFactor * event.deltaY) / 100)),
        0, relationToBackground, turn); }

});

$(".chright").on('mousewheel', function(event) {
    event.preventDefault();
    if (will == "b") { moveWithTrain(parseInt(historyCoords + ((1 - (Math.abs(turn) / 9000)) * event.deltaFactor * event.deltaY * 3)),
        parseInt(sMMssM + (((turn / 12) * event.deltaFactor * event.deltaY) / 100)),
        0, relationToBackground, turn); }
    else { moveWithTrain(parseInt(historyCoords + ((1 - (Math.abs(turn) / 9000)) * event.deltaFactor * event.deltaY * -3)),
        parseInt(sMMssM + (((turn / 12) * event.deltaFactor * event.deltaY) / 100)),
        0, relationToBackground, turn); }

});

$(".chleft").swipe({ swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    if (direction == "right" || direction == "up") { distance *= -1; }
    if (will == "b") { moveWithTrain(parseInt(historyCoords + ((1 - (Math.abs(turn) / 9000)) * distance * 3)),
        parseInt(sMMssM + (((turn / 12) * distance) / 100)),
        0, relationToBackground, turn); }
    else { moveWithTrain(parseInt(historyCoords + ((1 - (Math.abs(turn) / 9000)) * distance * -3)),
        parseInt(sMMssM + (((turn / 12) * distance) / 100)),
        0, relationToBackground, turn); }
}});

$(".chright").swipe({ swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
if (direction == "right" || direction == "up") { distance *= -1; }
    if (will == "b") { moveWithTrain(parseInt(historyCoords + ((1 - (Math.abs(turn) / 9000)) * distance * 3)),
        parseInt(sMMssM + (((turn / 12) * distance) / 100)),
        0, relationToBackground, turn); }
    else { moveWithTrain(parseInt(historyCoords + ((1 - (Math.abs(turn) / 9000)) * distance * -3)),
        parseInt(sMMssM + (((turn / 12) * distance) / 100)),
        0, relationToBackground, turn); }
}});

$(".chleft").on('click', function(event) {
    if (will == "b") { moveWithTrain(parseInt(historyCoords + Math.round((300) * 2)), sMMssM, 0, relationToBackground, turn); }
    else { moveWithTrain(parseInt(historyCoords + Math.round((-300) * 2)), sMMssM, 0, relationToBackground, turn); }
    event.preventDefault();
});

$(".chright").on('click', function(event) {
    if (will == "b") { moveWithTrain(parseInt(historyCoords + Math.round((-300) * 2)), sMMssM, 0, relationToBackground, turn); }
    else { moveWithTrain(parseInt(historyCoords + Math.round((300) * 2)), sMMssM, 0, relationToBackground, turn); }
    event.preventDefault();
});

$(".chtop").on('mousewheel', function(event) {
    event.preventDefault();
    if (will == "b") { 
        moveWithTrain(historyCoords + (((turn / 12) * event.deltaFactor * event.deltaY) / 100), 
        Math.round(sMMssM - ((1 - (Math.abs(turn) / 9000)) * event.deltaFactor * event.deltaY * 1 * 5)), 
        0, relationToBackground, turn); }
    else { 
        moveWithTrain(historyCoords + (((turn / 12) * event.deltaFactor * event.deltaY) / 100), 
        Math.round(sMMssM - ((1 - (Math.abs(turn) / 9000)) * event.deltaFactor * event.deltaY * -1 * 5)), 
        0, relationToBackground, turn); }

});
$(".chbottom").on('mousewheel', function(event) {
    event.preventDefault();
    if (will == "b") { 
        moveWithTrain(historyCoords + (((turn / 12) * event.deltaFactor * event.deltaY) / 100), 
        Math.round(sMMssM - ((1 - (Math.abs(turn) / 9000)) * event.deltaFactor * event.deltaY * 1 * 5)), 
        0, relationToBackground, turn); }
    else { 
        moveWithTrain(historyCoords + (((turn / 12) * event.deltaFactor * event.deltaY) / 100), 
        Math.round(sMMssM - ((1 - (Math.abs(turn) / 9000)) * event.deltaFactor * event.deltaY * -1 * 5)), 
        0, relationToBackground, turn); }
});
$("#mapForLocator").on('mousewheel', function(event) {
    event.preventDefault();
    if (will == "b") { 
        moveWithTrain(historyCoords + (((turn / 12) * event.deltaFactor * event.deltaY) / 100), 
        Math.round(sMMssM - ((1 - (Math.abs(turn) / 9000)) * event.deltaFactor * event.deltaY * 1 * 5)), 
        0, relationToBackground, turn); }
    else { 
        moveWithTrain(historyCoords + (((turn / 12) * event.deltaFactor * event.deltaY) / 100), 
        Math.round(sMMssM - ((1 - (Math.abs(turn) / 9000)) * event.deltaFactor * event.deltaY * -1 * 5)), 
        0, relationToBackground, turn); }
});
/* $("#mapForLocatorEurope").on('mousewheel', function(event) {
    if (will == "b") { 
        moveWithTrain(historyCoords + (((turn / 12) * event.deltaFactor * event.deltaY) / 100), 
        Math.round(sMMssM - ((1 - (Math.abs(turn) / 9000)) * event.deltaFactor * event.deltaY * 1 * 3)), 
        0); }
    else { 
        moveWithTrain(historyCoords + (((turn / 12) * event.deltaFactor * event.deltaY) / 100), 
        Math.round(sMMssM - ((1 - (Math.abs(turn) / 9000)) * event.deltaFactor * event.deltaY * -1 * 3)), 
        0); }
    event.preventDefault();
}); */

var drive = "";
var speed = 15;
var driving = 0;
$("#drive").click(function(){ if (driving == 0) { drive = setInterval(function(){
     let turnAngle = Math.round(turn / 100); 
     if (will == "b") { 
        moveWithTrain(
            historyCoords + (((turn / 2) * speed) / 100), 
            Math.round(sMMssM - ((1 - (Math.abs(turn) / 9000)) * speed * 1 * 3)), 
            0, relationToBackground, turn); } else { 
            moveWithTrain(
            historyCoords + (((turn / 2) * speed) / 100), 
            Math.round(sMMssM - ((1 - (Math.abs(turn) / 9000)) * speed * -1 * 3)),  
                0, relationToBackground, turn); } }, 100); 
            $("#drive").css("background","yellow"); driving = 1; } 
            else { speed = 15; clearInterval(drive); $("#drive").css("background","rgb(214, 214, 195)"); driving = 0; }
        });

$("#navForWheel").on('mousewheel', function(event) {
    event.preventDefault();
    if (will == "b") { 
    moveWithTrain(historyCoords, sMMssM + (Math.round(((event.deltaY * event.deltaFactor * -1) / 80)) * 300), 0, relationToBackground, turn);
} else {
    moveWithTrain(historyCoords, sMMssM + (Math.round(((event.deltaY * event.deltaFactor) / 80)) * 300), 0, relationToBackground, turn);
    }
});

$("#navBacWheel").on('mousewheel', function(event) {
    event.preventDefault();
    if (will == "b") { 
    moveWithTrain(historyCoords, sMMssM + (Math.round(((event.deltaY * event.deltaFactor * -1) / 80)) * 300), 0, relationToBackground, turn);
} else {
    moveWithTrain(historyCoords, sMMssM + (Math.round(((event.deltaY * event.deltaFactor) / 80)) * 300), 0, relationToBackground, turn);
    }
});

$(".chtop").on('click', function(event) {
    if (will == "b") { 
        moveWithTrain(historyCoords + (((turn / 12) * 100) / 100), 
        Math.round(sMMssM - ((1 - (Math.abs(turn) / 9000)) * 100 * 1 * 3)), 
        0, relationToBackground, turn); }
    else { 
        moveWithTrain(historyCoords + (((turn / 12) * 100) / 100), 
        Math.round(sMMssM - ((1 - (Math.abs(turn) / 9000)) * 100 * -1 * 3)), 
        0, relationToBackground, turn); }
    event.preventDefault();
});

$(".chbottom").on('click', function(event) {
    if (will == "b") { 
        moveWithTrain(historyCoords + (((turn / 12) * -100) / 100), 
        Math.round(sMMssM - ((1 - (Math.abs(turn) / 9000)) * -100 * 1 * 3)), 
        0, relationToBackground, turn); }
    else { 
        moveWithTrain(historyCoords + (((turn / 12) * -100) / 100), 
        Math.round(sMMssM - ((1 - (Math.abs(turn) / 9000)) * -100 * -1 * 3)), 
        0, relationToBackground, turn); }
    event.preventDefault();
});

$(".chtopleft").on('mousewheel', function(event) {
    event.preventDefault();
    if (will == "b") { if (turn + event.deltaY * event.deltaFactor * 4 < 9000 && turn + event.deltaY * event.deltaFactor * 4 > -9000) {
        turn += event.deltaY * event.deltaFactor * 4; 
        $("[class*='scale']").css({"left": turn + "px"});
        $("#haeuserf, #waldf").css({"left": turn + "px"});
        $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
        // $("#radar").transition({rotate: '+=' + event.deltaY * event.deltaFactor * 4 / 100 + 'deg'}, {duration: 0}); 
        // $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"});
        // $("#mapForLocator").css({"transform-origin": "center center"});
        $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});
        // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});
        $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); } 
        else if (turn + event.deltaY * event.deltaFactor * 4 >= 9000 || turn + event.deltaY * event.deltaFactor * 4 <= -9000) {
            turn += event.deltaY * event.deltaFactor * -4; 
            $("#infot").click();
            $("[class*='scale']").css({"left": turn + "px"});
            $("#haeuserf, #waldf").css({"left": turn + "px"});
            $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
            // $("#radar").transition({rotatez: '+=' + event.deltaY * event.deltaFactor * 4 / 100 + 'deg'}, {duration: 0}); 
            // $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"});
            // $("#mapForLocator").css({"transform-origin": "center center"});
            $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0}); 
            // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});    
        }
    } else {
            if (turn + event.deltaY * event.deltaFactor * -4 < 9000 && turn + event.deltaY * event.deltaFactor * -4 > -9000) {
                turn += event.deltaY * event.deltaFactor * -4; 
                $("[class*='scale']").css({"left": turn + "px"});
                $("#haeuserf, #waldf").css({"left": turn + "px"});
                $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
                // $("#radar").transition({rotate: '+=' + event.deltaY * event.deltaFactor * 4 / 100 + 'deg'}, {duration: 0}); 
                // $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"});
                // $("#mapForLocator").css({"transform-origin": "center center"});
                $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px', rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); }
                else if (turn + event.deltaY * event.deltaFactor * -4 >= 9000 || turn + event.deltaY * event.deltaFactor * -4 <= -9000) {
                    turn += event.deltaY * event.deltaFactor * 4; 
                    $("#infot").click();
                    $("[class*='scale']").css({"left": turn + "px"});
                    $("#haeuserf, #waldf").css({"left": turn + "px"});
                    $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
                    // $("#radar").transition({rotate: '+=' + event.deltaY * event.deltaFactor * 4 / 100 + 'deg'}, {duration: 0}); 
                    // $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"});
                    // $("#mapForLocator").css({"transform-origin": "center center"});
                    $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                    // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                }
            }
});
$(".chbottomleft").on('mousewheel', function(event) {
    event.preventDefault();
    if (will == "b") { if (turn + event.deltaY * event.deltaFactor * 4 < 9000 && turn + event.deltaY * event.deltaFactor * 4 > -9000) {
        turn += event.deltaY * event.deltaFactor * 4; 
        $("[class*='scale']").css({"left": turn + "px"});
        $("#haeuserf, #waldf").css({"left": turn + "px"});
        $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
        // $("#radar").transition({rotate: '+=' + event.deltaY * event.deltaFactor * 4 / 100 + 'deg'}, {duration: 0}); 
        // $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"});
        // $("#mapForLocator").css({"transform-origin": "center center"});
        $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});
        // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});
        $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); } 
        else if (turn + event.deltaY * event.deltaFactor * 4 >= 9000 || turn + event.deltaY * event.deltaFactor * 4 <= -9000) {
            turn += event.deltaY * event.deltaFactor * -4; 
            $("#infot").click();
            $("[class*='scale']").css({"left": turn + "px"});
            $("#haeuserf, #waldf").css({"left": turn + "px"});
            $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
            // $("#radar").transition({rotatez: '+=' + event.deltaY * event.deltaFactor * 4 / 100 + 'deg'}, {duration: 0}); 
            // $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"});
            // $("#mapForLocator").css({"transform-origin": "center center"});
            $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0}); 
            // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});    
        }
    } else {
            if (turn + event.deltaY * event.deltaFactor * -4 < 9000 && turn + event.deltaY * event.deltaFactor * -4 > -9000) {
                turn += event.deltaY * event.deltaFactor * -4; 
                $("[class*='scale']").css({"left": turn + "px"});
                $("#haeuserf, #waldf").css({"left": turn + "px"});
                $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
                // $("#radar").transition({rotate: '+=' + event.deltaY * event.deltaFactor * 4 / 100 + 'deg'}, {duration: 0}); 
                // $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"});
                // $("#mapForLocator").css({"transform-origin": "center center"});
                $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px', rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); }
                else if (turn + event.deltaY * event.deltaFactor * -4 >= 9000 || turn + event.deltaY * event.deltaFactor * -4 <= -9000) {
                    turn += event.deltaY * event.deltaFactor * 4; 
                    $("#infot").click();
                    $("[class*='scale']").css({"left": turn + "px"});
                    $("#haeuserf, #waldf").css({"left": turn + "px"});
                    $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
                    // $("#radar").transition({rotate: '+=' + event.deltaY * event.deltaFactor * 4 / 100 + 'deg'}, {duration: 0}); 
                    // $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"});
                    // $("#mapForLocator").css({"transform-origin": "center center"});
                    $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                    // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                }
            }
});
$(".chtopright").on('mousewheel', function(event) {
    event.preventDefault();
    if (will == "b") { if (turn + event.deltaY * event.deltaFactor * 4 < 9000 && turn + event.deltaY * event.deltaFactor * 4 > -9000) {
        turn += event.deltaY * event.deltaFactor * 4; 
        $("[class*='scale']").css({"left": turn + "px"});
        $("#haeuserf, #waldf").css({"left": turn + "px"});
        $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
        // $("#radar").transition({rotate: '+=' + event.deltaY * event.deltaFactor * 4 / 100 + 'deg'}, {duration: 0}); 
        // $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"});
        // $("#mapForLocator").css({"transform-origin": "center center"});
        $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});
        // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});
        $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); } 
        else if (turn + event.deltaY * event.deltaFactor * 4 >= 9000 || turn + event.deltaY * event.deltaFactor * 4 <= -9000) {
            turn += event.deltaY * event.deltaFactor * -4; 
            $("#infot").click();
            $("[class*='scale']").css({"left": turn + "px"});
            $("#haeuserf, #waldf").css({"left": turn + "px"});
            $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
            // $("#radar").transition({rotatez: '+=' + event.deltaY * event.deltaFactor * 4 / 100 + 'deg'}, {duration: 0}); 
            // $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"});
            // $("#mapForLocator").css({"transform-origin": "center center"});
            $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});  
            // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});   
        }
    } else {
            if (turn + event.deltaY * event.deltaFactor * -4 < 9000 && turn + event.deltaY * event.deltaFactor * -4 > -9000) {
                turn += event.deltaY * event.deltaFactor * -4; 
                $("[class*='scale']").css({"left": turn + "px"});
                $("#haeuserf, #waldf").css({"left": turn + "px"});
                $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
                // $("#radar").transition({rotate: '+=' + event.deltaY * event.deltaFactor * 4 / 100 + 'deg'}, {duration: 0}); 
                // $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"});
                // $("#mapForLocator").css({"transform-origin": "center center"});
                $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px', rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); }
                else if (turn + event.deltaY * event.deltaFactor * -4 >= 9000 || turn + event.deltaY * event.deltaFactor * -4 <= -9000) {
                    turn += event.deltaY * event.deltaFactor * 4; 
                    $("#infot").click();
                    $("[class*='scale']").css({"left": turn + "px"});
                    $("#haeuserf, #waldf").css({"left": turn + "px"});
                    $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
                    // $("#radar").transition({rotate: '+=' + event.deltaY * event.deltaFactor * 4 / 100 + 'deg'}, {duration: 0}); 
                    // $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"});
                    // $("#mapForLocator").css({"transform-origin": "center center"});
                    $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                    // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                }
            }
});
$(".chbottomright").on('mousewheel', function(event) {
    event.preventDefault();
    if (will == "b") { if (turn + event.deltaY * event.deltaFactor * 4 < 9000 && turn + event.deltaY * event.deltaFactor * 4 > -9000) {
        turn += event.deltaY * event.deltaFactor * 4; 
        $("[class*='scale']").css({"left": turn + "px"});
        $("#haeuserf, #waldf").css({"left": turn + "px"});
        $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
        // $("#radar").transition({rotate: '+=' + event.deltaY * event.deltaFactor * 4 / 100 + 'deg'}, {duration: 0}); 
        // $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"});
        // $("#mapForLocator").css({"transform-origin": "center center"});
        $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});
        // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});
        $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); } 
        else if (turn + event.deltaY * event.deltaFactor * 4 >= 9000 || turn + event.deltaY * event.deltaFactor * 4 <= -9000) {
            turn += event.deltaY * event.deltaFactor * -4; 
            $("#infot").click();
            $("[class*='scale']").css({"left": turn + "px"});
            $("#haeuserf, #waldf").css({"left": turn + "px"});
            $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
            // $("#radar").transition({rotatez: '+=' + event.deltaY * event.deltaFactor * 4 / 100 + 'deg'}, {duration: 0}); 
            // $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"});
            // $("#mapForLocator").css({"transform-origin": "center center"});
            $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});  
            // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});   
        }
    } else {
            if (turn + event.deltaY * event.deltaFactor * -4 < 9000 && turn + event.deltaY * event.deltaFactor * -4 > -9000) {
                turn += event.deltaY * event.deltaFactor * -4; 
                $("[class*='scale']").css({"left": turn + "px"});
                $("#haeuserf, #waldf").css({"left": turn + "px"});
                $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
                // $("#radar").transition({rotate: '+=' + event.deltaY * event.deltaFactor * 4 / 100 + 'deg'}, {duration: 0}); 
                // $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"});
                // $("#mapForLocator").css({"transform-origin": "center center"});
                $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px', rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); }
                else if (turn + event.deltaY * event.deltaFactor * -4 >= 9000 || turn + event.deltaY * event.deltaFactor * -4 <= -9000) {
                    turn += event.deltaY * event.deltaFactor * 4; 
                    $("#infot").click();
                    $("[class*='scale']").css({"left": turn + "px"});
                    $("#haeuserf, #waldf").css({"left": turn + "px"});
                    $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
                    // $("#radar").transition({rotate: '+=' + event.deltaY * event.deltaFactor * 4 / 100 + 'deg'}, {duration: 0}); 
                    // $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"});
                    // $("#mapForLocator").css({"transform-origin": "center center"});
                    $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                    // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                }
            }
});

/*
$(".chcentercenter").on('mousewheel', function(event) {
    event.preventDefault();
    if (will == "b") { if (turn + event.deltaY * event.deltaFactor * 4 < 9000 && turn + event.deltaY * event.deltaFactor * 4 > -9000) {
        turn += event.deltaY * event.deltaFactor * 4; 
        $("[class*='scale']").css({"left": turn + "px"});
        $("#haeuserf, #waldf").css({"left": turn + "px"});
        $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
        // $("#radar").transition({rotate: '+=' + event.deltaY * event.deltaFactor * 4 / 100 + 'deg'}, {duration: 0}); 
        // $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"});
        // $("#mapForLocator").css({"transform-origin": "center center"});
        $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});
        // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});
        $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); } 
        else if (turn + event.deltaY * event.deltaFactor * 4 >= 9000 || turn + event.deltaY * event.deltaFactor * 4 <= -9000) {
            turn += event.deltaY * event.deltaFactor * -4; 
            $("#infot").click();
            $("[class*='scale']").css({"left": turn + "px"});
            $("#haeuserf, #waldf").css({"left": turn + "px"});
            $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
            // $("#radar").transition({rotatez: '+=' + event.deltaY * event.deltaFactor * 4 / 100 + 'deg'}, {duration: 0}); 
            // $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"});
            // $("#mapForLocator").css({"transform-origin": "center center"});
            $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});  
            // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});   
        }
    } else {
            if (turn + event.deltaY * event.deltaFactor * -4 < 9000 && turn + event.deltaY * event.deltaFactor * -4 > -9000) {
                turn += event.deltaY * event.deltaFactor * -4; 
                $("[class*='scale']").css({"left": turn + "px"});
                $("#haeuserf, #waldf").css({"left": turn + "px"});
                $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
                // $("#radar").transition({rotate: '+=' + event.deltaY * event.deltaFactor * 4 / 100 + 'deg'}, {duration: 0}); 
                // $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"});
                // $("#mapForLocator").css({"transform-origin": "center center"});
                $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px', rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); }
                else if (turn + event.deltaY * event.deltaFactor * -4 >= 9000 || turn + event.deltaY * event.deltaFactor * -4 <= -9000) {
                    turn += event.deltaY * event.deltaFactor * 4; 
                    $("#infot").click();
                    $("[class*='scale']").css({"left": turn + "px"});
                    $("#haeuserf, #waldf").css({"left": turn + "px"});
                    $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
                    // $("#radar").transition({rotate: '+=' + event.deltaY * event.deltaFactor * 4 / 100 + 'deg'}, {duration: 0}); 
                    // $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"});
                    // $("#mapForLocator").css({"transform-origin": "center center"});
                    $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                    // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                }
            }
});
*/

$(".chcentercenter").on('mousewheel', function(event) {
    event.preventDefault();
    if (will == "b") { if (turn + event.deltaY * event.deltaFactor * 4 < 9000 && turn + event.deltaY * event.deltaFactor * 4 > -9000) {
        turn += event.deltaY * event.deltaFactor * 4; 
        
        // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});
        moveWithTrain(historyCoords, sMMssM, 250, relationToBackground, turn); } 
        else if (turn + event.deltaY * event.deltaFactor * 4 >= 9000 || turn + event.deltaY * event.deltaFactor * 4 <= -9000) {
            turn += event.deltaY * event.deltaFactor * -4; 
             
            // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0}); 
              
        }
    } else {
            if (turn + event.deltaY * event.deltaFactor * -4 < 9000 && turn + event.deltaY * event.deltaFactor * -4 > -9000) {
                turn += event.deltaY * event.deltaFactor * -4; 
                
                // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                moveWithTrain(historyCoords, sMMssM, 250, relationToBackground, turn); }
                else if (turn + event.deltaY * event.deltaFactor * -4 >= 9000 || turn + event.deltaY * event.deltaFactor * -4 <= -9000) {
                    turn += event.deltaY * event.deltaFactor * 4; 
                    
                    // $("#mapForLocatorEurope").css({"transform-origin": parseInt($("#maennikenSpotterEurope-Own").css("left")) + "px " + parseInt($("#maennikenSpotterEurope-Own").css("top")) + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                    
                }
            }
});

// touch:

$(".chtopright").swipe({ swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    if (direction == "down" || direction == "right") { distance *= -1; }
    if (will == "b") { if (turn + distance * 4 < 9000 && turn + distance * 4 > -9000) {
    turn += distance * 4; 
    $("[class*='scale']").animate({"left": turn + "px"},100);
    $("#haeuserf, #waldf").animate({"left": turn + "px"},100);
    $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); } 
    else if (turn + distance * 2 >= 9000 || turn + distance * 4 <= -9000) {
        $("#infot").click();
        $("[class*='scale']").animate({"left": turn + "px"},100);
        $("#haeuserf, #waldf").animate({"left": turn + "px"},100);    
    }
} else {
        if (turn + distance * -4 < 9000 && turn + distance * -4 > -9000) {
            turn += distance * -4; 
            $("[class*='scale']").animate({"left": turn + "px"},100);
            $("#haeuserf, #waldf").animate({"left": turn + "px"},100);
            $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); }
            else if (turn + distance * -4 >= 9000 || turn + distance * -4 <= -9000) {
                $("#infot").click();
                $("[class*='scale']").animate({"left": turn + "px"},100);
                $("#haeuserf, #waldf").animate({"left": turn + "px"},100);    
            }
        }
   
}});

$(".chtopleft").swipe({ swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    if (direction == "down" || direction == "right") { distance *= -1; }
    if (will == "b") { if (turn + distance * 4 < 9000 && turn + distance * 4 > -9000) {
    turn += distance * 4; 
    $("[class*='scale']").animate({"left": turn + "px"},100);
    $("#haeuserf, #waldf").animate({"left": turn + "px"},100);
    $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); } 
    else if (turn + distance * 2 >= 9000 || turn + distance * 4 <= -9000) {
        $("#infot").click();
        $("[class*='scale']").animate({"left": turn + "px"},100);
        $("#haeuserf, #waldf").animate({"left": turn + "px"},100);    
    }
} else {
        if (turn + distance * -4 < 9000 && turn + distance * -4 > -9000) {
            turn += distance * -4; 
            $("[class*='scale']").animate({"left": turn + "px"},100);
            $("#haeuserf, #waldf").animate({"left": turn + "px"},100);
            $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); }
            else if (turn + distance * -4 >= 9000 || turn + distance * -4 <= -9000) {
                $("#infot").click();
                $("[class*='scale']").animate({"left": turn + "px"},100);
                $("#haeuserf, #waldf").animate({"left": turn + "px"},100);    
            }
        }
   
}});

$(".chbottomleft").swipe({ swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    if (direction == "down" || direction == "right") { distance *= -1; }
    if (will == "b") { if (turn + distance * 4 < 9000 && turn + distance * 4 > -9000) {
    turn += distance * 4; 
    $("[class*='scale']").animate({"left": turn + "px"},100);
    $("#haeuserf, #waldf").animate({"left": turn + "px"},100);
    $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); } 
    else if (turn + distance * 2 >= 9000 || turn + distance * 4 <= -9000) {
        $("#infot").click();
        $("[class*='scale']").animate({"left": turn + "px"},100);
        $("#haeuserf, #waldf").animate({"left": turn + "px"},100);    
    }
} else {
        if (turn + distance * -4 < 9000 && turn + distance * -4 > -9000) {
            turn += distance * -4; 
            $("[class*='scale']").animate({"left": turn + "px"},100);
            $("#haeuserf, #waldf").animate({"left": turn + "px"},100);
            $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); }
            else if (turn + distance * -4 >= 9000 || turn + distance * -4 <= -9000) {
                $("#infot").click();
                $("[class*='scale']").animate({"left": turn + "px"},100);
                $("#haeuserf, #waldf").animate({"left": turn + "px"},100);    
            }
        }
   
}});

$(".chbottomright").swipe({ swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    if (direction == "down" || direction == "right") { distance *= -1; }
    if (will == "b") { if (turn + distance * 4 < 9000 && turn + distance * 4 > -9000) {
    turn += distance * 4; 
    $("[class*='scale']").animate({"left": turn + "px"},100);
    $("#haeuserf, #waldf").animate({"left": turn + "px"},100);
    $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); } 
    else if (turn + distance * 2 >= 9000 || turn + distance * 4 <= -9000) {
        $("#infot").click();
        $("[class*='scale']").animate({"left": turn + "px"},100);
        $("#haeuserf, #waldf").animate({"left": turn + "px"},100);    
    }
} else {
        if (turn + distance * -4 < 9000 && turn + distance * -4 > -9000) {
            turn += distance * -4; 
            $("[class*='scale']").animate({"left": turn + "px"},100);
            $("#haeuserf, #waldf").animate({"left": turn + "px"},100);
            $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); }
            else if (turn + distance * -4 >= 9000 || turn + distance * -4 <= -9000) {
                $("#infot").click();
                $("[class*='scale']").animate({"left": turn + "px"},100);
                $("#haeuserf, #waldf").animate({"left": turn + "px"},100);    
            }
        }
   
}});

$(".chcentercenter").swipe({ swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    if (direction == "down" || direction == "right") { distance *= -1; }
    if (will == "b") { if (turn + distance * 4 < 9000 && turn + distance * 4 > -9000) {
    turn += distance * 4; 
    $("[class*='scale']").animate({"left": turn + "px"},100);
    $("#haeuserf, #waldf").animate({"left": turn + "px"},100);
    $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); } 
    else if (turn + distance * 2 >= 9000 || turn + distance * 4 <= -9000) {
        $("#infot").click();
        $("[class*='scale']").animate({"left": turn + "px"},100);
        $("#haeuserf, #waldf").animate({"left": turn + "px"},100);    
    }
} else {
        if (turn + distance * -4 < 9000 && turn + distance * -4 > -9000) {
            turn += distance * -4; 
            $("[class*='scale']").animate({"left": turn + "px"},100);
            $("#haeuserf, #waldf").animate({"left": turn + "px"},100);
            $.post("/fleo.at-php/fleo.at_turn.php", { doing: 1, turn: turn, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }); }
            else if (turn + distance * -4 >= 9000 || turn + distance * -4 <= -9000) {
                $("#infot").click();
                $("[class*='scale']").animate({"left": turn + "px"},100);
                $("#haeuserf, #waldf").animate({"left": turn + "px"},100);    
            }
        }
   
}});

$("#navBacStrong").swipe({ swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    if (direction == "up" || direction == "right") { distance *= -1; }
    if (will == "b") { 
    moveWithTrain(historyCoords, sMMssM + (50 * distance), 0, relationToBackground, turn);
    } else {
    moveWithTrain(historyCoords, sMMssM + (-50 * distance), 0, relationToBackground, turn);
    }
}});
$(".chbottom").swipe({ swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    if (direction == "down" || direction == "right") { distance *= -1; }
    if (will == "b") { 
    moveWithTrain(historyCoords, sMMssM + (5 * distance), 40, relationToBackground, turn);
    } else {
    moveWithTrain(historyCoords, sMMssM + (-5 * distance), 40, relationToBackground, turn);
    }
}});
$("#navForStrong").swipe({ swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    if (direction == "down" || direction == "right") { distance *= -1; }
    if (will == "b") { 
    moveWithTrain(historyCoords, sMMssM + (5 * 300), 40, relationToBackground, turn);
    } else {
    moveWithTrain(historyCoords, sMMssM + (-5 * 300), 40, relationToBackground, turn);
    }
}});
$(".chtop").swipe({ swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    if (direction == "down" || direction == "right") { distance *= -1; }
    if (will == "b") { 
    moveWithTrain(historyCoords, sMMssM + (5 * 300), 40, relationToBackground, turn);
    } else {
    moveWithTrain(historyCoords, sMMssM + (-5 * 300), 40, relationToBackground, turn);
    }
}});

/*
$("#swipeBox1").swipe({ tap:function(event, target) {
    $("swipeBox1").show();
  },
threshold:0
});





$("#swipeBox2").swipe({ swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
if (direction == "right") {
    distance *= 10;
    if (will == "b") { moveWithTrain(parseInt(historyCoords + ((1 - (Math.abs(turn) / 9000)) * distance * 3)),
    parseInt(sMMssM + (((turn / 12) * distance) / 100)),
    0); }
else { moveWithTrain(parseInt(historyCoords + ((1 - (Math.abs(turn) / 9000)) * distance * -3)),
    parseInt(sMMssM + (((turn / 12) * distance) / 100)),
    0); }
}
if (direction == "left") {
    distance *= 10;
    if (will == "b") { moveWithTrain(parseInt(historyCoords + ((1 - (Math.abs(turn) / 9000)) * distance * -3)),
    parseInt(sMMssM + (((turn / 12) * distance) / 100)),
    0); }
else { moveWithTrain(parseInt(historyCoords + ((1 - (Math.abs(turn) / 9000)) * distance * 3)),
    parseInt(sMMssM + (((turn / 12) * distance) / 100)),
    0); }
}
if (direction == "up") {
    if (will == "b") { 
    moveWithTrain(historyCoords, sMMssM + (5 * distance), 40);
    } else {
    moveWithTrain(historyCoords, sMMssM + (-5 * distance), 40);
    }
}
if (direction == "down") {
    if (will == "b") { 
    moveWithTrain(historyCoords, sMMssM + (-5 * distance), 40);
    } else {
    moveWithTrain(historyCoords, sMMssM + (5 * distance), 40);
    }
}
$("swipeBox2").hide();
},
threshold:0,
fingers:2,
allowPageScroll:"auto"
});
*/

///// fleo.at_superSteeringWheel
const trackingDivContainer = document.getElementById('superSteeringWheelContainer');
const trackingDiv = document.getElementById('superSteeringWheel');

let startX, startY, centerX, centerY, deltaXStore = 0, deltaYStore = 0, currentXStore = 0, currentYStore = 0;
var currentlyInput = 1, kindOfWheel = 2; let sMMssMTmp, historyCoordsTmp;
var checkIntervalSuperSteer;
if (Device_Type() !== "Mobile" && Device_Type() !== "Tablet") { var updateTimeSuperSteer = 250; } else { var updateTimeSuperSteer = 1000; }

const updatePosition = (currentX, currentY) => {
    const deltaX = (currentX - centerX);
    const deltaY = (currentY - centerY);
    deltaXStore += deltaX;
    deltaYStore += deltaY;
    if (deltaXStore >= 120) { deltaXStore = 200; };
    if (deltaXStore <= -120) { deltaXStore = -200; };
    if (deltaYStore >= 120) { deltaYStore = 150; };
    if (deltaYStore <= -120) { deltaYStore = -150; };    

    trackingDiv.style.left = `${currentX - trackingDivContainer.getBoundingClientRect().left}px`;
    trackingDiv.style.top = `${currentY - trackingDivContainer.getBoundingClientRect().top}px`;
    
    whoC = (myNumber[0] + myNumber[2]).replace("#", "");

        if (will == "b") {
            if (ws.readyState === WebSocket.OPEN) {
                $("#flash").addClass("ffff");
                hiCo = historyCoords - deltaXStore;
                sMMs = sMMssM - (deltaYStore *-1);  
                sMMssMTmp = sMMs;
                historyCoordsTmp = hiCo;              
                wentZ -= (sMMs - sMMssM); 
                moveMeTrainsMMssM = (sMMs - sMMssM);
          for (aaa = 0; aaa < iii.length; aaa++) {
              that1 = iii.item(aaa);
              scaleNow = parseInt($(that1).attr("distance"));
              scaleNowNumber = scaleNow;
              scaleNowNumber += moveMeTrainsMMssM;                	
              eee(scaleNowNumber, aaa, scaleNow, that1);	
          }

              $("#waldf").css("bottom", Math.round(relationToBackground / -8) * thisAllScale - 140 + "px");
              $("#haeuserf").css("bottom", Math.round(relationToBackground / -8) * thisAllScale - 140 + "px");
          }
          $(".move > .tree").css({"left": "-=" + parseInt(historyCoords - hiCo)}); 

                if (turn < 7800 && turn > -7400) {
                $("[class*='scale']").css({"left": turn + "px"});
                $("#haeuserf, #waldf").css({"left": turn + "px"});
                $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
                $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0}); } 
                else if (turn >= 7400 || turn <= -7800) {
                    $("#infot").click();
                    $("[class*='scale']").css({"left": turn + "px"});
                    $("#haeuserf, #waldf").css({"left": turn + "px"});
                    $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
                    $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0});    
                }
                if (!isInt(turn)) { turn = 0; }
                if (currentlyInput == 1) { ws.send(JSON.stringify({doing:9,hiCo:hiCo,sMMs:sMMs,level:relationToBackground,duration:0,turn:parseInt(turn),turnX:0,turnZ:0,whoC:whoC})); 
                currentlyInput = 0;
                checkIntervalSuperSteer = setTimeout(function (){
                    // ws.send(JSON.stringify({doing:9,hiCo:hiCo,sMMs:sMMs,level:relationToBackground,duration:0,turn:parseInt(turn),turnX:0,turnZ:0,whoC:whoC}));
                    currentlyInput = 1;
                    deltaXStore = 0;
                    deltaYStore = 0;
                }, updateTimeSuperSteer);
            };       

        } else {
            if (ws.readyState === WebSocket.OPEN) {
                $("#flash").addClass("ffff");
                hiCo = (historyCoords + deltaXStore);
                sMMs = (sMMssM + deltaYStore);
                sMMssMTmp = sMMs;
                historyCoordsTmp = hiCo;         
                went += (sMMs - sMMssM);
                moveMeTrainsMMssM = (sMMs - sMMssM);
              for (aaa = 0; aaa < iii.length; aaa++) {
                  that1 = iii.item(aaa);
                  scaleNow = parseInt($(that1).attr("distance"));
                  scaleNowNumber = scaleNow;
                  scaleNowNumber += moveMeTrainsMMssM;                	
                  eee(scaleNowNumber, aaa, scaleNow, that1);	
              }
    
                  $("#waldf").css("bottom", Math.round(relationToBackground / -8) * thisAllScale - 140 + "px");
                  $("#haeuserf").css("bottom", Math.round(relationToBackground / -8) * thisAllScale - 140 + "px");
              }
              $(".move > .tree").css({"left": "-=" + parseInt(historyCoords - hiCo)}); 
    
                
                        if (turn < 7400 && turn > -7800) {
                            $("[class*='scale']").css({"left": turn + "px"});
                            $("#haeuserf, #waldf").css({"left": turn + "px"});
                            $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
                            $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px', rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0}); }
                            else if (turn >= 7800 || turn <= -7400) { 
                                $("#infot").click();
                                $("[class*='scale']").css({"left": turn + "px"});
                                $("#haeuserf, #waldf").css({"left": turn + "px"});
                                $("#bgbgbsterne").css({"left": turn * 1.2 + "px"});
                                $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px"}).transition({perspective: '100px',rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0});
                            }

                if (!isInt(turn)) { turn = 0; }
                if (currentlyInput == 1) { ws.send(JSON.stringify({doing:9,hiCo:hiCo,sMMs:sMMs,level:relationToBackground,duration:0,turn:parseInt(turn),turnX:0,turnZ:0,whoC:whoC})); };       
                currentlyInput = 0;
                checkIntervalSuperSteer = setTimeout(function (){
                    // ws.send(JSON.stringify({doing:9,hiCo:hiCo,sMMs:sMMs,level:relationToBackground,duration:0,turn:parseInt(turn),turnX:0,turnZ:0,whoC:whoC}));
                    currentlyInput = 1;
                    deltaXStore = 0;
                    deltaYStore = 0;
                }, updateTimeSuperSteer);
            }
            sMMssM = sMMssMTmp;
            historyCoords = historyCoordsTmp;
            Cookies.set('spacecoords', historyCoords, { secure: true, sameSite: 'none', expires: 730 });
            Cookies.set('spacedoords', (parseInt(sMMssM / 3)), { secure: true, sameSite: 'none', expires: 730 });
            $(".maennikenLocator").each(function(){
            let locatorToMove = $(this).attr("id"); 
            let locatorToMoveSnip = locatorToMove.replace("maennikenLocator-","");                       
            locateHorizontal = parseInt(($("#personCode-" + locatorToMoveSnip).find(".tree").css("left")));
            locateHorizontal = 150 + (locateHorizontal / 300);
            let oldD = parseInt($("#personCode-" + locatorToMoveSnip).attr("distance"));
            locateVertical = 150 + (oldD / 300);
            bottomLocate = locateVertical - 2.5 + "px";
            leftLocate = locateHorizontal - 2.5 + "px";
            if (locateVertical < 150) { $("#" + locatorToMove).css("background","red"); bottomLocate = 150 + (150 - Math.abs(locateVertical)) + "px"; } else {
              $("#" + locatorToMove).css("background","white"); 
            }
            $("#" + locatorToMove).css({
              "left": leftLocate,
              "bottom": bottomLocate
            });
            }); 
            $(".person").each(function(){
                changeVolumeMeMoving($(this).attr("id").replace("personCode-",""));
            });
            
            $(".audioStation").each(function(){            
                sideVolume[$(this)] = ((1) - Math.abs((parseInt($(this).parent(".tree").css("left"))) * (1 / 7500))).toFixed(2);
                doordsVolume[$(this)] = ((1) - Math.abs((parseInt($(this).parent(".tree").parent(".move").attr("distance"))) * (1 / 7500))).toFixed(2);                   
                if (sideVolume[$(this)] < doordsVolume[$(this)]) { setVolume[$(this)] = sideVolume[$(this)]; } else { setVolume[$(this)] = doordsVolume[$(this)]; }                 
                if (setVolume[$(this)] < 0) { setVolume[$(this)] = 0; }    
                if ($(this).attr("id") == "ytplayer") {
                  ytplayer.setVolume(setVolume[$(this)] * 100);
                } else {         
                $(this)[0].volume = setVolume[$(this)];           
                }
            });
            
            mySpotterMapLatitude = Math.trunc(parseInt(historyCoords) / 1000) * -1;
            mySpotterMapLongitude = (parseInt(sMMssM) * -1) / 300;
            mySpotterMapLocationX = ((mySpotterMapLatitude / 360) + 0.5) * 720;
            mySpotterMapLocationY = (1 - ((mySpotterMapLongitude / 180) + 0.5)) * 360;
            
            if (will == "b") { 
                $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px", "bottom": mySpotterMapLocationY - 200 + "px", "left": w / 2 - mySpotterMapLocationX + "px"}).transition({perspective: '100px', rotate: (turn / 9000) * 90 + 'deg'}, {duration: 0}); 
            } else {
                $("#mapForLocator").css({"transform-origin": mySpotterMapLocationX + "px " + mySpotterMapLocationY + "px", "bottom": mySpotterMapLocationY - 200 + "px", "left": w / 2 - mySpotterMapLocationX + "px"}).transition({perspective: '100px', rotate: (turn / 9000) * -90 + 180 + 'deg'}, {duration: 0}); 
            }
            $("#maennikenSpotter-Own").css({"top": mySpotterMapLocationY - 5 + "px", "left": mySpotterMapLocationX - 5 + "px"});
            
            
            if (historyCoords > 15000 || historyCoords < -32000 || sMMssM < -21000 || sMMssM > -11000 || 1 == 1) { if (mapIsWorld == 0) { mapIsWorld = 1; //$("#mapForLocatorEurope").hide(); 
            $("#mapForLocator").show(); if (Device_Type() !== "Mobile" && Device_Type() !== "Tablet") { 
                $("#mapBody2").css("transform","rotateX(34deg) scale(1)"); $("#mapBody").css({"transform":"scale(1);"}); } else { 
                    $("#mapBody2").css("transform","rotateX(34deg) scale(1)"); $("#mapBody").css({"transform":"scale(1);"}); }}} else { if (mapIsWorld == 1) { mapIsWorld = 0; 
                $("#mapForLocator").hide(); // $("#mapForLocatorEurope").show(); 
                if (Device_Type() !== "Mobile" && Device_Type() !== "Tablet") { 
                    $("#mapBody2").css("transform","rotateX(34deg) scale(1)"); $("#mapBody").css({"transform":"scale(1);"}); } else {
                    $("#mapBody2").css("transform","rotateX(34deg) scale(1)"); $("#mapBody").css({"transform":"scale(1);"});
                }}
            }  


    

    trackingDiv.style.left = `${currentX - trackingDivContainer.getBoundingClientRect().left}px`;
    trackingDiv.style.top = `${currentY - trackingDivContainer.getBoundingClientRect().top}px`;
};

const startDrag = (e) => {
    e.preventDefault();
    const isTouch = e.type === 'touchstart';

    startX = isTouch ? e.touches[0].clientX : e.clientX;
    startY = isTouch ? e.touches[0].clientY : e.clientY;

    const rect = trackingDivContainer.getBoundingClientRect();
    centerX = rect.left + rect.width / 2;
    centerY = rect.top + rect.height / 2;

    console.log(`Start Drag - StartX: ${startX}, StartY: ${startY}, CenterX: ${centerX}, CenterY: ${centerY}`);

    const moveHandler = (e) => {
        const currentX = isTouch ? e.touches[0].clientX : e.clientX;
        const currentY = isTouch ? e.touches[0].clientY : e.clientY;
        currentXStore = currentX;
        currentYStore = currentY;
        

    };
    let superSteeringWheelInterval = setInterval(function(){ updatePosition(currentXStore, currentYStore); }, 100);
    const endHandler = () => {

        clearInterval(superSteeringWheelInterval);
        trackingDiv.style.left = '50%';
        trackingDiv.style.top = '50%';
        deltaXStore = 0;
        deltaYStore = 0;

        document.removeEventListener('mousemove', moveHandler);
        document.removeEventListener('mouseup', endHandler);
        document.removeEventListener('touchmove', moveHandler);
        document.removeEventListener('touchend', endHandler);
    };

    document.addEventListener('mousemove', moveHandler);
    document.addEventListener('mouseup', endHandler);
    document.addEventListener('touchmove', moveHandler);
    document.addEventListener('touchend', endHandler);
};

trackingDiv.addEventListener('mousedown', startDrag);
trackingDiv.addEventListener('touchstart', startDrag);

// $("#superSteeringWheelContainer").click(function(){ trackingDiv.style.left = '50%'; trackingDiv.style.top = '50%'; });


///// fleo.at_trainStation.js

var currenturl = window.location.hostname;
var currentpath = window.location.pathname;
var currentaddress = currenturl + currentpath;
var mapLatitude, mapLongitude, mapLocationX, mapLocationY; // <span id="goTrainstation" style="float:right;cursor:pointer;display:block;">Go Trainstation<span style="font-size:32px;">🚆</span></span>
$("body").append('<div id="fixedLocation" style="color:white; font-size:24px;z-index:9050;background:gray; "><div id="TrainWOMapDiv"><div><span id="goMap" style="float:right;cursor:pointer;display:block;">Go map<span style="font-size:32px;">🗺</span></span>So, do you want to go:</div><br /><div class="goNothingLink" style="cursor:pointer;border: 10px solid purple; padding:10px;">Just hide this, looked good. X</div><br />or<br /><div id="goReal" style="cursor:pointer;border: 10px solid purple; padding:10px;">To my real location in ' + currenturl + ' (by IP-address)</div><br />or<br /><div id="goDowntown" style="cursor:pointer;border: 10px solid purple; padding:10px;">Downtown</div></div><div id="mapDiv" style="display:none;"><canvas id="mapForTrain" width="720" height="360" style="width:720px;height:360px;float:left;margin: 0 30px 0 0;"></canvas><span>Taxi:</span><p><input id="taxi-coords" class="selectReset" type="text" placeholder="' + historyCoords + '" size="20"></p><p><input id="taxi-doords" class="selectReset" type="text" placeholder="' + sMMssM + '" size="20"></p><p><button id="taxi-send">Go Taxi!</button></p><p><span class="goNothingLink" style="cursor:pointer;">Cancel</span></p></div></div>');
$("body").append('<div id="fixedLocationOpen" style="display:none;position:fixed;top: 200px; right: 0px; width:90px; height: 90px;color:white; font-size:24px;z-index:7000;background:gray;border:5px solid purple;border-radius: 50px; transform: translateX(50px);cursor:pointer;"><br />🚆</div>');

$("#fixedLocation").dialog({
    title: "Move far",
    autoOpen: false,
    minWidth: 720,
    modal: false,
    beforeClose: function( event, ui ) { $("#fixedLocationOpen").fadeIn(); }
});

$("#taxi-send").click(function(){
    if (!$("#taxi-coords").val()) { taxiCoords = 0; } else { taxiCoords = parseInt($("#taxi-coords").val()); }
    if (!$("#taxi-doords").val()) { taxiDoords = 0; } else { taxiDoords = parseInt($("#taxi-doords").val()); }

    moveWithTrain(taxiCoords,taxiDoords * 3,2000, relationToBackground, turn); $("#fixedLocation").dialog("close");  $("#TrainWOMapDiv").show(); $("#mapDiv").hide(); });
$(".goNothingLink").click(function(){ $("#fixedLocation").dialog("close");  $("#TrainWOMapDiv").show(); $("#mapDiv").hide(); })

if (urlForCoordsGet.get('location') == "go") { $("#fixedLocation").dialog("close"); };
$("#fixedLocationOpen").click(function(){ $("#fixedLocation").dialog("open"); $("#fixedLocationOpen").fadeOut(); });

var canvasTrain = document.getElementById("mapForTrain"), ctx = canvasTrain.getContext("2d");

var mapBackground = new Image();
var wantTaxi = 0;
mapBackground.src = "/fleo.at-medien/userImages/1666905005image.png579296348312.png.webp";

mapBackground.onload = function(){
    ctx.drawImage(mapBackground,0,0);   
}
$("#goMap").click(function(){ $("#TrainWOMapDiv").hide(); $("#mapDiv").fadeIn();
wantTaxi = 1;
$("#taxi-coords").attr("value",historyCoords);
$("#taxi-doords").attr("value",sMMssM / 3);
$("#taxi-coords").attr("placeholder",historyCoords);
$("#taxi-doords").attr("placeholder",sMMssM / 3);
mapLatitude = Math.trunc(parseInt(historyCoords) / 1000) * -1;
mapLongitude = (parseInt(sMMssM) * -1) / 300;
if (mapLatitude < -180) { mapLatitude = -180; } else if (mapLatitude > 180) { mapLatitude = 180; };
if (mapLongitude < -90) { mapLongitude = -90; } else if (mapLongitude > 90) { mapLongitude = 90; };
mapLocationX = ((mapLatitude / 360) + 0.5) * document.getElementById("mapForTrain").width;
mapLocationY = (1 - ((mapLongitude / 180) + 0.5)) * document.getElementById("mapForTrain").height;
document.getElementById("mapForTrain").getContext("2d").beginPath();

document.getElementById("mapForTrain").getContext("2d").arc(mapLocationX, mapLocationY, 3, 0, 2 * Math.PI);
document.getElementById("mapForTrain").getContext("2d").fillStyle = "#ff0000";
document.getElementById("mapForTrain").getContext("2d").fill();});

$("#mapForTrain").click(function(e) {
            var offset = $(this).offset();
            var mapForTrainX = (e.pageX - offset.left);
            var mapForTrainY = (e.pageY - offset.top);
            mapForTrainX = (mapForTrainX / 2) - 180;
            mapForTrainX = (mapForTrainX.toFixed(3)) * -1000;
  		    mapForTrainY = (mapForTrainY / 2) - 90;
			mapForTrainY = (90 / 100) * mapForTrainY;
            mapForTrainY = mapForTrainY / 100;
  		    mapForTrainY = (mapForTrainY * 2) * (180 / Math.PI);
            mapForTrainY = mapForTrainY.toFixed(0);
            mapForTrainX = parseInt(mapForTrainX);
            mapForTrainY = parseInt(mapForTrainY);
            moveWithTrain(mapForTrainX,mapForTrainY * 300,2000, relationToBackground, turn);
            $("#fixedLocation").dialog("close"); 
			$("#TrainWOMapDiv").show(); $("#mapDiv").hide();
            });

var moveMeDowntownsMMssM;  
$("#goDowntown").click(function(){
moveWithTrain(0,0,2000, relationToBackground, turn);

$("#fixedLocation").dialog("close"); 
});

$("#goReal").click(function(){

$.get("/fleo.at-php/locator/latitude.php?doing", function(data1,status,text){
var goLat = data1;
  goLat = parseInt(goLat);
  	$.get("/fleo.at-php/locator/longitude.php?doing", function(data2,status,text){
	var goLon = data2;
      goLon = parseInt(goLon);
      moveWithTrain(goLon,goLat * 300,200, relationToBackground, turn);
      $("#fixedLocation").dialog("close");   
});
});
});

///// fleo.at_world.js
function stripslashes(str) {
    str = str.replace(/\\'/g, '\'');
    str = str.replace(/\\"/g, '"');
    str = str.replace(/\\0/g, '\0');
    str = str.replace(/\\\\/g, '\\');
    return str;
}
function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }
  
var worldSrc, genesisDone = 0, firstRoomLoaded = 0; var truckLetCoords; var truckLetDoords;
function connectWorld(){
var worldNews, worldNews2, isChangeW, isChangeD, isChangeH, isChangeS, world2Generate = "", scriptAudioStationText, lettercoins, newLettercoins;
var oldDirectionMoveW = [];
var world2GeneratePortion = [];
var world2GeneratePortionCount = 0;
var world2GeneratePortionCountUp = 0;

if (Device_Type() !== "Mobile" && Device_Type() !== "Tablet") { 
    worldSrc = new EventSource('https://' + mainDomain + '/fleo.at-php/world.php?doing=0&spacenumber=' + (myNumber[0] + myNumber[2]).replace("#", "")); } else {
    worldSrc = new EventSource('https://' + mainDomain + '/fleo.at-php/world.php?doing=0&spacenumber=' + (myNumber[0] + myNumber[2]).replace("#", "") + '&mobile=1'); 
}

worldSrc.onmessage = function(e) {
}



worldSrc.addEventListener('remove', function (e) {
    worldNews2 = JSON.parse(e.data);
    if ($('[data-attr=' + worldNews2.id + ']').length) {
        $('[data-attr=' + worldNews2.id + ']').remove();
    }
});

lettercoins = [];



worldSrc.addEventListener('lettercoins', function (e) {
    newLettercoins = JSON.parse(e.data);

    // if (hatsAttached.indexOf(newLettercoins.id) === -1) { 
        // attachHat(newLettercoins.id); 
    // }
    let doLaterLCWhatisThis = newLettercoins.whatIsThis;
    let doLaterLCLettercoins = newLettercoins.lettercoins;
    let doLaterLCAudioStationText = newLettercoins.audioStationText;
    if (haltEverything == 0) {
    $("#audioStationText-" + newLettercoins.whatIsThis).html(stripslashes(htmlDecode(doLaterLCAudioStationText)));

        if (doLaterLCLettercoins) { lettercoins[doLaterLCWhatisThis] = doLaterLCLettercoins.split(","); } else { lettercoins[doLaterLCWhatisThis] = []; }
        if (lettercoins[doLaterLCWhatisThis][1]) { $("#letterCoinMillAudioStationTextLettercoin-1-" + doLaterLCWhatisThis).html(lettercoins[doLaterLCWhatisThis][1]); } else { $("#letterCoinMillAudioStationTextLettercoin-1-" + doLaterLCWhatisThis).html(""); }
        if (lettercoins[doLaterLCWhatisThis][2]) { $("#letterCoinMillAudioStationTextLettercoin-2-" + doLaterLCWhatisThis).html(lettercoins[doLaterLCWhatisThis][2]); } else { $("#letterCoinMillAudioStationTextLettercoin-2-" + doLaterLCWhatisThis).html(""); }
    } else {
        
        setTimeout(function(){
        $("#audioStationText-" + doLaterLCWhatisThis).html(stripslashes(htmlDecode(doLaterLCAudioStationText)));
        if (doLaterLCLettercoins) { lettercoins[doLaterLCWhatisThis] = doLaterLCLettercoins.split(","); } else { lettercoins[doLaterLCWhatisThis] = []; }
        if (lettercoins[doLaterLCWhatisThis][1]) { $("#letterCoinMillAudioStationTextLettercoin-1-" + doLaterLCWhatisThis).html(lettercoins[doLaterLCWhatisThis][1]); } else { $("#letterCoinMillAudioStationTextLettercoin-1-" + doLaterLCWhatisThis).html(""); }
        if (lettercoins[doLaterLCWhatisThis][2]) { $("#letterCoinMillAudioStationTextLettercoin-2-" + doLaterLCWhatisThis).html(lettercoins[doLaterLCWhatisThis][2]); } else { $("#letterCoinMillAudioStationTextLettercoin-2-" + doLaterLCWhatisThis).html(""); }
        }, 10000);
    }
});



worldSrc.onopen = function() {
    console.log("Connection to server opened (" + mainDomain + "/ world)");
};

function reactToChanges() {

    var playerSeekOld = [];
    var playerPlayingOld = [];

    var radioWebsite1 = "https://icecast.radiofrance.fr/fip-hifi.aac?id=" + mainDomain;
    var radioWebsite2 = "https://icecast.radiofrance.fr/fip-hifi.aac?id=" + mainDomain;
    
    worldSrc.addEventListener('change', function (e) {

        // $("#flash").addClass("fff");
        worldNews2 = JSON.parse(e.data);

        if (worldNews2.id == "1465") {
            truckLetCoords = worldNews2.coordsW;
            truckLetDoords = worldNews2.coordsD;
        }
        
        if ($('[data-attr=' + worldNews2.id + ']').length) {
    
            let fragileDoordsGo = ((sMMssM) + (parseInt(worldNews2.coordsD)));
            if (am == "b") {
                fragileDoordsGo = (((sMMssM) + (parseInt(worldNews2.coordsD))) + (went * 2)) * -1;
            }
            scaleNowDoords = parseInt($('[data-attr=' + worldNews2.id + ']').attr("distance"));
            fragileDoordsOld = scaleNowDoords;
            fragileCoordsGo = parseInt(historyCoords) + parseInt(worldNews2.coordsW);
            if (parseInt($('[data-attr=' + worldNews2.id + ']').find(".tree").css("left")) !== fragileCoordsGo) {
                isChangeW = 1;
            } else {
                isChangeW = 0;
            }
            if (fragileDoordsGo !== fragileDoordsOld) {
                isChangeD = 1;
            } else {
                isChangeD = 0;
            }
            if ($('[data-attr=' + worldNews2.id + ']').find(".tree").css("bottom") !== worldNews2.coordsH) {
                isChangeH = 1;
            } else {
                isChangeH = 0;
            }
            if ($('[data-attr=' + worldNews2.id + ']').find(".tree").css("width") !== worldNews2.width) {
                isChangeS = 1;
            } else {
                isChangeS = 0;
            }
    
    
            if (isChangeW == 1 || isChangeD == 1 || isChangeH == 1 || isChangeS == 1) {
                if (isChangeH == 1) {
                    if (worldNews2.id == "1487") { $('[data-attr=' + worldNews2.id + ']').find(".tree").animate({"bottom": worldNews2.coordsH + "px"}, { duration: 5000, queue: false, easing: "linear" });  } else {
                    $('[data-attr=' + worldNews2.id + ']').find(".tree").animate({"bottom": worldNews2.coordsH + "px"}, { duration: 1000, queue: false, easing: "linear" }); }
                } 
                if (isChangeW == 1) {
                    if (worldNews2.id == "1487") { $('[data-attr=' + worldNews2.id + ']').find(".tree").animate({"left": fragileCoordsGo + "px"}, { duration: 5000, queue: false, easing: "linear" }); } else {
                    $('[data-attr=' + worldNews2.id + ']').find(".tree").animate({"left": fragileCoordsGo + "px"}, { duration: 1000, queue: false, easing: "linear" }); }
                    if (worldNews2.minusPlusW == "0") { if (oldDirectionMoveW[worldNews2.id] !== "0") { 
                        $("[data-attr='" + worldNews2.id + "']").find(".tree").css({"transition":"transform 4.0s linear 0s", "transform-origin":"center", "transform":"scaleX(1)"});
                        oldDirectionMoveW[worldNews2.id] = "0"; }}
                    if (worldNews2.minusPlusW == "1") { if (oldDirectionMoveW[worldNews2.id] !== "1") { 
                        $("[data-attr='" + worldNews2.id + "']").find(".tree").css({"transition":"transform 4.0s linear 0s","transform-origin":"center", "transform":"scaleX(-1)"});
                        oldDirectionMoveW[worldNews2.id] = "1"; }}
                    }
                if (isChangeD == 1) {
                    // $('[data-attr=' + worldNews2.id + ']').closest(".move").css("transition","bottom 0.0s linear 0s, transform 0.0s linear 0s, margin-bottom 0.0s linear 0s");
                    if (worldNews2.id == "1487") { $('[data-attr=' + worldNews2.id + ']').closest(".move").css("transition","bottom 5.0s linear 0s, transform 5.0s linear 0s, margin-bottom 5.0s linear 0s"); } else {
                    $('[data-attr=' + worldNews2.id + ']').closest(".move").css("transition","bottom 1.0s linear 0s, transform 1.0s linear 0s, margin-bottom 1.0s linear 0s"); }
                    $('[data-attr=' + worldNews2.id + ']').closest(".move").toggleClass("scale" + fragileDoordsOld).toggleClass("scale"+fragileDoordsGo);
                    $('[data-attr=' + worldNews2.id + ']').attr("distance",fragileDoordsGo);
                    // if (worldNews2.id == "1390") { $('[data-attr=' + worldNews2.id + ']').closest(".move").css("transition","bottom 0.0s linear 0s, transform 0.0s linear 0s, margin-bottom 0.0s linear 0s"); }
                    // $('[data-attr=' + worldNews2.id + ']').closest(".move").css("transition","bottom 0.0s linear 0s, transform 0.0s linear 0s, margin-bottom 0.0s linear 0s");
                    }  
                if (isChangeS == 1) {
                    $('[data-attr=' + worldNews2.id + ']').find(".tree").animate({"width": worldNews2.width + "px"}, 500);
                    }    
        }
        if (worldNews2.tick2 - worldNews2.tick == 2) {
        $('[data-attr=' + worldNews2.id + ']').remove(); 
        if (am == "f") {
            if (worldNews2.whatIsThis.includes("audStat")) {
                $("#wrapper").append('<div class="move thing scale' + (worldNews2.coordsD + sMMssM) + '" distance="' + (worldNews2.coordsD + sMMssM) + '" playing="' + worldNews2.play + '" data-attr="' + worldNews2.id + '" data-online="' + worldNews2.isOnline + '"><div ' + worldNews2.object + ' width: ' + worldNews2.width + 'px; min-height: 1000px; pointer-events: none; bottom: ' + worldNews2.coordsH + 'px; left: ' + (worldNews2.coordsW + historyCoords) + 'px;">' + stripslashes(htmlDecode(worldNews2.name)) + '</div><script>' + stripslashes(htmlDecode(worldNews2.script)) + '</script></div>');
            } else {
            if (worldNews2.floor == "on") { $("#wrapper").append('<div class="move floor scale' + (worldNews2.coordsD + sMMssM) + '" distance="' + (worldNews2.coordsD + sMMssM) + '" playing="' + worldNews2.play + '" data-attr="' + worldNews2.id + '" data-online="' + worldNews2.isOnline + '"><div ' + worldNews2.object + ' width: ' + worldNews2.width + 'px; bottom: ' + worldNews2.coordsH + 'px; left: ' + (worldNews2.coordsW + historyCoords) + 'px;">' + stripslashes(htmlDecode(worldNews2.name)) + '</div></div><script>' + stripslashes(htmlDecode(worldNews2.script)) + '</script>'); }
            else { $("#wrapper").append('<div class="move thing scale' + (worldNews2.coordsD + sMMssM) + '" distance="' + (worldNews2.coordsD + sMMssM) + '" playing="' + worldNews2.play + '" data-attr="' + worldNews2.id + '" data-online="' + worldNews2.isOnline + '"><div ' + worldNews2.object + ' width: ' + worldNews2.width + 'px; bottom: ' + worldNews2.coordsH + 'px; left: ' + (worldNews2.coordsW + historyCoords) + 'px;">' + stripslashes(htmlDecode(worldNews2.name)) + '</div><script>' + stripslashes(htmlDecode(worldNews2.script)) + '</script></div>'); }
            }
            } else if (am == "b") {
                if (worldNews2.whatIsThis.includes("audStat")) {
                    $("#wrapper").append('<div class="move thing scale' + ((worldNews2.coordsD * -1) - sMMssM) + '" distance="' + ((worldNews2.coordsD * -1) - sMMssM) + '" playing="' + worldNews2.play + '" data-attr="' + worldNews2.id + '" data-online="' + worldNews2.isOnline + '"><div ' + worldNews2.object + ' width: ' + worldNews2.width + 'px; min-height: 1000px; pointer-events: none; bottom: ' + worldNews2.coordsH + 'px; left: ' + (worldNews2.coordsW + historyCoords - worldNews2.width) + 'px;">' + stripslashes(htmlDecode(worldNews2.name)) + '</div><script>' + stripslashes(htmlDecode(worldNews2.script)) + '</script></div>');
                } else {
                if (worldNews2.floor == "on") { $("#wrapper").append('<div class="move floor scale' + ((worldNews2.coordsD * -1) - sMMssM) + '" distance="' + ((worldNews2.coordsD * -1) - sMMssM) + '" playing="' + worldNews2.play + '" data-attr="' + worldNews2.id + '" data-online="' + worldNews2.isOnline + '"><div ' + worldNews2.object + ' width: ' + worldNews2.width + 'px; bottom: ' + worldNews2.coordsH + 'px; left: ' + (worldNews2.coordsW + historyCoords - worldNews2.width) + 'px;">' + stripslashes(htmlDecode(worldNews2.name)) + '</div></div><script>' + stripslashes(htmlDecode(worldNews2.script)) + '</script>'); }
                else { $("#wrapper").append('<div class="move thing scale' + ((worldNews2.coordsD * -1) - sMMssM) + '" distance="' + ((worldNews2.coordsD * -1) - sMMssM) + '" playing="' + worldNews2.play + '" data-attr="' + worldNews2.id + '" data-online="' + worldNews2.isOnline + '"><div ' + worldNews2.object + ' width: ' + worldNews2.width + 'px; bottom: ' + worldNews2.coordsH + 'px; left: ' + (worldNews2.coordsW + historyCoords - worldNews2.width) + 'px;">' + stripslashes(htmlDecode(worldNews2.name)) + '</div><script>' + stripslashes(htmlDecode(worldNews2.script)) + '</script></div>'); }
                }
            }
            oldDirectionMoveW[worldNews2.id] == "x";
        } 
        if (worldNews2.robotData.includes("lowerOpacity")) {
            $('[data-attr=' + worldNews2.id + ']').animate({"opacity":"0.5"}, 200);
        }
     } else {
        if (am == "f") {
            if (worldNews2.whatIsThis.includes("audStat")) {
                $("#wrapper").append('<div class="move thing scale' + (worldNews2.coordsD + sMMssM) + '" distance="' + (worldNews2.coordsD + sMMssM) + '" playing="' + worldNews2.play + '" data-attr="' + worldNews2.id + '" data-online="' + worldNews2.isOnline + '"><div ' + worldNews2.object + ' width: ' + worldNews2.width + 'px; min-height: 1000px; pointer-events: none; bottom: ' + worldNews2.coordsH + 'px; left: ' + (worldNews2.coordsW + historyCoords) + 'px;">' + stripslashes(htmlDecode(worldNews2.name)) + '</div><script>' + stripslashes(htmlDecode(worldNews2.script)) + '</script></div>');
            } else {
            if (worldNews2.floor == "on") { $("#wrapper").append('<div class="move floor scale' + (worldNews2.coordsD + sMMssM) + '" distance="' + (worldNews2.coordsD + sMMssM) + '" playing="' + worldNews2.play + '" data-attr="' + worldNews2.id + '" data-online="' + worldNews2.isOnline + '"><div ' + worldNews2.object + ' width: ' + worldNews2.width + 'px; bottom: ' + worldNews2.coordsH + 'px; left: ' + (worldNews2.coordsW + historyCoords) + 'px;">' + stripslashes(htmlDecode(worldNews2.name)) + '</div></div><script>' + stripslashes(htmlDecode(worldNews2.script)) + '</script>'); }
            else { $("#wrapper").append('<div class="move thing scale' + (worldNews2.coordsD + sMMssM) + '" distance="' + (worldNews2.coordsD + sMMssM) + '" playing="' + worldNews2.play + '" data-attr="' + worldNews2.id + '" data-online="' + worldNews2.isOnline + '"><div ' + worldNews2.object + ' width: ' + worldNews2.width + 'px; bottom: ' + worldNews2.coordsH + 'px; left: ' + (worldNews2.coordsW + historyCoords) + 'px;">' + stripslashes(htmlDecode(worldNews2.name)) + '</div><script>' + stripslashes(htmlDecode(worldNews2.script)) + '</script></div>'); }
            }
        } else if (am == "b") {
            if (worldNews2.whatIsThis.includes("audStat")) {
                $("#wrapper").append('<div class="move thing scale' + ((worldNews2.coordsD * -1) - sMMssM) + '" distance="' + ((worldNews2.coordsD * -1) - sMMssM) + '" playing="' + worldNews2.play + '" data-attr="' + worldNews2.id + '" data-online="' + worldNews2.isOnline + '"><div ' + worldNews2.object + ' width: ' + worldNews2.width + 'px; min-height: 1000px; pointer-events: none; bottom: ' + worldNews2.coordsH + 'px; left: ' + (worldNews2.coordsW + historyCoords - worldNews2.width) + 'px;">' + stripslashes(htmlDecode(worldNews2.name)) + '</div><script>' + stripslashes(htmlDecode(worldNews2.script)) + '</script></div>');
            } else {
            if (worldNews2.floor == "on") { $("#wrapper").append('<div class="move floor scale' + ((worldNews2.coordsD * -1) - sMMssM) + '" distance="' + ((worldNews2.coordsD * -1) - sMMssM) + '" playing="' + worldNews2.play + '" data-attr="' + worldNews2.id + '" data-online="' + worldNews2.isOnline + '"><div ' + worldNews2.object + ' width: ' + worldNews2.width + 'px; bottom: ' + worldNews2.coordsH + 'px; left: ' + (worldNews2.coordsW + historyCoords - worldNews2.width) + 'px;">' + stripslashes(htmlDecode(worldNews2.name)) + '</div></div><script>' + stripslashes(htmlDecode(worldNews2.script)) + '</script>'); }
            else { $("#wrapper").append('<div class="move thing scale' + ((worldNews2.coordsD * -1) - sMMssM) + '" distance="' + ((worldNews2.coordsD * -1) - sMMssM) + '" playing="' + worldNews2.play + '" data-attr="' + worldNews2.id + '" data-online="' + worldNews2.isOnline + '"><div ' + worldNews2.object + ' width: ' + worldNews2.width + 'px; bottom: ' + worldNews2.coordsH + 'px; left: ' + (worldNews2.coordsW + historyCoords - worldNews2.width) + 'px;">' + stripslashes(htmlDecode(worldNews2.name)) + '</div><script>' + stripslashes(htmlDecode(worldNews2.script)) + '</script></div>'); }
            }
        }
        oldDirectionMoveW[worldNews2.id] == "x";
     }
            $('[data-attr=' + worldNews2.id + ']').animate({"left": turn + "px"},0);
    
        // $("#flash").removeClass("fff");
    }
    );
    
    var manualOpenedOnce = 0;

    worldSrc.addEventListener('move', function (e) {

        // $("#flash").addClass("fff");
        worldNews2 = JSON.parse(e.data);
        
        if (worldNews2.id == "1465") {
            truckLetCoords = worldNews.coordsW;
            truckLetDoords = worldNews.coordsD;
        }

        if (worldNews2.whatIsThis == "1678666308imagepng416842183436.png.webp") {
        
            if (worldNews2.mpChange == 1 && worldNews2.seek == (myNumber[0] + myNumber[2]).replace("#", "")) {
                if (!($("#maennikenBag-" + (myNumber[0] + myNumber[2]).replace("#", "")).find(".medal3").length && $("#maennikenBag-" + (myNumber[0] + myNumber[2]).replace("#", "")).find(".medal0").length)) {
                if (manualOpenedOnce == 0) { manualOpenedOnce = 1; /* $("#manual").click(); */ }
              } } 

        }

        if ($('[data-attr=' + worldNews2.id + ']').length) {
    
            let fragileDoordsGo = ((sMMssM) + (parseInt(worldNews2.coordsD)));
            if (am == "b") {
                fragileDoordsGo = (((sMMssM) + (parseInt(worldNews2.coordsD))) + (went * 2)) * -1;
            }
            scaleNowDoords = parseInt($('[data-attr=' + worldNews2.id + ']').attr("distance"));
            fragileDoordsOld = scaleNowDoords;
            fragileCoordsGo = parseInt(historyCoords) + parseInt(worldNews2.coordsW);
            if (parseInt($('[data-attr=' + worldNews2.id + ']').find(".tree").css("left")) !== fragileCoordsGo) {
                isChangeW = 1;
            } else {
                isChangeW = 0;
            }
            if (fragileDoordsGo !== fragileDoordsOld) {
                isChangeD = 1;
            } else {
                isChangeD = 0;
            }
            if ($('[data-attr=' + worldNews2.id + ']').find(".tree").css("bottom") !== worldNews2.coordsH) {
                isChangeH = 1;
            } else {
                isChangeH = 0;
            }
            if ($('[data-attr=' + worldNews2.id + ']').find(".tree").css("width") !== worldNews2.width) {
                isChangeS = 1;
            } else {
                isChangeS = 0;
            }
            if (haltEverything == 0) {
                
            /* if (worldNews2.whatIsThis.includes("audStat")) { 
                console.log((Math.abs(parseFloat(worldNews2.seek) - parseFloat(document.getElementById(worldNews2.whatIsThis).currentTime)))); 
                console.log(parseFloat(worldNews2.seek));
                console.log(parseFloat(document.getElementById(worldNews2.whatIsThis).currentTime));
            } */
            if (worldNews2.play == 1 && worldNews2.seek == 0 && worldNews2.whatIsThis.includes("audStat") || worldNews2.play == 1 && playerPlayingOld[worldNews2.whatIsThis] !== worldNews2.play && worldNews2.whatIsThis.includes("audStat")) { 
                if (worldNews2.whatIsThis == "audStat-16713162473-01Mete") { 
                    document.getElementById("audStat-16713162473-01Mete").src = radioWebsite1; document.getElementById(worldNews2.whatIsThis).currentTime = 0; document.getElementById(worldNews2.whatIsThis).play(); }
                else if (worldNews2.whatIsThis == "audStat45614724") { 
                    document.getElementById(worldNews2.whatIsThis).src = radioWebsite2; document.getElementById(worldNews2.whatIsThis).currentTime = 0; document.getElementById(worldNews2.whatIsThis).play(); }
                    else {
                if (!$(".audioStationAudioPlay-" + worldNews2.whatIsThis).hasClass("startedSelf")) { document.getElementById(worldNews2.whatIsThis).currentTime = worldNews2.seek; document.getElementById(worldNews2.whatIsThis).play(); }
                }
            }
            if (worldNews2.play == 2 && worldNews2.whatIsThis.includes("audStat") && !$("#videoPlayerControlsOuter-" + worldNews2.whatIsThis).hasClass("startedSimple")) {         
                document.getElementById(worldNews2.whatIsThis).pause(); 
            } 

            if (document.getElementById(worldNews2.whatIsThis) && typeof document.getElementById(worldNews2.whatIsThis).currentTime === 'number' && worldNews2.whatIsThis.includes("audStat")) {
            if ((Math.abs(parseFloat(worldNews2.seek) - parseFloat(document.getElementById(worldNews2.whatIsThis).currentTime)) > 1.5)) { 
            document.getElementById(worldNews2.whatIsThis).currentTime = worldNews2.seek;
            // console.log("player_seek_change");
            }}
            if (worldNews2.play !== playerPlayingOld[worldNews2.whatIsThis] && worldNews2.whatIsThis.includes("audStat")) {
            document.getElementById(worldNews2.whatIsThis).currentTime = worldNews2.seek;
            playerPlayingOld[worldNews2.whatIsThis] = worldNews2.play;
            // console.log("player_play_different");
            }
        


        }
    
    
    if (isChangeW == 1 || isChangeD == 1 || isChangeH == 1 || isChangeS == 1) {

        if (isChangeH == 1) {
            if (worldNews2.id == "1487") { $('[data-attr=' + worldNews2.id + ']').find(".tree").animate({"bottom": worldNews2.coordsH + "px"}, { duration: 5000, queue: false, easing: "linear" });  } else {
            
            if (worldNews2.id == "1246") { $('[data-attr=' + worldNews2.id + ']').closest(".move").css("transition","bottom .125s linear 0s, transform .125s linear 0s, margin-bottom .125s linear 0s"); }

            $('[data-attr=' + worldNews2.id + ']').find(".tree").animate({"bottom": worldNews2.coordsH + "px"}, { duration: 1000, queue: false, easing: "linear" });

            }
        } 
        if (isChangeW == 1) {
            if (worldNews2.id == "1487") { $('[data-attr=' + worldNews2.id + ']').find(".tree").animate({"left": fragileCoordsGo + "px"}, { duration: 5000, queue: false, easing: "linear" }); } else {

            if (worldNews2.id == "1246") { $('[data-attr=' + worldNews2.id + ']').closest(".move").css("transition","bottom .125s linear 0s, transform .125s linear 0s, margin-bottom .125s linear 0s"); }


            $('[data-attr=' + worldNews2.id + ']').find(".tree").animate({"left": fragileCoordsGo + "px"}, { duration: 1000, queue: false, easing: "linear" }); }
            if (worldNews2.minusPlusW == "0") { if (oldDirectionMoveW[worldNews2.id] !== "0") { 
            $("[data-attr='" + worldNews2.id + "']").find(".tree").css({"transition":"transform 4.0s linear 0s", "transform-origin":"center", "transform":"scaleX(1)"});
            oldDirectionMoveW[worldNews2.id] = "0"; }}
            if (worldNews2.minusPlusW == "1") { if (oldDirectionMoveW[worldNews2.id] !== "1") { 
            $("[data-attr='" + worldNews2.id + "']").find(".tree").css({"transition":"transform 4.0s linear 0s","transform-origin":"center", "transform":"scaleX(-1)"});
            oldDirectionMoveW[worldNews2.id] = "1"; }}
        }
        if (isChangeD == 1) {
            // $('[data-attr=' + worldNews2.id + ']').closest(".move").css("transition","bottom 0.0s linear 0s, transform 0.0s linear 0s, margin-bottom 0.0s linear 0s");
            if (worldNews2.id == "1487") { $('[data-attr=' + worldNews2.id + ']').closest(".move").css("transition","bottom 5.0s linear 0s, transform 5.0s linear 0s, margin-bottom 5.0s linear 0s"); } else {
            
            if (worldNews2.id == "1246") { $('[data-attr=' + worldNews2.id + ']').closest(".move").css("transition","bottom .125s linear 0s, transform .125s linear 0s, margin-bottom .125s linear 0s"); } 

            $('[data-attr=' + worldNews2.id + ']').closest(".move").css("transition","bottom 1.0s linear 0s, transform 1.0s linear 0s, margin-bottom 1.0s linear 0s"); }
            $('[data-attr=' + worldNews2.id + ']').closest(".move").toggleClass("scale" + fragileDoordsOld).toggleClass("scale"+fragileDoordsGo);
            $('[data-attr=' + worldNews2.id + ']').attr("distance",fragileDoordsGo);
            // if (worldNews2.id == "1390") { $('[data-attr=' + worldNews2.id + ']').closest(".move").css("transition","bottom 0.0s linear 0s, transform 0.0s linear 0s, margin-bottom 0.0s linear 0s"); }
            // $('[data-attr=' + worldNews2.id + ']').closest(".move").css("transition","bottom 0.0s linear 0s, transform 0.0s linear 0s, margin-bottom 0.0s linear 0s");
            }  
        if (isChangeS == 1) {
            $('[data-attr=' + worldNews2.id + ']').find(".tree").animate({"width": worldNews2.width + "px"}, 500);
            }
    if (worldNews2.whatIsThis.includes("audStat") || worldNews2.whatIsThis == "ytplayer") {         
                sideVolume[$("#" + worldNews2.whatIsThis)] = ((1) - Math.abs((parseInt($("#" + worldNews2.whatIsThis).parent(".tree").css("left"))) * (1 / 7500))).toFixed(2);
                doordsVolume[$("#" + worldNews2.whatIsThis)] = ((1) - Math.abs((parseInt($("#" + worldNews2.whatIsThis).parent(".tree").parent(".move").attr("distance"))) * (1 / 7500))).toFixed(2);                   
                if (sideVolume[$("#" + worldNews2.whatIsThis)] < doordsVolume[$("#" + worldNews2.whatIsThis)]) { setVolume[$("#" + worldNews2.whatIsThis)] = sideVolume[$("#" + worldNews2.whatIsThis)]; } else { setVolume[$("#" + worldNews2.whatIsThis)] = doordsVolume[$("#" + worldNews2.whatIsThis)]; }                 
                if (setVolume[$("#" + worldNews2.whatIsThis)] < 0) { setVolume[$("#" + worldNews2.whatIsThis)] = 0; } 
                if (worldNews2.whatIsThis == "ytplayer") {
                   ytplayer.setVolume(setVolume[$("#" + worldNews2.whatIsThis)] * 100);
                } else {             
                $("#" + worldNews2.whatIsThis)[0].volume = setVolume[$("#" + worldNews2.whatIsThis)];     
                }
            }
    }}}
        );
    }

    var newTopic;

    worldSrc.addEventListener('topic', function (e) {
        newTopic = JSON.parse(e.data);
        let toDoWhatIsThis = newTopic.whatIsThis;
        let toDoAudioStationText = newTopic.audioStationText;

        setTimeout(function(){
            $("#audioStationText-" + toDoWhatIsThis).html(stripslashes(htmlDecode(toDoAudioStationText)));
        }, 10000);
    
    });

worldSrc.addEventListener('genesis', function (e) {
    if (genesisDone == 0) {

    $("#flash").addClass("ff");

    worldNews = JSON.parse(e.data);

    if (worldNews.id == "1465") {
        truckLetCoords = worldNews.coordsW;
        truckLetDoords = worldNews.coordsD;
    }

    if (!$('[data-attr=' + worldNews.id + ']').length) {
        
        if (worldNews.whatIsThis.includes("audStat")) {
        if (haltEverything == 0 || haltEverything == 1) {
        world2GeneratePortion[world2GeneratePortionCount] += '<div class="move thing scale' + worldNews.coordsD + '" distance="' + worldNews.coordsD + '" playing="' + worldNews.play + '" data-attr="' + worldNews.id + '" data-online="' + worldNews.isOnline + '"><div ' + worldNews.object + ' width: ' + worldNews.width + 'px; min-height: 1000px; pointer-events: none; bottom: ' + worldNews.coordsH + 'px; left: ' + worldNews.coordsW + 'px;">' + stripslashes(htmlDecode(worldNews.name)) + '</div><script>' + stripslashes(htmlDecode(worldNews.script)) + '</script></div>';
        }} else {
        if (worldNews.floor == "on") { world2GeneratePortion[world2GeneratePortionCount] += '<div class="move floor scale' + worldNews.coordsD + '" distance="' + worldNews.coordsD + '" playing="' + worldNews.play + '" data-attr="' + worldNews.id + '" data-online="' + worldNews.isOnline + '"><div ' + worldNews.object + ' width: ' + worldNews.width + 'px; bottom: ' + worldNews.coordsH + 'px; left: ' + worldNews.coordsW + 'px;">' + stripslashes(htmlDecode(worldNews.name)) + '</div></div><script>' + stripslashes(htmlDecode(worldNews.script)) + '</script>'; }
        else { world2GeneratePortion[world2GeneratePortionCount] += '<div class="move thing scale' + worldNews.coordsD + '" distance="' + worldNews.coordsD + '" playing="' + worldNews.play + '" data-attr="' + worldNews.id + '" data-online="' + worldNews.isOnline + '"><div ' + worldNews.object + ' width: ' + worldNews.width + 'px; bottom: ' + worldNews.coordsH + 'px; left: ' + worldNews.coordsW + 'px;">' + stripslashes(htmlDecode(worldNews.name)) + '</div><script>' + stripslashes(htmlDecode(worldNews.script)) + '</script></div>'; }
        }
        if (world2GeneratePortionCountUp%10==0) {
        world2GeneratePortionCount++;
        }
        world2GeneratePortionCountUp++
        oldDirectionMoveW[worldNews.id] == "x";
    }

    $("#flash").removeClass("ff");
}
});

function fff(fff, ggg, scaleNow, item) {
    // $(item).css("transition","bottom 0s linear 0s, transform 0s linear 0s, margin-bottom 0s linear 0s");
    $(item).toggleClass("scale" + scaleNow).toggleClass("scale" + fff);
    $(item).attr("distance",fff);
    // $(item).css("transition","bottom 0s linear 0s, transform 0s linear 0s, margin-bottom 0s linear 0s");
}

worldSrc.addEventListener('genesis-complete', function (e) {
    if (genesisDone == 0 && firstRoomLoaded == 0) {
        $("#flash").addClass("fff");
    // if ($(window).height() > 600) { $("body").append('<div id="startUpAskUser" style="position:fixed;width:40%;height:40%;left:26%;top:26%;padding:20px;background:white;border:2vw solid black;font-size:30px;color:black;font-weight:bold;z-index:999999;"><h1>Hello</h1><p>Please click \"Go for it!\" to get things started.<br />Or wait 10 seconds.</p><p><span id="getThingsStarted" style="border:5px solid black;background:white;color:black;padding:10px;cursor:pointer;">Go for it!</span><p></div>'); }
    // else { $("body").append('<div id="startUpAskUser" style="position:fixed;width:60%;height:60%;left:16%;top:6%;padding:20px;background:white;border:2vw solid black;font-size:30px;color:black;font-weight:bold;z-index:999999;"><h1>Hello</h1><p>Please click \"Go for it!\" to get things started.<br />Or wait 10 seconds.</p><p><span id="getThingsStarted" style="border:5px solid black;background:white;color:black;padding:10px;cursor:pointer;">Go for it!</span><p></div>'); }
    // if (yeahStartup == 1) { setTimeout(function(){ $("#getThingsStarted").click(); $("#menuOnOff").click(); $(".nineedge").dblclick(); },1500); } else { var startUpTimeout = setTimeout(function(){ $("#getThingsStarted").click(); $(".nineedge").dblclick(); },10000); }
    // $("#getThingsStarted").click(function(){ 
    // clearTimeout(startUpTimeout);
    // $("#startUpAskUser").remove(); 
    for (let i=0; i <= world2GeneratePortionCount; i++) {



        setTimeout(function(){
            $("#wrapper").append(world2GeneratePortion[i]); 
            world2GeneratePortion[i] = "";
            if (i > 0) { console.log("*** World-Portion " + i + " of " + world2GeneratePortionCount + " loaded ***"); }
        
        if (i == world2GeneratePortionCount) {
            console.log("*** Genesis complete ***");
            $("body").append('<div id="startUpMessages" style="position:fixed;height:100%;width:100%;background:#00800000;color:blue;font-weight:bold;font-size:30px;bottom:0;left:0;z-index:9999999;perspective-origin:top right;perspective:460px;"><div style="transform-origin:center;transform:scale(1) rotateX(-3deg) rotateY(-1.55deg);position:absolute;text-align:center;height:auto;padding:30px;width:320px;top:120px;right:0;cursor:pointer;background:#ffffff8f;border:20px solid blue;">Let\'s collect and manage memories.<br />We need one click to start sounds.<br />When someone calls you, the browser will first ask for mic and cam. You do not have to accept anything.<br />Willkommen!</div></div>');
            $("#startUpMessages").click(function(){ 
                $("#startUpMessages").fadeOut(500);
                setTimeout(function(){ haltEverything = 0; }, 500);
                if (!$("#maennikenBag-" + (myNumber[0] + myNumber[2]).replace("#", "")).find(".medal2").length) { 
                    // console.log("here");

                    $("#goBuild").click();
                }  });
            reactToChanges();
            /* if (firstRoomLoaded == 1) { 
                for (var aaa = 0; aaa < iii.length; aaa++) {
                var that = iii.item(aaa);
                var scaleNow = $(that1)[0].className.split(/\s+/);
                for (var i = 0; i < scaleNow.length; i++) { if (scaleNow[i].includes("scale")) { var scaleNowNumber = parseInt(scaleNow[i].replace("scale", "")); }}
                    scaleNowNumber = parseInt(scaleNow.replace("scale",""));
                scaleNowNumber += sMMssM;
                fff(scaleNowNumber, aaa, scaleNow, that);
                $(that).find(".tree").animate({
                    "left": "+=" + historyCoords
                }, 0);
            }}*/
            world2Generate = "";
            readyWorlds = 1;
            firstRoomLoaded = 1;
            genesisDone = 1;
            world2GeneratePortionCountUp = 0;
            world2GeneratePortionCount = 0;
            
            // });
            $("#flash").removeClass("fff");
            }

        }, i * 600);
    }
}

            else if (genesisDone == 0 && firstRoomLoaded == 1) {
                $("#flash").addClass("fff");
                $(".thing").remove();
                $(".floor").remove();
                for (let i=0; i <= world2GeneratePortionCount; i++) {
                    setTimeout(function(){
                    $("#wrapper").append(world2GeneratePortion[i]);
                    world2GeneratePortion[i] = "";
                    console.log("*** World-Portion " + i + " of " + world2GeneratePortionCount + " loaded ***"); 
                    
                    if (i == world2GeneratePortionCount) {
                    console.log("*** Genesis complete ***");
                    for (var aaa = 0; aaa < iii.length; aaa++) {
                    that = iii.item(aaa);
                    scaleNow = parseInt($(that).attr("distance"));
                    scaleNowNumber = scaleNow;
                    scaleNowNumber += sMMssM;
                    fff(scaleNowNumber, aaa, scaleNow, that);
                    $(that).find(".tree").animate({
                        "left": "+=" + parseInt(historyCoords)
                    }, 0);
                }
                world2Generate = "";
                genesisDone = 1;
                world2GeneratePortionCountUp = 0;
                world2GeneratePortionCount = 0;
                setTimeout(function(){ haltEverything = 0; }, 500);
                $("#flash").removeClass("fff");
        }
    }, i * 600);

}
    }
});

    


// if (!hatsAttached) { var hatsAttached = []; }

function attachHat(id) {
    if (!$("#fleoAtHat" + id).length) {
    $('[data-attr=' + id + ']').find(".tree").append('<div id="fleoAtHat' + id + '" class="fleoAtHat" data-hat="' + id + '" style="position:absolute;bottom:680px;left:16px;pointer-events:auto;cursor:pointer;"><img src="https://usa.weltfernsehsender.de/fleo.at.hat.png" style="width:190px;height:152px" name="fleo.at.hat.webp" alt="fleo.at.hat.webp" /></div>');
    // hatsAttached.push(id);
}
}
var tuq = [];
var audFunk = [];

$("#wrapper").arrive(".audioStation", function() {
    let forLettercoinsId = $(this).parent(".tree").parent(".move").attr("data-attr");
    let audioStationToAssign = $(this).attr("id");
    attachHat(forLettercoinsId); 
    tuq[audioStationToAssign] = 0;
    if (audFunk[audioStationToAssign] == null) { audFunk[audioStationToAssign] = function() {}; }
    // $(this).parent(".tree").css("pointer-events","none");

    if ($(this).is("video")) {

    document.getElementById(audioStationToAssign).onplay = function(){
        $("#" + audioStationToAssign).parent(".tree").css({"transform-origin":"center left"}).transition({perspective:"10000px",rotateY:"+=.6deg",duration:350}, function(){ $("#" + audioStationToAssign).parent(".tree").css({"transform-origin":"center left"}).transition({perspective:"10000px",rotateY:"0deg",duration:200})})
            $(".audioStationAudioPlay-" + audioStationToAssign).hide(); $(".audioStationAudioStop-" + audioStationToAssign).show();
            $(".audioStationAudioStopLargeSimple-" + audioStationToAssign).show();
            $(".audioStationAudioStopLargeAll-" + audioStationToAssign).show();
            $(".audioStationAudioPlayLargeSimple-" + audioStationToAssign).hide();
            $(".audioStationAudioPlayLargeAll-" + audioStationToAssign).hide();
            $("#videoPlayerControlsInner-" + audioStationToAssign).fadeOut(1000);        
        }; 

    document.getElementById(audioStationToAssign).onended = function(){  
        
        $("#letterCoinMillAudioStationTextLettercoin-1-" + audioStationToAssign).effect( "pulsate", {times:4}, 1400, function(){ $("#letterCoinMillAudioStationTextLettercoin-1-" + audioStationToAssign).css({"pointer-events":"auto", "background":"green"}); });  
        $(".audioStationAudioStop-" + audioStationToAssign).hide(); $(".audioStationAudioPlay-" + audioStationToAssign).show(); $("#audioStationAudioDiv-" + audioStationToAssign).animate({"bottom":"350px"}, 1000);
        audFunk[audioStationToAssign]();
        $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_timeSeek.php", { doing: 2, room: myRoom, audioStation: audioStationToAssign, seek: 0 });
        if ($(this).attr("id") == "audStat-16713162473-01Mete" || $(this).attr("id") == "audStat45614724") { document.getElementById(worldNews2.whatIsThis).src = ""; }
    };
    document.getElementById(audioStationToAssign).onpause = function(){ 
$("#" + audioStationToAssign).parent(".tree").css({"transform-origin":"bottom left"}).transition({perspective:"10000px",scale:"-=0.04",duration:200}, function(){ $("#" + audioStationToAssign).parent(".tree").css({"transform-origin":"bottom left"}).transition({perspective:"10000px",scale:"+=0.04",duration:350})})    
    $(".audioStationAudioStop-" + audioStationToAssign).hide(); 
    $(".audioStationAudioPlay-" + audioStationToAssign).show(); 
    $(".audioStationAudioStopLargeSimple-" + audioStationToAssign).hide();
    $(".audioStationAudioStopLargeAll-" + audioStationToAssign).hide();
    $(".audioStationAudioPlayLargeSimple-" + audioStationToAssign).show();
    $(".audioStationAudioPlayLargeAll-" + audioStationToAssign).show();
    if ($(this).attr("id") == "audStat-16713162473-01Mete" || $(this).attr("id") == "audStat45614724") { document.getElementById(worldNews2.whatIsThis).src = ""; }

};

    $(this).css({"z-index":0});
    $(this).parent().append('<div id="videoPlayerControlsOuter-' + audioStationToAssign + '" class="startedSimple" style="position:absolute;width:calc(100% - 230px);margin-left:230px;left:0;bottom:0;min-height:600px;height:100%;pointer-events:auto;z-index:100000;"><div id="videoPlayerControlsInner-' + audioStationToAssign + '" style="position:absolute;width:100%;left:0;bottom:50px;height:100%;z-index:300000;"><img class="audioStationAudioPlayLargeSimple-' + audioStationToAssign + '" style="position:absolute;bottom:0;width:50%;height:auto;cursor:pointer;pointer-events:auto;filter:drop-shadow(0 -10px 40px #000000);" src="/fleo.at-medien/layout/audio/playforsimple.png" /><img class="audioStationAudioPlayLargeAll-' + audioStationToAssign + '" style="position:absolute;left:50%;bottom:0;width:50%;height:auto;cursor:pointer;pointer-events:auto;filter:drop-shadow(0 -10px 40px #000000);" src="/fleo.at-medien/layout/audio/playforall.png" /><img class="audioStationAudioStopLargeSimple-' + audioStationToAssign + '" style="position:absolute;bottom:0;width:50%;height:auto;cursor:pointer;pointer-events:auto;filter:drop-shadow(0 -10px 40px #000000);display:none;" src="/fleo.at-medien/layout/audio/stopforsimple.png" /><img class="audioStationAudioStopLargeAll-' + audioStationToAssign + '" style="position:absolute;left:50%;bottom:0;width:50%;height:auto;cursor:pointer;pointer-events:auto;filter:drop-shadow(0 -10px 40px #000000);display:none;" src="/fleo.at-medien/layout/audio/stopforall.png" /><div id="videoPlayerInnerSeek-' + audioStationToAssign + '" style="background:#00ff002f;position:absolute;width:100%;left:0;bottom:-50px;height:50px;"><div id="videoPlayerInnerSeekBar-' + audioStationToAssign + '" style="background:#00ff002f;position:absolute;width:100%;left:0;bottom:0;height:50px;pointer-events:auto;"></div></div></div></div>');
    

$(".audioStationAudioPlay-" + audioStationToAssign).click(function(){ 
    // document.getElementById(audioStationToAssign).play(); 
});
$(".audioStationAudioStop-" + audioStationToAssign).click(function(){ 
    if ($("#videoPlayerControlsOuter-" + audioStationToAssign).hasClass("startedSimple")) { document.getElementById(audioStationToAssign).pause(); } else {
    $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_timeSeek.php", { doing: 2, room: myRoom, audioStation: audioStationToAssign, seek: document.getElementById(audioStationToAssign).currentTime });
    
    }
 });

$(".audioStationAudioPlayLargeSimple-" + audioStationToAssign).click(function(){
    document.getElementById(audioStationToAssign).play();
    $("#videoPlayerControlsOuter-" + audioStationToAssign).removeClass("startedAll").addClass("startedSimple");
 });
 $(".audioStationAudioStopLargeSimple-" + audioStationToAssign).click(function(){
    document.getElementById(audioStationToAssign).pause();
    $("#videoPlayerControlsOuter-" + audioStationToAssign).removeClass("startedSimple").removeClass("startedAll");
 });
 $(".audioStationAudioPlayLargeAll-" + audioStationToAssign).click(function(){
    $("#videoPlayerControlsOuter-" + audioStationToAssign).removeClass("startedSimple").addClass("startedAll");

        $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_timeSeek.php", { doing: 4, room: myRoom, audioStation: audioStationToAssign }).done(function(resultSeek){
            document.getElementById(audioStationToAssign).currentTime = resultSeek;
            // document.getElementById(audioStationToAssign).play(); 
            $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_timeSeek.php", { doing: 1, room: myRoom, audioStation: audioStationToAssign, seek: document.getElementById(audioStationToAssign).currentTime });
        });  
 });
 $(".audioStationAudioStopLargeAll-" + audioStationToAssign).click(function(){
    $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_timeSeek.php", { doing: 2, room: myRoom, audioStation: audioStationToAssign, seek: document.getElementById(audioStationToAssign).currentTime });
    $("#videoPlayerControlsOuter-" + audioStationToAssign).removeClass("startedSimple").removeClass("startedAll");
 });
    document.getElementById(audioStationToAssign).oncanplaythrough = function(){
    $("#videoPlayerInnerSeekBar-" + audioStationToAssign).slider(
        {   animate: "fast",
            range: "max",
            min: 0,
            max: Math.round(document.getElementById(audioStationToAssign).duration),
            step: 1,
            start: function(abc, ui){
                $("#videoPlayerControlsInner-" + audioStationToAssign).addClass("seeking");
                if ($("#videoPlayerControlsOuter-" + audioStationToAssign).hasClass("startedSimple")) { document.getElementById(audioStationToAssign).pause(); } else {
                $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_timeSeek.php", { doing: 2, room: myRoom, audioStation: audioStationToAssign, seek: ui.value }); }
            },
            slide: function(abc, ui){
                document.getElementById(audioStationToAssign).currentTime = ui.value;
            },
            stop: function(abc, ui){
                $("#videoPlayerControlsInner-" + audioStationToAssign).removeClass("seeking");
                if ($("#videoPlayerControlsOuter-" + audioStationToAssign).hasClass("startedSimple")) { document.getElementById(audioStationToAssign).play(); } else {
                $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_timeSeek.php", { doing: 1, room: myRoom, audioStation: audioStationToAssign, seek: ui.value }); 
            }
            },
            create: function(){
    $("#videoPlayerControlsOuter-" + audioStationToAssign).mouseover(function(){ $("#videoPlayerControlsInner-" + audioStationToAssign).show(); });
    $(".audioStationAudioStopLargeSimple-" + audioStationToAssign).mouseleave(function(){ if (!$("#videoPlayerControlsInner-" + audioStationToAssign)[0].matches('.seeking')) { $("#videoPlayerControlsInner-" + audioStationToAssign).hide(); }});
    $(".audioStationAudioStopLargeAll-" + audioStationToAssign).mouseleave(function(){ if (!$("#videoPlayerControlsInner-" + audioStationToAssign)[0].matches('.seeking')) { $("#videoPlayerControlsInner-" + audioStationToAssign).hide(); } });
    $("#videoPlayerInnerSeekBar-" + audioStationToAssign).mouseleave(function(){ if ($(".audioStationAudioStopLargeSimple-" + audioStationToAssign).is(":visible")) { if (!$("#videoPlayerControlsInner-" + audioStationToAssign)[0].matches('.seeking')) { $("#videoPlayerControlsInner-" + audioStationToAssign).hide(); } } });
    $("#videoPlayerControlsOuter-" + audioStationToAssign).mouseleave(function(){ if (!$("#videoPlayerControlsInner-" + audioStationToAssign)[0].matches('.seeking')) { $("#videoPlayerControlsInner-" + audioStationToAssign).hide(); } });
    document.getElementById(audioStationToAssign).ontimeupdate = function(){ 

        $("#audioStationAudioDiv-" + audioStationToAssign).css("bottom", 28 + (322 - (322/100 * (document.getElementById(audioStationToAssign).currentTime / document.getElementById(audioStationToAssign).duration * 100))));
        $("#videoPlayerInnerSeekBar-" + audioStationToAssign).slider("value",document.getElementById(audioStationToAssign).currentTime);
        if ($("#videoPlayerControlsOuter-" + audioStationToAssign).hasClass("startedAll")) {
        if (tuq[audioStationToAssign] % 100 == 0) {
            // console.log(document.getElementById(audioStationToAssign).currentTime);
            $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_timeSeek.php", { doing: 3, room: myRoom, audioStation: audioStationToAssign, seek: document.getElementById(audioStationToAssign).currentTime });        
        }}
        tuq[audioStationToAssign]++;
}
        
        /* if ($("#" + audioStationToAssign).parent(".tree").parent(".move").attr("playing") == 1) {
            $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_timeSeek.php", { doing: 4, room: myRoom, audioStation: audioStationToAssign }).done(function(resultSeek){
                document.getElementById(audioStationToAssign).muted = true;
                document.getElementById(audioStationToAssign).currentTime = resultSeek; 
                document.getElementById(audioStationToAssign).play();
                document.body.addEventListener("click", function () { document.getElementById(audioStationToAssign).muted = false; });
            })      
        } */
    }
});
doLettercoinPayments($("#" + audioStationToAssign).parent().find(".fleoAtHat").attr("id").replace("fleoAtHat",""), audioStationToAssign);
$("#" + audioStationToAssign).parent(".tree").css({"min-height":$(this).height(),"filter":"drop-shadow(0 -10px 40px #0000007f)"});
    }
    
    

};

if ($(this).is("audio")) { 

    document.getElementById(audioStationToAssign).onplay = function(){
        
        $(".audioStationAudioPlay-" + audioStationToAssign).hide(); $(".audioStationAudioStop-" + audioStationToAssign).show();
            
    }; 

document.getElementById(audioStationToAssign).onended = function(){  

    $("#letterCoinMillAudioStationTextLettercoin-1-" + audioStationToAssign).effect( "pulsate", {times:4}, 1400, function(){ $("#letterCoinMillAudioStationTextLettercoin-1-" + audioStationToAssign).css({"pointer-events":"auto", "background":"green"}); });  
    $(".audioStationAudioStop-" + audioStationToAssign).hide(); $(".audioStationAudioPlay-" + audioStationToAssign).show(); $("#audioStationAudioDiv-" + audioStationToAssign).animate({"bottom":"350px"}, 1000);
    audFunk[audioStationToAssign]();
    $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_timeSeek.php", { doing: 2, room: myRoom, audioStation: audioStationToAssign, seek: 0 });
    $(".audioStationAudioPlay-" + audioStationToAssign).removeClass("startedSelf");

};
document.getElementById(audioStationToAssign).onpause = function(){ 
    
$(".audioStationAudioStop-" + audioStationToAssign).hide(); 
$(".audioStationAudioPlay-" + audioStationToAssign).show();
$(".audioStationAudioPlay-" + audioStationToAssign).removeClass("startedSelf");

};

$(".audioStationAudioPlay-" + audioStationToAssign).click(function(){ 
    $(".audioStationAudioPlay-" + audioStationToAssign).addClass("startedSelf");
    if (audioStationToAssign == "audStat-16713162473-01Mete" || audioStationToAssign == "audStat45614724") {
        $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_timeSeek.php", { doing: 1, room: myRoom, audioStation: audioStationToAssign, seek: 0 }); 
    } else {   
        $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_timeSeek.php", { doing: 4, room: myRoom, audioStation: audioStationToAssign }).done(function(resultSeek){
            document.getElementById(audioStationToAssign).currentTime = resultSeek;
            document.getElementById(audioStationToAssign).play(); 
            $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_timeSeek.php", { doing: 1, room: myRoom, audioStation: audioStationToAssign, seek: document.getElementById(audioStationToAssign).currentTime });
        });  
    }
});
$(".audioStationAudioStop-" + audioStationToAssign).click(function(){ 
    
    $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_timeSeek.php", { doing: 2, room: myRoom, audioStation: audioStationToAssign, seek: document.getElementById(audioStationToAssign).currentTime });
 });


    document.getElementById(audioStationToAssign).oncanplaythrough = function(){
    
    document.getElementById(audioStationToAssign).ontimeupdate = function(){ 
        if (audioStationToAssign == "audStat-16713162473-01Mete" || audioStationToAssign == "audStat45614724") { } else {
        $("#audioStationAudioDiv-" + audioStationToAssign).css("bottom", 28 + (322 - (322/100 * (document.getElementById(audioStationToAssign).currentTime / document.getElementById(audioStationToAssign).duration * 100))));
        $("#videoPlayerInnerSeekBar-" + audioStationToAssign).slider("value",document.getElementById(audioStationToAssign).currentTime);
        if ($(".audioStationAudioPlay-" + audioStationToAssign).hasClass("startedAll")) {
        if (tuq[audioStationToAssign] % 20 == 0) {
            // console.log(document.getElementById(audioStationToAssign).currentTime);
            $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_timeSeek.php", { doing: 3, room: myRoom, audioStation: audioStationToAssign, seek: document.getElementById(audioStationToAssign).currentTime });        
        }
        tuq[audioStationToAssign]++; 
    }
}
}
        
        /* if ($("#" + audioStationToAssign).parent(".tree").parent(".move").attr("playing") == 1) {
            $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_timeSeek.php", { doing: 4, room: myRoom, audioStation: audioStationToAssign }).done(function(resultSeek){
                document.getElementById(audioStationToAssign).muted = true;
                document.getElementById(audioStationToAssign).currentTime = resultSeek; 
                document.getElementById(audioStationToAssign).play();
                document.body.addEventListener("click", function () { document.getElementById(audioStationToAssign).muted = false; });
            })      
        } */
        doLettercoinPayments($("#" + audioStationToAssign).parent().find(".fleoAtHat").attr("id").replace("fleoAtHat",""), audioStationToAssign);
    }

    }
    

});


};

function socketDataConnect() {            
///// fleo.at socketdata connection 

// $("#goReal").click();
$.post("/fleo.at-php/fleo.at_sensorsStart.php", { doing: 1, fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") });

var quiet = 0;

var locationBound = 0;
var geoStarted = 0;
var geoOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 200
  };
var myGeoLat = "noLatYet"; var myGeoLon = "noLonYet";
$("#unbindLocation").click(function(){
locationBound = 0;
$("#drive").show();
$("#speedPlus").show();
$("#speedMinus").show();
$("#bindLocation").show();
$("#unbindLocation").hide();
});
function geoSuccess(position){
    myGeoLat = position.coords.latitude; myGeoLon = position.coords.longitude;
    $("#sensorsLat").html(position.coords.latitude);
    ws.send(JSON.stringify({type:"geoLat",value:position.coords.latitude,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
    $("#sensorsLon").html(position.coords.longitude);
    ws.send(JSON.stringify({type:"geoLon",value:position.coords.longitude,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
if (locationBound == 1) { moveWithTrain(Math.trunc(position.coords.longitude * -1000), Math.trunc(position.coords.latitude * -300), 200, 0, 0); }
}
function geoError() {
    $("#unbindLocation").css("background","#ff0000").animate({"background-color":"rgb(214, 214, 195)"},5000);
}
$("#bindLocation").click(function(){
locationBound = 1;
if (geoStarted == 1 && myGeoLat !== "noLatYet" && myGeoLon !== "noLonYet") {
    moveWithTrain(Math.trunc(myGeoLon * -1000), Math.trunc(myGeoLat * -300), 200, 0, 0);
}
if (geoStarted == 0) { 
    geoStarted = 1; 
    watchPosition = navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);    
}
$("#drive").hide();
$("#speedPlus").hide();
$("#speedMinus").hide();
$("#bindLocation").hide();
$("#unbindLocation").show();
clearInterval(drive);
driving = 0;
$("#drive").css("background","rgb(214, 214, 195)");
});

var sensorsStarted = 0;
if (window.self == window.top) { var isWindowTop = 1; } else { var isWindowTop = 0; }  // workaround

$("#startSensors").click(function(){
    sensorsStarted = 1; 

    $("#startSensors").hide();
    
    $("#menuBottom").append('<div id="sensorsWallOnOff" class="cockpit menuItem">Show Data</div>');                      
                          
    $("#sensorsWallOnOff").click(function(){
    $("#sensorsWall").slideToggle("slow");
    });
    sensorsWall();
})



function sensorsWall() {
setTimeout(function(){
$("body").append('<div id="sensorsWall" style="pointer-events:none;position:fixed;width:300px;height:420px;bottom:0;right:0;background:#ffffff4f;color:#ffffff7f;display:none;"></div>'); // ja, was soll ich sagen: Die Frage ruhte hier für drei Wochen. War wohl ein Systemfehler, die sensorsWall zu blocken.

$("#sensorsWall").append('<span>Lat</span><div id="sensorsLat">empty</div><span>Lon</span><div id="sensorsLon">empty</div><span>Heading</span><div id="sensorsHeading">empty</div>');

var geoStarted = 0;
var geoOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 200
  };

function geoSuccess(position){
if (wsOk == 1 && isWindowTop == 1) { $("#sensorsLat").html(position.coords.latitude); }
ws.send(JSON.stringify({type:"geoLat",value:position.coords.latitude,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
if (wsOk == 1 && isWindowTop == 1) { $("#sensorsLon").html(position.coords.longitude); } 
ws.send(JSON.stringify({type:"geoLon",value:position.coords.longitude,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
if (wsOk == 1 && isWindowTop == 1) { $("#sensorsHeading").html(position.coords.heading); } 
ws.send(JSON.stringify({type:"geoHeading",value:position.coords.heading,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));

}
function geoError() {
    
}

watchPosition = navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);   

var deviceOrientation = FULLTILT.getDeviceOrientation({'type': 'world'});

$("#sensorsWall").append('<span>orientationCompass</span><div id="orientationAlpha">empty</div><span>orientationUpDown</span><div id="orientationBeta">empty</div><span>orientationTurn</span><div id="orientationGamma">empty</div><span>webkitCompass</span><div id="webkitCompass">empty</div><span>webkitCompassAccuracy</span><div id="webkitCompassAccuracy">empty</div>');

deviceOrientation.then(function(orientationData) {

orientationData.listen(function() {

var rawEvent = orientationData.getLastRawEventData();

if (wsOk == 1 && isWindowTop == 1) { $("#orientationAlpha").html(rawEvent.alpha); } ws.send(JSON.stringify({type:"orientationAlpha",value:rawEvent.alpha,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
if (wsOk == 1 && isWindowTop == 1) { $("#orientationBeta").html(rawEvent.beta); } ws.send(JSON.stringify({type:"orientationBeta",value:rawEvent.beta,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
if (wsOk == 1 && isWindowTop == 1) { $("#orientationGamma").html(rawEvent.gamma); } ws.send(JSON.stringify({type:"orientationGamma",value:rawEvent.gamma,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
ws.send(JSON.stringify({type:"orientationCompass",value:rawEvent.absolute,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
if (wsOk == 1 && isWindowTop == 1) { $("#webkitCompass").html(rawEvent.beta); } ws.send(JSON.stringify({type:"webkitCompass",value:rawEvent.beta,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
if (wsOk == 1 && isWindowTop == 1) { $("#webkitCompassAccuracy").html(rawEvent.webkitCompassAccuracy); } ws.send(JSON.stringify({type:"webkitCompassAccuracy",value:rawEvent.webkitCompassAccuracy,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
});
});

$("#sensorsWall").append('<span>AccX</span><div id="sensorsAccx">empty</div><span>AccY</span><div id="sensorsAccy">empty</div><span>AccZ</span><div id="sensorsAccz">empty</div>');
let acl = null;
try {
acl = new Accelerometer({ frequency: 10 });
if (acl) {
acl.addEventListener("reading", () => {
if (wsOk == 1 && isWindowTop == 1) { $("#sensorsAccx").html(acl.x); } ws.send(JSON.stringify({type:"accX",value:acl.x,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
if (wsOk == 1 && isWindowTop == 1) { $("#sensorsAccy").html(acl.y); } ws.send(JSON.stringify({type:"accY",value:acl.y,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
if (wsOk == 1 && isWindowTop == 1) { $("#sensorsAccz").html(acl.z); } ws.send(JSON.stringify({type:"accZ",value:acl.z,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
});
acl.start();
}
} catch (error) { }

$("#sensorsWall").append('<span>GraX</span><div id="sensorsGrax">empty</div><span>GraY</span><div id="sensorsGray">empty</div><span>GraZ</span><div id="sensorsGraz">empty</div>');
let gravitySensor = null;
try {
gravitySensor = new GravitySensor({frequency: 10});
if (gravitySensor) {
gravitySensor.addEventListener("reading", (e) => {
  if (wsOk == 1 && isWindowTop == 1) { $("#sensorsGrax").html(gravitySensor.x); } ws.send(JSON.stringify({type:"graX",value:gravitySensor.x,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
  if (wsOk == 1 && isWindowTop == 1) { $("#sensorsGray").html(gravitySensor.y); } ws.send(JSON.stringify({type:"graY",value:gravitySensor.y,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
  if (wsOk == 1 && isWindowTop == 1) { $("#sensorsGraz").html(gravitySensor.z); } ws.send(JSON.stringify({type:"graZ",value:gravitySensor.z,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
});
gravitySensor.start();
}
} catch (error) { }

$("#sensorsWall").append('<span>GyrX</span><div id="sensorsGyrx">empty</div><span>GyrY</span><div id="sensorsGyry">empty</div><span>GyrZ</span><div id="sensorsGyrz">empty</div>');
let gyroscope = null;
try {
gyroscope = new Gyroscope({frequency: 10});
if (gyroscope) {
gyroscope.addEventListener('reading', (e) => {
  if (wsOk == 1 && isWindowTop == 1) { $("#sensorsGyrx").html(gyroscope.x); } ws.send(JSON.stringify({type:"gyrX",value:gyroscope.x,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
  if (wsOk == 1 && isWindowTop == 1) { $("#sensorsGyry").html(gyroscope.y); } ws.send(JSON.stringify({type:"gyrY",value:gyroscope.y,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
  if (wsOk == 1 && isWindowTop == 1) { $("#sensorsGyrz").html(gyroscope.z); } ws.send(JSON.stringify({type:"gyrZ",value:gyroscope.z,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
});
gyroscope.start();
}
} catch (error) { }

$("#sensorsWall").append('<span>AccLX</span><div id="sensorsAccLinx">empty</div><span>AccLY</span><div id="sensorsAccLiny">empty</div><span>AccLZ</span><div id="sensorsAcclinz">empty</div>');
let laSensor = null;
try {
laSensor = new LinearAccelerationSensor({frequency: 10});
if (laSensor) {
laSensor.addEventListener('reading', (e) => {
  if (wsOk == 1 && isWindowTop == 1) { $("#sensorsAccLinx").html(laSensor.x); } ws.send(JSON.stringify({type:"accLX",value:laSensor.x,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
  if (wsOk == 1 && isWindowTop == 1) { $("#sensorsAccLiny").html(laSensor.y); } ws.send(JSON.stringify({type:"accLY",value:laSensor.y,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
  if (wsOk == 1 && isWindowTop == 1) { $("#sensorsAccLinz").html(laSensor.z); } ws.send(JSON.stringify({type:"accLZ",value:laSensor.z,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
});
laSensor.start();
}
} catch (error) { }

$("#sensorsWall").append('<span>MagX</span><div id="sensorsMagx">empty</div><span>MagY</span><div id="sensorsMagy">empty</div><span>MagZ</span><div id="sensorsMagz">empty</div>');
let magSensor = null;
try {
magSensor = new Magnetometer({frequency: 10})
if (magSensor) {
magSensor.addEventListener('reading', (e) => {
  if (wsOk == 1 && isWindowTop == 1) { $("#sensorsMagx").html(magSensor.x); } ws.send(JSON.stringify({type:"magX",value:magSensor.x,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
  if (wsOk == 1 && isWindowTop == 1) { $("#sensorsMagy").html(magSensor.y); } ws.send(JSON.stringify({type:"magY",value:magSensor.y,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
  if (wsOk == 1 && isWindowTop == 1) { $("#sensorsMagz").html(magSensor.z); } ws.send(JSON.stringify({type:"magZ",value:magSensor.z,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
});
magSensor.start();
}
} catch (error) { }
}, 2000);

$("#sensorsWall").append('<span>Amb</span><div id="sensorsAmb">empty</div>');
let sensorAmb = null;
try {
if ("AmbientLightSensor" in window) {
  sensorAmb = new AmbientLightSensor();
  sensorAmb.addEventListener("reading", (event) => {
    if (wsOk == 1 && isWindowTop == 1) { $("#sensorsAmb").html(sensor.illuminance); } 
    ws.send(JSON.stringify({type:"ambL",value:sensor.illuminance,fleoNum:(myNumber[0] + myNumber[2]).replace("#", "")}));
  });
  sensor.start();
}
} catch (error) { }
}
}

///// fleo.at_recordmp3.js

//main block for doing the audio recording
var doReplayAndRecord = 1;
var replayAndRecordBuilt = 0;
var translationSrc;
$("body").arrive("#push2TalkUser", function() {

    chunks = [];
    /* const constraints = { audio: { sampleSize: 16, channelCount: monoOrStereo, sampleRate: 48000, echoCancellation: false, noiseSuppression: false, autoGainControl: false }};
        navigator.mediaDevices.getUserMedia(constraints); */
    $("#push2TalkOwnMute").click(function(){ document.getElementById("callerAudio-Own").volume = 0; $("#push2TalkOwnMute").toggle(); $("#push2TalkOwnUnmute").toggle(); });
    $("#push2TalkOwnUnmute").click(function(){ document.getElementById("callerAudio-Own").volume = 1; $("#push2TalkOwnUnmute").toggle(); $("#push2TalkOwnMute").toggle(); });
        
    const fleoRecord = document.getElementById('push2TalkUser');
    const fleoStop = document.getElementById('push2TalkUserUpload');
    // const fleoCanvas = document.querySelector('.fleoVisualizer');
    
    // visualiser setup - create web audio api context and canvas
    
    //  var ourMainTrack = new MediaStream(); 
      // console.log('getUserMedia supported.');
      $("#push2TalkUserCheck").slideUp();
    
      $(".videoWallManAudio").each(function(){
        let audioTrackToSet = $(this).attr("id");
        let recTrackName = decodeURI($(this).attr("data-audiosessionname"));

        $("#audioRecOthers").append('<div id="audioRec-' + audioTrackToSet + '" style="width:500px;height:60px;position:relative;display:inline-block;"><div id="audioRecMan-' + audioTrackToSet + '" class="audioRecTrackName" style="position:relative;width:170px;height:30px;display:inline-block;">' + recTrackName + '</div><div id="audioRecOnOff' + audioTrackToSet + '" class="audioRecTrackOnOff" data-onoff="on" style="position:absolute;width:30px;height:30px;background:red;display:inline-block;z-index:100;right:300px;top:0;text-align:center;line-height:30px;cursor:pointer;">G</div><div id="audioRecVolBypass' + audioTrackToSet + '" class="audioRecTrackVolBypass" data-onoff="off" style="position:absolute;width:30px;height:30px;background:gray;display:inline-block;z-index:100;right:300px;top:30px;text-align:center;line-height:30px;cursor:pointer;">V</div><div class="volumeClickRec' + audioTrackToSet + '" style="position:absolute;z-index:10;bottom:0;left:200px;height:60px;width:300px;cursor:pointer;"></div><div style="width:300px;height:50px;position:absolute;bottom:10px;left:200px;z-index:2;" class="volumeMeterRec' + audioTrackToSet + '"></div><div style="width:300px;height:50px;position:absolute;bottom:10px;left:200px;z-index:1;" class="volumeMeterGrayRec' + audioTrackToSet + '"></div><div style="background:#ff0000;width:150px;height:10px;position:absolute;bottom:0;left:200px;z-index:1;" class="volumeRec' + audioTrackToSet + '"></div><div style="background:blue;width:300px;height:2px;position:absolute;bottom:0;left:200px;z-index:2;" class="volumeSoundRec' + audioTrackToSet + '"></div></div>');
    
        volumeBypassIsOnOff[audioTrackToSet] = "off";
        volumeOld[audioTrackToSet] = 1;
    
        $(".volumeMeterRec" + audioTrackToSet).html($(".volumeMeter" + audioTrackToSet).children().detach());
        $(".volumeMeterGrayRec" + audioTrackToSet).html($(".volumeMeterGray" + audioTrackToSet).children().detach());
        
        mediaRecorder[audioTrackToSet] = new MediaRecorder(fleoMediaStream[audioTrackToSet].stream);
    
        $(document).on("click", "#audioRecOnOff" + audioTrackToSet, function (e) { 
            if ($("#audioRecOnOff" + audioTrackToSet).attr("data-onoff") == "on") {
            gainOld[audioTrackToSet] = gainNode[audioTrackToSet].gain.value;
            gainNode[audioTrackToSet].gain.setValueAtTime(0, audioCtxVolume[audioTrackToSet].currentTime + 0.005);
            $(".volumeRec" + audioTrackToSet).css("width", "0px");
            if (volumeBypassIsOnOff[audioTrackToSet] == "on")  { 
                volumeOld[audioTrackToSet] = 0;
                $("#" + audioTrackToSet)[0].volume = 0;
                $(".volumeSoundRec" + audioTrackToSet).css("width", "0px"); 
            } 
            $("#audioRecOnOff" + audioTrackToSet).attr("data-onoff","off");
            $("#audioRecOnOff" + audioTrackToSet).css("background-color","gray");
            } else {
                gainNode[audioTrackToSet].gain.setValueAtTime(parseFloat(gainOld[audioTrackToSet]), audioCtxVolume[audioTrackToSet].currentTime + 0.005);
                $(".volumeRec" + audioTrackToSet).css("width", parseFloat(gainOld[audioTrackToSet]) * 150 + "px");
                if (volumeBypassIsOnOff[audioTrackToSet] == "on")  { 
                    $(".volumeSoundRec" + audioTrackToSet).css("width", volumeOld[audioTrackToSet] * 300 + "px"); 
                } 
                $("#audioRecOnOff" + audioTrackToSet).attr("data-onoff","on");
                $("#audioRecOnOff" + audioTrackToSet).css("background-color","red");
            }
        });
    
        $(document).on("click", "#audioRecVolBypass" + audioTrackToSet, function (e) { 
            if ($("#audioRecVolBypass" + audioTrackToSet).attr("data-onoff") == "off") {
            volumeOld[audioTrackToSet] = $("#" + audioTrackToSet)[0].volume;
            $("#" + audioTrackToSet)[0].volume = 0;
            volumeBypassIsOnOff[audioTrackToSet] = "on";
            $("#audioRecVolBypass" + audioTrackToSet).attr("data-onoff","on");
            $("#audioRecVolBypass" + audioTrackToSet).css("background-color","blue");
            } else {
                $("#" + audioTrackToSet)[0].volume = volumeOld[audioTrackToSet];
                volumeBypassIsOnOff[audioTrackToSet] = "off";
                $("#audioRecVolBypass" + audioTrackToSet).attr("data-onoff","off");
                $("#audioRecVolBypass" + audioTrackToSet).css("background-color","gray");
            }
        });
    
        $(document).on("click", ".volumeClickRec" + audioTrackToSet, function (e) { 
            let VoffsetX = $(".volumeClickRec" + audioTrackToSet).offset();
            let VspotX = ((e.pageX - VoffsetX.left)) * 2;
            gainNode[audioTrackToSet].gain.setValueAtTime(parseFloat(VspotX / 300), audioCtxVolume[audioTrackToSet].currentTime + 0.005);
            if (volumeBypassIsOnOff[audioTrackToSet] == "on")  { 
                $("#" + audioTrackToSet)[0].volume = (1 / 600) * VspotX;
                $(".volume" + audioTrackToSet).css("height", ((1 / 6) * VspotX) + "%");
                $(".volumeSoundRec" + audioTrackToSet).css("width", ((1 / 2) * VspotX) + "px"); 
            }
            $(".volumeRec" + audioTrackToSet).css("width", ((1 / 2) * VspotX) + "px");
            $("#audioRecOnOff" + audioTrackToSet).attr("data-onoff","on");
            $("#audioRecOnOff" + audioTrackToSet).css("background-color","red");
        });   
    
        if (typeof mediaRecorderArray === 'undefined') {
            var mediaRecorderArray = [];
            Object.keys(mediaRecorder).forEach((key) => {
            mediaRecorderArray.push({
            name: key,
            content: mediaRecorder[key]
                })
            }); }
            else {
            };
    
    // console.log(mediaRecorder);
    // console.log(mediaRecorderArray);
    });  
    
    setTimeout(function(){
    
    mediaRecorderArray[mediaRecorderArray.length - 1].content.onstop = function(e){
        if (!fd) { 
            var fd = new FormData(); }  
            streamsNum = 0; 
        for (let i = 0; i < mediaRecorderArray.length; i++) {
                 
            
            // console.log("1");
            // console.log(mediaRecorderArray[i].content.stream);
            blobToRec[i] = new Blob(chunks[i], { 'type' : 'audio/webm; codecs=opus' });
            if (blobToRec[i].size > 0){
                streamsNum++;
            if (!recReader[i]) { recReader[i] = new FileReader(); }
            recReader[i].readAsDataURL(blobToRec[i]);
            recReader[i].onloadend = (function() { 
                      
                    fd.append('data' + i, recReader[i].result); 
        })}; 
            // console.log(blobToRec[i]);      
            }
    
        console.log("Recorder stopped");
        for (let i = 0; i < mediaRecorderArray.length; i++) {
        if (i == mediaRecorderArray.length - 1)
        {
    
            var mp3Name = encodeURIComponent((myNumber[0] + myNumber[2]).replace("#", "") + '_audio_recording_' + new Date().getTime() + '.webm');
                console.log("mp3name = " + mp3Name);        
                gotFirstFileDataFromMediarecorders = 1;
                fd.append('fname', mp3Name);
                fd.append('streamsNum', streamsNum);
    
        setTimeout(function(){
     
            $.ajax({
                url: "https://" + mainDomain + "/fleo.at-php/uploadPush2Talk.php",
                data: fd,
                type: "POST",
                contentType: false, 
                processData: false}).done(function(data) {
              $("#audioStationUrl").val(data);
              $("#audioStationUrl").trigger("input");  
            });
        
      $("#push2TalkUser").toggle();
      $("#push2TalkUserUpload").toggle();
      $("#push2TalkRec").toggle();
      $("#push2TalkRecUpload").toggle();
      $("#push2TalkReplayRec").show();
    
      if (replayAndRecordBuilt == 0) {
      
        $("#audioRecOthers").append('<div id="audioReplayRecReplay" style="width:500px;height:60px;position:relative;display:inline-block;"><div id="audioReplayRecMan-Replay" class="audioReplayRecTrackName" style="position:relative;width:170px;height:30px;display:inline-block;">Replay & Record</div><div id="audioRecReplayOnOff" data-onoff="on" style="position:absolute;width:30px;height:30px;background:red;display:inline-block;z-index.100;right:300px;top:0;text-align:center;line-height:30px;cursor:pointer;">G</div><div id="audioRecReplayVolBypass" data-onoff="off" style="position:absolute;width:30px;height:30px;background:gray;display:inline-block;z-index.100;right:300px;top:30px;text-align:center;line-height:30px;cursor:pointer;">V</div><div class="volumeClickReplayRecReplay" style="position:absolute;z-index:10;bottom:0;left:200px;height:60px;width:300px;cursor:pointer;"></div>' + 
        '<div style="width:300px;height:50px;position:absolute;bottom:10px;left:200px;z-index:2;" class="volumeMeterReplayRecReplay"><div class="volumen-wrapper-replayRecReplay"><div class="led-callerAudio-replayRecReplay"></div><div class="led-callerAudio-replayRecReplay"></div><div class="led-callerAudio-replayRecReplay"></div><div class="led-callerAudio-replayRecReplay"></div><div class="led-callerAudio-replayRecReplay"></div><div class="led-callerAudio-replayRecReplay"></div><div class="led-callerAudio-replayRecReplay"></div><div class="led-callerAudio-replayRecReplay"></div><div class="led-callerAudio-replayRecReplay"></div><div class="led-callerAudio-replayRecReplay"></div></div></div><div style="width:300px;height:50px;position:absolute;bottom:10px;left:200px;z-index:1;" class="volumeMeterGrayReplayRecReplay"><div class="volumen-wrapper-replayRecReplay"><div class="ledGray-callerAudio-replayRecReplay"></div><div class="ledGray-callerAudio-replayRecReplay"></div><div class="ledGray-callerAudio-replayRecReplay"></div><div class="ledGray-callerAudio-replayRecReplay"></div><div class="ledGray-callerAudio-replayRecReplay"></div><div class="ledGray-callerAudio-replayRecReplay"></div><div class="ledGray-callerAudio-replayRecReplay"></div><div class="ledGray-callerAudio-replayRecReplay"></div><div class="ledGray-callerAudio-replayRecReplay"></div><div class="ledGray-callerAudio-replayRecReplay"></div></div></div><div style="background:#ff0000;width:150px;height:10px;position:absolute;bottom:0;left:200px;z-index:1;" class="volumeReplayRecReplay"></div><div style="background:blue;width:300px;height:2px;position:absolute;bottom:0;left:200px;z-index:1;" class="volumeSoundReplayRecReplay"></div></div>');
        if(!audioCtxVolume["callerAudio-Replay"]) {
            audioCtxVolume["callerAudio-Replay"] = new AudioContext();
          }
    
          gainNode["callerAudio-Replay"] = audioCtxVolume["callerAudio-Replay"].createGain();
    
          volumeBypassIsOnOff["callerAudio-Replay"] = "off";
          volumeOld["callerAudio-Replay"] = 1;
    
          $(document).on("click", "#audioRecReplayOnOff", function (e) { 
            if ($("#audioRecReplayOnOff").attr("data-onoff") == "on") {
            gainOld["callerAudio-Replay"] = gainNode["callerAudio-Replay"].gain.value;
            gainNode["callerAudio-Replay"].gain.setValueAtTime(0, audioCtxVolume["callerAudio-Replay"].currentTime + 0.005);
            $(".volumeReplayRecReplay").css("width", "0px");
            if (volumeBypassIsOnOff["callerAudio-Replay"] == "on")  { 
                volumeOld["callerAudio-Replay"] = 0;
                myAudioReplay.volume = 0;
                $(".volumeSoundReplayRecReplay").css("width", "0px"); 
            } 
            $("#audioRecReplayOnOff").attr("data-onoff","off");
            $("#audioRecReplayOnOff").css("background-color","gray");
            } else {
                gainNode["callerAudio-Replay"].gain.setValueAtTime(parseFloat(gainOld["callerAudio-Replay"]), audioCtxVolume["callerAudio-Replay"].currentTime + 0.005);
                $(".volumeReplayRecReplay").css("width", parseFloat(gainOld["callerAudio-Replay"]) * 150 + "px");
                if (volumeBypassIsOnOff["callerAudio-Replay"] == "on")  { 
                    $(".volumeSoundReplayRecReplay").css("width", volumeOld["callerAudio-Replay"] * 300 + "px"); 
                } 
                $("#audioRecReplayOnOff").attr("data-onoff","on");
                $("#audioRecReplayOnOff").css("background-color","red");
            }
        });
    
        $(document).on("click", "#audioRecReplayVolBypass", function (e) { 
            if ($("#audioRecReplayVolBypass").attr("data-onoff") == "off") {
            volumeOld["callerAudio-Replay"] = myAudioReplay.volume;
            myAudioReplay.volume = 0;
            volumeBypassIsOnOff["callerAudio-Replay"] = "on";
            $("#audioRecReplayVolBypass").attr("data-onoff","on");
            $("#audioRecReplayVolBypass").css("background-color","blue");
            } else {
                myAudioReplay.volume = volumeOld["callerAudio-Replay"];
                volumeBypassIsOnOff["callerAudio-Replay"] = "off";
                $("#audioRecReplayVolBypass").attr("data-onoff","off");
                $("#audioRecReplayVolBypass").css("background-color","gray");
            }
        });
    
        $(document).on("click", ".volumeClickReplayRecReplay", function (e) { 
            let VoffsetX = $(".volumeClickReplayRecReplay").offset();
            let VspotX = ((e.pageX - VoffsetX.left)) * 2;
            gainNode["callerAudio-Replay"].gain.setValueAtTime(parseFloat(VspotX / 300), audioCtxVolume["callerAudio-Replay"].currentTime + 0.005);
            if (volumeBypassIsOnOff["callerAudio-Replay"] == "on") { 
                myAudioReplay.volume = (1 / 600) * VspotX; 
                $(".volumeSoundReplayRecReplay").css("width", ((1 / 2) * VspotX) + "px");
            }
            $(".volumeReplayRecReplay").css("width", ((1 / 2) * VspotX) + "px");
            $("#audioRecReplayOnOff").attr("data-onoff","on");
            $("#audioRecReplayOnOff").css("background-color","red");
        });
        $(document).on("click", "#push2TalkReplayRec", function (e) { 
            if (doReplayAndRecord == 1) { $("#push2TalkReplayRec").css("text-decoration", "line-through"); doReplayAndRecord = 0; } else { $("#push2TalkReplayRec").css("text-decoration", "none"); doReplayAndRecord = 1; }
        });
    replayAndRecordBuilt = 1;
      }
        console.log('Previous recording processed browserside.');
        fd = "";
     },200);     
        }
    }
    }
    }, 200);
            fleoRecord.onclick = function() {
                
                recordingIntervalStartLoop = 1; // console.log("Recording 1");

                if (replayAndRecordBuilt == 1) {
                    // console.log("A");
                    
                if (doReplayAndRecord == 1) {
                    // console.log("B");
                    myAudioReplay = document.getElementById("callerAudio-Own");
                    if (audioSystemJustLoaded == 0 && recordingReset == 0) { myAudioReplay.play().then( () => {
                        myAudioReplay.captureStream = myAudioReplay.captureStream || myAudioReplay.mozCaptureStream;
                        let streamReplay = myAudioReplay.captureStream();
                          
                    async function doTheVolumeMeterReplayRec(streamReplay) { 
                        var ledColorRec = [
                            "#064dac",
                            "#064dac",
                            "#064dac",
                            "#06ac5b",
                            "#15ac06",
                            "#4bac06",
                            "#80ac06",
                            "#acaa06",
                            "#ac8b06",
                            "#ac5506",
                        ]
                        var ledColorGrayRec = [
                            "#064dac3f",
                            "#064dac3f",
                            "#064dac3f",
                            "#06ac5b3f",
                            "#15ac063f",
                            "#4bac063f",
                            "#80ac063f",
                            "#acaa063f",
                            "#ac8b063f",
                            "#ac55063f",
                        ]
                        function ledsReplay(vol) {
                            ledsVol["callerAudio-Replay"] = [...$('.led-callerAudio-replayRecReplay')];
                            let range = ledsVol["callerAudio-Replay"].slice(0, Math.round(vol));
                        
                            for (var i = 0; i < ledsVol["callerAudio-Replay"].length; i++) {
                                 ledsVol["callerAudio-Replay"][i].style.background = "#a7a7a700";
                            };
                        
                            for (var i = 0; i < range.length; i++) {
                                range[i].style.background = `${ledColorRec[i]}`;
                            };
                        }
                        function ledsGrayReplay(vol) {
                            ledsGrayVol["callerAudio-Replay"] = [...$('.ledGray-callerAudio-replayRecReplay')];
                            let range = ledsGrayVol["callerAudio-Replay"].slice(0, Math.round(vol));
                        
                            for (var i = 0; i < ledsGrayVol["callerAudio-Replay"].length; i++) {
                                ledsGrayVol["callerAudio-Replay"][i].style.background = "#a7a7a73d";
                            };
                        
                            for (var i = 0; i < range.length; i++) {
                                range[i].style.background = `${ledColorGrayRec[i]}`;
                            };
                        }
                    await audioCtxVolume["callerAudio-Replay"].audioWorklet.addModule('/fleo.at-js/fleo.at_volumeMeterProcessor.js');
                    fleoNodeSource["callerAudio-Replay"] = audioCtxVolume["callerAudio-Replay"].createMediaStreamSource(streamReplay);
                    volumeMeterNode["callerAudio-Replay"] = new AudioWorkletNode(audioCtxVolume["callerAudio-Replay"], 'vumeter');
                    volumeMeterGrayNode["callerAudio-Replay"] = new AudioWorkletNode(audioCtxVolume["callerAudio-Replay"], 'vumeter');
                    volumeMeterNode["callerAudio-Replay"].port.onmessage = event => {
                        let _volume = 0
                        let _sensibility = 1
                        if (event.data.volume) { _volume = event.data.volume; ledsReplay((_volume * 100) / _sensibility) } }
                    volumeMeterGrayNode["callerAudio-Replay"].port.onmessage = event => {
                            let _volume = 0
                            let _sensibility = 1
                            if (event.data.volume) { _volume = event.data.volume; ledsGrayReplay((_volume * 100) / _sensibility) } }
                        
                      fleoDestination["callerAudio-Replay"] = audioCtxVolume["callerAudio-Replay"].createMediaStreamDestination();
                      fleoNodeSource["callerAudio-Replay"].connect(volumeMeterGrayNode["callerAudio-Replay"]);
                      fleoNodeSource["callerAudio-Replay"].connect(gainNode["callerAudio-Replay"]);
                      fleoMediaStream["callerAudio-Replay"] = gainNode["callerAudio-Replay"].connect(fleoDestination["callerAudio-Replay"]);
                      gainNode["callerAudio-Replay"].connect(volumeMeterNode["callerAudio-Replay"]);
                                      
                      if (navigator.userAgent.indexOf("Firefox") > 0) { 
                        mediaRecorder["callerAudio-Replay"] = new MediaRecorder(fleoMediaStream["callerAudio-Replay"].stream); 
                        /* let playReplay = fleoMediaStream["callerAudio-Replay"].stream.getAudioTracks()[0];
                        playReplayStream = new MediaStream();
                        playReplayStream.addTrack(playReplay); */
                        document.getElementById("callerAudio-ReplayPlaySound").srcObject = streamReplay;
                        document.getElementById("callerAudio-ReplayPlaySound").play(); }
                      
    
                      mediaRecorderArray = [];
                      Object.keys(mediaRecorder).forEach((key) => {
                        mediaRecorderArray.push({
                         name: key,
                         content: mediaRecorder[key]
                       })
                    });
                    for (let i = 0; i < mediaRecorderArray.length; i++) {
                        mediaRecorderArray[i].content.ondataavailable = function(e) {
                            // console.log(mediaRecorderArray[i].name);
                            chunks[i].push(e.data); 
                            // console.log(chunks[i]); 
                        }
                    } 
                    // console.log(mediaRecorderArray);
                    // console.log(mediaRecorder);
                        for (let i = 0; i < mediaRecorderArray.length; i++) {    
                            // console.log("D");
                            chunks[i] = [];
                            mediaRecorderArray[i].content.start(5000);
                            // console.log(mediaRecorderArray[i].content.state);
                            }
                    }
                    doTheVolumeMeterReplayRec(streamReplay);                   
                    }) }
                } else {
                    mediaRecorderArray = [];
                    Object.keys(mediaRecorder).forEach((key) => {
                      mediaRecorderArray.push({
                       name: key,
                       content: mediaRecorder[key]
                     })
                  });
                    for (let i = 0; i < mediaRecorderArray.length; i++) {
                        mediaRecorderArray[i].content.ondataavailable = function(e) {
                            // console.log(mediaRecorderArray[i].name);
                            chunks[i].push(e.data); 
                            // console.log(chunks[i]);
                    
                    }}   
                    
                for (let i = 0; i < mediaRecorderArray.length; i++) {    
                // console.log("C");
                chunks[i] = [];
                if (mediaRecorderArray[i].name == "callerAudio-Replay") { delete mediaRecorder["callerAudio-Replay"]; delete mediaRecorderArray[i]; } else { if (mediaRecorderArray[i].content.state == "inactive") { mediaRecorderArray[i].content.start(5000); 
                    // console.log(mediaRecorderArray[i].content.state); console.log(mediaRecorderArray[i].name); 
                }}
                
                }
        
            }
            } else {
                mediaRecorderArray = [];
                Object.keys(mediaRecorder).forEach((key) => {
                  mediaRecorderArray.push({
                   name: key,
                   content: mediaRecorder[key]
                 })
              });
                for (let i = 0; i < mediaRecorderArray.length; i++) {
                    mediaRecorderArray[i].content.ondataavailable = function(e) {
                        // console.log(mediaRecorderArray[i].name);
                        chunks[i].push(e.data); 
                        // console.log(chunks[i]); 
                    }
                }   
                
            for (let i = 0; i < mediaRecorderArray.length; i++) {    
            //console.log("C");
            chunks[i] = [];
            if (mediaRecorderArray[i].name == "callerAudio-Replay") { delete mediaRecorder["callerAudio-Replay"]; delete mediaRecorderArray[i]; } else { if (mediaRecorderArray[i].content.state == "inactive") { mediaRecorderArray[i].content.start(5000); 
                // console.log(mediaRecorderArray[i].content.state); console.log(mediaRecorderArray[i].name); 
            }}
            }
        }
            
              $("#push2TalkUser").toggle();
              $("#push2TalkUserUpload").toggle();
              $("#push2TalkRec").toggle();
              $("#push2TalkRecUpload").toggle();
              $(".maennikenAudioPlay-rec").hide(); $(".maennikenAudioStop-rec").hide(); $(".maennikenAudioWhite-rec").show();

    }

        
            fleoStop.onclick = function() {
                
                recordingReset = 0;
                mediaRecorderArray = [];
                    Object.keys(mediaRecorder).forEach((key) => {
                      mediaRecorderArray.push({
                       name: key,
                       content: mediaRecorder[key]
                     })
                  });
                for (let i = 0; i < mediaRecorderArray.length; i++) {
                   
                  if (mediaRecorderArray[i].content.state == "recording" || mediaRecorderArray[i].content.state == "paused") { mediaRecorderArray[i].content.stop(); }
                  // console.log(mediaRecorderArray[i].content.state);
                  // console.log(mediaRecorderArray[i].name);
               
            }}
                    mediaRecorderArray = [];
                      Object.keys(mediaRecorder).forEach((key) => {
                        mediaRecorderArray.push({
                         name: key,
                         content: mediaRecorder[key]
                       })
                    });
                    for (let i = 0; i < mediaRecorderArray.length; i++) {
                        mediaRecorderArray[i].content.ondataavailable = function(e) {
                       // console.log(mediaRecorderArray[i].name);
                        chunks[i].push(e.data); 
                       //  console.log(chunks[i]);
                    } 
                }
    
    });
    
///// fleo.at_presenceSystem.js

var presenceSrc;
var myNumber = [];
myNumber[0] = "0000";
myNumber[1] = "no name";
myNumber[2] = "#ffffff";
var startRoom = "home";
var myRoom;
var relD, relW;
var locateHorizontal, locateVertical, bottomLocate, leftLocate;

    if ($.cookie('spacenumber') || urlForCoordsGet.has('heronumber')) {
        myNumber[3] = "familiar";
        // $("#hello").hide();
        myNumber[0] = urlForCoordsGet.get('heronumber');
        myNumber[1] = urlForCoordsGet.get('heroname');
        myNumber[2] = urlForCoordsGet.get('herocolor');
        if (location.pathname.replace("/r/", "") !== "/" && location.pathname.replace("/r/", "")) { startRoom = location.pathname.replace("/r/", ""); } else { startRoom = "home"; }
        myRoom = startRoom;
        // $("body").append('<video autoplay muted loop id="bgbgsterne" poster="/fleo.at-medien/layout/sternenhimmel.jpg"><source src="/fleo.at-medien/repertoire/space_front_320_PIxEL.mp4" type="video/mp4" id="bgbgsterneVideo"></video>');
        $("#h1title").html("This is " + mainDomain + ", room: " + myRoom);
        $("title").html("This is " + mainDomain + ", room: " + myRoom + " // " + mainDomain + " open-world hubs with content-trees");
        if ($.cookie('spacenumber')) {
            myNumber[0] = $.cookie('spacenumber');
        };
        if ($.cookie('spacename')) {
            myNumber[1] = $.cookie('spacename');
        };
        if ($.cookie('spacecolor')) {
            myNumber[2] = $.cookie('spacecolor');
        };
        $.ajax({
            beforeSend: function () {
                $("#flash").addClass("f");
            },
            type: "POST",
            url: "/fleo.at-php/present.php",
            dataType: "html",
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            data: {
                doing: 7,
                number: (myNumber[0] + myNumber[2]).replace("#", ""),
                name: myNumber[1],
                cD: sMMssM,
                cH: relationToBackground,
                cW: historyCoords,
                color: myNumber[2],
                room: myRoom,
                will: "f"
            }
        }).done(function (response) {
            Cookies.set('spacenumber', myNumber[0], { secure: true, sameSite: 'none', expires: 730 });
            Cookies.set('spacename', myNumber[1], { secure: true, sameSite: 'none', expires: 730 });
            Cookies.set('spacecolor', myNumber[2], { secure: true, sameSite: 'none', expires: 730 });
            window.history.pushState("", "", "/r/" + startRoom);
            $("#nameNumber").html('<span id="nameNumberText" onclick="changeName();" style="background:#fff;color:' +
                myNumber[2] + '">' + myNumber[1] +
                '</span>'
            )
            spacebarText = 0; 
            myNumber[3] = "known";
                $("#mapForLocator").append('<div id="maennikenSpotter-Own" class="maennikenSpotter" style="pointer-events:none;background:' + myNumber[2] + ';width:6px;height:6px;border:2px solid black;"></div>');
                // $("#mapForLocatorEurope").append('<div id="maennikenSpotterEurope-Own" class="maennikenSpotterEurope" style="pointer-events:none;background:' + myNumber[2] + ';width:2px;height:2px;border:1px solid black;"></div>');
                $("#mapForLocator").show();
                // $("#mapForLocatorEurope").show();
                if (Device_Type() !== "Mobile" && Device_Type() !== "Tablet") {
                    $("#mapBody2").css("transform", "rotateX(34deg) scale(1)");
                    $("#mapBody").css({
                        "transform": "scale(1);"
                    });
                } else {
                    $("#mapBody2").css("transform", "rotateX(34deg) scale(1)");
                    $("#mapBody").css({
                        "transform": "scale(1);"
                    });
                }
                mySpotterMapLatitude = Math.trunc(parseInt(historyCoords) / 1000) * -1;
                mySpotterMapLongitude = (parseInt(sMMssM) * -1) / 300;
                mySpotterMapLocationX = ((mySpotterMapLatitude / 360) + 0.5) * 720;
                mySpotterMapLocationY = (1 - ((mySpotterMapLongitude / 180) + 0.5)) * 360;
                $("#maennikenSpotter-Own").css({"top": mySpotterMapLocationY - 5 + "px", "left": mySpotterMapLocationX - 5 + "px"});
            $("#flash").removeClass("f");
            connectWorld();
            socketDataConnect();

$.post("/fleo.at-php/fleo.at_videoSizer.php", {
    doing: 1,
    fleoNum: (myNumber[0] + myNumber[2]).replace("#", ""),
    videoSize: 1
}); 
        });
        $("#hideExplanationDiv").click();
    } else {
        if (myNumber[0] == "0000") {
            myNumber[0] = 1000 + Math.floor(Math.random() * 4999);
            myNumber[0] = ("0000" + myNumber[0]).slice(-4);
            myNumber[2] = "#" + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
            myNumber[3] = "new";
            if (location.pathname.replace("/r/", "") !== "/" && location.pathname.replace("/r/", "")) { startRoom = location.pathname.replace("/r/", ""); } else { startRoom = "home"; }
            myRoom = startRoom;
            $("#h1title").html("This is " + mainDomain + ", room: " + myRoom);
            $("title").html("" + mainDomain + ": " + myRoom + " // open-world with content-trees");
            $.ajax({
            beforeSend: function () {
                $("#flash").addClass("f");
            },
            type: "POST",
            url: "/fleo.at-php/present.php",
            dataType: "html",
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            data: {
                doing: 5,
                number: (myNumber[0] + myNumber[2]).replace("#", ""),
                name: myNumber[1],
                cD: sMMssM,
                cH: relationToBackground,
                cW: historyCoords,
                color: myNumber[2],
                room: myRoom,
                will: "f"
            }
        }).done(function (response) {
            Cookies.set('spacenumber', myNumber[0], { secure: true, sameSite: 'none', expires: 730 });
            Cookies.set('spacename', myNumber[1], { secure: true, sameSite: 'none', expires: 730 });
            Cookies.set('spacecolor', myNumber[2], { secure: true, sameSite: 'none', expires: 730 });
            window.history.pushState("", "", "/r/" + startRoom);
            $("#nameNumber").html('<span id="nameNumberText" onclick="changeName();" style="background:#fff;color:' +
                myNumber[2] + '">' + myNumber[1] +
                '</span>'
            )
            spacebarText = 0; 
            $("#flash").removeClass("f");
            connectWorld();
            socketDataConnect();

                $.post("/fleo.at-php/fleo.at_videoSizer.php", {
                    doing: 1,
                    fleoNum: (myNumber[0] + myNumber[2]).replace("#", ""),
                    videoSize: 1
                }); 

        });		
        }}

        var changeNameVisible = 0;
	
        function changeName() {
            if (changeNameVisible == 0) {
                spacebarText = 1; 
                $("#changeNameForm").show();
                $("#chnNam").val(myNumber[1]);
                changeNameVisible = 1;
            } else {
                spacebarText = 0; 
                $("#changeNameForm").hide();
                changeNameVisible = 0;
            }
        }
    
        $("#changeNameForm").submit(function (e) {
            e.preventDefault();
    
            myNumber[1] = $("#chnNam").val();
            $.ajax({
                beforeSend: function () {
                    $("#flash").addClass("f");
    
                },
                type: "POST",
                url: "/fleo.at-php/present.php",
                dataType: "html",
                crossDomain: true,
                xhrFields: {
                    withCredentials: true
                },
                data: {
                    doing: 6,
                    number: (myNumber[0] + myNumber[2]).replace("#", ""),
                    name: myNumber[1],
                    cD: sMMssM,
                    cH: relationToBackground,
                    cW: historyCoords,
                    color: myNumber[2],
                    will: will
                }
            }).done(function (response) {
                Cookies.set('spacename', myNumber[1], { secure: true, sameSite: 'none', expires: 730 });
                heroname = myNumber[1];
                $("#nameNumber").html(
                    '<span id="nameNumberText" onclick="changeName();" style="background:#fff;color:' +
                    myNumber[2] + '">' + myNumber[1] +
                    '</span>'
                )
                spacebarText = 0; 
                $("#changeNameForm").hide();
                changeNameVisible = 0;
                $("#flash").removeClass("f");
    
            });
        });

        let personDataNameOld = [];
        var fleoPersonsDistanceOld = 0; 
        var crucDistance;
        var fleoPersonsTotal = [];
        var fleoPersonsDistance = {};
        var persVidSize = [];
        var persConn = [];
        var distanceSentOnce = [];
        var spotterMapLatitude = [];
        var spotterMapLongitude = [];
        var spotterMapLocationX = [];
        var spotterMapLocationY = [];
        $("#wrapper").prepend('<div id="maennikenWall" style="position: absolute; bottom: 616px; left: 0; width: 100%; height: 1200px; z-index:50; overflow:visible; display: flex; flex-flow: row nowrap; align-items: flex-end;"></div>');





       /*  function connectPersons(){
            if (Device_Type() !== "Mobile" && Device_Type() !== "Tablet") { 
                presenceSrc = new EventSource('https://" + mainDomain + "/fleo.at-php/presenceSystem.php?client=' + (myNumber[0] + myNumber[2]).replace("#", "")); } else {
                presenceSrc = new EventSource('https://" + mainDomain + "/fleo.at-php/presenceSystem.php?client=' + (myNumber[0] + myNumber[2]).replace("#", "") + '&mobile=1'); 
            } */
    
         /*   presenceSrc.addEventListener('open', function (e) {
                console.log("Connection to server opened (Presence 1/8th second).");
                loadVideoSystem();
            }); */
    
            

     /*       presenceSrc.addEventListener('person_moves', function (e) {
        
                var personData = JSON.parse(e.data);
if (wsOk == 0) {
                personMovesToFleoAt(personData);
}
            }); */

           

       
///// fleo.at_audioSystem

var monoOrStereo = 1;

$("body").append('<div id="monoOrStereo" style="z-index:100000;padding:4px;" title="Sound question"><p>Info: You need to be in a call now with any other persons you want to record.</p></div>');
$("body").append('<div id="thisBoxDialog"></div>');
$("#thisBoxDialog").dialog({
    title: "Make Audio Station",
    autoOpen: false,
    minWidth: 300,
      modal: true,
      beforeClose: function( event, ui ) {
        $("#push2TalkUserWants").fadeIn("slow");
        spacebarText = 0;  
        $("[class^='volumeMetercallerAudio-']").each(function(){
            let sessionAttachMeter = $(this).attr("class").replace("volumeMetercallerAudio-", "");               
            $(this).html($(".volumeMeterReccallerAudio-" + sessionAttachMeter).children().detach());
        });
        $("[class^='volumeMeterGraycallerAudio-']").each(function(){
            let sessionAttachMeterGray = $(this).attr("class").replace("volumeMeterGraycallerAudio-", "");              
            $(this).html($(".volumeMeterGrayReccallerAudio-" + sessionAttachMeterGray).children().detach());
        });
        replayAndRecordBuilt = 0;
        for (let i = 0; i < mediaRecorderArray.length; i++) {
            if (mediaRecorderArray[i].name == "callerAudio-Replay") { delete mediaRecorder["callerAudio-Replay"]; delete mediaRecorderArray[i]; }
        }
      },
      buttons: {
        "Cancel": function() {
            $(this).dialog("close");
            
        },
        "Save": function() {
            $("#savebtnAudioStation").click();
            $(this).dialog("close");
        }
      } 
});
$("#monoOrStereo").dialog({
    autoOpen: false,
    show: {
      effect: "bounce",
      duration: 1000
    },
    hide: {
      effect: "puff",
      duration: 1000
    },
    resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Cancel": function() {      
            $(this).dialog("close");               
        },
        "Ok, start": function() {
            if (location.pathname.replace("/r/", "") !== "/" && location.pathname.replace("/r/", "")) { roomWhereEdit = location.pathname.replace("/r/", ""); }
            spacebarText = 1; 
            $(this).dialog("close");
            $("#thisBoxDialog").load("https://" + mainDomain + "/fleo.at-php/fleo.at_audioStationAdd.php?client=" + (myNumber[0] + myNumber[2]).replace("#", "") + "&buildcoords=" + (historyCoords - 500) + "&builddoords=" + (sMMssM - 2) + "&room=" + roomWhereEdit);          
            $("#thisBoxDialog").dialog("open");

        }
      }
  });

$("#push2TalkUserWants").click(function(){
    if (audioConferenceConnected == 0) { 
        $("#walkAroundWithVideo").click(); 
        var waitForConnected = setInterval(function(){
            if (audioConferenceConnected == 1) { $("#push2TalkUserWants").hide(); clearInterval(waitForConnected); 
            if (location.pathname.replace("/r/", "") !== "/") { roomWhereEdit = location.pathname.replace("/r/", ""); }
            // spacebarText = 1; 
             $("#thisBoxDialog").load("https://" + mainDomain + "/fleo.at-php/fleo.at_audioStationAdd.php?client=" + (myNumber[0] + myNumber[2]).replace("#", "") + "&buildcoords=" + (historyCoords - 500) + "&builddoords=" + (sMMssM - 2) + "&room=" + roomWhereEdit); $("#thisBoxDialog").dialog("open");             
         } }, 500); 
    } else { if (location.pathname.replace("/r/", "") !== "/") { roomWhereEdit = location.pathname.replace("/r/", ""); }
    // spacebarText = 1; 
    $("#thisBoxDialog").load("https://" + mainDomain + "/fleo.at-php/fleo.at_audioStationAdd.php?client=" + (myNumber[0] + myNumber[2]).replace("#", "") + "&buildcoords=" + (historyCoords - 500) + "&builddoords=" + (sMMssM - 2) + "&room=" + roomWhereEdit); $("#thisBoxDialog").dialog("open"); 
     }
});

function doTheAudioStationStuff() {
$("#fullAgain").click();

setTimeout(function(){ $('input[name=buildnameAS]').attr("readonly",false); }, 5000);

$('input[name=buildnameAS]').on('input',function(e){ $("#audioStationBuildText").html($('input[name=buildnameAS]').val()) });

$('input[name=audioStationUrl]').on('input',function(e){ 

$("#callerAudio-Own").attr("src",$('input[name=audioStationUrl]').val());
$("#callerAudio-ReplaySound").attr("src",$('input[name=audioStationUrl]').val());

myAudioReplayPlay = document.getElementById("callerAudio-ReplaySound");
if (audioSystemJustLoaded == 0 && recordingReset == 0) { myAudioReplayPlay.play(); } 

/* .then( () => {
myAudioReplayPlay.captureStream = myAudioReplayPlay.captureStream || myAudioReplayPlay.mozCaptureStream;
let streamReplayPlay = myAudioReplayPlay.captureStream();

let playReplayPlay = streamReplayPlay.getAudioTracks()[0];

playReplayPlayStream = new MediaStream();
playReplayPlayStream.addTrack(playReplayPlay);

document.getElementById("callerAudio-ReplayPlaySound").srcObject = playReplayPlayStream;
myAudioReplayPlay.volume = 0;
document.getElementById("callerAudio-ReplayPlaySound").play();
}); */

myCodeMirror3.setValue('<audio class="audioStation" id="' + $("#monsterID").val() + '" src="' + $('input[name=audioStationUrl]').val() + '"></audio><div id="audioStationAudioDiv-' + $("#monsterID").val() + '" class="audioStationAudioDiv-' + $("#monsterID").val() + '" style="width:140px;height:140px;border:16px solid #ffffff00;text-align:center;position:absolute;bottom:350px;left:24px;pointer-events:auto;"><div class="audioStationAudioPlay-' + $("#monsterID").val() + '" style="cursor:pointer;"><img src="/fleo.at-js/push2Talk/fleoPlay.webp" style="position:absolute;top:0;left:0;width:100%;height:100%;" alt="fleo.Controls Play" /></div><div class="audioStationAudioStop-' + $("#monsterID").val() + '" style="display:none;cursor:pointer;"><img src="/fleo.at-js/push2Talk/fleoStop.webp" style="position:absolute;top:0;left:0;width:100%;height:100%;" alt="fleo.Controls Stop" /></div></div><div id="audioStationText-' + $("#monsterID").val() + '" style="font-weight:bold;pointer-events:auto;" contenteditable="true"></div><div id="letterCoinMillAudioStationTextLettercoin-1-' + $("#monsterID").val() + '" style="position:absolute;margin:auto;display:flex;align-items:center;justify-content:center;bottom:0;height:56px;left:18px;width:56px;border:2px solid gray;border-radius:30px;overflow:hidden;padding:0px;font-size:56px;text-align:center;font-family:Courier,monospace;color:yellow;"></div><div id="letterCoinMillAudioStationTextLettercoin-2-' + $("#monsterID").val() + '" style="position:absolute;margin:auto;display:flex;align-items:center;justify-content:center;bottom:0;height:56px;left:138px;width:56px;border:2px solid gray;border-radius:30px;overflow:hidden;padding:0px;font-size:56px;text-align:center;font-family:Courier,monospace;color:yellow;"></div>' +
'<img src="/fleo.at-medien/audioStation_I.webp" style="width:216px;height:704px;pointer-events:none;" class="audioStationImg" alt="audioStation" />');
myCodeMirror4.setValue('')
});

function loadAudioSystem(){

$("#audioStationTextContainer").append('<div id="push2TalkUserCheck" style="position:absolute;z-index:8000;top:0;left:0;width:200px;height:30px;cursor:pointer;background:white;color:black;border:1px solid black;border-bottom-right-radius:15px;border-bottom-left-radius:15px;text-align:center;font-size:24px;display:none;">Check Audio ...</div>' + 
'<div id="push2TalkUser" style="position:absolute;z-index:7776;top:340px;left:34px;width:140px;height:140px;cursor:pointer;"><img src="/fleo.at-js/push2Talk/fleoRec.webp" /></div>'+ 
'<div id="push2TalkUserUpload" style="position:absolute;z-index:7776;top:340px;left:34px;width:140px;height:140px;cursor:pointer;display:none;"><img src="/fleo.at-js/push2Talk/fleoRecStop.webp" /></div>' + 
'<div class="maennikenAudioWhite-rec" style="position:absolute;z-index:7776;top:170px;left:34px;width:140px;height:140px;cursor:pointer;"><img src="/fleo.at-js/push2Talk/fleoRecWhite.webp" /></div>' + 
'<div class="maennikenAudioPlay-rec" style="position:absolute;z-index:7776;top:170px;left:34px;width:140px;height:140px;cursor:pointer;display:none;"><img src="/fleo.at-js/push2Talk/fleoPlay.webp" /></div>' + 
'<div class="maennikenAudioStop-rec" style="position:absolute;z-index:7776;top:170px;left:34px;width:140px;height:140px;cursor:pointer;display:none;"><img src="/fleo.at-js/push2Talk/fleoStop.webp" /></div>');



document.getElementById("callerAudio-ReplaySound").onplay = function(){ $(".maennikenAudioWhite-rec").hide(); $(".maennikenAudioPlay-rec").hide(); $(".maennikenAudioStop-rec").show(); };
document.getElementById("callerAudio-ReplaySound").onended = function(){ $(".maennikenAudioStop-rec").hide(); $(".maennikenAudioPlay-rec").show(); };
document.getElementById("callerAudio-ReplaySound").onpause = function(){ $(".maennikenAudioStop-rec").hide(); $(".maennikenAudioPlay-rec").show(); };
document.getElementById("callerAudio-ReplayPlaySound").onplay = function(){ $(".maennikenAudioWhite-rec").hide(); $(".maennikenAudioPlay-rec").hide(); $(".maennikenAudioStop-rec").show(); };
document.getElementById("callerAudio-ReplayPlaySound").onended = function(){ $(".maennikenAudioStop-rec").hide(); $(".maennikenAudioPlay-rec").show(); };
document.getElementById("callerAudio-ReplayPlaySound").onpause = function(){ $(".maennikenAudioStop-rec").hide(); $(".maennikenAudioPlay-rec").show(); };
document.getElementById("callerAudio-Own").onplay = function(){ $(".maennikenAudioWhite-rec").hide(); $(".maennikenAudioPlay-rec").hide(); $(".maennikenAudioStop-rec").show(); };
document.getElementById("callerAudio-Own").onended = function(){ $(".maennikenAudioStop-rec").hide(); $(".maennikenAudioPlay-rec").show(); };
document.getElementById("callerAudio-Own").onpause = function(){ $(".maennikenAudioStop-rec").hide(); $(".maennikenAudioPlay-rec").show(); };
$(".maennikenAudioPlay-rec").click(function(){ if (audioSystemJustLoaded == 0 && recordingReset == 0) { document.getElementById("callerAudio-Own").play(); } });
$(".maennikenAudioStop-rec").click(function(){ document.getElementById("callerAudio-Own").pause(); document.getElementById("callerAudio-ReplayPlaySound").pause(); document.getElementById("callerAudio-ReplaySound").pause(); });

$("#push2Talk5s").click(function(){ let tttt = 4; $("#push2TalkUser").click(); for (let i = 0; i < 6; i++) {
	setTimeout(function(){ $("#push2Talk5s").html(tttt + "s"); $("#push2Talk5s").css("background","white"); 		
	  if (tttt > 0) { $("#push2Talk5s").animate({"background":"blue"}); }
	if (tttt == 0) { $("#push2Talk5s").css({"background":"red"}); }                     
						  tttt--; if (i == 5) { $("#push2TalkUserUpload").click(); 
	$("#push2Talk5s").html("5s"); $("#push2Talk5s").css({"background":"white"}); } }, 1000 * i); } 
									   });

$("#push2Talk10s").click(function(){ let ttttt = 9; $("#push2TalkUser").click(); for (let i = 0; i < 11; i++) {
	setTimeout(function(){ $("#push2Talk10s").html(ttttt + "s"); $("#push2Talk10s").css("background","white"); 		
	  if (ttttt > 0) { $("#push2Talk10s").animate({"backgroundColor":"blue"}); }
	if (ttttt == 0) { $("#push2Talk10s").css({"background":"red"}); }
						  ttttt--; if (i == 10) { $("#push2TalkUserUpload").click(); 
	$("#push2Talk10s").html("10s"); $("#push2Talk10s").css({"background":"white"}); } }, 1000 * i); } 
});

$("#push2TalkRec").click(function(){ $("#push2TalkUser").click(); });
$("#push2TalkRecUpload").click(function(){ $("#push2TalkUserUpload").click(); });

var audioStarted = 0;

if (audioStarted == 0) {
  $("#push2TalkUserCheck").slideDown(); $("#push2Talk5s").slideDown(); $("#push2Talk10s").slideDown(); audioStarted = 1;
}
}
loadAudioSystem();

$("#savebtnAudioStation").click(function(){	
	$('input[name=buildnameAS]').val($("#audioStationBuildText").html());
	$('#add-formAS').submit(function(e) {
		e.preventDefault();
		$.ajax({
			cache: false,
			type:'POST',
			url:'https://' + mainDomain + '/fleo.at-php/fleo.at_audioStationSave.php',
			data: $(this).serialize(),
			success: function(data) {
				$("#thisBox").hide();
				edith = 0;
				spacebarText = 0; 
                toastr.success('Audio-Station hinzugefügt  ...');
			}
		});
return false;
});
});

$("#cancelbtn").click(function(){	
$("#thisBox").hide();
edith = 0;
spacebarText = 0; 
});

$("#fullAgain").click(function(){	
	$("#fullAgain").hide();
	$("#thisBox").css("height", "80%");
});

setTimeout(function(){
                if ($(window).width() < 800 || $(window).height() < 680) { $("#thisBoxDialog").dialog("option", "width", $(window).width()); $("#thisBoxDialog").dialog("option", "height", $(window).height()); $("#thisBoxDialog").dialog("option", "position", { my: "left top", at: "left top" }); } else { $("#thisBoxDialog").dialog( "option", "width", 800); if ($(window).height() < 680) { $("#thisBoxDialog").dialog("option", "height", $(window).height()); } else { $("#thisBoxDialog").dialog("option", "height", 680); }   } 
                $(".person").each(function(){
                    changeVolumeMeMoving($(this).attr("id").replace("personCode-",""));
                });         
},500);
}


///// fleo.at_videoSystem.js

var lettersOrVideoSend = 0;
var userStartedOwnVideo = 0;
var allDevices;
var bilderSrcOthers = [];
var videoSizeLeft = 0;
var videoSizeTop = 0;
var videoSizeWidth = 320;
var videoSizeWidthSelect;
var videoSizeHeightSelect;
var videoSizeHeight;
var oldPositionVideoLeft = 0;
var oldPositionVideoTop = 0;
var videoOutputSizer = 1;
var videoOutputSizer2 = 1;

var faceOn = 0;

function loadVideoSystem(){

    ///////////////////////////////////// Webcam & Microphone chooser
    


    $("#walkAroundWithVideo").click(function(){
        if (userStartedOwnVideo == 0) {
        $.post("/fleo.at-php/fleo.at_videoSizer.php", {
            doing: 1,
            fleoNum: (myNumber[0] + myNumber[2]).replace("#", ""),
            videoSize: 1
        }); 
        $("#connectButton").click(); 
        $("#walkAroundWithVideoAudioAutoAccept").show(); 
        $("#walkAroundWithVideoAudioAutoReject").show(); 
        $("#hearLikeOwl").show();
        
        $("#walkAroundWithVideoAudioAutoAccept").click(function(){ if (audioAutoAccept == "off") { $("#walkAroundWithVideoAudioAutoAccept").css("text-decoration","none"); $("#walkAroundWithVideoAudioAutoAccept").attr("data-audioautoaccept","on"); audioAutoAccept = "on"; $("#walkAroundWithVideoAudioAutoReject").css("text-decoration","line-through"); $("#walkAroundWithVideoAudioAutoReject").attr("data-audioautoreject","off"); audioAutoReject = "off"; } else {  $("#walkAroundWithVideoAudioAutoAccept").css("text-decoration","line-through"); $("#walkAroundWithVideoAudioAutoAccept").attr("data-audioautoaccept","off"); audioAutoAccept = "off"; } });

        $("#walkAroundWithVideoAudioAutoReject").click(function(){ if (audioAutoReject == "off") { $("#walkAroundWithVideoAudioAutoReject").css("text-decoration","none"); $("#walkAroundWithVideoAudioAutoReject").attr("data-audioautoreject","on"); audioAutoReject = "on"; $("#walkAroundWithVideoAudioAutoAccept").css("text-decoration","line-through"); $("#walkAroundWithVideoAudioAutoAccept").attr("data-audioautoaccept","off"); audioAutoAccept = "off"; } else {  $("#walkAroundWithVideoAudioAutoReject").css("text-decoration","line-through"); $("#walkAroundWithVideoAudioAutoReject").attr("data-audioautoreject","off"); audioAutoReject = "off"; } });

        $("#walkAroundWithVideo").hide(); 
        userStartedOwnVideo = 1; 
        navigator.mediaDevices.getUserMedia({ audio: { sampleSize: 16, sampleRate: 48000, echoCancellation: true, noiseSuppression: false, autoGainControl: false }, video: {} } ).then(function(){ navigator.mediaDevices.enumerateDevices().then(function(devices) { allDevices = devices; 
        
      // <div id="walkVideoFace" class="cockpit" style="position:fixed;z-index:997776;bottom:150px;left:0;width:70px;height:30px;cursor:pointer;background:white;color:black;text-align:center;font-size:24px;padding: 0 5px;">Face</div>
    $("body").append('<div id="walkVideoChooser" class="cockpit" style="position:fixed;z-index:997776;bottom:120px;left:0;width:70px;height:30px;cursor:pointer;background:white;color:black;text-align:center;font-size:24px;padding: 0 5px;">Cam</div><div id="walkVideoSizer" class="cockpit" style="position:fixed;z-index:997776;bottom:120px;left:70px;width:auto;height:30px;cursor:pointer;background:white;color:black;text-align:center;font-size:24px;padding: 0 5px;">++</div><div class="volumeClickcallerAudio-Own" style="cursor:pointer;position:fixed;z-index:997776;bottom:0;left:160px;width:20px;height:120px;"><div class="volumeMetercallerAudio-Own" style="position:absolute;z-index:-2;bottom:0;left:0;width:20px;height:100%;transform-origin:center center;transform:scaleY(-1);"><div class="volumen-wrapper"><div class="led-callerAudio-Own"></div><div class="led-callerAudio-Own"></div><div class="led-callerAudio-Own">' + 
    '</div><div class="led-callerAudio-Own"></div><div class="led-callerAudio-Own"></div><div class="led-callerAudio-Own"></div><div class="led-callerAudio-Own"></div><div class="led-callerAudio-Own"></div><div class="led-callerAudio-Own"></div><div class="led-callerAudio-Own"></div></div></div><div class="volumeMeterGraycallerAudio-Own" style="position:absolute;z-index:-1;bottom:0;left:0;width:20px;height:100%;transform-origin:center center;transform:scaleY(-1);"><div class="volumen-wrapper"><div class="ledGray-callerAudio-Own"></div><div class="ledGray-callerAudio-Own"></div><div class="ledGray-callerAudio-Own"></div><div class="ledGray-callerAudio-Own"></div><div class="ledGray-callerAudio-Own"></div><div class="ledGray-callerAudio-Own"></div><div class="ledGray-callerAudio-Own"></div><div class="ledGray-callerAudio-Own"></div><div class="ledGray-callerAudio-Own"></div><div class="ledGray-callerAudio-Own"></div></div></div><div class="volumecallerAudio-Own" style="position:absolute;z-index:20;bottom:0;left:0;width:5px;height:50%;background:#ff0000;display:none;"></div></div><div id="videoMagicSelect" style="position:fixed;z-index:997778;bottom:0;left:0 background: #fff;"></div><div id="videoMagicControl" style="transform:scale(1);position:fixed;z-index:997777;bottom:0;left:0;font-size: 9px; color: black; line-height: 6px; letter-spacing: 0.57px; font-family: \'IBM Plex Mono\', \'Courier New\', monospace; font-weight: bold; background: #fff;transform-origin:bottom left;"><div id="cameraMagic" class="cameraMagic"><div id="selectVideoArea" style="position:absolute;pointer-events:auto;z-index:30;"></div><video id="videoMagic" style="pointer-events:none;">Video stream not available.</video><button id="stopbutton"style="background:green;" style="display:none;">Cam is on</button><button id="startbutton" style="background:#550a21;">Cam is off</button>' + 
    '<button id="vbuttonMagic" style="cursor:pointer;top:0;left:0;font-size:14px;display:none;">V</button><button id="lbuttonMagic" style="cursor:pointer;top:0;left:0;font-size:14px;display:none;">L</button></div><canvas id="canvasMagic" style="position:fixed;bottom:0;left:0;z-index:10;"></canvas><canvas id="canvasMagic2" style="position:fixed;bottom:0;left:0;z-index:20;"></canvas><img id="photoMagic" /><div style="background:#fff;float:right;"><div id="heyImVisitor" style="float:right;background:#fff;"><div id="heyImVisitorVideo" style="display:none;"><img style="background:beige;" id="heyImVisitorVideoImg" src="" /></div></div></div>');
    $("#lbuttonMagic").click(function(){ lettersOrVideoSend = 0; $("#lbuttonMagic").toggle(); $("#vbuttonMagic").toggle(); });
    $("#vbuttonMagic").click(function(){ lettersOrVideoSend = 1; $("#vbuttonMagic").toggle(); $("#lbuttonMagic").toggle(); });
    $("#walkVideoChooser").click(function(){ startup(); });
    /* $("#walkVideoSizer").dblclick(function(){
        $("#walkVideoSizer").append("+");
        videoOutputSizer++;
        if ($("#walkVideoSizer").html() == "+++++++") {
        videoOutputSizer = 1;
        videoOutputSizer2 = 1;
        $("#walkVideoSizer").html("+"); 
        $.post("/fleo.at-php/fleo.at_videoSizer.php", {
            doing: 1,
            fleoNum: (myNumber[0] + myNumber[2]).replace("#", ""),
            videoSize: videoOutputSizer2
        });
        }
    }); */
    $("#walkVideoSizer").click(function(){
        if ($("#walkVideoSizer").html() !== "+++++++") {
        $("#walkVideoSizer").append("+");
        videoOutputSizer2++;
        $.post("/fleo.at-php/fleo.at_videoSizer.php", {
            doing: 1,
            fleoNum: (myNumber[0] + myNumber[2]).replace("#", ""),
            videoSize: videoOutputSizer2
        });
    } else {
        videoOutputSizer = 1;
        videoOutputSizer2 = 1;
        $("#walkVideoSizer").html("+");
        $.post("/fleo.at-php/fleo.at_videoSizer.php", {
            doing: 1,
            fleoNum: (myNumber[0] + myNumber[2]).replace("#", ""),
            videoSize: videoOutputSizer2
        }); 
        }
    });

    $("#selectVideoArea").resizable({
        handles: "all",
        containment: "parent",
        minHeight: 32,
        minWidth: 32,
        start: function(){ draggingVideoSize = 1; }, 
        stop: function(event, ui){
            videoSizeLeft = ui.position.left;
            videoSizeRight = ui.position.left + ui.size.width;
            videoSizeTop = ui.position.top;
            videoSizeBottom = ui.position.top + ui.size.height;
            videoSizeWidthSelect = ui.size.width * 2;
            videoSizeHeightSelect = ui.size.height * 2;
            
            oldPositionVideoLeft = videoSizeLeft;
            oldPositionVideoTop = videoSizeTop;
            draggingVideoSize = 0;
        }
    });
    $("#selectVideoArea").draggable({
        drag: function(event, ui) {
            videoSizeLeft += (oldPositionVideoLeft * -1) + ui.offset.left;
            videoSizeTop += (oldPositionVideoTop * -1) + ui.position.top;

            oldPositionVideoLeft = ui.offset.left;
            oldPositionVideoTop = ui.position.top;
        }    
    });
    var videoRate = 125;
    // if (Device_Type() == "Mobile" || Device_Type() == "Tablet") { videoRate = 250; }
    
    /* setTimeout(function(){ $("#selectVideoArea").css({"background":"#ffffff4f", "width": $("#videoMagic").css("width"), "height": $("#videoMagic").css("height")}); videoSizeWidthSelect = 320;
    videoSizeHeightSelect = parseInt($("#selectVideoArea").css("height")) * 2; }, 4000); */
    // $("#cameraMagic").click(function(){ $("#selectVideoArea").css({"background":"#ffffff4f", "width": $("#videoMagic").css("width"), "height": $("#videoMagic").css("height")}); });
    $("#walkVideoFace").click(function(){ 

        $.getScript("/fleo.at-js/face/fleo.at_face_api.js", async function(){
        // await faceapi.nets.ageGenderNet.loadFromUri('/fleo.at-js/face/models');
        await faceapi.nets.faceLandmark68Net.loadFromUri('/fleo.at-js/face/models');
        // await faceapi.nets.faceExpressionNet.loadFromUri('/fleo.at-js/face/models');
        await faceapi.nets.ssdMobilenetv1.loadFromUri('/fleo.at-js/face/models');
        // await faceapi.nets.faceRecognitionNet.loadFromUri('/fleo.at-js/face/models');

        // draw them into a canvas
        faceOn = 1;
        /* setInterval( async function(){
            const detections = await faceapi.detectAllFaces(videoMagic).withFaceLandmarks();
            // resize the detected boxes and landmarks in case your displayed image has a different size then the original
            const detectionsWithLandmarksForSize = faceapi.resizeResults(detections, { width: canvasMagic.width, height: canvasMagic.height })
            }, 250); */
        });
    });
                               
    var streaming = false; var videoMagic = null; var canvasMagic = null; var startbutton = null; var stopbutton = null; var crazy = null; var doVideoSending = 0;
    var videoDeviceId = 0; var videoDeviceError = 0; var startup2Start = 0;
    var videoDeviceFleoKind, videoDeviceFleoId;


      
    function getVideoDeviceFleo() {
    if (videoDeviceId == allDevices.length) { videoDeviceId = 0; }
    var videoDeviceGo = allDevices[videoDeviceId];
    videoDeviceFleoKind = videoDeviceGo.kind; videoDeviceFleoId = videoDeviceGo.deviceId; videoDeviceId++;   
    }
        function startup() {
          videoMagic = document.getElementById('videoMagic');
          canvasMagic = document.getElementById('canvasMagic');
          cameraMagic = document.getElementById('cameraMagic');
          controlMagicContainer = document.getElementById('videoMagicControl');
          startbutton = document.getElementById('startbutton');
          stopbutton = document.getElementById('stopbutton');
          selectVideoArea = document.getElementById('selectVideoArea');
          getVideoDeviceFleo();
          if (videoDeviceFleoKind !== "videoinput") { getVideoDeviceFleo(); }
          navigator.mediaDevices.getUserMedia({ 
            video: { deviceId: videoDeviceFleoId }})
          .then(function(stream) {
            videoMagic.srcObject = stream;
            videoMagic.height = (640 / videoMagic.videoWidth) * videoMagic.videoHeight;
            videoMagic.width = 640;  
            setTimeout(function(){ $("#selectVideoArea").css({"background":"#ffffff4f", "width": $("#videoMagic").css("width"), "height": $("#videoMagic").css("height")}); videoSizeWidthSelect = 320;
            videoSizeHeightSelect = parseInt($("#selectVideoArea").css("height")) * 2; 
            }, 500);
            videoMagic.play();

            if (startup2Start == 0) { startup2(); startup2Start = 1; }
          })
          .catch(function(err) {
            // console.log("An error occurred: " + err);
            videoDeviceError++;
            videoMagic.srcObject = null;
            if (videoDeviceError % 20 == 0) { startup(); } else { startup(); }
          });
        }
          
         function startup2(){ 
          videoMagic.addEventListener('canplay', function(ev){
            
            videoMagic.height = (640 / videoMagic.videoWidth) * videoMagic.videoHeight;
            videoMagic.width = 640;        
            videoSizeHeight = videoMagic.height / 2;
            videoSizeWidth = videoMagic.width / 2; 
                        
              $("#walkVideoChooser").css({"bottom": videoSizeHeight / 2});
              $("#walkVideoSizer").css({"bottom": videoSizeHeight / 2});
            if (!streaming) {
              streaming = true;
            }
          }, false);
          startbutton.addEventListener('click', function(ev){
            takepicture();
            ev.preventDefault();
            hideStart();
          }, false);
          // startbutton.click();
          stopbutton.onclick =  function(){ stopCrazy(); }; 
        }
/*        async function doFace() {
            const detections = faceapi.detectAllFaces(canvasMagic).withFaceLandmarks();
            // resize the detected boxes and landmarks in case your displayed image has a different size then the original
            const detectionsWithLandmarksForSize = faceapi.resizeResults(detections, { width: canvasMagic.width, height: canvasMagic.height })
            faceapi.draw.drawFaceLandmarks(canvasMagic, detectionsWithLandmarksForSize, { drawLines: true });
        } */
        function takepicture() {
            crazy = setInterval(function(){       // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
          if (doVideoSending == 1) {
            var context = canvasMagic.getContext('2d');
            canvasMagic.width = videoSizeWidthSelect;
            canvasMagic.height = videoSizeHeightSelect; 
            videoMagic.height = (640 / videoMagic.videoWidth) * videoMagic.videoHeight;
            videoMagic.width = 640;                       
              
            context.drawImage(videoMagic, videoSizeLeft * -2, videoSizeTop * -2, (videoMagic.width / 2), (videoMagic.height / 2)); 
            if (faceOn == 1) { 
                doFace();
            };
            var data = canvasMagic.toDataURL('image/jpeg', 0.95 - videoOutputSizer * 16);
            // photoMagic.setAttribute('src', data);
            data = data.replace("data:image/jpeg;base64,", "");
            if (ws.readyState === WebSocket.OPEN) { ws.send(JSON.stringify({type:"video",fleoNum:(myNumber[0] + myNumber[2]).replace("#", ""),boingy:data})); } else {
            $.ajax({ 
              type: "POST", 
              url: "/fleo.at-php/post.fleo.php",
              dataType: 'text',
              data: {
                    fleoNum: (myNumber[0] + myNumber[2]).replace("#", ""),
                    boingy: data
            }}).done(function(){ doVideoSending = 1; }) 
        }
          }
      }, videoRate);

    }
      function hideStart() {
              doVideoSending = 1;
            startbutton.style.display = "none";
            stopbutton.style.display = "block";
        }
      function stopCrazy() {
              doVideoSending = 2;
            clearInterval(crazy);
            startbutton.style.display = "block";
            stopbutton.style.display = "none";
        }
        startup();
      
      $("#walkAroundWithVideo").hide();
     
    });
});
}
});
    
    var maeaek = document.getElementById("maeaek");
    maeaek.volume = 0.01;
    var maennikenWallManCount = -1;
    maennikenWallManCount = $(".videoWallMan").length;
    var maennikenWallManCountOld = -1;
    var observeMaennikenWall = document.getElementById("maennikenWall");
    var observeMaennikenWallConfig = { attributes: false, childList: true, subtree: true };
    var maennikenWallCallback = (mutationList, observer) => {
        for (const mutation of mutationList) {
          if (mutation.type === "childList") {
            maennikenWallManCount = $(".videoWallMan").length;
            if (maennikenWallManCount < maennikenWallManCountOld) { if (haltEverything == 0) { maeaek.volume = .05; maeaek.play(); } maennikenWallManCount = $(".videoWallMan").length;maennikenWallManCountOld = maennikenWallManCount; }
            if (maennikenWallManCount > maennikenWallManCountOld) { if (haltEverything == 0) { maeaek.volume = .08; maeaek.play(); } maennikenWallManCount = $(".videoWallMan").length;maennikenWallManCountOld = maennikenWallManCount; }
          }
        }
      };
      var maennikenWallObserver = new MutationObserver(maennikenWallCallback);
      maennikenWallObserver.observe(observeMaennikenWall, observeMaennikenWallConfig);
    
    // function startMagicFleo(fleoNumX) {
       /* bilderSrcOthers[fleoNumX] = '/fleo.at-php/fleo.at_communication.php?video=' + fleoNumX + '&viewer=' + (myNumber[0] + myNumber[2]).replace("#", "");
        if ($("#personCode-" + fleoNumX).length) {
            $("#heyImVisitorLetters-" + fleoNumX).css({"transform":"rotateX(145deg) scale(0.42) skew(-10deg, 0deg)","background":"none","position":"absolute", "bottom":"0", "max-height": $("#heyImVisitorVideoImg-" + fleoNumX).css("height") + "px" });
            $(".heyImVisitorVideo-" + fleoNumX).show();
            $("#heyImVisitorLetters-" + fleoNumX).removeClass("heyImVisitorLettersStyle");
            $("#heyImVisitorLetters-" + fleoNumX).addClass("heyImVisitorLettersStyleMirror");
            $(".heyImVisitor-" + fleoNumX).removeClass("videoScaleMaenniken");
            $(".heyImVisitorVideoImg-" + fleoNumX).attr("src", bilderSrcOthers[fleoNumX]);
            $("#videoWallMan-" + fleoNumX).css("margin-top", (186 - (parseInt($("#heyImVisitorVideoImgWall-" + fleoNumX).height()))) + "px");
            // $("#videoMaenniken-" + fleoNumX).css("bottom", "-60px");
        } */
    //    }
    
    

/* 
    presenceSrc.addEventListener('newVideo', function (e) {
      var fleoVideos = JSON.parse(e.data);
if (wsOk == 0) {
      fleoNewVideo(fleoVideos);
}
    });
*/

    
    }

    $("#walkVideoChooser").css({"bottom": videoSizeHeight / 2});
    $("#walkVideoSizer").css({"bottom": videoSizeHeight / 2});

///// fleo.at_dblClick.js

var uploadStuffBuilt = 0;
var doNotUpload = 1;

function doTheUploadStuff(rank) {

if (rank < 0) {
if (rank == -2 && meIsAdmin == 0) {
    doNotUpload = 1;
}

}


if (rank >= whoAllowedUpload) {

if (rank >= 2 || meIsAdmin > 0) {
    doNotUpload = 0;
}


if (uploadStuffBuilt == 0) {

uploadStuffBuilt = 1;

    
var activeMove;
var dragUpDown = 0;
var dragBackForth = 0;
var dragLeftRight = 0;
var resizeUpDown = 0;
var roomWhereEdit;








$(document).on('dblclick', ".tree", function() {
    if (doNotUpload == 0) {

activeMove = $(this).parent(".move").data("attr");
if (location.pathname.replace("/r/", "") !== "/" && location.pathname.replace("/r/", "")) { roomWhereEdit = location.pathname.replace("/r/", ""); }

    if ($(".dragFragile" + activeMove).length) {
    if ($(".dragFragile" + activeMove).parent("div").css("display") == "block") {
        $(".dragFragile" + activeMove).parent("div").css("display","none");
    } else {
        $('[class^="dragFragile"]').parent("div").css("display","none");
        $(".dragFragile" + activeMove).parent("div").css("display","block");
    }
} else {
    $('[class^="dragFragile"]').parent("div").css("display","none");
    if ($("#maennikenBag-" + (myNumber[0] + myNumber[2]).replace("#", "")).find(".medal3").length || meIsAdmin > 0) {
    $('[data-attr=' + activeMove + ']').find(".tree").append('<div style="position:absolute;bottom:0px;left:-100px;width:100px;height:auto;background:#ffffff2f;color:#ffffff;text-shadow: -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000, 1px 1px 0px #000;font-size:80px;text-align:center;cursor:pointer;pointer-events:auto;"><div class="dragFragile' + activeMove + '" title="Move">X</div><div class="upFragile' + activeMove + '" title="Level">&#x2195;</div><div class="resizeFragile' + activeMove + '" title="Resize">&#x21F1;</div><br /><div class="editFragile' + activeMove + '" style="font-size:40px;" title="Edit">EDIT</div></div><div style="position:absolute;bottom:0px;right:-100px;width:100px;height:auto;background:#ffffff2f;color:#ffffff;text-shadow: -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000, 1px 1px 0px #000;font-size:80px;text-align:center;cursor:pointer;pointer-events:auto;"><div class="dragFragile' + activeMove + '" title="Move">X</div><div class="upFragile' + activeMove + '" title="Level">&#x2195;</div><div class="resizeFragile' + activeMove + '" title="Resize">&#x21F1;</div><br /><div class="editFragile' + activeMove + '" style="font-size:40px;" title="Edit">EDIT</div></div>');
    } else {
        $('[data-attr=' + activeMove + ']').find(".tree").append('<div style="position:absolute;bottom:0px;left:-100px;width:100px;height:auto;background:#ffffff2f;color:#ffffff;text-shadow: -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000, 1px 1px 0px #000;font-size:80px;text-align:center;cursor:pointer;pointer-events:auto;"><div class="dragFragile' + activeMove + '" title="Move">X</div><div class="upFragile' + activeMove + '" title="Level">&#x2195;</div><div class="resizeFragile' + activeMove + '" title="Resize">&#x21F1;</div></div><div style="position:absolute;bottom:0px;right:-100px;width:100px;height:auto;background:#ffffff2f;color:#ffffff;text-shadow: -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000, 1px 1px 0px #000;font-size:80px;text-align:center;cursor:pointer;pointer-events:auto;"><div class="dragFragile' + activeMove + '" title="Move">X</div><div class="upFragile' + activeMove + '" title="Level">&#x2195;</div><div class="resizeFragile' + activeMove + '" title="Resize">&#x21F1;</div></div>');
    }
$(".dragFragile" + activeMove).draggable({ grid: [ 100, 100 ], helper: "clone",
create: function( event, ui ) {
dragBackForth = 0;
dragLeftRight = 0;
if (will == "f") { $(".dragFragile" + activeMove).parent().css("transform","scaleX(-1)"); }
} });

$(".dragFragile" + activeMove).on( "dragstop", function( event, ui ) {
    if (will == "b") {
    dragBackForth = ui.position.top * -1;
    dragLeftRight = ui.position.left;
    } else {
    dragBackForth = ui.position.top;
    dragLeftRight = ui.position.left * -1;
    }
    $.ajax({
        beforeSend: function () {
            $("#flash").addClass("f");
        },
        type: "POST",
        url: "https://" + mainDomain + "/fleo.at-php/build.php",
        dataType: "html",
        data: {
            doing: 1,
            save: 1,
            offset: dragBackForth,
            leftRight: dragLeftRight,
            fragile: activeMove,
            room: roomWhereEdit
        }
    }).done(function (response) {
        dragBackForth = 0;
        dragLeftRight = 0;
        $("#flash").removeClass("f");
    });
});

$(".upFragile" + activeMove).draggable({ grid: [ 1, 1 ], axis: "y", helper: "clone",
create: function( event, ui ) {
dragUpDown = 0;
} });
$(".upFragile" + activeMove).on( "drag", function( event, ui ) {
dragUpDown = ui.position.top;
if (ui.position.top == -100 || ui.position.top == -300 || ui.position.top == -500 || ui.position.top == -700 || ui.position.top == 100 || ui.position.top == 300 || ui.position.top == 500 || ui.position.top == 700) {
    $.ajax({
        beforeSend: function () {
            $("#flash").addClass("f");
        },
        type: "POST",
        url: "https://" + mainDomain + "/fleo.at-php/build.php",
        dataType: "html",
        data: {
            doing: 1,
            save: 2,
            offset: dragUpDown * -1,
            fragile: activeMove,
            room: roomWhereEdit
        }
    }).done(function (response) {
        dragUpDown = dragUpDown - ui.position.top;
        $("#flash").removeClass("f");
    });
}
});
$(".upFragile" + activeMove).on( "dragstop", function( event, ui ) {
    $.ajax({
        beforeSend: function () {
            $("#flash").addClass("f");
        },
        type: "POST",
        url: "https://" + mainDomain + "/fleo.at-php/build.php",
        dataType: "html",
        data: {
            doing: 1,
            save: 2,
            offset: dragUpDown * -1,
            fragile: activeMove,
            room: roomWhereEdit
        }
    }).done(function (response) {
        dragUpDown = 0;
        $("#flash").removeClass("f");
    });
});

$(".resizeFragile" + activeMove).draggable({ grid: [ 1, 1 ], axis: "x", helper: "clone",
create: function( event, ui ) {
resizeUpDown = 0;
} });
$(".resizeFragile" + activeMove).on( "drag", function( event, ui ) {
    resizeUpDown = ui.position.left;
    });
$(".resizeFragile" + activeMove).on( "dragstop", function( event, ui ) {
    $.ajax({
        beforeSend: function () {
            $("#flash").addClass("f");
        },
        type: "POST",
        url: "https://" + mainDomain + "/fleo.at-php/build.php",
        dataType: "html",
        data: {
            doing: 1,
            save: 3,
            offset: resizeUpDown,
            fragile: activeMove,
            room: roomWhereEdit
        }
    }).done(function (response) {
        resizeUpDown = 0;
        $("#flash").removeClass("f");
    });
});
$(".editFragile" + activeMove).click(function () {
    $("#thisBox").css("height", "80%");
    $("#thisBox").load("https://" + mainDomain + "/fleo.at-php/fleo.at_buildEdit.php?client=" + (myNumber[0] + myNumber[2]).replace("#", "") + "&buildcoords=" + (historyCoords - 500) + "&builddoords=" + (sMMssM - 2) + "&monster=" + activeMove).show();
    });
}}
});

///// fleo.at_dropFiles.js

// $("body").append('<div id="dropContainer" style="position:fixed;bottom:20%;left:20%;width:60%;height:60%;z-index:20000;display:none;"></div>')

$("body").on('dragenter', function(e) {
    e.preventDefault();
    // $("#dropContainer").css({'border': '2px dashed #39b311','background': '#f1ffef2f', 'display': 'block'});
});

$("body").on('dragover', function(e) {
    e.preventDefault();
});

$("body").on('drop', function(e) {
    // $("#dropContainer").css({'border': '2px dashed green','background': '#ffffff2f', 'display': 'block'});
    // setTimeout(function(){ $("#dropContainer").css({'border': '2px dashed #39b311','background': '#f1ffef2f', 'display': 'none'}); }, 2000);
    e.preventDefault();
    if (doNotUpload == 0) {
    var image = e.originalEvent.dataTransfer.files;
    createFormData(image);
    }
});

(function($) {
    var __getBlobs = function(event) {
            var items = event.originalEvent.clipboardData.items,
            kind,
            index,
            items,
            blobs = [],
            blob;
        for (index in items) {
            item = items[index];
            kind = item.kind;
            if (kind === undefined || kind === null) {
                continue;
            }
            if (kind.toLowerCase() !== 'file') {
                continue;
            }
            if (item.getAsFile === undefined || item.getAsFile === null) {
                continue;
            }
            blob = item.getAsFile();
            if (blob === undefined || blob === null) {
                continue;
            }
            blobs.push(blob);
        }
        return blobs;
    };
    var __validBrowser = function(event) {
        var originalEvent = event.originalEvent;
        if (originalEvent === undefined || originalEvent === null) {
            return false;
        }
        var clipboardData = originalEvent.clipboardData;
        if (clipboardData === undefined || clipboardData === null) {
            return false;
        }
        var items = clipboardData.items;
        if (items === undefined || items === null) {
            return false;
        }
        return true;
    };
    var __validPaste = function(event) {
        var target = event.target;
        if (target === undefined || target === null) {
            return true;
        }
        var $target = $(target);
        return true;
    };

    $(document).on({
        'paste': function(event) {
            if (__validBrowser(event) === true) {
                if (__validPaste(event) === true) {
                    var blobs = __getBlobs(event);
                    if (blobs.length > 0) {
                        var eventName = 'custom/paste/images';
                        $(document).triggerHandler(eventName, [blobs]);
                    }
                }
            }
        }
    });
})(jQuery);


$(document).on({
          'custom/paste/images': function(event, blobs) {
            createFormData(blobs);
          }
        });
function createFormData(image) {
    var formImage = new FormData();
    formImage.append('doing', 1);
    formImage.append('save', 9);
    formImage.append('fleoNum', (myNumber[0] + myNumber[2]).replace("#", ""));
    formImage.append('coordsW', historyCoords);
    formImage.append('coordsD', sMMssM);
    formImage.append('room', location.pathname.replace("/r/", ""));
    formImage.append('am', am);
    formImage.append('userImage', image[0]);
    uploadFormData(formImage);
};

function uploadFormData(formData) {
    $.ajax({
        xhr: function() {
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", function(evt) {
                if (evt.lengthComputable) {
                    var uploadPercentComplete = (evt.loaded / evt.total) * 100;
                    if (uploadPercentComplete < 100) {
                    $("#skysignal").html('<div style="position:absolute;background:#cccccc3f;color:hwb(69 0% ' + (100 - uploadPercentComplete) + '% / 1); text-shadow: 1px 1px #fff, -1px 1px #fff, 1px -1px #fff, -1px -1px #fff;font-size:100px;text-align:center;bottom:100px;width:100%;left:0;">' + Math.floor(uploadPercentComplete) + ' %</div>');
                    } else {
                        $("#skysignal").html('<div style="position:absolute;background:#cccccc3f;color:hwb(69 0% ' + (100 - uploadPercentComplete) + '% / 1); text-shadow: 1px 1px #fff, -1px 1px #fff, 1px -1px #fff, -1px -1px #fff;font-size:100px;text-align:center;bottom:100px;width:100%;left:0;">' + uploadPercentComplete + ' % - Working on Server ...</div>');
                        setTimeout(function(){ $("#skysignal").fadeOut(4400); }, 2600);  
                    }
                }
            }, false);
            return xhr;
        },        
    beforeSend: function () {
        $("#flash").addClass("f");
        $("#skysignal").show();
    },
    url: "https://" + mainDomain + "/fleo.at-php/build.php",
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    cache: false }).done(function () {
        resizeUpDown = 0;
        $("#flash").removeClass("f");
        
    })
};
}}} // doTheUploadStuff() end

///// fleo.at_lettercoinSystem.js

$("body").append('<audio id="lettercoinSound" src="/fleo.at-medien/audioStations/2707b4b97d_audio_recording_1663170196861.mp3"></audio>');
$("body").append('<audio id="lettercoinOwnSound" src="/fleo.at-medien/layout/audio/lettercoinsOwn.mp3"></audio>');
var lettercoinOwnSound = document.getElementById("lettercoinOwnSound");
var lettercoinSound = document.getElementById("lettercoinSound");
lettercoinSound.volume = 0.1;

if (!allWordsForLettercoin) { var allWordsForLettercoin; } if (!lettercoinHolder) { var lettercoinHolder; } if (!lettercoinCookieLifetime) { var lettercoinCookieLifetime = (new Date(Date.now()+ 86400*365000)).toUTCString(); }


function checkCookiesForLettercoins(){
    if (!fleoCookieName) { var fleoCookieName; } if (!fleoCookieValue) { var fleoCookieValue; } if (!keyValuePairs) { var keyValuePairs; } if (!fleoCookieName) { var fleoCookieName = []; } if (!fleoCookieValue) { var fleoCookieValue = []; }
    keyValuePairs = document.cookie.split(/; */);
    for(var i = 0; i < keyValuePairs.length; i++) {
        fleoCookieName[i] = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf('='));
        fleoCookieValue[i] = keyValuePairs[i].substring(keyValuePairs[i].indexOf('=')+1);
        if (fleoCookieName[i].includes("lettercoin-")) {
            // console.log(decodeURIComponent(getCookie(fleoCookieName[i])))
            // console.log(decodeURIComponent(fleoCookieName[i]));
            $.post("https://" + mainDomain + "/fleo.at-php/build.php", { doing: 1, save: 7, firstletters: fleoCookieName[i].replace("lettercoin-",""), words: fleoCookieValue[i] }, function(data){
                if (data) {
                    if (data !== "No Lettercoin at this Firstletters." && data !== "Firstletters do not match words.") {
                    $("#treasure").append('<div class="ownLettercoin" style="position:relative;margin:0 -20px -20px 0;display:flex;align-items:center;justify-content:center;height:56px;width:56px;border:2px solid gray;border-radius:30px;overflow:hidden;font-size:56px;text-align:center;font-family:Courier,monospace;cursor:pointer;color:yellow !important;">' + data + '</div>');
                    }
                } else {
                    $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_setLettercoinCookie.php", { what: "remove", firstletters: fleoCookieName[i] });
                }
            });
        } 
    }
    }

    $("#nameNumberText").click(function(){
        $(".ownLettercoin").remove();
        checkCookiesForLettercoins();
    });
checkCookiesForLettercoins();


$(document).on("click", ".ownLettercoin", function () {
$(this).toggleClass("lettercoinSelected");
});

var lettercoinIni = [];
function doLettercoinPayments(hatID, doWhich) {
    if (lettercoinIni[hatID] !== 1) {
    lettercoinIni[hatID] = 1;
    $(document).on("click", '#fleoAtHat' + hatID, function (event) {
        var whereItGoesTo = $(this).data("hat");
        var coinToDonate = document.querySelectorAll(".lettercoinSelected");
        if (coinToDonate.length) {
        for (var i = 0; i < coinToDonate.length; i++) {
            // $(coinToDonate[i]).transfer({ to: $(this), duration: 1000 });
            var textToSendLettercoin = $(coinToDonate[i]).html();     
            $.ajax({
                beforeSend: function () {
                    $("#flash").addClass("f");   
                },
                type: "POST",
                url: "https://" + mainDomain + "/fleo.at-php/build.php",
                dataType: "html",
                data: { doing: 1, save: 6, room: myRoom, whereItGoesTo: whereItGoesTo, words: textToSendLettercoin }
            }).done(function (data) {
                if (data) {
                    // console.log("server: " + data);
                    // eraseCookie(encodeURIComponent(data));
                    // document.cookie=encodeURIComponent(data) + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;secure=true;SameSite=none;';
                    data = "lettercoin-" + Object.values(JSON.parse(data)).toString().replaceAll(",","");
                    $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_setLettercoinCookie.php", { what: "remove", firstletters: data }, function(){
                    lettercoinSound.play();
                    $("#flash").removeClass("f");
                });
    }
    });
    };
    setTimeout(function(){ 
    $(".ownLettercoin").remove();
    checkCookiesForLettercoins();
    }, 3000);
        } else {
            if ($("#fleoAtHat" + whereItGoesTo).css("bottom") == "680px") {
            $.post("https://" + mainDomain + "/fleo.at-php/build.php", { doing: 1, save: 8, room: myRoom, whereItGoesTo: whereItGoesTo }, function(data){      
                $("#fleoAtHat" + whereItGoesTo).animate({"bottom":"+=110px"}, 1000, function(){
                    $("#fleoAtHat" + whereItGoesTo).append('<div class="currentHat' + whereItGoesTo + '" style="position:absolute;height:60px;width:190px;text-align:center;color:black;font-weight:bold;text-shadow: 4px 4px 0px yellow, 2px 3px 0px yellow, 4px 5px 0px yellow, 4px 6px 0px yellow;top:165px;left:-6px;font-size:50px;background:#ffffff;">' + data + '</div>');
                    setTimeout(function(){
                        $(".currentHat" + whereItGoesTo).remove();
                        $("#fleoAtHat" + whereItGoesTo).animate({"bottom":"-=110px"}, 3000);
                    },3000)
                })
            });
        }
        }
    });
    
    function resetTypeTimeout() {
        spacebarText = 1; 
        clearTimeout(typeTimeout);
        typeTimeout = setTimeout(() => {
            spacebarText = 0; 
        }, 10000);
      }

    $(document).on("click", '#audioStationText-' + doWhich, function (event) {
    if ($(".lettercoinSelected").length) {
        resetTypeTimeout();
        var whereItGoesTo = $("#fleoAtHat" + hatID).data("hat");
        var audioStationTextSendText = $(this).html();
        var coinToDonate = document.querySelectorAll(".lettercoinSelected");
        if (coinToDonate.length) {
        for (var i = 0; i < coinToDonate.length; i++) {
            // $(coinToDonate[i]).transfer({ to: $(this), duration: 1000 });
            var textToSendLettercoin = $(coinToDonate[i]).html();     
            $.ajax({
                beforeSend: function () {
                    $("#flash").addClass("f");   
                },
                type: "POST",
                url: "https://" + mainDomain + "/fleo.at-php/build.php",
                dataType: "html",
                data: { doing: 1, save: 6, room: myRoom, whereItGoesTo: whereItGoesTo, words: textToSendLettercoin }
            }).done(function (data) {
                if (data) {
                    // console.log("server: " + data);
                    // eraseCookie(encodeURIComponent(data));
                    // document.cookie=encodeURIComponent(data) + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;secure=true;SameSite=none;';
                    data = "lettercoin-" + Object.values(JSON.parse(data)).toString().replaceAll(",","");
                    $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_setLettercoinCookie.php", { what: "remove", firstletters: data }, function(){
                        lettercoinSound.play();
                        $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_postAudioStationText.php", { doing: 1, room: myRoom, whereItGoesTo: whereItGoesTo, words2: audioStationTextSendText }, function(){
                        toastr.success("Text saved.");   
                        $("#flash").removeClass("f");
                });
                });
    }
    });
    }};
    setTimeout(function(){ 
    $(".ownLettercoin").remove();
    checkCookiesForLettercoins();
    }, 3000);
    
    } else {
    $(this).on("keydown", function(){
        resetTypeTimeout();
        // spacebarText = 1; 
    });
    $(this).on("keyup", function(){
        toastr.info("Drop Lettercoin on text to change it on server.");
        // spacebarText = 0; 
    });
    }
    });

$(document).on("click", '#letterCoinMillAudioStationTextLettercoin-1-' + doWhich, function(){
lettercoinHolder = $(this);
allWordsForLettercoin = lettercoinHolder.html();
$.post("https://" + mainDomain + "/fleo.at-php/build.php", { doing: 1, save: 5, fragile: lettercoinHolder.parent(".tree").parent(".move").data("attr"), room: location.pathname.replace("/r/", ""), words: allWordsForLettercoin }, function(data){
    data = "lettercoin-" + Object.values(JSON.parse(data)).toString().replaceAll(",","");    
    $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_setLettercoinCookie.php", { what: "set", firstletters: data, words: allWordsForLettercoin }, function(){
    lettercoinOwnSound.play();
    lettercoinHolder.html("");
    if (doWhich !== "audStat1010789611") { lettercoinHolder.css({"pointer-events":"none","background":"none"}); }
    $(".ownLettercoin").remove();
    checkCookiesForLettercoins();
});
});
});
        
$(document).on("click", '#letterCoinMillAudioStationTextLettercoin-2-' + doWhich, function(){
    lettercoinHolder = $(this);
    allWordsForLettercoin = lettercoinHolder.html();
    $.post("https://" + mainDomain + "/fleo.at-php/build.php", { doing: 1, save: 5, fragile: lettercoinHolder.parent(".tree").parent(".move").data("attr"), room: location.pathname.replace("/r/", ""), words: allWordsForLettercoin }, function(data){
        data = "lettercoin-" + Object.values(JSON.parse(data)).toString().replaceAll(",","");    
        $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_setLettercoinCookie.php", { what: "set", firstletters: data, words: allWordsForLettercoin }, function(){
        lettercoinOwnSound.play();
        lettercoinHolder.html("");   
        if (doWhich !== "audStat1010789611") { lettercoinHolder.css({"pointer-events":"none","background":"none"}); }
        $(".ownLettercoin").remove();
        checkCookiesForLettercoins();
});
});
});
}
}


var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

var isFullscreen = 0;
$(".fullscreenToggle").click(function(){
    if (isFullscreen == 0) { openFullscreen(); $("#fullscreenExitToggle").show(); $("#fullscreenToggle").hide(); isFullscreen = 1; } else { closeFullscreen(); $("#fullscreenExitToggle").hide(); $("#fullscreenToggle").show(); isFullscreen = 0; }
})

var closeKeys;
 
function postMovement(action) {
    $.post("https://" + mainDomain + "/fleo.at-php/fleo.at_receiveRobotChanges.php", {
        doing: 1,
        save: 1,
        room: myRoom,
        action: action
    });
}




/* setInterval(function(){
    $(".audioStation").each(function(){            
        sideVolume[$(this)] = ((1) - Math.abs((parseInt($(this).parent(".tree").css("left"))) * (1 / 14000))).toFixed(2);
        doordsVolume[$(this)] = ((1) - Math.abs((parseInt($(this).parent(".tree").parent(".move").attr("distance"))) * (1 / 14000))).toFixed(2);                   
        if (sideVolume[$(this)] < doordsVolume[$(this)]) { setVolume[$(this)] = sideVolume[$(this)]; } else { setVolume[$(this)] = doordsVolume[$(this)]; }                 
        if (setVolume[$(this)] < 0) { setVolume[$(this)] = 0; }                
        $(this)[0].volume = setVolume[$(this)];       
        console.log($(this)[0].volume);    
        });
}, 1500); */

const canWakeLock = () => 'wakeLock' in navigator;

let wakelock;
async function lockWakeState() {
  if(!canWakeLock()) return;
  try {
    wakelock = await navigator.wakeLock.request();
    wakelock.addEventListener('release', () => {
      console.log('Screen Wake State Locked:', !wakelock.released);
    });
    console.log('Screen Wake State Locked:', !wakelock.released);
  } catch(e) {
    console.error('Failed to lock wake state with reason:', e.message);
  }
}
lockWakeState();

var onScreenObserver = [];
let observerOptions = {
    root: document.querySelector('#wrapper'),
    rootMargin: '0px',
    threshold: 0
  }
  
function setMedalsCorrect(person) {
        $("#maennikenBag-" + person).css({"left": 82 - parseInt(($("#maennikenBag-" + person).width() / 2)) + "px","bottom": 90 - parseInt(($("#maennikenBag-" + person).height() / 2)) + "px"});
}

var personDataComplete, personData;

function createMaenniken(personData) {
        
        persConn[personData.number] = 0;
        distanceSentOnce[personData.number] = 0;
        kindOfGuyOld[personData.number] = 0;
        kindfOfGuyFunctionBuilt[personData.number] = 0;
        personDataNameOld[personData.number] = 0;
        
        if (fleoPersonsTotal.indexOf(personData.number) === -1) { 
            fleoPersonsTotal.push(personData.number);
            fleoPersonsDistance[personData.number] = 0; }

        if (am == "f") {
            
             $("#wrapper").append('<div id="personCode-' + personData.number + '" class="move person scale' + personData.uD + '" distance="' + personData.uD + '" room="' + personData.room + '">' +
                '<div class="tree" style="pointer-events:none;width:180px;height:373px;bottom:0px;left:' + personData.uW + 'px;" id="personTree-' + personData.number + '">' +
                '<div id="maennikenRutsch-' + personData.number + '" style="width:180px;height:303px;position:absolute;pointer-events:auto;"><div id="maennikenConferenceOffline-' + personData.number + '" class="maennikenConferenceOffline-' + personData.number + '" style="width:84px;height:84px;border-radius:42px;background:gray;position:absolute;top:-84px;left:48px;pointer-events:auto;cursor:pointer;color:white;text-align:center;font-size:54px;">&#9742;</div>' +
                '<div id="maennikenConferenceCall-' + personData.number + '" class="maennikenConferenceCall-' + personData.number + '" style="width:84px;height:84px;border-radius:42px;background:green;position:absolute;top:-84px;left:48px;pointer-events:auto;cursor:pointer;display:none;color:white;text-align:center;font-size:54px;">&#9742;</div>' +
                '<div id="maennikenConferenceHangup-' + personData.number + '" class="maennikenConferenceHangup-' + personData.number + '" style="width:84px;height:84px;border-radius:42px;background:red;position:absolute;top:-84px;left:48px;pointer-events:auto;cursor:pointer;display:none;color:white;text-align:center;font-size:54px;">&#9742;</div>' +
                '<div id="maennikenText-' + personData.number +
                '" style="font-weight:bold;pointer-events:auto;cursor:pointer;" class="maennikenTextWorld">' + personData.name + '</div>' +
                '<img src="/fleo.at-medien/persons/maenniken_III.webp" style="width:180px;height:373px;pointer-events:none;" id="maennikenImg-' + personData.number + '" alt="Person" /><div id="maennikenLegs-' + personData.number + '" style="background:gray;width:80px;left:50px;position:absolute;bottom:0;height:0;"><div style="background:black;width:4px;position:relative;left:38px;bottom:0;height:100%;"></div></div></div>' +
                '<div class="videoMaenniken" id="videoMaenniken-' + personData.number + '"   style="pointer-events:auto;position:absolute;bottom:0px;left:0;width:auto;height:auto;"><img style="width:auto;min-width:320px;height:auto;position:absolute;bottom:0;left:180px;" class="heyImVisitorVideoImg-' + personData.number + '" id="heyImVisitorVideoImg-' + personData.number + '" src="/fleo.at-medien/userImages/1673454489grafikpn292287266111.png.webp" /></div>' + 
                '</div>');
                $("#personCode-" + personData.number).animate({"left": turn + "px"},0);
        }
        if (am == "b") {
            $("#wrapper").append('<div id="personCode-' + personData.number + '" class="move person scale' + personData.uD + '" distance="' + personData.uD + '" room="' + personData.room + '">' +
                '<div class="tree" style="pointer-events:none;width:180px;height:373px;bottom:0px;left:' + personData.uW + 'px;perspective:9000px;transform:rotateY(' + personData.turn + 180 + 'deg);" id="personTree-' + personData.number + '">' +
                '<div id="maennikenRutsch-' + personData.number + '" style="width:180px;height:303px;position:absolute;pointer-events:auto;"><div id="maennikenConferenceOffline-' + personData.number + '" class="maennikenConferenceOffline-' + personData.number + '" style="width:84px;height:84px;border-radius:42px;background:gray;position:absolute;top:-84px;left:48px;pointer-events:auto;cursor:pointer;color:white;text-align:center;font-size:54px;">&#9742;</div>' +
                '<div id="maennikenConferenceCall-' + personData.number + '" class="maennikenConferenceCall-' + personData.number + '" style="width:84px;height:84px;border-radius:42px;background:green;position:absolute;top:-84px;left:48px;pointer-events:auto;cursor:pointer;display:none;color:white;text-align:center;font-size:54px;">&#9742;</div>' +
                '<div id="maennikenConferenceHangup-' + personData.number + '" class="maennikenConferenceHangup-' + personData.number + '" style="width:84px;height:84px;border-radius:42px;background:red;position:absolute;top:-84px;left:48px;pointer-events:auto;cursor:pointer;display:none;color:white;text-align:center;font-size:54px;">&#9742;</div>' +
                '<div id="maennikenText-' + personData.number +
                '" style="font-weight:bold;pointer-events:auto;cursor:pointer;" class="maennikenTextWorld">' + personData.name + '</div>' +
                '<img src="/fleo.at-medien/persons/maenniken_III.webp" style="width:180px;height:373px;pointer-events:none;" id="maennikenImg-' + personData.number + '" alt="Person" /><div id="maennikenLegs-' + personData.number + '" style="background:gray;width:80px;left:50px;position:absolute;bottom:0;height:0;"><div style="background:black;width:4px;position:relative;left:38px;bottom:0;height:100%;"></div></div></div>' +
                '<div class="videoMaenniken" id="videoMaenniken-' + personData.number + '"   style="pointer-events:auto;position:absolute;bottom:0px;left:0;width:auto;height:auto;"><img style="width:auto;min-width:320px;height:auto;position:absolute;bottom:0;left:180px;" class="heyImVisitorVideoImg-' + personData.number + '" id="heyImVisitorVideoImg-' + personData.number + '" src="/fleo.at-medien/userImages/1673454489grafikpn292287266111.png.webp" /></div></div>');
                $("#personCode-" + personData.number).animate({"left": turn + "px"},0);
        }
        setTimeout(function(){
        scaleNow = $("#personCode-" + personData.number).attr("distance");
        scaleNowNumber = scaleNow - sMMssM;
        $("#personCode-" + personData.number).toggleClass("scale" + scaleNow).toggleClass("scale" + scaleNowNumber);
        $("#personCode-" + personData.number).attr("distance", scaleNowNumber);
        $("#personCode-" + personData.number).find(".tree").animate({
            "left": "-=" + historyCoords
        }, 800);
        }, 500);

        $("#maennikenWall").append('<div class="videoWallMan videoWallMan-' + personData.number + ' videoWallManSmall" id="videoWallMan-' + personData.number + '" style="max-width:240px;float:left;height:auto;pointer-events:auto;display:inline-block;" room="' + personData.room + '">' +
        '<div class="maennikenConferenceOffline-' + personData.number + '" style="width:100%;height:84px;border-radius:0px;background:gray;color:white;position:relative;pointer-events:auto;cursor:pointer;z-index:50000;text-align:center;font-size:54px;">&#9742;</div>' +
        '<div class="maennikenConferenceCall-' + personData.number + '" style="width:100%;height:84px;border-radius:0px;background:green;color:white;position:relative;pointer-events:auto;cursor:pointer;display:none;z-index:50000;text-align:center;font-size:54px;">&#9742;</div>' +
        '<div class="maennikenConferenceVolume-' + personData.number + '" style="width:100%;height:84px;border-radius:0px;position:relative;pointer-events:auto;cursor:pointer;display:none;z-index:50000;"></div>' +
        '<div class="maennikenConferenceHangup-' + personData.number + ' endCallHangUp" style="width:100%;height:84px;border-radius:0px;background:red;color:white;position:relative;pointer-events:auto;cursor:pointer;display:none;z-index:50000;text-align:center;font-size:54px;">&#9742;</div>' +
        '<div id="maennikenTextWall-' + personData.number + '" class="maennikenTextWall maennikenTextWall-' + personData.number + '" style="font-weight:bold;cursor:pointer;background:white;width:100%;">' + personData.name + '</div><div class="videoMaenniken" style="position:relative;"><div class="heyImVisitor-' + personData.number + ' videoScaleMaenniken" style="position:relative;pointer-events:auto;cursor:pointer;"><img style="width:100%;height:auto;pointer-events:auto;cursor:pointer;" class="heyImVisitorVideoImg-' + personData.number + '" id="heyImVisitorVideoImgWall-' + personData.number + '" src="/fleo.at-medien/userImages/1673454489grafikpn292287266111.png.webp" alt="' + personData.number + '-wallVideo"></div></div>');
    

        $(document).on("click", "#maennikenText-" + personData.number, function(){ 
            if ($(".videoWallMan-" + personData.number).is("[data-audioses]") && audioConferenceConnected == 1) { 
                openChat($(".videoWallMan-" + personData.number).attr("data-audioses")); 
            } else if (!$(".videoWallMan-" + personData.number).is("[data-audioses]")) { 
                $("#walkAroundWithVideo").click();
                $.post("/fleo.at-php/fleo.at_setOfflineOnline.php", { doing: 1, fleoNumOwn: (myNumber[0] + myNumber[2]).replace("#", ""), fleoNumDistant: personData.number }); 
                let checkChat = setInterval(function (){ 
                    if ($(".videoWallMan-" + personData.number).is("[data-audioses]") && audioConferenceConnected == 1) { clearInterval(checkChat); openChat($(".videoWallMan-" + personData.number).attr("data-audioses")); } 
                }, 2000); 
            } else { alert("Person not connected to A/V"); }
            fleoNumDistant = personData.number;
            });
        
        $(document).on("click", "#maennikenTextWall-" + personData.number, function(){ 
            if ($(".videoWallMan-" + personData.number).is("[data-audioses]") && audioConferenceConnected == 1) { 
                openChat($(".videoWallMan-" + personData.number).attr("data-audioses")); 
            } else if (!$(".videoWallMan-" + personData.number).is("[data-audioses]")) { 
                $("#walkAroundWithVideo").click();
                $.post("/fleo.at-php/fleo.at_setOfflineOnline.php", { doing: 1, fleoNumOwn: (myNumber[0] + myNumber[2]).replace("#", ""), fleoNumDistant: personData.number }); 
                let checkChat = setInterval(function (){ 
                    if ($(".videoWallMan-" + personData.number).is("[data-audioses]") && audioConferenceConnected == 1) { clearInterval(checkChat); openChat($(".videoWallMan-" + personData.number).attr("data-audioses")); } 
                }, 2000); 
            } else { alert("Person not connected to A/V"); }
            fleoNumDistant = personData.number;
            });

        $(document).on("click", ".maennikenConferenceOffline-" + personData.number, function(){
                if (audioConferenceConnected !== 1) { $("#walkAroundWithVideo").click(); }
                $.post("/fleo.at-php/fleo.at_setOfflineOnline.php", { doing: 1, fleoNumOwn: (myNumber[0] + myNumber[2]).replace("#", ""), fleoNumDistant: personData.number }); 
                let checkCall = setInterval(function (){ 
                    if ($(".videoWallMan-" + personData.number).is("[data-audioses]") && audioConferenceConnected == 1) { clearInterval(checkCall); callRoom(personData.number);
                    } 
                }, 2000); 
            });

        $(document).on("click", ".maennikenConferenceCall-" + personData.number, function(){ 
            if ($(".videoWallMan-" + personData.number).is("[data-audioses]")) { 
            if (audioConferenceConnected == 1) { callRoom(personData.number);
            } else { 
                $("#walkAroundWithVideo").click();
                let checkCall = setInterval(function (){ 
                    if (audioConferenceConnected == 1) { clearInterval(checkCall); callRoom(personData.number); 
                    } 
                }, 2000); 
             }} else { alert("Person not connected to A/V"); }});
        $(document).on("click", ".maennikenConferenceHangup-" + personData.number, function(){ easyrtc.hangup($(".videoWallMan-" + personData.number).attr("data-audioses")); });

                $("#mapForLocator").append('<div id="maennikenSpotter-' + personData.number + '" class="maennikenSpotter" style="pointer-events:auto;background:' + personData.color + ';transform-origin:center;" title="' + personData.name + '"></div>');
                $("#maennikenSpotter-" + personData.number).transition({ perspective: '200px', transform: 'scale(2)', duration: 250 }).transition({ perspective: '200px', transform: 'scale(1)', duration: 700 }); 
             

                $(document).on("click", ".heyImVisitor-" + personData.number, function(){ $("#videoWallMan-" + personData.number).toggleClass("videoWallManSmall"); });            

                setTimeout(function(){ $("#wrapper").arrive(".person", function(){

                let toObserve = $(this).find(".tree").attr("id").replace("personTree-","");
                onScreenObserver[toObserve] = new IntersectionObserver(function(){ setMedalsCorrect(toObserve) }, observerOptions);
                onScreenObserver[toObserve].observe($("#personTree-" + toObserve)[0]);

                }); }, 200);
    }

ws.onopen = function() { console.log("Socketdata connected"); wsOk = 1;
loadVideoSystem();
var t = setInterval(function(){
if (ws.readyState != 1) { wsOk = 0;
clearInterval(t);
return;
}
ws.send(JSON.stringify({type:"ping"}));
}, 50000);
ws.send(JSON.stringify({ type:"present", fleoNum: (myNumber[0] + myNumber[2]).replace("#", "") }));
ws.onmessage = function(e) {

    personDataComplete = JSON.parse(e.data);
    personData = personDataComplete.data;

    if (personDataComplete.type == "person_moves") {
           
            // console.log(personData);
            if (personData.number !== (myNumber[0] + myNumber[2]).replace("#", "")) {

                if ($("#personCode-" + personData.number).length < 1 || $(".videoWallMan-" + personData.number).length < 1) { createMaenniken(personData); }         

            if (personData.online == 2) {
                if ($("#personCode-" + personData.number).length) {
                $("#personCode-" + personData.number).remove();
                if ($(".videoWallMan-" + personData.number).length) { $(".videoWallMan-" + personData.number).remove(); }
                // $("#maennikenLocator-" + personData.number).remove();
                $("#maennikenSpotter-" + personData.number).remove();
                // $("#maennikenSpotterEurope-" + personData.number).remove();
                fleoPersonsTotal.filter(fleoPerson => fleoPerson !== personData.number);
                delete fleoPersonsDistance[personData.number];
                // ws.send(JSON.stringify({type:"distance",whoC:(myNumber[0] + myNumber[2]).replace("#", ""),othDistance:JSON.stringify(fleoPersonsDistance)}));
            } 
            }
            if (personData.online == 1) {
        
            let personCode1 = "personCode-" + personData.number;
            // let personCode2 = personData.number;
    
            persVidSize[personCode1] = 320;

            let oldD = parseInt($("#" + personCode1).attr("distance"));
    
            // if ($("#maennikenLocator-" + personData.number).attr("room") == myRoom) { $("#maennikenLocator-" + personData.number).show(); } else { $("#maennikenLocator-" + personData.number).hide(); }

            // Legs
            if  ($("#maennikenLegs-" + personData.number).length) {
            $("#maennikenLegs-" + personData.number).animate({
                "height": (personData.uH * -1) * 0.4,
                "bottom": (personData.uH * 0.4) - 83
            }, personData.duration);
            }

            if (am == "f") {
    
                let relD = (parseInt(personData.uD) - sMMssM + 200) * -1;
                let relW = parseInt(((personData.uW) * -1) + historyCoords + 847) + "px";
    
                $("#" + personCode1).find(".tree").animate({
                        "left": relW,
                        "bottom": personData.uH * (-1 * 0.4)
                    }, personData.duration, "linear");

                $("#" + personCode1).css("transition","bottom " + (personData.duration / 1000) + "s linear 0s, transform " + (personData.duration / 1000) + "s linear 0s, margin-bottom " + (personData.duration / 1000) + "s linear 0s");
                $("#" + personCode1).toggleClass("scale" + oldD).toggleClass("scale" + relD);
                $("#" + personCode1).attr("distance", relD);
                $("#" + personCode1).css("transition","bottom 0.0s linear 0s, transform 0.0s linear 0s, margin-bottom 0.0s linear 0s");
                
            if (Math.abs(parseInt(relW) + 800) > relD) { crucDistance = Math.abs(parseInt(relW) + 800); } else { crucDistance = relD; } 
    
            if (Math.abs(parseInt(relW) + 800) > 10000 || Math.abs(relD) > 9000) { fleoPersonsDistance[personData.number] = 0; } else {
                if (crucDistance < 2000) {
                    fleoPersonsDistance[personData.number] = 4; 
                } if (crucDistance > 1999 && crucDistance < 3500) {
                    fleoPersonsDistance[personData.number] = 3; 
                } if (crucDistance > 3499 && crucDistance < 6000) {
                    fleoPersonsDistance[personData.number] = 2; 
                } if (crucDistance > 5999 && crucDistance < 9000) {
                    fleoPersonsDistance[personData.number] = 1; 
                } 
            }
    
            if (fleoPersonsDistance[personData.number] !== fleoPersonsDistanceOld || distanceSentOnce[personData.number] == 0) { 
                ws.send(JSON.stringify({type:"distance",whoC:(myNumber[0] + myNumber[2]).replace("#", ""),othDistance:JSON.stringify(fleoPersonsDistance)}));
                fleoPersonsDistanceOld = fleoPersonsDistance[personData.number];
                distanceSentOnce[personData.number] = 1;
                // console.log(fleoPersonsDistance); console.log(relW + " " + relD);
            }
            
    
            locateHorizontal = 150 + (((parseInt(personData.uW) * -1) + historyCoords) / 300);
            locateVertical = 150 + (relD / 300);
            
            bottomLocate = locateVertical - 2.5 + "px";
            leftLocate = locateHorizontal - 2.5 + "px";
    
            /* if (locateVertical < 150) { $("#maennikenLocator-" + personData.number).css("background","red"); bottomLocate = 150 + (150 - Math.abs(locateVertical)) + "px"; } else {
                $("#maennikenLocator-" + personData.number).css("background","white"); 
            }
    
            $("#maennikenLocator-" + personData.number).css({
                "left": leftLocate,
                "bottom": bottomLocate
            }); */
    
            } 
    
            if (am == "b") {
    
                let relD = ((parseInt(personData.uD) - sMMssM - 200) * 1) + (went * 2);
                let relW = parseInt(((personData.uW) * -1) + historyCoords + 847) + "px";
    
                $("#" + personCode1).css("transition","bottom " + (personData.duration / 1000) + "s linear 0s, transform " + (personData.duration / 1000) + "s linear 0s, margin-bottom " + (personData.duration / 1000) + "s linear 0s");
                $("#" + personCode1).toggleClass("scale" + oldD).toggleClass("scale" + relD);
                $("#" + personCode1).attr("distance", relD);
                $("#" + personCode1).css("transition","bottom 0.0s linear 0s, transform 0.0s linear 0s, margin-bottom 0.0s linear 0s");
    
                $("#" + personCode1).find(".tree").animate({
                    "left": relW,
                    "bottom": personData.uH * (-1 * 0.4)
                }, personData.duration, "linear");
    
                    if (Math.abs(parseInt(relW) + 800) > relD) { crucDistance = Math.abs(parseInt(relW) + 800); } else { crucDistance = relD; } 
    
                    if (Math.abs(parseInt(relW) + 800) > 10000 || Math.abs(relD) > 9000) { fleoPersonsDistance[personData.number] = 0; } else {
                        if (crucDistance < 2000) {
                            fleoPersonsDistance[personData.number] = 4; 
                        } if (crucDistance > 1999 && crucDistance < 3500) {
                            fleoPersonsDistance[personData.number] = 3; 
                        } if (crucDistance > 3499 && crucDistance < 6000) {
                            fleoPersonsDistance[personData.number] = 2; 
                        } if (crucDistance > 5999 && crucDistance < 9000) {
                            fleoPersonsDistance[personData.number] = 1; 
                        } 
                    }
    
                    if (fleoPersonsDistance[personData.number] !== fleoPersonsDistanceOld || distanceSentOnce[personData.number] == 0) { 
                        ws.send(JSON.stringify({type:"distance",whoC:(myNumber[0] + myNumber[2]).replace("#", ""),othDistance:JSON.stringify(fleoPersonsDistance)}));
                        fleoPersonsDistanceOld = fleoPersonsDistance[personData.number];
                        distanceSentOnce[personData.number] = 1;
                        // console.log(fleoPersonsDistance); console.log(relW + " " + relD);
                    }
                
            locateHorizontal = 150 + (((parseInt(personData.uW) * 1) + historyCoords) / 300);
            locateVertical = 150 + (relD / 300);
            
            bottomLocate = locateVertical - 2.5 + "px";
            leftLocate = locateHorizontal - 2.5 + "px";
    
            /* if (locateVertical < 150) { $("#maennikenLocator-" + personData.number).css("background","red"); bottomLocate = 150 + (150 - Math.abs(locateVertical)) + "px"; } else {
                $("#maennikenLocator-" + personData.number).css("background","white"); 
            }
    
            $("#maennikenLocator-" + personData.number).css({
                "left": leftLocate,
                "bottom": bottomLocate
            }); */
    
            } 
    
         if (personData.TA !== TAold[personData.number]) {
            if (personData.turn > 6000) { if (personData.TA == "b") {
                $("#maennikenText-" + personData.number).closest(".tree").css({perspective: '9000px', rotateY: personData.turn + 'deg'}); } else {
                $("#maennikenText-" + personData.number).closest(".tree").css({perspective: '9000px', rotateY: personData.turn + 180 + 'deg'}); } } else {
                if (personData.TA == "b") {
                $("#maennikenText-" + personData.number).closest(".tree").transition({perspective: '9000px', rotateY: personData.turn + 'deg'}, personData.duration); } else {
                $("#maennikenText-" + personData.number).closest(".tree").transition({perspective: '9000px', rotateY: personData.turn + 180 + 'deg'}, personData.duration); }
                
            } TAold[personData.number] = personData.TA; }
             
                if (personData.TA == "b") {
    
                    if (will == "b") {
                        $("#maennikenText-" + personData.number).closest(".tree").css({ transformOrigin: 'center center', perspective: '9000px', rotateY: ((personData.turn / -100) - (turn / 100)) + 'deg'}); } else {
                        $("#maennikenText-" + personData.number).closest(".tree").css({ transformOrigin: 'center center', perspective: '9000px', scaleX: -1, rotateY: ((personData.turn / 100) - (turn / 100)) + 180 + 'deg'}); } 
                    } else {
                    
                    if (will == "b") {
                        $("#maennikenText-" + personData.number).closest(".tree").css({ transformOrigin: 'center center', perspective: '9000px', rotateY:  ((personData.turn / 100) - (turn / 100)) + 180 + 'deg'}); } else {
                        $("#maennikenText-" + personData.number).closest(".tree").css({ transformOrigin: 'center center', perspective: '9000px', scaleX: -1, rotateY: ((personData.turn / -100) - (turn / 100)) + 'deg'}); }
                }
            
            if (personData.conn == 1) {
                if (persConn[personData.number] == 0) {
                persConn[personData.number] = 1;
                $(".heyImVisitorVideoImg-" + personData.number).attr("src",'/fleo.at-php/fleo.at_communication.php?video=' + personData.number + '&viewer=' + (myNumber[0] + myNumber[2]).replace("#", ""));
                $(".maennikenConferenceOffline-" + personData.number).hide(); 
                $(".maennikenConferenceCall-" + personData.number).show();
                $(".videoWallMan-" + personData.number).attr("data-audioses", personData.audioSes);
                $(".maennikenConferenceVolume-" + personData.number).html('<div class="volumeClickcallerAudio-' + personData.audioSes + '" style="position:absolute;z-index:10;top:0;left:0;height:84px;width:100%;overflow:hidden;cursor:pointer;"><div style="width:100%;height:100%;position:absolute;bottom:0;left:0;z-index:-2;transform-origin:center center;transform:scaleY(-1);" class="volumeMetercallerAudio-' + personData.audioSes + '"><div class="volumen-wrapper"><div class="led-callerAudio-' + personData.audioSes + '"></div><div class="led-callerAudio-' + personData.audioSes + '"></div><div class="led-callerAudio-' + personData.audioSes + '"></div><div class="led-callerAudio-' + personData.audioSes + '"></div><div class="led-callerAudio-' + personData.audioSes + '"></div><div class="led-callerAudio-' + personData.audioSes + '"></div><div class="led-callerAudio-' + personData.audioSes + '"></div><div class="led-callerAudio-' + personData.audioSes + '"></div><div class="led-callerAudio-' + personData.audioSes + '"></div><div class="led-callerAudio-' + personData.audioSes + '"></div></div></div>' +
                '<div style="width:100%;height:100%;position:absolute;bottom:0;left:0;z-index:-1;transform-origin:center center;transform:scaleY(-1);" class="volumeMeterGraycallerAudio-' + personData.audioSes + '"><div class="volumen-wrapper"><div class="ledGray-callerAudio-' + personData.audioSes + '"></div><div class="ledGray-callerAudio-' + personData.audioSes + '"></div><div class="ledGray-callerAudio-' + personData.audioSes + '"></div><div class="ledGray-callerAudio-' + personData.audioSes + '"></div><div class="ledGray-callerAudio-' + personData.audioSes + '"></div><div class="ledGray-callerAudio-' + personData.audioSes + '"></div><div class="ledGray-callerAudio-' + personData.audioSes + '"></div><div class="ledGray-callerAudio-' + personData.audioSes + '"></div><div class="ledGray-callerAudio-' + personData.audioSes + '"></div><div class="ledGray-callerAudio-' + personData.audioSes + '"></div></div></div><div style="background:#ff0000;width:16px;height:50%;position:absolute;bottom:0;left:calc(50% - 8px);z-index:-1;" class="volumecallerAudio-' + personData.audioSes + '"></div></div>'); 
                }
                if ($(".maennikenConferenceVolume-" + personData.number).find(".volumen-wrapper").length) {
                    changeVolumeMeMoving(personData.number);
                }
            }
            
            let nameLength = 100, marginName = 300; 
            if (personData.name.length > 14 && personData.name.length < 40) {
                nameLength = 200;
                marginName = 200;
            };
            if (personData.name.length >= 40) {
                nameLength = 400;
                marginName = 0;
            };
            
            if (personData.name !== personDataNameOld[personData.number]) {
            $("#maennikenText-" + personData.number).html(personData.name);
            $(".maennikenTextWall-" + personData.number).html(personData.name);
            $("#clicksChatCont").append('<p><span style="width:' + nameLength + 'px;margin-left:' + marginName + 'px;">' + personData.name + '</span></p>');
            personDataNameOld[personData.number] = personData.name;
            $("#maennikenSpotter-" + personData.number).attr("title", personData.name);
            }
    
            if ($("#" + personCode1).attr("room") !== personData.room) { $("#" + personCode1).attr("room", personData.room); }
            if ($("#" + personCode1).attr("room") !== myRoom) { $("#" + personCode1).addClass("otherroom"); $("#maennikenSpotter-" + personData.number).hide(); 
            // $("#maennikenSpotterEurope-" + personData.number).hide(); 
        } else { $("#" + personCode1).removeClass("otherroom"); $("#maennikenSpotter-" + personData.number).show(); 
        // $("#maennikenSpotterEurope-" + personData.number).show(); 
    }
    
            $("#heyImVisitorVideoImg-" + personData.number).css("width", 320 * personData.videoSize + "px");
            // $("#maennikenRutsch-" + personData.number).css("bottom", parseInt($("#heyImVisitorVideoImg-" + personData.number).height()));       
    
            if (personData.extra !== 0) {
                if (personData.extra == (myNumber[0] + myNumber[2]).replace("#", "") + "_1") {
                    if (userStartedOwnVideo == 0) {
                    $.post("/fleo.at-php/fleo.at_setOfflineOnline.php", { doing: 1, fleoNumOwn: personData.number, fleoNumDistant: 0 }); 
                    $("#walkAroundWithVideo").click(); // $("#walkAroundWithVideoAudioAutoAccept").click();
                }}
                if (personData.extra == (myNumber[0] + myNumber[2]).replace("#", "") + "_2") {
                    $.post("/fleo.at-php/fleo.at_setOfflineOnline.php", { doing: 3, fleoNumOwn: personData.number, fleoNumDistant: 0, extraContent: 0 }); 
                    $("body").append(personData.extraContent);
                }
            }
    
            spotterMapLatitude[personData.number] = Math.trunc(parseInt(personData.uW) / 1000) * -1;
            spotterMapLongitude[personData.number] = (parseInt(personData.uD) * -1) / 300;
            spotterMapLocationX[personData.number] = ((spotterMapLatitude[personData.number] / 360) + 0.5) * 720;
            spotterMapLocationY[personData.number] = (1 - ((spotterMapLongitude[personData.number] / 180) + 0.5)) * 360;
            $("#maennikenSpotter-" + personData.number).css({"top": spotterMapLocationY[personData.number] - 5 + "px", "left": spotterMapLocationX[personData.number] - 5 + "px"});
            // $("#maennikenSpotterEurope-" + personData.number).css({"top": spotterMapLocationY[personData.number] - 7 + "px", "left": spotterMapLocationX[personData.number] - 9 + "px"});
    
        }
            
        }

        if (personData.number == (myNumber[0] + myNumber[2]).replace("#", "")) {
            whereAmIFromSocket(personData.uW,personData.uD,personData.uH,personData.turn,personData.duration);
        }




    // if personAdmin
    if (personData.number == (myNumber[0] + myNumber[2]).replace("#", "") && (personData.isAdmin == 1 || personData.isAdmin == 2 )) {
    meIsAdmin = 1;
    }
                if (personData.kindOfGuy.includes("guy")) {
                    if (!$("#maennikenBag-" + personData.number).length) {
                        if (personData.number == (myNumber[0] + myNumber[2]).replace("#", "")) {
                            $("#nameNumberContainer").append('<div id="maennikenBag-' + (myNumber[0] + myNumber[2]).replace("#", "") + '" style="position:absolute;z-index:2000;top:36px;right:0;width:auto;height:auto;color:orange;cursor:pointer;"></div>');
                            if ($("#menuBottom")[0].offsetWidth < 450) {
                                $("#maennikenBag-" + (myNumber[0] + myNumber[2]).replace("#", "")).css({"top":"25px"}); } else {
                                $("#maennikenBag-" + (myNumber[0] + myNumber[2]).replace("#", "")).css({"top":"36px"});
                            }
                            $("#maennikenBag-" + (myNumber[0] + myNumber[2]).replace("#", "")).arrive(".medal", function() {
                                $(this).click(function(){ $(this).toggleClass("medalGreen"); });
                            });
                            $(".person").each(function(){
                                $("#maennikenBag-" + $(this).find(".tree").attr("id").replace("personTree-","")).css({"left": 82 - parseInt(($("#maennikenBag-" + $(this).find(".tree").attr("id").replace("personTree-","")).width() / 2)) + "px","bottom": 90 - parseInt(($("#maennikenBag-" + $(this).find(".tree").attr("id").replace("personTree-","")).height() / 2)) + "px"});
                            });
                        } else {
                    $("#maennikenImg-" + personData.number).parent().append('<div id="maennikenBag-' + personData.number + '" style="position:absolute;z-index:2000;bottom:80px;left:68px;min-width:20px;min-height:20px;background:brown;border:1px solid black;padding:6px;border-radius:6px;color:orange;cursor:pointer;"></div>');
                    }}
                    if (!personData.kindOfGuy.includes("1") && personData.number == (myNumber[0] + myNumber[2]).replace("#", "")) {
                        $.post("/fleo.at-php/fleo.at_bag.php", { doing: 2, iam: (myNumber[0] + myNumber[2]).replace("#", "")}).done(function(bagresponse){
                        }); 
    
                    }
    
                } else {
                    if ($("#maennikenBag-" + personData.number).length) {
                        $("#maennikenBag-" + personData.number).remove();
                        }
                }
    
    
    
                if (kindOfGuyOld[personData.number] !== personData.kindOfGuy) {
                
                    if (personData.isAdmin > 0) {
                        if (!$("#maennikenBag-" + personData.number).find(".medal0").length) {
                            $("#maennikenBag-" + personData.number).append(medals[0]);
                            if (personData.isAdmin == 2) { $("#maennikenBag-" + personData.number).find(".medal0").css("background","black"); }
                            if (personData.number == (myNumber[0] + myNumber[2]).replace("#", "")) { 
                                doTheUploadStuff(10);
                            }
                        }} else {
                            if ($("#maennikenBag-" + personData.number).find(".medal0").length) {
                                $("#maennikenBag-" + personData.number).find(".medal0").remove();
                                if (personData.number == (myNumber[0] + myNumber[2]).replace("#", "")) { 
                                    meIsAdmin = 0;
                                }
                            }
                        }  
    
                if (personData.kindOfGuy.includes("1")) {
                if (!$("#maennikenBag-" + personData.number).find(".medal1").length) {
                $("#maennikenBag-" + personData.number).append(medals[1]);
    
                if (personData.number !== (myNumber[0] + myNumber[2]).replace("#", "")) {
    
                    $("#maennikenBag-" + personData.number).css({"left": 82 - parseInt(($("#maennikenBag-" + personData.number).width() / 2)) + "px"});
                    $("#maennikenBag-" + personData.number).css({"bottom": 90 - parseInt(($("#maennikenBag-" + personData.number).height() / 2)) + "px"});
                }
                if (personData.number == (myNumber[0] + myNumber[2]).replace("#", "")) {
                    doTheUploadStuff(1);
                }
                }} else {
                    if ($("#maennikenBag-" + personData.number).find(".medal1").length) {
                        $("#maennikenBag-" + personData.number).find(".medal1").remove();
                        if (personData.number == (myNumber[0] + myNumber[2]).replace("#", "")) { doTheUploadStuff(-1); }
                    }
                }
                
                if (personData.kindOfGuy.includes("2")) {
                    if (!$("#maennikenBag-" + personData.number).find(".medal2").length) {
                    $("#maennikenBag-" + personData.number).append(medals[2]);
    
                    if (personData.number !== (myNumber[0] + myNumber[2]).replace("#", "")) {
                        $("#maennikenBag-" + personData.number).css({"left": 82 - parseInt(($("#maennikenBag-" + personData.number).width() / 2)) + "px"});
                        $("#maennikenBag-" + personData.number).css({"bottom": 90 - parseInt(($("#maennikenBag-" + personData.number).height() / 2)) + "px"});
                    }
                    if (personData.number == (myNumber[0] + myNumber[2]).replace("#", "")) { 
                        doTheUploadStuff(2); $("#goBuild").hide();
                    }
                    }} else {
                        if ($("#maennikenBag-" + personData.number).find(".medal2").length) {
                            $("#maennikenBag-" + personData.number).find(".medal2").remove();
                            if (personData.number == (myNumber[0] + myNumber[2]).replace("#", "")) { doTheUploadStuff(-2); $("#goBuild").show(); }
    
                        }
                    }
                if (personData.kindOfGuy.includes("3")) {
                    if (!$("#maennikenBag-" + personData.number).find(".medal3").length) {
                    $("#maennikenBag-" + personData.number).append(medals[3]);
    
                    if (personData.number !== (myNumber[0] + myNumber[2]).replace("#", "")) {
    
                        $("#maennikenBag-" + personData.number).css({"left": 82 - parseInt(($("#maennikenBag-" + personData.number).width() / 2)) + "px"});
                        $("#maennikenBag-" + personData.number).css({"bottom": 90 - parseInt(($("#maennikenBag-" + personData.number).height() / 2)) + "px"});
                    }  
                    if (personData.number == (myNumber[0] + myNumber[2]).replace("#", "")) { 
                        doTheUploadStuff(3);
                    }
                    }} else {
                        if ($("#maennikenBag-" + personData.number).find(".medal3").length) {
                            $("#maennikenBag-" + personData.number).find(".medal3").remove();
                            if (personData.number == (myNumber[0] + myNumber[2]).replace("#", "")) { doTheUploadStuff(-3); }
                        }
                    }
    
                kindOfGuyOld[personData.number] = personData.kindOfGuy;
                }
    
    
                        if (kindfOfGuyFunctionBuilt[personData.number] == 0) {
                            kindfOfGuyFunctionBuilt[personData.number] = 1;
                    $("#maennikenBag-" + personData.number).click(function(){
                        $.post("/fleo.at-php/fleo.at_bag.php", { doing: 1, iam: (myNumber[0] + myNumber[2]).replace("#", ""), them: personData.number }).done(function(bagresponse){
                            $("body").append('<div class="openBag" id="closeMaennikenBag-' + personData.number + '" style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:1999;"></div><div class="openBag" id="maennikenBagOpen-' + personData.number + '" style="position:fixed;height:300px;width:300px;top:calc(50% - 260px);left:calc(50% - 170px);z-index:2000;background:yellow;border:20px solid brown;color:orange;font-size:20px;"></div><div class="openBag" style="position:fixed;height:140px;width:280px;top:calc(50% + 80px);left:calc(50% - 170px);z-index:2000;background:yellow;padding:10px;border:20px solid brown;border-top:none;color:brown;font-size:20px;text-align:center;">Markiere grün Deine Medaillen um sie zu kopieren, markiere grau die Medaillen die nicht mehr sollen.</div>');
                            if (bagresponse.includes("guy")) {
                                let myNewKindOfGuy = bagresponse;
                                let makeAdmin = 0;
                                if ($("#maennikenBag-" + personData.number).find(".medal0").length) {
                                    $("#maennikenBagOpen-" + personData.number).append(medals[0]);
                                    if (personData.isAdmin == 2) { $("#maennikenBagOpen-" + personData.number).find(".medal0").css("background","black"); }
                                    makeAdmin = 1;
                                } else {
                                    makeAdmin = 0;
                                }
                                if (myNewKindOfGuy.includes("1")) {
                                    $("#maennikenBagOpen-" + personData.number).append(medals[1]);
                                }
                                if (myNewKindOfGuy.includes("2")) {
                                    $("#maennikenBagOpen-" + personData.number).append(medals[2]);
                                }
                                if (myNewKindOfGuy.includes("3")) {
                                    $("#maennikenBagOpen-" + personData.number).append(medals[3]);
                                }
                                $("#maennikenBagOpen-" + personData.number + " .medal").click(function(){
                                    $(this).toggleClass("medalGray");
                                });
    
                        
                                 $("#closeMaennikenBag-" + personData.number).click(function(){ 
                                    
                                    $("#maennikenBag-" + (myNumber[0] + myNumber[2]).replace("#", "") + " .medalGreen").each( function() {
                                        if ($(this).attr("medalcode") == "0") { makeAdmin = 1; } else {
                                        if (!myNewKindOfGuy.includes($(this).attr("medalcode"))){
                                            myNewKindOfGuy += $(this).attr("medalcode");
                                            console.log($(this).attr("medalcode"));
                                            }
                                        }
                                    });
    
                                    $("#maennikenBagOpen-" + personData.number + " .medalGray").each( function() {
                                        if ($(this).attr("medalcode") == "0") { makeAdmin = 0; } else {
                                        myNewKindOfGuy = myNewKindOfGuy.replace($(this).attr("medalcode"),"");
                                        }
                                    });
                                
                                    $.post("/fleo.at-php/fleo.at_bag.php", { doing: 3, iam: (myNumber[0] + myNumber[2]).replace("#", ""), them: personData.number, newKindOfGuy: myNewKindOfGuy, makeAdmin: makeAdmin }).done(function(){ 
                                        $(".openBag").remove(); 
                                        $("#maennikenBag-" + (myNumber[0] + myNumber[2]).replace("#", "")).find(".medalGreen").removeClass("medalGreen");
                                    });
                                });
                            } else {
                                $("#maennikenBagOpen-" + personData.number).remove(); $("#closeMaennikenBag-" + personData.number).remove(); 
                                // $("#maennikenBag-" + (myNumber[0] + myNumber[2]).replace("#", "")).find(".medalGreen").removeClass("medalGreen");
                            }
    
                        })
                        
                    });
                }
    
                if (personData.number == (myNumber[0] + myNumber[2]).replace("#", "") && (personData.isAdmin == 1 || personData.isAdmin == 2)) {
                    
                }

      
    
    }



if (personDataComplete.type == "newVideo") {

    var fleoVideosTot = [];

          if (fleoVideosTot.indexOf(personData.fleoNum) === -1) {
            fleoVideosTot.push(personData.fleoNum);
              if (personData.fleoNum !== parseInt((myNumber[0] + myNumber[2]).replace("#", "")) && $("#personCode-" + personData.fleoNum).length) {
                startMagicFleo(personData.fleoNum); 
      } 
  };
    } 
}
};
ws.onclose = function(e) {
console.log('Socket is closed. Reconnect will be attempted in a second.');
};


function whereAmIFromSocket(hiCo, sMMs, level, turn, duration, whoC, colorC) {

    if (ws.readyState === WebSocket.OPEN) {
        // $("#flash").addClass("ffff");
        // ws.send(JSON.stringify({doing:9,hiCo:hiCo,sMMs:sMMs,level:level,turnX:0,turnZ:0,whoC:whoC}));
        
        
        // setTimeout(function(){ $("#flash").removeClass("ffff"); }, 50);
    
    } else {
        /* $.ajax({
            beforeSend: function () {
                $("#flash").addClass("ffff");
            },
            type: "POST",
            url: "/fleo.at-php/moving.php",
            dataType: "json",
            data: {
                doing: 9,
                hiCo: hiCo,
                sMMs: sMMs,
                level: level,
                whoC: whoC,
                colorC: colorC
            }
        }).always(function () {*/
            var kbjae2Xowl = Math.floor(Math.random() * 50);
            if (kbjae2Xowl == 0) {
              //  owl.play();
            }
            

            // }
            $("#flash").removeClass("ffff");

        }
        // );
    } 