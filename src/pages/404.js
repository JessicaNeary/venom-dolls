import React from 'react';
import Layout from '../components/Layout';

function PaymentSuccess({ location }) {
  return (
    <Layout path={location.pathname} pageStyles="bg-black">
      <div className="text-center pt-4 text-white bg-black">
        <h4 className="py-4 my-4">
          Page not found
        </h4>
        <h6 className="w-75 w-md-50 m-auto">This is not the page you are looking for. You can go about your business <a href="/" className="text-danger text-decoration-none">here</a>.</h6>
      </div>
    </Layout>
  );
}

export default PaymentSuccess;