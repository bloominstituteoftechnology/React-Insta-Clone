import React from "react";
import Login from '../Login/Login';

const Authenticate = App =>
  class extends React.Component {
    state = {
      loggedIn: false,
      username: ""
    }

    componentDidMount() {
      if (localStorage.getItem('username') && localStorage.getItem('password')) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    }

    render() {
      if (this.state.loggedIn) {
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

export default Authenticate;
