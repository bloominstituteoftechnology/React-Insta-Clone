import React from 'react';
import './Login.css';
import styled, { injectGlobal } from 'styled-components';
import Billabong from '../Billabong.woff';

injectGlobal`
  @font-face {
    font-family: Billabong;
    src: url('${Billabong}');
  }
`;

const LogIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://images.pexels.com/photos/273204/pexels-photo-273204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  height: 100vh;
  background-attachment: fixed;
  background-size: cover;
`;

const Header1 = styled.h1`
  font-size: 72px;
  font-family: 'Billabong';
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Inputs = styled.input`
  height: 40px;
  width: 50%;
  margin: 20px;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  width: 30%;
  height: 40px;
  margin: 20px;
  border-radius: 5px;
  border: 1px solid black;

  &:hover {
    background-color: blue;
    color: white;
    border: 1px solid blue;
    cursor: pointer;
  }
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler = event => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  }

  render() {
    return (
      <LogIn>
        <Header1> Welcome to Rinstagram!</Header1>
        <LoginForm>
          <Inputs name='username' type='text' placeholder='Username' value={this.state.username} onChange={this.inputHandler} onKeyPress={e => {if (e.charCode === 13) {
            this.submitHandler()
          }}}/>
          <Inputs name='password' type='password' placeholder='Password' value={this.state.password} onChange={this.inputHandler} onKeyPress={e => {if (e.charCode === 13) {
            this.submitHandler()
          }}}/>
          <LoginButton onClick={this.submitHandler} className='submit-btn'>Submit</LoginButton>
        </LoginForm>
      </LogIn>
    );
  }
}

export default Login;
