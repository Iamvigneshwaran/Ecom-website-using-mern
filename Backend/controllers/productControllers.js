const Product = require('../models/productModel');


// get all products - http://localhost:4000/api/products
const getProducts = async (req, res, next) => {
    try{
    const products = await Product.find();
    res.status(200).json({
        success: true,
        count : products.length,
        message: "This route will show all the products in the database",
        products
    });
    }
    catch(err){
       res.status(500).json({
        success: false,
        message: err.message
       });
    }
};


// post product - http://localhost:4000/api/products/
const newProduct = async (req, res, next) => {
    try {     
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            message: "Product successfully created",
            product
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// get single products 

const getSignleProduct = async (req,res,next) => {
    try{
  const product = await Product.findById(req.params.id);

  if(!product){
    res.status(404).json({
        success: false,
        message: 'product not found '
    })
  }
  
  res.status(201).json({
    success : true,
    message: "product successfully found",
    product
  })
    
    }
    catch(err){
        res.status(500).json({
            success : true,
            message: err.message
        })
    }
}

// update product - http://localhost:4000/api/v1/product/64abcfab734e591636461544

const updateProduct = async (req,res,next) =>{
    let product = await Product.findById(req.params.id);

    if(!product){
       return res.status(404).json({
                success: false,
                message: 'product not found '
        })
      }

      product = await Product.findByIdAndUpdate(req.params.id, req.body,{
        new : true,
        runValidators : true
      })

      res.status(201).json({
        success : true,
        message: "product successfully updated",
        product
      })

}

const deleteProduct = async (req,res,next) =>{
      let product = await Product.findById(req.params.id);

      if(!product){
        return res.status(404).json({
            success: false,
            message: 'product not found '
        });
      }

      product = await Product.deleteOne({_id : req.params.id});

      res.status(200).json({
        success: true,
        message: "product successfully deleted"
      })
}

module.exports = {
    getProducts,
    newProduct,
    getSignleProduct,
    updateProduct,
    deleteProduct
};
