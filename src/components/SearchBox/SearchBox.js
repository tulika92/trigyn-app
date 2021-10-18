import React from "react";
import search from '../../assets/icons/search_small.svg'
import style from './SearchBox.module.css'
export default function SearchBox(props) {
  return (
    <div className = {style[props.class]}>
      {props.before_icon && <img src={search} alt="search_icon" />}
      <input
        type="text"
        name={"search"}
        placeholder={props.placeholder}
        className = {style.base}
      />
      {props.after_icon && <img src={search} alt="search_icon" />}
    </div>
  );
}
