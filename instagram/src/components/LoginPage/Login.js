import React from "react";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = { inputText: "" };
  }

  login(event) {
    event.preventDefault();
    let username = this.state.inputText;
    localStorage.setItem("username", username);
    //location.reload();
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ inputText: event.target.value });
  }

  render() {
    return (
      <form
        onSubmit={e => {
          this.login(e);
        }}
        className="login-form"
      >
        <input
          value={this.state.inputText}
          type="text"
          placeholder="username"
          onChange={event => {
            this.handleChange(event);
          }}
        />
        <input type="text" placeholder="password" />
        <button>Login</button>
      </form>
    );
  }
}

export default LoginPage;
