import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  loginHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  login = event => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <form>
        <input
          placeholder="Username"
          value={this.state.username}
          onChange={this.loginHandler}
          name="username"
        />
        <input
          placeholder="Password"
          value={this.state.password}
          onChange={this.loginHandler}
          name="password"
        />
        <button onClick={this.login}>Login</button>
      </form>
    );
  }
}

export default Login;
