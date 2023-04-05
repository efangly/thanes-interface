const schedule = require('node-schedule')
const Socket = require('../configs/socket')
const { Middlebackup,Prescriptionbackup } = require('./Backup')

exports.TimeScheduleJob = () => {
  schedule.scheduleJob('0 0 0 * * *',()=>{
    Middlebackup()
    Prescriptionbackup()
    const d = new Date()
    let datetime = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`
    Socket.emit("send_message", { message: `Backup ข้อมูลประจำวัน`,type: 'new' }) 
    console.log(`Backup will run everyday at ${datetime} 00:00`)
  })
}