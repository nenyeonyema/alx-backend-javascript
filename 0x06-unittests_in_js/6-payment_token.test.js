// 6-payment_token.test.js

const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should return a resolved promise with correct data when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.have.property('data', 'Successful response from the API');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should do nothing when success is false', function (done) {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        // If this block is called, the test should fail
        done(new Error('Promise should not be resolved'));
      })
      .catch(() => {
        // If the promise rejects, we should also fail the test
        done(new Error('Promise should not be rejected'));
      });

    // Call done directly as no promise resolution is expected
    setTimeout(done, 50); // Adding a slight delay to ensure the promise isn't resolved
  });
});
