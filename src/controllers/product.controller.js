const productService = require('../services/product.service');

const showAllProducts = async (_req, res) => {
  const { message } = await productService.getAllProducts();

  res.status(200).json(message);
};

const showProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getProductById(id);

  if (type) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(message);
};

module.exports = {
  showAllProducts,
  showProductById,
};