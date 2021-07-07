import React from 'react';
// import './login.css';
import {
  StyledTextInput,
  AuthenticationForm,
  AuthenticationWrapper,
  SubmitButton
} from './../Styled/styled';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    localStorage.setItem('user', username);
    localStorage.setItem('password', password);
    window.location.reload();
  };

  render() {
    return (
      <AuthenticationWrapper>
        <h1>Please Log In</h1>
        <AuthenticationForm>
          <StyledTextInput
            className="username"
            placeholder="Username"
            value={this.state.username}
            name="username"
            onChange={this.handleInput}
          />
          <StyledTextInput
            className="password"
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleInput}
          />
          <SubmitButton onClick={this.handleSubmit}>Log In</SubmitButton>
        </AuthenticationForm>
      </AuthenticationWrapper>
    );
  }
}

export default LoginPage;
