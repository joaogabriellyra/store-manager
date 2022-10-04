const express = require('express');
const productController = require('../controllers/product.controller');
const validateName = require('../middlewares/validateName');

const router = express.Router();

router.get('/', productController.showAllProducts);
router.get('/:id', productController.showProductById);
router.post('/', validateName, productController.insertingProduct);
router.put('/:id', validateName, productController.updatingProduct);

module.exports = router;