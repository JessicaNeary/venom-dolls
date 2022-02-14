import React from "react";

import Layout from "../components/Layout";

function Events({ location }) {
    return (
      <Layout path={location.pathname}>
        Events
      </Layout>
    );
  }
  
  export default Events;