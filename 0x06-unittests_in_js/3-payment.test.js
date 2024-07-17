// 3-payment.test.js
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  let calculateNumberSpy;

  beforeEach(function () {
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(function () {
    calculateNumberSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, and 20', function () {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
  });
});
