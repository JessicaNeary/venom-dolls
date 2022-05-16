import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { clearCart } from "../actions";
import Layout from "../components/Layout";

function PaymentSuccess({ location }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout path={location.pathname} whiteBg>
      <div className="text-center pt-4 text-dark">
        <h1 className="h4 py-4 my-4">Payment successful!</h1>
        <p className="h6 w-75 w-md-50 m-auto">
          Thank you very much for your support! A confirmation of this purchase
          has been sent to your email.
        </p>
        <p className="h6 w-75 w-md-50 m-auto my-4">
          As our merchandise is all hand printed by a local business, please
          allow up to 2-3 weeks for your order to be dispatched.
        </p>
        <StaticImage
          className="mt-4 pt-4"
          height="150"
          objectFit="contain"
          src="../images/logo-black.png"
          placeholder="blurred"
          alt="Venom Dolls logo"
        />
      </div>
    </Layout>
  );
}

export default PaymentSuccess;
