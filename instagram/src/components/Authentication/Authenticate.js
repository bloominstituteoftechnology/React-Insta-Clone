import React from "react";
import LoginPage from "../LoginPage/LoginPage";

window.localStorage.setItem("loggedIn", false);
let status = window.localStorage.getItem("loggedIn");

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
      window.localStorage.setItem("loggedIn", true);
      window.localStorage.setItem("user", user);
      status = window.localStorage.getItem("loggedIn");
      if (pass.length > 0 && user.length > 0) {
        if (user.length <= 12) {
          this.setState({
            loggedIn: status
          });
        } else {
          this.setState({
            error: <div>username is too long</div>
          });
        }
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
          <div className="error">{this.state.error}</div>
          <LoginPage signIn={this.signIn} />
        </>
      ) : (
        <>
          <div className="error">{this.state.error}</div>
          <LoginPage signIn={this.signIn} />
        </>
      );
    }
  };
};
export default Authenticate;
