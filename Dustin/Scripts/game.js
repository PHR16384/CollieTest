collie.ImageManager.add({
 "background" : "../images/large-floor-01.jpg"

});

var layer = new collie.Layer({
    width : 1000,
    height : 1000
});
var item = new collie.DisplayObject({
    x : "center",
    y : "center",
    backgroundImage : "background"
}).addTo(layer);

collie.Renderer.addLayer(layer);


collie.Renderer.load(document.getElementById("gameCanvas"));


collie.Renderer.start();