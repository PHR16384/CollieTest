var BG = new collie.Layer({
    width: 640,
    height: 480
});
var Layer1 = new collie.Layer({
    width: 640,
    height: 480
});

collie.ImageManager.add({
    logo: "http://jindo.dev.naver.com/collie/img/small/logo.png",
    ground: "./ground.png",
    Mario: "./smb_mario_sheet.png",
    Yoshi: "./yoshi_walk.png"
});

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
}).addTo(BG);

var oYoshi = new collie.MovableObject({
    x: "center",
    y: "bottom",
    width: 50,
    scaleX: 2,
    scaleY: 2,
    backgroundImage: "Yoshi"
}).addTo(Layer1);

var oTitle = new collie.Text({
    x: "center",
    y: "center",
    width: 400,
    textAlign: "center",
    fontFamily: "Quasimodo",
    fontColor: "rgb(96,48,0)",
    fontSize: 64
}).text("Loading . . .").addTo(Layer1);

collie.Timer.cycle(oYoshi, 750, {
    from: 0,
    to: 8,
    loop: 0,
});

collie.Renderer.addLayer(BG);
collie.Renderer.addLayer(Layer1);
collie.Renderer.load(document.getElementById("container"));
collie.Renderer.start("30fps");

//var tTimer = setInterval(timerDone, 3000);

function timerDone() {
    //alert("Timer done.");
    collie.Renderer.removeLayer(Layer1);
    clearInterval(tTimer);
}
