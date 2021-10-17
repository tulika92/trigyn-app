import React from "react";
import style from "./Footer.module.css";
import location from "../../assets/icons/location.svg";
import phone from "../../assets/icons/phone.svg";
import arrow_forward from "../../assets/icons/arrow_forward.svg";
import facebook from "../../assets/icons/facebook.png";
import linkedin from "../../assets/icons/linkedin.png";
import twitter from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons/instagram.png";

export default function Footer() {
  const quick_links = [
    "About Us",
    "Blogs",
    "Categories",
    "Courses",
    "Contact Us",
  ];

  const tags = [
    "Courses",
    "Events",
    "Projects",
    "Development",
    "Blogs",
    "Designing",
    "IT & Security",
    "Photography",
    "Accounts & Finance",
  ];

  return (
    <>
      <div className={style.line}></div>
      <div className={style.base}>
        <div className={style.about}>
          About us
          <div className={style.about_details}>
            <img
              src={location}
              name="icon-location"
              className={style.icon_location}
            />
            <div className={style.location}>
              Trigyn Technologies Limited <br />
              27 SDF-1, SEEPZ, Andheri(East) <br />
              Mumbai 400 096 <br />
            </div>
          </div>
          <div className={style.about_details}>
            <img
              src={phone}
              name="icon-phone"
              className={style.icon_location}
            />
            <div>91-22-6140-0909</div>
          </div>
        </div>
        <div className={style.about}>
          Quick Links
          <div className={style.links_details}>
            {quick_links.map((item) => (
              <div className={style.link_item}>
                <img
                  src={arrow_forward}
                  name="arrow-forward"
                  className={style.icon_arrow_forward}
                />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={style.about}>
          Tags
          <div className={style.tags_list}>
            {tags.map((item) => (
              <div className={style.tags_details}>{item}</div>
            ))}
          </div>
        </div>
        <div className={style.about}>
          Social Links
          <div className={style.social}>
            <img
              src={facebook}
              name="icon-facebook"
              className={style.icon_social}
            />
            <img
              src={linkedin}
              name="icon-linkedin"
              className={style.icon_social}
            />
            <img
              src={twitter}
              name="icon-twitter"
              className={style.icon_social}
            />
            <img
              src={instagram}
              name="icon-instagram"
              className={style.icon_social}
            />
          </div>
        </div>
      </div>
      <div className={style.footer_end}>
        <div className={style.left_text}>
          Copyright @ Trigyn Technologies Limited. All Rights Reserved.
        </div>
        <div className={style.right_text}>
          {" "}
          {`   Privacy      Policy | Terms of Use | Disclaimer&Feedback `}
        </div>
      </div>
    </>
  );
}
