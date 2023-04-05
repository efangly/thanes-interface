const Sequelize = require('sequelize')
const db = require('../configs/conhisdb')

const Frequency = db.define('Frequency', {
  Frequencycode: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  Frequencydesc: {
    type: Sequelize.STRING
  },
  Frequencydesc1: {
    type: Sequelize.STRING
  }
},{
  tableName: 'M_FrequencyInfo'
})

module.exports = Frequency