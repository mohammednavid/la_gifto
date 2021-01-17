import React from "react";
import "./Success.css";
import ReviewModal from "./ReviewModal";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import StarIcon from "@material-ui/icons/Star";

const Success = () => {
  return (
    <div className="success">
      <div className="success__container">
        <div className="success__icon">
          <CheckCircleOutlineIcon className="CheckCircleOutlineIcon" />
        </div>
        <p className="success__msg">
          Your order has been placed
          <br /> successfully
        </p>
        <p className="success__confirmation">
          A confirmation email has been sent to
        </p>
        <p className="success__email">loremipsum@gmail.com</p>
        <div className="success__line"></div>
        <p className="success__title">Order Details</p>
        <div className="success__order">
          <p className="success__details">
            Order Number: <span>#1234568</span>
          </p>
          <p className="success__details">
            <div className="success__paymentMethod">
              <span>Payment Method:</span>
              <img
                src="./Images/sbi.png"
                alt=""
                className="paymentMethod__cardLogo"
              />
              <p className="paymentMethod__cardName">State Bank of India</p>
              <span className="paymentMethod__cardNum">
                1234 **** **** 1234
              </span>
            </div>
          </p>
        </div>
        <div className="success__order">
          <p className="success__details">
            Order Date: <span>29th Dec 2020</span>
          </p>
          <p className="success__details">
            Delivery Date: <span>5th - 7th Jan 2021 </span>
          </p>
        </div>
        <div className="success__order">
          <p className="success__details">
            Shipping Address:{" "}
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </p>
          <p className="success__details">
            Billing Address:{" "}
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </p>
        </div>
        <div className="success__line"></div>
        <div className="success__bottom">
          <div className="success__orderSummary">
            <h3 className="orderSummary__title">Order Summary</h3>
            <div className="orderSummary__fullDetails">
              <img
                src="./Images/carousal.png"
                alt="Product Image"
                className="orderSummary__img"
              />
              <div className="orderSummary__details">
                <p className="orderSummary__detailsTitle">
                  lorem ipsum is simply
                  <br />
                  dummy text of printing
                </p>
                <p className="orderSummary__detailsPrice">₹199</p>
                <p className="orderSummary__detailsQuantity">Qty: 1</p>
              </div>
            </div>
          </div>
          <div className="success__orderRatings">
            <h3 className="orderRatings__title">Rate your Order</h3>
            <p className="orderRatings__descp">
              Let us know what you feel about our service
            </p>
            <ReviewModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
