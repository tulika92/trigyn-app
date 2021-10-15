import React from "react";
import Button from "../../../components/Button/Button";
import style from "./CourseCategories.module.css";
import ImageSlider from "../../../components/ImageSlider/ImageSlider";



export default function CourseCategories() {
  return (
    <div className={style.base}>
      <h2>Course Categories</h2>
      <h5>Cum doctos civibus...</h5>
      <Button name="All Categories" value="All Categories" style={"active_menu_button"} />
      <ImageSlider />
    </div>
  );
}
