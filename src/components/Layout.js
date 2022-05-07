import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import Cart from './Cart';

import { toggleCartOpen } from "../actions";

const Layout = ({ children, path, pageRef, pageStyles = "", clearHeader = false }) => {
  const cartOpen = useSelector(store => store.cartOpen)
  const dispatch = useDispatch();
  return (
  <div className={`min-vh-100 ${pageStyles}`}>
    <Header 
      path={path} 
      pageRef={pageRef} 
      clearHeader={clearHeader} 
      shouldDisplayCart={cartOpen} 
      handleCartClick={() => dispatch(toggleCartOpen())} 
    />
    <Cart cartOpen={cartOpen} />
    <div className={!clearHeader ? "page-body" : ""}>
    { children }
    </div>
  </div>
)};

export default Layout