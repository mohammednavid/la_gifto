import React from "react";
import "./BlogInfo.css";
import ShareIcon from "@material-ui/icons/Share";
import {TrendingBlogs} from './BlogsData'
import { Link } from "react-router-dom";

const BlogInfo = () => {
  return (
    <div className="blogInfo">
      <div className="blogInfo__ad">
        <img src="./Images/bird.png" alt="gift" className="blogInfo__adImg" />
        <p className="blogInfo__adText">
          Lorem Ipsum is simply dummy text of the printing
        </p>
        <button className="blogInfo__adButton">
          <a href="#">Explore Now</a>
        </button>
      </div>
      <div className="blogInfo__content">
        <h3 className="blogInfo__title">
          Lorem Ipsum is simply dummy text of printing
        </h3>
        <p className="blogInfo__date">29th Dec 2020</p>
        <p className="blogInfo__paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.{" "}
        </p>
        <a href="" className="blogInfo__share">
          <ShareIcon />
          Share this
        </a>
      </div>
      <div className="blogPage__header">
        <h2>Related Blogs</h2>
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
    </div>
  );
};

export default BlogInfo;
