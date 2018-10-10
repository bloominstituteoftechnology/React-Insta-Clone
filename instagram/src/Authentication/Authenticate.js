import React from "react";
import Login from "../components/Login/Login.js";

const Authenticate = App => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
        inputUser: "",
        inputPassword: ""
      };
    }
    componentDidMount() {
      if (
        !!localStorage.getItem("username") &&
        !!localStorage.getItem("password")
      ) {
        this.setState({
          loggedIn: true
        });
      }
    }
    logoutHandler = () => {
      localStorage.clear();
      this.setState({
        loggedIn: false
      });
    };
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
        this.setState({
          loggedIn: true
        });
      } else {
        alert("Please enter username and password");
      }
    };
    render() {
      if (this.state.loggedIn) {
        return <App logoutHandler={this.logoutHandler} />;
      } else
        return (
          <Login
            submitHandler={this.submitHandler}
            userChange={this.userChange}
            passwordChange={this.passwordChange}
          />
        );
    }
  };
};

export default Authenticate;
