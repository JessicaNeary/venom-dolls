import React, { useState, useRef } from "react"
import { graphql } from "gatsby"
import { useDispatch } from "react-redux";
import { GatsbyImage } from "gatsby-plugin-image"
import Dropdown from "react-bootstrap/Dropdown";

import formatPrice from "../utils/formatPrice";
import Layout from "../components/Layout"

import { toggleCartOpen, addToCart } from "../actions";

const ProductCardFull = ({ data: {stripePrice, images} }) => {
    const sizeRef = useRef(null);
    const [ focusedImage, setFocus ] = useState(images.edges[0].node);
    const [ highlightSizing, setHighlight ] = useState(false);
    const [ size, setSize ] = useState(null);
    const dispatch = useDispatch();

    const needsSize = stripePrice.product.name !== "Face Mask";
    
    const handleBuy = () => {
      if ( !needsSize || size ) {
        dispatch(addToCart({          
          id: stripePrice.id,
          name: stripePrice.product.name,
          price: stripePrice.unit_amount,
          image: images.edges[0].node,
          currency: stripePrice.currency,
          size: size
        }))
        dispatch(toggleCartOpen());
      } else if ( needsSize && !size ) {
        sizeRef.current.focus();
        setHighlight(true);
      }
    }

    return (
    <Layout path="/merch">
      <div className="row justify-content-center p-3 text-dark">
        <div className="col-12 col-md-10 col-lg-6 mb-4">
          <GatsbyImage alt={focusedImage.name} image={focusedImage.childImageSharp.gatsbyImageData} />
        </div>
        <div className="d-none d-lg-block d-md-block col-lg-1 col-md-2">
          { images.edges.map(({ node }) => (
            node.name !== focusedImage.name &&
            <GatsbyImage className="mb-3" key={node.name} alt={node.name} image={node.childImageSharp.gatsbyImageData} onClick={() => setFocus(node)} />
          ))}
        </div>
        <div className="col-12 col-lg-5">
          <h2 className="text-uppercase mt-2 fw-bold">{stripePrice.product.name}</h2>
          <h4 className="text-danger mt-2">{formatPrice(stripePrice.unit_amount, stripePrice.currency)}</h4>
          <h5 className="fw-normal mt-4">{stripePrice.product.description}</h5>
          { needsSize && 
            <Dropdown>
              <Dropdown.Toggle 
              ref={sizeRef}
              onFocus={() => setHighlight(false)} 
              className={`w-100 mt-4 btn-light rounded-0 border-${highlightSizing ? 'danger' : 'dark'}`}>
                {size || "SIZING"}
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100">
                <Dropdown.Item onClick={() => setSize("XS")}>XS</Dropdown.Item>
                <Dropdown.Item onClick={() => setSize("S")}>S</Dropdown.Item>
                <Dropdown.Item onClick={() => setSize("M")}>M</Dropdown.Item>
                <Dropdown.Item onClick={() => setSize("L")}>L</Dropdown.Item>
                <Dropdown.Item onClick={() => setSize("XL")}>XL</Dropdown.Item>
                <Dropdown.Item onClick={() => setSize("XXL")}>XXL</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          }
          <button className="buy-btn w-100 mt-2 p-1 btn-dark rounded-0" onClick={handleBuy}>BUY NOW</button>
        </div>
    </div>
    </Layout>
)}

export const query = graphql`
query($productId: String, $imageLocation: String) {
    stripePrice(id: {eq: $productId}) {
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
      filter: {relativeDirectory: {eq: $imageLocation}}
      sort: {fields: relativePath}
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
`

export default ProductCardFull;