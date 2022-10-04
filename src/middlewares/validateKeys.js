const checkingFirstItem = (body) => {
  const result = Object.keys(body[0]);
  if (result[0] === 'quantity') return { message: '"productId" is required' };
};

const checkingBodyKeys = (body) => {
  const result = body.map((el) => (Object.keys(el)));
  let error = null;
  result.forEach((element) => {
    if (element[0] !== 'productId') error = { message: '"productId" is required' };
    if (element[1] !== 'quantity') error = { message: '"quantity" is required' };
  });
  return error;
};

const checkingQuantity = (body) => {
  for (let i = 0; i < body.length; i += 1) {
    if (body[i].quantity <= 0) {
      return { message: '"quantity" must be greater than or equal to 1' };
    }
  }
};

const validateSalesInputs = (req, res, next) => {
  let error = null;
  error = checkingQuantity(req.body);
  if (error) return res.status(422).json(error);
  if (req.body.length === 1) {
    error = checkingFirstItem(req.body);
    if (error) return res.status(400).json(error);
  }
  error = checkingBodyKeys(req.body);
  if (error) return res.status(400).json(error);
  next();
};

module.exports = validateSalesInputs;