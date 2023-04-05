const { Server } = require("socket.io")
const Socket = require('../configs/socket')

exports.SocketServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  })
  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`)
  
    socket.on("send_message", (data) => {
      socket.broadcast.emit("receive_message", data)
    })
  
    socket.on("disconnect", () => {
      console.log(`User Disconnected: ${socket.id}`)
    })
  })
}

exports.SocketClient = () => {
  if(Socket){
    console.log('Socket Connected!!')
  }
}