import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  setSN = event => {
    if (event.target.value) {
      this.setState({ username: event.target.value });
    }
  };

  setPW = event => {
    if (event.target.value) {
      this.setState({ password: event.target.value });
    }
  };

  login = event => {
    if (this.state.username) {
      localStorage.setItem("currentSN", this.state.username);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <p>Username:</p>
          <input name="username" onChange={this.setSN} />
          <p>Password:</p>
          <input name="password" onChange={this.setPW} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
