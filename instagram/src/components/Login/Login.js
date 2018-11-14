import React from 'react';
import './Login.css'

function Login(props) {
  return (
        <form 
          className="login"
          name="login"
          >
          <h1>InstaClone Login</h1>
          <input 
            required
            type="text"
            name="username"
            htmlFor="login"
            value={props.value}
            onChange={props.handleChange}
            placeholder="Enter Username"
          />
          <input 
            required
            type="text"
            name="password"
            htmlFor="login"
            onChange={props.handleChange}
            placeholder="Enter Password"
          />
          <button
            htmlFor="login"
            onSubmit={props.handleLogin}
          >LOGIN</button>
        </form>
  )
}

export default Login