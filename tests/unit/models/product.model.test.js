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

  it('testa se é recebido todos os produtos', async () => {
    sinon.stub(connection, 'execute')
      .resolves([products]);
    const result = await productModel.findAll();
    expect(result).to.be.deep.equal(products);
  });

  it('testa se é recebido um produto baseado em seu Id', async () => {
    sinon.stub(connection, 'execute')
      .resolves(products[1]);
    const result = products[1];
    expect(result).to.be.deep.equal(products[1]);
  });

  it('testa se é possível inserir um novo produto', async () => {
    sinon.stub(connection, 'execute')
      .resolves([{ insertId: 1 }]);
    const result = await productModel.insert(products[0]);
    expect(result).to.be.deep.equal(1);
  });
  
  it('testa se é possível deletar um produto', async () => {
    sinon.stub(connection, 'execute')
      .resolves([{ affectedRows: 1 }]);
    const result = await productModel.deleteById(1);
    expect(result).to.be.deep.equal(undefined);
  });

  it('testa se é possível atualizar um produto', async () => {
    sinon.stub(connection, 'execute')
      .resolves([{ affectedRows: 1 }]);
    const result = await productModel.updateById("FalleN", 1);
    expect(result).to.be.deep.equal({ id: 1, name: 'FalleN' });
  });
});
