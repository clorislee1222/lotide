const middle = function(a) {
  let result = [];
  let arrayLength = a.length;
  if (arrayLength <= 2) {
    return result;
  }
  if (arrayLength % 2 === 1) {
    result.push(a[(arrayLength - 1) / 2]);
    return result;
  }
  if (arrayLength % 2 === 0) {
    result.push(a[arrayLength / 2 - 1]);
    result.push(a[arrayLength / 2]);
    return result;
  }
};

module.exports = middle;