import React from "react";
import Login from "../Login/Login";

const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: null
      };
    }
    componentDidMount() {
      this.setState();
    }
    render() {
      if (this.state.loggedIn === true) {
        return <App />;
      } else {
        return <Login />;
      }
    }
  };

export default Authenticate;
