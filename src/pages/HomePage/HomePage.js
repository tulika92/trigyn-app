import React from "react";
import Header from "../../components/Header/Header";
import style from "./HomePage.module.css";
import Footer from "../../components/Footer/Footer";
import CarouselComponent from "./CarouselComponent/CarouselComponent";
import CourseCategories from "./CourseCategories/CourseCategories";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Blog from "./Blog/Blog";
import Courses from "./Courses/Courses";
import Counting from "./Counting/Counting";
import Button from "../../components/Button/Button";
import FindCourses from "./FindCourses/FindCourses";

export default function HomePage() {
  return (
    <div className={style.base}>
      <Header />
      <div className={style.App}>
        <CarouselComponent />
        <div className={style.body}>
          <CourseCategories />
          <ImageSlider />
          <div className={style.button}>
            <Button
              value="All Categories"
              name="All Categories"
              style="all_courses"
            />
          </div>
          <FindCourses />
          <Courses />
          <div className={style.button}>
            <Button
              value="View All Courses"
              name="View All Courses"
              style="all_courses"
            />
          </div>
          <Counting />

          <Blog />
        </div>
      </div>
      <Footer />
    </div>
  );
}
