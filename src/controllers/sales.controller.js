const salesService = require('../services/sales.service');

let alreadyDeleted = null;
const showAllSales = async (_req, res) => {
  const { message } = await salesService.getAllSales();

  res.status(200).json(message);
};

const showSaleById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getSaleById(id);

  if (type || alreadyDeleted === id) return res.status(404).json({ message: 'Sale not found' });

  res.status(200).json(message);
};

const insertingSale = async (req, res) => {
  const { type, message } = await salesService.insertSale(req.body);
  if (type) return res.status(404).json({ message });
  res.status(201).json(message);
};

const deletingSale = async (req, res) => {
  const { id } = req.params;
  const { type } = await salesService.getSaleById(id);

  if (type) return res.status(404).json({ message: 'Sale not found' });
  alreadyDeleted = id;
  await salesService.deleteSaleById(id);
  res.status(204).json();
};

module.exports = {
  insertingSale,
  showAllSales,
  showSaleById,
  deletingSale,
};