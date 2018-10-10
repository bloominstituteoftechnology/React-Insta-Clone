import React from 'react';
import './Login.css';

const Login = ({ usernameInput, validateUser }) => {
  return (
    <form className="Login" onSubmit={validateUser}>
      <img src="logo.png" alt="Instagram" />
      <input
        className="Login-Input"
        type="text"
        placeholder="Username"
        onChange={usernameInput}
      />
      <input className="Login-Input" type="password" placeholder="Password" />
      <button className="Login-Button">Log in </button>
    </form>
  );
};

export default Login;
