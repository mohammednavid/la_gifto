import React from "react";
import "./Shipping.css";
import Subtotal from "./Subtotal";
import AddressModal from "./AddressModal";
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <div className="shipping">
      <h3 className="shipping__title">Shipping & Billing Details</h3>
      <div className="shipping__container">
        <div className="shipping__address">
          <div className="shipping__content">
            <div className="shipping__header">
              <input type="radio" checked />
              <div className="shipping__headerLeft">
                <p className="shipping__type">HOME</p>
                <p className="shipping__contact">
                  <span>Lorem Ipsum</span>
                  <span>+91 1234567890</span>
                </p>
              </div>
              <button className="shipping__headerRight">Edit</button>
            </div>
            <p className="shipping__details">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Link to="/checkoutpayment">
              <button className="shipping__deliverHere">Deliver Here</button>
            </Link>
          </div>
          <hr />
          <div className="shipping__content">
            <div className="shipping__header">
              <input type="radio" />
              <div className="shipping__headerLeft">
                <p className="shipping__type">HOME</p>
                <p className="shipping__contact">
                  <span>Lorem Ipsum</span>
                  <span>+91 1234567890</span>
                </p>
              </div>
              <button className="shipping__headerRight">Edit</button>
            </div>
            <p className="shipping__details">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Link to="/checkoutpayment">
              <button className="shipping__deliverHere">Deliver Here</button>
            </Link>
          </div>
        </div>
        <div className="shipping__subtotal">
          <Subtotal className="shipping__subtotal" />
        </div>
      </div>
      <div className="shipping__addressModal">
        <AddressModal />
      </div>
    </div>
  );
};

export default Shipping;
