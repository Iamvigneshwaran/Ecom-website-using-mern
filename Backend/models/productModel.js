const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter product name"],
        trim:true,
        maxlength:[100,"procuct name connot exceed 100 characters"]
    },
    price:{
        type:Number,
        required:[true,"product price"]
    },
    description:{
        type:String,
        require:[true,"Enter product description"]
    },
    ratings:{
        type:String,
        default:0
    },
    images:[
        {
            image:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"please enter product category"],
        enum:{
            values:[
                "Electronics",
                "Mobile phones",
                "Laptops",
                "Accessories",
                "Headphones",
                "Foods",
                "Furniture",
                "Cloth                                                              ",
                "Books",
                "Music",
                "Beauty/Health",
                "Sports",
                "Home"
            ],
            message:"please enter correct product category"
        }
    },
    
    seller:{
        type:String,
        required:[true,"please enter product seller"]
              
    },
    stock : {
        type:Number,
        required:[true,"please enter product stock"],
        maxlength:[20,"procuct stock connot exceed 100 characters"],
    },
    numOfReviews : {
        type : Number,
        default : 0
    },
    reviews : [
        {
        name : {
            type : String,
            required :[true,"Please enter"]
        },
        rating : { 
            type : String,
            required : true
        },
        Comment : {
            type : String,
            required : true
        }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const schema = mongoose.model('product', productSchema);

module.exports = schema;