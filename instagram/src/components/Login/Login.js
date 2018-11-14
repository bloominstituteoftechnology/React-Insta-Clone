import React from 'react';
import './Login.css'

function Login(props) {
  return (
        <form
          onSubmit={props.handleLogin}
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
          <input
            type="submit"
            value="LOGIN"
            className="submit"
          />
        </form>
  )
}

export default Login