import React from "react";
import Login from '../Login/Login';

const Auth = App =>
class extends React.Component {
  state = {
    authenticated: false,
    username: ""
  }

  componentDidMount() {
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
      this.setState({
        authenticated: true, username: localStorage.getItem('username')
      });
    } else {
      this.setState({
        authenticated: false
      });
    }
  }
  
  render() {
    if (this.state.authenticated) {
      return (
        <App />
      );
    } else {
      return (
        <Login />
      );
    }
  }
};

export default Auth;
