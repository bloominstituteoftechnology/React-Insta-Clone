import React, { Component } from 'react';
import Login from '../components/Login/Login';

const Authenticate = App =>
  class extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false
        };
      }

   
  componentDidMount(){
    const storedUsername = JSON.parse(localStorage.getItem('username'));
    if (storedUsername){
      this.setState({loggedIn: true})
    } 
  }   

    render() {
      return this.state.loggedIn ? <App /> : <Login /> ;

    }
  };

export default Authenticate;
