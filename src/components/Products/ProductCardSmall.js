import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import React from "react";
import formatPrice from "../../utils/formatPrice";

const ProductCardSmall = ({ id, mainImage, product, currency, unit_amount }) => {
    return (
        <Link to={`/merch/product/${id}`} key={id}>
            {product.name}
            {formatPrice(unit_amount, currency)}
            {mainImage &&
            <GatsbyImage alt={product.name} image={getImage(mainImage.node)} />
}
        </Link>
    )
}

export default ProductCardSmall;