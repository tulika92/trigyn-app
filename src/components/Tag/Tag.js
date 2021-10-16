import React from "react";
import style from "./Tag.module.css";
export default function Tag(props) {
  return <div className={style[props.style]}>{props.value}</div>;
}
