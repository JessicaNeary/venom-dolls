import React from 'react';
import Header from './Header';
import Cart from './Cart';

import { useShoppingCart } from "use-shopping-cart";

const Layout = ({ children, path, pageRef, clearHeader = false }) => {
  const { shouldDisplayCart, handleCartClick } = useShoppingCart();
  return (
  <div>
    <Header path={path} pageRef={pageRef} clearHeader={clearHeader} shouldDisplayCart={shouldDisplayCart} handleCartClick={handleCartClick} />
    <Cart />
    { children }
  </div>
)};

export default Layout