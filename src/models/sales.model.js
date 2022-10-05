const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('./connection.DB');

const creatingSale = async () => {
  const [result] = await connection.execute(
    'INSERT INTO sales(date) VALUE(NOW())',
  );
  return result.insertId;
};

const insert = async (saleId, sale) => {
  await connection.execute(
    `INSERT INTO sales_products(sale_id, product_id, quantity) VALUES ${sale.map(
      () => '(?, ?, ?)',
    )}`,
    sale.map((product) => [saleId, product.productId, product.quantity])
      .flat(1),
  );

  return sale;
};

const findAll = async () => {
  const [result] = await connection.execute(`SELECT sales_products.sale_id, 
  sales.date, sales_products.product_id, sales_products.quantity
  FROM sales_products 
  INNER JOIN sales ON sales_products.sale_id = sales.id
  ORDER BY sales_products.sale_id, sales_products.product_id`);

  return camelize(result);
};

const findById = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT date, product_id, quantity 
    FROM sales_products
    INNER JOIN sales ON id = sales_products.sale_id
    WHERE id = ?
    ORDER BY product_id`,
    [saleId],
  );
  return camelize(result);
};

const deleteById = async (id) => {
  connection.execute(
    'DELETE FROM sales WHERE id = ?',
    [id],
  );
};

const updateById = async (sale, id) => {
  await Promise.all(sale.map(async (product) => connection.execute(
    `UPDATE sales_products SET quantity = ?
    WHERE sale_id = ? AND product_id = ?`, 
    [product.quantity, id, product.productId],
  )));
};

module.exports = {
  insert,
  creatingSale,
  findAll,
  findById,
  deleteById,
  updateById,
};