import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';
import Header from './Header';

const Layout = ({ children, path, pageRef, clearHeader = false }) => (
  <div>
    <Header path={path} pageRef={pageRef} clearHeader={clearHeader} />
    { children }
  </div>
);

export default Layout