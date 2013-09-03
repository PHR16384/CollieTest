$(document).ready(function () {

    //document.writeln(navigator.userAgent);
    $("#DEBUG").prepend("<p />" + navigator.userAgent);
    
    var DIR = "./JS/";

    load("getDB.js")
        .then("CardClasses.js","PlayerClasses.js")
        .then("CanvasLayers.js")
        .thenRun(function () {
            alert("JS Classes loaded.");
        });

    // raw HTML5 audio?
    var sndPaper = new Audio("./Sound/item_paper_pickup.wav");

    //alert( (new Audio()).canPlayType("audio/x-wav") );


    // create Collie layers:

    var W = 1024;
    var H = 768;

    var Layer1 = new collie.Layer({ width: W, height: H });
    var BG = Layer1.clone();
    var TitleScreen = Layer1.clone();

    var TitleText = new collie.Layer({
        x: W / 2,
        y: H / 5,
        width: W / 2,
        height: H * 0.88
    });

    var Credits = new collie.Layer({
        x: W * 0.4,
        y: H * 0.3,
        width: W * 0.6,
        height: H * 0.66
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
    collie.Timer.cycle(imgYoshi, 750, {
        from: 0,
        to: 8,
        loop: 0
    });

    var txtLoading = new collie.Text({
        x: "center",
        y: "center",
        width: 400,
        textAlign: "center",
        fontFamily: "Quasi",
        fontColor: "rgb(64,32,0)",
        fontSize: 64,
        padding: "64px 0 0 0"
    }).text("Loading . . .").addTo(Layer1);

    //


    // Title Screen

    var txtTitle = new collie.Text({
        x: "center",
        y: 0,
        width: W * 0.9,
        height: H * 0.34,
        scaleX: 1,
        textAlign: "center",
        //textBaseline: "alphabetic",
        fontFamily: "Quasi",
        fontColor: "rgb(64,32,0)",
        fontSize: 144,
        padding: "144px 0 0 0"
    }).text("Munchkin").addTo(TitleScreen);

    var txtTM = new collie.Text({
        x: "right",
        y: 32,
        width: 76,
        fontFamily: "serif",
        fontColor: "rgb(64,32,0)",
        fontWeight: "bold",
        fontSize: 16,
        padding: "16px 0 0 0"
    }).text("TM").addTo(txtTitle);    // \u00AE

    var txtSubtitle = new collie.Text({
        x: "center",
        y: "bottom",
        width: W,
        textAlign: "center",
        fontFamily: "Quasi",
        fontColor: "rgb(64,32,0)",
        fontStyle: "italic",
        fontSize: 24,
        padding: "24px 0 0 0"
    }).text("Kill the Monsters * Steal the Treasure * Stab Your Buddy").addTo(txtTitle);

    var imgMunchkin = new collie.DisplayObject({
        x: 64,
        y: 256,
        width: 360,
        height: 440,
        scaleX: 1.2,
        scaleY: 1.2,
        backgroundImage: "Munchkin"
    }).addTo(TitleScreen);
    //


    // Title Text/Buttons:

    var txtCopyright = new collie.Text({
        x: "right",
        y: "bottom",
        width: W * 0.44,
        textAlign: "right",
        fontFamily: "Quasi",
        fontColor: "rgb(64,32,0)",
        fontWeight: "bold",
        fontSize: 20,
        padding: "20px 20px 0 0"
    }).text("\u00A92013 DJT Group").addTo(TitleText);

    //NOTE: cannot "stack" items w/ events listeners; events will bubble along parent/child tree
    //var nBTN_V_MM = 72;
    //FIXED: use e.stop() in event handler function to stop bubbling

    var btnNewGame = new collie.Text({
        x: 0,
        y: 112,
        width: 400,
        height: 72,
        backgroundColor: "rgba(255,255,192,0.6)",
        textAlign: "center",
        fontFamily: "Quasi",
        fontColor: "rgb(64,32,0)",
        fontSize: 56,
        padding: "56px 0 0 0"
    })
        .text("New Game")
        .attach({
            "click": function (e) {
                e.stop();
                sndPaper.play();
                showGameBoard(e);
            }
        })
        .addTo(TitleText);

    var btnJoinGame = btnNewGame.clone()
        .text("Join Game")
        .attach({
            "click": function (e) {
                e.stop();
                sndPaper.play();
                //joinGame(e);
            }
        })
        .addTo(btnNewGame);

    var btnRules = btnNewGame.clone()
        .text("How to Play")
        .attach({
            "click": function (e) {
                e.stop();
                sndPaper.play();
                showRules(e);
            }
        })
        .addTo(btnJoinGame);

    var btnCredits = btnNewGame.clone()
        .text("Credits")
        .attach({
            "click": function (e) {
                e.stop();
                sndPaper.play();
                showCredits(e);
            }
        })
        .addTo(btnRules);
    //


    // Credits

    var txtCreditA = new collie.Text({
        x: "center",
        y: 0,
        width: W * 0.6,
        textAlign: "center",
        fontFamily: "Quasi",
        fontColor: "rgb(64,32,0)",
        fontSize: 24,
        padding: "24px 0 0 0"
    }).text("Original Game Design by").addTo(Credits);

    var txtCreditA1 = new collie.Text({
        x: 0,
        y: 24,
        width: W * 0.6,
        textAlign: "center",
        fontFamily: "Quasi",
        fontColor: "rgb(64,32,0)",
        fontWeight: "bold",
        fontSize: 48,
        padding: "48px 0 0 0"
    }).text("Steve Jackson").addTo(txtCreditA);

    var txtCreditB = new collie.Text({
        x: 0,
        y: 80,
        width: W * 0.6,
        textAlign: "center",
        fontFamily: "Quasi",
        fontColor: "rgb(64,32,0)",
        fontSize: 24,
        padding: "24px 0 0 0"
    }).text("Illustrations by").addTo(txtCreditA1);

    // "clone()" duplicates the attributes of an object.  I can use this to copypasta relative positioning attr., to "stack" text objects:
    var txtCreditB1 = txtCreditA1.clone().text("John Kovalic").addTo(txtCreditB);

    var txtCreditC = txtCreditB.clone().text("JavaScript Port designed + coded by").addTo(txtCreditB1);

    var txtCreditC1 = txtCreditA1.clone().text("Dustin Duffy").addTo(txtCreditC);

    var txtCreditC2 = new collie.Text({
        x: 0,
        y: 52,
        width: W * 0.6,
        textAlign: "center",
        fontFamily: "Quasi",
        fontColor: "rgb(64,32,0)",
        fontWeight: "bold",
        fontSize: 48,
        padding: "48px 0 0 0"
    }).text("Tom Kruk").addTo(txtCreditC1);

    var txtCreditC3 = txtCreditC2.clone().text("John Prinz").addTo(txtCreditC2);

    var btnMainMenu = new collie.Text({
        x: "center",
        y: "bottom",
        width: 400,
        height: 72,
        backgroundColor: "rgba(255,255,192,0.6)",
        textAlign: "center",
        fontFamily: "Quasi",
        fontColor: "rgb(64,32,0)",
        fontSize: 56,
        padding: "56px 0 0 0"
    }).text("Main Menu")
        .attach({
            "click": function (e) {
                e.stop();
                sndPaper.play();
                showMainMenu(e);
            }
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
            "click": function (e) {
                e.stop();
                sndPaper.play();
                showMainMenu(e);
            }
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
    
        //console.log(txtTitle._oDrawing._oContext.textBaseline);
    
        clearInterval(tTimer);
    }


    function showMainMenu(e) {
        //e.stop();   //stop event bubbling
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


    // die/dice roller
    function RTD() {
        return 1 + Math.floor(Math.random() * 6);
    }

});
