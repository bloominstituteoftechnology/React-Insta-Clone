import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false
    };
  }

  handleInputChange = event => {
    this.setState({ [event.targetname]: event.target.value });
  };

  loginAttempt = event => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <form className="loginInput">
        <input
          className="login-user"
          type="text"
          name="loginUser"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          className="login-password"
          type="text"
          name="loginPassword"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button onClick={this.loginAttempt} className="login-button">
          Log In
        </button>
      </form>
    );
  }
}

export default Login;
