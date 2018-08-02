import React from "react";
import "./Login.css";
import logoText from "../SearchBar/instagramLogoText.png";
import styled from "styled-components";

const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const LoginImgDiv = styled.div`
  width: 100%;
`;

const LoginDivImg = styled.img`
  width: auto;
  height: 50px;
  padding: 5rem 5rem 0 5rem;
`;

const LoginForm = styled.form``;

const LoginInput = styled.input`
  padding: 0.3rem 3rem 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 1rem;
  margin: 0 1rem 1rem 1rem;
  border: 1px solid black;
  color: black;
`;

const LoginButton = styled.button`
  padding: 0.3rem 3rem;
  border-radius: 4px;
  border: none;
  font-size: 1rem;
  background: black;
  color: white;
  &:hover {
    cursor: pointer;
    background: white;
    border: 1px solid black;
    color: black;
  }
`;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginHandler: props.loginHandler,
      loginChangeHandler: props.loginChangeHandler
    };
  }

  render() {
    return (
      <LoginDiv className="loginDiv">
        <LoginImgDiv className="loginImgDiv">
          <LoginDivImg src={logoText} alt="instagram text" />
        </LoginImgDiv>
        <LoginForm className="loginForm">
          <LoginInput
            className="usernameInput"
            placeholder="Username"
            onChange={this.state.loginChangeHandler}
          />
          <LoginInput className="passwordInput" placeholder="Password" />
          <LoginButton
            className="loginButton"
            onClick={this.state.loginHandler}
          >
            Submit
          </LoginButton>
        </LoginForm>
      </LoginDiv>
    );
  }
}
export default Login;
