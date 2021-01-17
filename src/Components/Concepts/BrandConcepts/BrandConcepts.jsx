import React from "react";
import "./BrandConcepts.css";
import { BirthdayData, MarriageData, BabyShowerData, MensSpecialData } from "./BrandConceptsData";

const BrandConcepts = () => {
  return (
    <>
      <div className="brandConcepts">
        <div className="brandConcepts__ad">
          <img src="./Images/giftman.svg"alt="gift" className="brandConcepts__adImg" />
          <p className="brandConcepts__adText">
            One of a kind <span>Gifts </span>that never fail to
            <span>catch the eyes</span>
          </p>
          <button className="brandConcepts__adButton">
            <a href="#">Explore Now</a>
          </button>
        </div>
        <div className="brandConceptsContent">
          <div className="brandConcepts__header">
            <h2>Birthday Concepts</h2>
            <img className="brandConceptImg" src="./Images/goldenFlower.png" />
            <a href="#">
              <img src="./Images/FilterIcon.svg" alt="Filter" />
              <span>Filters</span>
            </a>
          </div>
          <div className="brandConceptsCard">
            {BirthdayData?.slice(0, 6).map((item) => {
              return (
                <div className="brandConcept" value={item.id} key={item.id}>
                  <img className="brandConcept__img" src={item.image} />
                  <p className="brandConcept__title">{item.title}</p>
                  <a className="brandConcept__allProducts" href="#">
                    {" "}
                    All Products
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="brandConceptsContent">
          <div className="brandConcepts__header">
            <h2>Marriage Concepts</h2>
            <img className="brandConceptImg" src="./Images/goldenFlower.png" />
          </div>
          <div className="brandConceptsCard">
            {MarriageData?.slice(0, 6).map((item) => {
              return (
                <div className="brandConcept" value={item.id} key={item.id}>
                  <img className="brandConcept__img" src={item.image} />
                  <p className="brandConcept__title">{item.title}</p>
                  <a className="brandConcept__allProducts" href="#">
                    All Products
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="brandConceptsContent">
          <div className="brandConcepts__header">
            <h2>Baby Shower Concepts</h2>
            <img className="brandConceptImg" src="./Images/goldenFlower.png" />
          </div>
          <div className="brandConceptsCard">
            {BabyShowerData?.slice(0, 6).map((item) => {
              return (
                <div className="brandConcept" value={item.id} key={item.id}>
                  <img className="brandConcept__img" src={item.image} />
                  <p className="brandConcept__title">{item.title}</p>
                  <a className="brandConcept__allProducts" href="#">
                    All Products
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="brandConceptsContent">
          <div className="brandConcepts__header">
            <h2>Men's Special Concepts</h2>
            <img className="brandConceptImg" src="./Images/goldenFlower.png" />
          </div>
          <div className="brandConceptsCard">
            {MensSpecialData?.slice(0, 6).map((item) => {
              return (
                <div className="brandConcept" value={item.id} key={item.id}>
                  <img className="brandConcept__img" src={item.image} />
                  <p className="brandConcept__title">{item.title}</p>
                  <a className="brandConcept__allProducts" href="#">
                    All Products
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandConcepts;
