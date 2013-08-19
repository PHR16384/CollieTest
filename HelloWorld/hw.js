var BG = new collie.Layer({
    width: 640,
    height: 480
});
var Layer1 = new collie.Layer({
    width: 640,
    height: 480
});
var TitleScreen = new collie.Layer({
    width: 640,
    height: 480
});

collie.ImageManager.add({
    logo: "http://jindo.dev.naver.com/collie/img/small/logo.png",
    ground: "./ground.png",
    Mario: "./smb_mario_sheet.png",
    Yoshi: "./yoshi_walk.png",
    Paper: "./paperBG1.jpg",
    Munchkin: "./super_munchkin.png"
});

var oBG = new collie.DisplayObject({
    x: "center",
    y: "center",
    width: 640,
    height: 480,
    backgroundImage: "Paper"
}).addTo(BG);

var oGround = new collie.DisplayObject({
    x: 0,
    y: "bottom",
    width: 640 * 2,
    height: 88,
    backgroundImage: "ground",
    backgroundRepeat: "repeat-x",
    positionRepeat: true,  // This object move the other side when It's on one end of the edge.
    velocityX: -80,
    rangeX: [-320,0]
}).addTo(Layer1);

var oYoshi = new collie.MovableObject({
    x: "center",
    y: "bottom",
    width: 50,
    scaleX: 2,
    scaleY: 2,
    backgroundImage: "Yoshi"
}).addTo(Layer1);

var oLoadText = new collie.Text({
    x: "center",
    y: "center",
    width: 400,
    textAlign: "center",
    fontFamily: "Quasimodo",
    fontColor: "rgb(64,32,0)",
    fontSize: 64
}).text("Loading . . .").addTo(Layer1);

collie.Timer.cycle(oYoshi, 750, {
    from: 0,
    to: 8,
    loop: 0
});


var oTitle = new collie.Text({
    x: "center",
    y: 32,
    width: 640,
    scaleX: 0.9,
    textAlign: "center",
    fontFamily: "Quasimodo",
    fontColor: "rgb(64,32,0)",
    fontSize: 96
}).text("Munchkin").addTo(TitleScreen);

var oTitle1 = new collie.Text({
    x: 280,
    y: 128,
    width: 320,
    textAlign: "center",
    fontFamily: "Quasimodo",
    fontColor: "rgb(64,32,0)",
    fontSize: 24
}).text("Original Game Design by Steve Jackson").addTo(TitleScreen);

var oTitle2 = new collie.Text({
    x: 336,
    y: 192,
    width: 224,
    textAlign: "center",
    fontFamily: "Quasimodo",
    fontColor: "rgb(64,32,0)",
    fontSize: 24
}).text("Illustrations by John Kovalic").addTo(TitleScreen);

var oTitle3 = new collie.Text({
    x: 280,
    y: 256,
    width: 336,
    textAlign: "center",
    fontFamily: "Quasimodo",
    fontColor: "rgb(64,32,0)",
    fontSize: 24
}).text("JavaScript Port designed + coded by Dustin Duffy, Tom Kruk + John Prinz").addTo(TitleScreen);

var oMunchkin = new collie.DisplayObject({
    x: -24,
    y: 72,
    width: 360,
    height: 440,
    scaleX: 0.8,
    scaleY: 0.8,
    backgroundImage: "Munchkin"
}).addTo(TitleScreen);


collie.Renderer.addLayer(BG);
collie.Renderer.addLayer(Layer1);
collie.Renderer.load(document.getElementById("hw"));
collie.Renderer.start("30fps");

var tTimer = setInterval(timerDone, 1000);

function timerDone() {
    //alert("Timer done.");
    collie.Renderer.removeLayer(Layer1);
    collie.Renderer.addLayer(TitleScreen);
    clearInterval(tTimer);
}

