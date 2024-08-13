import { combineReducers } from "redux";
import authReducer from "../auth/redux/reducers/auth.reducer";

const rootReducer = combineReducers({ authReducer });

export default rootReducer;
