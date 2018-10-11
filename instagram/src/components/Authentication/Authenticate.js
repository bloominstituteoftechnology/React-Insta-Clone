import React, { Component } from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        authenticated: false,
      };
    }

    componentDidMount() {
      if (!!localStorage.getItem('username') && !!localStorage.getItem('password'))
        this.setState({ authenticated: true });
    }

    render() {
      if (this.state.authenticated)
        return <App />;
      return <Login />;
    }
  };

export default Authenticate;
