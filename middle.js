const eqArrays = function(a1, a2) {
  if (a1.length !== a2.length) {
    return false;
  } 
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(a1, a2) {
  if (eqArrays(a1, a2)) {
    console.log(`✔️ ${a1} === ${a2}`);
  } else {
    console.log(`❌ ${a1} !== ${a2}`);
  }
};

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

// Test code
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
