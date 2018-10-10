import React from 'react';
import './Login.css';
import logo from '../img/instagram.png';

const Login = props => {
  return (
    <div className="Login-wrapper">

      <div className="ig-logo">
        <img src={logo} alt="ig logo" />
      </div>

      <form onSubmit={props.loginSubmit} className="Form-group">
        <input
          type="text"
          placeholder="Username"
          value={props.username}
          onChange={props.usernameHandler}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={props.password}
          onChange={props.passwordHandler}
          required
        />

        <button onClick={props.loginSubmit} type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
