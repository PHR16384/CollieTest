$(document).ready(function () {
    
    // Connect to server via Socket.io:
    var socket = io.connect('http://munchtest-djt.rhcloud.com:80');
    var chat = io.connect('http://munchtest-djt.rhcloud.com:80/chat');
    chat.on('connect', function () {
        // chat socket connected
    });
    
    // initialize classes:
    var arCDoors = new Array();
    var arCTreasures = new Array();
    var arCMonsters = new Array();
    var arCEquip = new Array();
    
    var DB_DATA = new Object();
    
    
    // Grab the database info emitted by the server:

    socket.on('monstersDB', function (data) {
        //console.log(data.monstersDB[1].name);
        //$('#monsterDB').text(data.monstersDB[35].name);
        DB_DATA["Monsters"] = data.monstersDB;
    });
    socket.on('treasureDB', function (data) {
        //console.log(data.treasureDB[1]);
        //$('#treasureDB').text(data.treasureDB[1].idcards);
        DB_DATA["Treasure"] = data.treasureDB;
    });
    socket.on('cardsDB', function (data) {
        //console.log(data.cardsDB[1]);
        //$('#cardsDB').text(data.cardsDB[96].name);
        DB_DATA["Cards"] = data.cardsDB;
    });
    socket.on('gearDB', function (data) {
        //console.log(data.gearDB[1]);
        //$('#gearDB').text(data.gearDB[28].race);
        DB_DATA["Gear"] = data.gearDB;
    });
    socket.on('hirelingDB', function (data) {
        //console.log(data.hirelingDB[0]);
        //$('#hirelingDB').text(data.hirelingDB[0].name);
        DB_DATA["Hireling"] = data.hirelingDB;
    });
    socket.on('one_shotDB', function (data) {
        //console.log(data.one_shotDB[1]);
        //$('#one_shotDB').text(data.one_shotDB[6].gold);
        DB_DATA["One-Shot"] = data.one_shotDB;
    });
    socket.on('typeDB', function (data) {
        //console.log(data.typeDB[1]);
        //$('#typeDB').text(data.typeDB[7].type);
        DB_DATA["Type"] = data.typeDB;
    });
    socket.on('doorsDB', function (data) {
        //console.log(data.doorsDB[1]);
        //$('#doorsDB').text(data.doorsDB[80].idcards);
        DB_DATA["Doors"] = data.doorsDB;
    });

    // sending via client_data
    $('#text').keypress(function (e) {
        socket.emit('client_data', { 'letter': String.fromCharCode(e.charCode) });
    });
    
});

