const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Ensure the app is required to start the server

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';

  before((done) => {
    app.listen(7865, () => done()); // Start server before running tests
  });

  it('should return status code 200', (done) => {
    request.get(`${baseUrl}/`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get(`${baseUrl}/`, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
