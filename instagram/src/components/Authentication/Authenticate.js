import React from "react";
import LoginPage from "../LoginPage/LoginPage";

let status = localStorage.getItem("loggedIn");

const Authenticate = ReactComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { loggedIn: status };
    }
    signIn = () => {
      localStorage.setItem("loggedIn", true);
      status = localStorage.getItem("loggedIn");
      this.setState({
        loggedIn: status
      });
      console.log(this.state.loggedIn);
    };
    render() {
      return this.state.loggedIn === "true" ? (
        <ReactComponent />
      ) : this.state.loggedIn === "false" ? (
        <LoginPage signIn={this.signIn} />
      ) : null;
    }
  };
};
export default Authenticate;
