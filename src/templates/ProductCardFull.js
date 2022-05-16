import React, { useState, useRef } from "react";
import { graphql } from "gatsby";
import { useDispatch } from "react-redux";
import { GatsbyImage } from "gatsby-plugin-image";
import Dropdown from "react-bootstrap/Dropdown";

import formatPrice from "../utils/formatPrice";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import SizeChart from "../components/Products/SizeChart";

import { toggleCartOpen, addToCart } from "../actions";

const ProductCardFull = ({ data: { stripePrice, images } }) => {
  const sizeRef = useRef(null);
  const [focusedImageIndex, setFocus] = useState(0);
  const [sizeChartOpen, toggleSizeChart] = useState(false);
  const [highlightSizing, setHighlight] = useState(false);
  const [size, setSize] = useState(null);
  const dispatch = useDispatch();

  const needsSize = stripePrice.product.name !== "Face Mask";

  const handleBuy = () => {
    if (!needsSize || size) {
      dispatch(
        addToCart({
          id: stripePrice.id,
          name: stripePrice.product.name,
          price: stripePrice.unit_amount,
          image: images.edges[0].node,
          currency: stripePrice.currency,
          size: size,
        })
      );
      dispatch(toggleCartOpen());
    } else if (needsSize && !size) {
      sizeRef.current.focus();
      setHighlight(true);
    }
  };

  const nextImage = () => {
    if (focusedImageIndex === images.edges.length - 1) {
      setFocus(0);
    } else setFocus(focusedImageIndex + 1);
  };

  const prevImage = () => {
    if (focusedImageIndex === 0) {
      setFocus(images.edges.length - 1);
    } else setFocus(focusedImageIndex - 1);
  };

  const toggle = () => toggleSizeChart(!sizeChartOpen);

  const focusedImage = images.edges[focusedImageIndex].node;

  return (
    <Layout path="/merch" whiteBg>
      <Seo title={stripePrice.product.name} />
      <div className="row justify-content-center p-3 text-dark">
        <div className="col-12 col-md-10 col-lg-6 col-xl-5 mb-4 pb-4 position-relative">
          <GatsbyImage
            alt={focusedImage.name}
            image={focusedImage.childImageSharp.gatsbyImageData}
          />
          <button
            className="carousel-control-prev"
            onClick={prevImage}
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            onClick={nextImage}
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
        <div className="d-none d-lg-block d-md-block col-2 col-lg-1">
          {images.edges.map(
            ({ node }, index) =>
              node.name !== focusedImage.name && (
                <GatsbyImage
                  className="mb-3"
                  key={node.name}
                  alt={node.name}
                  image={node.childImageSharp.gatsbyImageData}
                  onClick={() => setFocus(index)}
                />
              )
          )}
        </div>
        <div className="col-12 col-lg-5 col-xl-6">
          <h2 className="text-uppercase mt-2 fw-bold">
            {stripePrice.product.name}
          </h2>
          <h4 className="text-danger mt-2">
            {formatPrice(stripePrice.unit_amount, stripePrice.currency)}
          </h4>
          <h5 className="fw-normal mt-4">{stripePrice.product.description}</h5>
          {needsSize && (
            <button
              type="button"
              className="border-0 bg-transparent mt-4"
              onClick={toggle}
            >
              Size Chart
            </button>
          )}
          {needsSize && (
            <Dropdown>
              <Dropdown.Toggle
                ref={sizeRef}
                onFocus={() => setHighlight(false)}
                className={`w-100 btn-light rounded-0 border-${
                  highlightSizing ? "danger" : "dark"
                }`}
              >
                {size || "SIZING"}
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100">
                <Dropdown.Item onClick={() => setSize("XS")}>XS</Dropdown.Item>
                <Dropdown.Item onClick={() => setSize("S")}>S</Dropdown.Item>
                <Dropdown.Item onClick={() => setSize("M")}>M</Dropdown.Item>
                <Dropdown.Item onClick={() => setSize("L")}>L</Dropdown.Item>
                <Dropdown.Item onClick={() => setSize("XL")}>XL</Dropdown.Item>
                <Dropdown.Item onClick={() => setSize("XXL")}>
                  XXL
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          <button
            className="buy-btn w-100 mt-2 mb-4 p-1 btn-dark rounded-0"
            onClick={handleBuy}
          >
            BUY NOW
          </button>
        </div>
      </div>
      <SizeChart isOpen={sizeChartOpen} toggle={toggle} />
    </Layout>
  );
};

export const query = graphql`
  query ($productId: String, $imageLocation: String) {
    stripePrice(id: { eq: $productId }) {
      id
      currency
      unit_amount
      product {
        id
        images
        description
        name
      }
    }
    images: allFile(
      filter: { relativeDirectory: { eq: $imageLocation } }
      sort: { fields: relativePath }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export default ProductCardFull;
