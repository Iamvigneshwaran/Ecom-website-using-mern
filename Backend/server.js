const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const taskRoute = require('./routes/taskRoute');
// const productRoute = require('./routes/productRoute');
const cors = require('cors');
const route = require('./routes/productRoute');


require('dotenv').config();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.URI).then(() => {
    console.log("mongoose connected successfully....");
}).catch((err) => {
    console.log(err);
})



// get all products
app.use('/api/v1/',route);

// get single product
// app.use('/api/products/',getSingleProduct);

//post products 
// app.use('/api/products/',productRoute);


app.listen(process.env.PORT, () => {
    console.log("listen port "+process.env.PORT)
});