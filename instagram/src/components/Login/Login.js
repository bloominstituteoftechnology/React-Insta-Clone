import React from 'react';

import { StyledForm, StyledLogin, StyledLoginButton } from './LoginStyle';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  loginAttempt = event => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <StyledForm>
        <StyledLogin
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />

        <StyledLogin
          type="text"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />

        <StyledLoginButton onClick={this.loginAttempt} className="login-button">
          Log In
        </StyledLoginButton>
      </StyledForm>
    );
  }
}

export default Login;
