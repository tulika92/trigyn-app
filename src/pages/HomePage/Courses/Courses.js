import React from "react";
import style from "./Courses.module.css";
import Carousel from "react-elastic-carousel";
import Tag from "../../../components/Tag/Tag";
import favorite from "../../../assets/icons/favorite.svg";
import favorite_red from "../../../assets/icons/favorite_red.svg";
import star from "../../../assets/icons/star.svg";
import play from "../../../assets/icons/play.svg";
import watch from "../../../assets/icons/watch.svg";
import profile_1 from "../../../assets/images/profile1.png";

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
      <div className={style.course_stats}>
        <div>
          <img src={play} alt="play" className={style.play} />
          {item.noOfLectures} lectures
          <img src={watch} alt="watch" className={style.watch} />
          Total {item.totalHours} hours
        </div>
        <div>
          <img src={star} alt="star" className={style.play} />
          {item.rating}
        </div>
      </div>
      <div className={style.cover_pic}></div>
      <div className={style.profile_pic}>
        {item.profile_pic != "" && (
          <img src={item.profile_pic} alt="profile_pic" />
        )}
      </div>
      <div className={style.author}>By {item.author}</div>
      <div className={style.exp}>
        {item.experience} yrs of experience in {item.dept}
      </div>
    </div>
  );
}
