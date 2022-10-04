const express = require('express');
const productController = require('../controllers/product.controller');

const router = express.Router();

router.get('/', productController.showAllProducts);
router.get('/:id', productController.showProductById);
router.post('/', productController.insertingProduct);

module.exports = router;