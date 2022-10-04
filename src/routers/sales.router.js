const express = require('express');
const salesController = require('../controllers/sales.controller');
const validateSalesInputs = require('../middlewares/validateKeys');

const router = express.Router();

router.post('/', validateSalesInputs, salesController.insertingSale);
router.get('/', salesController.showAllSales);
router.get('/:id', salesController.showSaleById);

module.exports = router;