import React from "react";
import Login from '../Login/Login';

const Authentication = App => {
  return class AuthenticationClass extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      }
    }

    componentDidMount() {
      if (localStorage.getItem('username')) {
        this.setState({loggedIn: true})
      }
    }

    render() {
      if (this.state.loggedIn) {
        return <App />
      }
      return <Login />;
    }
  };
};

export default Authentication;
