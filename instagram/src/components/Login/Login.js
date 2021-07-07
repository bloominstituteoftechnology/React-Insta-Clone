import React, { Component } from 'react';


class Login extends Component {
    constructor(props) {
      super(props);
    }

    login = event => {
      localStorage.setItem("Username", event.target.username.value);
      localStorage.setItem("Password", event.target.password.value);
    };
  
    
    render() {
      return (
        <form onSubmit={this.login}>
          <h1>Username</h1>
          <input name="username" type="text" />
          <h1>Password</h1>
          <input name="password" type="text" />
          <button onClick={this.login}>Login</button>
        </form>
      );
    }
  }
  
  export default Login;
  