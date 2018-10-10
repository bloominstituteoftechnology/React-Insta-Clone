import React from 'react';
import LoginPage from './../Login/LoginPage.js';

const Authenticate = PassedComponent =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { loggedIn: true };
    }

    componentDidMount() {
      if (
        localStorage.getItem('user') === 'jesse' &&
        localStorage.getItem('password') === 'password'
      ) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    }

    render() {
      if (this.state.loggedIn) {
        return <PassedComponent />;
      }
      return <LoginPage />;
    }
  };

export default Authenticate;
