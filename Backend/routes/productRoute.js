const express = require('express');
// const newProduct = require('../controllers/productControllers');
const { getProducts, newProduct,getSignleProduct,updateProduct,deleteProduct } = require('../controllers/productControllers');


const router = express.Router();

// get all products 
router.get('/product/',getProducts);

// get single product 
router.get('/product/:id',getSignleProduct);


// post product - http://localhost:4000/api/products/
router.post('/product/', newProduct);

// update product - http://localhost:4000/api/products/
router.put('/product/:id', updateProduct);

// delete product 
router.delete('/product/:id',deleteProduct);

module.exports = router;