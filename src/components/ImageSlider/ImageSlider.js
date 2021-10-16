import React from "react";
import Carousel from "react-elastic-carousel";
import s from "../../assets/images/trigyn1.jpeg";
import trigyn1 from "../../assets/images/trigyn1.jpeg";
import trigyn2 from "../../assets/images/trigyn2.jpeg";
import trigyn3 from "../../assets/images/trigyn3.jpeg";
import trigyn4 from "../../assets/images/trigyn4.jpeg";
import trigyn5 from "../../assets/images/trigyn5.jpg";
import design from "../../assets/images/design_background.jpg";
import software_dev from "../../assets/images/softaware_developement_background.jpg";
import web_dev from "../../assets/images/web_dev_background.jpg";
import business from "../../assets/images/business_background.jpg";
import styled from "styled-components";
import style from "./ImageSlider.module.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ],
  items = [
    { name: "Design", no_of_courses: 20, img: design },
    { name: "Business", no_of_courses: 20, img: business },
    { name: "Software Developement", no_of_courses: 20, img: software_dev },
    { name: "Web Developement", no_of_courses: 20, img: web_dev },
    { name: "Consultancy", no_of_courses: 20, img: trigyn4 },
    { name: "Block Chain", no_of_courses: 20, img: trigyn5 },
  ];

export default function ImageSlider() {
  return (
    <div className="carousel-wrapper">
      <Carousel breakPoints={breakPoints} className ={style.carousellll} disableArrowsOnEnd={false}>
        {items.map((image) => (
          <div
            className={style.item}
            style={{
              backgroundImage: `url(${image.img})`,
            }}
          >
            <div className={style.title}>
              <h4>{image.name}</h4>
              <h6>{`Over ${image.no_of_courses} Courses`}</h6>
            </div>
          </div>
        ))}
      </Carousel>
      {/* <Carousel breakPoints={breakPoints}>
        {items.map((image) => (
          <img src={image} alt="First slide" maxWidth="400px"/>
        ))}
      </Carousel> */}
    </div>
  );
}
