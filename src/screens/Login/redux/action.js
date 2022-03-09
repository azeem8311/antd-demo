import * as actionTypes from "../../../redux/actionTypes";

export const LoginAction = (payload) => {
  console.log("action type ", actionTypes.LOGIN);
  return {
    type: actionTypes.LOGIN,
    payload: payload,
  };
};
