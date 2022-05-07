// Making Connection
const socket = io.connect("http://localhost:3000",{cors:{
    origin:'*',
    credentials:true
 }});
socket.on('init', handleInit)

function handleInit(msg){
    console.log(msg)
}