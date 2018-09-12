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
    this.setState({});
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
        <button className="login-button" />
      </form>
    );
  }
}

export default Login;
