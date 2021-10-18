import React from "react";
import Carousel from "react-elastic-carousel";
import trigyn4 from "../../assets/images/trigyn4.jpeg";
import trigyn5 from "../../assets/images/trigyn5.jpg";
import design from "../../assets/images/design_background.jpg";
import softwareDev from "../../assets/images/girlStudy.jpg";
import laptop from "../../assets/images/laptop.jpg";
import people from "../../assets/images/people.jpg";
import style from "./ImageSlider.module.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ],
  items = [
    { name: "Design", no_of_courses: 20, img: design },
    { name: "Business", no_of_courses: 20, img: people },
    { name: "Software Developement", no_of_courses: 20, img: softwareDev },
    { name: "Web Developement", no_of_courses: 20, img: laptop },
    { name: "Consultancy", no_of_courses: 20, img: trigyn4 },
    { name: "Block Chain", no_of_courses: 20, img: trigyn5 },
  ];

export default function ImageSlider(props) {
  return (
    <div className="carousel-wrapper">
      <Carousel
        breakPoints={breakPoints}
        disableArrowsOnEnd={false}
        pagination={false}
      >
        {items.map((item,index) => (
          <Image key={index} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Image(props) {
  const item = props.item;
  return (
    <div
      className={style.item}
      style={{
        backgroundImage: `url(${item.img})`,
      }}
    >
      <div>
        <h4>{item.name}</h4>
        <h6>{`Over ${item.no_of_courses} Courses`}</h6>
      </div>
    </div>
  );
}
