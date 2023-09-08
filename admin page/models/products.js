const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Product= sequelize.define('product',
    {
        id:{
            type:Sequelize.INTEGER,
            unique:true,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        Price:{
            type: Sequelize.INTEGER,
            allowNull:false
        },
        ProductName:{
            type: Sequelize.STRING,
            allowNull:false
        },
        Category:{
            type: Sequelize.STRING,
            allowNull:false
        }
    }
);

module.exports = Product;

