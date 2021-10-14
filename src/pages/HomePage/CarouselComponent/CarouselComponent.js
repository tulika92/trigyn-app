import React from "react";
import trigyn1 from "../../../assets/images/trigyn1.jpeg";
import trigyn2 from "../../../assets/images/trigyn2.jpeg";
import trigyn3 from "../../../assets/images/trigyn3.jpeg";
import trigyn4 from "../../../assets/images/trigyn4.jpeg";

import { Carousel } from "react-bootstrap";
import style from "./CarouselComponent.module.css"

export default function CarouselComponent() {
  const images = [trigyn1, trigyn2, trigyn3, trigyn4];
  return (
    <Carousel fade={true} pause={false}>
      {images.map((image) => (
        <Carousel.Item interval={2000} className={style.carousel}>
          <img className="d-block w-100" src={image} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
