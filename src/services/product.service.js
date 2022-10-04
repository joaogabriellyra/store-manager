const productModel = require('../models/products.model');

const getAllProducts = async () => {
  const result = await productModel.findAll();
  return { type: null, message: result };
};

const getProductById = async (id) => {
  if (id > 3) {
    return { type: 'error' }; 
  }
  const result = await productModel.findById(id);

  return { type: null, message: result }; 
};

module.exports = {
  getAllProducts,
  getProductById,
};