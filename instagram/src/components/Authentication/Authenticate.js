import React from 'react';
import Login from '../Login/Login.js';

const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
      }
    }

    componentDidMount() {
      localStorage.getItem("username") ? this.setState({loggedIn: true}) : null
    }
    render() {
      return (
        this.state.loggedIn ? <App /> : <Login />
      )
    }
  };
  
export default Authenticate;
