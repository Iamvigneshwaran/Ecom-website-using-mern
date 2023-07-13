const mongoose = require('mongoose');
const products = require('../data/product.json');
const product  = require('../models/productModel');
const dotenv = require('dotenv');

dotenv.config();
const mongooseConnection = async () =>{
await mongoose.connect(process.env.URI).then(() => console.log('Connected mongoose DB')).catch( (err) => console.log(err));
}

mongooseConnection();

const seedProducts = async () => {

    try{
    await product.deleteMany();
    console.log('product deleted')
   await product.insertMany(products);
   console.log('ALL PRODUCTS ADDED!');
    }
    catch(err){
        console.log(err.message);
    }
    process.exit();
}

seedProducts();