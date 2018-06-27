import React from "react";
import "./Login.css";
import { Button } from "react-bulma-components/full";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  changeText = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  startLogin = () => {
    localStorage.setItem("username", this.state.username);
    localStorage.setItem("password", this.state.password);
    window.location.reload(false);
  };
  render() {
    return (
      <div className="login-container">
        <form
          className="login__form"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          {/* Username */}
          <input
            type="text"
            className="login__helpers login__username"
            name="username"
            placeholder="username"
            onChange={e => {
              this.changeText(e);
            }}
          />
          {/* Password */}
          <input
            type="text"
            className="login__helpers login__password"
            name="password"
            placeholder="password"
            onChange={e => {
              this.changeText(e);
            }}
          />
          <Button color="primary" onClick={this.startLogin}>
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
