import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { StaticImage } from "gatsby-plugin-image";

function MerchHeader({ handleScroll }) {
  return (
    <div className="position-relative">
      <div className="d-flex justify-content-center align-items-center w-100 h-100 position-absolute">
        <button
          className="btn-lg btn btn-outline-light rounded-0 z-index-2"
          onClick={handleScroll}
        >
          Shop Now
        </button>
      </div>
      <Carousel>
        <Carousel.Item>
          <StaticImage
            placeholder="blurred"
            src="../images/merch/header/merch-all.jpg"
            className="d-block w-100"
            alt="merch group shoot"
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            placeholder="blurred"
            src="../images/merch/header/merch-hoodie-front-back.jpg"
            className="d-block w-100"
            alt="merch group shoot"
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            placeholder="blurred"
            src="../images/merch/header/merch-shirt-front-back.jpg"
            className="d-block w-100"
            alt="Venom Dolls merch t-shirts front and back view"
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            placeholder="blurred"
            src="../images/merch/header/merch-hoodie-front-1.jpg"
            className="d-block w-100"
            alt="Venom Dolls merch hoodie front view"
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            placeholder="blurred"
            src="../images/merch/header/merch-mask.jpg"
            className="d-block w-100"
            alt="Venom Dolls merch mask"
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            placeholder="blurred"
            src="../images/merch/header/merch-hoodie-front-2.jpg"
            className="d-block w-100"
            alt="Venom Dolls merch hoodie front and back view"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MerchHeader;
