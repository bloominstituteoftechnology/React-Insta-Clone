import React, { Component } from 'react';
import Login from '../Login/Login';
import App from '../../App';

const Authenticate = App =>
  class extends Component {
    constructor() {
      super();
      this.state = {
        loggedIn: null
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
