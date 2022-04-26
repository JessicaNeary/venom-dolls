import React, {useRef} from "react";
import Layout from "../components/Layout";
import MerchHeader from "../components/MerchHeader";
import Products from "../components/Products";

function Merch({ location }) {
  const productsRef = useRef(null)
  const handleScroll = () => {
    window.scrollTo({
      top: productsRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Layout path={location.pathname} pageRef={productsRef} clearHeader>
      <div className="position-absolute top-0 z-index-1 text-dark">
        <MerchHeader handleScroll={handleScroll}/>
        <div className="pt-4" ref={productsRef}>
          <Products />
        </div>
      </div>
    </Layout>
  );
}
  
export default Merch;