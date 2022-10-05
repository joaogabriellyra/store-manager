const camelize = require('camelize');
const snakeize = require('snakeize');
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

const insert = async (product) => {
  const columns = Object.keys(snakeize(product))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(product)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO products (${columns}) VALUE (${placeholders})`,
    [...Object.values(product)],
  );

  return insertId;
};

const updateById = async (name, id) => {
  await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?', 
    [name, id],
  );
  return { id, name };
};

const deleteById = async (id) => {
  connection.execute(
    'DELETE FROM products WHERE id = ?',
    [id],
  );
 };

module.exports = {
  findAll,
  findById,
  insert,
  updateById,
  deleteById,
};