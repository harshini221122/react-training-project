import { registerService, loginService } from "../../services/auth.service";
import setAuthToken from "../../../utils/setAuthToken";
import { getUserDetails } from "../../services/auth.service";

export const registerAction = (formData, navigate) => async (dispatch) => {
  try {
    const res = await registerService(formData);
    dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
    //user load action
    dispatch(loadUserAction());
    navigate("/dashboard");
  } catch (err) {}
};

export const loginAction = (formData, navigate) => async (dispatch) => {
  try {
    const res = await loginService(formData);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    dispatch(loadUserAction());
    navigate("/dashboard");
  } catch (err) {}
};

export const loadUserAction = () => async (dispatch) => {
  try {
    setAuthToken(localStorage.getItem("token"));
    const res = await getUserDetails();
    dispatch({ type: "USER_LOADED", payload: res.data });
  } catch (err) {}
};
