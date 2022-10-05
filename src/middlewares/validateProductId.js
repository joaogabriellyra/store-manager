const validateProductId = (req, res, next) => {
  for (let i = 0; i < req.body.length; i += 1) {
    if (req.body[i].productId > 100) {
      return res.status(404).json({ message: 'Product not found' });
    }
  }
  next();
};

module.exports = validateProductId;