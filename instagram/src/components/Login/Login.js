import React from "react";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      input: "",
      password: ""
    };
  }

  usernameInput = event => {
    this.setState({
      input: event.target.value,
      username: event.target.value
    });
  };

  passwordInput = event => {
    this.setState({
      password: event.target.value
    });
  };

  login = event => {
    event.preventDefault();
    this.props.updateLogin(this.state.username);
    window.location.reload();
  };

  render() {
    return (
      <div className="loginContainer">
        <div className="formContainer">
          <div className={"logoTitle"}>Instagram</div>
          <form className="loginForm">
            <input
              value={this.state.input}
              onChange={this.usernameInput}
              placeholder="username"
            />
            <input
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.passwordInput}
            />
            <button type="submit" onClick={this.login}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
