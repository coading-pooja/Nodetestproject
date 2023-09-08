const express = require('express');
const productController = require('../controllers/productController');

const routes = express.Router();

routes.get('/get-products',productController.getProducts);

routes.post('/add-product',productController.addProduct);

routes.delete('/delete-product/:id',productController.deleteProduct);

module.exports = routes;
