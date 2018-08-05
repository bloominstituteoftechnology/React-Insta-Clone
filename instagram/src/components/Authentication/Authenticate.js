import React from 'react';
import Login from '../Login/Login.js';

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        username: localStorage.user
      }
    }

  componentDidMount () {
    if (!localStorage.getItem('user')) {
      this.setState({loggedIn: false});
    } else {
      this.setState({loggedIn: true});
    }
  }

  render() {
    if (this.state.loggedIn === true) {return <App />}
    return <Login />
  }
};

export default Authenticate;
