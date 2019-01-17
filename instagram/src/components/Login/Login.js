import React from "react";

const Login = props => {
  return (
    <div className="login-form-wrapper">
      <form
        onSubmit={props.handleSubmit}
        name="loginForm"
        className="login-form"
      >
        username:
        <input
          className="login-input"
          type="text"
          name="inputUsername"
          value={props.inputUsername}
          onChange={props.handleChange}
        />
        <br />
        password:
        <input
          className="login-input"
          type="text"
          name="inputPassword"
          value={props.inputPassword}
          onChange={props.handleChange}
        />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
