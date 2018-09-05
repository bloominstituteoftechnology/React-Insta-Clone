import React from 'react';
import Login from '../Login/Login';

const Authenticate = (App, cb) =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
      };
    }

    render() {
      console.log('authenticate', cb);
      return this.state.loggedIn ? <App /> : <Login />;
    }
  };

export default Authenticate;
