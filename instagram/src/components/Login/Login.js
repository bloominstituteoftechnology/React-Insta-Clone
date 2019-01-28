import React from "react";
import styled from "styled-components";
import logo from "../../assets/iglogo.png";

const LoginContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Login extends React.Component {
  login = event => {
    localStorage.setItem("Username", event.target.username.value);
    localStorage.setItem("Password", event.target.password.value);
  };

  render() {
    return (
      <LoginContainer>
        <img
          src={logo}
          alt="instagram logo"
          style={{ width: "300px", textAlign: "center" }}
        />
        <form onSubmit={this.login}>
          <input name="username" type="text" />
          <input name="password" type="password" />
          <button>Login</button>
        </form>
      </LoginContainer>
    );
  }
}

export default Login;
