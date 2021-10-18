import React, { useState } from "react";
import SearchBox from "../../../components/SearchBox/SearchBox";
import Dropdown from "../../../components/Dropdown/Dropdown";

import style from "./FindCourses.module.css";
import Button from "../../../components/Button/Button";

export default function FindCourses() {
  const categories = ["Design", "Developement", "Web Dev", "Soft Dev"];
  const upload=["New First", "Old First", "Popular"];

  const [uploads, setUpload] = useState("");
  function onSelect(index) {
    setUpload(upload[index]);
  }

  const [category, setCategory] = useState("");
  function onClick(index) {
    setCategory(categories[index]);
  }

  return (
    <>
      <h2 className={style.h2}>Search Over 1000 Tutorial and Courses</h2>
      <div className={style.findCourses}>
        <SearchBox
          before_icon={true}
          placeholder="Courses or Keyword"
          style="courses"
        />
        <Dropdown
          title="Select Category"
          items={categories}
          value={category}
          onClick={(index) => onClick(index)}
          styles="category"
        />
        <Button value="Find Courses" name="Find Courses" style="find_courses" />
      </div>
      <h2 className={style.h2}>Courses</h2>
      <div className = {style.course_details}>
        <div className={style.course_desc}>Cum doctos civibus efficantur in imperdiet deterruisset</div>
        <div className= {style.dropdowns}>
          <Dropdown
            title="Sort"
            items={upload}
            value={uploads}
            onClick={(index) => onSelect(index)}
            styles = "new_first"
          />
          <Dropdown
            title="Choose Courses Category"
            items={categories}
            value={category}
            onClick={(index) => onClick(index)}
            styles = "choose_category"

          />
        </div>
      </div>
    </>
  );
}
