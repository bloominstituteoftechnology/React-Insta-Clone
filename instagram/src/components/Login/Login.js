import React from 'react';
import './Login.css';

class Login extends React.Component {
  login() {
    this.props.loggedIn = true;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Password" name="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
