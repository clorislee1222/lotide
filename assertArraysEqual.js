const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(a1, a2) {
  if (a1.length !== a2.length) {
    return false;
  } 
  for (i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(a1, a2) {
  if (eqArrays(a1, a2) {
    console.log(`✔️ ${a1} === ${a2}`);
  }) else {
    console.log(`❌ ${a1} !== ${a2}`);
  }
};
