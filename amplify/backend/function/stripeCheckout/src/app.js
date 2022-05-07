/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


// export const getSession = (items, shipping_rate) => {
//     return axios.post('/create-checkout-session', { items: items, shipping_rate: shipping_rate })
//       .then(res => {
//         return res.id;
//       })
//       .catch(error => {
//         return error
//       })
//   };

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// let stripePromise;
// const getStripe = () => {
//   if (!stripePromise) {
//     stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)
//   }
//   return stripePromise
// }

app.post('/checkout', async function(req, res) {
    try {
      const lineItems = []
      const sizeInfo = []
      req.body.items.forEach((item) => {
        const index = lineItems.findIndex(({ id }) => id === item.id)
        if (index !== -1) {
            lineItems[index].quantity += item.quantity;
        }
        else lineItems.push({ price: item.id, quantity: item.quantity });
        sizeInfo.push(`${item.quantity}x${item.size && item.size} ${item.name}`)
      })

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_address_collection: {
          allowed_countries: ['NZ']
        },
        shipping_options: [
            { shipping_rate: req.body.shippingRate }
        ],
        mode: 'payment',
        success_url: `http://localhost:8000/payment-success/`,
        cancel_url: `http://localhost:8000/merch`,
        line_items: lineItems,
        metadata: {
          "products_purchased": sizeInfo.join('. ')
        },
        payment_intent_data: {
          description: sizeInfo.join('. ')
        }
      });
      res.status(200).json({ id: session.id })
    } catch (error) {
      res.status(500).send(error.message);
    }
});


app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app