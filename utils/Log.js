const fs = require('fs/promises')
const path = require('path')
const { getdate,getdatetime } = require('./Getdate')

exports.errorlog = async (message)=>{
  const logContent = `${getdatetime()} => ${message} \n`
  await fs.writeFile(path.join('logs', `Err_${getdate()}.log`), logContent, { flag: 'a+' })
}