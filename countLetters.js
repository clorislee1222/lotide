const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let result = {};

  for (let letter of sentence) {
    if (letter !== ' ') {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  
  console.log(result);
  return result;
};

//Test code
const result1 = countLetters("lighthouse in the house");
assertEqual(result1.l, 1);
assertEqual(result1.i, 2);
assertEqual(result1.g, 1);
assertEqual(result1.h, 4);
assertEqual(result1.t, 2);
assertEqual(result1.o, 2);
assertEqual(result1.u, 2);
assertEqual(result1.s, 2);
assertEqual(result1.e, 3);
assertEqual(result1.n, 1);