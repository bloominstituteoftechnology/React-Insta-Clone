import React, { Component } from 'react';
import LoginImg from "../img/ig-login-img.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    localStorage.setItem('username', this.state.username)
    window.location.reload();
  }

  render() {
    return (
      <div className="login-container">
        <img src={LoginImg} alt="loginImg" className="loginImg" />
        <div className="login-box">
          <p className="title">Fake Instagram</p>
          <form onSubmit={this.handleSubmit} className="loginInput">
            <input
              type="text"
              name="username"
              placeholder="Phone number, username or email"
              value={this.state.username}
              onChange={this.handleInput}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInput}
            />
          </form>
          <button onClick={this.handleSubmit} className="login-button">
            Log in
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
