
exports.getdate = ()=>{
  const date = new Date()
  let Year = date.getFullYear()
  let Month = date.getMonth() + 1
  let Day = date.getDate()
  let getdate
  if(Month < 10){
    Month = `0${Month}`
  }
  if(Day < 10){
    Day = `0${Day}`
  }
  getdate = `${Year}${Month}${Day}`
  return getdate
}

exports.getdatetime = ()=>{
  const date = new Date()
  let Year = date.getFullYear()
  let Month = date.getMonth() + 1
  let Day = date.getDate()
  let Hour = date.getHours()
  let Minute = date.getMinutes()
  let Second = date.getSeconds()
  let getdate
  if(Month < 10){
    Month = `0${Month}`
  }
  if(Day < 10){
    Day = `0${Day}`
  }
  if(Hour < 10){
    Hour = `0${Hour}`
  }
  if(Minute < 10){
    Minute = `0${Minute}`
  }
  if(Second < 10){
    Second = `0${Second}`
  }
  getdate = `${Year}/${Month}/${Day} ${Hour}:${Minute}:${Second}`
  return getdate
}

exports.getdatetimeid = ()=>{
  const date = new Date()
  let Year = date.getFullYear()
  let Month = date.getMonth() + 1
  let Day = date.getDate()
  let Hour = date.getHours()
  let Minute = date.getMinutes()
  let Second = date.getSeconds()
  let MiliSec = date.getMilliseconds()
  let runnumber = Math.floor(Math.random() * 100)
  let getdate 
  if(Month < 10){
    Month = `0${Month}`
  }
  if(Day < 10){
    Day = `0${Day}`
  }
  if(Hour < 10){
    Hour = `0${Hour}`
  }
  if(Minute < 10){
    Minute = `0${Minute}`
  }
  if(Second < 10){
    Second = `0${Second}`
  }
  if(MiliSec < 100){
    MiliSec = `0${MiliSec}`
    if(MiliSec < 10){
      MiliSec = `00${MiliSec}`
    }
  }
  if(runnumber < 10){
    runnumber = `0${runnumber}`
  }
  getdate = `${Year}${Month}${Day}${Hour}${Minute}${Second}${MiliSec}${runnumber}`
  return getdate
}