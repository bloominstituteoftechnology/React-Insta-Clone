import React, { Component } from 'react';

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <input type="text" placeholder="username"/>
        <input type="text" placeholder="password"/>
      </form>
    </div>
  )
}

export default Login;