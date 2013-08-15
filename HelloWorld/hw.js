var Layer1 = new collie.Layer({
    width: 320,
    height: 480
});

collie.ImageManager.add({
    logo: "http://jindo.dev.naver.com/collie/img/small/logo.png",
    Mario: "./smb_mario_sheet.png"
});

var logo = new collie.DisplayObject({
    x: "center",
    y: "center",
    velocityRotate: 50,
    backgroundImage: "Mario"
}).addTo(Layer1);

collie.Renderer.addLayer(Layer1);
collie.Renderer.load(document.getElementById("container"));
collie.Renderer.start("30fps");
