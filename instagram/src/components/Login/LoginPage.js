import React from 'react'
import iglogo from '../../assets/iglogo.png'
import './Login.css'

const LoginPage = props => {
  return (
    <div className="login-page-container">
      <img className="LoginPage-img"
           src={iglogo} alt="ig logo" />
      <form className="login-page-form">
        <input
          className="LoginPage-input"
          type="text"
          placeholder="Phone number, username, or email"
          value={props.username}
          name="username"
          onChange={e => props.updateInput("username", e.target.value)}>
        </input>
        <input
          className="LoginPage-input"
          type="password"
          placeholder="Password"
          value={props.password}
          name="password"
          onChange={e => props.updateInput("password", e.target.value)}>
        </input>
      </form>
    </div>
  )
}

export default LoginPage;