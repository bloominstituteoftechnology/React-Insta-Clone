import React from "react";
import Login from '../Login/Login';
import App from '../../App';

const Auth = App =>
  class extends React.Component {
    state = {
      authenticated: true
    }

    componentDidMount() {
      if (window.localStorage.getItem("authenticated")) {
        this.setState({
          authenticated: JSON.parse(window.localStorage.getItem("authenticated"))
        });
      } else {
        window.localStorage.setItem("authenticated", JSON.stringify(this.state.authenticated));
      }
    }

    render() {
      if (this.state.authenticated) {
        return (
          <App />
        );
      } else {
        return (
          <Login authenticated={this.state.authenticated} />
        );
      }
    }
  };

export default Auth;