import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { StaticImage } from 'gatsby-plugin-image';

function MerchHeader() {
    return (
        <Carousel>
            <Carousel.Item>
                <StaticImage src="../images/merch/header/merch-all.jpg" className="d-block w-100" alt="merch group shoot" />
            </Carousel.Item>
            <Carousel.Item>
                <StaticImage src="../images/merch/header/merch-hoodie-front-back.jpg" className="d-block w-100" alt="merch group shoot" />
            </Carousel.Item>
            <Carousel.Item>
                <StaticImage src="../images/merch/header/merch-shirt-front-back.jpg" className="d-block w-100" alt="Venom Dolls merch t-shirts front and back view" />
            </Carousel.Item>            
            <Carousel.Item>
                <StaticImage src="../images/merch/header/merch-hoodie-front-1.jpg" className="d-block w-100" alt="Venom Dolls merch hoodie front view" />               
            </Carousel.Item>            
            <Carousel.Item>
                <StaticImage src="../images/merch/header/merch-mask.jpg" className="d-block w-100" alt="Venom Dolls merch mask" />
            </Carousel.Item>            
            <Carousel.Item>
                <StaticImage src="../images/merch/header/merch-hoodie-front-2.jpg" className="d-block w-100" alt="Venom Dolls merch hoodie front and back view" />
            </Carousel.Item>
        </Carousel>
    )
}

export default MerchHeader;