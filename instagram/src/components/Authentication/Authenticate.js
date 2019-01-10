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
        error: ""
      };
    }
    signIn = (e, user, pass) => {
      e.preventDefault();
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("user", user);
      status = localStorage.getItem("loggedIn");
      if (pass.length > 0 && user.length > 0) {
        this.setState({
          loggedIn: status
        });
      } else {
        this.setState({
          error: <div>username or password field is empty</div>
        });
      }
    };
    render() {
      return this.state.loggedIn === "true" ? (
        <ReactComponent />
      ) : this.state.loggedIn === "false" ? (
        <>
          <LoginPage signIn={this.signIn} />
          {this.state.error}
        </>
      ) : (
        <>
          <LoginPage signIn={this.signIn} />
          {this.state.error}
        </>
      );
    }
  };
};
export default Authenticate;
