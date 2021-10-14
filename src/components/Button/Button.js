import React from "react";
import style from "./Button.module.css";

export default function Button(props) {
  return (
    <div className={style[props.style]}>
        {props.value}
    </div>
  );
}
