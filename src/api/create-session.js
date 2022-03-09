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

export default async function handler(req, res) {
    try {
      const lineItems = []
      const sizeInfo = []
      req.body.items.forEach((item) => {
        const index = lineItems.findIndex(({ id }) => item.id)
        if (index !== -1) {
            lineItems[index].quantity += item.quantity;
        }
        else lineItems.push({ price: item.id, quantity: item.quantity });
        sizeInfo.push(`${item.quantity}x${item.size}${item.name}`)
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
        payment_intent_data: {
          description: sizeInfo.join('. ')
        }
      });
      res.status(200).json({ id: session.id })
    } catch (error) {
      res.status(500).send(error.message);
    }
};
