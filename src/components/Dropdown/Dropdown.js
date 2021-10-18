import React, { useState, useRef, useEffect } from "react";
import open from "../../assets/icons/close.svg";
import close from "../../assets/icons/open.svg";
import style from "./Dropdown.module.css";

export default function Dropdown({ title, items, onClick, value, styles }) {
  const ref = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  function handleOnClick(index) {
    console.log(index);

    toggle();
    onClick(index);
  }

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu

      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);

  return (
    <div className={style[style ? styles : "base"]} ref={ref}>
      <div className={style.box} role="button" onClick={() => toggle(!isOpen)}>
        <div className="title">{value != "" ? value : title}</div>
        {<img src={isOpen ? open : close} name="dropdown" />}
      </div>
      {isOpen && (
        <div className={style.items}>
          {items.map((item, index) => (
            <div
              className={style.item}
              key={index}
              onClick={() => handleOnClick(index)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
