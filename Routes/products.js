const router = require('express').Router();
let Product = require('../models/products');
// 1. get all products on record
router.get('/', async(req, res) => {
    try {
        let products = await Product.find();
        return res.send(products) 
    }
    catch(err){
        console.log(err)
    }
})



module.exports = router;