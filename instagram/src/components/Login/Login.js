import React from "react";

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
      <>
        <p>Username</p>
        <input type="text" defaultValue="" onChange={this.userChange} />
        <p>Password</p>
        <input type="text" defaultValue="" onChange={this.passwordChange} />
        <div onClick={this.submitHandler}>Submit</div>
      </>
    );
  }
}

export default Login;
