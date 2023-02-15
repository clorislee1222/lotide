const eqArrays = require('./eqArrays');

const assertArraysEqual = function(a1, a2) {
  if (eqArrays(a1, a2)) {
    console.log(`✔️ ${a1} === ${a2}`);
  } else {
    console.log(`❌ ${a1} !== ${a2}`);
  }
};

module.exports = assertArraysEqual;