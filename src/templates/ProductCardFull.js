import React, { useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage  } from "gatsby-plugin-image"
import Dropdown from "react-bootstrap/Dropdown";

import formatPrice from "../utils/formatPrice";
import Layout from "../components/Layout"

const ProductCardFull = ({ data: {stripePrice, images} }) => {
    const [ focusedImage, setFocus ] = useState(images.edges[0].node);
    const [ size, setSize ] = useState("SIZING");
    console.log(images)
    return (
    <Layout path="/merch">
      <div className="row justify-content-center m-3 mt-4">
        <div className="col-12 col-md-10 col-lg-5 mb-4">
          <GatsbyImage alt={focusedImage.name} image={getImage(focusedImage)} />
        </div>
        <div className="d-none d-lg-block d-md-block col-lg-2 col-md-2">
          { images.edges.map(({ node }) => (
            node.name !== focusedImage.name &&
            <GatsbyImage key={node.name} alt={node.name} image={getImage(node)} onClick={() => setFocus(node)} />
          ))}
        </div>
        <div className="col-12 col-lg-5">
          <h2 className="text-uppercase mt-2">{stripePrice.product.name}</h2>
          <h4 className="mt-2">{formatPrice(stripePrice.unit_amount, stripePrice.currency)}</h4>
          <h5 className="fw-normal mt-4">{stripePrice.product.description}</h5>
          <Dropdown>
            <Dropdown.Toggle className="w-100 mt-4 btn-light border-dark rounded-0">{size}</Dropdown.Toggle>
            <Dropdown.Menu className="w-100">
              <Dropdown.Item onClick={() => setSize("XS")}>XS</Dropdown.Item>
              <Dropdown.Item onClick={() => setSize("S")}>S</Dropdown.Item>
              <Dropdown.Item onClick={() => setSize("M")}>M</Dropdown.Item>
              <Dropdown.Item onClick={() => setSize("L")}>L</Dropdown.Item>
              <Dropdown.Item onClick={() => setSize("XL")}>XL</Dropdown.Item>
              <Dropdown.Item onClick={() => setSize("XXL")}>XXL</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
          <button className="w-100 mt-2 p-1 btn-dark rounded-0">BUY NOW</button>
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
    images: allFile(filter: {relativeDirectory: {eq: $imageLocation}}) {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
}
`

export default ProductCardFull;