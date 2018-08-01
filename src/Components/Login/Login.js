import React from 'react';
import './login.css';

const Login = props => {
  return(
    <div className="login-page">
      <form className="login-form" onSubmit={props.handleLogin} >
        <label for="username">Username: </label>
        <input id="username" type="text" placeholder="Enter Username" onChange={props.handleUserChange} />
        <label for="password">Password: </label>
        <input type="password" id="password" placeholder="Enter Password" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Login;
