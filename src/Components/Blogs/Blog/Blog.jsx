import React from "react";
import './Blog.css'

const Blog = ({id,image,description}) => {
  return (
    <div className="blog" value={id} >
        <img className="blog__img" src={image}/>
  <p className="blog__description">{description}</p>
        <a className="blog__knowMore" href="#"> Know More</a>
    </div>
  );
};

export default Blog;
