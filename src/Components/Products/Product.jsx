// import React from "react";
// import "./Products.css";
// import { connect } from "react-redux";
// import { addToCart } from "../../redux/shopping/shoppingActions";

// const Product = ({ productsData, addToCart }) => {
//   return (
//     <div className="product" key={productsData.id}>
//       <img className="product__img" src={productsData.image} />
//       <p className="product__title">{productsData.title}</p>
//       <p className="product__ratings">{productsData.ratings}</p>
//       <p className="product__originalPrice">{productsData.originalPrice}</p>
//       <p className="product__afterDiscount">
//         <small>₹</small>
//         {productsData.afterDiscountPrice}
//       </p>
//       <p className="product__discount">{productsData.discount}</p>
//       <button
//         className="product__addButton"
//         onClick={() => addToCart(productsData.id)}
//       >
//         <a> Add</a>
//       </button>
//     </div>
//   );
// };

// const mapDispatchtoProps = (dispatch) => {
//   return {
//     addToCart: (id) => dispatch(addToCart(id)),
//   };
// };

// export default connect(null, mapDispatchtoProps)(Product);
