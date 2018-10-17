import React, { Component } from 'react';
import '../App.css';
import PostPage from './PostPage';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  inputChange = event => {
  this.setState({ [event.target.name]: event.target.value });
  };

  loginSubmit = event => {
    const user = this.state.username;
    const pw = this.state.password;
    localStorage.setItem('username', user);
    localStorage.setItem('password', pw);
    window.location.reload();
  };

  render() {
    return (
      <form className="login-form">
        <div>
          <h2 className="welcome">Login</h2>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={this.inputChange}
            value={this.state.username}
            className="form-boxes"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.inputChange}
            value={this.state.password}
            className="form-boxes"
          />
          <button onClick={this.loginSubmit} className="login-button">Login</button>
        </div>
      </form>
    );
  }
}

export default Login;