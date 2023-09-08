const Sequelize = require('sequelize');

const sequelize = new Sequelize('seller_page','root','Hare@krishna123#',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;