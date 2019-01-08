import React, { Component } from 'react';
import './Login.css';

const LoginPage = (props) => {
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={props.onLogin}>
        <input type="text" placeholder="username" onChange={props.handleNewLogin}/>
        <input type="text" placeholder="password"/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage;