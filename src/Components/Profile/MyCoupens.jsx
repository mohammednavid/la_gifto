import React from "react";
import "./MyCoupens.css";

const MyCoupens = () => {
  return (
    <div className="coupens">
      <h3 className="coupens__header">My Coupens</h3>
      <h4 className="coupens__header2">Available Coupens</h4>
      <div className="coupens__content">
        <div className="coupens__leftCircle"></div>
        <div className="coupens__leftGradiant"></div>
        <div className="coupens__rightCircle"></div>
        <div className="coupens__rightGradiant"></div>
        <p className="coupens__left">
          Available the festive offer
          <br />
          <span>Extra 10% off on all orders</span>
        </p>
        <p className="coupens__right">
          Valid Till
          <br />
          <span>30th Dec 2020</span>
        </p>
      </div>
      <div className="coupens__content">
        <div className="coupens__leftCircle"></div>
        <div className="coupens__leftGradiant"></div>
        <div className="coupens__rightCircle"></div>
        <div className="coupens__rightGradiant"></div>
        <p className="coupens__left">
          First time users offer
          <br />
          <span>Extra 10% off on all orders</span>
        </p>
        <p className="coupens__right">
          Valid Till
          <br />
          <span>30th Dec 2020</span>
        </p>
      </div>
      <h4 className="coupens__header2">Expired Coupens</h4>
      <div className="coupens__content coupens__expired">
        <div className="coupens__leftCircle"></div>
        <div className="coupens__leftGradiant"></div>
        <div className="coupens__rightCircle"></div>
        <div className="coupens__rightGradiant"></div>
        <p className="coupens__left">
          Available the festive offer
          <br />
          <span>Extra 10% off on all orders</span>
        </p>
        <p className="coupens__right">
          Valid Till
          <br />
          <span>30th Dec 2020</span>
        </p>
      </div>
    </div>
  );
};

export default MyCoupens;
