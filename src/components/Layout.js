import React from "react";
import { useDispatch } from "react-redux";
import loadable from "@loadable/component";

import Header from "./Header";
import Footer from "./Footer";

import { toggleCartOpen } from "../actions";

const Cart = loadable(() => import("./Cart"));

const Layout = ({ children, path, pageRef, clearHeader = false, whiteBg }) => {
  const dispatch = useDispatch();
  return (
    <div className={`min-vh-100 ${!whiteBg && "bg-black"} pb-4`}>
      <Header
        path={path}
        pageRef={pageRef}
        clearHeader={clearHeader}
        handleCartClick={() => dispatch(toggleCartOpen())}
      />
      <Cart />
      <main className={!clearHeader ? "page-body" : ""}>{children}</main>
      <Footer whiteBg={whiteBg} />
    </div>
  );
};

export default Layout;
