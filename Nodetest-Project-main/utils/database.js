const Sequelize=require('sequelize');

const sequelize=new Sequelize('new_schema','root','Hare@krishna123#',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;