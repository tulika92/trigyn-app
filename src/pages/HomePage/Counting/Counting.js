import React from "react";
import style from "./Counting.module.css";
import graduation from "../../../assets/icons/graduation.png";
import book from "../../../assets/icons/book.png";
import star from "../../../assets/icons/star.png";
import certificate from "../../../assets/icons/certificate.png";

export default function Counting() {
  const countingList = [
    { image: graduation, count: "200+", text: "Students" },
    { image: book, count: "450+", text: "Courses" },
    { image: star, count: "200+", text: "Ratings" },
    { image: certificate, count: "500+", text: "Projects" },
  ];

  return (
    <div className={style.base}>
      {countingList.map((item) => (
        <div className={style.list}>
          <img
            src={item.image}
            name="icon-image"
            className={style.icon_image}
          />
          <div className={style.count}>{item.count} </div>
          <div className={style.description}>{item.text}</div>
        </div>
      ))}
    </div>
  );
}
