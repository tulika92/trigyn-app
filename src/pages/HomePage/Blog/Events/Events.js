import React, { useState } from "react";
import style from "./Events.module.css";
import upArrow from "../../../../assets/icons/up-arrow-circular-button.png";
import calendar from "../../../../assets/icons/calendar.png";
import chevron from "../../../../assets/icons/chevron.png";
import clock from "../../../../assets/icons/clock.png";
import location from "../../../../assets/icons/placeholder.png";

export default function Events() {
  const [activeIndex, setActiveIndex] = useState(0);
  const eventItems = [
    {
      title: "How to make Beautiful Landscape Photos",
      setButton: true,
      image: "",
      date: "Apr 13",
      time: "10:00AM",
      location: "Seepz Training Room, Mumbai",
      text: "Learn Portrait Photography, Landscape Photography, Stock Photography, Photography Composition, Black and White, and more. Understand advanced photography concepts, Histograms, Light Metering, RAW Format",
    },
    {
      title: "Adobe XD: Prototyping Tips & Tricks",
      setButton: false,
      image: "",
      date: "Apr 20",
      time: "10:00AM",
      location: "Seepz Training Room, Mumbai",
      text: "Cum doctus civibus efficiantur in imperdiet deterruis.Cum doctus civibus efficiantur in imperdiet deterruisset.",
    },
    {
      title: "Design Instruments for Communication",
      setButton: false,
      image: "",
      date: "Apr 22",
      time: "10:00AM",
      location: "Seepz Training Room, Mumbai",
      text: "Cum doctus civibus efficiantur in imperdiet deterruis.Cum doctus civibus efficiantur in imperdiet deterruisset.",
    },
    {
      title: "Productivity & Time Management for the Overwhelmed",
      setButton: false,
      image: "",
      date: "Apr 13",
      time: "10:00AM",
      location: "Seepz Training Room, Mumbai",
      text: "Cum doctus civibus efficiantur in imperdiet deterruis.Cum doctus civibus efficiantur in imperdiet deterruisset.",
    },
  ];

  const toggle = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={style.base}>
      <div className={style.heading}>
        Events
      </div>
      <div className={style.event_details}>
        {eventItems.map((item, index) => (
          <div className={style.event}>
            <div className={style.headLine}>
              {item.title}
              {index==activeIndex ? <img
                src={upArrow}
                className={style.icon_upArrow}
                onClick={()=>toggle(index)}
              ></img> : <img
              src={chevron}
              className={style.icon_upArrow}
              onClick={()=>toggle(index)}
            ></img> }
              
            </div>
            <div className={style.details}>
              <div
                className={
                  index == activeIndex ? style.imageBox : style.imageBox_none
                }
              ></div>
              <div>
                <div className={style.image_text}>
                  <img src={calendar} className={style.icon_image}></img>
                  {item.date}<span style={{marginRight:"10px", marginLeft:"10px"}}>|</span>
                  <img src={clock} className={style.icon_image}></img>
                  {item.time}<span style={{marginRight:"10px", marginLeft:"10px"}}>|</span>
                  <img src={location} className={style.icon_image}></img>
                  {item.location}
                </div>
                <div
                  className={
                    index == activeIndex
                      ? style.description
                      : style.description_none
                  }
                >
                  {item.text}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
