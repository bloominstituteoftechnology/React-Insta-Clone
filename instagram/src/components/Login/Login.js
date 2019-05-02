import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = event => {
    event.preventDefault();
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <div>
        <form>
          <h2>Username</h2>
          <input
            name="username"
            type="text"
            onChange={this.handleInputChange}
            value={this.state.username}
          />
          <h2>Password</h2>
          <input name="password" type="password" />
          <button onClick={this.handleLogin}>Sign up</button>
        </form>
      </div>
    );
  }
}

export default Login;
