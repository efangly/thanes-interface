const Prescription = require('../models/Prescription')
const { errorlog } = require('./Log')
const { generateorder } = require('./Order')

exports.settoconhis = async (middle,frequency) => {
  let order = generateorder(middle,frequency)
  await Prescription.bulkCreate( order )
  .then((result) => {
    return true 
  }).catch((err) => {
    errorlog(`setToConhis => ${err}`)
    return false
  })
}
