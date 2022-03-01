import React from "react";
import Layout from "../components/Layout";
import MerchHeader from "../components/MerchHeader";
import Products from "../components/Products";

function Merch({ location }) {
    return (
      <Layout path={location.pathname} clearHeader>
        <div className="position-absolute top-0 z-index-1">
          <MerchHeader />
          Merch
          <Products />
        </div>
      </Layout>
    );
  }
  
  export default Merch;