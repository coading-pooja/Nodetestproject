const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database');
const productRoutes = require('./routes/productRoutes');
const Product = require('./models/products');

const app = express();

app.use(cors());
app.use(bodyParser.json({extended:false}));
app.use("/product",productRoutes);



sequelize.sync()
.then((res)=>{
    app.listen(3000);
})
.catch((err)=>{
    console.log(err);
})
