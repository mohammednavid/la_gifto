import React from "react";
import "./Cart.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { connect } from "react-redux";
import {
  removeFromCart,
  adjustQty,
  increaseQty,decreaseQty
} from "../../redux/shopping/shoppingActions";

const CartItems = ({ cart, removeFromCart, itemData, adjustQty,increaseQty ,decreaseQty}) => {
  // const [input, setInput] = useState(itemData.qty);
  // const onChangeHandler = (e) => {
  //   setInput(e.target.value);
  //   adjustQty(itemData.id, e.target.value);
  // };

  return (
    <div className="cart__product" key={itemData.id}>
      <img src={itemData.image} alt="" className="cart__productLeft" />
      <div className="cart__productCenter">
        <p className="cart__productTitle">{itemData.title}</p>
        <span className="cart__productSpecial">special Price</span>
        <p className="cart__productPrice">
          <small>₹</small>
          {itemData.afterDiscountPrice}
          <span>{itemData.discount}</span>
        </p>
      </div>
      <div className="cart__productRight">
        <div className="cart__productQuantity">
          <a onClick={()=>decreaseQty(itemData.id, itemData.qty)} className="cart__productDecrease">
            <RemoveIcon className="cart__productDecreaseIcon" />
          </a>
          {/* <input
            type="number"
            value={input}
            className="cart__productVal"
            name="qty"
            min="1"
            onChange={onChangeHandler}
          /> */}
          <p className="cart__productVal">{itemData.qty}</p>
          <a onClick={()=>increaseQty(itemData.id,itemData.qty)} className="cart__productIncrease">
            <AddIcon />
          </a>
          <p className="cart__productQ">Quantity</p>
        </div>
        <button className="cart__productWishlist">Add to Wishlist</button>
        <button
          onClick={() => removeFromCart(itemData.id)}
          className="cart__productRemove"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    // adjustQty: (id, qty) => dispatch(adjustQty(id, qty)),
    increaseQty: (id, qty) => dispatch(increaseQty(id, qty)),
    decreaseQty: (id, qty) => dispatch(decreaseQty(id, qty)),
  };
};

export default connect(null, mapDispatchToProps)(CartItems);
