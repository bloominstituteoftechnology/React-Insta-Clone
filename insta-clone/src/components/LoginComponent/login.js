import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { handleLogin, isLoggedIn } from "../withAuth/services";
import "./login.css";
export default class Login extends React.Component {
  state = {
    loggedIn: false,
    email: "",
    password: ""
  };
  Login = () => {
    const { email, password } = this.state;
    if (email.length > 0 && password.length > 0) {
      handleLogin({ email, password });
      this.LoginHandler();
    }
  };
  LoginHandler = () => {
    if (isLoggedIn()) {
      this.setState({
        loggedIn: true
      });
    }
  };
  componentDidMount = () => {
    this.LoginHandler();
  };
  textFormHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { loggedIn } = this.state;
    if (loggedIn) {
      return <Redirect to="/posts" />;
    }
    return (
      <div className="Login">
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.textFormHandler}
        />

        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.textFormHandler}
        />
        <button onClick={this.Login}>Login</button>
      </div>
    );
  }
}
