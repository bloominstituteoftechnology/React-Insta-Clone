import React from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
      };
    }

    componentDidMount() {
      if (localStorage.getItem('user')) this.setState({ loggedIn: true });
    }

    render() {
      if (this.state.loggedIn) return <App />;
      return <Login />;
    }
  };

export default Authenticate;

/*
  Inside of Authenticate we need to add a constructor to hold our state data.
  On state we need a user loggedIn boolean flag.
  On componentDidMount we need to check localStorage to see if a user is logged in.
  Inside of the render function we will check if a user is logged in
  If a user is logged in we will return the <App />, else we will return the <LoginPage>
*/
