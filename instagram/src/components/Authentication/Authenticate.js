import React from "react";
import LoginPage from "../LoginPage/Login";
// import App from "../../App/App";

const authenticate = HOCApp =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { loggedIn: false };
    }
    componentDidMount() {
      console.log("component did mount");
      let user = localStorage.getItem("user");
      console.log(user);
      if (localStorage.getItem("user")) {
        console.log("username found");
        console.log(localStorage);
        this.setState(
          { loggedIn: true },
          console.log("loggedIn: " + this.state.loggedIn)
        );
      } else {
        console.log("username was not found");
        console.log(localStorage);
        this.setState(
          { loggedIn: false },
          console.log("loggedIn: " + this.state.loggedIn)
        );
      }
    }
    render() {
      //return <HOCApp />;
      //condition ? expr1 : expr2
      return this.state.loggedIn ? <HOCApp /> : <LoginPage />;
    }
  };

export default authenticate;
