import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const ProductCardSmall = ({ id, mainImage, product, currency, unit_amount }) => {
    // const image = getImage(
    //   childImageSharp {
    //     gatsbyImageData(
    //       width: 200
    //       placeholder: BLURRED
    //       formats: [AUTO, WEBP, AVIF]
    //     )
    //   }
    // )
    const formatPrice = (amount, currency) => {
        let price = (amount / 100).toFixed(2)
        let numberFormat = new Intl.NumberFormat(["en-US"], {
          style: "currency",
          currency: currency,
          currencyDisplay: "symbol",
        })
        return numberFormat.format(price)
      }
      // console.log(mainImage)
    return (
        <div>
            {product.name}
            {formatPrice(unit_amount, currency)}
            {mainImage &&
            <GatsbyImage alt={product.name} image={mainImage.node.childImageSharp.gatsbyImageData} />
}
        </div>
    )
}

export default ProductCardSmall;