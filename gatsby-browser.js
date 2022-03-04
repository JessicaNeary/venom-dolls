import React from "react";
import { CartProvider } from "use-shopping-cart"

import 'bootstrap/dist/css/bootstrap.css';
import './src/styles.css';

const wrapPageElement = ({ element }) => {
    return (
    <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={process.env.STRIPE_PUBLISHABLE_KEY}
        successUrl={`${window.location.origin}/payment-success/`}
        cancelUrl={`${window.location.origin}/`}
        billingAddressCollection={true}
        currency="NZD"
    >
        {element}
    </CartProvider>
)}

export { wrapPageElement }