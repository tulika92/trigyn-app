import React from "react";

import Tag from "../../../../components/Tag/Tag";
import favorite from "../../../../assets/icons/favorite.svg";
import favorite_red from "../../../../assets/icons/favorite_red.svg";
import star from "../../../../assets/icons/star.svg";
import play from "../../../../assets/icons/play.svg";
import watch from "../../../../assets/icons/watch.svg";
import style from "./Course.module.css";

export default function Course(props) {
  const item = props.item;
  return (
    <div className={style.base}>
      <div className={style.flex}>
        <div className={style.course_dept}>
          <Tag value={item.isNew ? "New" : "Old"} class="course" />
          <span className={style.dept}>{item.dept}</span>
        </div>
        {item.isFavorite ? (
          <img src={favorite_red} alt="favorite_red" />
        ) : (
          <img src={favorite} alt="favorite" />
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
        {item.profile_pic !== "" && (
          <img src={item.profile_pic} alt="profile_pic" />
        )}
      </div>
      <div className={style.author}>By {item.author}</div>
      <div className={style.exp}>
        {item.experience}+ yrs of experience in {item.dept}
      </div>
    </div>
  );
}
