import * as actionTypes from "./authTypes";

export const setUser = (user) => {
  return { type: actionTypes.SET_USER, payload: user };
};
