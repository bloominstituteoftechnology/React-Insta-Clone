import styled from "styled-components";
import React from "react";

const StyledButton = styled.button`
  padding: 6px 10px;
  margin: 5px;
  background-color: yellow;
  color: white;
  border-radius: 3px;
`;

const Login = props => {
  return (
    <form onSubmit={props.login}>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="password" placeholder="password" />
      <input type="submit" value="Log In" />
      <StyledButton />
    </form>
  );
};

export default Login;
