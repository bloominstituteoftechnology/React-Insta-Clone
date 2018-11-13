import React from "react";
import { LoginForm } from "../Styles";

const Login = props => {
  return (
    <LoginForm onSubmit={props.login}>
      <h2>InstaClone</h2>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="password" placeholder="password" />
      <input type="submit" value="Log In" />
    </LoginForm>
  );
};

export default Login;
