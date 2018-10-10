import React, { Component } from 'react';
import Login from '../Login/Login';


const Authenticate = App =>
  class extends Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount = () => {
      if (!!localStorage.getItem('username')) {
        this.setState({
          loggedIn: (!!localStorage.getItem('username'))
        })
      }
    }
    render() {
      const {loggedIn} = this.state;
      return(
        loggedIn ? <App /> : <Login />
      )
      }
    }


  export default Authenticate;
