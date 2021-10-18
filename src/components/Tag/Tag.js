import React from "react";
import style from "./Tag.module.css";
export default function Tag(props) {
  return <div className={style[props.class]}>{props.value}</div>;
}
