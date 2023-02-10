const eqObjects = function (object1, object2) {
  const keys = Object.keys(object1);
  if (keys.length === Object.keys(object2).length) {
    for (let key of keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    //console.log(`✔️ Assertion Passed: ${actual}  === ${expected}`);
    console.log('✔️ Assertion Passed: ', actual, ' === ', expected);
  } else {
    console.log('❌ Assertion Failed: ', actual, ' !== ', expected);
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
// Should output:
//✔️ Assertion Passed: { a: '1', b: 2 } === { b: 2, a: '1' }

assertObjectsEqual({ a: '1', b: 2 }, { c: 2, a: '1' });
//❌ Assertion Failed: { a: '1', b: 2 } ! == { c: 2, a: '1' }