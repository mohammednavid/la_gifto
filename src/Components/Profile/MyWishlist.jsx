import React from "react";
import "./MyWishlist.css";
import { WishlistData } from "./WishlistData.js";

const MyWishlist = () => {
  return (
    <div className="wishlist">
      <h3 className="wishlist__header">My Wishlist</h3>
      <div className="wishlist__cards">
        {WishlistData?.slice(0,6).map((item) => {
          return (
            <div className="wishlist__card" key={item.id} value={item.id}>
              <img className="wishlist__img" src={item.image} />
              <p className="wishlist__title">{item.title}</p>
              <p className="wishlist__ratings">{item.ratings}</p>
              <p className="wishlist__originalPrice">{item.originalPrice}</p>
              <p className="wishlist__afterDiscount">
                {item.afterDiscountPrice}
              </p>
              <p className="wishlist__discount">{item.discount}</p>
              <button className="wishlist__addButton">
                <a href="#"> Add To Cart</a>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWishlist;
