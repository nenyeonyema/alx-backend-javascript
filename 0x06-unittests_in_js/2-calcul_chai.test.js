const calculateNumber = require('./2-calcul_chai.js');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 6 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 5 when inputs are 1.2 and 3.7', function () {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -4 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return -2 when inputs are 1.2 and 3.7', function () {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-2);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.2 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return Error when dividing by 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return 2.5 when inputs are 5.4 and 2.1', function () {
      expect(calculateNumber('DIVIDE', 5.4, 2.1)).to.equal(2.5);
    });
  });

  describe('Invalid Type', function () {
    it('should throw an error for invalid type', function () {
      expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw('Invalid type');
    });
  });
});
