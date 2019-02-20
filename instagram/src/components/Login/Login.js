import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      password: ""
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  loginFunction = event => {
    event.preventDefault();
    localStorage.setItem("username", this.state.userInput);
    window.location.reload();
  };

  render() {
    return (
      <div className="loginPage">
        <input
          placeholder="username"
          onChange={this.changeHandler}
          name="userInput"
          type="text"
          value={this.state.userInput}
        />
        <br />
        <input placeholder="password" type="password" />
        <button onClick={this.loginFunction}>Login</button>
      </div>
    );
  }
}

export default Login;
