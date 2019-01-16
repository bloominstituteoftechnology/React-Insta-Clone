import { GET_ERRORS } from "../action/types";

const initialState = {};

export default function errorReducers(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
