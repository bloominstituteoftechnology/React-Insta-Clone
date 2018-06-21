import React from 'react';
import styled from 'styled-components';

const LoginFormElement = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 400px;
  margin: 50px auto;
`;

const LoginInputElement = styled.input`
  margin: 0 0 10px 0;
  padding: 10px;
`;

const LoginButtonElement = styled.button`
  padding: 10px;
`;

const Login = props => {
  return(
    <LoginFormElement onSubmit={(e) => props.onSubmitLogin(e)}>
      <LoginInputElement type="text" placeholder="Username" value={props.username} onChange={props.onUsernameChange} />
      <LoginInputElement type="password" placeholder="Password" />
      <LoginButtonElement type="submit">Sign in</LoginButtonElement>
    </LoginFormElement>
  );
}

export default Login;