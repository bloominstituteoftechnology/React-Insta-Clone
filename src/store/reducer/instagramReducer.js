import data from "../../dummyData";
import { TOGGLE_LIKES } from "../action/types";
import uuid from "uuid";
const initialState = {
  data
};

export default function instagramReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LIKES:
      // const newData = state.data.map(item => {
      //   if (item.id === action.payload) {
      //     item.isLiked = !item.isLiked;
      //   }
      //   return item;
      // });
      return {
        ...state,
        data: action.newData
      };
    default:
      return state;
  }
}
