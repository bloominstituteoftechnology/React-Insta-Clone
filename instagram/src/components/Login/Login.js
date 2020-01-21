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

  submitHandler = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <div>
        {/* <SimpleStorage parent={this} /> */}
        <LoginPage
          username={this.state.username}
          password={this.state.password}
          updateInput={this.updateInput}
          submitHandler={this.submitHandler}
        />
      </div>
    )
  }
}

export default Login;