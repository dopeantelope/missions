// Making Connection
const socket = io.connect("http://localhost:3000",{cors:{
    origin:'*',
    credentials:true
 }});
socket.on('init', handleInit)

function handleInit(msg){
    console.log(msg)
}

const newGameBtn = document.getElementById("newGameBtn")
const joinGameBtn = document.getElementById("joinGameBtn")
const gameCodeInput = document.getElementById("gameCodeInput")

newGameBtn.addEventListener('click', newGame);
joinGameBtn.addEventListener('click', joinGame);

function newGame(){
console.log("hi")
}

function joinGame(){

}