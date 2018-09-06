import React from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  width: 100%;
  height: 1320px;
  /* padding: 400px 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgrey;
`;

const LoginWrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  margin-bottom: 55px;
  border: 1px solid black;
  border-radius: 5px;
  background: white;
`;

const LoginWrapperFormInput = styled.input`
  width: 220px;
  height: 40px;
  margin: 10px 0;
  padding: 0 15px;
  font-size: 14px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  box-sizing: border-box;
`;

const LoginWrapperFormButton = styled.button`
  width: 220px;
  height: 50px;
  margin: 10px 0;
  padding: 0;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: blue;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
`;

const LoginLogo = styled.div`
  max-height: 50px;
  margin-bottom: 10px;
  font-family: 'Grand Hotel', cursive;
  font-size: 32px;
`;

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handleUsername = event => {
    this.setState({ username: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  login = () => {
    localStorage.setItem('username', this.state.username);
    localStorage.setItem('password', this.state.password);
    window.location.reload();
  };

  render() {
    return (
      <LoginWrapper>
        <LoginWrapperForm onSubmit={this.login}>
          <i className="fab fa-instagram" />
          <LoginLogo>Instaclone</LoginLogo>
          <LoginWrapperFormInput
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleUsername}
          />
          <LoginWrapperFormInput
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handlePassword}
          />
          <LoginWrapperFormButton type="submit">Login</LoginWrapperFormButton>
        </LoginWrapperForm>
      </LoginWrapper>
    );
  }
}

export default Login;
