import { combineReducers } from "redux";
import instagramReducer from "./instagramReducer";

export default combineReducers({
  instagram: instagramReducer
});
