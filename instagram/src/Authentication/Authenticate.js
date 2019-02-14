import React from 'react';
import Login from '../Components/Login/Login.js';
//import App from './App.js';

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

  logOut = () => {
    console.log('clicking to log out')
    localStorage.removeItem('username')
    this.setState({
      loggedIn: false,
    })
  }

    render() {
      return this.state.loggedIn ? <App logOut={this.logOut}/> : <Login /> ;

    }
  };

export default Authenticate;