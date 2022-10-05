const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const productService = require("../../../src/services/product.service");
const productController = require("../../../src/controllers/product.controller");
const { products, productToInsert } = require("../../mocks/products.mock");

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

  it('testa se é listado um produto baseado em seu Id', async () => {
    req.params = { id: products[0].id };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, 'getProductById')
      .resolves({ type: null, message: products[0] });
    await productController.showProductById(req, res);
    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(products[0])).to.be.true;
  });

  it('testa se é possível cadastrar um novo produto', async () => {
    req.body = { name: productToInsert.name };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, 'insertProduct')
      .resolves({ type: null, message: productToInsert });
    await productController.insertingProduct(req, res);
    expect(res.status.calledWith(201)).to.be.true;
    expect(res.json.calledWith(productToInsert)).to.be.true;
  });

  it('testa se é possível alterar um produto', async () => {
    req.body = { name: productToInsert.name };
    req.params = { id: 2 }
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, 'updateProductById')
      .resolves({ type: null, message: productToInsert });
    await productController.updatingProduct(req, res);
    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(productToInsert)).to.be.true;
  })
})
