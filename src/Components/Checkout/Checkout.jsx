import React, { useState, useEffect } from "react";
import "./Checkout.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Subtotal from "./Subtotal";
import Shipping from "./Shipping";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  removeFromCart,
  adjustQty,
  increaseQty,
  decreaseQty,
} from "../../redux/shopping/shoppingActions";

const Checkout = ({
  cart,
  removeFromCart,
  itemData,
  adjustQty,
  increaseQty,
  decreaseQty,
}) => {
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    cart.forEach((item) => {
      items += item.qty;
    });
    setTotalItems(items);
  });
  return (
    <div className="checkout">
      <div className="checkout__header">
        <p className="checkout__headerLeft">
          In Cart<span>({totalItems} Items)</span>
        </p>
        <div className="checkout__headerRight">
          <p>Delivery To </p>
          <div className="checkout__rightContent">
            <div className="checkout__pinCode">
              <input type="text" placeholder="Enter Pincode" />
              <p className="checkout__pinCodeButton">Check</p>
            </div>
            <p className="checkout__rightParagraph">
              Please enter PIN code to check delivery time & Pay on Delivery
              Availability
            </p>
          </div>
        </div>
      </div>
      <div className="checkout__container">
        <div className="checkout__products">
          {cart?.map((item, i) => {
            return (
              <div className="checkout__product" key={i} value={item.id}>
                <img
                  src={item.image}
                  alt=""
                  className="checkout__productLeft"
                />
                <div className="checkout__productCenter">
                  <p className="checkout__productTitle">{item.title}</p>
                  <span className="checkout__productSpecial">
                    special Price
                  </span>
                  <p className="checkout__productPrice">
                    <small>₹</small>
                    {item.afterDiscountPrice}
                    <span>{item.discount}</span>
                  </p>
                  <div className="checkout__productQuantity">
                    <a
                      onClick={() => decreaseQty(item.id, item.qty)}
                      className="checkout__productDecrease"
                    >
                      <RemoveIcon className="checkout__productDecreaseIcon" />
                    </a>
                    <p className="checkout__productVal">{item.qty}</p>
                    <a
                      onClick={() => increaseQty(item.id, item.qty)}
                      className="checkout__productIncrease"
                    >
                      <AddIcon />
                    </a>
                    <p className="checkout__productQ">Quantity</p>
                  </div>
                </div>
                <div className="checkout__productRight">
                  <button className="checkout__productWishlist">
                    Add to Wishlist
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="checkout__productRemove"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="checkout__subtotal">
          <div className="checkout__subtotalContent">
            <Subtotal />
          </div>
          <Link to="/shipping" className="checkout__shipping">
            <button>Place Order</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    // adjustQty: (id, qty) => dispatch(adjustQty(id, qty)),
    increaseQty: (id, qty) => dispatch(increaseQty(id, qty)),
    decreaseQty: (id, qty) => dispatch(decreaseQty(id, qty)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
