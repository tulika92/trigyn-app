import React from "react";
import search from '../../assets/icons/search.svg'
import style from './SearchBox.module.css'
export default function SearchBox(props) {
  return (
    <div className = {style.base}>
      {props.before_icon && <img src={search} name="search_icon" />}
      <input
        type="text"
        name={"search"}
        placeholder={props.placeholder}
        className = {style.search}
      />
      {props.after_icon && <img src={search} name="search_icon" />}
    </div>
  );
}
