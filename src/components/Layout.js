import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";

import { toggleCartOpen } from "../actions";

const Layout = ({
  children,
  path,
  pageRef,
  pageStyles = "",
  clearHeader = false,
  whiteBg,
}) => {
  const cartOpen = useSelector((store) => store.cartOpen);
  const dispatch = useDispatch();
  return (
    <div className={`min-vh-100 ${!whiteBg && "bg-black"} pb-4`}>
      <Header
        path={path}
        pageRef={pageRef}
        clearHeader={clearHeader}
        shouldDisplayCart={cartOpen}
        handleCartClick={() => dispatch(toggleCartOpen())}
      />
      <Cart cartOpen={cartOpen} />
      <main className={!clearHeader ? "page-body" : ""}>{children}</main>
      <Footer whiteBg={whiteBg} />
    </div>
  );
};

export default Layout;
