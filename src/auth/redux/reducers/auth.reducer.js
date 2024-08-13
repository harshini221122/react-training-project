import { LOGIN_SUCCESS, REGISTER_SUCCESS, USER_LOADED } from "../types/Index";

const initialState = {
  token: "",
  user: null,
  isAuthenticated: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return { ...state, isAuthenticated: true, token: payload.token };
    case USER_LOADED:
      return { ...state, user: payload };
    default:
      return state;
  }
};
