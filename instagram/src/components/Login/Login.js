import React from 'react';
import styled from 'styled-components';
import logo from './img/instagram-new-logo.png';

const LoginDiv = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 350px;
  height: 356px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LoginButton = styled.button`
  width: 268px;
  height: 30px;
  background-color: #3897f0;
  border: none;
  border-radius: 4px;
`
const LoginInput = styled.input`
  width: 268px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  margin-bottom: 15px;
`

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  usernameHandler = e => {
   this.setState({ username: e.target.value });
  };

  pwHandler = e => {
   this.setState({ password: e.target.value });
  };

  login = () => {
    localStorage.setItem('username', this.state.username);
    this.setState({username: '', password: ''});
    window.location.reload();
  };

  render() {
    return (
      <LoginDiv>
        <img src={logo} width='75%'/>
        <LoginInput placeholder='Phone number, username, or email' onChange={this.usernameHandler} value={this.state.username}/>
        <LoginInput type='password' placeholder='Password' onChange={this.pwHandler} value={this.state.password}/>
        <LoginButton onClick={this.login}>Login</LoginButton>
      </LoginDiv>
    );
  };
};

export default Login;
