const nameLength = (name) => {
  if (name.length < 5) {
    return 'NAME_LENGTH_VALUE';
  }
  return null;
};

const saleId = (sale) => { 
  for (let i = 0; i < sale.length; i += 1) {
    if (sale[i].productId > 100) {
      return 'error';
    }
  }
  return null;
};

module.exports = {
  nameLength,
  saleId,
};