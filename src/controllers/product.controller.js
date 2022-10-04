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

const insertingProduct = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const { message } = await productService.insertProduct(name);
  
  if (name.length < 5) { 
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
}

  res.status(201).json(message);
};

module.exports = {
  showAllProducts,
  showProductById,
  insertingProduct,
};