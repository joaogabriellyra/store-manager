const nameLength = (name) => {
  if (name.length < 5) {
    return 'NAME_LENGTH_VALUE';
  }
  return null;
};

module.exports = {
  nameLength,
};