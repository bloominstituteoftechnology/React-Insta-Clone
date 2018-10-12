import React from "react";

import "./LoginPage.css";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  login = () => {
    //save username and password to state
    localStorage.setItem("username", this.state.username);
    //change state
    this.setState({
      username: "",
      password: ""
    });
  };

  changeHandler = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    return (
      <div className="login-page">
        <h1>Instgram</h1>
        <p>Login to see fake posts from fake people.LOL</p>
        <form className="login-form" onSubmit={this.login}>
          <input
            type="text"
            className="login-username"
            placeholder="Username"
            onChange={event =>
              this.changeHandler("username", event.target.value)
            }
            value={this.state.username}
          />
          <input
            type="text"
            className="login-password"
            placeholder="Password"
            onChange={event =>
              this.changeHandler("password", event.target.value)
            }
            value={this.state.password}
          />
          <button className="login-button">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;