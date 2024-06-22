// 5-payment.test.js
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let consoleLogSpy;

  beforeEach(function () {
    // Set up a spy on console.log before each test
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the spy after each test
    consoleLogSpy.restore();
  });

  it('should log "The total is: 120" and be called once when called with 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);

    // Verify the console output
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWithExactly('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" and be called once when called with 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);

    // Verify the console output
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWithExactly('The total is: 20')).to.be.true;
  });
});
