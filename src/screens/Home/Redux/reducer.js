import * as actionTypes from "../../../redux/actionTypes";

let INITIAL_STATE = {
  products: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
