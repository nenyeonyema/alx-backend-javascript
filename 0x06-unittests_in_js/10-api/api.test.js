const request = require('request');
const { expect } = require('chai');
const app = require('./api');

const baseUrl = 'http://localhost:7865';

describe('Index page', () => {
    before((done) => {
        app.listen(7865, () => done());
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

describe('Cart page', () => {
    it('should return status code 200 for a valid cart ID', (done) => {
        request.get(`${baseUrl}/cart/12`, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });

    it('should return status code 404 for a non-numeric cart ID', (done) => {
        request.get(`${baseUrl}/cart/hello`, (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});

describe('Available payments', () => {
    it('should return status code 200 and the correct JSON object', (done) => {
        request.get(`${baseUrl}/available_payments`, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            const jsonResponse = JSON.parse(body);
            expect(jsonResponse).to.deep.equal({
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            });
            done();
        });
    });
});

describe('Login', () => {
    it('should return a welcome message with the correct username', (done) => {
        request.post({
            url: `${baseUrl}/login`,
            json: { userName: 'Betty' }
        }, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome Betty');
            done();
        });
    });

    it('should return 400 if no username is provided', (done) => {
        request.post({
            url: `${baseUrl}/login`,
            json: {}
        }, (error, response, body) => {
            expect(response.statusCode).to.equal(400);
            done();
        });
    });
});
