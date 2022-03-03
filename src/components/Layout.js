import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';
import Header from './Header';
import Cart from './Cart';

import { useShoppingCart } from "use-shopping-cart";

const Layout = ({ children, path, pageRef, clearHeader = false }) => {
  const { shouldDisplayCart, handleCartClick, cartDetails } = useShoppingCart();
  return (
  <div>
    <Header path={path} pageRef={pageRef} clearHeader={clearHeader} shouldDisplayCart={shouldDisplayCart} handleCartClick={handleCartClick} />
    <Cart shouldDisplayCart={shouldDisplayCart} handleCartClick={handleCartClick} cartDetails={cartDetails} />
    { children }
  </div>
)};

export default Layout