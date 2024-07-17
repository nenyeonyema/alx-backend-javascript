// 4-payment.test.js
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  let calculateNumberStub, consoleLogSpy;

  beforeEach(function () {
    // Stub the calculateNumber function to return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the stub and spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, and 20 and log the total as 10', function () {
    sendPaymentRequestToApi(100, 20);
    
    // Verify that the stub is called with correct arguments
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    
    // Verify that console.log is called with the correct message
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
