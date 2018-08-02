import React, { Component } from "react";
import "./Login.css";
import textLogo from "../../assets/insta-text-logo.svg";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  // handle input chnages  //handles the commment input
  //   commentInputHandler = event => {
  //     this.setState({ comment: event.target.value });
  //   };

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  // handle submit
  submitHandler = () => {
    const theUsersName = this.state.username;
    localStorage.setItem("userKey", theUsersName);
    window.location.reload();
  };

  render() {
    return (
        <div className="login-container">
          <form className="login-form">
          <div className="login-image-group">
            <img
              alt="instagram logo"
              src={textLogo}
              className="login-text-logo"
            />
          </div>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.inputHandler}
              className="login-input"
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.inputHandler}
              className="login-input"
            />
            <button className="login-button" onClick={this.submitHandler}>Log In</button>
          </form>
          {/* <div className="no-account">
          <span>Don't have an account? <span className="sign-up-text">Sign up</span></span>
          </div> */}
          </div>
    );
  }
}

export default Login;
