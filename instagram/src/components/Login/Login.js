import React, { Component } from "react";
// import "./Login.css";
import styled from "styled-components";

const ContainerL = styled.div`
  height: 100vh;
  justify-content: center;
  background: radial-gradient(ellipse, #bc2a8d, yellow, orange);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 900px;
`;

const Loginst = styled.div`
  width: 100px;
  flex-direction: column;
  margin-right: 20px;
`;

const LoginButt = styled.button`
  height: 100%;
`;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  login = () => {
    localStorage.setItem("username", `${this.state.username}`);
  };

  save = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <ContainerL>
        <h1 className="insta">Instagram</h1>
        <Loginst>
          <form className="login-form">
            <input
              className="input"
              placeholder="username"
              onChange={this.save}
            />
            <input className="password" placeholder="password" />
            <LoginButt onClick={this.login} className="login-buttn">
              Login
            </LoginButt>
          </form>
        </Loginst>
      </ContainerL>
    );
  }
}

export default Login;
