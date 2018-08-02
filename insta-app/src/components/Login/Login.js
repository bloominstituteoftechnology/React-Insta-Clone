import React, { Component } from "react";
import "./Login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup:"",
      signuppass:"", 
      name: "",
      email:"", 
      username: "",
      password: ""
    };
  }
  handleLoginInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmitInput = e => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <div className="signup-login-page">
        <div>
          <form className="login-box">
            <input
              className="input-login"
              type="text"
              placeholder="                       Username"
              name="username"
              onChange={this.handleLoginInput}
              value={this.state.username}
            />
            <input
              className="input-login"
              type="text"
              placeholder="                       Password"
              name="password"
              onChange={this.handleLoginInput}
              value={this.state.password}
            />
            <button onClick={this.handleSubmitInput} className="login-btn">
              Log in
            </button>
          </form>
        </div>
        {/* Only refrence what is above cause that works with the logging into the app */}
        <div>
          <form className="signup-box">
          <input
              type="text"
              name="name"
              className="sign-user"
              placeholder="                        Full Name"
              onChange={this.handleLoginInput}
              value={this.state.name}
            />
            <input
              type="text"
              name="email"
              className="sign-user"
              placeholder="                        E-mail"
              onChange={this.handleLoginInput}
              value={this.state.email}
            />
             <input
              type="text"
              name="signup"
              className="sign-user"
              placeholder="                        Username"
              onChange={this.handleLoginInput}
              value={this.state.signup}
            />
            <input
              type="text"
              name="signuppass"
              className="sign-user"
              placeholder="                        Password"
              onChange={this.handleLoginInput}
              value={this.state.signuppass}
            />
            <button onClick={this.handleSubmitInput} className="signup-btn">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
