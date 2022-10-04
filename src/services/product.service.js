const productModel = require('../models/products.model');
const { nameLength } = require('./validations/validateInputValues');

const getAllProducts = async () => {
  const result = await productModel.findAll();
  return { type: null, message: result };
};

const getProductById = async (id) => {
  const productsLength = await productModel.findAll();
  if (id > productsLength.length) {
    return { type: 'error' }; 
  }
  const result = await productModel.findById(id);

  return { type: null, message: result }; 
};

const insertProduct = async (name) => {
  const error = nameLength(name);
  if (error) return { type: error, message: '"name" length must be at least 5 characters long' };
  const productId = await productModel.insert({ name });
  const result = await getProductById(productId);
  return { type: null, message: result.message };
};

const updateProductById = async (name, id) => {
  const result = await productModel.updateById(name, id);
  return { message: result };
};

module.exports = {
  getAllProducts,
  getProductById,
  insertProduct,
  updateProductById,
};