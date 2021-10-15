import React from "react";
import Header from "../../components/Header/Header";
import style from "./HomePage.module.css";
import Footer from "../../components/Footer/Footer";
import CarouselComponent from "./CarouselComponent/CarouselComponent";
import CourseCategories from "./CourseCategories/CourseCategories";

export default function HomePage() {
  return (
    <div className={style.base}>
      <Header />
      <div className={style.App}>
        <CarouselComponent />
        <CourseCategories />
      </div>
      <Footer />
    </div>
  );
}
