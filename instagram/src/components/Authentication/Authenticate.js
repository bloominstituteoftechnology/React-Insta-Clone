import React from "react";
import Login from '../Login/Login';

const Authenticate = App =>
  class extends React.Component {
    state = {
      loggedIn: false,
      username: ""
    }

    componentDidMount() {
      if (window.localStorage.getItem("loggedIn")) {
        this.setState({
          loggedIn: JSON.parse(window.localStorage.getItem("loggedIn"))
        });
      } else {
        window.localStorage.setItem("loggedIn", true);
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
