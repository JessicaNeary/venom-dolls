import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import Cart from './Cart';

import { toggleCartOpen } from "../actions";

const Layout = ({ children, path, pageRef, clearHeader = false }) => {
  const cartOpen = useSelector(store => store.cartOpen)
  const dispatch = useDispatch();
  return (
  <div>
    <Header 
      path={path} 
      pageRef={pageRef} 
      clearHeader={clearHeader} 
      shouldDisplayCart={cartOpen} 
      handleCartClick={() => dispatch(toggleCartOpen())} 
    />
    <Cart />
    { children }
  </div>
)};

export default Layout