import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';
import Header from './Header';

const Layout = ({ children, path, clearHeader = false }) => (
  <div>
    <Header path={path} clearHeader={clearHeader} />
    { children }
  </div>
);

export default Layout