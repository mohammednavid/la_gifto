import React from "react";
import "./CheckoutPayment.css";
import Subtotal from "./Subtotal";
import { Link } from "react-router-dom";

const CheckoutPayment = () => {
  return (
    <div className="checkoutPayment">
      <div className="checkoutPayment__left">
        <h3 className="checkoutPayment__header">Order Summary</h3>
        <div className="checkoutPayment__orderContainer">
          <div className="checkoutPayment__order">
            <div className="order__header">
              <p className="order__headerLeft">Shipping Details</p>
              <p className="order__headerRight">Edit</p>
            </div>
            <p className="order__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="checkoutPayment__order">
            <div className="order__header">
              <p className="order__headerLeft">Billing Details</p>
              <p className="order__headerRight">Edit</p>
            </div>
            <p className="order__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <h3 className="checkoutPayment__header">Select Payment Method</h3>
        <div className="checkoutPayment__savedCards">
          <h3 className="savedCards__header">Saved Cards</h3>
          <div className="savedCards__container">
            <div className="savedCards__cardSaved">
              <input
                type="radio"
                name=""
                id=""
                className="savedCards__cardCheck"
                checked
              />
              <img
                src="./Images/sbi.png"
                alt=""
                className="savedCards__cardLogo"
              />
              <p className="savedCards__cardName">State Bank of India</p>
              <span className="savedCards__cardNum">1234 **** **** 1234</span>
              <input
                type="text"
                className="savedCards__cardCVV"
                placeholder="CVV"
              />
              <Link to="/success">
              <button className="savedCards__cardButton">Pay Now</button>
              </Link>
            </div>
            <div className="savedCards__cardSaved">
              <input
                type="radio"
                name=""
                id=""
                className="savedCards__cardCheck"
                checked
              />
              <img
                src="./Images/sbi.png"
                alt=""
                className="savedCards__cardLogo"
              />
              <p className="savedCards__cardName">State Bank of India</p>
              <span className="savedCards__cardNum">1234 **** **** 1234</span>
              <input
                type="text"
                className="savedCards__cardCVV"
                placeholder="CVV"
              />
              <Link to="/success">
                <button className="savedCards__cardButton">Pay Now</button>
              </Link>
            </div>
          </div>
        </div>
        <h3 className="checkoutPayment__header">Select Payment Method</h3>
        <div className="checkoutPayment__otherPayment">
          <h3 className="otherPayment__header">Other Payment Options</h3>
          <div className="checkoutPayment__optionsContainer">
            <div className="otherPayment__option">
              <input
                type="radio"
                name=""
                id=""
                className="otherPayment__optionCheck"
                checked
              />
              <p className="otherPayment__optionName">
                UPI(Phonepe/Googlepay/Paytm)
              </p>
            </div>
            <div className="otherPayment__option">
              <input
                type="radio"
                name=""
                id=""
                className="otherPayment__optionCheck"
                checked
              />
              <p className="otherPayment__optionName">Wallets</p>
            </div>
            <div className="otherPayment__option">
              <input
                type="radio"
                name=""
                id=""
                className="otherPayment__optionCheck"
                checked
              />
              <p className="otherPayment__optionName">Credit/Debit/ATM Card</p>
            </div>
            <div className="otherPayment__option">
              <input
                type="radio"
                name=""
                id=""
                className="otherPayment__optionCheck"
                checked
              />
              <p className="otherPayment__optionName">Net Banking</p>
            </div>
            <div className="otherPayment__option">
              <input
                type="radio"
                name=""
                id=""
                className="otherPayment__optionCheck"
                checked
              />
              <p className="otherPayment__optionName">Cash on Delivery</p>
            </div>
          </div>
        </div>
      </div>
      <div className="checkoutPayment__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default CheckoutPayment;
