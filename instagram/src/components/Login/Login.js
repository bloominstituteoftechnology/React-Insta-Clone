import React from 'react';
import styled from 'styled-components';
import { Input } from '../../Styles/Input';

const LoginForm = styled.form`
  margin: 20rem auto 0;
  max-width: 350px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 4.5rem;
  border: 1px solid #dbdbdb;
`;

const LogoImage = styled.img`
  width: 178px;
  height: 65px;
  margin: 0 auto 2rem;
`;

const LoginButton = styled.button`
  background: #5097e9;
  color: #fff;
  padding: 5px;
  border-radius: 2.5px;
  border: none;
  font-size: inherit;
  cursor: pointer;
  margin-top: 1rem;
`;

const Login = ({ loginInput, validateUser }) => {
  return (
    <LoginForm onSubmit={validateUser}>
      <LogoImage src="logo.png" alt="Instagram" />
      <Input
        login
        type="text"
        placeholder="Username"
        onChange={loginInput}
        name="username"
      />
      <Input
        login
        type="password"
        placeholder="Password"
        onChange={loginInput}
        name="password"
      />
      <LoginButton>Log in </LoginButton>
    </LoginForm>
  );
};

export default Login;
