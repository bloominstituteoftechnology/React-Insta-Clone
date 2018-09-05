import React from 'react';
import './Login.css';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handleUsername = event => {
    this.setState({ username: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  login = () => {
    localStorage.setItem('username', this.state.username);
    localStorage.setItem('password', this.state.password);
    window.location.reload();
  };

  render() {
    return (
      <div>
        <div className="login-wrapper">
          <form onSubmit={this.login}>
            <i className="fab fa-instagram" />
            <div className="login-logo">Instaclone</div>
            <input
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleUsername}
            />
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
