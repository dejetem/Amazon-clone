const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_API);


const app = express();


const corsOptions = {
    origin: 'https://clone-f09e1.web.app',
    optionsSuccessStatus: 200 
}
app.use(express.json());

app.get('/',cors(corsOptions),(req,res) => res.status(200).send('Hello World'));

app.post('/payments/create',cors(corsOptions), async(req, res) => {
    const total = req.query.total;
    console.log('Payment Request Received', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:'usd',
    });
    res.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app)
//example endpoint
//http://localhost:5001/clone-f09e1/us-central1/api
