import React from "react";
import Login from "../Login/Login";
import PostsPage from "../PostsContainer/PostsPage";

const data = [
  { username: "billy", login: "bob" },
  { username: "fort", login: "nite" }
];

const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        login: false,
        Users: data
      };
    }
    render() {
      const username = Object.keys(localStorage);
      const login = Object.values(localStorage);
      const userList = this.state.Users.map(item => item.username);
      const logs = this.state.Users.map(item => item.login);
      const newState = { ...this.state };

      if (userList.includes(username[0]) && logs.includes(login[1])) {
        newState.login = true;
      }
      if (newState.login === true) {
        return <PostsPage />;
      } else {
        localStorage.clear();
        return <Login />;
      }
    }
  };

export default Authenticate;
