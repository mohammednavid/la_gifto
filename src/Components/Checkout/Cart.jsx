import React, { useState, useEffect } from "react";
import "./Cart.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CartItems from "./CartItems";
import Subtotal from "./Subtotal";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Cart = ({ cart, removeFromCart }) => {
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    cart.forEach((item) => {
      items += item.qty;
    });
    setTotalItems(items);
  });
  return (
    <div className="cart__container">
      <div className="cart__slider">
        <div className="cart__category1">
          <p className="cart__img1">Birthday Concepts</p>
        </div>
        <div className="cart__category2">
          <p className="cart__img2">Marriage Concepts</p>
        </div>
        <div className="cart__category3">
          <p className="cart__img3">Baby Shower Concepts</p>
        </div>
        <div className="cart__category4">
          <p className="cart__img4">Men's Special Concepts</p>
        </div>
      </div>

      <div className="cart__header">
        <p className="cart__headerLeft">
          My Cart<span>({totalItems} Items)</span>
        </p>
        <div className="cart__headerRight">
          <p>Delivery To </p>
          <div className="cart__rightContent">
            <div className="cart__pinCode">
              <input type="text" placeholder="Enter Pincode" />
              <p className="cart__pinCodeButton">Check</p>
            </div>
            <p className="cart__rightParagraph">
              Please enter PIN code to check delivery time & Pay on Delivery
              Availability
            </p>
          </div>
        </div>
      </div>
      <div className="cart__products">
        {cart?.map((item) => {
          return <CartItems key={item.id} itemData={item} />;
        })}
      </div>
      <div className="cart__subtotal">
        <Subtotal />
        <Link to="/checkout" className="cart__checkout">
          <button>Place Order</button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(Cart);
