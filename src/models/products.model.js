const camelize = require('camelize');
const connection = require('./connection.DB');

const findAll = async () => {
  const [result] = await connection.execute('SELECT * FROM products');

  return camelize(result);
};

const findById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return camelize(result);
};

module.exports = {
  findAll,
  findById,
};