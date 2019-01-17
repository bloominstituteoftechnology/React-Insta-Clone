import axios from "axios";

export const addLike = id => dispatch => {
  dispatch({ type: "LOADING", isLoading: true });

  return axios
    .post(`https://comptagroup.com/api/instagram/posts/${id}/likes`)
    .then(res => {
      if (res.data.err) {
        dispatch({ type: "ERROR", error: res.data.err });
      } else {
        dispatch({ type: "ADD_LIKE", data: res.data });
      }
    });
};

export const addComment = (id, user, text) => dispatch => {
  dispatch({ type: "LOADING", isLoading: true });
  return axios
    .post(`https://comptagroup.com/api/instagram/${id}/comments`, {
      username: user,
      comment: text
    })
    .then(res => {
      console.log(res.data);
      dispatch({ type: "ADD_COMMENT", data: res.data });
    });
};

export const newUser = (email, fullName, username, password) => dispatch => {
  dispatch({ type: "LOADING", isLoading: true });
  return axios
    .post("https://comptagroup.com/api/instagram/register", {
      email,
      fullName,
      username,
      password
    })
    .then(res => {
      if (res.data.err) {
        dispatch({ type: "ERROR", error: res.data.err });
      } else {
        dispatch({ type: "REGISTERING" });
        dispatch({ type: "LOADING", isLoading: false });
      }
    });
};

export const login = (email, password) => dispatch => {
  dispatch({ type: "LOADING", isLoading: true });
  return axios
    .post("https://comptagroup.com/api/instagram/login", {
      email,
      password
    })
    .then(res => {
      const { token, user } = res.data;
      if (res.data.err) {
        dispatch({ type: "ERROR", data: res.data });
        dispatch({ type: "LOADING", isLoading: false });
      } else {
        localStorage.setItem("token", token);
        localStorage.setItem("username", user.username);
        localStorage.setItem("fullName", user.fullName);
        dispatch({ type: "LOGGING_IN" });
        dispatch({ type: "LOADING", isLoading: false });
      }
    });
  // .catch(err => {
  //   dispatch({ type: "ERROR", data: err });
  // });
};

export const getData = () => dispatch => {
  dispatch({ type: "LOADING", isLoading: true });
  return axios.get("https://comptagroup.com/api/instagram/posts").then(res => {
    console.log(res.data);
    dispatch({ type: "GET_DATA", data: res.data });
    dispatch({ type: "LOADING", isLoading: false });
  });
};
