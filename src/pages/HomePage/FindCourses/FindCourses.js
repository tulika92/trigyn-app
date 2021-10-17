import React from "react";
import SearchBox from "../../../components/SearchBox/SearchBox";
import style from "./FindCourses.module.css";

export default function FindCourses() {
  return (
    <div>
      <h2>Search Over 1000 Tutorial and Courses</h2>
      <div className={style.findCourses}>
        <SearchBox
          before_icon={true}
          placeholder="Courses or Keyword"
          style="courses"
        />
      </div>
    </div>
  );
}
