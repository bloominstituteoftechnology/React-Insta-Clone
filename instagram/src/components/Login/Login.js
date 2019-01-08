import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import App from '../../App'
import LoginPage from '../Login/LoginPage'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount () {
    return (this.state.loggedIn) ? <App /> : <LoginPage />
  }

  render() {
    return (

    )
  }
}

export default Login;