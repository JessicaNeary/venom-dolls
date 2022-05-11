import React from "react";
import { graphql, StaticQuery } from "gatsby";

import ProductCardSmall from "./ProductCardSmall";

function Products() {
  return (
    <StaticQuery
      query={graphql`
        query ProductPrices {
          prices: allStripePrice(filter: { active: { eq: true } }) {
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
          images: allFile(
            filter: { relativeDirectory: { regex: "/(merch/products)/" } }
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
      `}
      render={({ prices, images }) => (
        <div className="row m-3 pt-4">
          {prices.edges.map(({ node: price }) => {
            const mainImage = images.edges.find((n) => {
              return (
                n.node.relativePath.includes(price.product.images[0]) &&
                n.node.relativePath.match(/1/)
              );
            });
            return (
              <div className="col-12 col-md-6 col-lg-4" key={price.id}>
                <ProductCardSmall mainImage={mainImage} {...price} />
              </div>
            );
          })}
        </div>
      )}
    />
  );
}

export default Products;
