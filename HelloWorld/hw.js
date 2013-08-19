var W = 720;
var H = 540;

var BG = new collie.Layer({ width: W, height: H });
var Layer1 = new collie.Layer({ width: W, height: H });
var TitleScreen = new collie.Layer({ width: W, height: H });
var MainMenu = new collie.Layer({ width: W, height: H });


collie.ImageManager.add({
    logo: "http://jindo.dev.naver.com/collie/img/small/logo.png",
    ground: "./ground.png",
    Mario: "./smb_mario_sheet.png",
    Yoshi: "./yoshi_walk.png",
    Paper: "./paperBG1.jpg",
    Munchkin: "./super_munchkin.png"
});


var oBGPaper = new collie.DisplayObject({
    x: "center",
    y: "center",
    width: W,
    height: H,
    backgroundImage: "Paper"
}).addTo(BG);


var oGround = new collie.DisplayObject({
    x: 0,
    y: "bottom",
    width: W * 2,
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
    fontFamily: "Quasi",
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
    width: W,
    scaleX: 1,
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 100
}).text("Munchkin").addTo(TitleScreen);

var oTitle1 = new collie.Text({
    x: 288,
    y: 144,
    width: 372,
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 28
}).text("Original Game Design by Steve Jackson").addTo(TitleScreen);

var oTitle2 = new collie.Text({
    x: 352,
    y: 224,
    width: 256,
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 28
}).text("Illustrations by John Kovalic").addTo(TitleScreen);

var oTitle3 = new collie.Text({
    x: 280,
    y: 304,
    width: 400,
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 28
}).text("JavaScript Port designed + coded by Dustin Duffy, Tom Kruk + John Prinz").addTo(TitleScreen);

var oMunchkin = new collie.DisplayObject({
    x: -8,
    y: 108,
    width: 360,
    height: 440,
    scaleX: 0.9,
    scaleY: 0.9,
    backgroundImage: "Munchkin"
}).addTo(TitleScreen);

var oBtnStart = new collie.DisplayObject({
    x: 384,
    y: 432,
    width: 256,
    height: 64,
    backgroundColor: "rgba(255,255,192,0.6)"
}).attach({
    "click": showMainMenu
}).addTo(TitleScreen);

var oBtnStartText = new collie.Text({
    x: 384,
    y: 448,
    width: 256,
    //height: 64,
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 48
}).text("Start").addTo(TitleScreen);


var oMainMenuText = new collie.Text({
    x: "center",
    y: "center",
    width: W,
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 100
}).text("Main Menu").addTo(MainMenu);


collie.Renderer.addLayer(BG);
collie.Renderer.addLayer(Layer1);
collie.Renderer.load(document.getElementById("hw"));
collie.Renderer.start("30fps");

var tTimer = setInterval(timerDone, 400);

function timerDone() {
    //alert("Timer done.");
    collie.Renderer.removeLayer(Layer1);
    collie.Renderer.addLayer(TitleScreen);
    clearInterval(tTimer);
}

function showMainMenu(e) {
    collie.Renderer.removeLayer(TitleScreen);
    collie.Renderer.addLayer(MainMenu);
}

