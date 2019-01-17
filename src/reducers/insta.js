import Data from "../dummy-data";

const initalState = {
  data: Data,
  user: {},
  isLoggedIn: false,
  isRegistered: false,
  isLoading: false
};

const instaReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_LIKE":
      const newStat = state.data.map(post => {
        if (post.username === action.username) {
          post.likes = post.likes + 1;
        }
        return state;
      });

      return {
        ...state,
        newStat
      };

    case "ADD_COMMENT":
      const newComment = state.data.map(post => {
        if (post.username === action.username) {
          post.comments.push({ text: action.text, username: action.user });
        }
        return state;
      });
      return {
        ...state,
        newComment
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

    default:
      return state;
  }
};

export default instaReducer;
