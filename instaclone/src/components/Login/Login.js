import React from "react";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleLoginSubmit = e => {
    localStorage.setItem("user", this.state.username);
    window.location.reload();
  };
  render() {
    return (
      <div className="loginPage">
        <img src="https://i.imgur.com/K0GVTfd.png" alt="" />
        <form className="loginForm">
          <h2>
            Welcome To <br /> React-Insta-Clone
          </h2>
          <p>Sign up to see photos and videos from your friends</p>
          <input type="submit" value="Log in with Facebook" />
          <hr />
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleInputChange}
            value={this.state.username}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleInputChange}
            value={this.state.password}
          />
          <input
            type="submit"
            value="Sign up"
            onClick={this.handleLoginSubmit}
          />
        </form>
      </div>
    );
  }
}

export default Login;
