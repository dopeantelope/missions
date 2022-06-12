const io = require("socket.io")();
const { makeid } = require('./util');

const state = {};
const clientRooms = {};
io.on('connection', client => {
    client.on('newGame', handleNewGame);
    client.on('joinGame', handleJoinGame);



function handleNewGame(){
    let roomName = makeid(5);
    clientRooms[client.id]= roomName;
    client.emit('gameCode', roomName);

    client.join(roomName);
    client.number = 1 

    client.emit('init',1)
}

function handleJoinGame(gameCode){
    const room =io.sockets.adapter.rooms[gameCode];

    let allUsers;
    if(room){
        allUsers=room.sockets;
    }
    let numClients = 0;
    if (allUsers){
        numClients = Object.keys(allUsers).length;
    }
    if (numClients === 0){
        client.emit('unknownCode');
        return;
    } 

    clientRooms[client.id] = gameCode;
    client.join(gameCode);
    client.number = 2

    client.emit('init',2)

}
});

io.listen(3000)