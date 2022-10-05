const salesModel = require('../models/sales.model');
const validateInputValues = require('./validations/validateInputValues');

const insertSale = async (sale) => {
  const error = validateInputValues.saleId(sale);
  if (error) return { type: error, message: 'Product not found' };
  const saleId = await salesModel.creatingSale();
  const result = await salesModel.insert(saleId, sale);
  return { type: null, message: { id: saleId, itemsSold: result } };
};

const getAllSales = async () => {
  const result = await salesModel.findAll();
  return { type: null, message: result };
};

const getSaleById = async (saleId) => {
  const result = await salesModel.findById(saleId);
  if (result.length === 0) return { type: 'error' };
  return { type: null, message: result }; 
};

const deleteSaleById = async (saleId) => {
  await salesModel.deleteById(saleId);
};

module.exports = {
  insertSale,
  getAllSales,
  getSaleById,
  deleteSaleById,
};