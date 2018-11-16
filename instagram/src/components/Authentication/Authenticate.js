import React from "react";
import LoginPage from "../Login/Login";

const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        logged: false
      };
    }
    handleLogIn = e => {
      this.setState({ logged: true });
    };
    render() {
      if (this.state.logged) {
        return <App />;
      } else {
        return <LoginPage handleLogIn={this.handleLogIn} />;
      }
    }
  };

export default Authenticate;
