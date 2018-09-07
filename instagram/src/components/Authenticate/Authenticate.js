import React, { Component } from "react";
import App from "../../App";
import Login from "../Login/Login";
import styled from "styled-components"
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'

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
        <ThemeProvider theme={theme}>
          <Login    
        />
        </ThemeProvider>
        
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
