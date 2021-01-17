import React from "react";
import Blog from "./Blog/Blog";
import blog from "./blog.png";
import "./HomeBlogs.css";

const HomeBlogs = () => {
  return (
    <div className="homeBlogs">
      <div className="homeBlogsHeader">
        <h2>Popular Blogs</h2>
        <img className="homeBlogImg" src="./Images/goldenFlower.png" />
        <p>View All</p>
      </div>
      <div className="homeBlogsCard">
        <Blog
          className="homeBlogCard"
          id="HB1"
          image="./Images/blog1.png"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, vitae."
        />
        <Blog
          className="homeBlogCard"
          id="HB2"
          image="./Images/blog1.png"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, vitae."
        />
        <Blog
          className="homeBlogCard"
          id="HB3"
          image="./Images/blog1.png"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, vitae."
        />
      </div>
    </div>
  );
};
export default HomeBlogs;
