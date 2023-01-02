const { findById } = require('../models/productModel');
const Product = require('../models/productModel');

const addProducts = async (req, res) => {
  try {
    const product = await new Product(req.body);
    const newProduct = await product.save();
    res.status(200).json({ msg: 'Product added successfully' });
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
     res.status(200).send(products)
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
};

const getProduct = async (req, res) => {
  
  try {
    const product = await Product.findById(req.params._id);
     res.status(200).send(product)
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
};


module.exports = {addProducts, getProducts, getProduct};
