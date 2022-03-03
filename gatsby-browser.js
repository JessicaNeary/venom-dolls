import React from "react";
import { CartProvider } from "use-shopping-cart"

const wrapPageElement = ({ element }) => {
    return (
    <CartProvider
        mode="payment"
        cartMode="checkout-session"
        stripe={process.env.STRIPE_PUBLISHABLE_KEY}
    >
        {element}
    </CartProvider>
)}

export { wrapPageElement }