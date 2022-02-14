import React from "react";

import Layout from "../components/Layout";

function Music({ location }) {
    return (
      <Layout path={location.pathname}>
        Music
      </Layout>
    );
  }
  
  export default Music;