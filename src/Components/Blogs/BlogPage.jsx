import React from "react";
import "./BlogPage.css";
import { TrendingBlogs, MostReviewedBlogs, PopularBlogs } from "./BlogsData";
import ShareIcon from "@material-ui/icons/Share";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <div className="blogPage">
      <div className="blogPage__header">
        <h2>Trending Blogs</h2>
        <img className="blogPage__Img" src="./Images/goldenFlower.png" />
      </div>
      <div className="blogPage__trendingBlogs">
        {TrendingBlogs.slice(0, 3).map((item) => {
          return (
            <div className="trendingBlogs" key={item.id} value={item.id}>
              <img className="trendingBlogs__img" src={item.image} />
              <p className="trendingBlogs__description">{item.description}</p>
              <Link to="/bloginfo" className="knowMore__link">
                <a className="trendingBlogs__knowMore" href="#">
                  Know More
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="blogPage__header">
        <h2>Most Reviewed Blogs</h2>
        <img className="blogPage__Img" src="./Images/goldenFlower.png" />
      </div>
      <div className="blogPage__mostReviewedBlogs">
        {MostReviewedBlogs.slice(0, 2).map((item) => {
          return (
            <div className="mostReviewedBlogs" key={item.id} value={item.id}>
              <img src={item.image} alt="" />
              <div className="mostReviewedBlogs__details">
                <div className="mostReviewedBlogs__dateAndShare">
                  <p className="mostReviewedBlogs__date">{item.date}</p>
                  <span>
                    <ShareIcon />
                  </span>
                </div>
                <p className="mostReviewedBlogs__title">{item.title}</p>
                <p className="mostReviewedBlogs__description">
                  {item.description}
                </p>
                <p className="mostReviewedBlogs__knowMore">Know More</p>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <div className="blogPage__mostReviewedBlogs">
        {MostReviewedBlogs.slice(2, 4).map((item) => {
          return (
            <div className="mostReviewedBlogs" key={item.id} value={item.id}>
              <img src={item.image} alt="" />
              <div className="mostReviewedBlogs__details">
                <div className="mostReviewedBlogs__dateAndShare">
                  <p className="mostReviewedBlogs__date">{item.date}</p>
                  <span>
                    <ShareIcon />
                  </span>
                </div>
                <p className="mostReviewedBlogs__title">{item.title}</p>
                <p className="mostReviewedBlogs__description">
                  {item.description}
                </p>
                <p className="mostReviewedBlogs__knowMore">Know More</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="blogPage__header popularBlogs__header">
        <h2>Popular Blogs</h2>
        <img className="blogPage__Img" src="./Images/goldenFlower.png" />
      </div>
      <div className="blogPage__popularBlogs">
        {PopularBlogs.slice(0, 3).map((item) => {
          return (
            <div className="popularBlogs" key={item.id} value={item.id}>
              <img className="popularBlogs__img" src={item.image} />
              <p className="popularBlogs__description">{item.description}</p>
              <a className="popularBlogs__knowMore" href="#">
                Know More
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
