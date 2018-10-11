import React from "react";
import "./Login.css";
import { Button } from "reactstrap";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputUser: "",
      inputPassword: ""
    };
  }

  userChange = event => {
    this.setState({
      inputUser: event.target.value
    });
  };
  passwordChange = event => {
    this.setState({
      inputPassword: event.target.value
    });
  };
  submitHandler = () => {
    if (
      `${this.state.inputUser}` !== "" &&
      `${this.state.inputPassword}` !== ""
    ) {
      localStorage.setItem("username", `${this.state.inputUser}`);
      localStorage.setItem("password", `${this.state.inputPassword}`);
      window.location.reload();
    } else {
      alert("Please enter username and password");
    }
  };
  render() {
    return (
      <div className="login-page">
        <h1>InstaClone Login</h1>
        <div className="login-input">
          <p>Username</p>
          <input type="text" defaultValue="" onChange={this.userChange} />
        </div>
        <div className="login-input">
          <p>Password</p>
          <input type="text" defaultValue="" onChange={this.passwordChange} />
        </div>
        <div className="login-button">
          <Button color="info" outline onClick={this.submitHandler}>
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
