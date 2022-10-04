const express = require('express');
const productController = require('../controllers/product.controller');

const router = express.Router();

router.get('/', productController.showAllProducts);

router.get('/:id', productController.showProductById);

module.exports = router;