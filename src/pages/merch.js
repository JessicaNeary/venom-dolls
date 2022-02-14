import React from "react";
import Layout from "../components/Layout";
import MerchHeader from "../components/MerchHeader";

function Merch({ location }) {
    return (
      <Layout path={location.pathname} clearHeader>
        <MerchHeader />
        Merch
      </Layout>
    );
  }
  
  export default Merch;