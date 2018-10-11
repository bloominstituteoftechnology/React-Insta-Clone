import React, { Component } from "react";
import styled from "styled-components";

const ContainerLogin = styled.div`
  margin: 0 auto;
  height: 200px;
  width: 400px;
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
    button {
      width: 200px;
      height: 50px;
      background: #fff;
      cursor: pointer;
      color: #666666;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
    }
    input {
      width: 195px;
      height: 50px;
      border-radius: 5px;
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
          <button
            className="login-button"
            onClick={this.handleSubmit}
            onSubmit={this.handleSubmit}
          >
            Log In
          </button>
        </form>
      </ContainerLogin>
    );
  }
}

export default Login;
