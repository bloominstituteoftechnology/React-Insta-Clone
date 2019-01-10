import React from "react";
import LoginPage from "../LoginPage/LoginPage";

localStorage.setItem("loggedIn", false);
let status = localStorage.getItem("loggedIn");

const Authenticate = ReactComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: status,
        name: "",
        password: ""
      };
    }
    signIn = (e, user, pass) => {
      e.preventDefault();
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("user", user);
      status = localStorage.getItem("loggedIn");
      this.setState({
        loggedIn: status
      });
    };
    render() {
      return this.state.loggedIn === "true" ? (
        <ReactComponent />
      ) : this.state.loggedIn === "false" ? (
        <LoginPage signIn={this.signIn} />
      ) : (
        <LoginPage signIn={this.signIn} />
      );
    }
  };
};
export default Authenticate;
