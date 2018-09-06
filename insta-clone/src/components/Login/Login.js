import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  login = (event) => {
    event.preventDefault;
    localStorage.setItem('username', `${this.state.username}`);
    localStorage.setItem('password', `${this.state.password}`);
  }

render() {
  return (
    <div className="loginPage">
    <form>
    <p>Username</p><input
      label="Username"
      name="username"
      placeholder="Username"
      onChange={this.handleChange}
      />
      <p>Password</p>
    <input
      label="Password"
      name="password"
      placeholder="Password"
      onChange={this.handleChange}
      />
      <button
        onClick={ this.login }>Login</button>
        </form>

      </div>
  )
}
}

export default Login;
