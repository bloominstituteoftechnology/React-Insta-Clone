import React, { Component } from 'react';
import styled from 'styled-components';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      loggedIn: false
    };
  }

  componentDidMount() {
    if (localStorage.getItem('loggedIn') === 'true') {
      this.setState({ loggedIn: this.setState.loggedIn });
    }
  }

  handleUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  handlePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  signIn = e => {
    e.preventDefault();
    localStorage.setItem('username', this.state.username);
    localStorage.setItem('password', this.state.password);
    localStorage.setItem('loggedIn', this.state.loggedIn);
    window.location.reload();
  };
  render() {
    return (
      <LoginBox>
        <h1>Login</h1>
        <Inputs
          placeholder={'UserName'}
          onChange={this.handleUsername}
          value={this.state.username}
          name="username"
          type="text"
        />

        <Inputs
          placeholder={'Password'}
          onChange={this.handlePassword}
          value={this.state.password}
          name="password"
          type="text"
        />
        <Button onClick={this.signIn}>Login</Button>
      </LoginBox>
    );
  }
}

const Button = styled.button`
  width: 75%;
  font-size: 30px;
  border-style: none;
  background-color: white;
`;

const Inputs = styled.input`
  width: 70%;
  padding: 10px;
  margin: 10px;
`;

const LoginBox = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 500px;
  height: 300px;
  background-color: black;
  color: white;
`;

export default Login;
