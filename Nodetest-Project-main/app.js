const express=require('express');
const bodyParser=require('body-parser');
const Sequelize=require('sequelize');

const cors=require('cors')
const app=express();


const sequelize=require('./utils/database');
const product=require('./models/products');
const routes=require('./routes/admin')



app.use(cors());
app.use(bodyParser.json());

app.use('/product_details',routes);










sequelize.sync()
.then((res)=>{
 
   var port =8000;
   app.listen(port,()=>{
    console.log(`successfully connected port ${8000}`);
   })
})

.catch(err=>console.log(err));



















