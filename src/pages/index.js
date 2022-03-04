import React from 'react';

import Layout from '../components/Layout';

function Home({ location }) {
  return (
    <Layout path={location.pathname}>
      Home
    </Layout>
  );
}

export default Home;
