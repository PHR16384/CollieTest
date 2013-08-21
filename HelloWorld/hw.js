document.writeln(navigator.userAgent);

var W = 720;
var H = 540;

var BG = new collie.Layer({ width: W, height: H });
var Layer1 = new collie.Layer({ width: W, height: H });
var TitleScreen = new collie.Layer({ width: W, height: H });

var TitleText = new collie.Layer({
    x: W / 2,
    y: 144,
    width: W / 2,
    height: 456
});

var Credits = new collie.Layer({
    x: W / 3,
    y: 160,
    width: 2*W/3,
    height: 360
});


collie.ImageManager.add({
    //logo: "http://jindo.dev.naver.com/collie/img/small/logo.png",
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


// Layer1

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
});
    //.addTo(Layer1);

var oYoshi = new collie.MovableObject({
    x: "center",
    y: "bottom",
    width: 50,
    scaleX: 2,
    scaleY: 2,
    backgroundImage: "Yoshi"
});
    //.addTo(Layer1);

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
//


// Title Screen

var oTitle = new collie.Text({
    x: "center",
    y: 0,
    width: W,
    scaleX: 1,
    textAlign: "center",
    //textBaseline: "alphabetic",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 108
}).text("Munchkin").addTo(TitleScreen);

var oSubtitle = new collie.Text({
    x: "center",
    y: 108,
    width: W,
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontStyle: "italic",
    fontSize: 18
}).text("Kill the Monsters * Steal the Treasure * Stab Your Buddy").addTo(TitleScreen);

var oMunchkin = new collie.DisplayObject({
    x: -8,
    y: 112,
    width: 360,
    height: 440,
    scaleX: 0.9,
    scaleY: 0.9,
    backgroundImage: "Munchkin"
}).addTo(TitleScreen);
//


// Title Text/Buttons:

var oCopyright = new collie.Text({
    x: "right",
    y: "bottom",
    width: 320,
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontWeight: "bold",
    fontSize: 16
}).text("(c)2013 [Dev. Group Name Here]").addTo(TitleText);

var oBtnNewGame = new collie.Text({
    x: 0,
    y: 88,
    width: 320,
    height: 48,
    padding: "4 0 4 0",
    backgroundColor: "rgba(255,255,192,0.6)",
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 40
}).text("New Game")
    .addTo(TitleText);

var oBtnJoinGame = oBtnNewGame.clone().text("Join Game").addTo(oBtnNewGame);
var oBtnCredits = oBtnNewGame.clone().text("Credits")
    .attach({
        "click": showCredits
    })
    .addTo(oBtnJoinGame);
//


// Credits

var oCredit = new collie.Text({
    x: 0,
    y: 0,
    width: 480,
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 20
}).text("Original Game Design by").addTo(Credits);

var oCreditA1 = new collie.Text({
    x: 0,
    y: 24,
    width: 480,
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontWeight: "bold",
    fontSize: 32
}).text("Steve Jackson").addTo(oCredit);

var oCreditB = new collie.Text({
    x: 0,
    y: 80,
    width: 480,
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 20
}).text("Illustrations by").addTo(oCredit);

// "clone()" duplicates the attributes of an object.  I can use this to copypasta relative positioning attr., to "stack" text objects:
var oCreditB1 = oCreditA1.clone().text("John Kovalic").addTo(oCreditB);

var oCreditC = new collie.Text({
    x: 0,
    y: 160,
    width: 480,
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 20
}).text("JavaScript Port designed + coded by").addTo(oCredit);

var oCreditC1 = oCreditB1.clone().text("Dustin Duffy").addTo(oCreditC);

var oCreditC2 = new collie.Text({
    x: 0,
    y: 32,
    width: 480,
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontWeight: "bold",
    fontSize: 32
}).text("Tom Kruk").addTo(oCreditC1);

var oCreditC3 = oCreditC2.clone().text("John Prinz").addTo(oCreditC2);

var oBtnMainMenu = new collie.Text({
    x: "center",
    y: "bottom",
    width: 320,
    height: 48,
    backgroundColor: "rgba(255,255,192,0.6)",
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 40
}).text("Main Menu")
    .attach({
        "click": showMainMenu
    })
    .addTo(Credits);
//


//collie.Renderer.DEBUG_RENDERING_MODE = "canvas";

collie.Renderer.addLayer(BG);
collie.Renderer.addLayer(Layer1);
collie.Renderer.load(document.getElementById("hw"));
collie.Renderer.start("30fps");

var tTimer = setInterval(timerDone, 250);

function timerDone() {
    //alert("Timer done.");
    collie.Renderer.removeLayer(Layer1);
    collie.Renderer.addLayer(TitleScreen);
    collie.Renderer.addLayer(TitleText);
    
    //oTitle._oDrawing._oContext.textBaseline = "top";
    console.log(oTitle._oDrawing._oContext.textBaseline);
    
    clearInterval(tTimer);
}

function showCredits(e) {
    collie.Renderer.removeLayer(TitleText);
    collie.Renderer.addLayer(Credits);
}

function showMainMenu(e) {
    collie.Renderer.removeAllLayer();
    collie.Renderer.addLayer(BG);
    collie.Renderer.addLayer(TitleScreen);
    collie.Renderer.addLayer(TitleText);
}
