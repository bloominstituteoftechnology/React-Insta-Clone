import React, { Component } from 'react';
import styled from 'styled-components';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  login = (event) => {

    localStorage.setItem('username', `${this.state.username}`);
    localStorage.setItem('password', `${this.state.password}`);
    window.location.reload();
  }

render() {

  return (
    <LoginPage>
    <form>
    <LoginTitle>Welcome to NOT Instagram!</LoginTitle>
    <p>Username</p><input
      label="Username"
      name="username"
      placeholder="Username"
      onChange={this.handleChange}
      />
      <p>Password</p>
    <input
      label="Password"
      name="password"
      placeholder="Password"
      onChange={this.handleChange}
      />
      <button
        onClick={ this.login }>Login</button>
        </form>

      </LoginPage>
  )
}
}
const LoginTitle = styled.h1`
  font-size: 3rem;
  `;
const LoginPage = styled.div`
  display: flex;
  margin: auto;
  padding: 1rem;
  background: lightblue;
  width: 50%;
  `;

export default Login;
