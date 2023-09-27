const express = require('express');
const bodyParser = require('body-parser');
const productsRoutes = require('./routers/products.router');
const salesRoutes = require('./routers/sales.router');

const app = express();

app.use(bodyParser.json());
app.get('/', (_request, response) => {
  response.send();
});
app.use('/products', productsRoutes);
app.use('/sales', salesRoutes);

module.exports = app;