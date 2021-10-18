import React from "react";
import style from "./Courses.module.css";
import Carousel from "react-elastic-carousel";
import profile_1 from "../../../assets/images/profile1.png";
import Course from "./Course/Course";

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
      profile_pic: profile_1,
      author: "Jenny Thompson",
      experience: 10,
      backgroundImage: "",
    },
    {
      isNew: true,
      dept: "Development",
      isFavorite: true,
      title: "Redux Saga(with React and Redux):Fast-track intro course",
      noOfLectures: 227,
      totalHours: 40,
      rating: 4.6,
      profile_pic: profile_1,
      author: "Simon Jones",
      experience: 10,
      backgroundImage: "",
    },
    {
      isNew: true,
      dept: "UX Design",
      isFavorite: false,
      title: "Advanced CSS and Sass:Flexbox, Grid, Animation and More!",
      noOfLectures: 227,
      totalHours: 40,
      rating: 4.6,
      profile_pic: profile_1,
      author: "Mia Jones",
      experience: 10,
      backgroundImage: "",
    },
    {
      isNew: true,
      dept: "Business & Finance",
      isFavorite: false,
      title: "The Complete Financial Analyst Course 2020",
      noOfLectures: 227,
      totalHours: 40,
      rating: 4.6,
      profile_pic: profile_1,
      author: "Jeff Kelso",
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
      profile_pic: profile_1,
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
      profile_pic: profile_1,
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
        className={style.carousel}
        disableArrowsOnEnd={false}
        pagination={false}
        
      >
        {courses.map((item, index) => (
          <Course key={index} item={item} />
        ))}
      </Carousel>
    </div>
  );
}
