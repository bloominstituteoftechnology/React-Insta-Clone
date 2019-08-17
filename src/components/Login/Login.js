import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
 
  render() {
    return (
      <div className="loginScreen">
        <h1>Welcome to InstaClone! Please login below</h1>
        <h3>(Hint: use any username/password you want)</h3>
        <form onSubmit={e => this.props.login(e)} className="loginForm">
          <span>username</span>
          <input onChange={e => {this.props.changeHandler(e)}} type="text" />
          <span>password</span>
          <input type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
