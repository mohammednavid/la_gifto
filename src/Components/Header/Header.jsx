import React, { useState, useEffect } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import SignIn from "../Auth/SignIn";
import { connect } from "react-redux";

// import { useStateValue } from "../StateProvider";

function Header({ cart }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className="header">
      {/* Sidebar */}
      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
      </label>
      <div id="sidebarMenu">
        <ul className="sidebarMenuInner">
          <li>
            <a href="#" target="">
              <SignIn />
            </a>
          </li>
          <li>
            <Link to="/blogs" className="blogs__link">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <a>Review</a>
          </li>
          <li>
            <a>Q&A</a>
          </li>
          {/* </li> */}
        </ul>
      </div>
      {/* Sidebar */}
      <Link to="/" className="header__link">
        <img src={logo} alt="la gifto Logo" className="header__logo" />
      </Link>
      <div className="header__search">
        <input type="text" placeholder="Search for Product, Brand and More" />
        <a href="#">
          <SearchIcon className="SearchIcon" />
        </a>
      </div>
      <ul className="header__center">
        <li>
          <Link to="/blogs" className="blogs__link">
            <a href="#" className="blog">
              Blog
            </a>
          </Link>
        </li>
        <li>
          <a href="#" className="review">
            Review
          </a>
        </li>
        <li>
          <a href="#" className="qna">
            Q&A
          </a>
        </li>
      </ul>
      <ul className="header__right">
        <li>
          <SignIn />
        </li>
      </ul>
      <div className="header__cart">
        <p className="cartValue">{cartCount}</p>
        <Link to="/cart" className="cartLink">
          <ShoppingCart className="cartIcon" />
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Header);
