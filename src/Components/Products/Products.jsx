import React from "react";
import left from "./left.png";
import right from "./right.png";
import down from "./down.jpg";
import "./Products.css";
import { connect } from "react-redux";
import {
  addToCart,
  loadCurrentItem,
} from "../../redux/shopping/shoppingActions";
import { Link } from "react-router-dom";

const Products = ({ products, addToCart, loadCurrentItem }) => {
  return (
    <div className="productsPage">
      <div className="products">
        <div className="productsHeader">
          <h2>Deals for you</h2>
          <p>View All</p>
        </div>
        <img className="leftImg" src={left} />
        <img className="rightImg" src={right} />
        <div className="productsCard">
          {products?.map((productsData) => {
            // return (
            //   <Product key={prod.id} productsData={prod}/>
            // );
            return (
              <div className="product" key={productsData.id}>
                <Link to={`/productinfo/${productsData.id}`}>
                  <a onClick={() => loadCurrentItem(productsData)}>
                    <img className="product__img" src={productsData.image} />
                    <p className="product__title">{productsData.title}</p>
                    <p className="product__ratings">{productsData.ratings}</p>
                    <p className="product__originalPrice">
                      {productsData.originalPrice}
                    </p>
                    <p className="product__afterDiscount">
                      <small>₹</small>
                      {productsData.afterDiscountPrice}
                    </p>
                    <p className="product__discount">{productsData.discount}</p>
                  </a>
                </Link>
                <button
                  className="product__addButton"
                  onClick={() => addToCart(productsData.id)}
                >
                  <a> Add</a>
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="productGift">
        <img src={down} />
        <h2>
          These gifts have <span>Secret deals, Sign In</span> to know more
        </h2>
        <button>
          <a href="#">Sign in</a>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Products);
