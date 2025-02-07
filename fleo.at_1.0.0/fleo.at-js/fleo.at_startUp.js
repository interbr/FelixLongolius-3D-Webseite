var ready = 0;
$("body").append('<div id="startUpAnimation" style="position:fixed;z-index:99999999;display:flex;justify-content:center;align-items:center;width:100%;height:100vh;top:0;left:0;background:transparent;"><img id="fleoAtStartUpFrame" src="/fleo.at-medien/layout/startup/outer.png" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:auto;border-top:calc((100vh - 100vw * 9 / 16) / 2) solid gray;border-bottom:calc((100vh - 100vw * 9 / 16) / 2) solid gray;z-index:99999997;" /><img id="fleoAtStartUpInner-2" src="/fleo.at-medien/layout/startup/inner-2.png" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:auto;transform-origin:center center;z-index:99999999;" /><img id="fleoAtStartUpInner-1" src="/fleo.at-medien/layout/startup/inner-1.png" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:auto;transform-origin:center center;z-index:99999999;" /><img id="fleoAtStartUpInner-0" src="/fleo.at-medien/layout/startup/inner-0.png" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:auto;transform-origin:center center;z-index:99999998;" /></div>');
function startUpAnimationDo() {
let animInner2 = Math.floor(Math.random() * 600) + 200;
let animInner1= Math.floor(Math.random() * 600) + 200;
let animInner0 = Math.floor(Math.random() * 600) + 200;
let animOuter = Math.floor(Math.random() * 600) + 200;
$("#fleoAtStartUpOuter").transition({ "transform":"translate(-50%,-50%) scale(1.1" + animOuter + ")" }, animOuter, function(){ $("#fleoAtStartUpOuter").transition({ "transform":"translate(-50%,-50%) scale(1)" }, animOuter); });
$("#fleoAtStartUpInner-2").transition({ "transform":"translate(-50%,-50%) scale(1.1" + animInner2 + ")" }, animInner2, function(){ $("#fleoAtStartUpInner-2").transition({ "transform":"translate(-50%,-50%) scale(1)" }, animInner2); });
$("#fleoAtStartUpInner-1").transition({ "transform":"translate(-50%,-50%) scale(1.1" + animInner1 + ")" }, animInner1, function(){ $("#fleoAtStartUpInner-1").transition({ "transform":"translate(-50%,-50%) scale(1)" }, animInner1); });
$("#fleoAtStartUpInner-0").transition({ "transform":"translate(-50%,-50%) scale(1.1" + animInner0 + ")" }, animInner0, function(){ $("#fleoAtStartUpInner-0").transition({ "transform":"translate(-50%,-50%) scale(1)" }, animInner0); });
if (ready == 1) { clearInterval(startUpAnimation); $("#startUpAnimation").animate({"opacity":0},900, function() { $("#startUpAnimation").remove();     
    $.post("https://" + mainDomain + "/fleo.at-php/present.php", { doing: 8, number: (myNumber[0] + myNumber[2]).replace("#", ""), name: myNumber[1], color: myNumber[2], cD: sMMssM, cH: relationToBackground, cW: historyCoords });  }); }
}
var startUpAnimation = setInterval(function(){
startUpAnimationDo();
}, 2000);
startUpAnimationDo();