import React from "react";
import "./ConceptInfo.css";
import { ProductData } from "../Products/ProductData";

const ConceptInfo = () => {
  return (
    <div className="conceptInfo">
      <div className="conceptInfo__slider">
        <div className="conceptInfo__category1">
          <p className="conceptInfo__img1">Birthday Concepts</p>
        </div>
        <div className="conceptInfo__category2">
          <p className="conceptInfo__img2">Marriage Concepts</p>
        </div>
        <div className="conceptInfo__category3">
          <p className="conceptInfo__img3">Baby Shower Concepts</p>
        </div>
        <div className="conceptInfo__category4">
          <p className="conceptInfo__img4">Men's Special Concepts</p>
        </div>
      </div>
      <div className="conceptInfo__header">
        <h2>Products Related to Birthday</h2>
        <img className="conceptInfo__img" src="./Images/goldenFlower.png" />
        <a href="#">
          <img src="./Images/FilterIcon.svg" alt="Filter" />
          <span>Filters</span>
        </a>
      </div>
      <div className="conceptInfo__container">
        <div className="conceptInfo__left">
          {ProductData.map((item) => {
            return (
              <div className="conceptInfo__card" key={item.id} value={item.id}>
                <img className="conceptInfo__img" src={item.image} />
                <p className="conceptInfo__title">{item.title}</p>
                <p className="conceptInfo__ratings">{item.ratings}</p>
                <p className="conceptInfo__originalPrice">
                  {item.originalPrice}
                </p>
                <p className="conceptInfo__afterDiscount">
                  <small>₹</small>
                  {item.afterDiscountPrice}
                </p>
                <p className="conceptInfo__discount">{item.discount}</p>
                <button className="conceptInfo__addButton">
                  <a> Add</a>
                </button>
              </div>
            );
          })}
        </div>
        <div className="conceptInfo__right">
          <h3 className="conceptInfo__rightHeader">Products from other Categories</h3>
          <div className="conceptInfo__content1">
            <img src="./Images/concept1.png" alt="" className="content1__img" />
            <p className="content1__details">Bag inside a baloon gift hamper</p>
          </div>
          <div className="conceptInfo__content2">
            <img src="./Images/concept2.png" alt="" className="content2__img" />
            <p className="content2__details">Bag inside a baloon gift hamper</p>
          </div>
          <div className="conceptInfo__content1">
            <img src="./Images/concept1.png" alt="" className="content1__img" />
            <p className="content1__details">Bag inside a baloon gift hamper</p>
          </div>
          <div className="conceptInfo__content2">
            <img src="./Images/concept2.png" alt="" className="content2__img" />
            <p className="content2__details">Bag inside a baloon gift hamper</p>
          </div>
          <div className="conceptInfo__content1">
            <img src="./Images/concept1.png" alt="" className="content1__img" />
            <p className="content1__details">Bag inside a baloon gift hamper</p>
          </div>
          <div className="conceptInfo__content2">
            <img src="./Images/concept2.png" alt="" className="content2__img" />
            <p className="content2__details">Bag inside a baloon gift hamper</p>
          </div>
          <div className="conceptInfo__content1">
            <img src="./Images/concept1.png" alt="" className="content1__img" />
            <p className="content1__details">Bag inside a baloon gift hamper</p>
          </div>
          <div className="conceptInfo__content2">
            <img src="./Images/concept2.png" alt="" className="content2__img" />
            <p className="content2__details">Bag inside a baloon gift hamper</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptInfo;
