import * as actionTypes from "./authTypes";

const INITIAL_STATE = {
    user:null
};

const authReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
            case actionTypes.SET_USER:
                return{...state,user:action.payload}
        default:
            return state;
    }
}

export default authReducers;
