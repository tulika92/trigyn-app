import React from 'react'
import BlogDetails from './BlogDetails/BlogDetails'
import Events from './Events/Events'
import style from "./Blog.module.css";

export default function Blog() {
  return (
    <div className={style.base}>
      <BlogDetails />
      <Events />
    </div>
  )
}
