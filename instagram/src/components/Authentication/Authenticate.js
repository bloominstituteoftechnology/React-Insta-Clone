import React, { Component } from "react";
import Login from "../Login/login";

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        online: false,
        constuser: "test",
        constpass: "test123",
        tempuser: "",
        temppass: ""
      };
    }

    loginHandler = e => {
      e.preventDefault();
      if (
        this.state.constuser === this.state.tempuser &&
        this.state.constpass === this.state.temppass
      ) {
        this.setState(prevState => {
          return { online: !prevState.online };
        });
        alert("You are now logged in!");
      } else {
        alert("Incorrect username or Password");
      }
    };

    userHandler = e => {
      this.setState({ tempuser: e.target.value });
      console.log(this.state.tempuser);
    };

    passHandler = e => {
      this.setState({ temppass: e.target.value });
      console.log(this.state.temppass);
    };

    render() {
      if (this.state.online) {
        return <App />;
      } else {
        return (
          <Login
            loggedin={this.loginHandler}
            user={this.userHandler}
            pass={this.passHandler}
          />
        );
      }
    }
  };

export default Authenticate;
