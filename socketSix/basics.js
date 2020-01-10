
const express = require("express");
const app = express();
const socketio = require('socket.io')

app.use(express.static(__dirname + '/public'))

const expressServer = app.listen(4000, () => console.log("listening on port 4000!"))
const io = socketio(expressServer)
io.on("connection", (socket) => {
  socket.emit('messageFromServer', {data: "welcome to the socket IO server"})
  socket.on("dataToServer", (dataFromClient) => {
    console.log(dataFromClient);
  })

})


