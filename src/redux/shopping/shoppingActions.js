import * as actionTypes from "./shoppingTypes";

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};
export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};
export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
// export const adjustQty = (itemID, value) => {
//   return {
//     type: actionTypes.ADJUST_QTY,
//     payload: {
//       id: itemID,
//       qty: value,
//     },
//   };
// };
export const increaseQty = (itemID, value) => {
  return {
    type: actionTypes.INCREASE_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};
export const decreaseQty = (itemID, value) => {
  return {
    type: actionTypes.DECREASE_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};
