const Sequelize = require('sequelize')
const db = require('../configs/conhisdb')

const DrugImage = db.define('DrugImage', {
  DrugCode: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  DrugCassette: {
    type: Sequelize.STRING
  },
  DrugImage: {
    type: Sequelize.STRING
  },
  DrugName: {
    type: Sequelize.STRING
  },
  LastModified: {
    type: Sequelize.STRING,
    defaultValue: Sequelize.fn("GETDATE")
  }
},{
  tableName: 'M_DrugImage'
})

module.exports = DrugImage