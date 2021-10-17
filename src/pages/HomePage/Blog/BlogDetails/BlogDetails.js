import React from "react";
import style from "./BlogDetails.module.css";

export default function BlogDetails() {
  const blogItems = [
    {
      image: "",
      title: "A solution built for Teachers",
      date: "December 27,2019",
      comment: "4 Comments",
      text: "Cum doctus civibus efficiantur in imperdiet deterruis.Cum doctus civibus efficiantur in imperdiet deterruisset.",
    },
    {
      image: "",
      title: "The Secrets of Body Language",
      date: "January 12,2020",
      comment: "16 Comments",
      text: "Cum doctus civibus efficiantur in imperdiet deterruis.Cum doctus civibus efficiantur in imperdiet deterruisset.",
    },
    {
      image: "",
      title: "Spring MVC and Hibernate CRUD",
      date: "January 20,2020",
      comment: "12 Comments",
      text: "Cum doctus civibus efficiantur in imperdiet deterruis.Cum doctus civibus efficiantur in imperdiet deterruisset.",
    },
  ];
  return (
    <div className={style.base}>
      <div className={style.heading}>
        <h1>Blogs</h1>
      </div>
      <div className={style.details}>
        {blogItems.map((item) => (
          <>
            <div className={style.content}>
              <div className={style.imageBox}></div>
              <div>
                <div className={style.title}>{item.title}</div>
                <div className={style.date}>
                  {item.date}|{item.comment}
                </div>
                <div className={style.text}>{item.text}</div>
              </div>
            </div>
            <div>
              <hr className={style.line} />
            </div>
          </>
        ))}
        {/*       <div className={style.imageBox}></div>
         */}
        {/* <div className={style.imageBox}></div>
      <div className={style.details}>
        <div className={style.title}>A Solution built for Teachers</div>
        <div className={style.date}>December 27,2019 | 4 Comments </div>
        <div className={style.text}>
          Cum doctus civibus efficiantur in imperdiet deterruisset.
          Cum doctus civibus efficiantur in imperdiet deterruisset.
        </div> */}
      </div>
      {/*       <hr className={style.line} />
       */}
    </div>
  );
}
