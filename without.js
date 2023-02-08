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

const without = function (a, b) {
  let c = [];
  for (let a1 of a) {
    let check = true;
    for (let b1 of b) {
      if (a1 === b1) {
        check = false;
      }
    }
    if (check) {
      c.push(a1);
    }
  }
  return c;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], [4]), [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without([], []), []);
assertArraysEqual(without([1, 2], [1, 2]), []);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);