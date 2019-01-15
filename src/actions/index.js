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
