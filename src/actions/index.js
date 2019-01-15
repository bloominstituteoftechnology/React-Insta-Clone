export const addLike = username => {
  return {
    type: "ADD_LIKE",
    username
  };
};

export const addComment = (username, user, text) => {
  return {
    type: "ADD_COMMENT",
    username,
    user,
    text
  };
};

export const getData = () => dispatch => {
  fetch(
    "https://cors-anywhere.herokuapp.com/" +
      "https://jsonplaceholder.typicode.com/todos"
  )
    .then(res => res.json())
    .then(data => dispatch({ type: "GET_DATA", data }));
};
