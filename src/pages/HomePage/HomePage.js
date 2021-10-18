import React from "react";
import Header from "../../components/Header/Header";
import style from "./HomePage.module.css";
import Footer from "../../components/Footer/Footer";
import CarouselComponent from "./CarouselComponent/CarouselComponent";
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
          <div className={style.text_one}>Courses Categories</div>
          <div className={style.text_two}>Cum doctos civibus efficantur in imperdiet deterruisset</div>
          <ImageSlider />
          <div style={{ marginTop: "40px" }}>
            <div className={style.button}>
              <Button
                value="All Categories"
                name="All Categories"
                class="all_courses"
              />
            </div>
          </div>
          <FindCourses />
          <Courses />
          <div style={{ marginTop: "40px" }}>
            <div className={style.button}>
              <Button
                value="View All Courses"
                name="View All Courses"
                class="all_courses"
              />
            </div>
          </div>

          <Counting />

          <Blog />
        </div>
      </div>
      <Footer />
    </div>
  );
}
