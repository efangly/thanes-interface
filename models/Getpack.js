const Sequelize = require('sequelize')
const db = require('../configs/conhisdb')

const Getpack = db.define('Getpack', {
  ReferenceCode: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  PatientId: {
    type: Sequelize.STRING
  },
  PatientName: {
    type: Sequelize.STRING
  },
  DrugCd: {
    type: Sequelize.STRING
  },
  DrugName: {
    type: Sequelize.STRING
  },
  DispensedDose: {
    type: Sequelize.DECIMAL
  },
  FrequencyTime: {
    type: Sequelize.STRING
  },
  FrequencyDesc: {
    type: Sequelize.STRING
  },
  OrderAcceptId: {
    type: Sequelize.STRING
  },
  OrderAcceptName: {
    type: Sequelize.STRING
  },
  OrderAcceptTime: {
    type: Sequelize.STRING
  },
  MachinNo: {
    type: Sequelize.STRING
  },
  PackId: {
    type: Sequelize.STRING
  },
  RowId: {
    type: Sequelize.STRING
  }
},{
  tableName: 'tb_getpack'
})

module.exports = Getpack