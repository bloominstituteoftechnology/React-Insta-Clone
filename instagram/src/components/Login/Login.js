import React from 'react';
import './Login.css';

import styled from 'styled-components'

const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <div className='login-container'>
        <div className='login'>
          <h1>React-A-Gram</h1>
          <div className="text-logo"></div>
          <h2>LOGIN!</h2>
          <form action="submit" className='login-form' onSubmit={this.handleLoginSubmit}>
            <p className='login-input login-input__username'>
              username:
              <input
                className="login-input"
                type="text"
                placeholder="User Name"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
            </p>
            <p className='login-input login-input__password'>
              password:
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </p>
            <button type='submit' className='login-submit-button'>LOGIN</button>
          </form>
        </div>
      </div>
    );
  }
};


export default LoginPage;