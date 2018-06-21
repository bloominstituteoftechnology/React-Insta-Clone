import React from 'react';
import './Login.css';

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleUsername = event => {
    this.setState({ username: event.target.value });
  }

  handlePassword = event => {
    this.setState({ password: event.target.value });
  }

  login = () => {
    localStorage.setItem("username", this.state.username);
    localStorage.setItem("password", this.state.password);
    window.location.reload();
  }

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.login}>
          <img src="iglogo.png" alt="Logo." className="login-logo" />
          <input type="text"
                 placeholder="Username"
                 value={this.state.username}
                 onChange={this.handleUsername} />
          <input type="text"
                 placeholder="Password"
                 value={this.state.password}
                 onChange={this.handlePassword} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
