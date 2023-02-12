//Our map function will take in two arguments:

// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

//Test function
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

//Test code
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);


