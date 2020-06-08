const socketio = require("socket.io");

let websocket = {};

websocket.init = function(server) {
    const io = socketio(server);
    io.on('connection', client => {
        console.log(client.id +  "Đang xem");

        client.on('event', data => { /* … */ });
        client.on('disconnect', () => { /* … */ });
    });
}

module.exports = websocket;