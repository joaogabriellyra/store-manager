const productService = require('../services/product.service');

let alreadyDeleted = null;
const showAllProducts = async (_req, res) => {
  const { message } = await productService.getAllProducts();

  res.status(200).json(message);
  return message;
};

const showProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getProductById(id);
  if (type || alreadyDeleted === id) return res.status(404).json({ message: 'Product not found' });

  res.status(200).json(message);
};

const insertingProduct = async (req, res) => {
  const { name } = req.body;
  const { message } = await productService.insertProduct(name);
  res.status(201).json(message);
};

const updatingProduct = async (req, res) => {
  alreadyDeleted = null;
  const { id } = req.params;
  const { name } = req.body;
  const { type } = await productService.getProductById(id);
  if (type) return res.status(404).json({ message: 'Product not found' });
  const { message } = await productService.updateProductById(name, id);
  res.status(200).json(message);
};

const deletingProduct = async (req, res) => {
  const { id } = req.params;
  const { type } = await productService.getProductById(id);
  if (type) return res.status(404).json({ message: 'Product not found' });
  await productService.deleteProductById(id);
  alreadyDeleted = id;
  res.status(204).json();
};

module.exports = {
  showAllProducts,
  showProductById,
  insertingProduct,
  updatingProduct,
  deletingProduct,
};