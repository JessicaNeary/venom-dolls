import React, { useRef } from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import MerchHeader from "../components/MerchHeader";
import Products from "../components/Products";

function Merch({ location }) {
  const productsRef = useRef(null);
  const handleScroll = () => {
    window.scrollTo({
      top: productsRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Layout path={location.pathname} pageRef={productsRef} clearHeader whiteBg>
      <Seo
        title="Music"
        description="Official Venom Dolls merchandise. Band hoodies, band tees, masks"
      />
      <div className="position-relative top-0 z-index-1 text-dark">
        <MerchHeader handleScroll={handleScroll} />
        <div ref={productsRef}>
          <Products />
        </div>
      </div>
    </Layout>
  );
}

export default Merch;
