//document.writeln(navigator.userAgent);
$("#DEBUG").prepend("<p />" + navigator.userAgent);

var W = 720;
var H = 540;

var Layer1 = new collie.Layer({ width: W, height: H });
var BG = Layer1.clone();
var TitleScreen = Layer1.clone();

var TitleText = new collie.Layer({
    x: W / 2,
    y: 112,
    width: W / 2,
    height: 480
});

var Credits = new collie.Layer({
    x: W * 0.4,
    y: 160,
    width: W * 0.6,
    height: 360
});

var Rules = Credits.clone();

var GameBoard = Layer1.clone();


collie.ImageManager.add({
    //logo: "http://jindo.dev.naver.com/collie/img/small/logo.png",
    ground: "./Images/ground.png",
    //Mario: "./Images/smb_mario_sheet.png",
    Yoshi: "./Images/yoshi_walk.png",
    Paper: "./Images/paperBG1.jpg",
    Munchkin: "./Images/super_munchkin.png",
    DA_RULES: "./Images/Da-yellow-rules.jpg"
});


var imgBGPaper = new collie.DisplayObject({
    x: "center",
    y: "center",
    width: W,
    height: H,
    backgroundImage: "Paper"
}).addTo(BG);


// Layer1

var imgGround = new collie.DisplayObject({
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

var imgYoshi = new collie.MovableObject({
    x: "center",
    y: "bottom",
    width: 50,
    scaleX: 2,
    scaleY: 2,
    backgroundImage: "Yoshi"
});
    //.addTo(Layer1);

var txtLoading = new collie.Text({
    x: "center",
    y: "center",
    width: 400,
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 64,
    padding: "64 0 0 0"
}).text("Loading . . .").addTo(Layer1);

collie.Timer.cycle(imgYoshi, 750, {
    from: 0,
    to: 8,
    loop: 0
});
//


// Title Screen

var txtTitle = new collie.Text({
    x: "center",
    y: 0,
    width: W,
    scaleX: 1,
    textAlign: "center",
    //textBaseline: "alphabetic",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 108,
    padding: "96 0 0 0"
}).text("Munchkin").addTo(TitleScreen);

var txtTM = new collie.Text({
    x: "right",
    y: 12,
    width: 76,
    fontFamily: "serif",
    fontColor: "rgb(64,32,0)",
    fontWeight: "bold",
    fontSize: 12,
    padding: "12 0 0 0"
}).text("TM").addTo(txtTitle);    // \u00AE

var txtSubtitle = new collie.Text({
    x: "center",
    y: 108,
    width: W,
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontStyle: "italic",
    fontSize: 18,
    padding: "18 0 0 0"
}).text("Kill the Monsters * Steal the Treasure * Stab Your Buddy").addTo(TitleScreen);

var imgMunchkin = new collie.DisplayObject({
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

var txtCopyright = new collie.Text({
    x: "right",
    y: "bottom",
    width: 320,
    //textAlign: "right",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontWeight: "bold",
    fontSize: 16,
    padding: "16 0 0 0"
}).text("\u00A92013 [Dev. Group Name Here]").addTo(TitleText);

var nBTN_V_MM = 72; //NOTE: cannot "stack" items w/ events listeners; events will bubble along parent/child tree

var btnNewGame = new collie.Text({
    //x: 0,
    y: nBTN_V_MM,
    width: 320,
    height: 48,
    backgroundColor: "rgba(255,255,192,0.6)",
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 40,
    padding: "38 0 0 0"
})
    .text("New Game")
    .attach({
        "click": showGameBoard
    })
    .addTo(TitleText);

var btnJoinGame = new collie.Text({
    //x: 0,
    y: nBTN_V_MM * 2,
    width: 320,
    height: 48,
    backgroundColor: "rgba(255,255,192,0.6)",
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 40,
    padding: "38 0 0 0"
})
    .text("Join Game")
    .addTo(TitleText);

var btnRules = new collie.Text({
    //x: 0,
    y: nBTN_V_MM * 3,
    width: 320,
    height: 48,
    backgroundColor: "rgba(255,255,192,0.6)",
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 40,
    padding: "38 0 0 0"
})
    .text("Rules")
    .attach({
        "click": showRules
    })
    .addTo(TitleText);

var btnCredits = new collie.Text({
    //x: 0,
    y: nBTN_V_MM * 4,
    width: 320,
    height: 48,
    backgroundColor: "rgba(255,255,192,0.6)",
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 40,
    padding: "38 0 0 0"
})
    .text("Credits")
    .attach({
        "click": showCredits
    })
    .addTo(TitleText);
//


// Credits

var txtCredit = new collie.Text({
    x: "center",
    y: 0,
    width: 480,
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 20,
    padding: "20 0 0 0"
}).text("Original Game Design by").addTo(Credits);

var txtCreditA1 = new collie.Text({
    x: 0,
    y: 24,
    width: 480,
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontWeight: "bold",
    fontSize: 32,
    padding: "32 0 0 0"
}).text("Steve Jackson").addTo(txtCredit);

var txtCreditB = new collie.Text({
    x: 0,
    y: 80,
    width: 480,
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 20,
    padding: "20 0 0 0"
}).text("Illustrations by").addTo(txtCredit);

// "clone()" duplicates the attributes of an object.  I can use this to copypasta relative positioning attr., to "stack" text objects:
var txtCreditB1 = txtCreditA1.clone().text("John Kovalic").addTo(txtCreditB);

var txtCreditC = new collie.Text({
    x: 0,
    y: 160,
    width: 480,
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 20,
    padding: "20 0 0 0"
}).text("JavaScript Port designed + coded by").addTo(txtCredit);

var txtCreditC1 = txtCreditB1.clone().text("Dustin Duffy").addTo(txtCreditC);

var txtCreditC2 = new collie.Text({
    x: 0,
    y: 36,
    width: 480,
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontWeight: "bold",
    fontSize: 32,
    padding: "32 0 0 0"
}).text("Tom Kruk").addTo(txtCreditC1);

var txtCreditC3 = txtCreditC2.clone().text("John Prinz").addTo(txtCreditC2);

var btnMainMenu = new collie.Text({
    x: "center",
    y: "bottom",
    width: 320,
    height: 48,
    backgroundColor: "rgba(255,255,192,0.6)",
    textAlign: "center",
    fontFamily: "Quasi",
    fontColor: "rgb(64,32,0)",
    fontSize: 40,
    padding: "38 0 0 0"
}).text("Main Menu")
    .attach({
        "click": showMainMenu
    })
    .addTo(Credits);
//


// DA RULES.

var imgRULES = new collie.DisplayObject({
    x: "center",
    width: 347,
    height: 266,
    backgroundImage: "DA_RULES"
}).addTo(Rules);

var btnMainMenu2 = btnMainMenu.clone()
    .text("Main Menu")
    //.detachAll()
    .attach({
        "click": showMainMenu
    })
    .addTo(Rules);

//


//collie.Renderer.DEBUG_RENDERING_MODE = "canvas";

collie.Renderer.addLayer(BG);
collie.Renderer.addLayer(Layer1);
collie.Renderer.load(document.getElementById("hw"));
collie.Renderer.start("30fps");

var tTimer = setInterval(timerDone, 600);

function timerDone() {
    //alert("Timer done.");
    collie.Renderer.removeLayer(Layer1);
    collie.Renderer.addLayer(TitleScreen);
    collie.Renderer.addLayer(TitleText);
    
    //txtTitle._oDrawing._oContext.textBaseline = "top";
    console.log(txtTitle._oDrawing._oContext.textBaseline);
    
    clearInterval(tTimer);
}


function showMainMenu(e) {
    collie.Renderer.removeAllLayer();
    collie.Renderer.addLayer(BG);
    collie.Renderer.addLayer(TitleScreen);
    collie.Renderer.addLayer(TitleText);
}

function showCredits(e) {
    collie.Renderer.removeLayer(TitleText);
    collie.Renderer.addLayer(Credits);
}

function showRules(e) {
    collie.Renderer.removeLayer(TitleText);
    collie.Renderer.addLayer(Rules);
}

function showGameBoard(e) {
    collie.Renderer.removeAllLayer();
    collie.Renderer.addLayer(BG);
    collie.Renderer.addLayer(GameBoard);
}

