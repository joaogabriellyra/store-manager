const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productService = require("../../../src/services/product.service");
const productController = require("../../../src/controllers/product.controller");
const { products } = require("../../mocks/products.mock");


