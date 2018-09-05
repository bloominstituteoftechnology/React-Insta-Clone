import React from 'react';
import Login from '../Login/Login';

const Authenticate = (App) =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
      };
    }

    render() {
      console.log('authenticate');
      return this.state.loggedIn ? <App /> : <Login />;
    }
  };

export default Authenticate;
