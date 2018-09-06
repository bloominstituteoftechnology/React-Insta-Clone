import React, { Component } from 'react';

class Login extends Component {
  // Assigns an anonmyous function to the variable login.
  login = event => {
    localStorage.setItem('InstagramUsername', event.target.username.value);
    // Sets username into the web browser's storage.
    // ? event.target.username.value
  };

  render() {
    return (
      <form onSubmit={this.login}>
        <h1>Username</h1>
        <input name="username" type="text" />
        <h1>Password</h1>
        <input type="password" />
        <button>Login</button>
      </form>
    );
  }
}
export default Login;
