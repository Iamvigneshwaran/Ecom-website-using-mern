const express = require('express');
const createTask = require('../controllers/taskControllers');
// const getProducts = require('../controllers/productControllers');

const router = express.Router();

router.post('/',createTask);



module.exports = router;