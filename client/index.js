
// Making Connection
const socket = io.connect("http://localhost:3000",{cors:{
    origin:'*',
    credentials:true
 }});
socket.on('init', handleInit)
socket.on('gameCode', handleGameCode)
socket.on('unknownCode', handleUnknownCode);


let playerNumber;
let validCode = true;

function handleInit(number){
    playerNumber = number;
}

const newGameBtn = document.getElementById("newGameBtn")
const joinGameBtn = document.getElementById("joinGameBtn")
const gameCodeInput = document.getElementById("gameCodeInput")
const gameCodeDisplay = document.getElementById("gameCodeDisplay")

if (newGameBtn) {newGameBtn.addEventListener('click', newGame);}
if (joinGameBtn) {joinGameBtn.addEventListener('click', joinGame)}

function newGame(){
    socket.emit('newGame');
    init()
}

function handleUnknownCode(){
    validCode = false;
   alert("unkown game code")
  location.reload()
}



function joinGame() {
    console.log(validCode)
    if (validCode = true){
    const code = gameCodeInput.value;
    socket.emit('joinGame', code);
    init();
    }
  }

function init(gameCode){
    console.log("THEE GAME IS STARTING")
    console.log("joined game with game code" + gameCode)
   //window.location = 'your-missions.html';
}

function handleGameCode(gameCode){
    gameCodeDisplay.innerText = gameCode;
    console.log("this is the game code " +gameCode)

}

