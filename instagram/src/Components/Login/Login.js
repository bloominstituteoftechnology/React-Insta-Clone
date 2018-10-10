import React, { Component } from "react";
import "./Login.css"
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <form className="login-form">
        <div>
          <h2 className="welcome">Welcome, Please Login</h2>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            className="form-boxes"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            className="form-boxes"
          />
          <button onClick={this.handleLoginSubmit} className="login-button">Login</button>
        </div>
      </form>
    );
  }
}

export default Login;
