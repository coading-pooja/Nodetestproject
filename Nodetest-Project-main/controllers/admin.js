const products = require('../models/products')

exports.getproducts = (req, res, next)=>{
    Users.findAll().then((products) => {
        res.status(200).json(products)
    }).catch(err => console.log(err))
}


exports.addUser = (req, res, next) => {
    products.create({
        name : req.body.Price,
        email : req.body.ProductName,
        phone : req.body.Categories
    }).then((createdUser) => {
        res.status(200).json(createdproduct)
    }
    ).catch(err => console.log(err))
}

exports.deleteproduct = (req, res, next) => {
    products.destroy({where : {id : req.params.userID}})
    .then((products) => {
        res.status(200).json(users)
    }).catch(err => console.log(err))
}

exports.updateproducts = (req, res, next) => {
    const id = req.params.userID
    products.update({
        Price : req.body.Price,
        ProductName : req.body.ProductName,
        Categories : req.body.Categories
    },{where : {id : id}})
    .then((products) => {
        res.status(200).json(users)
    }).catch(err => console.log(err)) 

}