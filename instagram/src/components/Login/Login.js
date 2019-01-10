import React, { Component } from 'react';
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
        <LoginPage
          username={this.state.username}
          password={this.state.password}
          updateInput={this.updateInput}
          validateHandler={this.props.validateHandler}
        />
      </div>
    )
  }
}

export default Login;