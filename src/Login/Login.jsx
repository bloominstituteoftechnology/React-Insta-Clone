import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
  }
  componentDidMount() {
    console.log("loginProps", this.props);
  }
  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  loginHandler = event => {
    console.log("loginHandlerFired");
    event.preventDefault();
    window.localStorage.setItem("login", this.state.login);
    window.localStorage.setItem("password", this.state.password);
    window.location.reload();
  };

  render() {
    return (
      <div className="Login">
        <h2>GearStagram</h2>
        <h3>Login</h3>
        <form onSubmit={this.loginHandler}>
          <input
            className="Login-username"
            type="text"
            name="login"
            value={this.state.login}
            placeholder="Username"
            onChange={this.inputHandler}
          />

          <input
            className="Login-password"
            name="password"
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.inputHandler}
          />
          <button className="Login-submit" type="submit">
            Log Me In!
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
