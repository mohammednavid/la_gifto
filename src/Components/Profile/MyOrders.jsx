import React from "react";
import "./MyOrders.css";

const MyOrders = () => {
  return (
    <div className="myOrders">
      <h3 className="myOrders__title">My Orders</h3>
      <div className="myOrders__card">
        <div className="myOrders__cardHeader">
          <p className="myOrders__cardDate">
            Order placed on:
            <br />
            <span>23rd Dec 2020</span>
          </p>
          <p className="myOrders__cardPrice">
            Total:
            <br />
            <span>₹599</span>
          </p>
          <p className="myOrders__cardOrderNumber">Order Number #1234567</p>
        </div>
        <div className="myOrders__cardContent">
          <img src="./Images/gift1.png" alt="" className="myOrders__cardImg" />
          <p className="myOrders__cardStatus">In Transit</p>
          <p className="myOrders__cardDetails">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="myOrders__cardButtons">
            <button className="myOrders__cardTrack">Track Order</button>
            <button className="myOrders__cardCancel">Cancel Order</button>
          </div>
        </div>
      </div>
      <div className="myOrders__card">
        <div className="myOrders__cardHeader">
          <p className="myOrders__cardDate">
            Order placed on:
            <br />
            <span>23rd Dec 2020</span>
          </p>
          <p className="myOrders__cardPrice">
            Total:
            <br />
            <span>₹599</span>
          </p>
          <p className="myOrders__cardOrderNumber">Order Number #1234567</p>
        </div>
        <div className="myOrders__cardContent">
          <img src="./Images/gift1.png" alt="" className="myOrders__cardImg" />
          <p className="myOrders__cardStatus">In Transit</p>
          <p className="myOrders__cardDetails">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="myOrders__cardButtons">
            <button className="myOrders__cardTrack">Track Order</button>
            <button className="myOrders__cardCancel">Cancel Order</button>
          </div>
        </div>
      </div>
      <div className="myOrders__card">
        <div className="myOrders__cardHeader">
          <p className="myOrders__cardDate">
            Order placed on:
            <br />
            <span>23rd Dec 2020</span>
          </p>
          <p className="myOrders__cardPrice">
            Total:
            <br />
            <span>₹599</span>
          </p>
          <p className="myOrders__cardOrderNumber">Order Number #1234567</p>
        </div>
        <div className="myOrders__cardContent">
          <img src="./Images/gift1.png" alt="" className="myOrders__cardImg" />
          <p className="myOrders__cardStatus">In Transit</p>
          <p className="myOrders__cardDetails">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="myOrders__cardButtons">
            <button className="myOrders__cardTrack">Track Order</button>
            <button className="myOrders__cardCancel">Cancel Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
