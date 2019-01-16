import React from "react";

const Login = props => {
  return (
    <form onSubmit={props.handleSubmit} name="loginForm">
      username:
      <input
        type="text"
        name="inputUsername"
        value={props.inputUsername}
        onChange={props.handleChange}
      />
      <br />
      password:
      <input
        type="text"
        name="inputPassword"
        value={props.inputPassword}
        onChange={props.handleChange}
      />
      <button type="submit">teken aan</button>
    </form>
  );
};

export default Login;
