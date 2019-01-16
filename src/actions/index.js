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

export const newUser = (email, fullName, username, password) => dispatch => {
  dispatch({
    type: "NEW_USER",
    data: {
      email,
      fullName,
      username,
      password
    }
  });
  fetch("https://comptagroup.com/api/instagram/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      fullName,
      username,
      password
    })
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => err);
};

export const login = (email, password) => dispatch => {
  // dispatch({
  //   type: "LOGIN",
  //   data: {
  //     email,
  //     password
  //   }
  // });

  fetch("https://comptagroup.com/api/instagram/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then(res => res.json())
    .then(data => {
      // console.log(data.user);
      return dispatch({
        type: "LOGIN",
        data: data
      });
    })
    .catch(err => err);
};
