import React from 'react';
import LoginPage from './../Login/LoginPage.js';

const Authenticate = PassedComponent =>
  class extends React.Component {
    constructor() {
      super();
      this.state = { loggedIn: false };
    }
    render() {
      if (this.state.loggedIn) {
        return <PassedComponent />;
      }
      return <LoginPage />;
    }
  };

export default Authenticate;
