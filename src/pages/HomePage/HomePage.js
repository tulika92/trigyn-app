import React from "react";
import Header from "../../components/Header/Header";
import style from "./HomePage.module.css";
import Footer from "../../components/Footer/Footer";
import CarouselComponent from "./CarouselComponent/CarouselComponent";
import CourseCategories from "./CourseCategories/CourseCategories";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

export default function HomePage() {
  return (
    <div className={style.base}>
      <Header />
      <div className={style.App}>
        <CarouselComponent />
        <div className={style.body}>
          <CourseCategories />
          <ImageSlider />
        </div>
      </div>
      <Footer />
    </div>
  );
}
