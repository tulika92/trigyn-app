import React, { useState } from "react";
import style from "./Header.module.css";
import trigyn_logo from "../../assets/logo/trigyn-logo.svg";
import Button from "../Button/Button";
import SearchBox from "../SearchBox/SearchBox";

import identity from "../../assets/icons/identity.svg";
export default function Header() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const onHandleClick = (index) => {
    setActiveTabIndex(index);
  };

  const HEADER_MENU_LIST = [
    "Home",
    "Courses",
    "Blog",
    "Contact Us",
    "About Us",
  ];

  return (
    <>
      <div className={style.base}>
        <div className={style.img}>
          <img src={trigyn_logo} alt="trigyn-logo" />
        </div>
        <div className={style.header}>
          <div className={style.button_group}>
            {HEADER_MENU_LIST.map((item, index) =>
              index === activeTabIndex ? (
                <Button key={index} name={item} value={item} class={"active_menu_button"} />
              ) : (
                <Button
                  key={index}
                  name={item}
                  value={item}
                  class={"menu_button"}
                  onClick={() => onHandleClick(index)}
                />
              )
            )}
          </div>
        </div>
        <div className={style.right_header}>
          <SearchBox
            after_icon={true}
            value=""
            placeholder="Search For Anything"
            class="search"
          />
          <div className={style.identity}>
            <img src={identity} alt="identity" />
            <Button
              name="login_register"
              value="Login/Register"
              class={"identity"}
            />
          </div>
        </div>
      </div>
      <div className={style.line}></div>
    </>
  );
}
