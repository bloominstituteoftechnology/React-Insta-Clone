import React, { Component } from "react";

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
      <div className="login-cont">
        <form className="login-form">
          <input
            className="input"
            placeholder="username"
            onChange={this.save}
          />
          <input className="password" placeholder="password" />
          <button onClick={this.login} className="login-buttn" />
        </form>
      </div>
    );
  }
}

export default Login;
