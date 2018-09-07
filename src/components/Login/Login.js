import React from "react";
import styled, { css } from "styled-components";
import { Button } from "reactstrap";

const LoginBox = styled.div`
  background-color: grey;
  width: 300px;
  height: 220px;
  display: flex;
  justify-content: center;
  margin: 200px auto;
  border-radius: 10px;
`;

const LoginText = styled.div`
  margin: 20px auto;
  border-radius: 50px;
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  loginHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  login = event => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <LoginBox>
        <form>
          <LoginText>
            <input
              placeholder="Username"
              value={this.state.username}
              onChange={this.loginHandler}
              name="username"
            />
          </LoginText>
          <LoginText>
            <input
              placeholder="Password"
              value={this.state.password}
              onChange={this.loginHandler}
              name="password"
              type="password"
            />
          </LoginText>
          <Button color="success" onClick={this.login}>
            Login
          </Button>
        </form>
      </LoginBox>
    );
  }
}

export default Login;
