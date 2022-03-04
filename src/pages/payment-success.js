import React, { useEffect } from 'react';
import { useShoppingCart } from "use-shopping-cart"

import Layout from '../components/Layout';

function PaymentSuccess({ location }) {
  const { clearCart } = useShoppingCart();
  useEffect(() => {
      clearCart();
  }, []);
  return (
    <Layout path={location.pathname}>
      Payment successful!
    </Layout>
  );
}

export default PaymentSuccess;