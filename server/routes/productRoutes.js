const express = require('express');
const {addProducts, getProducts, getProduct} = require('../controllers/productController');
const verifyToken = require('../middleware/verifyToken');
const verifySeller = require('../middleware/verifySeller')
const router = express.Router();

router.post('/add', verifySeller, addProducts);
router.get('/products', getProducts)
router.get('/:_id', getProduct)

module.exports = router;
