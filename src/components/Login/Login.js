import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      login: ""
    };
  }
  loginHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  login = event => {
    localStorage.setItem(this.state.name, this.state.login);
  };
  render() {
    return (
      <form>
        <input
          placeholder="Username"
          value={this.state.name}
          onChange={this.loginHandler}
          name="username"
        />
        <input
          placeholder="Password"
          value={this.state.login}
          onChange={this.loginHandler}
          name="login"
        />
        <button onClick={this.login}>Login</button>
      </form>
    );
  }
}

export default Login;
