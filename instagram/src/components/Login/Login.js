import React, { Component } from "react";
import { UserName, LogInOutButton } from '../Styles/Reusables';
import styled, { css } from 'styled-components';

const ContainerLogin = styled.div`
  margin: 0 auto;
  height: 300px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    input {
      width: 195px;
      height: 25px;
      border-radius: 3px;
      padding-left: 5px;
      margin: 5px 0;
    }
  }
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });
  handleSubmit = event => {
    event.preventDefault();
    localStorage.setItem("username", this.state.username);
    window.location.reload();
  };
  render() {
    return (
      <ContainerLogin>
        <h2>Log in</h2>
        <form>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <LogInOutButton
            onClick={this.handleSubmit}
            onSubmit={this.handleSubmit}
          >
            Log In
          </LogInOutButton>
        </form>
      </ContainerLogin>
    );
  }
}

export default Login;
