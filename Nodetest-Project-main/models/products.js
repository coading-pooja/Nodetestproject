const Sequelize = require('sequelize')

const sequelize = require('../Database/database')

const Users = sequelize.define('products', {
    Price: {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        allowNull : false
      },
    ProductName : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    Categories: {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    },
    
})

module.exports = products