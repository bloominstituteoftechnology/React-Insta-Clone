import React from "react";

const LoginPage = props => (
  <form onSubmit={props.login} className="login-form">
    <input type="text" placeholder="username" />
    <input type="text" placeholder="password" />
    <button>Login</button>
  </form>
);
