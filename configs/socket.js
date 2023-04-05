const { io } = require('socket.io-client')
require("dotenv").config()

const socket = io.connect(process.env.SOCKET)

module.exports = socket