import axios from "axios";

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
  // dispatch({
  //   type: "NEW_USER",
  //   data: {
  //     email,
  //     fullName,
  //     username,
  //     password
  //   }
  // });

  // fetch("https://comptagroup.com/api/instagram/register", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({
  //     email,
  //     fullName,
  //     username,
  //     password
  //   })
  // })
  //   .then(res => res.json())
  //   .then(data => {
  //     return dispatch({
  //       type: "NEW_USER",
  //       data: {
  //         email: data.email,
  //         fullName: data.fullName,
  //         username: data.username,
  //         password: data.password
  //       }
  //     });
  //   });
  dispatch({ type: "LOADING", isLoading: true });
  return axios
    .post("https://comptagroup.com/api/instagram/register", {
      email,
      fullName,
      username,
      password
    })
    .then(res => {
      dispatch({ type: "REGISTERING" });
      dispatch({ type: "LOADING", isLoading: false });
    });
};

export const login = (email, password) => dispatch => {
  // fetch("https://comptagroup.com/api/instagram/login", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({
  //     email,
  //     password
  //   })
  // })
  //   .then(res => res.json())
  //   .then(data => {
  //     // console.log(data.user);
  //     return dispatch({
  //       type: "LOGIN",
  //       data: data
  //     });
  //   });
  dispatch({ type: "LOADING", isLoading: true });
  return axios
    .post("https://comptagroup.com/api/instagram/login", {
      email,
      password
    })
    .then(res => {
      const { token, user } = res.data;
      console.log(res.data);
      localStorage.setItem("token", token);
      localStorage.setItem("username", user.username);
      localStorage.setItem("fullName", user.fullName);
      dispatch({ type: "LOGGING_IN" });
      dispatch({ type: "LOADING", isLoading: false });
    });
};
