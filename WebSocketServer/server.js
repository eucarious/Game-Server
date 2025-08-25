const io = require('socket.io')(8000,{

    pinginterval: 30000, // how often we ping
    pingTimeout: 5000, // how long we wait for a response
    upgradeTimeout: 3000, // antti doesnt know lmao 
    allowUpgrades: true, // should be true if you have web based client
    cookie: false, // no need
    serverClient: true, // read docs
    cors:{
        origin:'*' // * = allows for all kinds of connections
    }

    }
);

// server keeps track of game state

var players = []; // keeps track of all the connected players
var player = {}; // single player in the array
// var currentPlayer = 0;
// var nextPlayer;
var chatContent = [];

console.log("Starting socket.io server");

io.on('connection', (socket) => {
    // connection from unity. generate socket id
    console.log(new Date().toUTCString()+ "Unity is conntecting and socket id is " + socket.id);

    // before creating a player, let player see who is already on the server
    players.forEach((item) => socket.emit("INSTANCEPLAYER", JSON.stringify(item)));

    // when player joins the game, we want to create a player
    socket.on('CREATEPLAYER', (data) => {

        // Run when client asks from player instance
        player = {

            socketID: socket.id,
            x: 0 + (players.length + players.length * 0.5),
            y: 0.5,
            z: 0,

        }

        players.push(player);

        // is player the first player? if so. give player their turn
        /*
        if (players.length == 1) {
            io.to(players[0].socketID).emit("STARTTURN", JSON.stringify(player));
        }
            */

        // Call in unity for client to put the player in
        // we want to send player info to ALL clients
        io.emit('INSTANCEPLAYER', JSON.stringify(player));
        io.emit('REFRESHNAMES');
        io.emit('HATREFRESH');
    });

    socket.on('HATSET', (data) => {
        console.log(data);
        io.emit("HATFINAL", data);
    });



    socket.on('disconnect', (reason) => {
        console.log(new Date().toUTCString() + "Player " + socket.id + " left the game: " + reason);
        for (var i = 0 ; i < players.length; i++) {
            if (players[i].socketID == socket.id) {
                players.splice(i,1); // remove 1 item from array in location i
            }
        }

        // tell unity to remove the player from all clients
        io.emit("DELETEPLAYER", 'PlayerBox'+socket.id);
    });
// turn stuff
/*
    socket.on("PLAYERENDTURN", (data) => {
        console.log("Player wants to end turn!");
        io.to(players[currentPlayer].socketID).emit('ENDTURN'), JSON.stringify(players[currentPlayer]);
    });

    socket.on("TURNENDED", (data) => {
        console.log(" Player " + currentPlayer + "'s turn ended. Let's start next player's turn");
        if (currentPlayer == players.length -1) {
            nextPlayer = 0;
        } else {
            nextPlayer = currentPlayer + 1;
        }

        io.to(players[nextPlayer].socketID).emit('STARTTURN', JSON.stringify(players[nextPlayer]));
        currentPlayer = nextPlayer;
    });
*/

    socket.on("MOVE", (data) => {
        io.emit("MOVEUNITS", data);
    });

    socket.on("DISPLAYNAMECHANGE", (data) => {
        console.log(data);
        io.emit("NAMECHANGE", data);
    });

    socket.on("SENDCHAT", (data) => {
        console.log(data);
        chatContent.push(data["ID"] + ": " + data["Chat"]);
        if (chatContent.length > 5)
        {
            chatContent.splice(0,1); // remove 1 item from array in location i
        }
        
        console.log(chatContent);
        console.log(chatContent.length);
        var returnLog = "";
        chatContent.forEach(element => {
            returnLog += element.toString() + "\n";
        });
        
        io.emit("CHAT", returnLog);
    });

})
