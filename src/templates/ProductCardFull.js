import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage  } from "gatsby-plugin-image"

import Layout from "../components/Layout"

const ProductCardFull = ({ data: {stripePrice, images} }) => {
    return (
    <Layout path="/merch">
    <div>
        <h1>{stripePrice.product.name}</h1>
        <h2>{stripePrice.product.description}</h2>
        <GatsbyImage alt={stripePrice.product.name} image={images.edges[0].node.childImageSharp.gatsbyImageData} />
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