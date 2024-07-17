// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4 for 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 for 1 and 3.7', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 for 1.2 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 for 1.5 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Edge cases
  it('should return 0 for 0 and 0', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return 1 for 0.4 and 0.5', function() {
    assert.strictEqual(calculateNumber(0.4, 0.5), 1);
  });

  it('should return -2 for -0.6 and -1.3', function() {
    assert.strictEqual(calculateNumber(-0.6, -1.3), -2);
  });
});
