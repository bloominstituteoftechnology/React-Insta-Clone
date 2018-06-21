import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  onUserNameChange = e => {
    this.setState({ username: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  onLoginSubmit = e => {
    const username = this.state.username;
    // const password = this.state.password;

    localStorage.setItem('user', username);

    this.setState({ username: '' });
    this.setState({ password: '' });
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={this.onLoginSubmit}>
          <div className="imgcontainer">
            <img src="img_avatar.png" alt="Avatar" className="avatar" />
          </div>

          <div className="container">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              className="loginInput"
              type="text"
              placeholder="Enter Username"
              onChange={this.onUserNameChange}
              value={this.state.username}
              required
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              className="loginInput"
              type="password"
              placeholder="Enter Password"
              onChange={this.onPasswordChange}
              value={this.state.password}
              required
            />

            <button type="submit">Login</button>
          </div>

          <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            {/* <span className="psw">
          Forgot <a href="#">password?</a>
        </span> */}
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
