import React from "react";
import style from "./Courses.module.css";
import Carousel from "react-elastic-carousel";
import Tag from "../../../components/Tag/Tag";
import favorite from "../../../assets/icons/favorite.svg";
import favorite_red from "../../../assets/icons/favorite_red.svg";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ],
  courses = [
    {
      isNew: true,
      dept: "Web Design",
      isFavorite: false,
      title: "The Complete Javascript Course 2020: Build Real Projects!",
      noOfLectures: 227,
      totalHours: 40,
      rating: 4.6,
      profile_pic: "",
      author: "Jenny Thompson",
      experience: 10,
      backgroundImage: "",
    },
    {
      isNew: true,
      dept: "Web Design",
      isFavorite: true,
      title: "The Complete Javascript Course 2020: Build Real Projects!",
      noOfLectures: 227,
      totalHours: 40,
      rating: 4.6,
      profile_pic: "",
      author: "Jenny Thompson",
      experience: 10,
      backgroundImage: "",
    },
    {
      isNew: true,
      dept: "Web Design",
      isFavorite: false,
      title: "The Complete Javascript Course 2020: Build Real Projects!",
      noOfLectures: 227,
      totalHours: 40,
      rating: 4.6,
      profile_pic: "",
      author: "Jenny Thompson",
      experience: 10,
      backgroundImage: "",
    },
    {
      isNew: true,
      dept: "Web Design",
      isFavorite: false,
      title: "The Complete Javascript Course 2020: Build Real Projects!",
      noOfLectures: 227,
      totalHours: 40,
      rating: 4.6,
      profile_pic: "",
      author: "Jenny Thompson",
      experience: 10,
      backgroundImage: "",
    },
    {
      isNew: true,
      dept: "Web Design",
      isFavorite: true,
      title: "The Complete Javascript Course 2020: Build Real Projects!",
      noOfLectures: 227,
      totalHours: 40,
      rating: 4.6,
      profile_pic: "",
      author: "Jenny Thompson",
      experience: 10,
      backgroundImage: "",
    },
    {
      isNew: true,
      dept: "Web Design",
      isFavorite: false,
      title: "The Complete Javascript Course 2020: Build Real Projects!",
      noOfLectures: 227,
      totalHours: 40,
      rating: 4.6,
      profile_pic: "",
      author: "Jenny Thompson",
      experience: 10,
      backgroundImage: "",
    },
  ];

export default function Courses() {
  return (
    <div className="carousel-wrapper">
      <Carousel
        breakPoints={breakPoints}
        className={style.carousellll}
        disableArrowsOnEnd={false}
      >
        {courses.map((item) => (
          <Course item={item} />
        ))}
      </Carousel>
    </div>
  );
}
function Course(props) {
  const item = props.item;
  return (
    <div className={style.base}>
      <div className={style.flex}>
        <div className={style.course_dept}>
          <Tag value={item.isNew ? "New" : "Old"} style="course" />
          <span className={style.dept}>{item.dept}</span>
        </div>
        {item.isFavorite ? (
          <img src={favorite_red} name="favorite_red" />
        ) : (
          <img src={favorite} name="favorite" />
        )}
      </div>
      <span className={style.title}>{item.title}</span>
    </div>
  );
}
