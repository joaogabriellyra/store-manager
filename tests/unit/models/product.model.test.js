const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const connection = require("../../../src/models/connection.DB");
const productModel = require("../../../src/models/products.model");
const { products, productToInsert } = require("../../mocks/products.mock");

describe('Testa a camada de model da rota products', () => {
  afterEach(async function () {
    connection.execute.restore();
  });

  it('testa se é listado todos os produtos', async () => {
    sinon.stub(connection, 'execute')
      .resolves([products]);
    const result = await productModel.findAll();
    expect(result).to.be.deep.equal(products);
  });

  // it('testa se é listado um produto baseado em seu Id', async () => {
  //   sinon.stub(productModel, 'findById')
  //     .resolves(products[0]);
  //   const result = await productService.getProductById(1);
  //   expect(result).to.be.deep.equal({ type: null, message: products[0] });
  // });

  // it('testa se ao listar um produto através do id, retorna um erro caso não encontre o produto', async () => {
  //   sinon.stub(productModel, 'findById')
  //     .resolves([]);
  //   const result = await productService.getProductById(1);
  //   expect(result).to.be.deep.equal({ type: null, message: [] });
  // });

  // it('testa se é possível inserir um produto', async () => {
  //   sinon.stub(productModel, 'insert')
  //     .resolves(productToInsert)
  //   const result = await productService.insertProduct(productToInsert);
  // });

  // it('testa se é possível atualizar um produto', async () => {
  //   sinon.stub(productModel, 'updateById')
  //     .resolves(products[0]);
  //   const result = await productService.updateProductById(products[0])
  //   expect(result.message).to.be.deep.equal(products[0]);
  // });

  // it('testa se ao passar um id inexistente, é recebido um erro ao tentar atualizar', async () => {
  //   sinon.stub(productModel, 'updateById')
  //     .resolves([]);
  //   const result = await productService.updateProductById(products[0]);
  //   expect(result.message).to.be.deep.equal([]);
  // });

  // it('testa se é possível deletar um produto', async () => {
  //   sinon.stub(productModel, 'deleteById')
  //     .resolves({ affectedRows: 1 });
  //   await productService.deleteProductById(1);
  //   const result = await productService.getProductById(1);
  //   expect(result).to.be.deep.equal(result);
  // });

  // it('testa se é recebido erro ao deletar produto não existente', async () => {
  //   sinon.stub(productModel, 'deleteById')
  //     .resolves([]);
  //   const result = await productService.deleteProductById(1);
  //   expect(result).to.be.deep.equal(undefined);
  // });

});
