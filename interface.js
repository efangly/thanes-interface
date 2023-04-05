const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const http = require("http")
const Conhis = require('./configs/conhisdb')
const Jsd = require('./configs/jsddb')
const Route = require('./routes/Route')
const ConhisRoute = require('./routes/ConhisRoute')
const JsdRoute = require('./routes/JsdRoute')
const { Middlebackup,Prescriptionbackup } = require('./utils/Backup')
const { SocketServer,SocketClient } = require('./utils/Socket')
const { TimeScheduleJob } = require('./utils/TimeSchedule')

require("dotenv").config()

const app = express()
const port = process.env.PORT
const server = http.createServer(app)

//middleware
app.use(express.json({limit: '50mb'}))
app.use(cors({ origin: '*' }))
app.use(morgan("dev"))
//connect DB
Conhis.authenticate()
  .then(() => console.log('Conhis Database Connected!!'))
  .catch(err => console.log('Error: ' + err))
Jsd.authenticate()
  .then(() => console.log('JSD Database Connected!!'))
  .catch(err => console.log('Error: ' + err))

//start Socket
SocketServer(server)
//connect socket
SocketClient()
//Backup DB
Middlebackup()
Prescriptionbackup()
//schedule time
TimeScheduleJob()
//route
app.use('/interface',Route)
app.use('/api',ConhisRoute)
app.use('/api',JsdRoute)

server.listen(port,()=>console.log('Start server in port '+port))