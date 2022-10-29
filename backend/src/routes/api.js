const express =require('express');
const router =express.Router();

const {AdminRegister} = require('../controllers/UsersController');
const {InsertProduct} = require('../controllers/ProductsController');



//Routes
router.post('/AdminRegister', AdminRegister);
router.post('/InsertProduct', InsertProduct);




module.exports=router;