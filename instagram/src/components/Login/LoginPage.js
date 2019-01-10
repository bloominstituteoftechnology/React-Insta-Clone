import React from 'react'
import iglogo from '../../assets/iglogo.png'
import './Login.css'

const LoginPage = props => {
  return (
    <div className="login-page-container">
      <img src={iglogo} alt="ig logo" />
      <form className="login-page-form">
        <input
          className="input"
          type="text"
          placeholder="Phone number, username, or email"
          value={props.username}
          onChange={e => props.updateInput("username", e.target.value)}>
        </input>
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={props.password}
          name="password"
          onChange={e => props.updateInput("password", e.target.value)}>
        </input>
        <input className="submit"
          type="submit"
          value="Login"
          onSubmit={e => props.validateHandler()}>
        </input>
      </form>
    </div>
  )
}

export default LoginPage;