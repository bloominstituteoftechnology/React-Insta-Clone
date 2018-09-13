import React from 'react';
import LoginPage from '../Login/LoginPage.js';

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        user: ''
      };
    }
    componentDidMount() {
      if (!localStorage.getItem('user')) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true,
                        user: localStorage.getItem('user')
        });
      }
    }
    render() {
      if (this.state.loggedIn) return <App />;
      return <LoginPage />
    }
  };

export default Authenticate;
