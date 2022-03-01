import React from "react"
import { graphql, StaticQuery } from "gatsby"

import ProductCardSmall from "./ProductCardSmall";

function Products(props) {
  return (
    <StaticQuery
      query={graphql`
        query ProductPrices {
          prices: allStripePrice(
            filter: { active: { eq: true } }
          ) {
            edges {
                node {
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
            }
          }
          images: allFile(filter: {relativeDirectory: {eq: "merch/products"}}) {
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
      `}
      render={({ prices, images }) => (
        <div className="row">
          {prices.edges.map(({ node: price }) => {
            const mainImage = images.edges.find(n => {
              return n.node.relativePath.includes(price.product.images[0]);
            });

            return (
            <div className="col-4" key={price.id} >
            <ProductCardSmall mainImage={mainImage}{...price} />
            </div>
          )})}
        </div>
      )}
    />
  )
};

export default Products;