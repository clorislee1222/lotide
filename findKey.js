const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (key in object) { // loop through object's keys - I.E Blue HIll, etc
    if (object.hasOwnProperty(key)) { // if the object has that key
      if (callback(object[key])) { // call back is the instructions, if the object's key's star object contains the callback function's conditions, returns true
        return key;  // if true, return the key
      }
    } else {
      return undefined;
    }
  }
};

// takes in an object and a callback
// returns first key that callback gives truthy
// else return undefined

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

// function(x) { // x represents the keys
// x.stars === 2 // goes through keys - object associated and then returns truthy
// }