import React from "react";
import "./MyRatings.css";
import StarIcon from "@material-ui/icons/Star";

const MyRatings = () => {
  return (
    <div className="ratings">
      <h3 className="ratings__header">My Ratings & Reviews</h3>
      <div className="ratings__details">
        <div className="ratings__top">
          <img src="./Images/gift1.png" alt="" className="ratings__heroImg" />
          <div className="ratings__nameNPrice">
            <p className="ratings__name">Lorem Ipsum</p>
            <p className="ratings__descp">Lorem Ipsum is simply dummy text</p>
            <p className="ratings__price">₹499</p>
          </div>
          <p className="ratings__date">Date:24th December 2020</p>
        </div>
        <div className="ratings__review">
          <p className="ratings__oneWord">Nice Product</p>
          <p className="ratings__star">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </p>
        </div>
        <p className="ratings__fullDetails">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="ratings__bottom">
          <div className="ratings__gallery">
            <img src="./Images/gift1.png" alt="" />
            <img src="./Images/gift1.png" alt="" />
            <img src="./Images/gift1.png" alt="" />
            <img src="./Images/gift1.png" alt="" />
          </div>
          <div className="ratings__buttons">
            <button className="ratings__edit">Edit Review</button>
            <button className="ratings__delete">Delete Review</button>
          </div>
        </div>
      </div>
      <hr/>
      <div className="ratings__details">
        <div className="ratings__top">
          <img src="./Images/gift1.png" alt="" className="ratings__heroImg" />
          <div className="ratings__nameNPrice">
            <p className="ratings__name">Lorem Ipsum</p>
            <p className="ratings__descp">Lorem Ipsum is simply dummy text</p>
            <p className="ratings__price">₹499</p>
          </div>
          <p className="ratings__date">Date:24th December 2020</p>
        </div>
        <div className="ratings__review">
          <p className="ratings__oneWord">Nice Product</p>
          <p className="ratings__star">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </p>
        </div>
        <p className="ratings__fullDetails">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="ratings__bottom">
          <div className="ratings__gallery">
            <img src="./Images/gift1.png" alt="" />
            <img src="./Images/gift1.png" alt="" />
            <img src="./Images/gift1.png" alt="" />
            <img src="./Images/gift1.png" alt="" />
          </div>
          <div className="ratings__buttons">
            <button className="ratings__edit">Edit Review</button>
            <button className="ratings__delete">Delete Review</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRatings;
