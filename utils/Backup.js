const { Op } = require("sequelize")
const Middle = require('../models/Middle')
const MiddleBackup = require('../models/MiddleBackup')
const Prescription = require('../models/Prescription')
const PrescriptionBackup = require('../models/PrescriptionBackup')
const { getdate } = require('./Getdate')
const { errorlog } = require('./Log')

exports.Prescriptionbackup = async () => {
  let result = await Prescription.findAll({ where: { PrescriptionDate: { [Op.not]: getdate() } } })
  let backup = JSON.parse(JSON.stringify(result, null, 2))
  await PrescriptionBackup.bulkCreate( backup )
  .then( async (prescription) => {
    await Prescription.destroy({ where: { PrescriptionDate: { [Op.not]: getdate() } } })
  }).catch((err) => {
    errorlog(`ไม่สามารถ Backup prescription ได้ => ${err}`)
  })
}

exports.Middlebackup = async () => {
  let result = await Middle.findAll({ where: { f_prescriptiondate: { [Op.not]: getdate() } } })
  let backup = JSON.parse(JSON.stringify(result, null, 2))
  await MiddleBackup.bulkCreate( backup )
  .then( async (middle) => {
    await Middle.destroy({ where: { f_prescriptiondate: { [Op.not]: getdate() } } })
  }).catch((err) => {
    errorlog(`ไม่สามารถ Backup middle ได้ => ${err}`)
  })
}