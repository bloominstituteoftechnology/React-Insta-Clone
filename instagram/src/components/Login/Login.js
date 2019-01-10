import React, { Component } from 'react';
import SimpleStorage from "react-simple-storage";
import LoginPage from '../Login/LoginPage'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  updateInput = (key, value) => {
    this.setState({ [key]: value })
  }

  render() {
    return (
      <div>
        <SimpleStorage parent={this} />
        <LoginPage
          username={this.state.username}
          password={this.state.password}
          updateInput={this.updateInput}
        />
      </div>
    )
  }
}

export default Login;