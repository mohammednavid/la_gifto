import { createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './rootReducer'


// const initialState = {};
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeWithDevTools())

export default store;
