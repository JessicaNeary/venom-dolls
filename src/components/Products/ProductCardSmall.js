import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import React from "react";

const ProductCardSmall = ({ id, mainImage, product, currency, unit_amount }) => {
    const formatPrice = (amount, currency) => {
        let price = (amount / 100).toFixed(2)
        let numberFormat = new Intl.NumberFormat(["en-US"], {
          style: "currency",
          currency: currency,
          currencyDisplay: "symbol",
        })
        return numberFormat.format(price)
      }
    return (
        <Link to={`/merch/product/${id}`} key={id}>
            {product.name}
            {formatPrice(unit_amount, currency)}
            {mainImage &&
            <GatsbyImage alt={product.name} image={mainImage.node.childImageSharp.gatsbyImageData} />
}
        </Link>
    )
}

export default ProductCardSmall;