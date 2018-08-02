import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  login = () => {
    localStorage.setItem("username", `${this.state.username}`);
  };

  save = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div className="container2">
        <h1 className="insta">Instagram</h1>
        <div className="logins">
          <form className="login-form">
            <input
              className="input"
              placeholder="username"
              onChange={this.save}
            />
            <input className="password" placeholder="password" />
            <button onClick={this.login} className="login-buttn">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
