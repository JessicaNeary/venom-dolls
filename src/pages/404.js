import React from "react";
import Layout from "../components/Layout";

function PaymentSuccess({ location }) {
  return (
    <Layout path={location.pathname}>
      <div className="text-center pt-4 text-white bg-black">
        <h1 className="h4 py-4 my-4">Page not found</h1>
        <h2 className="h6 fw-normal w-75 w-md-50 m-auto">
          This is not the page you are looking for. You can go about your
          business{" "}
          <a
            href="/"
            className="text-danger text-decoration-none"
            aria-label="link to homepage"
          >
            here
          </a>
          .
        </h2>
      </div>
    </Layout>
  );
}

export default PaymentSuccess;
