import React from "react";
import "./Login.css";
import { Alert, Button } from "reactstrap";
import SearchBar from "../SearchBar/SearchBar";

//Define and style components

//const LogoImg = SearchBar.LogoImg;

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = { inputText: "" };
  }

  login(event) {
    event.preventDefault();
    let username = this.state.inputText;
    localStorage.setItem("user", username);
    window.location.reload();
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
        {/* <LogoImg /> */}
        <h2>Instagram Clone</h2>
        <input
          value={this.state.inputText}
          type="text"
          placeholder="username"
          onChange={event => {
            this.handleChange(event);
          }}
        />
        <input name="password" type="password" placeholder="password" />
        <Button color="primary">Login</Button>
      </form>
    );
  }
}

export default LoginPage;
