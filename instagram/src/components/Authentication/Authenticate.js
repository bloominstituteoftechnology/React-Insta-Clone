import React from 'react';

import Login from '../Login/Login';

const Authenticate = (App) =>
  class extends React.Component {
    state = {
      auth: false,
    };

    componentDidMount = () => {
      this.checkAuth();
    };

    checkAuth = () => {
      if (localStorage.getItem('username')) {
        this.setState({ auth: true });
      } else {
        this.setState({ auth: false });
      }
    };

    render() {
      if (this.state.auth) {
        return <App />;
      }
      return <Login />;
    }
  };

export default Authenticate;
