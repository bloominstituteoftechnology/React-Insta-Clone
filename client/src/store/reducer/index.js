import { combineReducers } from "redux";
import instagramReducer from "./instagramReducer";
import auth from "./authReducer";
import errors from "./errorReducers";

export default combineReducers({
  instagram: instagramReducer,
  auth,
  errors
});
