import React from "react";
import "./Carousal.css";
import carousal1 from "./carousal1.svg";
import carousal2 from "./carousal2.svg";
import carousal3 from "./carousal3.svg";

const Carousal = () => {
  return (
    <div className="s-wrap s-type-1" role="slider">
      <input type="radio" id="s-1" name="slider-control" readOnly />
      <input type="radio" id="s-2" name="slider-control" readOnly checked="checked" />
      <input type="radio" id="s-3" name="slider-control" readOnly />
      <ul className="s-content">
        <li className="s-item s-item-1">
          <h2>Can't wait to surprises?</h2>
          <p>Choose a unique gift for your loved ones.</p>
          <img src={carousal1} alt="" />
        </li>
        <li className="s-item s-item-2">
          <h2>Can't wait to surprises?</h2>
          <p>Choose a unique gift for your loved ones.</p>
          <img src={carousal2} alt="" />
        </li>
        <li className="s-item s-item-3">
          <h2>Can't wait to surprises?</h2>
          <p>Choose a unique gift for your loved ones.</p>
          <img src={carousal3} alt="" />
        </li>
      </ul>
      <div className="s-control">
        <label className="s-c-1" htmlFor="s-1"></label>
        <label className="s-c-2" htmlFor="s-2"></label>
        <label className="s-c-3" htmlFor="s-3"></label>
      </div>
    </div>
  );
};

export default Carousal;
