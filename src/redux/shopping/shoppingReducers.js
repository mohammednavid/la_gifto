import * as actionTypes from "./shoppingTypes";
import {ProductData} from '../../Components/Products/ProductData'

const INITIAL_STATE = {
  products: ProductData.splice(0,3),
  // [
  //   {
  //     id: "P1",
  //     image: "../images/product1.svg",
  //     title: "Lorem ipsum dolor sit.",
  //     ratings: "*****",
  //     originalPrice: "₹400",
  //     afterDiscountPrice: "200",
  //     discount: "50% off",
  //   },
  //   {
  //     id: "P2",
  //     image: "../images/product1.svg",
  //     title: "Lorem ipsum dolor sit.",
  //     ratings: "****",
  //     originalPrice: "₹400",
  //     afterDiscountPrice: "499",
  //     discount: "50% off",
  //   },
  //   {
  //     id: "P3",
  //     image: "../images/product1.svg",
  //     title: "Lorem ipsum dolor sit.",
  //     ratings: "****",
  //     originalPrice: "₹400",
  //     afterDiscountPrice: "599",
  //     discount: "50% off",
  //   },
  // ],
  cart: [],
  currentItem: [],
  delivery: "40",
};

const shopReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // get the items data from the array
      const item = state.products.find((prod) => prod.id === action.payload.id);
      //check if the item is in the cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    // case actionTypes.ADJUST_QTY:
    //   return {
    //     ...state,
    //     cart: state.cart.map((item) =>
    //       item.id === action.payload.id
    //         ? { ...item, qty: +action.payload.qty }
    //         : item
    //     ),
    //   };
    case actionTypes.INCREASE_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    case actionTypes.DECREASE_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty === 1 ? (item.qty = 1) : item.qty - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

export default shopReducers;
