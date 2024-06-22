const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const PORT = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

// Endpoint for available payments
app.get('/available_payments', (req, res) => {
    res.json({
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    });
});

// Endpoint for login
app.post('/login', (req, res) => {
    const { userName } = req.body;
    if (userName) {
        res.send(`Welcome ${userName}`);
    } else {
        res.status(400).send('Bad Request');
    }
});

// Existing endpoint for cart
app.get('/cart/:id(\\d+)', (req, res) => {
    const cartId = req.params.id;
    res.send(`Payment methods for cart ${cartId}`);
});

app.use('/cart/:id', (req, res) => {
    res.status(404).send('Not Found');
});

app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
