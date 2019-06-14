import React from "react";
import { Link, Redirect } from "react-router-dom";
import { handleLogin, isLoggedIn } from "../withAuth/services";
import styled from "styled-components";

const LoginForm = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  align-items: center;
  width: 350px;
  height: 500px;
`;

const TextInput = styled.input`
  margin: 25px;
  width: 75%;
  height: 25px;
  border: none;
  border-bottom: 2px solid black;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 200px;
  height: 35px;
  border-radius: 5px;
  border: none;
`;

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
      <LoginForm>
        <h1>Login Here</h1>
        <TextInput
          type="text"
          name="email"
          placeholder="email/username"
          value={this.state.email}
          onChange={this.textFormHandler}
        />

        <TextInput
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.textFormHandler}
        />
        <Button onClick={this.Login}>Login</Button>
      </LoginForm>
    );
  }
}
