import React from 'react';
import LoginPage from '../Login/Login';

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
        this.setState({ loggedIn: true });
    }
    render() {
      if (this.state.loggedIn) {
          return <App />
      }
      else {
        return <LoginPage />
      }
    }
  };

export default Authenticate;