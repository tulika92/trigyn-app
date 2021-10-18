import React from "react";
import trigyn1 from "../../../assets/images/trigyn1.jpeg";
import trigyn2 from "../../../assets/images/trigyn2.jpeg";
import trigyn3 from "../../../assets/images/trigyn3.jpeg";
import trigyn4 from "../../../assets/images/trigyn4.jpeg";
import prev_icon from "../../../assets/icons/arrow_back_black.svg";
import next_icon from "../../../assets/icons/arrow_forward_black.svg";
import { Carousel } from "react-bootstrap";
import style from "./CarouselComponent.module.css";

export default function CarouselComponent() {
  const images = [trigyn1, trigyn2, trigyn3, trigyn4];
  const next = <img src={next_icon} alt="next" name="next_icon" />;
  const prev = <img src={prev_icon} alt="previous" name="prev_icon" />;

  return (
    <Carousel fade={true} pause={false} controls={true} nextIcon={next} prevIcon={prev} variant="dark">
      {images.map((image, index) => (
        <Carousel.Item
          key={index}
          interval={2000}
          className={style.carousel}
        >
          <img className="d-block w-100" src={image} alt="First slide" />
  
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
