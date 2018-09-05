import React from "react";
import Login from "../Login/Login";
import PostsPage from "../PostsContainer/PostsPage";

const data = [{ name: "billy", login: "bob" }, { name: "fort", login: "nite" }];

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
      const name = Object.keys(localStorage);
      const login = Object.values(localStorage);
      const userList = this.state.Users.map(item => item.name);
      const logs = this.state.Users.map(item => item.login);
      const newState = { ...this.state };

      if (userList.includes(name[0]) && logs.includes(login[1])) {
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
