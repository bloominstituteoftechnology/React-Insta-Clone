import React from 'react';
import './login.css';

const Login = props => {
  return(
    <div className="login-page">
      <form className="login-form" onSubmit={props.handleLogin} >
        <label htmlFor="username">Username: </label>
        <input name="username" type="text" placeholder="Enter Username" onChange={props.handleUserChange} />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" placeholder="Enter Password" onChange={props.handleUserChange} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Login;
