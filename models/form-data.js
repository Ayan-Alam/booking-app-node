const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('users',{
  id:{
    type : Sequelize.INTEGER,
    autoIncrement : true,
    allowNull : false,
    primaryKey : true,
  },
  Name : Sequelize.STRING,
  email : {
    type : Sequelize.STRING,
  },
  Phoneno : {
    type : Sequelize.DOUBLE,
    allowNull : false,
  }
})
module.exports = User;