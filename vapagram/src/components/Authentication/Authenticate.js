import React, { Component } from 'react';
import Login from '../Login/Login';
// import './Authenticate.css';
// import PostsPage from './components/PostsContainer/PostsPage';

const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: true
      };
    }
    // set up our state so that we have some conditional logging
    render() {
      // if user is logged in... render app
      if (this.state.loggedIn) {
        return (
          <div>
            <App />
          </div>
        );
      }
    }
  };

export default Authenticate;
