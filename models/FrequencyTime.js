const Sequelize = require('sequelize')
const db = require('../configs/conhisdb')

const FrequencyTime = db.define('FrequencyTime', {
  f_timecode: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  f_timedesc: {
    type: Sequelize.STRING
  },
  f_timedesc1: {
    type: Sequelize.STRING
  }
},{
  tableName: 'M_FrequencyTime'
})

module.exports = FrequencyTime