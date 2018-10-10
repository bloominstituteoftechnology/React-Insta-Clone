import React from "react";
import Login from "../components/Login/Login.js";

const Authenticate = App => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      if (!!localStorage.getItem("username")) {
        this.setState({
          loggedIn: true
        });
      }
    }
    render() {
      if (this.state.loggedIn) {
        return <App />;
      } else return <Login />;
    }
  };
};

export default Authenticate;
