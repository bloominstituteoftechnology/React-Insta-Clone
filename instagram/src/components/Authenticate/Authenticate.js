import React, { Component } from "react";
import App from "../../App";
import Login from "../Login/Login";

const Authenticate = Component =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedin: false,        
      };
    }

    render() {
        
      return localStorage.getItem("username") &&
        localStorage.getItem("password") &&
        this.state.loggedin ? (
        <Component />
      ) : (
        <Login       
        />
      );
    }

    componentDidMount() {      
      if(localStorage.getItem("username") &&
      localStorage.getItem("password")){
        this.setState({
          loggedin: true,
        })
      }else {
        this.setState({
          loggin: false,
        })
      }      
    }
  };

export default Authenticate;
