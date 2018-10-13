import React from 'react';
import './Login.css';

const Login = props => {
  return (
    <div className="Login-wrapper">
      <form onSubmit={props.loginSubmit} className="Form-group">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          value={props.username}
          onChange={props.usernameHandler}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={props.password}
          onChange={props.passwordHandler}
          required
        />

        <button onClick={props.loginSubmit} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;