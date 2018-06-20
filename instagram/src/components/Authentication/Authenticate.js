import React from "react";
import Login from '../Login/Login';
import App from '../../App.js';

const Authenticate = App =>
  class extends React.Component {
    state = {
      loggedIn: false
    }

    componentDidMount() {
      if (window.localStorage.getItem("loggedIn")) {
        this.setState({
          loggedIn: JSON.parse(window.localStorage.getItem("loggedIn"))
        });
      } else {
        window.localStorage.setItem("loggedIn", JSON.stringify(this.state.loggedIn));
      }
    }

    render() {
      if (this.state.loggedIn) {
        return (
          <App />
        );
      } else {
        return (
          <Login loggedIn={this.state.loggedIn} />
        );
      }
    }
  };

export default Authenticate;
