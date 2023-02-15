const tail = require('../tail');
const assert = require('chai').assert;

describe ('#tail', () => {
  it("return ['Lighthouse', 'Labs'] for [['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });
  it("return [] for ['Hello']", () => {
    assert.deepEqual(tail([""]), []);
  });
})