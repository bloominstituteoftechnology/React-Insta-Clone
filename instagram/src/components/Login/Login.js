import React, { Component } from "react";
import styled from "styled-components";
import { LoginForm, InstaTitle } from "../Styles/Styles";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  changeUsername = event => this.setState({ username: event.target.value });
  changePassword = event => this.setState({ password: event.target.value });

  loginSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    localStorage.setItem("pass", password);
    localStorage.setItem("user", username);
    document.location.reload();
  };

  render() {
    return (
      <LoginForm>
        <InstaTitle>Instagram </InstaTitle>{" "}
        <form onSubmit={this.loginSubmit}>
          <input
            onChange={this.changeUsername}
            placeholder="Username"
            value={this.state.username}
            type="text"
          />
          <br />
          <br />
          <input
            onChange={this.changePassword}
            placeholder="Password"
            value={this.state.password}
            type="text"
          />
          <br />
          <br />
          <button onClick={this.loginSubmit}>Sign In</button>
        </form>
      </LoginForm>
    );
  }
}

export default Login;
