import { combineReducers } from "redux";
import shopReducers from "./shopping/shoppingReducers";
import authReducers from "./auth/authReducers";

const rootReducer = combineReducers({
  shop: shopReducers,
  auth: authReducers,
});

export default rootReducer;
