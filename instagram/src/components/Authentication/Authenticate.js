import React, { Component } from "react";
import Login from "../Login/Login";

const Authenticate = App =>
  class Authenticate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        username: "",
        password: ""
      };
    }

    componentDidMount() {
      
    }

    onChangeUserName = e => {
      this.setState({
        username: e.target.value,
      });
    }

    render() {
      return (
          <App />
      )
    }
  };

export default Authenticate;
