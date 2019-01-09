import React from 'react';
import './Login.css';

const Login = props => {
  return(
    <div className="login">
      <form className="login__form">
        <p>Username: <input type="text" name="username" onChange={props.handleUser}/></p>
        <p>Password: <input type="text" name="password" onChange={props.handlePass}/></p>
        <button onClick={props.login}>Log In</button>
        <button onClick={props.signup}>Sign Up</button>
      </form>
    </div>
  );
}

export default Login;
