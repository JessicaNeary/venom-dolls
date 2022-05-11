import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import React from "react";
import formatPrice from "../../utils/formatPrice";

const ProductCardSmall = ({
  id,
  mainImage,
  product,
  currency,
  unit_amount,
}) => {
  return (
    <div className="mx-1 my-4 text-dark text-uppercase">
      <Link to={`/merch/product/${id}`} key={id}>
        {mainImage && (
          <GatsbyImage
            alt={product.name}
            image={mainImage.node.childImageSharp.gatsbyImageData}
          />
        )}
      </Link>
      <h6 className="my-1 fw-bold">{product.name}</h6>
      <p className="fst-italic text-danger">
        {formatPrice(unit_amount, currency)}
      </p>
    </div>
  );
};

export default ProductCardSmall;
