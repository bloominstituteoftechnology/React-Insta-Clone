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
    // const pw = this.state.password;
    localStorage.setItem('user', user);
    // localStorage.setItem('password', pw);
    // localStorage.removeItem(user);
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
            value={this.state.username}
            onChange={this.inputChange}
            className="form-boxes"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.inputChange}
            className="form-boxes"
          />
          <button onClick={this.loginSubmit} className="login-button">Login</button>
        </div>
      </form>
    );
  }
}

export default Login;