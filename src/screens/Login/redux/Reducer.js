import * as actionTypes from "../../../redux/actionTypes";

const INITIAL_STATE = {
  token: "",
  isLogin: false,
};

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      console.log("payload ", action.payload);
      return {
        ...state,
        token: action.payload.token,
        isLogin: action.payload.isLogin,
      };
    default:
      return state;
  }
};

export default LoginReducer;
