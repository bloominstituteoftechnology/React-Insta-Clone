import React, { Component } from "react";
import Login from "../Login/Login";

import PostsPage from "../instagram/PostContainer/PostsPage";
const Authenticate = App =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false
      };
    }

    componentDidMount() {
      if (
        window.localStorage.getItem("login") === "charlieBearPaws" &&
        window.localStorage.getItem("password") === "woof2018"
      ) {
        console.log("setting loggin state to true");
        this.setState({ isLoggedIn: true });
      } else {
        console.log("username and password incorrect");
        this.setState({ isLoggedIn: false });
      }
    }
    render() {
      if (this.state.isLoggedIn === true) {
        return <App />;
      } else {
        return <Login />;
      }
    }
  };
export default Authenticate;
