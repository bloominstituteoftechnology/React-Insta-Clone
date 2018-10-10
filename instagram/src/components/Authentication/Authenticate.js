import React, { Component } from "react";
import Login from "../Login/Login";
import PostsPage from "../PostContainer/PostsPage";
import App from "../../App";

const Authenticate = App =>
  class extends Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
        usernameInputText: ""
      };
      this.changeHandler = this.changeHandler.bind(this);
      this.login = this.login.bind(this);
    }

    componentDidMount() {}

    changeHandler(ev) {
      ev.preventDefault();
      this.setState({
        loggedIn: false,
        usernameInputText: ev.target.value
      });
      console.log(this.state.usernameInputText);
    }

    login(ev) {
      ev.preventDefault();
      console.log("Loggin in");
        localStorage.setItem("username", this.state.usernameInputText)
        this.setState({
            loggedIn: true,
            usernameInputText: ""
        })
    }

    render() {
      if (this.state.loggedIn) {
        return <App />;
      }
      return <Login login={this.login} changeHandler={this.changeHandler} />;
    }
  };

export default Authenticate;
