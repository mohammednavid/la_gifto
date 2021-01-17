import React, { useState, useEffect } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { connect } from "react-redux";

function Subtotal({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalPrice(price);
    setTotalItems(items);
  });
  return (
    <div className="subtotal">
      <div className="subtotal__container">
        <p className="subtotal__header">Have a coupen code?</p>
        <div className="subtotal__coupenCode">
          <input
            type="text"
            className="subtotal__coupenInput"
            placeholder="Please enter your coupen code here"
          />
          <a className="subtotal__coupenButton">Apply</a>
        </div>
        <h3>Price Details</h3>
        <hr />
        <CurrencyFormat
          renderText={(value) => (
            <>
              <div className="subtotal__content">
                <p className="subtotal__left">Price ({totalItems} items)</p>
                <p className="subtotal__right">{value}</p>
              </div>
              <div className="subtotal__content">
                <p className="subtotal__left">Discount</p>
                <p className="subtotal__right">-₹100</p>
              </div>
              <div className="subtotal__content">
                <p className="subtotal__left">Delivery Charges</p>
                <p className="subtotal__right">
                  {/* {totalPrice > '500' ? ( */}
                    <span className="free">FREE</span>
                  {/* ) : (
                    delivery
                  )} */}
                </p>
              </div>
              <div className="subtotal__content">
                <p className="subtotal__left">SUBTOTAL</p>
                <p className="subtotal__right">
                  <strong>
                    {value} 
                    {/* >= '500'
                      // ? totalPrice
                      // : totalPrice + delivery} */}
                  </strong>
                </p>
              </div>
            </>
          )}
          decimalScale={2}
          displayType={"text"}
          value={totalPrice}
          thousandSeparator={true}
          prefix={"₹"}
        />
        <p className="subtotal__footer">You saved ₹100 on this product</p>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Subtotal);
