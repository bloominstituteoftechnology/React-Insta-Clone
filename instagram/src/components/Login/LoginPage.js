import React from 'react'
import iglogo from '../../assets/iglogo.png'

const LoginPage = props => {
  return (
    <div className="login-page-container">
      <img src={iglogo} alt="ig logo" />
      <form>
        <input type="text" placeholder="Phone number, username, or email"></input>
        <input type="text" placeholder="Password"></input>
        <input type="submit" onSubmit=""></input>
      </form>
    </div>
  )
}

export default LoginPage;