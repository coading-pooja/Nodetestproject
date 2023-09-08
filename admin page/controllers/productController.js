const Product = require('../models/products');

exports.getProducts=async (req, res, next)=>{
    try{
        const productList = await Product.findAll();
        res.status(200).json({productList})
       // res.status(200).json({productList: "ok"})
        
        
    }catch(err){
        console.log(JSON.stringify(err));
        res.status(500).json({err:err})
    }
};


exports.deleteProduct = async(req,res,next)=>{
    try{
        if(req.params.id=="undefined"){ //comes as a string from req
            console.log("id is missing");
            return res.status(400).json({err : "ID is missing"});
        }
        const uId  = req.params.id;
        await Product.destroy({where: {id:uId}});
        res.sendStatus(200);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

exports.addProduct =async (req, res, next)=>{
    try{
        if(!req.body.price || !req.body.pname || !req.body.cat){
            throw new Error('All fields are mandatory')
        }
        const price = req.body.price/1;
        const pname = req.body.pname;
        const cat = req.body.cat;
        console.log(price,pname,cat)
        const data = await Product.create({
            Price:price,
            ProductName:pname,
            Category:cat
        })
        res.status(201).json({newProduct: data});
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:err})
    }
};
