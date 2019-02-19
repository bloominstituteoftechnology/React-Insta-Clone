import data from "../../dummyData";
import { TOGGLE_LIKES, ADD_COMMENT } from "../action/types";
const initialState = {
  data
};

export default function instagramReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LIKES:
      return {
        ...state,
        data: action.newData
      };
    case ADD_COMMENT:
      return {
        ...state,
        data: action.newItem
      };
    default:
      return state;
  }
}
