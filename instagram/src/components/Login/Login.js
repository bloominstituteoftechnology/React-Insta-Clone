import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar";
import "./Login.css";
import styled from "styled-components";

const LoginContainer = styled.div`
  padding: 0 0 60px;
`;

const LoginForm = styled.form`
  margin: 0 auto;
  max-width: 320px;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = ev => {
    this.setState({
      [ev.target.id]: ev.target.value
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const username = this.state.username;
    localStorage.setItem("username", username);
    window.location.reload();
  };

  render() {
    return (
      <LoginContainer>
        <SearchBar />
        <LoginForm onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="user"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </LoginForm>
      </LoginContainer>
    );
  }
}

export default Login;
