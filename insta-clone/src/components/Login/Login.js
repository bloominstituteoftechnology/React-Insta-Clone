import React from 'react';

const Login = props => {
  return (
    <div className="loginPage">
    <input
      label="Username"
      name="username"
      placeholder="Username"
      />
    <input
      label="Password"
      name="password"
      placeholder="Password"
      />
      <button
        onClick={() => props.login }>Login</button>

      </div>
  )
}

export default Login;
