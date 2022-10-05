const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const productService = require("../../../src/services/product.service");
const productController = require("../../../src/controllers/product.controller");
const { products } = require("../../mocks/products.mock");

describe('Testa a camada controller da rota products', () => {
  afterEach( async function () {
    sinon.restore();
    req = {};
    res = {};
  });

  let req = {};
  let res = {};

  it('testa se é listado todos os produtos', async () => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, 'getAllProducts')
      .resolves({ type: null, message: products });
    await productController.showAllProducts(req, res);
    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(products)).to.be.true;
  });

})
