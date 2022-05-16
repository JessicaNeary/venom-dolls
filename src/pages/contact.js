import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

import Facebook from "../images/socials/icons8-facebook.svg";
import Instagram from "../images/socials/icons8-instagram.svg";

function PaymentSuccess({ location }) {
  return (
    <Layout path={location.pathname}>
      <Seo title="Contact" />
      <div className="text-center pt-4 text-white bg-black">
        <h3 className="py-4 mt-4">CONTACT</h3>
        <h6 className="w-75 w-md-50 m-auto fw-normal">
          You can contact us via email at{" "}
          <a
            href="mailto:venomdollsnz@gmail.com"
            className="text-danger text-decoration-none"
          >
            venomdollsnz@gmail.com
          </a>
          , or message us on one of our socials below:
        </h6>
        <div className="my-4 d-flex w-25 justify-content-center mx-auto">
          <a
            className="px-4"
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/thevenomdolls/"
          >
            <Facebook alt="Facebook Icon by Icons8" />
          </a>
          <a
            className="px-4"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/venomdollsnz/"
          >
            <Instagram alt="Instagram Icon by Icons8" />
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default PaymentSuccess;
