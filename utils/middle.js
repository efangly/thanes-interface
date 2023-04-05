const Prescription = require('../models/Prescription')
const { errorlog } = require('./log')
const { generateorder } = require('./order')

exports.settoconhis = async (middle,frequency,frequencytime) => {
  let order = generateorder(middle,frequency,frequencytime)
  await Prescription.bulkCreate( order )
  .then((result) => {
    return true 
  }).catch((err) => {
    errorlog(`setToConhis => ${err}`)
    return false
  })
}