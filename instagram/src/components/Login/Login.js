import React from "react";
import "./Login.css";
import { Button } from "reactstrap";
import styled from "styled-components";

const LoginPage = styled.div`
  width: 800px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 200px 200px 200px;
  background-color: whitesmoke;
  border-radius: 5px;
  font-family: "Kodchasan", sans-serif;
`;

const Header = styled.h1`
  text-align: center;
  padding-bottom: 50px;
`;

const LoginInput = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const LoginLabel = styled.p`
  font-weight: bold;
  margin-right: 20px;
`;

const LoginText = styled.input`
  width: 60%;
`;
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputUser: "",
      inputPassword: ""
    };
  }

  userChange = event => {
    this.setState({
      inputUser: event.target.value
    });
  };
  passwordChange = event => {
    this.setState({
      inputPassword: event.target.value
    });
  };
  submitHandler = () => {
    if (
      `${this.state.inputUser}` !== "" &&
      `${this.state.inputPassword}` !== ""
    ) {
      localStorage.setItem("username", `${this.state.inputUser}`);
      localStorage.setItem("password", `${this.state.inputPassword}`);
      window.location.reload();
    } else {
      alert("Please enter username and password");
    }
  };
  render() {
    return (
      <LoginPage>
        <Header>InstaClone Login</Header>
        <LoginInput>
          <LoginLabel>Username</LoginLabel>
          <LoginText type="text" defaultValue="" onChange={this.userChange} />
        </LoginInput>
        <LoginInput>
          <LoginLabel>Password</LoginLabel>
          <LoginText
            type="text"
            defaultValue=""
            onChange={this.passwordChange}
          />
        </LoginInput>
        <div className="login-button">
          <Button color="info" outline onClick={this.submitHandler}>
            Submit
          </Button>
        </div>
      </LoginPage>
    );
  }
}

export default Login;
