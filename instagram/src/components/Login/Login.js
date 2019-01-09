import React, { Component } from 'react';
import LoginPage from '../Login/LoginPage'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      loggedIn: false
    }
  }

  render() {
    return (
      <div>
        <LoginPage 
          username={this.state.username}
          password={this.state.password}
          loggedIn={this.state.loggedIn}
        />
      </div>
    )
  }
}

export default Login;