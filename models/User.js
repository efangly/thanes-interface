const Sequelize = require('sequelize')
const db = require('../configs/conhisdb')

const User = db.define('User', {
  f_userid: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  f_username: {
    type: Sequelize.STRING
  },
  f_password: {
    type: Sequelize.STRING
  },
  f_userstatus: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  f_lastmodified: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.fn("GETDATE")
  }
},{
  tableName: 'M_Users'
})

module.exports = User