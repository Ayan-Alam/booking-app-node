const Sequelize = require('sequelize');

const sequelize = new Sequelize('full-stack-1','root','Kia@123',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;