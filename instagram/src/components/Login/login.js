import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className={"formcontainer"}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={this.props.user}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.props.pass}
          required
        />
        <input
          className={"button"}
          type="submit"
          value="Login"
          onClick={this.props.loggedin}
        />
      </form>
    );
  }
}

export default Login;
