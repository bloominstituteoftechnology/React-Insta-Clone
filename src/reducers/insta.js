import Data from "../dummy-data";

const initalState = {
  data: [],
  user: {},
  isLoggedIn: false,
  isRegistered: false,
  isLoading: false,
  error: {}
};

const instaReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_LIKE":
      return {
        ...state,
        data: action.data
      };

    case "ADD_COMMENT":
      return {
        ...state,
        data: action.data
      };

    case "NEW_USER":
      return {
        ...state,
        user: action.data
      };

    case "LOGIN":
      return {
        ...state,
        user: action.data
      };

    case "LOGGING_IN":
      return {
        ...state,
        isLoggedIn: true
      };

    case "REGISTERING":
      return {
        ...state,
        isRegistered: true
      };

    case "LOADING":
      return {
        ...state,
        isLoading: action.isLoading
      };

    case "ERROR":
      return {
        ...state,
        error: action.error
      };
    case "CURRENT_USER":
      return {
        ...state,
        user: action.user
      };
    case "GET_DATA":
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};

export default instaReducer;
