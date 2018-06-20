import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  changeUsername = event => this.setState({ username: event.target.value});
  changePassword = event => this.setState({ password: event.target.value});

  loginSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    localStorage.setItem('pass', password);
    localStorage.setItem('user', username);
    document.location.reload()
   
  }

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.loginSubmit}>
          <input 
            onChange={this.changeUsername}
        
            value={this.state.username} 
            type="text" />
          <input           
            onChange={this.changePassword}

            value={this.state.password} 
            type="text" />
          <button onClick={this.loginSubmit} >Sign In</button>
        </form>
      </div>
    );
  }
}

export default Login;
