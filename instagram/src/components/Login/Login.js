import React from "react";
import headerLogo from "../../igtext.png";
import styled from "styled-components";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  usernameText = e => {
    this.setState({
      username: e.target.value
    });
  };

  setStorage = e => {
    e.preventDefault();
    localStorage.setItem("username", this.state.username);
    window.location.reload();
  };

  render() {
    return (
      <LoginContainer>
        <Form onSubmit={this.setStorage}>
          <InstragramTextImage src={headerLogo} />
          <InfoParagrah>
            Sign up to see photos and videos from your friends.
          </InfoParagrah>
          <UserNameInput onChange={this.usernameText} placeholder="Username" />
          <PasswordInput placeholder="Password" type="password" />
          <LoginButton onClick={this.setStorage}>Login</LoginButton>
        </Form>
      </LoginContainer>
    );
  }
}

const UserNameInput = styled.input`
  width: 200px;
  height: 30px;
  margin: 20px 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  font-size: 1.6rem;
  padding: 0 20px;
  background: #fafafa;
  max-width: 100%;
  &::placeholder {
    text-align: center;
    color: #999;
  }
`;

const LoginButton = styled.button`
  width: 200px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  font-size: 1.6rem;
  background: #5696e9;
  color: #fff;
  max-width: 100%;
  cursor: pointer;
  transition: 300ms ease-in-out;
  &:hover {
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.22);
  }
`;

const PasswordInput = styled.input`
  width: 200px;
  height: 30px;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  font-size: 1.6rem;
  padding: 0 20px;
  background: #fafafa;
  max-width: 100%;
  &::placeholder {
    text-align: center;
    color: #999;
  }
`;

const InstragramTextImage = styled.img`
  width: 50%;
`;

const Form = styled.form`
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 3px;
  max-width: 100%;
`;

const InfoParagrah = styled.p`
  font-size: 1.2rem;
  text-align: center;
  width: 50%;
  color: #999;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
`;
