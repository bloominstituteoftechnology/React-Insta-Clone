import React from 'react'
import './Login.css'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
      
    }
  }

  handleSubmit = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login = () => {
    let user = localStorage.getItem('user')
    if (!user) localStorage.setItem('user', this.state.username)
  }

  render() {
    return (
      <form className="Login" onSubmit={this.login}>
        <i className="fab fa-instagram navLogo1"></i>
        <h1 className="cookieFont">Instagram</h1>
        <input 
          name="username"
          type="text"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleSubmit}
          />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleSubmit}
          />
        <button className="cookieFont" type="submit">Login</button>
      </form>
    )
  }
}

export default Login