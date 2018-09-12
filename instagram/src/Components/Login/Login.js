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

  loginAttempt = event => {
    event.preventDefault();
    this.setState({
      username: '',
      password: ''
    });
  };

  render() {
    return (
      <form className="loginInput">
        <input
          className="login-user"
          type="text"
          name="loginUser"
          placeholder="Username"
        />
        <input
          className="login-password"
          type="text"
          name="loginPassword"
          placeholder="Password"
        />
        <button onClick={this.loginAttempt} className="login-button" />
      </form>
    );
  }
}

export default Login;
