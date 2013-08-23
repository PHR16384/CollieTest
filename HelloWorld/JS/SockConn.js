var socket = io.connect();

// receiving via date
socket.on('date', function (data) {
    $('#DEBUG').append(data.date);
});
