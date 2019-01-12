import React from "react";
import iglogo from "../../assets/iglogo.png";
import styled from "styled-components";

const LoginImg = styled.img`
  margin: 0 auto;
  padding: 10% 0;
  width: 70%;
`;
const LoginForm = styled.form`
  margin: 0 auto;
  width: 250px;
  display: flex;
  flex-direction: column;
`;
const LoginInput = styled.input`
  margin: 5% 0;
  font-size: .7rem;
  height: 40px;
  width: 100%;
  background-color: lightyellow;
  border-radius: 5px;
`
const Button = styled.button`
  margin: 4% auto;
  height: 30px;
  width: 100%;
  background-color: dodgerblue;
  color: white;
  border-radius: 5px;
`

const LoginPage = props => {
  return (
    <div>
      <LoginImg src={iglogo} alt="ig logo" />
      <LoginForm>
        <LoginInput
          type="text"
          placeholder="Phone number, username, or email"
          value={props.username}
          name="username"
          onChange={e => props.updateInput("username", e.target.value)}
        />
        <LoginInput
          type="password"
          placeholder="Password"
          value={props.password}
          name="password"
          onChange={e => props.updateInput("password", e.target.value)}
        />
        <Button onClick={e => props.submitHandler() }>Log In</Button>
      </LoginForm>
    </div>
  );
};

export default LoginPage;
