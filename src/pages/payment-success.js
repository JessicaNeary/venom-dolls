import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { clearCart } from "../actions";

import Layout from '../components/Layout';

function PaymentSuccess({ location }) {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(clearCart());
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout path={location.pathname}>
      Payment successful!
    </Layout>
  );
}

export default PaymentSuccess;